import _ from 'lodash'

const getDisplayName = module => {
  if (_.isString(module)) {
    return module
  }

  if (!module) {
    return undefined
  }

  return module.displayName || module.name || 'Module'
}

export default getDisplayName
