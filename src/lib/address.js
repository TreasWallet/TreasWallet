"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareAddress = void 0;
var _ethers = require("ethers");
const compareAddress = (firstAddress, secondAddress) => {
  try {
    const parsedFirstAddress = _ethers.BigNumber.from(firstAddress);
    const parsedSecondAddress = _ethers.BigNumber.from(secondAddress);
    if (parsedFirstAddress.gt(parsedSecondAddress)) {
      return 1;
    }
    if (parsedFirstAddress.lt(parsedSecondAddress)) {
      return -1;
    }
    return 0;
  } catch {
    throw new TypeError("Invalid input, address can't be parsed");
  }
};
exports.compareAddress = compareAddress;