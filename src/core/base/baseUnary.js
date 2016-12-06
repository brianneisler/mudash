export default function baseUnary(func) {
  return (value) => func(value)
}
