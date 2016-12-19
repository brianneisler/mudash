const createFactory = baseFunc => {
  //TODO BRN: Can this be memoized?
  return (props, ...rest) => baseFunc(props, ...rest)
}

export default createFactory
