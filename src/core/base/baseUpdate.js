import baseGet from './baseGet'
import baseSet from './baseSet'

export default function baseUpdate(data, path, updater, setKeyFunc, getKeyFunc, options) {
  return baseSet(data, path, updater(baseGet(data, path, getKeyFunc)), setKeyFunc, options)
}
