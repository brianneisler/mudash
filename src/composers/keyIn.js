import toSet from '../toSet';

export function keyIn(keys) {
  const keySet = toSet(keys);
  return (value, key) => {
    return keySet.has(key);
  };
}
