import _ from 'lodash'
import baseClone from '../base/baseClone'

const withMutations = (method) => (data, ...rest) => _.isFunction(data.withMutations)
  ? data.withMutations((mutableData) => method(mutableData, ...rest) )
  : method(baseClone(data), ...rest)

export default withMutations
