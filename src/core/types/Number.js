import deftype from '../deftype'
import isNumber from '../isNumber'

export default deftype('Number', {
  is(value) {
    return isNumber(value)
  }
})
