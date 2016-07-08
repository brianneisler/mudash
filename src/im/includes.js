import slice from './slice';

export default function includes(data, value, fromIndex) {
  return slice(data, fromIndex).includes(value);
}
