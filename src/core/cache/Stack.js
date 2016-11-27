import { LARGE_ARRAY_SIZE } from '../constants'
import { Map } from '../util'
import ListCache from './ListCache'
import MapCache from './MapCache'

export default class Stack {

  constructor(entries) {
    const data = this.__data__ = new ListCache(entries)
    this.size = data.size
  }

  clear() {
    this.__data__ = new ListCache
    this.size = 0
  }

  delete(key) {
    const data = this.__data__
    const result = data['delete'](key)

    this.size = data.size
    return result
  }

  get(key) {
    return this.__data__.get(key)
  }

  has(key) {
    return this.__data__.has(key)
  }

  set(key, value) {
    let data = this.__data__
    if (data instanceof ListCache) {
      const pairs = data.__data__
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value])
        this.size = ++data.size
        return this
      }
      data = this.__data__ = new MapCache(pairs)
    }
    data.set(key, value)
    this.size = data.size
    return this
  }
}
