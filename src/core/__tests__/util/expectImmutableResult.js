import { expect } from 'chai'
import expectEqual from './expectEqual'

export default function expectImmutableResult(data, result, expected) {
  expect(result).to.not.equal(data)
  expectEqual(result, expected)
}
