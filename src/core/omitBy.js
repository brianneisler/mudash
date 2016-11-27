import filterNot from './filterNot'
import identity from './identity'

export default function omitBy(data, predicate = identity) {
  return filterNot(data, predicate)
}
