import _ from 'lodash';
import each from './each';
import isImmutable from './isImmutable';

export default function deepClone(data) {
  if (isImmutable(data)) {
    each(data, (value, key) => {
      data = data.set(key, _.cloneDeepWith(value, deepClone));
    });
    return data;
  }
}
