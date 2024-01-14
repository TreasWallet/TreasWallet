"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeABI = void 0;
var _ethers = require("./ethers");
const decodeABI = (hexData, ierc721 = false) => {
  try {
    const iface = new _ethers.ethers.utils.Interface(ierc721 ? _ethers.IERC721ABI : _ethers.IERC20ABI);
    const fragment = iface.getFunction(hexData.substring(0, 10).toLowerCase());
    if (!fragment) {
      return undefined;
    }
    const args = iface.decodeFunctionData(fragment, hexData);
    // @ts-ignore
    const name = fragment.name;
    const signature = fragment.format();
    const sighash = iface.getSighash(fragment);
    const inputs = fragment.inputs;
    return {
      name,
      sighash,
      signature,
      args,
      inputs
    };
  } catch (e) {
    return undefined;
  }
};
exports.decodeABI = decodeABI;