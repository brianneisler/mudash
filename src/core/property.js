import get from './get'
export default function property(path) {
  return (data) => {
    return get(data, path)
  }
}
