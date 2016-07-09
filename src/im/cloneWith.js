import _ from 'lodash';

export default function cloneWith(data, customizer) {
  if (_.isFunction(customizer)) {
    const result = customizer(data);
    if (!_.isUndefined(result)) {
      return result;
    }
  }
  return data;
}
