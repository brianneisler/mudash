import filter from './filter';
import { keyIn } from '../composers';

export default function pick(data, keys) {
  return filter(data, keyIn(keys));
}
