const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = value === null ? 'null' : value.toString();
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!(position === +position && position === (position | 0) && position - 1 in this.chain)) {
      this.chain.length = 0;
      throw new Error('THROWN');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainAsString = '';
    if (this.chain.length) {
      chainAsString = `( ${this.chain.join(' )~~( ')} )`;
      this.chain.length = 0;
    }
    return chainAsString;
  },
};

module.exports = chainMaker;