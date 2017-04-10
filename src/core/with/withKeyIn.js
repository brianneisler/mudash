import Immutable from 'immutable'

export default function withKeyIn(keys) {
  const keySet = Immutable.Set(keys)
  return (value, key) => {
    return keySet.has(key)
  }
}
