# from-pairs ![Build Status](https://github.com/jonkemp/from-pairs/actions/workflows/main.yml/badge.svg?branch=master)

> Convert arrays into objects.

Pass either a single list of `[key, value]` pairs, or a list of keys, and a list of values. Passing by pairs is the reverse of pairs. If duplicate keys exist, the last value wins. 

Inspired by `_.object`. 😄


## Install

Install with [npm](https://npmjs.org/package/from-pairs)

```
$ npm install from-pairs
```

Or [unpkg](https://unpkg.com/from-pairs/)

```
<script src="https://unpkg.com/from-pairs@1.0.2/umd/index.js" />
```

Check out the unit tests on [CodePen](https://codepen.io/jonkemp/full/LYVBdrJ).

## Usage

```js
const fromPairs = require('from-pairs');

fromPairs(['moe', 'larry', 'curly'], [30, 40, 50]);
//=> {moe: 30, larry: 40, curly: 50}

fromPairs([['moe', 30], ['larry', 40], ['curly', 50]]);
//=> {moe: 30, larry: 40, curly: 50}
```

---
| **Like us a lot?** Help others know why you like us! **Review this package on [pkgreview.dev](https://pkgreview.dev/npm/from-pairs)** | ➡   | [![Review us on pkgreview.dev](https://i.ibb.co/McjVMfb/pkgreview-dev.jpg)](https://pkgreview.dev/npm/from-pairs) |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------- |

## API

### fromPairs(list)

#### list

Type: `array`  
Default: `none`

The key-value pairs.

## License

MIT
