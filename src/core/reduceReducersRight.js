import reduceRight from './reduceRight'
export default function reduceReducersRight(...reducers) {
  return (previous, ...args) =>
    reduceRight(reducers,
      (current, reducer) => reducer(current, ...args),
      previous
    )
}
