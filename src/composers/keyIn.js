import Immutable from 'immutable';

export function keyIn(keys) {
  const keySet = Immutable.Set(keys);
  return (value, key) => {
    return keySet.has(key);
  };
}
