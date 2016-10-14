import _ from 'lodash'
import { mutable } from '../core'

export default function _muArgs(mu) {
  return (data, ...args) => {
    args = _.map(args, (value) => {
      return mutable(value)
    })
    return mu(data, ...args)
  }
}
