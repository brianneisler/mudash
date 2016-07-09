import baseHas from './baseHas';
import hasKey from './hasKey';

export default function has(object, path) {
  return object != null && baseHas(object, path, hasKey);
}
