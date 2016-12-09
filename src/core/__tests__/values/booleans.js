export function booleans() {
  return [ true, false ]
}

export function booleanObjects({ Object: _Object }) {
  return [ _Object(true), _Object(false) ]
}
