import executeAction from './executeAction'
import isImmutable from './isImmutable'
import reduce from './reduce'

export default function batch(data, actions) {
  if (isImmutable(data)) {
    return data.withMutations(mutable => runBatch(mutable, actions))
  }
  return runBatch(data, actions)
}

function runBatch(data, actions) {
  return reduce(actions, (reduction, action) => {
    return executeAction(reduction, action)
  }, data)
}
