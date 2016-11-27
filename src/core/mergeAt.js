import get from './get'
import merge from './merge'
import set from './set'
import size from './size'

export default function mergeAt(data, path, ...args) {
  if (size(path > 0)) {
    return set(data, path, merge(get(data, path), ...args))
  }
  return merge(data, ...args)
}
