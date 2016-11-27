import isKeyable from './isKeyable'
export default function getMapData(map, key) {
  const data = map.__data__
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map
}
