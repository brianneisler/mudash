var _ = require('lodash') //eslint-disable-line no-var
var lodash = _.runInContext() //eslint-disable-line no-var
module.exports = lodash.mixin(require('./dist'))
