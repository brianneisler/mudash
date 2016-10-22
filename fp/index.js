var convert = require('lodash/fp/convert') //eslint-disable-line no-var
var lodash = require('lodash') //eslint-disable-line no-var
var mudash = require('../dist') //eslint-disable-line no-var
var _ = lodash.runInContext() //eslint-disable-line no-var
var extensions = _.mixin(mudash) //eslint-disable-line no-var
module.exports = lodash.reduce(extensions, (result, ext, name) => {
  if (lodash.isFunction(ext)) {
    return lodash.set(result, name, convert(name, ext, {
      'cap': true,
      'curry': true,
      'fixed': true,
      'immutable': false,
      'rearg': true
    }))
  }
  return lodash.set(result, name, ext)
}, {})
