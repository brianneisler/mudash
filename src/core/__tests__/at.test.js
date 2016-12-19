import 'babel-polyfill'
import _ from 'lodash'
import { at } from '../'
import { withHintConvert, withMultipleTypeInputs } from './recompose'
import { immutableArgsTest, immutableTest } from './tests'
import { indexed, keyed } from './types'
import { compose, getType, runTests, setupTest, toArgs } from './util'


const enhance = compose(
  withMultipleTypeInputs,
  withHintConvert
)
const testAt = enhance(immutableTest(({ data, paths }) => at(data, paths)))
const testAtWithArgs = enhance(immutableArgsTest(({ data, args }) => at(data, ...args)))
const testAtWithNoPaths = enhance(immutableTest(({ data }) => at(data)))

describe('at:', function() {
  const context = setupTest()
  const { empties, falsey, stubOne } = context

  describe('basic tests', function() {
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
              value: data,
              clone: false
            },
            paths: {
              value: paths, // [ {}, undefined, false, NaN, '', -1, 1.1 ]
              types: indexed()
            }
          },
          expected: _.map(paths, stubOne)
        }
      },
      'should return an empty array when no keys are given': {
        inputs: {
          data: {
            value: ['a', 'b', 'c'],
            types: indexed()
          },
          paths: {
            value: [],
            types: indexed()
          }
        },
        expected: []
      },
      'should work with an `arguments` object for `data`': {
        inputs: {
          data: {
            value: toArgs([1, 2, 3]),
            clone: false
          },
          paths: {
            value: [2, 0],
            types: indexed()
          }
        },
        expected: [3, 1]
      },
      'should work with `arguments` object as secondary arguments': {
        inputs: {
          data: {
            value: [1, 2, 3, 4, 5],
            types: indexed()
          },
          paths: {
            value: toArgs([1, 2, 3]),
            clone: false
          }
        },
        expected: [2, 3, 4]
      },
      'should work with a keyed value for `data`': {
        inputs: {
          data: {
            value: { 'a': [{ 'b': { 'c': 3 } }, 4] },
            types: keyed()
          },
          paths: {
            value: ['a[0].b.c', 'a[1]'],
            types: indexed()
          }
        },
        expected: [3, 4]
      },
      'should pluck inherited property values': () => {
        function Foo() {
          this.a = 1
        }
        Foo.prototype.b = 2

        return {
          inputs: {
            data: {
              value: new Foo
            },
            paths: {
              value: ['b'],
              types: indexed()
            }
          },
          expected: [2]
        }
      }
    }

    runTests(tests, context, testAt)
  })

  describe('no paths tests', function() {
    const tests = {
      'should return an empty data set when no paths are given': {
        inputs: {
          data: {
            value: ['a', 'b', 'c'],
            types: indexed()
          }
        },
        expected: []
      }
    }

    runTests(tests, context, testAtWithNoPaths)
  })

  describe('falsey data tests', function() {
    const testTemplate = {
      inputs: {
        paths: {
          value: [0, 1, 'pop', 'push'],
          types: indexed()
        }
      },
      expected: [undefined, undefined, undefined, undefined]
    }

    const tests = _.reduce(falsey, (result, data) => {
      let test = _.cloneDeep(testTemplate)
      test = _.update(test, 'inputs.data', () => ({ value: data }))
      return _.set(result, `should work with a falsey 'data' of type '${getType(data)}' when keys are given`, test)
    }, {})

    runTests(tests, context, testAt)
  })

  describe('multiple paths tests', function() {
    const tests = {
      'should return an empty array when no keys are given': {
        inputs: {
          data: {
            value: ['a', 'b', 'c'],
            types: indexed()
          },
          args: [
            {
              value: [],
              types: indexed()
            },
            {
              value: [],
              types: indexed()
            }
          ]
        },
        expected: []
      },
      'should accept multiple key arguments': {
        inputs: {
          data: {
            value: ['a', 'b', 'c', 'd'],
            types: indexed()
          },
          args: [
            {
              value: 3
            },
            {
              value: 0
            },
            {
              value: 2
            }
          ]
        },
        expected: ['d', 'a', 'c']
      }
    }
    runTests(tests, context, testAtWithArgs)
  })
})

//
// _.each(tests, (test, displayName) => {
//   if (_.isFunction(test)) {
//     test = test()
//   }
//   const { expected, inputs: { data: dataInput, args: argsInput } } = test
//   if (dataInput.types) {
//     _.each(dataInput.types, (dataType, dataTypeName) => {
//       const data = dataType(dataInput.value)
//       testArgs(displayName, data, dataTypeName, argsInput, expected)
//     })
//   } else {
//     const data = dataInput.value
//     testArgs(displayName, data, getType(data), argsInput, expected)
//   }
// })
//
// function testArgs(displayName, data, dataTypeName, argsInput, expected) {
//   const index = -1
//   recurTestArg(displayName, data, dataTypeName, [], argsInput, index, expected)
// }
//
// function recurTestArg(displayName, data, dataTypeName, args, argsInput, index, expected) {
//   const argInput = argsInput[++index]
//   const { length } = argsInput
//   if (argInput.types) {
//     _.each(argInput.types, (argType) => {
//       const arg = argType(argInput.value)
//       if (index < length - 1) {
//         recurTestArg(displayName, data, dataTypeName, args.concat(arg), argsInput, index, expected)
//       } else {
//         testAtWithMultiplePaths(data, args.concat(arg), hintConvert(data, expected),
//           `${displayName} using ${dataTypeName} as data and path args ${args.concat(arg)}`
//         )
//       }
//     })
//   } else {
//     const arg = argInput.value
//     if (index < length - 1) {
//       recurTestArg(displayName, data, dataTypeName, args.concat(arg), argsInput, index, expected)
//     } else {
//       testAtWithMultiplePaths(data, args.concat(arg), hintConvert(data, expected),
//         `${displayName} using ${dataTypeName} as data and path args ${args.concat(arg)}`
//       )
//     }
//   }
// }
//
// function testAt(data, paths, expected, displayName, options = { cloneData: true, clonePaths: true, ...options }) {
//   it(displayName, function() {
//     const dataExpected = options.cloneData ? clone(data) : data
//     const pathsExpected = options.clonePaths ? clone(paths) : paths
//     const result = at(data, paths)
//     expectImmutableChange(data, result, dataExpected, expected)
//     expectEqual(paths, pathsExpected)
//   })
// }
//
// function testAtWithNoPaths(data, expected, displayName) {
//   it(displayName, function() {
//     const dataExpected = clone(data)
//     const result = at(data)
//     expectImmutableChange(data, result, dataExpected, expected)
//   })
// }
//
// function testAtWithMultiplePaths(data, args, expected, displayName) {
//   it(displayName, function() {
//     const dataExpected = clone(data)
//     const argsExpected = _.map(args, (arg) => clone(arg))
//     const result = at(data, ...args)
//     expectImmutableChange(data, result, dataExpected, expected)
//     _.each(argsExpected, (argExpected, i) => expectEqual(args[i], argExpected))
//   })
// }
//
// function testAtPaths(test, data, dataTypeName, pathsInput) {
//   const { expected, name } = test
//   if (pathsInput.types) {
//     _.each(pathsInput.types, (pathsType, pathsTypeName) => {
//       const paths = pathsType(pathsInput.value)
//       testAt(data, paths, hintConvert(data, expected),
//         `${name} using ${dataTypeName} as data and ${pathsTypeName} as paths`,
//         test.options
//       )
//     })
//   } else {
//     const paths = pathsInput.value
//     testAt(data, paths, hintConvert(data, expected),
//       `${name} using ${dataTypeName} as data and ${getType(paths)} as paths`,
//       test.options
//     )
//   }
// }


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
