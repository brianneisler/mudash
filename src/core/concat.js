import Concatable from './protocols/Concatable'
import hintConvert from './hintConvert'

export default function concat(data, ...args) {
  if (!Concatable.is(data)) {
    data = hintConvert(data, [data])
  }
  return data.concat(...args)
}
