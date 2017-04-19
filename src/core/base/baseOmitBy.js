import castPath from '../util/castPath'
import withMutations from '../with/withMutations'
import count from '../count'
import deleteKey from '../deleteKey'
import get from '../get'
import getKey from '../getKey'
import setKey from '../setKey'
import baseDelete from './baseDelete'
import baseGet from './baseGet'

const omitPaths = withMutations((result, data, paths, predicate) => {
  const length = count(paths)
  let index = -1

  while (++index < length) {
    const path = get(paths, index)
    const value = baseGet(data, path, getKey)
    if (predicate(value, path)) {
      result = baseDelete(result, castPath(path, data), deleteKey, setKey)
    }
  }

  return result
})

export default function baseOmitBy(data, paths, predicate) {
  return omitPaths(data, data, paths, predicate)
}
