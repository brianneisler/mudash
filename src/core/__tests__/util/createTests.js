import _ from 'lodash'
import createTest from './createTest'

export default function createTests(descriptions, context, factory) {
  return _.reduce(descriptions, (tests, description, name) => {
    if (_.isFunction(description)) {
      description = description()
    }
    description = {
      ...description,
      name
    }
    tests.push(createTest(description, context, factory))
    return tests
  }, [])
}
