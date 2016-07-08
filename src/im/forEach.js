export default function forEach(data, sideEffect) {
  data.forEach(sideEffect);
  return data;
}
