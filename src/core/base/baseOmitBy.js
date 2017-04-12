import baseDelete from './baseDelete'
import baseGet from './baseGet'
import getSize from '../util/getSize'
import getKey from '../util/getKey'
import setKey from '../util/setKey'
import unsetKey from '../util/unsetKey'
import castPath from '../util/castPath'
import withMutations from '../with/withMutations'
import {  get } from '../'

const omitPaths = withMutations((result, data, paths, predicate) => {
  const length = getSize(paths)
  let index = -1

  while (++index < length) {
    const path = get(paths, index)
    const value = baseGet(data, path, getKey)
    if (predicate(value, path)) {
      result = baseDelete(result, castPath(path, data), unsetKey, setKey)
    }
  }

  return result
})

export default function baseOmitBy(data, paths, predicate) {
  return omitPaths(data, data, paths, predicate)
}
