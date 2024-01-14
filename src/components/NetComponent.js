"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetItemView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactI18next = require("react-i18next");
var _useNode = require("../hooks/rpc/useNode");
var _reactNative = require("react-native");
var _AssetsComponent = require("./AssetsComponent");
var _components = require("@ui-kitten/components");
var _uilCheckCircle = _interopRequireDefault(require("../assets/icons/uil-check-circle"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_HEIGHT = 50;
const NetItemView = exports.NetItemView = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    node,
    setNode
  } = (0, _useNode.useNode)();
  const [loading, setLoading] = (0, _react.useState)(false);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...style,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: item,
    size: style.width
  })), [item]);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, null, loading ? /*#__PURE__*/_react.default.createElement(_components.Spinner, {
    size: "tiny"
  }) : node.id === item.id && /*#__PURE__*/_react.default.createElement(_uilCheckCircle.default, {
    size: style?.height,
    color: style?.tintColor
  })), [item, node, loading]);
  const toNodeScreen = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      setNode(item);
      setLoading(false);
    }, 5);
    //return () => clearTimeout(id);
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    onPress: toNodeScreen,
    title: item.name,
    description: item.testnet ? t('networks.testnet') : t('networks.mainnet'),
    accessoryLeft: accessoryLeft,
    accessoryRight: accessoryRight,
    style: {
      borderRadius: 8,
      marginHorizontal: 10,
      height: ITEM_HEIGHT
    }
  }));
});