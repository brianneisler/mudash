import { NUMBER_TAG } from './constants'
import getTag from './util/getTag'
import isObjectLike from './isObjectLike'

export default function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && getTag(value) == NUMBER_TAG)
}
