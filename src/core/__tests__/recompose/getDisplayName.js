import _ from 'lodash'

const getDisplayName = result => {
  if (_.isString(result)) {
    return result
  }

  if (!result) {
    return undefined
  }

  return result.displayName || result.name || 'Test'
}

export default getDisplayName
