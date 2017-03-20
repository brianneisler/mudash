import baseOmitBy from './baseOmitBy'
import has from '../has'

export default function baseOmit(data, paths) {
  return baseOmitBy(data, paths, (value, path) => has(data, path))
}
