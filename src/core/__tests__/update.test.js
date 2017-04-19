import 'babel-polyfill'
//import Immutable from 'immutable'
import { expect } from 'chai'
import { update } from '../'
import { withHintSameType, withMultipleTypeInputs } from './recompose'
import { immutableTest } from './tests'
import { indexed, keyed } from './types'
import { compose, runTests, setupTest } from './util'

const enhance = compose(
  withMultipleTypeInputs,
  withHintSameType
)

const testUpdate = enhance(immutableTest(({ data, path, updater }) => update(data, path, updater)))

describe('update', function() {
  const context = setupTest()
  const { Symbol } = context

  const symbolA = Symbol('a')

  const tests = {
    'should update indexed `data` on `path`': {
      inputs: {
        data: {
          value: ['a', 'b', 'c'],
          types: indexed()
        },
        path: {
          value: 2
        },
        updater: {
          value: (value) => {
            expect(value).to.equal('c')
            return 'd'
          }
        }
      },
      expected: ['a', 'b', 'd']
    },
    'should update keyed `data` on `path`': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c':3 },
          types: keyed()
        },
        path: {
          value: 'c'
        },
        updater: {
          value: (value) => {
            expect(value).to.equal(3)
            return 4
          }
        }
      },
      expected: { 'a':1, 'b':2, 'c':4 }
    },
    'should update deep `data` on `path` with nested object': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c': { 'd': 3 } },
          types: keyed()
        },
        path: {
          value: 'c.d'
        },
        updater: {
          value: (value) => {
            expect(value).to.equal(3)
            return 4
          }
        }
      },
      expected: { 'a':1, 'b':2, 'c': { 'd': 4 } }
    },
    // 'should update deep `data` on `path` with nested Map': {
    //   inputs: {
    //     data: {
    //       value: { 'a':1, 'b':2, 'c': Immutable.Map({ 'd': 3 }) },
    //       types: keyed()
    //     },
    //     path: {
    //       value: 'c.d'
    //     },
    //     updater: {
    //       value: (value) => {
    //         expect(value).to.equal(3)
    //         return 4
    //       }
    //     }
    //   },
    //   expected: { 'a':1, 'b':2, 'c': Immutable.Map({ 'd': 4 }) }
    // },
    'should update deep `data` on `path` with nested array': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c': [3, 4, 5] },
          types: keyed()
        },
        path: {
          value: 'c.1'
        },
        updater: {
          value: (value) => {
            expect(value).to.equal(4)
            return 6
          }
        }
      },
      expected: { 'a':1, 'b':2, 'c': [3, 6, 5] }
    },
    'should update keyed `data` with symbol `path`': {
      inputs: {
        data: {
          value: { [symbolA]:1, 'b':2, 'c':3 }
          //types: keyed() //TODO BRN: immutable types do not seem to be working with symbols
        },
        path: {
          value: symbolA
        },
        updater: {
          value: (value) => {
            expect(value).to.equal(1)
            return 4
          }
        }
      },
      expected: { [symbolA]:4, 'b':2, 'c':3 }
    }
  }

  runTests(tests, context, testUpdate)
})
