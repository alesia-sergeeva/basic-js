const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let currentDepth = this.calculateDepth(item) + 1;
        if (currentDepth > depth) depth = currentDepth;
      }
    }

    return depth;
  }
};