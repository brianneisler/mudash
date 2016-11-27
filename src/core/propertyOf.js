import get from './get'
export default function propertyOf(data) {
  return (path) => {
    return get(data, path)
  }
}
