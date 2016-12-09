import { expect } from 'chai'
import getType from './getType'
import isImmutable from './isImmutable'

export default function expectAllExactEqual(data, result, expected) {
  expect(result).to.equal(data)
  expect(getType(data)).to.equal(getType(expected))
  expect(getType(result)).to.equal(getType(expected))
  if (isImmutable(expected)) {
    expect(data.toJS()).to.deep.equal(expected.toJS())
    expect(result.toJS()).to.deep.equal(expected.toJS())
  } else {
    expect(data).to.deep.equal(expected)
    expect(result).to.deep.equal(expected)
  }
}
