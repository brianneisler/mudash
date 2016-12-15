import baseGet from './baseGet'
import baseIsMatch from './baseIsMatch'
import getMatchData from '../util/getMatchData'
import getSize from '../util/getSize'
import getKey from '../getKey'
import matchesStrictComparable from '../util/matchesStrictComparable'

export default function baseMatches(source) {
  const matchData = getMatchData(source)
  if (getSize(matchData) == 1 && baseGet(matchData, [0, 2], getKey)) {
    return matchesStrictComparable(baseGet(matchData, [0, 0], getKey), baseGet(matchData, [0, 1], getKey))
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData)
  }
}
