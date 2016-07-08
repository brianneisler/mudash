import _ from 'lodash';
import { _emptyIterator } from './util';
import Symbol from 'es6-symbol';

export default function iterator(data) {
  return _.isObject(data) ? data[Symbol.iterator]() : _emptyIterator();
}
