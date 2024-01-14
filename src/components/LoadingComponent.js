"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBlockchainComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _components = require("@ui-kitten/components");
var _reactNativeSpinkit = _interopRequireDefault(require("react-native-spinkit"));
var _reactI18next = require("react-i18next");
var _native = require("@react-navigation/native");
var _usePendingTransaction = require("../hooks/rpc/usePendingTransaction");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LoadingBlockchainComponent = exports.LoadingBlockchainComponent = /*#__PURE__*/(0, _react.memo)(() => {
  const navigation = (0, _native.useNavigation)();
  const {
    height
  } = (0, _reactNative.useWindowDimensions)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    pending,
    node
  } = (0, _usePendingTransaction.usePendingTransaction)();
  const toExplorer = (0, _react.useCallback)(() => {
    if (pending) {
      const url = `${node.explorer.url}${node.explorer.txPath}${pending}`;
      // @ts-ignore
      navigation.navigate('WebViewScreen', {
        value: url
      });
    }
  }, [pending]);
  const theme = (0, _components.useTheme)();
  return pending ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      bottom: height / 3,
      right: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: toExplorer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSpinkit.default, {
    isVisible: true,
    size: 50,
    type: 'ChasingDots',
    color: theme['color-primary-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label",
    style: {
      fontSize: 10
    }
  }, t('wallet.send.pending_message'))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
});