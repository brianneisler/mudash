import _ from 'lodash'
import isImmutable from './isImmutable'
import { mapImmutable, mapMutable } from './helpers'

export default function assign(data, ...args) {
  return isImmutable(data)
    ? data.merge(...mapImmutable(args))
    : _.assign(data, ...mapMutable(args))
}

// Conceptual idea on how to get context working again
// import { branchIm, compose, hintConvertRest } from '../recompose'
//
// const enhance = compose(
//   withLodash(),
//   hintConvertRest()
//   branchIm(
//     imAssign,
//     muAssign
//   )
// )
//
// const imAssign = () => (data, ...args) => data.merge(...args)
// const muAssign = ({ _ }) => (data, ...args) => _.assign(data, ...args)
//
// const assign = enhance()
// export default assign
