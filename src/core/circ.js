import circularShift from './circularShift'
export default function circ(func, number) {
  return (...args) => func(circularShift(args, number))
}
