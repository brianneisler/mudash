mudash
=============

[Lodash](https://lodash.com) wrapper providing [Immutable.JS](https://facebook.github.io/immutable-js/) support


## Benefits
- All the benefits of Lodash brought to Immutable.JS
- Supports both standard mutable values and Immutable.JS data types
- Converts types based on data hinting
- Supports mixed nested data types making it easier to process values of mixed Immutable.JS/mutable data objects
- All Lodash methods have been rewritten to be fully immutable operations (for both mutable and Immutable.JS data types)
- Supports [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) bringing functional programming to Immutable.JS


## Build Status

[![npm version](https://badge.fury.io/js/mudash.svg)](https://badge.fury.io/js/mudash)<br />
[![Build Status](https://travis-ci.org/brianneisler/mudash.svg)](https://travis-ci.org/brianneisler/mudash)<br />
[![NPM](https://nodei.co/npm/mudash.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mudash/)


## Documentation

[Full API documentation](docs/API.md) - Learn about each method


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

#### Some Immutable.JS methods conflict with Lodash methods (mudash chooses Lodash)
For example, Immutable's `merge` is the equivalent of Lodash's `assign` and Lodash's `merge` is the equivalent of Immutable's `mergeDeep`. In order to reconcile this we have opted for Lodash's signature over Immutable's. Therefore, for this example, use `assign` for a shallow merge and `merge` for a deep merge.

#### Lodash has methods that mutate values (mudash does not)
In a few cases Lodash mutates values. In the case of mutable values that are passed to these methods in mudash the method will no longer mutate the value. This has resulted in a slight change to the [signature of a few methods](./docs/FAQ.md#what-functions-are-different-from-lodash).
