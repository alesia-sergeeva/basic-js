const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let needTurns = (num) => (num == 1 ? 1 : needTurns(num - 1) * 2 + 1);
  let turns = needTurns(disksNumber);

  return {
    turns,
    seconds: Math.floor((turns / turnsSpeed) * 3600),
  };
};
