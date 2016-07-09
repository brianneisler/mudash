import _ from 'lodash';
import { property } from '../composers';

export default function map(data, iteratee) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee);
  }
  return data.map(iteratee);
}
