import { List } from 'immutable'
export default function isImmutableList(data) {
  return List.isList(data)
}
