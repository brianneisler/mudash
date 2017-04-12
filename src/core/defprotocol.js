import objectKeys from './object/objectKeys'
import isFunction from './isFunction'

export default function defprotocol(def) {
  return new Protocol(def)
}

class Protocol {
  constructor(def) {
    this.def = def
    this.keys = objectKeys(def)
  }

  extend(def) {
    return new Protocol({
      ...this.def,
      ...def
    })
  }

  inherit(extendable) {
    if (!extendable || !isFunction(extendable.extend)) {
      throw new Error('Expected Extendable data type')
    }
    return extendable.extend(this.def)
  }

  is(value) {
    if (!value) {
      return false
    }

    let index = -1
    const { keys } = this
    let size = keys.length

    while (size--) {
      const key = keys[++index]
      if (!isFunction(value[key])) {
        return false
      }
    }
    return true
  }
}
