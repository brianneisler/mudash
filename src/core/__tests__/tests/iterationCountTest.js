import _ from 'lodash'
import expectEqual from '../util/expectEqual'
import expectImmutableResult from '../util/expectImmutableResult'

export default function iterationCountTest(testMethod) {
  return ({ name, inputs, expectedInputs, expected }) => {
    it(name, function() {
      const result = testMethod(inputs)
      expectImmutableResult(inputs.data, result, expected)
      _.each(expectedInputs, (expectedInput, key) => expectEqual(inputs[key], expectedInput))
    })
  }
}
