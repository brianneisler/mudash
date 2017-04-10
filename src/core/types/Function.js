import deftype from '../deftype'
import isFunction from '../isFunction'

export default deftype('Function', {
  is(value) {
    return isFunction(value)
  }
})
