/* eslint-disable no-console */
import _ from '../'
import fp from '../fp'
import Immutable from 'immutable'

const users = Immutable.fromJS([
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
])

const result = _.find(users, { 'age': 1, 'active': true }) //Map { 'user': 'pebbles', 'age': 1,  'active': true }
console.log(result)

const result2 = fp.find({ 'age': 1, 'active': true })(users)
console.log(result2)
