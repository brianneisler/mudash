import concat from './concat'
export default function executeAction(data, action) {
  return action.func.apply(action.thisArg, concat([data], action.args))
}
