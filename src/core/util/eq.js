export default function eq(value, other) {
  return value === other || (value !== value && other !== other)
}
