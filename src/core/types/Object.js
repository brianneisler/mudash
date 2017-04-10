import deftype from '../deftype'
import isObject from '../isObject'

export default deftype('Object', {
  is(value) {
    return isObject(value)
  }
})
