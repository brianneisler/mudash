import createFactory from './createFactory'
import getDisplayName from './getDisplayName'

const wrapDisplayName = displayName => baseFunc => {
  const factory = createFactory(baseFunc)
  return (props, ...rest) => {
    const result = factory(props, ...rest)
    if (result) {
      result.displayName = `${displayName}(${getDisplayName(result)})`
    }
    return result
  }
}

export default wrapDisplayName
