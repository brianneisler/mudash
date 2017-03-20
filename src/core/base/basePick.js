import basePickBy from './basePickBy'
import has from '../has'

export default function basePick(data, paths) {
  return basePickBy(data, paths, (value, path) => has(data, path))
}
