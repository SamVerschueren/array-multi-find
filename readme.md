# array-multi-find [![Build Status](https://travis-ci.org/SamVerschueren/array-multi-find.svg?branch=master)](https://travis-ci.org/SamVerschueren/array-multi-find)

> Find multiple elements in an array


## Install

```
$ npm install --save array-multi-find
```


## Usage

```js
const multiFind = require('array-multi-find');

multiFind(['foo', 'bar'], ['baz']);
//=> []

multiFind(['foo', 'bar'], ['foo', 'baz']);
//=> ['foo']

multiFind(['foo', 'bar', 'baz'], ['foo', 'bar']);
//=> ['foo', 'bar']
```


## API

### multiFind(array, elements)

#### array

Type: `Array`

Array to search in.

#### elements

Type: `Array`

Elements to search in the `array`.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
