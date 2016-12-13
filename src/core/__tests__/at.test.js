import 'babel-polyfill'
import _ from 'lodash'
import { at } from '../'
import { clone, expectEqual, expectImmutableChange, hintConvert, setupTest } from './util'
import { indexed } from './types'


describe('at', function() {
  const context = setupTest()
  const { empties, stubOne } = context

  const tests = {
    'should return the elements corresponding to the specified keys from indexed data': {
      inputs: {
        data: {
          value: ['a', 'b', 'c'],
          types: indexed()
        },
        paths: {
          value: [0, 2],
          types: indexed()
        }
      },
      expected: ['a', 'c']
    },
    'should return `undefined` for nonexistent keys from indexed data': {
      inputs: {
        data: {
          value: ['a', 'b', 'c'],
          types: indexed()
        },
        paths: {
          value: [2, 4, 0],
          types: indexed()
        }
      },
      expected: ['c', undefined, 'a']
    },
    'should work with non-index keys on array values': () => {
      const paths = _.reject(empties, (value) => {
        return (value === 0) || _.isArray(value)
      }).concat(-1, 1.1)

      const data = _.transform(paths, (result, value) => {
        result[value] = 1
      }, [])

      return {
        inputs: {
          data: {
            value: data
          },
          paths: {
            value: paths, // [ {}, undefined, false, NaN, '', -1, 1.1 ]
            types: indexed()
          }
        },
        expected: _.map(paths, stubOne)
      }
    }
  }

  _.each(tests, (test, displayName) => {
    if (_.isFunction(test)) {
      test = test()
    }
    const { expected, inputs: { data: dataInput, paths: pathsInput } } = test
    if (dataInput.types) {
      _.each(dataInput.types, (dataType, dataTypeName) => {
        const data = dataType(dataInput.value)
        _.each(pathsInput.types, (pathsType, pathsTypeName) => {
          const paths = pathsType(pathsInput.value)
          testAt(data, paths, hintConvert(data, expected),
            `${displayName} using ${dataTypeName} as data and ${pathsTypeName} as paths`,
            context
          )
        })
      })
    } else {
      const data = dataInput.value
      _.each(pathsInput.types, (pathsType, pathsTypeName) => {
        const paths = pathsType(pathsInput.value)
        testAt(data, paths, hintConvert(data, expected),
          `${displayName} using ${pathsTypeName} as paths`,
          { cloneData: false },
          context
        )
      })
    }
  })

})

function testAt(data, paths, expected, displayName, options = { cloneData: true, ...options }) {
  it(displayName, function() {
    const dataExpected = options.cloneData ? clone(data) : data
    const pathsExpected = clone(paths)
    const result = at(data, paths)
    expectImmutableChange(data, result, dataExpected, expected)
    expectEqual(paths, pathsExpected)
  })
}

function testNoPaths(data, expected, )

// QUnit.module('lodash.at');
//
//   (function() {
//     var array = ['a', 'b', 'c'],
//         object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
//


//
//     QUnit.test('should return an empty array when no keys are given', function(assert) {
//       assert.expect(2);
//
//       assert.deepEqual(_.at(array), []);
//       assert.deepEqual(_.at(array, [], []), []);
//     });
//
//     QUnit.test('should accept multiple key arguments', function(assert) {
//       assert.expect(1);
//
//       var actual = _.at(['a', 'b', 'c', 'd'], 3, 0, 2);
//       assert.deepEqual(actual, ['d', 'a', 'c']);
//     });
//
//     QUnit.test('should work with a falsey `object` when keys are given', function(assert) {
//       assert.expect(1);
//
//       var expected = lodashStable.map(falsey, lodashStable.constant(Array(4)));
//
//       var actual = lodashStable.map(falsey, function(object) {
//         try {
//           return _.at(object, 0, 1, 'pop', 'push');
//         } catch (e) {}
//       });
//
//       assert.deepEqual(actual, expected);
//     });
//
//     QUnit.test('should work with an `arguments` object for `object`', function(assert) {
//       assert.expect(1);
//
//       var actual = _.at(args, [2, 0]);
//       assert.deepEqual(actual, [3, 1]);
//     });
//
//     QUnit.test('should work with `arguments` object as secondary arguments', function(assert) {
//       assert.expect(1);
//
//       var actual = _.at([1, 2, 3, 4, 5], args);
//       assert.deepEqual(actual, [2, 3, 4]);
//     });
//
//     QUnit.test('should work with an object for `object`', function(assert) {
//       assert.expect(1);
//
//       var actual = _.at(object, ['a[0].b.c', 'a[1]']);
//       assert.deepEqual(actual, [3, 4]);
//     });
//
//     QUnit.test('should pluck inherited property values', function(assert) {
//       assert.expect(1);
//
//       function Foo() {
//         this.a = 1;
//       }
//       Foo.prototype.b = 2;
//
//       var actual = _.at(new Foo, 'b');
//       assert.deepEqual(actual, [2]);
//     });
//
//     QUnit.test('should work in a lazy sequence', function(assert) {
//       assert.expect(6);
//
//       if (!isNpm) {
//         var largeArray = lodashStable.range(LARGE_ARRAY_SIZE),
//             smallArray = array;
//
//         lodashStable.each([[2], ['2'], [2, 1]], function(paths) {
//           lodashStable.times(2, function(index) {
//             var array = index ? largeArray : smallArray,
//                 wrapped = _(array).map(identity).at(paths);
//
//             assert.deepEqual(wrapped.value(), _.at(_.map(array, identity), paths));
//           });
//         });
//       }
//       else {
//         skipAssert(assert, 6);
//       }
//     });
//
//     QUnit.test('should support shortcut fusion', function(assert) {
//       assert.expect(8);
//
//       if (!isNpm) {
//         var array = lodashStable.range(LARGE_ARRAY_SIZE),
//             count = 0,
//             iteratee = function(value) { count++; return square(value); },
//             lastIndex = LARGE_ARRAY_SIZE - 1;
//
//         lodashStable.each([lastIndex, lastIndex + '', LARGE_ARRAY_SIZE, []], function(n, index) {
//           count = 0;
//           var actual = _(array).map(iteratee).at(n).value(),
//               expected = index < 2 ? 1 : 0;
//
//           assert.strictEqual(count, expected);
//
//           expected = index == 3 ? [] : [index == 2 ? undefined : square(lastIndex)];
//           assert.deepEqual(actual, expected);
//         });
//       }
//       else {
//         skipAssert(assert, 8);
//       }
//     });
//
//     QUnit.test('work with an object for `object` when chaining', function(assert) {
//       assert.expect(2);
//
//       if (!isNpm) {
//         var paths = ['a[0].b.c', 'a[1]'],
//             actual = _(object).map(identity).at(paths).value();
//
//         assert.deepEqual(actual, _.at(_.map(object, identity), paths));
//
//         var indexObject = { '0': 1 };
//         actual = _(indexObject).at(0).value();
//         assert.deepEqual(actual, _.at(indexObject, 0));
//       }
//       else {
//         skipAssert(assert, 2);
//       }
//     });
//   }());
