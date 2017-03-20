export default function baseReduce(data, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(data, (value, index, collection) => {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection)
  })
  return accumulator
}
