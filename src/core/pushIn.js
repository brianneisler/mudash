import get from './get'
import isImmutable from './isImmutable'
import push from './push'
import set from './set'
import toImmutable from './toImmutable'

export default function pushIn(data, path, value) {
  const result = get(data, path, isImmutable(data) ? toImmutable([]) : [])
  return set(data, path, push(result, value))
}
