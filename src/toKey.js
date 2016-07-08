import { INFINITY } from './constants';
import isSymbol from './isSymbol';

export default function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  const result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
