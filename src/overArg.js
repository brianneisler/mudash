export default function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
