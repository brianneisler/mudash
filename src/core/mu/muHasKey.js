import { contextHasOwnProperty } from '../context'

export default function muHasKey(mu, key) {
  return mu != null && contextHasOwnProperty.call(mu, key)
}
