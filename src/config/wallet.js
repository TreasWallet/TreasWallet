"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZERO_ADDRESS = exports.TRON_PATH = exports.MAX_AMOUNT = exports.ETHEREUM_PATH = void 0;
var _ethers = require("../lib/ethers");
const ETHEREUM_PATH = exports.ETHEREUM_PATH = _ethers.ethers.utils.defaultPath;
const TRON_PATH = exports.TRON_PATH = "m/44'/195'/0'/0/0";
const ZERO_ADDRESS = exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const MAX_AMOUNT = exports.MAX_AMOUNT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';