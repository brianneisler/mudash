export function strings() {
  return ['', 'a', 'abc' ]
}

export function stringObjects({ Object: _Object }) {
  return [_Object(''), _Object('a'), _Object('abc')]
}
