import _ from 'lodash';
import { deepClone } from './composers';

export default function cloneDeepWith(data, customizer) {
  return _.cloneDeepWith(data, deepClone(customizer));
}
