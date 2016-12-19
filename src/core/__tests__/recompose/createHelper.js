import compose from '../util/compose'
import wrapDisplayName from './wrapDisplayName'

const createHelper = (func, helperName, setDisplayName = true, noArgs = false) => {
  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    if (noArgs) {
      return compose(
        func,
        wrapDisplayName(helperName)
      )
    }

    return (...args) => compose(
      func(...args),
      wrapDisplayName(helperName)
    )
  }
  return func
}

export default createHelper
