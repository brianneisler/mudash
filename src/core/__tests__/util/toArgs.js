export default function toArgs(array) {
  return (function() { return arguments }.apply(undefined, array))
}
