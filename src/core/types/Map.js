import deftype from '../deftype'
import isImmutableMap from '../isImmutableMap'

export default deftype('Map', {
  is(value) {
    return isImmutableMap(value)
  }
})
