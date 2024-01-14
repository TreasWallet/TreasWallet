"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactI18next = require("react-i18next");
var _reactNative = require("react-native");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativePortalize = require("react-native-portalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _uilAngleRightB = _interopRequireDefault(require("../../assets/icons/uil-angle-right-b"));
var _uilInfoCircle = _interopRequireDefault(require("../../assets/icons/uil-info-circle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AdvancedScreen = exports.AdvancedScreen = /*#__PURE__*/(0, _react.memo)(() => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(ResetAccountView, null), /*#__PURE__*/_react.default.createElement(EnableSynchronizationNodeView, null), /*#__PURE__*/_react.default.createElement(ShowHexDataView, null), /*#__PURE__*/_react.default.createElement(ShowCustomNonceView, null), /*#__PURE__*/_react.default.createElement(EnhancedTokenDetectionView, null), /*#__PURE__*/_react.default.createElement(EnableEthSignView, null))));
});
const EnableSynchronizationNodeView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [synchronizationNode, setSynchronizationNode] = (0, _storage.useStorage)(_storage2.ENABLE_SYNCHRONIZATION_NODE, false);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: synchronizationNode,
    onChange: setSynchronizationNode
  }), [synchronizationNode]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('advanced.enable_synchronization_node'),
    description: t('advanced.enable_synchronization_node_desc'),
    accessoryRight: accessoryRight
  });
});
const ResetAccountView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilAngleRightB.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const onReset = (0, _react.useCallback)(() => {
    _reactNative.Alert.alert(t('reset_account.reset_account_modal_title'), t('reset_account.reset_account_modal_message'), [{
      text: t('reset_account.cancel'),
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    }, {
      text: t('reset_account.reset_account_confirm_button'),
      onPress: () => console.log('OK Pressed'),
      style: 'destructive'
    }]);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    title: t('reset_account.reset_account_button'),
    description: t('reset_account.reset_desc')
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    onPress: onReset
  });
});
const ShowHexDataView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [showHexData, setShowHexData] = (0, _storage.useStorage)(_storage2.SHOW_HEX_DATA_KEY, false);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: showHexData,
    onChange: setShowHexData
  }), [showHexData]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('advanced.show_hex_data'),
    description: t('advanced.show_hex_data_desc'),
    accessoryRight: accessoryRight
  });
});
const ShowCustomNonceView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [showCustomNonce, setShowCustomNonce] = (0, _storage.useStorage)(_storage2.SHOW_CUSTOM_NONCE_KEY, false);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: showCustomNonce,
    onChange: setShowCustomNonce
  }), [showCustomNonce]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('advanced.show_custom_nonce'),
    description: t('advanced.custom_nonce_desc'),
    accessoryRight: accessoryRight
  });
});
const EnhancedTokenDetectionView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [enhancedTokenDetection, setEnhancedTokenDetection] = (0, _storage.useStorage)(_storage2.ENHANCED_TOKEN_DETECTION_KEY, false);
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: enhancedTokenDetection,
    onChange: setEnhancedTokenDetection
  }), [enhancedTokenDetection]);
  return /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('advanced.token_detection_title'),
    description: t('advanced.token_detection_description'),
    accessoryRight: accessoryRight
  });
});
const EnableEthSignView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [enableEthSign, setEnableEthSign] = (0, _storage.useStorage)(_storage2.ENABLE_ETH_SIGN_KEY, false);
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _components.useTheme)();
  const [checked, setChecked] = (0, _react.useState)(false);
  const modalizeRef = (0, _react.useRef)(null);
  const onEnableEthSign = (0, _react.useCallback)(enable => {
    if (!enable) {
      setEnableEthSign(false);
    } else {
      setChecked(false);
      modalizeRef.current?.open();
    }
  }, []);
  const onCancel = () => {
    modalizeRef.current?.close();
    setChecked(false);
  };
  const onEnable = () => {
    setEnableEthSign(true);
    setChecked(false);
    modalizeRef.current?.close();
  };
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.Toggle, {
    checked: enableEthSign,
    onChange: onEnableEthSign
  }), [enableEthSign]);
  const description = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_components.Text, {
    status: enableEthSign ? 'warning' : 'basic',
    appearance: "hint",
    category: "c1"
  }, enableEthSign ? t('advanced.enable_eth_sign_warning') : t('advanced.enable_eth_sign_desc'))), [enableEthSign]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('advanced.enable_eth_sign')
    // @ts-ignore
    ,
    description: description,
    accessoryRight: accessoryRight
  }), /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: modalizeRef,
    adjustToContentHeight: true,
    modalStyle: {
      backgroundColor: theme['background-basic-color-1']
    },
    closeOnOverlayTap: false
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginBottom: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_uilInfoCircle.default, {
    size: 35,
    color: theme['color-danger-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('advanced.toggleEthSignModalTitle'))), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('advanced.toggleEthSignModalDescription')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 12
    }
  }, /*#__PURE__*/_react.default.createElement(_uilInfoCircle.default, {
    size: 15,
    color: theme['color-danger-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1'
  }, t('advanced.toggleEthSignModalBannerText'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_uilInfoCircle.default, {
    size: 15,
    color: theme['color-danger-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label'
  }, t('advanced.toggleEthSignModalBannerBoldText'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.CheckBox, {
    checked: checked,
    onChange: setChecked
  }, t('advanced.toggleEthSignModalCheckBox'))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onCancel
  }, t('advanced.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    disabled: !checked,
    onPress: onEnable
  }, t('advanced.toggleEthSignEnableButton')))))));
});