# API

*NOTES*
* These API docs are still being written. However, we have attempted to stick to the Lodash signature as much as possible. So, in most cases, the [lodash documentation](https://lodash.com/docs) is a good point of reference.
* All mudash methods are immutable. The [signatures of a few methods](./FAQ.md#what-functions-are-different-from-lodash) are different from Lodash.
* mudash uses data type hinting to determine return type. In most cases if a method receives an Immutable data type it will return the result in an Immutable form and equivalent for mutable data.
* A few additional methods exist beyond what is provided by Lodash. These have been documented here.

*Legend*
* *&ast;TODO* - Immutable.JS support still needs to be implemented
* *&ast;Lo* - No changes from Lodash method required (passthrough to Lodash)

## TOC
* [Array and Immutable.List](#array-and-immutablelist)
  + [`butLast()`](#butlast)
  + [`chunk()`](#chunk)
  + [`circularShift()`](#circularshift)
  + [`compact()`](#compact)
  + [`concat()`](#concat)
  + [`difference()`](#difference) *&ast;TODO*
  + [`differenceBy()`](#differenceby) *&ast;TODO*
  + [`differenceWith()`](#differencewith) *&ast;TODO*
  + [`drop()`](#drop)
  + [`dropRight()`](#dropright)
  + [`dropRightWhile()`](#droprightwhile)
  + [`dropWhile()`](#dropwhile)
  + [`fill()`](#fill) *&ast;TODO*
  + [`findIndex()`](#findindex)
  + [`findLastIndex()`](#findlastindex)
  + [`flatten()`](#flatten)
  + [`flattenDeep()`](#flattendeep)
  + [`flattenDepth()`](#flattendepth)
  + [`fromPairs()`](#frompairs) *&ast;TODO*
  + [`head()`](#head)
  + [`indexOf()`](#indexof)
  + [`initial()`](#initial) *&ast;TODO*
  + [`intersection()`](#intersection) *&ast;TODO*
  + [`intersectionBy()`](#intersectionby) *&ast;TODO*
  + [`intersectionWith()`](#intersectionwith) *&ast;TODO*
  + [`join()`](#join)
  + [`last()`](#last)
  + [`lastIndexOf()`](#lastindexof)
  + [`nth()`](#nth) *&ast;TODO*
  + [`pop()`](#pop)
  + [`pull()`](#pull)
  + [`pullAll()`](#pullall)
  + [`pullAllBy()`](#pullallby)
  + [`pullAllRight()`](#pullallright)
  + [`pullAllWith()`](#pullallwith)
  + [`pullAt()`](#pullat)
  + [`pullRight()`](#pullright)
  + [`push()`](#push)
  + [`pushAt()`](#pushat)
  + [`remove()`](#remove) *&ast;TODO*
  + [`reverse()`](#reverse)
  + [`shift()`](#shift)
  + [`slice()`](#slice)
  + [`sortedIndex()`](#sortedindex) *&ast;TODO*
  + [`sortedIndexBy()`](#sortedindexby) *&ast;TODO*
  + [`sortedIndexOf()`](#sortedindexof) *&ast;TODO*
  + [`sortedLastIndex()`](#sortedlastindex) *&ast;TODO*
  + [`sortedLastIndexBy()`](#sortedlastindexby) *&ast;TODO*
  + [`sortedLastIndexOf()`](#sortedlastindexof) *&ast;TODO*
  + [`sortedUniq()`](#sorteduniq) *&ast;TODO*
  + [`sortedUniqueBy()`](#sorteduniqueby) *&ast;TODO*
  + [`tail()`](#tail)
  + [`take()`](#take)
  + [`takeRight()`](#takeright)
  + [`takeRightWhile()`](#takerightwhile)
  + [`takeWhile()`](#takewhile)
  + [`union()`](#union) *&ast;TODO*
  + [`unionBy()`](#unionby) *&ast;TODO*
  + [`unionWith()`](#unionwith) *&ast;TODO*
  + [`uniq()`](#uniq)
  + [`uniqBy()`](#uniqby)
  + [`uniqWith()`](#uniqwith)
  + [`unzip()`](#unzip) *&ast;TODO*
  + [`unzipWith()`](#unzipwith) *&ast;TODO*
  + [`without()`](#without) *&ast;TODO*
  + [`xor()`](#xor) *&ast;TODO*
  + [`xorBy()`](#xorby) *&ast;TODO*
  + [`xorPartition()`](#xorpartition) *&ast;TODO*
  + [`xorWith()`](#xorwith) *&ast;TODO*
  + [`zip()`](#zip) *&ast;TODO*
  + [`zipObject()`](#zipobject) *&ast;TODO*
  + [`zipObjectDeep()`](#zipobjectdeep) *&ast;TODO*
  + [`zipWith()`](#zipwith) *&ast;TODO*
* [Collection and Immutable.Iterable](#collection-and-immutableiterable)
  + [`contains()`](#contains)
  + [`count()`](#count)
  + [`countBy()`](#countby) *&ast;TODO*
  + [`each()`](#each)
  + [`every()`](#every)
  + [`filter()`](#filter)
  + [`filterNot()`](#filternot)
  + [`find()`](#find)
  + [`findLast()`](#findlast) *&ast;TODO*
  + [`first()`](#first)
  + [`flatMap()`](#flatmap) *&ast;TODO*
  + [`flatMapDeep()`](#flatmapdeep) *&ast;TODO*
  + [`flatMapDepth()`](#flatmapdepth) *&ast;TODO*
  + [`forEach()`](#foreach)
  + [`forEachRight()`](#foreachright) *&ast;TODO*
  + [`groupBy()`](#groupBy)
  + [`includes()`](#includes)
  + [`includesWith()`](#includeswith)
  + [`invokeMap()`](#invokemap) *&ast;TODO*
  + [`keyBy()`](#keyby) *&ast;TODO*
  + [`map()`](#map)
  + [`orderBy()`](#orderby) *&ast;TODO*
  + [`partition()`](#partition) *&ast;TODO*
  + [`reduce()`](#reduce)
  + [`reduceReducers()`](#reducereducers)
  + [`reduceReducersRight()`](#reducereducersright)
  + [`reduceRight()`](#reduceright)
  + [`reject()`](#reject)
  + [`sample()`](#sample) *&ast;TODO*
  + [`sampleSize()`](#samplesize) *&ast;TODO*
  + [`shuffle()`](#shuffle) *&ast;TODO*
  + [`size()`](#size)
  + [`slice()`](#slice)
  + [`some()`](#some)
  + [`sortBy()`](#sortby) *&ast;TODO*
  + [`walk()`](#walk)
* [Date](#date)
  + [`now()`](#now) *&ast;Lo*
* [Function](#function)
  + [`after()`](#after) *&ast;Lo*
  + [`apply()`](#apply)
  + [`ary()`](#ary) *&ast;Lo*
  + [`before()`](#before)
  + [`bind()`](#bind) *&ast;Lo*
  + [`bindKey()`](#bindkey) *&ast;Lo*
  + [`call()`](#call)
  + [`circ()`](#circ)
  + [`compose()`](#compose)
  + [`curry()`](#curry) *&ast;Lo*
  + [`curryRight()`](#curryright) *&ast;Lo*
  + [`debounce()`](#debounce) *&ast;Lo*
  + [`defer()`](#defer) *&ast;Lo*
  + [`delay()`](#delay) *&ast;Lo*
  + [`flip()`](#flip) *&ast;Lo*
  + [`memoize()`](#memoize)
  + [`negate()`](#negate) *&ast;Lo*
  + [`once()`](#once) *&ast;Lo*
  + [`overArg()`](#overarg)
  + [`overArgs()`](#overargs) *&ast;Lo*
  + [`partial()`](#partial) *&ast;Lo*
  + [`partialRight()`](#partialright) *&ast;Lo*
  + [`rearg()`](#rearg) *&ast;Lo*
  + [`rest()`](#rest) *&ast;Lo*
  + [`select()`]('#select')
  + [`spread()`](#spread) *&ast;Lo*
  + [`throttle()`](#throttle) *&ast;Lo*
  + [`unary()`](#unary) *&ast;Lo*
  + [`wrap()`](#wrap) *&ast;Lo*
* [Lang](#lang)
  + [`castArray()`](#castarray) *&ast;TODO*
  + [`clone()`](#clone)
  + [`cloneDeep()`](#clonedeep)
  + [`cloneDeepWith()`](#clonedeepwith)
  + [`cloneWith()`](#clonewith)
  + [`conformsTo()`](#conformsto) *&ast;TODO*
  + [`eq()`](#eq)
  + [`gt()`](#gt) *&ast;Lo*
  + [`gte()`](#gte) *&ast;Lo*
  + [`isArguments()`](#isarguments) *&ast;Lo*
  + [`isArray()`](#isarray) *&ast;Lo*
  + [`isArrayBuffer()`](#isarraybuffer) *&ast;Lo*
  + [`isArrayLike()`](#isarraylike) *&ast;Lo*
  + [`isArrayLikeObject()`](#isarraylikeobject) *&ast;Lo*
  + [`isAssociative()`](#isassociative)
  + [`isBatchable()`](#isbatchable)
  + [`isBoolean()`](#isboolean) *&ast;Lo*
  + [`isBuffer()`](#isbuffer) *&ast;Lo*
  + [`isDate()`](#isdate) *&ast;Lo*
  + [`isElement()`](#iselement) *&ast;Lo*
  + [`isEmpty()`](#isempty)
  + [`isEqual()`](#isequal)
  + [`isEqualWith()`](#isequalwith)
  + [`isError()`](#iserror) *&ast;Lo*
  + [`isFinite()`](#isfinite) *&ast;Lo*
  + [`isFunction()`](#isfunction) *&ast;Lo*
  + [`isGenerator()`](#isgenerator)
  + [`isGeneratorFunction()`](#isgeneratorfunction)
  + [`isIm()`](#isim)
  + [`isImIndexedSeq()`](#isimindexedseq)
  + [`isimiterable()`](#isimiterable)
  + [`isImKeyedSeq()`](#isimkeyedseq)
  + [`isImList()`](#isimlist)
  + [`isImMap()`](#isimmap)
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
  + [`isImOrderedMap()`](#isimorderedmap)
  + [`isImOrderedSet()`](#isimorderedset)
  + [`isImSeq()`](#isimseq)
  + [`isImSet()`](#isimset)
  + [`isImSetSeq()`](#isimsetseq)
  + [`isImStack()`](#isimstack)
  + [`isIndex()`](#isindex)
  + [`isIndexed()`](#isindexed)
  + [`isInteger()`](#isinteger) *&ast;Lo*
  + [`isIterable()`](#isiterable)
  + [`isIterateeCall()`](#isiterateecall)
  + [`isKey()`](#iskey)
  + [`isKeyable()`](#iskeyable)
  + [`isKeyed()`](#iskeyed)
  + [`isLength()`](#islength) *&ast;Lo*
  + [`isMap()`](#ismap) *&ast;Lo*
  + [`isMatch()`](#ismatch)
  + [`isMatchWith()`](#ismatchwith) *&ast;TODO*
  + [`isMutable()`](#ismutable)
  + [`isNaN()`](#isnan) *&ast;Lo*
  + [`isNative()`](#isnative) *&ast;Lo*
  + [`isNil()`](#isnil) *&ast;Lo*
  + [`isNull()`](#isnull) *&ast;Lo*
  + [`isNumber()`](#isnumber) *&ast;Lo*
  + [`isObject()`](#isobject) *&ast;Lo*
  + [`isObjectLike()`](#isobjectlike) *&ast;Lo*
  + [`isPlainObject()`](#isplainobject) *&ast;Lo*
  + [`isPrototype()`](#isprototype)
  + [`isRegExp()`](#isregexp) *&ast;Lo*
  + [`isSafeInteger()`](#issafeinteger) *&ast;Lo*
  + [`isSet()`](#isset) *&ast;Lo*
  + [`isShallowEqual()`](#isshallowequal)
  + [`isString()`](#isstring) *&ast;Lo*
  + [`isSymbol()`](#issymbol) *&ast;Lo*
  + [`isTypedArray()`](#istypedarray) *&ast;Lo*
  + [`isUndefined()`](#isundefined) *&ast;Lo*
  + [`isWeakMap()`](#isweakmap) *&ast;Lo*
  + [`isWeakSet()`](#isweakset) *&ast;Lo*
  + [`iterable()`](#iterable)
  + [`iterator()`](#iterator)
  + [`isImSet()`](#isimset)
  + [`lt()`](#lt) *&ast;Lo*
  + [`lte()`](#lte) *&ast;Lo*
  + [`toArray()`](#toarray)
  + [`toFinite()`](#tofinite) *&ast;Lo*
  + [`toIm()`](#toim)
  + [`toImIndexedSeq()`](#toimindexedseq)
  + [`toImIterable()`](#toimiterable)
  + [`toImKeyedSeq()`](#toimkeyedseq)
  + [`toImList()`](#toimlist)
  + [`toImMap()`](#toimmap)
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
  + [`toImOrderedMap)`](#toimorderedmap)
  + [`toImOrderedSet()`](#toimorderedset)
  + [`toImSeq()`](#toimseq)
  + [`toImSet()`](#toimset)
  + [`toImSetSeq()`](#toimsetseq)
  + [`toImStack()`](#toimstack)
  + [`toIndexed()`](#toindexed)
  + [`toInteger()`](#tointeger) *&ast;Lo*
  + [`toIterable()`](#toiterable)
  + [`toLength()`](#tolength) *&ast;Lo*
  + [`toMutable()`](#tomutable)
  + [`toNumber()`](#tonumber) *&ast;Lo*
  + [`toObject()`](#toobject)
  + [`toPlainObject()`](#toplainobject) *&ast;Lo*
  + [`toSageInteger()`](#tosafeinteger) *&ast;Lo*
  + [`toSource()`](#tosource)
  + [`toString()`](#tostring) *&ast;Lo*
* [Math](#math)
  + [`add()`](#add) *&ast;Lo*
  + [`ceil()`](#ceil) *&ast;Lo*
  + [`divide()`](#divide) *&ast;Lo*
  + [`floor()`](#floor) *&ast;Lo*
  + [`max()`](#max) *&ast;Lo*
  + [`maxBy()`](#maxby) *&ast;Lo*
  + [`mean()`](#mean) *&ast;Lo*
  + [`meanBy()`](#meanby) *&ast;Lo*
  + [`min()`](#min) *&ast;Lo*
  + [`minBy()`](#minby) *&ast;Lo*
  + [`multiply()`](#multiply) *&ast;Lo*
  + [`round()`](#round) *&ast;Lo*
  + [`subtract()`](#subtract) *&ast;Lo*
  + [`sum()`](#sum) *&ast;Lo*
  + [`sumBy()`](#sumby) *&ast;Lo*
* [Number](#number)
  + [`clamp()`](#clamp) *&ast;Lo*
  + [`inRange()`](#inrange) *&ast;Lo*
  + [`random()`](#random) *&ast;Lo*
* [Object and Immutable.Map](#object-and-immutablemap)
  + [`assign()`](#assign)
  + [`assignIn()`](#assignin) *&ast;TODO*
  + [`assignInWith()`](#assigninwith) *&ast;TODO*
  + [`assignWith()`](#assignwith) *&ast;TODO*
  + [`assoc()`](#assoc)
  + [`assocWith()`](#assocwith)
  + [`at()`](#at)
  + [`create()`](#create) *&ast;TODO*
  + [`delete()`](#delete)
  + [`defaults()`](#defaults) *&ast;TODO*
  + [`defaultsDeep()`](#defaultsdeep) *&ast;TODO*
  + [`dissoc()`](#dissoc)
  + [`findKey()`](#findkey) *&ast;TODO*
  + [`findLastKey()`](#findlastkey) *&ast;TODO*
  + [`forIn()`](#forin) *&ast;TODO*
  + [`forInRight()`](#forinright) *&ast;TODO*
  + [`forOwn()`](#forown) *&ast;TODO*
  + [`forOwnRight()`](#forownright) *&ast;TODO*
  + [`functions()`](#functions) *&ast;Lo*
  + [`functionsIn()`](#functionsin) *&ast;TODO*
  + [`get()`](#get)
  + [`getPrototype()`](#getprototype)
  + [`has()`](#has)
  + [`hasIn()`](#hasin) *&ast;TODO*
  + [`invert()`](#invert) *&ast;TODO*
  + [`invertBy()`](#invertby) *&ast;TODO*
  + [`invoke()`](#invoke) *&ast;TODO*
  + [`keys()`](#keys)
  + [`keysIn()`](#keysin) *&ast;TODO*
  + [`mapKeys()`](#mapkeys) *&ast;TODO*
  + [`mapValues()`](#mapvalues) *&ast;TODO*
  + [`merge()`](#merge)
  + [`mergeAt()`](#mergeat)
  + [`mergeWith()`](#mergewith) *&ast;TODO*
  + [`omit()`](#omit)
  + [`omitBy()`](#omitby)
  + [`pick()`](#pick)
  + [`pickBy()`](#pickby) *&ast;TODO*
  + [`result()`](#result) *&ast;TODO*
  + [`set()`](#set)
  + [`setWith()`](#setwith)
  + [`toPairs()`](#topairs) *&ast;TODO*
  + [`toPairsIn()`](#topairsin) *&ast;TODO*
  + [`transform()`](#transform) *&ast;TODO*
  + [`unset()`](#unset)
  + [`update()`](#update)
  + [`updateWith()`](#updatewith)
  + [`values()`](#values)
  + [`valuesIn()`](#valuesin) *&ast;TODO*
* [Seq](#seq)
  + [`_()`](#_) *&ast;Lo*
  + [`chain()`](#chain) *&ast;TODO*
  + [`tap()`](#tap) *&ast;Lo*
  + [`thru()`](#thru) *&ast;Lo*
* [String](#string)
  + [`camelCase()`](#camelcase) *&ast;Lo*
  + [`capitalize()`](#capitalize) *&ast;Lo*
  + [`deburr()`](#deburr) *&ast;Lo*
  + [`endsWith()`](#endswith) *&ast;Lo*
  + [`escape()`](#escape) *&ast;Lo*
  + [`escapeRegExp()`](#escaperegexp) *&ast;Lo*
  + [`kebabCase()`](#kebabcase) *&ast;Lo*
  + [`lowerCase()`](#lowercase) *&ast;Lo*
  + [`lowerFirst()`](#lowerfirst) *&ast;Lo*
  + [`pad()`](#pad) *&ast;Lo*
  + [`padEnd()`](#padend) *&ast;Lo*
  + [`padStart()`](#padstart) *&ast;Lo*
  + [`parseInt()`](#parseint) *&ast;Lo*
  + [`repeat()`](#repeat) *&ast;Lo*
  + [`replace()`](#replace) *&ast;Lo*
  + [`snakeCase()`](#snakecase) *&ast;Lo*
  + [`split()`](#split) *&ast;Lo*
  + [`startCase()`](#startcase) *&ast;Lo*
  + [`startsWith()`](#startswith) *&ast;Lo*
  + [`template()`](#template) *&ast;Lo*
  + [`toLower()`](#tolower) *&ast;Lo*
  + [`toUpper()`](#toupper) *&ast;Lo*
  + [`trim()`](#trim) *&ast;Lo*
  + [`trimEnd()`](#trimend) *&ast;Lo*
  + [`trimStart()`](#trimstart) *&ast;Lo*
  + [`truncate()`](#truncate) *&ast;Lo*
  + [`unescape()`](#unescape) *&ast;Lo*
  + [`upperCase()`](#uppercase) *&ast;Lo*
  + [`upperFirst()`](#upperfirst) *&ast;Lo*
  + [`words()`](#words) *&ast;Lo*
* [Util](#util)
  + [`attempt()`](#attempt) *&ast;Lo*
  + [`bindAll()`](#bindall) *&ast;TODO*
  + [`cond()`](#cond) *&ast;TODO*
  + [`conforms()`](#conforms) *&ast;TODO*
  + [`constant()`](#constant) *&ast;Lo*
  + [`defaultTo()`](#defaultTo) *&ast;Lo*
  + [`flow()`](#flow) *&ast;TODO*
  + [`flowRight()`](#flowright) *&ast;TODO*
  + [`hint`](#hint)
  + [`identity()`](#identity)
  + [`iteratee()`](#iteratee)
  + [`matches()`](#matches)
  + [`matchesProperty()`](#matchesproperty)
  + [`method()`](#method) *&ast;TODO*
  + [`methodOf()`](#methodof) *&ast;TODO*
  + [`mixin()`](#mixin) *&ast;Lo*
  + [`noConflict()`](#noconflict) *&ast;Lo*
  + [`noop()`](#noop) *&ast;Lo*
  + [`nthArg()`](#ntharg) *&ast;Lo*
  + [`over()`](#over) *&ast;TODO*
  + [`overEvery()`](#overevery) *&ast;TODO*
  + [`overSome()`](#oversome) *&ast;TODO*
  + [`property()`](#property)
  + [`propertyOf()`](#propertyof)
  + [`range()`](#range) *&ast;Lo*
  + [`rangeRight()`](#rangeright) *&ast;Lo*
  + [`runInContext()`](#runincontext) *&ast;Lo*
  + [`stubArray()`](#stubarray)
  + [`stubFalse()`](#stubfalse)
  + [`stubImmutableIndexedSeq()`](#stubimmutableindexedseq)
  + [`stubImmutableIterable()`](#stubimmutableiterable)
  + [`stubImmutableKeyedSeq()`](#stubimmutablekeyedseq)
  + [`stubImmutableList()`](#stubimmutablelist)
  + [`stubImmutableMap()`](#stubimmutablemap)
  + [`stubImmutableOrderedMap()`](#stubimmutableorderedmap)
  + [`stubImmutableOrderedSet()`](#stubimmutableorderedset)
  + [`stubImmutableSeq()`](#stubimmutableseq)
  + [`stubImmutableSet()`](#stubimmutableset)
  + [`stubImmutableSetSeq()`](#stubimmutablesetseq)
  + [`stubImmutableStack()`](#stubimmutablestack)
  + [`stubObject()`](#stubobject)
  + [`stubString()`](#stubstring)
  + [`stubTrue()`](#stubtrue)
  + [`sym()`](#sym)
  + [`symbol()`](#symbol)
  + [`times()`](#times)
  + [`toPath()`](#topath) *&ast;TODO*
  + [`uniqueId()`](#uniqueid) *&ast;Lo*
  + [`times()`](#times)


## Array and Immutable.List

### `chunk()`

```js
chunk(
  data: Array | List,
  size: number
): Array | List
```

Creates an array or list of elements split into groups the length of `size`. If `data` can't be split evenly, the final chunk will be the remaining elements.

### `drop()`

```js
drop(
  data: Array | Immutable.List,
  n: number
): Array | Immutable.List
```

Creates an slice of `data` with `n` elements dropped from the beginning.


### `dropRight()`

```js
dropRight(
  data: Array | Immutable.List,
  n: number
): Array | Immutable.List
```

Creates an slice of `data` excluding `n` elements dropped from the end.


### `dropRightWhile()`

```js
dropRightWhile(
  data: Array | List,
  predicate: (
    value: any,
    index: number,
    data: Array | Immutable.List
  ) => any
): Array | Immutable.List
```

Creates a slice of `data` excluding elements dropped from the end.
Elements are dropped until `predicate` returns falsey.


### `dropWhile()`

```js
dropWhile(
  data: Array | List,
  predicate: (
    value: any,
    index: number,
    data: Array | Immutable.List
  ) => any
): Array | Immutable.List
```

Creates a slice of `data` excluding elements dropped from the beginning.
Elements are dropped until `predicate` returns falsey.


## Collection and Immutable.Iterable

### `find()`

```js
find(
  data: Array | Immutable.Iterable | Object,
  ?predicate=_.identity: (
    value: any,
    key: string | number,
    collection: Array | Immutable.Iterable | Object
  ) => boolean,
  ?fromIndex=0: number
): any
```

Iterates over elements of collection, returning the first element predicate returns truthy for.


### `includes()`

```js
includes(
  data: Array | Immutable.Iterable | Object | String,
  value: any,
  ?fromIndex=0: number
): boolean
```

Checks if `value` is in `data`. If `data` is a string, it's checked for a substring of value, otherwise SameValueZeroOrImmutableEqual is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.


### `includesWith()`

```js
includes(
  data: Array | Immutable.Iterable | Object | String,
  value: any,
  comparator: (
    dataValue: any,
    value: any
  ) => boolean,
  ?fromIndex=0: number
): boolean
```

This method is like [`includes`](#includes) except that it accepts comparator which is invoked to compare elements of the data to the value.


### `slice()`

```js
slice(

): Array | Immutable.Iterable | Object
```

Creates a slice of an Indexed value from start up to, but not including, end.

If the requested slice is equivalent to the current Indexed, then it will return itself.


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

### `set()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
set(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  value: any
): Array | Immutable.List | Immutable.Map | Object
```

Sets the value at path of data. If a portion of path doesn't exist, it's created. When creating path, this method will preserve the parent data type. Therefore, Immutable instances will be created for Immutable parents and mutable Object/Array instances will be created for mutable parents. Arrays and Lists will be created for index properties while Objects and Maps are created for all other missing properties. Use [`setWith`](#setWith) to customize path creation.


### `setWith()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
setWith(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  value: any,
  ?customizer: (
    value: any,
    key: string,
    data: Array | Immutable.List | Immutable.Map | Object,
  ) => Array | Immutable.List | Immutable.Map | Object
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`set`](#set) except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead.


### `unset()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
unset(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string
): Array | Immutable.List | Immutable.Map | Object
```

Removes the property at path of data. This method returns a new instance.


### `update()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
update(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  updater: (value: any) => any
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`set`](#set) except that accepts updater to produce the value to set. Use [`updateWith`](#updateWith) to customize path creation. This method returns a new instance.


### `updateWith()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
updateWith(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  updater: (value: any) => any,
  ?customizer: (
    value: any,
    key: string,
    data: Array | Immutable.List | Immutable.Map | Object,
  ) => Array | Immutable.List | Immutable.Map | Object
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`update`](#update) except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. This method returns a new instance.


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
