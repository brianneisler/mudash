import isFunction from '../isFunction';
import isUndefined from '../isUndefined';

export default function cloneWith(data, customizer) {
  if (isFunction(customizer)) {
    const result = customizer(data);
    if (!isUndefined(result)) {
      return result;
    }
  }
  return data;
}
