import * as core from './core'
import _ from 'lodash'
const lodash = _.runInContext()
const exports = lodash.mixin(core)
exports.prototype.valueOf = exports.prototype.toJSON = exports.prototype.value = exports.wrapperValue

module.exports = exports
