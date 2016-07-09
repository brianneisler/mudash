import filter from './filter';
import { truthy } from '../predicates';

export default function compact(data) {
  return filter(data, truthy);
}
