# API

*NOTES*
* These API docs are still being written. However, we have attempted to stick to the lodash signature as much as possible. So, in most cases, the [lodash documentation](https://lodash.com/docs) is a good point of reference.
* All Mudash methods are immutable. The [signatures of a few methods](./FAQ.md#what-functions-are-different-from-lodash) are different from Lodash.
* Mudash uses data type hinting to determine return type. In most cases if a method receives an Immutable data type it will return the result in an Immutable form and equivalent for mutable data.
* A few additional methods exist beyond what is provided by Lodash. These have been documented here.

## TOC
* [Array and Immutable.List](#array-and-immutablelist)
  + [`chunk()`](#chunk)
  + [`circularShift()`](#circularshift)
  + [`compact()`](#compact)
  + [`concat()`](#concat)
  + [`dropRight()`](#dropright)
  + [`pull()`](#pull)
  + [`pullAll()`](#pullall)
* [Collection and Immutable.Iterable](#collection-and-immutableiterable)
  + [`contains()`](#contains)
  + [`count()`](#count)
  + [`each()`](#each)
  + [`find()`](#find)
  + [`forEach()`](#foreach)
  + [`includes()`](#includes)
  + [`size()`](#count)
  + [`walk()`](#walk)
* [Function](#function)
  + [`apply()`](#apply)
  + [`call()`](#call)
  + [`circ()`](#circ)
  + [`compose()`](#compose)
* [Lang](#lang)
  + [`clone()`](#clone)
  + [`cloneDeep()`](#clonedeep)
  + [`cloneDeepWith()`](#clonedeepwith)
  + [`cloneWith()`](#clonewith)
  + [`isImmutable()`](#isimmutable)
  + [`isImmutableIndexedSeq()`](#isimmutableindexedseq)
  + [`isImmutableIterable()`](#isimmutableiterable)
  + [`isImmutableKeyedSeq()`](#isimmutablekeyedseq)
  + [`isImmutableList()`](#isimmutablelist)
  + [`isImmutableMap()`](#isimmutablemap)
  + [`isImmutableOrderedMap()`](#isimmutableorderedmap)
  + [`isImmutableOrderedSet()`](#isimmutableorderedset)
  + [`isImmutableSeq()`](#isimmutableseq)
  + [`isImmutableSet()`](#isimmutableset)
  + [`isImmutableSetSeq()`](#isimmutablesetseq)
  + [`isImmutableStack()`](#isimmutablestack)
  + [`toImmutable()`](#toimmutable)
  + [`toImmutableIndexedSeq()`](#toimmutableindexedseq)
  + [`toImmutableIterable()`](#toimmutableiterable)
  + [`toImmutableKeyedSeq()`](#toimmutablekeyedseq)
  + [`toImmutableList()`](#toimmutablelist)
  + [`toImmutableMap()`](#toimmutablemap)
  + [`toImmutableOrderedMap()`](#toimmutableorderedmap)
  + [`toImmutableOrderedSet()`](#toimmutableorderedset)
  + [`toImmutableSeq()`](#toimmutableseq)
  + [`toImmutableSet()`](#toimmutableset)
  + [`toImmutableSetSeq()`](#toimmutablesetseq)
  + [`toImmutableStack()`](#toimmutablestack)
  + [`toMutable()`](#tomutable)
* [Object and Immutable.Map](#object-and-immutablemap)
  + [`assign()`](#assign)
  + [`assoc()`](#assoc)
  + [`assocWith()`](#assocwith)
  + [`delete()`](#delete)
  + [`unset()`](#unset)


## Array and Immutable.List

### `chunk()`

```js
chunk(
  data: Array | List,
  size: number
): Array | List
```

Creates an array or list of elements split into groups the length of `size`. If `data` can't be split evenly, the final chunk will be the remaining elements.


## Collection and Immutable.Iterable

### `find()`

```js
find(
  collection: Array | Immutable.Iterable | Object,
  ?predicate=_.identity: (
    value: any,
    key: string | number,
    collection: Array | Immutable.Iterable | Object
  ) => boolean,
  ?fromIndex=0: number
): any
```

Iterates over elements of collection, returning the first element predicate returns truthy for.


## Function

### `compose()`

```js
compose(
  ...functions: Array<any => any>
): (...args:any) => any
```

Used to compose multiple functions together in to a single function


## Lang

### `isImmutable()`

*aliases:* `isIm`

```js
isImmutable(
  data: any
): boolean
```

Returns true if data is an immutable data type from immutable js. Otherwise false.


### `isImmutableIndexedSeq()`

*aliases:* `isImIndexedSeq`

```js
isImmutableIndexedSeq(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Seq.Indexed`][Immutable.Seq.Indexed]. Otherwise false.


### `isImmutableIterable()`

*aliases:* `isImIterable`

```js
isImmutableIterable(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Iterable`][Immutable.Iterable]. Otherwise false.


### `isImmutableKeyedSeq()`

*aliases:* `isImKeyedSeq`

```js
isImmutableKeyedSeq(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Seq.Keyed`][Immutable.Seq.Keyed]. Otherwise false.


### `isImmutableList()`

*aliases:* `isImList`

```js
isImmutableList(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.List`][Immutable.List]. Otherwise false.


### `isImmutableMap()`

*aliases:* `isImMap`

```js
isImmutableMap(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Map`][Immutable.Map]. Otherwise false.


### `isImmutableOrderedMap()`

*aliases:* `isImOrderedMap`

```js
isImmutableOrderedMap(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.OrderedMap`][Immutable.OrderedMap]. Otherwise false.


### `isImmutableOrderedSet()`

*aliases:* `isImOrderedSet`

```js
isImmutableOrderedSet(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.OrderedSet`][Immutable.OrderedSet]. Otherwise false.


### `isImmutableSeq()`

*aliases:* `isImSeq`

```js
isImmutableSeq(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Seq`][Immutable.Seq]. Otherwise false.


### `isImmutableSet()`

*aliases:* `isImSet`

```js
isImmutableSet(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Set`][Immutable.Set]. Otherwise false.


### `isImmutableSetSeq()`

*aliases:* `isImSetSeq`

```js
isImmutableSetSeq(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Seq.Set`][Immutable.Seq.Set]. Otherwise false.


### `isImmutableStack()`

*aliases:* `isImStack`

```js
isImmutableStack(
  data: any
): boolean
```

Returns true if data is of type [`Immutable.Stack`][Immutable.Stack]. Otherwise false.

## Object and Immutable.Map


[Immutable.Iterable]: https://facebook.github.io/immutable-js/docs/#/Iterable
[Immutable.List]: https://facebook.github.io/immutable-js/docs/#/List
[Immutable.Map]: https://facebook.github.io/immutable-js/docs/#/Map
[Immutable.OrderedMap]: https://facebook.github.io/immutable-js/docs/#/OrderedMap
[Immutable.OrderedSet]: https://facebook.github.io/immutable-js/docs/#/OrderedSet
[Immutable.Seq]: https://facebook.github.io/immutable-js/docs/#/Seq
[Immutable.Seq.Indexed]: https://facebook.github.io/immutable-js/docs/#/Seq.Indexed
[Immutable.Seq.Keyed]: https://facebook.github.io/immutable-js/docs/#/Seq.Keyed
[Immutable.Seq.Set]: https://facebook.github.io/immutable-js/docs/#/Seq.Set
[Immutable.Set]: https://facebook.github.io/immutable-js/docs/#/Set
[Immutable.Stack]: https://facebook.github.io/immutable-js/docs/#/Stack
