import { contextHasOwnProperty } from '../context'
import getPrototype from '../getPrototype'

export default function muHasKey(mu, key) {

  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.

  return (contextHasOwnProperty.call(mu, key) ||
    (typeof mu == 'object' && key in mu && getPrototype(mu) === null))
}
