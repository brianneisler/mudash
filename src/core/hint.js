import _ from 'lodash'
export default function hint(predicate) {
  return (data, success, failure, ...rest) => {
    const result = predicate(data) ? success : failure
    return _.isFunction(result) ? result(...rest) : result
  }
}
