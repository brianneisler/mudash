import _ from 'lodash';
import get from './get';
import isEqual from './isEqual';

export default function isIterateeCall(value, index, object) {
  if (!_.isObject(object)) {
    return false;
  }
  return isEqual(get(object, index), value);
}
