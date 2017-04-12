import { mutationPush } from './mutations'
import { withMutations } from './with'
import flatten from './flatten'
import get from './get'
import getKey from './getKey'
import hintConvert from './hintConvert'
import isAssociative from './isAssociative'
import size from './size'

const atPaths = withMutations((result, data, paths) => {
  let index = -1
  const skip = !isAssociative(data)
  const length = size(paths)

  while (++index < length) {
    result = mutationPush(result, skip ? undefined : get(data, getKey(paths, index)))
  }
  return result
})

export default function at(data, ...paths) {
  const result = hintConvert(data, [])
  return atPaths(result, data, flatten(paths))
}
