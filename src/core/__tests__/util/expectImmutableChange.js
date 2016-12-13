import { expect } from 'chai'
import expectEqual from './expectEqual'

export default function expectImmutableChange(data, result, dataExpected, resultExpected) {
  expect(result).to.not.equal(data)
  expectEqual(data, dataExpected)
  expectEqual(result, resultExpected)
}
