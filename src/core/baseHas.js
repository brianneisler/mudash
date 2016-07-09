import _ from 'lodash';
import isIndex from './isIndex';
import isKey from './isKey';
import toKey from './toKey';

export default function baseHas(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : _.toPath(path);

  let result;
  let index = -1;
  let { length } = path;
  let key;

  while (++index < length) {
    key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  length = object ? object.length : 0;
  return !!length && _.isLength(length) && isIndex(key, length) &&
    (_.isArray(object) || _.isString(object) || _.isArguments(object));
}
