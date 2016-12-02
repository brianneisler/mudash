import { baseIsMatch } from './base'
import { getMatchData } from './util'

export default function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source))
}
