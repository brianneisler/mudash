import isFunction from './isFunction'
export default function hint(predicate) {
  return (data, success, failure, ...rest) => {
    const result = predicate(data) ? success : failure
    return isFunction(result) ? result(...rest) : result
  }
}
