import _ from 'lodash'
import booleans from './booleans'
import nils from './nils'
import numbers from './numbers'
import strings from './strings'
import symbols  from './symbols'

const typeMap = {
  booleans,
  nils,
  numbers,
  strings,
  symbols
}
export default function primitives(context, selected = ['booleans', 'nils', 'numbers', 'strings', 'symbols']) {
  return _.flatten(
    _.map(_.pick(typeMap, selected), type => type(context))
  )
}
