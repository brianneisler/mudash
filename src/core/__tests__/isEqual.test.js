import 'babel-polyfill'
import _ from 'lodash'
import { expect } from 'chai'
import Immutable from 'immutable'
import mudash from '../../'
import { isEqual } from '../'
import { setupTest } from './util'

describe('isEqual', function() {

  const {
    Array,
    Map,
    Object: _Object,
    Set,
    Symbol,
    args,
    arrayViews,
    create,
    defineProperty,
    isNpm,
    map,
    noop,
    promise,
    realm,
    root,
    set,
    stubFalse
  } = setupTest()

  const symbol1 = Symbol ? Symbol('a') : true
  const symbol2 = Symbol ? Symbol('b') : false

  it('should compare primitives', function() {
    const pairs = [
      [1, 1, true], [1, _Object(1), true], [1, '1', false], [1, 2, false],
      [-0, -0, true], [0, 0, true], [0, _Object(0), true], [_Object(0), _Object(0), true], [-0, 0, true], [0, '0', false], [0, null, false],
      [NaN, NaN, true], [NaN, _Object(NaN), true], [_Object(NaN), _Object(NaN), true], [NaN, 'a', false], [NaN, Infinity, false],
      ['a', 'a', true], ['a', _Object('a'), true], [_Object('a'), _Object('a'), true], ['a', 'b', false], ['a', ['a'], false],
      [true, true, true], [true, _Object(true), true], [_Object(true), _Object(true), true], [true, 1, false], [true, 'a', false],
      [false, false, true], [false, _Object(false), true], [_Object(false), _Object(false), true], [false, 0, false], [false, '', false],
      [symbol1, symbol1, true], [symbol1, _Object(symbol1), true], [_Object(symbol1), _Object(symbol1), true], [symbol1, symbol2, false],
      [null, null, true], [null, undefined, false], [null, {}, false], [null, '', false],
      [undefined, undefined, true], [undefined, null, false], [undefined, '', false]
    ]

    const expected = _.map(pairs, (pair) => pair[2])
    const actual = _.map(pairs, (pair) => isEqual(pair[0], pair[1]))
    expect(actual).to.deep.equal(expected)
  })

  it('should compare arrays', function() {
    let array1 = [true, null, 1, 'a', undefined]
    let array2 = [true, null, 1, 'a', undefined]

    expect(isEqual(array1, array2)).to.be.true

    array1 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }]
    array2 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }]

    expect(isEqual(array1, array2)).to.be.true

    array1 = [1]
    array1[2] = 3

    array2 = [1]
    array2[1] = undefined
    array2[2] = 3

    expect(isEqual(array1, array2)).to.be.true

    array1 = [_Object(1), false, _Object('a'), /x/, new Date(2012, 4, 23), ['a', 'b', [_Object('c')]], { 'a': 1 }, Immutable.Map({ 'b': 2}), Immutable.List(['c'])]
    array2 = [1, _Object(false), 'a', /x/, new Date(2012, 4, 23), ['a', _Object('b'), ['c']], { 'a': 1 }, Immutable.Map({ 'b': 2}), Immutable.List(['c'])]

    expect(isEqual(array1, array2)).to.be.true

    array1 = [1, 2, 3]
    array2 = [3, 2, 1]

    expect(isEqual(array1, array2)).to.be.false

    array1 = [1, 2]
    array2 = [1, 2, 3]

    expect(isEqual(array1, array2)).to.be.false
  })

  it('should treat arrays with identical values but different non-index properties as equal', function() {
    let array1 = [1, 2, 3]
    let array2 = [1, 2, 3]

    array1.every = array1.filter = array1.forEach =
    array1.indexOf = array1.lastIndexOf = array1.map =
    array1.some = array1.reduce = array1.reduceRight = null

    array2.concat = array2.join = array2.pop =
    array2.reverse = array2.shift = array2.slice =
    array2.sort = array2.splice = array2.unshift = null

    expect(isEqual(array1, array2)).to.be.true

    array1 = [1, 2, 3]
    array1.a = 1

    array2 = [1, 2, 3]
    array2.b = 1

    expect(isEqual(array1, array2)).to.be.true

    array1 = /c/.exec('abcde')
    array2 = ['c']

    expect(isEqual(array1, array2)).to.be.true
  })

  it('should compare sparse arrays', function() {
    const array = Array(1)

    expect(isEqual(array, Array(1))).to.be.true
    expect(isEqual(array, [undefined])).to.be.true
    expect(isEqual(array, Array(2))).to.be.false
  })

  it('should compare plain Objects', function() {
    let Object1 = { 'a': true, 'b': null, 'c': 1, 'd': 'a', 'e': undefined }
    let Object2 = { 'a': true, 'b': null, 'c': 1, 'd': 'a', 'e': undefined }

    expect(isEqual(Object1, Object2)).to.be.true

    Object1 = { 'a': [1, 2, 3], 'b': new Date(2012, 4, 23), 'c': /x/, 'd': { 'e': 1 } }
    Object2 = { 'a': [1, 2, 3], 'b': new Date(2012, 4, 23), 'c': /x/, 'd': { 'e': 1 } }

    expect(isEqual(Object1, Object2)).to.be.true

    Object1 = { 'a': 1, 'b': 2, 'c': 3 }
    Object2 = { 'a': 3, 'b': 2, 'c': 1 }

    expect(isEqual(Object1, Object2)).to.be.false

    Object1 = { 'a': 1, 'b': 2, 'c': 3 }
    Object2 = { 'd': 1, 'e': 2, 'f': 3 }

    expect(isEqual(Object1, Object2)).to.be.false

    Object1 = { 'a': 1, 'b': 2 }
    Object2 = { 'a': 1, 'b': 2, 'c': 3 }

    expect(isEqual(Object1, Object2)).to.be.false
  })

  it('should compare Objects regardless of key order', function() {
    const Object1 = { 'a': 1, 'b': 2, 'c': 3 }
    const Object2 = { 'c': 3, 'a': 1, 'b': 2 }

    expect(isEqual(Object1, Object2)).to.be.true
  })

  it('should compare nested Objects', function() {
    const Object1 = {
      'a': [1, 2, 3],
      'b': true,
      'c': _Object(1),
      'd': 'a',
      'e': {
        'f': ['a', _Object('b'), 'c'],
        'g': _Object(false),
        'h': new Date(2012, 4, 23),
        'i': noop,
        'j': 'a',
        'k': Immutable.Map({
          'a': 1
        }),
        'l': Immutable.List([1, 2, 3])
      },
      'm': Immutable.List([1, 2, 3]),
      'n': Immutable.Map({}),
      'o': Immutable.Map({
        'f': ['a', _Object('b'), 'c'],
        'g': _Object(false),
        'h': new Date(2012, 4, 23),
        'i': noop,
        'j': 'a',
        'k': Immutable.Map({
          'a': 1
        }),
        'l': Immutable.List([1, 2, 3])
      })
    }

    const Object2 = {
      'a': [1, _Object(2), 3],
      'b': _Object(true),
      'c': 1,
      'd': _Object('a'),
      'e': {
        'f': ['a', 'b', 'c'],
        'g': false,
        'h': new Date(2012, 4, 23),
        'i': noop,
        'j': 'a',
        'k': Immutable.Map({
          'a': 1
        }),
        'l': Immutable.List([1, 2, 3])
      },
      'm': Immutable.List([1, 2, 3]),
      'n': Immutable.Map({}),
      'o': Immutable.Map({
        'f': ['a', 'b', 'c'],
        'g': false,
        'h': new Date(2012, 4, 23),
        'i': noop,
        'j': 'a',
        'k': Immutable.Map({
          'a': 1
        }),
        'l': Immutable.List([1, 2, 3])
      })
    }

    expect(isEqual(Object1, Object2)).to.be.true
  })

  it('should compare Object instances', function() {

    function Foo() {
      this.a = 1
    }
    Foo.prototype.a = 1

    function Bar() {
      this.a = 1
    }
    Bar.prototype.a = 2

    expect(isEqual(new Foo, new Foo)).to.be.true
    expect(isEqual(new Foo, new Bar)).to.be.false
    expect(isEqual({ 'a': 1 }, new Foo)).to.be.false
    expect(isEqual({ 'a': 2 }, new Bar)).to.be.false
  })

  it('should compare Objects with constructor properties', function() {
    expect(isEqual({ 'constructor': 1 },   { 'constructor': 1 })).to.be.true
    expect(isEqual({ 'constructor': 1 },   { 'constructor': '1' })).to.be.false
    expect(isEqual({ 'constructor': [1] }, { 'constructor': [1] })).to.be.true
    expect(isEqual({ 'constructor': [1] }, { 'constructor': ['1'] })).to.be.false
    expect(isEqual({ 'constructor': _Object }, {})).to.be.false
  })

  it('should compare arrays with circular references', function() {

    let array1 = []
    let array2 = []

    array1.push(array1)
    array2.push(array2)

    expect(isEqual(array1, array2)).to.be.true

    array1.push('b')
    array2.push('b')

    expect(isEqual(array1, array2)).to.be.true

    array1.push('c')
    array2.push('d')

    expect(isEqual(array1, array2)).to.be.false

    array1 = ['a', 'b', 'c']
    array1[1] = array1
    array2 = ['a', ['a', 'b', 'c'], 'c']

    expect(isEqual(array1, array2)).to.be.false
  })

  it('should have transitive equivalence for circular references of arrays', function() {
    const array1 = []
    const array2 = [array1]
    const array3 = [array2]

    array1[0] = array1

    expect(isEqual(array1, array2)).to.be.true
    expect(isEqual(array2, array3)).to.be.true
    expect(isEqual(array1, array3)).to.be.true
  })

  it('should compare Objects with circular references', function() {
    let Object1 = {}
    let Object2 = {}

    Object1.a = Object1
    Object2.a = Object2

    expect(isEqual(Object1, Object2)).to.be.true

    Object1.b = 0
    Object2.b = _Object(0)

    expect(isEqual(Object1, Object2)).to.be.true

    Object1.c = _Object(1)
    Object2.c = _Object(2)

    expect(isEqual(Object1, Object2)).to.be.false

    Object1 = { 'a': 1, 'b': 2, 'c': 3 }
    Object1.b = Object1
    Object2 = { 'a': 1, 'b': { 'a': 1, 'b': 2, 'c': 3 }, 'c': 3 }

    expect(isEqual(Object1, Object2)).to.be.false
  })

  it('should have transitive equivalence for circular references of Objects', function() {
    const Object1 = {}
    const Object2 = { 'a': Object1 }
    const Object3 = { 'a': Object2 }

    Object1.a = Object1

    expect(isEqual(Object1, Object2)).to.be.true
    expect(isEqual(Object2, Object3)).to.be.true
    expect(isEqual(Object1, Object3)).to.be.true
  })

  it('should compare Objects with multiple circular references', function() {
    const array1 = [{}]
    const array2 = [{}]

    array1[0].a = array1
    array1.push(array1)
    array2[0].a = array2
    array2.push(array2)

    expect(isEqual(array1, array2)).to.be.true

    array1[0].b = 0
    array2[0].b = _Object(0)

    expect(isEqual(array1, array2)).to.be.true

    array1[0].c = _Object(1)
    array2[0].c = _Object(2)

    expect(isEqual(array1, array2)).to.be.false
  })

  it('should compare Objects with complex circular references', function() {
    const Object1 = {
      'foo': { 'b': { 'c': { 'd': {} } } },
      'bar': { 'a': 2 }
    }

    const Object2 = {
      'foo': { 'b': { 'c': { 'd': {} } } },
      'bar': { 'a': 2 }
    }

    Object1.foo.b.c.d = Object1
    Object1.bar.b = Object1.foo.b

    Object2.foo.b.c.d = Object2
    Object2.bar.b = Object2.foo.b

    expect(isEqual(Object1, Object2)).to.be.true
  })

  it('should compare Objects with shared property values', function() {
    const Object1 = {
      'a': [1, 2]
    }

    const Object2 = {
      'a': [1, 2],
      'b': [1, 2]
    }

    Object1.b = Object1.a

    expect(isEqual(Object1, Object2)).to.be.true
  })

  it('should treat Objects created by `_Object.create(null)` like plain Objects', function() {
    function Foo() {
      this.a = 1
    }
    Foo.prototype.constructor = null

    const Object1 = create(null)
    Object1.a = 1

    const Object2 = { 'a': 1 }

    expect(isEqual(Object1, Object2)).to.be.true
    expect(isEqual(new Foo, Object2)).to.be.false
  })

  it('should avoid common type coercions', function() {
    expect(isEqual(true, _Object(false))).to.be.false
    expect(isEqual(_Object(false), _Object(0))).to.be.false
    expect(isEqual(false, _Object(''))).to.be.false
    expect(isEqual(_Object(36), _Object('36'))).to.be.false
    expect(isEqual(0, '')).to.be.false
    expect(isEqual(1, true)).to.be.false
    expect(isEqual(1337756400000, new Date(2012, 4, 23))).to.be.false
    expect(isEqual('36', 36)).to.be.false
    expect(isEqual(36, '36')).to.be.false
  })

  it('should compare `arguments` Objects', function() {
    const args1 = (function() { return arguments }())
    const args2 = (function() { return arguments }())
    const args3 = (function() { return arguments }(1, 2))

    expect(isEqual(args1, args2)).to.be.true
    expect(isEqual(args1, args3)).to.be.false
  })

  it('should treat `arguments` Objects like `_Object` Objects', function() {
    const Object1 = { '0': 1, '1': 2, '2': 3 }

    function Foo() {}
    Foo.prototype = _Object

    expect(isEqual(args, Object1)).to.be.true
    expect(isEqual(Object1, args)).to.be.true
    expect(isEqual(args, new Foo)).to.be.false
    expect(isEqual(new Foo, args)).to.be.false
  })

  it('should compare array buffers', function() {
    if (ArrayBuffer) {
      const buffer = new Int8Array([-1]).buffer

      expect(isEqual(buffer, new Uint8Array([255]).buffer)).to.be.true
      expect(isEqual(buffer, new ArrayBuffer(1))).to.be.false
    }
  })

  it('should compare array views', function() {
    _.times(2, (index) => {
      const ns = index ? realm : root

      const pairs = _.map(arrayViews, (type, viewIndex) => {
        const otherType = arrayViews[(viewIndex + 1) % arrayViews.length]
        const CtorA = ns[type] || function(n) { this.n = n }
        const CtorB = ns[otherType] || function(n) { this.n = n }
        const bufferA = ns[type] ? new ns.ArrayBuffer(8) : 8
        const bufferB = ns[otherType] ? new ns.ArrayBuffer(8) : 8
        const bufferC = ns[otherType] ? new ns.ArrayBuffer(16) : 16

        return [new CtorA(bufferA), new CtorA(bufferA), new CtorB(bufferB), new CtorB(bufferC)]
      })

      const expected = _.map(pairs, _.constant([true, false, false]))

      const actual = _.map(pairs, (pair) => {
        return [isEqual(pair[0], pair[1]), isEqual(pair[0], pair[2]), isEqual(pair[2], pair[3])]
      })

      expect(actual).to.deep.equal(expected)
    })
  })

  it('should compare buffers', function() {
    if (Buffer) {
      const buffer = new Buffer([1])

      expect(isEqual(buffer, new Buffer([1]))).to.be.true
      expect(isEqual(buffer, new Buffer([2]))).to.be.false
      expect(isEqual(buffer, new Uint8Array([1]))).to.be.false
    }
  })

  it('should compare date Objects', function() {
    const date = new Date(2012, 4, 23)

    expect(isEqual(date, new Date(2012, 4, 23))).to.be.true
    expect(isEqual(new Date('a'), new Date('b'))).to.be.true
    expect(isEqual(date, new Date(2013, 3, 25))).to.be.false
    expect(isEqual(date, { 'getTime': _.constant(+date) })).to.be.false
  })

  it('should compare error Objects', function() {
    const pairs = _.map([
      'Error',
      'EvalError',
      'RangeError',
      'ReferenceError',
      'SyntaxError',
      'TypeError',
      'URIError'
    ], (type, index, errorTypes) => {
      const otherType = errorTypes[++index % errorTypes.length]
      const CtorA = root[type]
      const CtorB = root[otherType]

      return [new CtorA('a'), new CtorA('a'), new CtorB('a'), new CtorB('b')]
    })

    const expected = _.map(pairs, _.constant([true, false, false]))

    const actual = _.map(pairs, (pair) => {
      return [isEqual(pair[0], pair[1]), isEqual(pair[0], pair[2]), isEqual(pair[2], pair[3])]
    })

    expect(actual).to.deep.equal(expected)
  })

  it('should compare functions', function() {
    function a() { return 1 + 2 }
    function b() { return 1 + 2 }

    expect(isEqual(a, a)).to.be.true
    expect(isEqual(a, b)).to.be.false
  })

  it('should compare maps', function() {
    if (Map) {
      _.each([[map, new Map], [map, realm.map]], (maps) => {
        const map1 = maps[0]
        const map2 = maps[1]

        map1.set('a', 1)
        map2.set('b', 2)
        expect(isEqual(map1, map2)).to.be.false

        map1.set('b', 2)
        map2.set('a', 1)
        expect(isEqual(map1, map2)).to.be.true

        map1.delete('a')
        map1.set('a', 1)
        expect(isEqual(map1, map2)).to.be.true

        map2.delete('a')
        expect(isEqual(map1, map2)).to.be.false

        map1.clear()
        map2.clear()
      })
    }
  })

  it('should compare maps with circular references', function() {
    if (Map) {
      const map1 = new Map
      const map2 = new Map

      map1.set('a', map1)
      map2.set('a', map2)
      expect(isEqual(map1, map2)).to.be.true

      map1.set('b', 1)
      map2.set('b', 2)
      expect(isEqual(map1, map2)).to.be.false
    }
  })

  it('should compare promises by reference', function() {
    if (promise) {
      _.each([[promise, Promise.resolve(1)], [promise, realm.promise]], (promises) => {
        const promise1 = promises[0]
        const promise2 = promises[1]

        expect(isEqual(promise1, promise2)).to.be.false
        expect(isEqual(promise1, promise1)).to.be.true
      })
    }
  })

  it('should compare regexes', function() {
    expect(isEqual(/x/gim, /x/gim)).to.be.true
    expect(isEqual(/x/gim, /x/mgi)).to.be.true
    expect(isEqual(/x/gi, /x/g)).to.be.false
    expect(isEqual(/x/, /y/)).to.be.false
    expect(isEqual(/x/g, { 'global': true, 'ignoreCase': false, 'multiline': false, 'source': 'x' })).to.be.false
  })

  it('should compare sets', function() {
    if (Set) {
      _.each([[set, new Set], [set, realm.set]], (sets) => {
        const set1 = sets[0]
        const set2 = sets[1]

        set1.add(1)
        set2.add(2)
        expect(isEqual(set1, set2)).to.be.false

        set1.add(2)
        set2.add(1)
        expect(isEqual(set1, set2)).to.be.true

        set1.delete(1)
        set1.add(1)
        expect(isEqual(set1, set2)).to.be.true

        set2.delete(1)
        expect(isEqual(set1, set2)).to.be.false

        set1.clear()
        set2.clear()
      })
    }
  })

  it('should compare sets with circular references', function() {
    if (Set) {
      const set1 = new Set
      const set2 = new Set

      set1.add(set1)
      set2.add(set2)
      expect(isEqual(set1, set2)).to.be.true

      set1.add(1)
      set2.add(2)
      expect(isEqual(set1, set2)).to.be.false
    }
  })

  it('should compare symbol properties', function() {
    if (Symbol) {
      const Object1 = { 'a': 1 }
      const Object2 = { 'a': 1 }

      Object1[symbol1] = { 'a': { 'b': 2 } }
      Object2[symbol1] = { 'a': { 'b': 2 } }

      defineProperty(Object2, symbol2, {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': 2
      })

      expect(isEqual(Object1, Object2)).to.be.true

      Object2[symbol1] = { 'a': 1 }
      expect(isEqual(Object1, Object2)).to.be.false

      delete Object2[symbol1]
      Object2[Symbol('a')] = { 'a': { 'b': 2 } }
      expect(isEqual(Object1, Object2)).to.be.false
    }
  })

  // it('should compare wrapped values', function() {
  //   const stamp = +new Date
  //
  //   const values = [
  //     [[1, 2], [1, 2], [1, 2, 3]],
  //     [true, true, false],
  //     [new Date(stamp), new Date(stamp), new Date(stamp - 100)],
  //     [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2 }, { 'a': 1, 'b': 1 }],
  //     [1, 1, 2],
  //     [NaN, NaN, Infinity],
  //     [/x/, /x/, /x/i],
  //     ['a', 'a', 'A']
  //   ]
  //
  //   _.each(values, (vals) => {
  //     if (!isNpm) {
  //       let wrapped1 = mudash(vals[0])
  //       let wrapped2 = mudash(vals[1])
  //       let actual = wrapped1.isEqual(wrapped2)
  //
  //       expect(actual).to.be.true
  //       expect(isEqual(mudash(actual), mudash(true))).to.be.true
  //
  //       wrapped1 = mudash(vals[0])
  //       wrapped2 = mudash(vals[2])
  //
  //       actual = wrapped1.isEqual(wrapped2)
  //       expect(actual).to.be.false
  //       expect(isEqual(mudash(actual), mudash(false))).to.be.true
  //     }
  //   })
  // })

  // it('should compare wrapped and non-wrapped values', function() {
  //   if (!isNpm) {
  //     let Object1 = mudash({ 'a': 1, 'b': 2 })
  //     let Object2 = { 'a': 1, 'b': 2 }
  //
  //     expect(Object1.isEqual(Object2)).to.be.true
  //     expect(isEqual(Object1, Object2)).to.be.true
  //
  //     Object1 = mudash({ 'a': 1, 'b': 2 })
  //     Object2 = { 'a': 1, 'b': 1 }
  //
  //     expect(Object1.isEqual(Object2)).to.be.false
  //     expect(isEqual(Object1, Object2)).to.be.false
  //   }
  // })

  it('should work as an iteratee for `_.every`', function() {
    const actual = _.every([1, 1, 1], _.partial(isEqual, 1))
    expect(actual).to.be.true
  })

  //TODO BRN: Fix this test...

  // it('should not error on DOM elements', function() {
  //   if (document) {
  //     const element1 = document.createElement('div')
  //     const element2 = element1.cloneNode(true)
  //
  //     try {
  //       expect(isEqual(element1, element2)).to.be.false
  //     } catch (e) {
  //       expect(false).to.be.true(e.message)
  //     }
  //   }
  // })

  it('should return `true` for like-Objects from different documents', function() {
    if (realm.Object) {
      expect(isEqual([1], realm.array)).to.be.true
      expect(isEqual([2], realm.array)).to.be.false
      expect(isEqual({ 'a': 1 }, realm.Object)).to.be.true
      expect(isEqual({ 'a': 2 }, realm.Object)).to.be.false
    }
  })

  it('should return `false` for Objects with custom `toString` methods', function() {
    let primitive
    const Object1 = { 'toString': function() { return primitive } }
    const values = [true, null, 1, 'a', undefined]
    const expected = _.map(values, stubFalse)

    const actual = _.map(values, (value) => {
      primitive = value
      return isEqual(Object1, value)
    })

    expect(actual).to.deep.equal(expected)
  })

  // it('should return an unwrapped value when implicitly chaining', function() {
  //   if (!isNpm) {
  //     expect(mudash('a').isEqual('a')).to.be.true
  //   }
  // })

  it('should return a wrapped value when explicitly chaining', function() {
    if (!isNpm) {
      expect(mudash('a').chain().isEqual('a') instanceof mudash).to.be.true
    }
  })

})
