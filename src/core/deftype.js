//import assoc from './assoc'
import _ from 'lodash'
import Immutable from 'immutable'
import isFunction from './isFunction'

const imFunction = _.memoize((name) => function(...args) {
  return this['@@functions'][name].call(null, ...args, this)
})
const imProp = _.memoize((name) => ({
  enumerable: true,
  get: function() {
    return this['@@data'].get(name)
  },
  set: function() {
    throw new Error(`Cannot set immutable property '${name}'`)
  }
}))

const isType = (value) => (!!value && !!value['@@type'])

export default function deftype(name, def) {
  const functions = _.reduce(def, (result, value, key) => {
    return isFunction(value) && !isType(value)
      ? _.set(result, key, value)
      : result
  }, {})
  // const props = reduce(def, (result, value, key) => {
  //   return isClass(value)
  //     ? set(result, key, value)
  //     : result
  // }, {})
  class NewType extends Type {
    static get name() { return name }
    // set(key, value) {
    //   //TODO BRN: check type
    //   return super.set(key, value)
    // }

    constructor(data, fns) {
      super(data, fns)
      _.each(def, (value, prop) => {
        if (isType(value)) {
          Object.defineProperty(this, prop, imProp(prop))
        }
      })
    }
    toString() {
      return this['@@data'].__toString(`${name} {`, '}')
    }
  }

  _.each(def, (value, prop) => {
    if (!isType(value) && isFunction(value)) {
      NewType.prototype[prop] = imFunction(prop)
    }
  })

  const makeType = function(data) {
    return new NewType(data, functions)
  }
  makeType['@@type'] = NewType
  return makeType
}


// function User(properties) {
//     var self = this; // make sure we can access this inside our anon function
//     for (var i in properties) {
//         (function(i) {
//             Object.defineProperty(self, i, {
//                 // Create a new getter for the property
//                 get: function () {
//                     return properties[i];
//                 },
//                 // Create a new setter for the property
//                 set: function (val) {
//                     properties[i] = val;
//                 }
//             })
//         })(i);
//     }
// }

class Type {
  constructor(data, functions) {
    Object.defineProperty(this, '@@data', {
      value: Immutable.Map(data) || Immutable.Map({})
    })
    Object.defineProperty(this, '@@functions', {
      value: functions
    })
    // this['@@data'] = Immutable.Map(data) || Immutable.Map({})
    // this['@@functions'] = functions
  }
  delete(key) {
    return this['@@data'].delete(key)
  }
  get(key) {
    return this['@@data'].get(key)
  }
  has(key) {
    return this['@@data'].has(key)
  }
  set(key, value) {
    return new this.constructor(
      this['@@data'].set(key, value),
      this['@@functions']
    )
  }
  inspect() {
    return this.toString()
  }
  [Symbol.iterator]() {
    return this['@@data'].keys()
  }
}
