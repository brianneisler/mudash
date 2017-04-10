import deftype from '../deftype'
import isString from '../isString'

export default deftype('String', {
  is(value) {
    return isString(value)
  }
})
