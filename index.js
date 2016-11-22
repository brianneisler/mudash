var _ = require('lodash') //eslint-disable-line no-var
var lodash = _.runInContext() //eslint-disable-line no-var
var exports = lodash.mixin(require('./dist')) //eslint-disable-line no-var
exports.prototype.valueOf = exports.prototype.toJSON = exports.prototype.value = function() {
  return exports.baseWrapperValue(this.__wrapped__, this.__actions__)
}
module.exports = exports
