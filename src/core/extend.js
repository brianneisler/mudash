import { Extendable } from './protocols'
export default function extend(data, def) {
  if (!Extendable.is(data)) {
    throw new Error('Expected Extendable data type')
  }
  return data.extend(def)
}
