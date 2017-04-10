import isFunction from '../isFunction'
export default function isForEachable(data) {
  return data && isFunction(data.forEach)
}
