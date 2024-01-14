"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressAvatarID = exports.AddressAvatar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeJazzicon = _interopRequireDefault(require("react-native-jazzicon"));
var _reactNative = require("react-native");
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
var _useBlockies = require("../hooks/wallet/useBlockies");
var _wallet = require("../config/wallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AddressAvatar = exports.AddressAvatar = /*#__PURE__*/(0, _react.memo)(({
  address,
  size
}) => {
  const [blockies] = (0, _storage.useStorage)(_storage2.ACCOUNT_IDENTICON_BLOCKIES_KEY, true);
  return /*#__PURE__*/_react.default.createElement(AddressAvatarID, {
    address: address,
    size: size,
    blockies: blockies
  });
});
const AddressAvatarID = exports.AddressAvatarID = /*#__PURE__*/(0, _react.memo)(({
  address,
  size,
  blockies
}) => {
  const value = (0, _react.useMemo)(() => address || _wallet.ZERO_ADDRESS, [address]);
  return blockies ? /*#__PURE__*/_react.default.createElement(BlockiesAvatar, {
    address: value,
    size: size
  }) : /*#__PURE__*/_react.default.createElement(JazzIconAvatar, {
    address: value,
    size: size
  });
});
const BlockiesAvatar = /*#__PURE__*/(0, _react.memo)(({
  address,
  size
}) => {
  const {
    uri
  } = (0, _useBlockies.useBlockies)({
    address
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: {
      uri
    },
    style: {
      width: size,
      height: size,
      borderRadius: size / 2
    }
  });
});
const JazzIconAvatar = /*#__PURE__*/(0, _react.memo)(({
  address,
  size
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeJazzicon.default, {
    size: size,
    address: address,
    containerStyle: {
      borderRadius: size / 2
    }
  });
});