import first from './first'
import flatten from './flatten'
import identity from './identity'
import reduce from './reduce'
import size from './size'
import slice from './slice'

export default function flow(...funcs) {
  funcs = flatten(funcs)
  const length = size(funcs)
  if (length === 0) {
    return identity
  }

  if (length === 1) {
    return first(funcs)
  }

  const firstFunc = first(funcs)
  const rest = slice(funcs, 1)
  return (...args) => reduce(rest, (composed, func) => func(composed), firstFunc(...args))
}
