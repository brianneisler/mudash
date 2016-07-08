import _ from 'lodash';

export default function push(data, value) {
  if (data && _.isFunction(data.push)) {
    data.push(value);
  }
  return data;
}
