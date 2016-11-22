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
