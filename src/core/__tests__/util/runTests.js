import _ from 'lodash'
import createTests from './createTests'
export default function runTests(tests, context, factory) {
  _.each(createTests(tests, context, factory), (test) => test())
}
