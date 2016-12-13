import Immutable from 'immutable'
import _ from 'lodash'

export default function indexed() {
  return {
    'an array': _.toArray,
    'an Immutable.List': Immutable.List,
    'an Immutable.Stack': Immutable.Stack,
    'an Immutable.Seq': Immutable.Seq
  }
}
