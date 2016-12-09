import _ from 'lodash'

const withMutations = (method) => (data, ...rest) => _.isFunction(data.withMutations)
  ? data.withMutations((mutableData) => method(mutableData, ...rest) )
  : method(data, ...rest)

export default withMutations
