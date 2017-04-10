#mudash FAQ

## What functions are different from Lodash?
* [`fill()`](https://lodash.com/docs/4.17.2#fill) - `array` is no longer mutated, instead a new array is returned.
* [`pull()`](https://lodash.com/docs/4.17.2#pull) - Since `_.without` exists which is the exact same as an immutable `_.pull`, this method has been modified to remove the FIRST value encountered from the left. Returns a new array.
* [`pullAll()`](https://lodash.com/docs/4.17.2#pullAll) - Since `_.difference` exists which is the exact same as an immutable `_.pullAll`, this method has been modified to remove the FIRST value encountered from the left. Returns a new array.
* [`pullAllBy()`](https://lodash.com/docs/4.17.2#pullAllBy)
* [`pullAllWith()`](https://lodash.com/docs/4.17.2#pullAllWith)
* [`pullAt()`](https://lodash.com/docs/4.17.2#pullAt)
* [`remove()`](https://lodash.com/docs/4.17.2#remove)
* [`reverse()`](https://lodash.com/docs/4.17.2#reverse)
* [`assign()`](https://lodash.com/docs/4.17.2#assign)
* [`assignIn()`](https://lodash.com/docs/4.17.2#assignIn)
* [`assignInWith()`](https://lodash.com/docs/4.17.2#assignInWith)
* [`assignWith()`](https://lodash.com/docs/4.17.2#assignWith)
* [`defaults()`](https://lodash.com/docs/4.17.2#defaults)
* [`defaultsDeep()`](https://lodash.com/docs/4.17.2#defaultsDeep)
* [`merge()`](https://lodash.com/docs/4.17.2#merge)
* [`mergeWith()`](https://lodash.com/docs/4.17.2#mergeWith)
* [`set()`](https://lodash.com/docs/4.17.2#set) `data` is no longer mutated. Instead a new Object or Array is returned with the value set.
* [`setWith()`](https://lodash.com/docs/4.17.2#setWith) `data` is no longer mutated. Instead a new Object or Array is returned with the value set.
* [`unset()`](https://lodash.com/docs/4.17.2#unset) `data` is no longer mutated. Instead a new Object or Array is returned with the key unset.
* [`update()`](https://lodash.com/docs/4.17.2#update)
* [`updateWith()`](https://lodash.com/docs/4.17.2#updateWith)
