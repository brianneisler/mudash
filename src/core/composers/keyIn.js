import Immutable from 'immutable'

export default function keyIn(keys) {
  const keySet = Immutable.Set(keys)
  return (value, key) => {
    return keySet.has(key)
  }
}
