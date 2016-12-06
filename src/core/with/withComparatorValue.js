const withComparatorValue = (comparator, value) => (data) => comparator(data, value)
export default withComparatorValue
