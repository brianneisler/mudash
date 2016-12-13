import { expect } from 'chai'
import getType from './getType'
import isImmutable from './isImmutable'

export default function expectEqual(data, expected) {
  expect(getType(data)).to.equal(getType(expected))
  if (isImmutable(expected)) {
    expect(data.toJS()).to.deep.equal(expected.toJS())
  } else {
    expect(data).to.deep.equal(expected)
  }
}
