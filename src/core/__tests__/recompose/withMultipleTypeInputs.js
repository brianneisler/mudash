import _ from 'lodash'
import * as util from '../util'
import createFactory from './createFactory'
import createHelper from './createHelper'

const withMultipleTypeInputs = baseFunc => {
  const factory = createFactory(baseFunc)
  return (props, ...rest) => factoryTestsForTypes(factory, props, ...rest)
}

export default createHelper(withMultipleTypeInputs, 'withMultipleTypeInputs', true, true)

function factoryTestsForTypes(factory, props, ...rest) {
  return _.map(generateInputs(props.inputs), (inputs) => factory({
    ...props,
    inputs: _.mapValues(inputs, (value) =>
      _.isArray(value)
        ? _.map(value, (arrVal) => arrVal.input)
        : value.input
    ),
    expectedInputs: _.mapValues(inputs, (value) =>
      _.isArray(value)
        ? _.map(value, (arrVal) => arrVal.expected)
        : value.expected
    ),
    name: `${props.name} ${_.map(inputs, (value, inputName) => `with ${inputName} as ${value.name}`).join(' and ')}`
  }, ...rest))
}

function generateInputs(inputs) {
  const inputsMap = generateInputsMap(inputs)
  return combinations(inputsMap)
}

function combinations(data) {
  return combinationsGeneratorWithData(data)([], 0, _.isArray(data) ? [] : {})
}

function combinationsGeneratorWithData(data) {
  const keys = _.keys(data)
  const numKeys = _.size(keys)

  const recurGenerateCombinations = (result, keyIndex, values) => {
    const key = keys[keyIndex]
    const nextIndex = keyIndex + 1
    const datas = data[key]
    if (_.size(datas) > 0) {
      return _.reduce(datas, (combs, item) => {
        let comb = _.clone(values)
        comb = _.set(comb, key, item)
        return nextCombination(combs, nextIndex, comb)
      }, result)
    }
    return nextCombination(result, nextIndex, values)
  }

  function nextCombination(result, nextIndex, values) {
    if (nextIndex < numKeys) {
      return recurGenerateCombinations(result, nextIndex, values)
    }
    result.push(values)
    return result
  }
  return recurGenerateCombinations
}

function generateInputsMap(inputs) {
  return _.reduce(inputs, (result, input, key) => {
    let values = []
    if (_.isArray(input)) {
      values = generateInputs(input)
    } else if (input.types) {
      values = _.map(input.types, (inputType, inputTypeName) => {
        return generateInput(input.value, input.clone, inputType, inputTypeName)
      })
    } else {
      values.push(generateInput(input.value, input.clone, null, util.getType(input.value)))
    }
    return _.set(result, key, values)
  }, _.isArray(inputs) ? [] : {})
}

function generateInput(value, clone, type, name) {
  const input = type ? type(value) : value
  return {
    input,
    expected: clone ? util.clone(input) : input,
    name
  }
}
