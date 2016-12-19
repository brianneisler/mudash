import 'babel-polyfill'
import _ from 'lodash'
import { testUniqueValues } from './shared'
import { indexed } from './types'
import { hintConvert, setupTest } from './util'

describe('uniq', function() {
  const context = setupTest()
  const { NaN, Symbol } = context

  const symbolA = Symbol('a')
  const symbolB = Symbol('b')
  const objects = [{ 'a': 2 }, { 'a': 3 }, { 'a': 1 }, { 'a': 2 }, { 'a': 3 }, { 'a': 1 }]
  const tests = {
    'with unsorted values': {
      input: [2, 1, 2],
      expected: [2, 1]
    },
    'with sorted values': {
      input: [1, 2, 2],
      expected: [1, 2]
    },
    'with objects': {
      input: objects,
      expected: objects
    },
    'with -0 treated as 0': {
      input: [-0, 0],
      expected: [0]
    },
    'with NaN matching NaN': {
      input: [NaN, NaN],
      expected: [NaN]
    },
    'with Symbols': {
      input: [symbolA, symbolB, symbolA, symbolB],
      expected: [symbolA, symbolB]
    }
  }

  const dataTypes = indexed()

  _.each(dataTypes, (dataType, dataDisplayName) => {
    _.each(tests, (test, testName) => {
      const input = dataType(test.input)
      testUniqueValues('uniq', input, hintConvert(input, test.expected), ([dataDisplayName, testName]).join(' '))
    })
  })
})

// QUnit.module('uniq methods');
//
//  lodashStable.each(['uniq', 'uniqBy', 'uniqWith', 'sortedUniq', 'sortedUniqBy'], function(methodName) {
//    var func = _[methodName],
//        isSorted = /^sorted/.test(methodName),
//        objects = [{ 'a': 2 }, { 'a': 3 }, { 'a': 1 }, { 'a': 2 }, { 'a': 3 }, { 'a': 1 }];
//


//
//    QUnit.test('`_.' + methodName + '` should match `NaN`', function(assert) {
//      assert.expect(1);
//
//      assert.deepEqual(func([NaN, NaN]), [NaN]);
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with large arrays', function(assert) {
//      assert.expect(1);
//
//      var largeArray = [],
//          expected = [0, {}, 'a'],
//          count = Math.ceil(LARGE_ARRAY_SIZE / expected.length);
//
//      lodashStable.each(expected, function(value) {
//        lodashStable.times(count, function() {
//          largeArray.push(value);
//        });
//      });
//
//      assert.deepEqual(func(largeArray), expected);
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with large arrays of `-0` as `0`', function(assert) {
//      assert.expect(1);
//
//      var largeArray = lodashStable.times(LARGE_ARRAY_SIZE, function(index) {
//        return isEven(index) ? -0 : 0;
//      });
//
//      var actual = lodashStable.map(func(largeArray), lodashStable.toString);
//      assert.deepEqual(actual, ['0']);
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with large arrays of boolean, `NaN`, and nullish values', function(assert) {
//      assert.expect(1);
//
//      var largeArray = [],
//          expected = [null, undefined, false, true, NaN],
//          count = Math.ceil(LARGE_ARRAY_SIZE / expected.length);
//
//      lodashStable.each(expected, function(value) {
//        lodashStable.times(count, function() {
//          largeArray.push(value);
//        });
//      });
//
//      assert.deepEqual(func(largeArray), expected);
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with large arrays of symbols', function(assert) {
//      assert.expect(1);
//
//      if (Symbol) {
//        var largeArray = lodashStable.times(LARGE_ARRAY_SIZE, Symbol);
//        assert.deepEqual(func(largeArray), largeArray);
//      }
//      else {
//        skipAssert(assert);
//      }
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with large arrays of well-known symbols', function(assert) {
//      assert.expect(1);
//
//      // See http://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols.
//      if (Symbol) {
//        var expected = [
//          Symbol.hasInstance, Symbol.isConcatSpreadable, Symbol.iterator,
//          Symbol.match, Symbol.replace, Symbol.search, Symbol.species,
//          Symbol.split, Symbol.toPrimitive, Symbol.toStringTag, Symbol.unscopables
//        ];
//
//        var largeArray = [],
//            count = Math.ceil(LARGE_ARRAY_SIZE / expected.length);
//
//        expected = lodashStable.map(expected, function(symbol) {
//          return symbol || {};
//        });
//
//        lodashStable.each(expected, function(value) {
//          lodashStable.times(count, function() {
//            largeArray.push(value);
//          });
//        });
//
//        assert.deepEqual(func(largeArray), expected);
//      }
//      else {
//        skipAssert(assert);
//      }
//    });
//
//    QUnit.test('`_.' + methodName + '` should distinguish between numbers and numeric strings', function(assert) {
//      assert.expect(1);
//
//      var largeArray = [],
//          expected = ['2', 2, Object('2'), Object(2)],
//          count = Math.ceil(LARGE_ARRAY_SIZE / expected.length);
//
//      lodashStable.each(expected, function(value) {
//        lodashStable.times(count, function() {
//          largeArray.push(value);
//        });
//      });
//
//      assert.deepEqual(func(largeArray), expected);
//    });
//  });
//
//  /*--------------------------------------------------------------------------*/
//
//  QUnit.module('lodash.uniq');
//
//  (function() {
//    QUnit.test('should perform an unsorted uniq when used as an iteratee for methods like `_.map`', function(assert) {
//      assert.expect(1);
//
//      var array = [[2, 1, 2], [1, 2, 1]],
//          actual = lodashStable.map(array, lodashStable.uniq);
//
//      assert.deepEqual(actual, [[2, 1], [1, 2]]);
//    });
//  }());
//
//  /*--------------------------------------------------------------------------*/
//
//  QUnit.module('uniqBy methods');
//
//  lodashStable.each(['uniqBy', 'sortedUniqBy'], function(methodName) {
//    var func = _[methodName],
//        isSorted = methodName == 'sortedUniqBy',
//        objects = [{ 'a': 2 }, { 'a': 3 }, { 'a': 1 }, { 'a': 2 }, { 'a': 3 }, { 'a': 1 }];
//
//    if (isSorted) {
//      objects = _.sortBy(objects, 'a');
//    }
//    QUnit.test('`_.' + methodName + '` should work with an `iteratee`', function(assert) {
//      assert.expect(1);
//
//      var expected = isSorted ? [{ 'a': 1 }, { 'a': 2 }, { 'a': 3 }] : objects.slice(0, 3);
//
//      var actual = func(objects, function(object) {
//        return object.a;
//      });
//
//      assert.deepEqual(actual, expected);
//    });
//
//    QUnit.test('should work with large arrays', function(assert) {
//      assert.expect(2);
//
//      var largeArray = lodashStable.times(LARGE_ARRAY_SIZE, function() {
//        return [1, 2];
//      });
//
//      var actual = func(largeArray, String);
//      assert.strictEqual(actual[0], largeArray[0]);
//      assert.deepEqual(actual, [[1, 2]]);
//    });
//
//    QUnit.test('`_.' + methodName + '` should provide correct `iteratee` arguments', function(assert) {
//      assert.expect(1);
//
//      var args;
//
//      func(objects, function() {
//        args || (args = slice.call(arguments));
//      });
//
//      assert.deepEqual(args, [objects[0]]);
//    });
//
//    QUnit.test('`_.' + methodName + '` should work with `_.property` shorthands', function(assert) {
//      assert.expect(2);
//
//      var expected = isSorted ? [{ 'a': 1 }, { 'a': 2 }, { 'a': 3 }] : objects.slice(0, 3),
//          actual = func(objects, 'a');
//
//      assert.deepEqual(actual, expected);
//
//      var arrays = [[2], [3], [1], [2], [3], [1]];
//      if (isSorted) {
//        arrays = lodashStable.sortBy(arrays, 0);
//      }
//      expected = isSorted ? [[1], [2], [3]] : arrays.slice(0, 3);
//      actual = func(arrays, 0);
//
//      assert.deepEqual(actual, expected);
//    });
//
//    lodashStable.each({
//      'an array': [0, 'a'],
//      'an object': { '0': 'a' },
//      'a number': 0,
//      'a string': '0'
//    },
//    function(iteratee, key) {
//      QUnit.test('`_.' + methodName + '` should work with ' + key + ' for `iteratee`', function(assert) {
//        assert.expect(1);
//
//        var actual = func([['a'], ['a'], ['b']], iteratee);
//        assert.deepEqual(actual, [['a'], ['b']]);
//      });
//    });
//  });
//
//  /*--------------------------------------------------------------------------*/
//
//  QUnit.module('lodash.uniqWith');
//
//  (function() {
//    QUnit.test('should work with a `comparator`', function(assert) {
//      assert.expect(1);
//
//      var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }],
//          actual = _.uniqWith(objects, lodashStable.isEqual);
//
//      assert.deepEqual(actual, [objects[0], objects[1]]);
//    });
//
//    QUnit.test('should preserve the sign of `0`', function(assert) {
//      assert.expect(1);
//
//      var largeArray = lodashStable.times(LARGE_ARRAY_SIZE, function(index) {
//        return isEven(index) ? -0 : 0;
//      });
//
//      var arrays = [[-0, 0], largeArray],
//          expected = lodashStable.map(arrays, lodashStable.constant(['-0']));
//
//      var actual = lodashStable.map(arrays, function(array) {
//        return lodashStable.map(_.uniqWith(array, lodashStable.eq), lodashStable.toString);
//      });
//
//      assert.deepEqual(actual, expected);
//    });
//  }());
