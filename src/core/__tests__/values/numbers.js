export function numbers() {
  return [ 0, -0, 1, -1, 1.1, -1.1, Infinity, -Infinity ]
}

export function numberObjects({ Object: _Object }) {
  return [  _Object(0), _Object(-0), _Object(1), _Object(-1), _Object(1.1), _Object(-1.1), _Object(Infinity), _Object(-Infinity)]
}
