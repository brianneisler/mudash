export function nils() {
  return [ NaN, null, undefined]
}

export function nilObjects({ Object: _Object }) {
  return [ _Object(NaN)]
}
