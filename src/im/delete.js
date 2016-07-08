import _ from 'lodash';
export default function _delete(data, path) {
  return data.delete(_.toPath(path));
}
