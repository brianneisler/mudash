import _ from 'lodash'

export default function merge(data, path, ...args) {
  return data.mergeDeepIn(_.toPath(path), ...args)
}
