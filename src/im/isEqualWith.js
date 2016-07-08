import _ from 'lodash';
import isEqual from '../isEqual';

export default function isEqualWith(value, other, customizer) {
  if (_.isFunction(customizer)) {
    const result = customizer(value, other);
    if (!_.isUndefined(result)) {
      return !!result;
    }
  }
  return isEqual(value, other);
}
