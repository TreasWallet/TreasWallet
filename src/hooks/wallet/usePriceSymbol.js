"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePriceSymbol = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useToken = require("./useToken");
var _react = require("react");
var _usePrimaryCurrency = require("../rpc/usePrimaryCurrency");
var _useRpc = require("../rpc/useRpc");
const usePriceSymbol = ({
  node
}) => {
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const {
    primaryCurrency
  } = (0, _usePrimaryCurrency.usePrimaryCurrency)({
    node
  });
  const [primarycurrency] = (0, _storage.useStorage)(_storage2.PRIMARY_CURRENCY_KEY, false);
  const {
    info
  } = (0, _useToken.useToken)({
    token: primaryCurrency,
    rpc
  });
  const priceSymbol = (0, _react.useMemo)(() => primarycurrency ? node : info, [primarycurrency, info, node]);
  return {
    priceSymbol
  };
};
exports.usePriceSymbol = usePriceSymbol;