"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrimaryCurrency = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
const usePrimaryCurrency = ({
  node
}) => {
  const [primaryCurrency, setPrimaryCurrency] = (0, _storage.useStorage)(`${_storage2.SWAPS_PRICE_KEY}_${node.id}`, node.price);
  return {
    primaryCurrency,
    setPrimaryCurrency
  };
};
exports.usePrimaryCurrency = usePrimaryCurrency;