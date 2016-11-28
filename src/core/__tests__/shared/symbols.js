export default function symbols({ Symbol: _Symbol }) {
  const symbol1 = _Symbol ? _Symbol('a') : true
  const symbol2 = _Symbol ? _Symbol('b') : false
  return [ symbol1, symbol2 ]
}
