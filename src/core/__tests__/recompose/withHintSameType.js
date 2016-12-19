import * as util from '../util'
import createFactory from './createFactory'
import createHelper from './createHelper'

const withHintSameType = baseFunc => {
  const factory = createFactory(baseFunc)
  return (props, ...rest) => factory({
    ...props,
    expected: util.hintSameType(props.inputs.data, props.expected)
  }, ...rest)
}
export default createHelper(withHintSameType, 'withHintSameType', true, true)
