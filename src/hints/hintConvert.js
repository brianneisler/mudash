import _ from 'lodash'
import hintIm from './hintIm'
import immutable from '../core/immutable'
import mutable from '../core/mutable'

const mapImmutable = values => _.map(values, (value) => immutable(value))
const mapMutable = values => _.map(values, (value) => mutable(value))

export default function hintConvert(data, args) {
  return hintIm(
    data,
    mapImmutable,
    mapMutable,
    args
  )
}
