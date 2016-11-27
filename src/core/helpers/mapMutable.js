import _ from 'lodash'
import mutable from '../mutable'

const mapMutable = values => _.map(values, (value) => mutable(value))
export default mapMutable
