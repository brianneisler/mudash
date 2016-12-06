import pullAll from './pullAll'
export default function pullAllWith(data, values, comparator) {
  return pullAll(data, values, undefined, comparator)
}
