import baseGet from './baseGet'
import baseIsMatch from './baseIsMatch'
import getMatchData from './getMatchData'
import getSize from './getSize'
import matchesStrictComparable from './matchesStrictComparable'

export default function baseMatches(source) {
  const matchData = getMatchData(source)
  if (getSize(matchData) == 1 && baseGet(matchData, [0, 2])) {
    return matchesStrictComparable(baseGet(matchData, [0, 0]), baseGet(matchData, [0, 1]))
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData)
  }
}
