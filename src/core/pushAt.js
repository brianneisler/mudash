import assoc from './assoc'
import get from './get'
import isImmutable from './isImmutable'
import push from './push'
import toImmutable from './toImmutable'

export default function pushAt(data, path, value) {
  const result = get(data, path, isImmutable(data) ? toImmutable([]) : [])
  return assoc(data, path, push(result, value))
}
