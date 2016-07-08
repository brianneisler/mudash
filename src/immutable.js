import _ from 'lodash';
import isMutable from './isMutable';
import toImmutable from './toImmutable';

export default function immutable(data) {
  return isMutable(data) && (_.isObjectLike(data) || _.isArray(data)) ?
    toImmutable(data) : data;
}
