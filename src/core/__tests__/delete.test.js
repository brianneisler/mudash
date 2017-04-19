import 'babel-polyfill'
import { delete as _delete } from '../'
import { withHintSameType, withMultipleTypeInputs } from './recompose'
import { immutableTest } from './tests'
import { indexed, keyed } from './types'
import { compose, runTests, setupTest } from './util'

const enhance = compose(
  withMultipleTypeInputs,
  withHintSameType
)

const testDelete = enhance(immutableTest(({ data, path }) => _delete(data, path)))

describe('delete', function() {
  const context = setupTest()
  const { Symbol } = context

  const symbolA = Symbol('a')

  const tests = {
    'should delete indexed `data` on `path`': {
      inputs: {
        data: {
          value: ['a', 'b', 'c'],
          types: indexed()
        },
        path: {
          value: 1
        }
      },
      expected: ['a', 'c']
    },
    'should delete keyed `data` on `path`': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c':3 },
          types: keyed()
        },
        path: {
          value: 'c'
        }
      },
      expected: { 'a':1, 'b':2 }
    },
    'should delete deep `data` on `path` with nested object': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c': { 'd': 3, 'e': 4 } },
          types: keyed()
        },
        path: {
          value: 'c.d'
        }
      },
      expected: { 'a':1, 'b':2, 'c': { 'e': 4 } }
    },
    'should delete deep `data` on `path` with nested array': {
      inputs: {
        data: {
          value: { 'a':1, 'b':2, 'c': [3, 4, 5] },
          types: keyed()
        },
        path: {
          value: 'c.1'
        }
      },
      expected: { 'a':1, 'b':2, 'c': [3, 5] }
    },
    'should delete keyed `data` with symbol `path`': {
      inputs: {
        data: {
          value: { [symbolA]:1, 'b':2, 'c':3 }
          //types: keyed() //TODO BRN: immutable types do not seem to be working with symbols
        },
        path: {
          value: symbolA
        }
      },
      expected: { 'b':2, 'c':3 }
    }
  }

  runTests(tests, context, testDelete)
})
