import _ from 'lodash'
import immutable from '../immutable'

const mapImmutable = values => _.map(values, (value) => immutable(value))
export default mapImmutable
