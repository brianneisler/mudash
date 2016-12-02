import reEscapeChar from '../regex/reEscapeChar'
import reLeadingDot from '../regex/reLeadingDot'
import rePropName from '../regex/rePropName'
import memoizeCapped from './memoizeCapped'

const stringToPath = memoizeCapped((string) => {
  const result = []
  if (reLeadingDot.test(string)) {
    result.push('')
  }
  string.replace(rePropName, (match, number, quote, value) => {
    result.push(quote ? value.replace(reEscapeChar, '$1') : (number || match))
  })
  return result
})
export default stringToPath
