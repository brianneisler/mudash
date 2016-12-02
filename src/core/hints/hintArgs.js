import hintIm from './hintIm'
import mapImmutable from '../helpers/mapImmutable'
import mapMutable from '../helpers/mapImmutable'

export default function hintArgs(data, args) {
  return hintIm(
    data,
    mapImmutable,
    mapMutable,
    args
  )
}
