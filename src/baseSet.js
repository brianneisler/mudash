import _ from 'lodash';
import getKey from './getKey';
import isImmutable from './isImmutable';
import isIndex from './isIndex';
import isKey from './isKey';
import toImmutable from './toImmutable';
import toKey from './toKey';

export default function baseSet(data, path, value, setFunc, customizer) {
  path = isKey(path, data) ? [path] : _.toPath(path);

  let index = -1;
  let nested = data;
  const length = path.length;
  const lastIndex = length - 1;

  while (nested != null && ++index < length) {
    const key = toKey(path[index]);
    if (_.isObject(nested)) {
      let newValue = value;
      if (index != lastIndex) {
        const objValue = getKey(nested, key);
        const custom = isIndex(path[index + 1]) ? [] : {};
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = objValue == null
            ? (isImmutable(nested) ? toImmutable(custom) : custom)
            : objValue;
        }
      }
      setFunc(nested, key, newValue);
    }
    nested = getKey(nested, key);
  }
  return data;
}
