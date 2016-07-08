import _ from 'lodash';
import property from '../property';

export default function groupBy(data, iteratee) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee);
  }
  return data.groupBy(iteratee);
}
