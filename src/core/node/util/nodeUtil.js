import { freeProcess } from '../../free'

const nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {} // eslint-disable-line no-empty
}())
export default nodeUtil
