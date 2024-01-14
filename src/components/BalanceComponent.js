"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BalanceNodeItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _components = require("@ui-kitten/components");
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
var _useBalance = require("../hooks/wallet/useBalance");
var _usePriceSymbol = require("../hooks/wallet/usePriceSymbol");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BalanceNodeItem = exports.BalanceNodeItem = /*#__PURE__*/(0, _react.memo)(({
  address,
  asset,
  node
}) => {
  const {
    balance
  } = (0, _useBalance.useBalance)({
    address,
    asset,
    node
  });
  const [price] = (0, _storage.useStorage)(`${_storage2.SWAP_PRICE}_${asset?.id}`, '0');
  const {
    priceSymbol
  } = (0, _usePriceSymbol.usePriceSymbol)({
    node
  });
  const [eye] = (0, _storage.useStorage)(`${_storage2.WALLET_EYE_KEY}`, true);
  const priceBN = (0, _react.useMemo)(() => balance.multipliedBy((0, _bignumber.default)(price)), [price, balance]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, eye ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1',
    numberOfLines: 1
  }, `${balance.toFormat(asset.isERC721 ? 0 : 6)} ${asset.symbol}`), !asset.isERC721 && /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1',
    numberOfLines: 1,
    appearance: "hint",
    style: {
      fontSize: 10
    }
  }, `≈${priceBN.toFormat(6)} ${priceSymbol?.symbol || ''}`)) : /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1',
    style: {
      fontSize: 10
    }
  }, '***'));
});