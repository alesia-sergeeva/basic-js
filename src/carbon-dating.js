const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str) && typeof str === 'string' && str > 0 && str < 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(str)) / (Math.log(2) / HALF_LIFE_PERIOD))
  } else return false
};
