import * as util from '../util'
import createFactory from './createFactory'
import createHelper from './createHelper'

const withHintConvert = baseFunc => {
  const factory = createFactory(baseFunc)
  return (props, ...rest) => factory({
    ...props,
    expected: util.hintConvert(props.inputs.data, props.expected)
  }, ...rest)
}
export default createHelper(withHintConvert, 'withHintConvert', true, true)
