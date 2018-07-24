const archy = require('archy');
const objectToArchy = require('.');

const _object = {
  foo: 'foo value',
  nested: {
    bar: 'bar value'
  },
  0: '011'
};

console.log(
  JSON.stringify(
    objectToArchy(_object)
  )
);

console.log(
  archy(
    objectToArchy(_object)
  )
);
