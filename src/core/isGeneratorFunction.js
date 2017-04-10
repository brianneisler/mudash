export default function isGeneratorFunction(data) {
  return typeof data === 'function' &&
    data.constructor &&
    data.constructor.name === 'GeneratorFunction'
}
