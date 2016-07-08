import filterNot from './filterNot';

export default function omitBy(data, predicate) {
  return filterNot(data, predicate);
}
