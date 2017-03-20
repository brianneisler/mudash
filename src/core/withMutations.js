import { withMutations } from './with'
export default function _withMutations(data, mutator, ...args) {
  if (data) {
    return withMutations(mutator)(data, ...args)
  }
  return data
}
