import reduce from './reduce'
export default function reduceReducers(...reducers) {
  return (previous, ...args) =>
    reduce(reducers,
      (current, reducer) => reducer(current, ...args),
      previous
    )
}
