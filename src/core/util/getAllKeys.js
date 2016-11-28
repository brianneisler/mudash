import baseGetAllKeys from './baseGetAllKeys'
import baseKeys from './baseKeys'
import getSymbols from './getSymbols'
export default function getAllKeys(object) {
  return baseGetAllKeys(object, baseKeys, getSymbols)
}
