// export default function basePullAll(array, values, iteratee, comparator) {
//   var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
//       index = -1,
//       length = values.length,
//       seen = array;
//
//   if (array === values) {
//     values = copyArray(values);
//   }
//   if (iteratee) {
//     seen = arrayMap(array, baseUnary(iteratee));
//   }
//   while (++index < length) {
//     var fromIndex = 0,
//         value = values[index],
//         computed = iteratee ? iteratee(value) : value;
//
//     while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
//       if (seen !== array) {
//         splice.call(seen, fromIndex, 1);
//       }
//       splice.call(array, fromIndex, 1);
//     }
//   }
//   return array;
// }
