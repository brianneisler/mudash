import _ from 'lodash'
import isImmutable from './isImmutable'
import { mapImmutable, mapMutable } from '../helpers'

export default function assign(data, ...args) {
  return isImmutable(data)
    ? data.merge(...mapImmutable(args))
    : _.assign(data, ...mapMutable(args))
}
