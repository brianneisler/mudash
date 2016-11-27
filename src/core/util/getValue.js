export default function getValue(object, key) {
  return object == null ? undefined : object[key]
}
