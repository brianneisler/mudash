import first from './first'
import flatten from './flatten'
import identity from './identity'
import last from './last'
import reduceRight from './reduceRight'
import size from './size'
import slice from './slice'

export default function compose(...funcs) {
  funcs = flatten(funcs)
  const length = size(funcs)
  if (length === 0) {
    return identity
  }

  if (length === 1) {
    return first(funcs)
  }

  const lastFunc = last(funcs)
  const rest = slice(funcs, 0, -1)
  return (...args) => reduceRight(rest, (composed, func) => func(composed), lastFunc(...args))
}
