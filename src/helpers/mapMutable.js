import _ from 'lodash'
import mutable from '../core/mutable'

const mapMutable = values => _.map(values, (value) => mutable(value))
export default mapMutable
