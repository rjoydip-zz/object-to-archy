# Object To Archy [![Build Status](https://travis-ci.org/rjoydip/object-to-archy.svg?branch=master)](https://travis-ci.org/rjoydip/object-to-archy)

> Convert object to archy object format


## Install

```
$ npm install object-to-archy
```


## Usage

```js
const objectToArchy = require('object-to-archy');
const _object = {
	'foo': 'foo value',
	'nested': {
		'bar': 'bar value'
	},
	"0": '011'
}
objectToArchy(_object)
// {"label":"--","nodes":["011","foo value",{"label":"nested","nodes":["bar value"]}]}
```


## API

### objectToArchy(input, [options])

#### input

Type: `Object`

Pass object as inpu.

#### options

Type: `Object`

##### label

Type: `string`<br>
Default: `--`

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
