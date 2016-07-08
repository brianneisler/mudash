import isImmutable from './isImmutable';

export default function isMutable(value) {
  return !isImmutable(value);
}
