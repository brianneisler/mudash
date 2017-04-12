import { curry } from 'lodash'

export default function defn(func, arity) {
  return curry(func, arity)
}
