import baseClone from '../base/baseClone'
import isFunction from '../isFunction'

const withMutations = (method) => (data, ...rest) => isFunction(data.withMutations)
  ? data.withMutations((mutableData) => method(mutableData, ...rest))
  : method(baseClone(data), ...rest)

export default withMutations
