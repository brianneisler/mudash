import baseGet from './baseGet'
import baseSet from './baseSet'
import getSize from '../util/getSize'
import getKey from '../util/getKey'
import setKey from '../util/setKey'
import castPath from '../util/castPath'
import withMutations from '../with/withMutations'
import { hintConvert, get } from '../'

const pickPaths = withMutations((result, data, paths, predicate) => {
  const length = getSize(paths)
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
