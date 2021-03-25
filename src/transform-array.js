const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('THROWN');

  let res = [];
  let itemCount = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (++i in arr) itemCount[i] = 0;
    } else if (arr[i] === '--double-next') {
      if (++i in arr) itemCount[i] = 2;
    } else if (arr[i] === '--discard-prev') {
      if (i - 1 in itemCount && itemCount[i - 1]) itemCount[i - 1]--;
    } else if (arr[i] === '--double-prev') {
      if (i - 1 in itemCount && itemCount[i - 1]) itemCount[i - 1]++;
    } else itemCount[i] = 1;
  }

  for (let i = 0; i < itemCount.length; i++) {
    while (itemCount[i]) {
      res.push(arr[i]);
      itemCount[i]--;
    }
  }
  return res;
};