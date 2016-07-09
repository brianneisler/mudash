import _ from 'lodash';
import { isDeepProp, isPlainProp } from '../regex';

export default function isKey(value, object) {
  if (_.isArray(value)) {
    return false;
  }
  const type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || _.isSymbol(value)) {
    return true;
  }
  return isPlainProp.test(value) || !isDeepProp.test(value) ||
    (object != null && value in Object(object));
}
