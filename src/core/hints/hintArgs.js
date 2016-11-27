import hintIm from './hintIm'
import { mapImmutable, mapMutable } from '../helpers'

export default function hintArgs(data, args) {
  return hintIm(
    data,
    mapImmutable,
    mapMutable,
    args
  )
}
