import _ from 'lodash';
import isKey from './isKey';
import toKey from './toKey';

export default function baseGet(object, path, getFunc) {
  path = isKey(path, object) ? [path] : _.toPath(path);

  let index = 0;
  const length = path.length;

  while (object != null && index < length) {
    const key = toKey(path[index++]);
    object = getFunc(object, key);
  }
  return (index && index == length) ? object : undefined;
}
