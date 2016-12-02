//TODO BRN: This needs to be reworked to include context and overriding of iteratee
import baseIteratee from '../base/baseIteratee'
import iteratee from '../iteratee'

export default function getIteratee() {
  //var result = lodash.iteratee || iteratee;
  let result = iteratee
  result = result === iteratee ? baseIteratee : result
  return arguments.length ? result(arguments[0], arguments[1]) : result
}
