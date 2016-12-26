import 'babel-polyfill'
import { difference } from '../'
import { withHintConvert, withMultipleTypeInputs } from './recompose'
import { immutableArgsTest, immutableTest } from './tests'
import { indexed, keyed } from './types'
import { compose, runTests, setupTest, toArgs } from './util'


const enhance = compose(
  withMultipleTypeInputs,
  withHintConvert
)
const testDifference = enhance(immutableTest(({ data, value }) => difference(data, value)))
const testDifferenceWithArgs = enhance(immutableArgsTest(({ data, args }) => difference(data, ...args)))
const testDifferenceWithNoValues = enhance(immutableTest(({ data }) => difference(data)))

describe('difference:', function() {
  const context = setupTest()

  describe('basic tests', function() {

    const tests = {
      'should return the difference of two indexed values': {
        inputs: {
          data: {
            value: [2, 1],
            types: indexed()
          },
          value: {
            value: [2, 3],
            types: indexed()
          }
        },
        expected: [1]
      },
      'should treat `-0` as `0`': {
        inputs: {
          data: {
            value: [-0],
            types: indexed()
          },
          value: {
            value: [0],
            types: indexed()
          }
        },
        expected: []
      },
      'should treat `-0` as `0` with other values': {
        inputs: {
          data: {
            value: [-0, 1],
            types: indexed()
          },
          value: {
            value: [0],
            types: indexed()
          }
        },
        expected: [1]
      },
      'should match `NaN`': {
        inputs: {
          data: {
            value: [1, NaN, 3],
            types: indexed()
          },
          value: {
            value: [NaN, 5, NaN],
            types: indexed()
          }
        },
        expected: [1, 3]
      },
      'should work with arguments': {
        inputs: {
          data: {
            value: toArgs([1, 2, 3])
          },
          value: {
            value: [3],
            types: indexed()
          }
        },
        expected: [1, 2]
      },

      'should work with objects as Ordered values': () => {
        const obj1 = { a: 1 }
        const obj2 = { b: 2 }
        const obj3 = { c: 3 }

        return {
          inputs: {
            data: {
              value: [obj1, obj2, obj3],
              types: indexed()
            },
            value: {
              value: [obj1],
              types: indexed()
            }
          },
          expected: [obj2, obj3]
        }
      },
      'should return empty array with null data': {
        inputs: {
          data: {
            value: null
          },
          value: {
            value: [1, 3],
            types: indexed()
          }
        },
        expected: []
      }
    }

    runTests(tests, context, testDifference)
  })

  describe('no values tests', function() {
    const tests = {
      'should return same data set when no values are given': {
        inputs: {
          data: {
            value: ['a', 'b', 'c'],
            types: indexed()
          }
        },
        expected: ['a', 'b', 'c']
      }
    }

    runTests(tests, context, testDifferenceWithNoValues)
  })

  describe('multiple values tests', function() {
    const tests = {
      'should return the difference of multiple indexed values': {
        inputs: {
          data: {
            value: [2, 1, 2, 3],
            types: indexed()
          },
          args: [
            {
              value: [3, 4],
              types: indexed()
            },
            {
              value: [3, 2],
              types: indexed()
            }
          ]
        },
        expected: [1]
      },
      'should ignore values that are not Ordered': {
        inputs: {
          data: {
            value: [1, 2, 3],
            types: indexed()
          },
          args: [
            {
              value: 3
            },
            {
              value: { '0': 1 },
              types: keyed()
            }
          ]
        },
        expected: [1, 2, 3]
      }
    }
    runTests(tests, context, testDifferenceWithArgs)
  })
})

//   /*--------------------------------------------------------------------------*/
//
//   QUnit.module('lodash.differenceBy');
//
//   (function() {
//     QUnit.test('should accept an `iteratee`', function(assert) {
//       assert.expect(2);
//
//       var actual = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
//       assert.deepEqual(actual, [1.2]);
//
//       actual = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
//       assert.deepEqual(actual, [{ 'x': 2 }]);
//     });
//
//     QUnit.test('should provide correct `iteratee` arguments', function(assert) {
//       assert.expect(1);
//
//       var args;
//
//       _.differenceBy([2.1, 1.2], [2.3, 3.4], function() {
//         args || (args = slice.call(arguments));
//       });
//
//       assert.deepEqual(args, [2.3]);
//     });
//   }());
//
//   /*--------------------------------------------------------------------------*/
//
//   QUnit.module('lodash.differenceWith');
//
//   (function() {
//     QUnit.test('should work with a `comparator`', function(assert) {
//       assert.expect(1);
//
//       var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
//           actual = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], lodashStable.isEqual);
//
//       assert.deepEqual(actual, [objects[1]]);
//     });
//
//     QUnit.test('should preserve the sign of `0`', function(assert) {
//       assert.expect(1);
//
//       var array = [-0, 1],
//           largeArray = lodashStable.times(LARGE_ARRAY_SIZE, stubOne),
//           others = [[1], largeArray],
//           expected = lodashStable.map(others, lodashStable.constant(['-0']));
//
//       var actual = lodashStable.map(others, function(other) {
//         return lodashStable.map(_.differenceWith(array, other, lodashStable.eq), lodashStable.toString);
//       });
//
//       assert.deepEqual(actual, expected);
//     });
//   }());
