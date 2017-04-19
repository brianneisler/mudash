import toFinite from './toFinite'

export default function toInteger(data) {
  const result = toFinite(data)
  const remainder = result % 1

  return result === result ? (remainder ? result - remainder : result) : 0
}
