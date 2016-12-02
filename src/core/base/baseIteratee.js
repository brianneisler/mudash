import _ from 'lodash'
import baseMatches from './baseMatches'
import baseMatchesProperty from './baseMatchesProperty'
import baseProperty from './baseProperty'
import identity from '../identity'

export default function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value
  }
  if (value == null) {
    return identity
  }
  if (typeof value == 'object') {
    return _.isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value)
  }
  return baseProperty(value)
}
