import baseIsMatch from './baseIsMatch'
import getMatchData from './getMatchData'

export default function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source))
}
