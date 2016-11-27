import _ from 'lodash'
import isImmutable from './isImmutable'
import { mapImmutable, mapMutable } from './helpers'

export default function merge(data, ...args) {
  return isImmutable(data)
    ? data.mergeDeep(...mapImmutable(args))
    : _.merge(data, ...mapMutable(args))
}
