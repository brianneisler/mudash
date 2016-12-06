import { expect } from 'chai'
import getType from './getType'
import isImmutable from './isImmutable'

export default function expectImmutableChange(data, result, dataExpected, resultExpected) {
  expect(result).to.not.equal(data)
  expect(getType(data)).to.equal(getType(dataExpected))
  expect(getType(result)).to.equal(getType(resultExpected))
  if (isImmutable(dataExpected)) {
    expect(data.toJS()).to.deep.equal(dataExpected.toJS())
  } else {
    expect(data).to.deep.equal(dataExpected)
  }
  if (isImmutable(resultExpected)) {
    expect(result.toJS()).to.deep.equal(resultExpected.toJS())
  } else {
    expect(result).to.deep.equal(resultExpected)
  }
}
