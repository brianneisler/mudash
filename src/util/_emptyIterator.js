export default function _emptyIterator() {
  return { next: () => ({done: true})};
}
