import at from './at'
export default function select(paths, selector) {
  return (data, ...rest) => selector(...at(data, paths), ...rest)
}
