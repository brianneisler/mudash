import { coreJsData } from '../context'
import isFunction from '../isFunction'
import stubFalse from '../stubFalse'
const isMaskable = coreJsData ? isFunction : stubFalse
export default isMaskable
