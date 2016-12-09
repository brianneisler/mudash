import _ from 'lodash'
import { booleans, booleanObjects } from './booleans'
import { nils, nilObjects } from './nils'
import { numbers, numberObjects } from './numbers'
import { strings, stringObjects } from './strings'
import symbols  from './symbols'

const typeMap = {
  booleans,
  booleanObjects,
  nils,
  nilObjects,
  numbers,
  numberObjects,
  strings,
  stringObjects,
  symbols
}
export default function primitives(context, selected = ['booleans', 'booleanObjects', 'nils', 'nilObjects', 'numbers', 'numberObjects', 'strings', 'stringObjects', 'symbols']) {
  return _.flatten(
    _.map(_.pick(typeMap, selected), type => type(context))
  )
}
