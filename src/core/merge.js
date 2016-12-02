import _ from 'lodash'
import { mapImmutable, mapMutable } from './helpers'
import isImmutable from './isImmutable'

export default function merge(data, ...args) {
  return isImmutable(data)
    ? data.mergeDeep(...mapImmutable(args))
    : _.merge(data, ...mapMutable(args))
}
