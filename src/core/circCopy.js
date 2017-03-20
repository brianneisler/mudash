export default function circCopy(src, srcStart, dest, destStart) {
  for (let count = 0; count < length; count += 1) {
    dest[destStart + count] = src[srcStart + count]
  }
}
//
// if (obj.tail !== obj.head) {
//     list = circCopy(obj.list, obj.tail, list, 0)
//     return RingBuffer({
//       ...obj,
//       tail: 0,
//       head: obj.length,
//       list
//     })
//   } else if (obj.tail > obj.head) {
//     list = circCopy(obj.list, obj.tail, list, 0, obj.list.size - obj.tail)
//     list = circCopy(obj.list, 0, newArr, this.arr.length - this.tail, this.head)
//     this.tail = 0
//     this.head = this.length
//     this.arr = newArr
//   }
