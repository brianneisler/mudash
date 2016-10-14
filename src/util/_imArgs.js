import { immutable } from '../core'
import _ from 'lodash'

export default function _imArgs(im) {
  return (data, ...args) => {
    args = _.map(args, (value) => {
      return immutable(value)
    })
    return im(data, ...args)
  }
}
