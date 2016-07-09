import baseGet from './baseGet';
import getKey from './getKey';

export default function get(object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path, getKey);
  return result === undefined ? defaultValue : result;
}
