import deftype from '../deftype'
import isImmutableList from '../isImmutableList'

export default deftype('List', {
  is(value) {
    return isImmutableList(value)
  }
})
