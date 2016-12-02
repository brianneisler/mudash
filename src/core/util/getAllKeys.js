import baseGetAllKeys from '../base/baseGetAllKeys'
import baseKeys from '../base/baseKeys'
import getSymbols from './getSymbols'
export default function getAllKeys(object) {
  return baseGetAllKeys(object, baseKeys, getSymbols)
}
