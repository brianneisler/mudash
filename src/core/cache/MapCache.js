import { getMapData, Map } from '../util'
import Hash from './Hash'
import ListCache from './ListCache'

export default class MapCache {

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
    this.size = 0
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    }
  }

  delete(key) {
    const result = getMapData(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  get(key) {
    return getMapData(this, key).get(key)
  }

  has(key) {
    return getMapData(this, key).has(key)
  }

  set(key, value) {
    const data = getMapData(this, key)
    const size = data.size

    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }
}
