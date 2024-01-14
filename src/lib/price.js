"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrice = void 0;
var _ethers = require("ethers");
var _ethers2 = require("./ethers");
var _utils = require("ethers/lib/utils");
var _storage = require("./storage");
var _storage2 = require("../config/storage");
const getPrice = async (router, quoteCurrency, amountCurrency, provider) => {
  try {
    const r = (0, _ethers2.getAddress)(router);
    const inCurrency = (0, _ethers2.isAddress)(quoteCurrency.id) || (0, _ethers2.isAddressTrx)(quoteCurrency.id) ? quoteCurrency : await getWETH(r, provider);
    const outCurrency = (0, _ethers2.isAddress)(amountCurrency.id) || (0, _ethers2.isAddressTrx)(amountCurrency.id) ? amountCurrency : await getWETH(r, provider);
    if (inCurrency.id === outCurrency.id) {
      return '1';
    }
    const amountIn = (0, _utils.parseUnits)('1', inCurrency.decimals);
    const abi = new _ethers.ethers.Contract(r, _ethers2.IPancakeRouter02, provider);
    const [reserve0, reserve1] = await abi.getAmountsOut(amountIn, [(0, _ethers2.getAddress)(inCurrency.id), (0, _ethers2.getAddress)(outCurrency.id)]);
    return (0, _utils.formatUnits)(reserve1, outCurrency.decimals);
  } catch (e) {
    return '0';
  }

  // throw new Error("Can't get price");
};
exports.getPrice = getPrice;
const getWETH = async (router, provider) => {
  const weth = new _ethers.ethers.Contract(router, _ethers2.IPancakeRouter02, provider);
  const id = await weth.WETH();
  const info = await _storage.storage.getMapAsync(`${_storage2.TOKEN_INFO_KEY}_${id}`);
  if (info) {
    return info;
  }
  const abi = new _ethers.ethers.Contract(id, _ethers2.IERC20ABI, provider);
  const [symbol, name, supply, decimals] = await Promise.all([abi.symbol(), abi.name(), abi.totalSupply(), abi.decimals()]);
  await _storage.storage.setMapAsync(`${_storage2.TOKEN_INFO_KEY}_${id}`, {
    id,
    symbol,
    name,
    supply,
    decimals
  });
  return {
    id,
    symbol,
    name,
    supply,
    decimals
  };
};