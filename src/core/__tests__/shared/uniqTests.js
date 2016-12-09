import { clone, expectImmutableChange } from '../util'
import mudash from '../../../'

export function testUniqueValues(methodName, data, expected, displayName) {
  const func = mudash[methodName]
  it(`should return unique values of ${displayName}`, function() {
    const dataExpected = clone(data)
    const result = func(data)
    expectImmutableChange(data, result, dataExpected, expected)
  })
}
