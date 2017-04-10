export default function isGenerator(data) {
  return data &&
    typeof data.next === 'function' &&
    typeof data.throw === 'function'
}
