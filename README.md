mudash
=============

[Lodash](https://lodash.com) wrapper providing [immutable](https://facebook.github.io/immutable-js/) JS support


## Benefits
- All the benefits of lodash brought to immutable js
- Supports both mutable and immutable values
- Converts types based on data hinting
- Supports mixed nested data types making it easier to retrieve values from mixed immutable/mutable data sources
- supports [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) bringing functional programming to immutable js

## Build Status

[![npm version](https://badge.fury.io/js/mudash.svg)](https://badge.fury.io/js/mudash)<br />
[![Build Status](https://travis-ci.org/brianneisler/mudash.svg)](https://travis-ci.org/brianneisler/mudash)<br />
[![NPM](https://nodei.co/npm/mudash.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mudash/)


## Install

```js
npm install --save mudash
```

## Usage

```js
import _ from 'mudash'
import fp from 'mudash/fp'
import Immutable from 'immutable'

// Immutable example
const map = Immutable.Map({ a:1, b:2 })
_.set(map, 'c.d', 3)    // returns Map { "a": 1, "b": 2, "c": Map { "d": 3 } }
fp.set('c.d', 3)(map)   // returns Map { "a": 1, "b": 2, "c": Map { "d": 3 } }


// Mutable example
const obj = { a:1, b:2 }
_.set(obj, 'c.d', 3)    // returns { "a": 1, "b": 2, "c": { "d": 3 } }
fp.set('c.d', 3)(obj)   // returns { "a": 1, "b": 2, "c": { "d": 3 } }
```

## Gotchas

#### immutable merge vs lodash merge
immutable's `merge` is the equivalent of lodash's `assign` and lodash's `merge` is the equivalent of immutable's `mergeDeep`. In order to reconcile this we have opted for lodash's signature over immutable's. Therefore use `assign` for a shallow merge and `merge` when deep merging.

#### lodash has methods that mutate values
In many cases lodash mutates values. In the case of immutable values that are passed to these methods in mudash the method will no longer mutate the value. If a mutable value is passed to the method it WILL continue to mutate the value.
*In the future we may opt for an entirely immutable approach for both forms of data, similar to the approach for lodash-fp*
