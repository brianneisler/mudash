import objectKeys from '../object/objectKeys'
import deftype from '../deftype'
import isFunction from '../isFunction'
import _Object from './Object'

const Protocol = deftype('Protocol', {
  def: _Object,

  extend(def, obj) {
    // const extDef = defs.reduce((acc, def) => {
    //   return {
    //     ...acc,
    //     ...def
    //   }
    // }, {})
    return Protocol({
      def: {
        ...def,
        ...obj.def
      }
    })
  },

  is(value, obj) {
    let index = -1
    //TODO BRN: This is super slow. Figure out how to cache this...
    const keys = objectKeys(obj.def)
    let size = keys.length

    while (size--) {
      const key = keys[++index]
      if (!isFunction(value[key])) {
        return false
      }
    }
    return true
  }
})

export default Protocol
