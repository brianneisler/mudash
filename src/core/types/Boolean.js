import deftype from '../deftype'
import isBoolean from '../isBoolean'

export default deftype('Boolean', {
  is(value) {
    return isBoolean(value)
  }
})
