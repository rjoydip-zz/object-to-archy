'use strict';

const isObject = value => {
  return typeof value === 'object';
};

const objectToArchy = (arr, label) => {
  const _label = label || '--';

  if (!isObject) {
    return 'Data is not type object';
  }
  if (isObject) {
    return {
      label: _label,
      nodes: Object.keys(arr).map(
        item => isObject(arr[item]) ? objectToArchy(arr[item], item) : arr[item]
      )
    };
  }
};

module.exports = objectToArchy;
