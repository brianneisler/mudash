# API

*NOTES*
- These API docs are still being written. However, we have attempted to stick to the lodash signature as much as possible. So, in most cases, the [lodash documentation](https://lodash.com/docs) is a good point of reference.
- mudash uses data type hinting to determine return type. In most cases if a method receives an immutable data type it will return the result in an immutable form and equivalent for mutable data
- A few additional methods exist beyond what is provided by lodash. These have been documented here.

## TOC

* [Array and List](#array-and-list)
  + [`chunk()`](#chunk)
* [Lang](#lang)
  + [`isImmutable()`](#isimmutable)
  + [`toImmutable()`](#toimmutable)
  + [`toMutable()`](#tomutable)


## Array and List

### `chunk()`

```js
chunk(
  data: Array | List,
  size: number
): Array | List
```

Creates an array or list of elements split into groups the length of `size`. If `data` can't be split evenly, the final chunk will be the remaining elements.


## Lang

### `isImmutable()`

```js
isImmutable(
  data: any
): boolean
```

Returns true if value is an immutable data type from immutable js. Otherwise false.
