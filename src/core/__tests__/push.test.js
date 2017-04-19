import 'babel-polyfill'
import { push } from '../'
import { withHintSameType, withMultipleTypeInputs } from './recompose'
import { immutableTest } from './tests'
import { indexed, indexedWithoutStack, stack } from './types'
import { compose, runTests, setupTest } from './util'

const enhance = compose(
  withMultipleTypeInputs,
  withHintSameType
)

const testPush = enhance(immutableTest(({ data, values }) => push(data, ...values)))

describe('push', function() {

  const context = setupTest()
  const tests = {
    'pushes `values` to empty indexed `data`': {
      inputs: {
        data: {
          value: [],
          types: indexed()
        },
        values: {
          value: ['a']
        }
      },
      expected: ['a']
    },
    'pushes `value` to null data': {
      inputs: {
        data: {
          value: null
        },
        values: {
          value: ['b']
        }
      },
      expected: ['b']
    },
    'pushes multiple `values` to indexed `data`': {
      inputs: {
        data: {
          value: ['a'],
          types: indexedWithoutStack()
        },
        values: {
          value: [ 'b', 'c' ]
        }
      },
      expected: [ 'a', 'b', 'c' ]
    },
    'pushes multiple `values` to front of `Stack`': {
      inputs: {
        data: {
          value: ['a'],
          types: stack()
        },
        values: {
          value: [ 'b', 'c' ]
        }
      },
      expected: [ 'b', 'c', 'a' ]
    }
  }

  runTests(tests, context, testPush)
})
