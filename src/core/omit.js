import { baseOmit } from './base'
import flatten from './flatten'

export default function omit(data, ...paths) {
  return data == null ? {} : baseOmit(data, flatten(paths))
}
