import assign from './assign'
import contains from './contains'
import set from './set'

const BATCHABLE = [
  assign,
  set
]
export default function isBatchable(action) {
  return contains(BATCHABLE, action.func)
}
