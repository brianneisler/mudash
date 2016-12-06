import baseIsNaN from '../base/baseIsNaN'
import eq from '../eq'

const withEqValue = (value) => value === value
  ? (data) => eq(data, value)
  : baseIsNaN

export default withEqValue
