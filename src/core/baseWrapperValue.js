import batch from './batch'
import executeAction from './executeAction'
import isBatchable from './isBatchable'
import push from './push'
import reduce from './reduce'
import size from './size'

export default function baseWrapperValue(value, actions) {
  let mutations = []
  function processBatch(data) {
    if (size(mutations) > 0) {
      data = batch(data, mutations)
      mutations = []
    }
    return data
  }

  let result = reduce(actions, (reduction, action) => {
    if (isBatchable(action)) {
      mutations = push(mutations, action)
      return reduction
    }
    reduction = processBatch(reduction)
    return executeAction(reduction, action)
  }, value)
  result = processBatch(result)
  return result
}
