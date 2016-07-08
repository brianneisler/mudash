import _ from 'lodash';

export default function mutableMergeIn(data, path, ...args) {
  if (path.length > 0) {
    return _.set(data, path, _.merge(_.get(data, path), ...args));
  }
  return _.merge(data, ...args);
}
