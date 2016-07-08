import _ from 'lodash';
import each from './each';
import isFunction from './isFunction';
import isImmutable from './isImmutable';
import isUndefined from './isUndefined';

export default function deepClone(customizer) {
  const cloner = (data, key, object) => {
    if (isFunction(customizer)) {
      const result = customizer(data, key, object);
      if (!isUndefined(result)) {
        return result;
      }
    }
    if (isImmutable(data)) {
      each(data, (value, _key) => {
        data = data.set(_key, _.cloneDeepWith(value, cloner));
      });
      return data;
    }
  };
  return cloner;
}
