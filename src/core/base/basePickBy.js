import castPath from '../util/castPath'
import withMutations from '../with/withMutations'
import count from '../count'
import get from '../get'
import getKey from '../getKey'
import hintConvert from '../hintConvert'
import setKey from '../setKey'
import baseGet from './baseGet'
import baseSet from './baseSet'

const pickPaths = withMutations((result, data, paths, predicate) => {
  const length = count(paths)
  let index = -1

  while (++index < length) {
    const path = get(paths, index)
    const value = baseGet(data, path, getKey)
    if (predicate(value, path)) {
      result = baseSet(result, castPath(path, data), value, setKey)
    }
  }

  return result
})

export default function basePickBy(data, paths, predicate) {
  const result = hintConvert(data, {})
  return pickPaths(result, data, paths, predicate)
}
