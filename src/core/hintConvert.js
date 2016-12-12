import { hintIm } from './hints'
import immutable from './immutable'
import mutable from './mutable'

export default function hintConvert(data, value) {
  return hintIm(
    data,
    immutable,
    mutable,
    value
  )
}
