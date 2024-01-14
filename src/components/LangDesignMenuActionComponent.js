"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LangDesignMenuAction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useDesign = require("../hooks/theme/useDesign");
var _reactI18next = require("react-i18next");
var _useI18n = require("../hooks/theme/useI18n");
var _i = require("../config/i18");
var _components = require("@ui-kitten/components");
var _uilGlobe = _interopRequireDefault(require("../assets/icons/uil-globe"));
var _uilSwatchbook = _interopRequireDefault(require("../assets/icons/uil-swatchbook"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LangDesignMenuAction = exports.LangDesignMenuAction = /*#__PURE__*/(0, _react.memo)(() => {
  const [visible, setVisible] = (0, _react.useState)(false);
  const {
    setLang
  } = (0, _useI18n.useI18n)();
  const {
    setDesign
  } = (0, _useDesign.useDesign)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const toggleLang = (0, _react.useCallback)(key => {
    (0, _react.startTransition)(() => {
      setVisible(false);
      setLang(key);
    });
  }, []);
  const toggleDesign = (0, _react.useCallback)(name => {
    (0, _react.startTransition)(() => {
      setVisible(false);
      setDesign(name);
    });
  }, []);
  const anchor = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: () => setVisible(true)
    // @ts-ignore
    ,
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilGlobe.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), []);
  const LangView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _i.locales.map(v => /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    onPress: () => toggleLang(v.key),
    key: v.key,
    title: v.name
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilGlobe.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }))), []);
  const ThemeView = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('theme.eva'),
    onPress: () => toggleDesign('eva')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilSwatchbook.default, {
      size: style?.height,
      color: style?.tintColor
    })
  }), /*#__PURE__*/_react.default.createElement(_components.MenuItem, {
    title: t('theme.material'),
    onPress: () => toggleDesign('material')
    // @ts-ignore
    ,
    accessoryLeft: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_uilSwatchbook.default, {
      size: style?.height,
      color: style?.tintColor
    })
  })), []);
  return /*#__PURE__*/_react.default.createElement(_components.OverflowMenu, {
    anchor: anchor,
    visible: visible,
    onBackdropPress: () => setVisible(false),
    backdropStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/_react.default.createElement(LangView, null), /*#__PURE__*/_react.default.createElement(ThemeView, null));
});