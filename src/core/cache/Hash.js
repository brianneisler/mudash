import { HASH_UNDEFINED } from '../constants'
import { contextHasOwnProperty } from '../context'
import { nativeCreate } from '../native'

export default class Hash {
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  clear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {}
    this.size = 0
  }

  delete(key) {
    const result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }

  get(key) {
    const data = this.__data__
    if (nativeCreate) {
      const result = data[key]
      return result === HASH_UNDEFINED ? undefined : result
    }
    return contextHasOwnProperty.call(data, key) ? data[key] : undefined
  }

  has(key) {
    const data = this.__data__
    return nativeCreate ? data[key] !== undefined : contextHasOwnProperty.call(data, key)
  }

  set(key, value) {
    const data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value
    return this
  }
}
