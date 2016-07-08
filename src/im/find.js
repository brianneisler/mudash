import slice from './slice';
export default function find(data, predicate, fromIndex = 0) {
  return slice(data, fromIndex).filter(predicate);
}
