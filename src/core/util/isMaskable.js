import _ from 'lodash'
import { coreJsData } from '../context'
import stubFalse from '../stubFalse'
const isMaskable = coreJsData ? _.isFunction : stubFalse
export default isMaskable
