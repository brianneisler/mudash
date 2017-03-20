import _ from 'lodash'
export default function isForEachable(data) {
  return data && _.isFunction(data.forEach)
}
