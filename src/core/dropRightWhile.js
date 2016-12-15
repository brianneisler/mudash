import size from './size'
import hintConvert from './hintConvert'
import getIteratee from './util/getIteratee'
import baseWhile from './base/baseWhile'

export default function dropRightWhile(data, predicate) {
  return (data && size(data))
    ? baseWhile(data, getIteratee(predicate), true, true)
    : hintConvert(data, [])
}
