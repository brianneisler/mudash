import _ from 'lodash'
import expectEqual from '../util/expectEqual'
import expectImmutableResult from '../util/expectImmutableResult'

export default function immutableArgsTest(testMethod) {
  return ({ name, inputs, expectedInputs, expected }) => {
    it(name, function() {
      const result = testMethod(inputs)
      expectImmutableResult(inputs.data, result, expected)
      _.each(expectedInputs, (expectedInput, key) => {
        if (key === 'args') {
          _.each(expectedInput, (expectedArg, i) => expectEqual(inputs.args[i], expectedArg))
        } else {
          expectEqual(inputs[key], expectedInput)
        }
      })
    })
  }
}
