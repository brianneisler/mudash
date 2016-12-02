import { Stack } from 'immutable'
export default function isImmutableStack(data) {
  return Stack.isStack(data)
}
