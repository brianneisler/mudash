import _ from 'lodash';
import { deepClone } from './customizers';

export default function cloneDeep(data) {
  return _.cloneDeepWith(data, deepClone);
}
