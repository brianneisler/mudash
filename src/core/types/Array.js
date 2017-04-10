import deftype from '../deftype'
import isArray from '../isArray'

export default deftype('Array', {
  is(value) {
    return isArray(value)
  }
})
