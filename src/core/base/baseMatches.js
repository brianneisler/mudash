import getMatchData from '../util/getMatchData'
import matchesStrictComparable from '../util/matchesStrictComparable'
import count from '../count'
import getKey from '../getKey'
import baseGet from './baseGet'
import baseIsMatch from './baseIsMatch'

export default function baseMatches(source) {
  const matchData = getMatchData(source)
  if (count(matchData) == 1 && baseGet(matchData, [0, 2], getKey)) {
    return matchesStrictComparable(baseGet(matchData, [0, 0], getKey), baseGet(matchData, [0, 1], getKey))
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData)
  }
}
