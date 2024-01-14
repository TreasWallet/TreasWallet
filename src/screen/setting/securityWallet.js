"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityWalletScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _AuthenticationComponent = require("../../components/AuthenticationComponent");
var _native = require("@react-navigation/native");
var _ethers = require("ethers");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNative = require("react-native");
var _reactI18next = require("react-i18next");
var _uilCopy = _interopRequireDefault(require("../../assets/icons/uil-copy"));
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _reactNativeQrcodeSvg = _interopRequireDefault(require("react-native-qrcode-svg"));
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _sinfo = require("../../lib/sinfo");
var _storage = require("../../config/storage");
var _storage2 = require("../../lib/storage");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativePortalize = require("react-native-portalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SecurityWalletScreen = exports.SecurityWalletScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const navigation = (0, _native.useNavigation)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [wallet, setWallet] = (0, _react.useState)();
  const onCancel = (0, _react.useCallback)(() => {
    navigation.goBack();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: setWallet,
    address: params.address
  }), wallet && /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "p2",
    style: {
      marginBottom: 15
    }
  }, t('reveal_credential.private_key_warning', {
    accountName: wallet.address
  })), wallet && /*#__PURE__*/_react.default.createElement(PrivateKeyView, {
    wallet: wallet
  }), wallet.mnemonic && /*#__PURE__*/_react.default.createElement(MnemonicView, {
    wallet: wallet
  }))));
});
const PrivateKeyView = /*#__PURE__*/(0, _react.memo)(({
  wallet
}) => {
  const [privateKey, setPrivateKey] = (0, _react.useState)(false);
  const [qr, setQr] = (0, _react.useState)(true);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilCopy.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const copyPrivateKey = (0, _react.useCallback)(() => {
    if (wallet) {
      _reactNative.Alert.alert(t('account_backup.account_backup_step_3.title'), t('account_backup.account_backup_step_3.info_text'), [{
        text: t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: t('account_backup.account_backup_step_3.cta_text'),
        onPress: () => {
          _clipboard.default.setString(wallet.privateKey);
          _reactNativeToastMessage.default.show({
            type: 'success',
            text1: t('reveal_credential.copy_to_clipboard'),
            text2: t('reveal_credential.private_key_copied')
          });
        }
      }]);
    }
  }, [wallet]);
  return /*#__PURE__*/_react.default.createElement(_components.Card, {
    disabled: true,
    appearance: "filled",
    header: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('reveal_credential.private_key')),
    footer: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "c1"
    }, t('reveal_credential.private_key_warning_explanation'))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, privateKey ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, qr ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_reactNativeQrcodeSvg.default, {
    value: wallet.privateKey,
    size: width / 2,
    backgroundColor: theme['background-basic-color-1'],
    color: theme['text-basic-color']
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: wallet.address,
    size: width / 15
  })))) : /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, wallet.privateKey)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 10
    }
  }, !qr && /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic"
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    onPress: copyPrivateKey
  }, t('reveal_credential.copy_to_clipboard')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    onPress: () => setQr(!qr),
    style: {
      marginTop: 10
    }
  }, qr ? t('reveal_credential.text') : t('reveal_credential.qr_code')))) : /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    onPress: () => setPrivateKey(true)
  }, t('reveal_credential.show_private_key'))));
});
const MnemonicView = /*#__PURE__*/(0, _react.memo)(({
  wallet
}) => {
  const navigation = (0, _native.useNavigation)();
  const [seedPhrase, setSeedPhrase] = (0, _react.useState)(false);
  const [path, setPath] = (0, _react.useState)('');
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const theme = (0, _components.useTheme)();
  const [qr, setQr] = (0, _react.useState)(true);
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const [back] = (0, _storage2.useStorage)(`${_storage.WALLET_BACK_KEY}_${wallet.address}`, false);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      (0, _sinfo.getItemSInfo)(`${_storage.WALLET_PATH_KEY}_${wallet.address}`).then(path => setPath(path || _ethers.ethers.utils.defaultPath));
    });
  }, []);
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilCopy.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  const copySeedPhrase = (0, _react.useCallback)(() => {
    if (wallet?.mnemonic) {
      _reactNative.Alert.alert(t('account_backup.account_backup_step_3.title'), t('account_backup.account_backup_step_3.info_text'), [{
        text: t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: t('account_backup.account_backup_step_3.cta_text'),
        onPress: () => {
          _clipboard.default.setString(wallet.mnemonic.phrase);
          _reactNativeToastMessage.default.show({
            type: 'success',
            text1: t('reveal_credential.copy_to_clipboard'),
            text2: t('reveal_credential.seed_phrase_copied')
          });
        }
      }]);
    }
  }, [wallet]);
  const toBack = (0, _react.useCallback)(() => {
    // @ts-ignore
    navigation.navigate('BackScreen', {
      wallet
    });
  }, [wallet]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Card, {
    style: {
      marginTop: 15
    },
    disabled: true,
    appearance: "filled",
    header: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('reveal_credential.seed_phrase')),
    footer: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "c1"
    }, t('reveal_credential.seed_warning', {
      n: wallet.mnemonic.phrase.split(' ').length
    }))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, seedPhrase ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, qr ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_reactNativeQrcodeSvg.default, {
    value: wallet.mnemonic.phrase,
    size: width / 2,
    backgroundColor: theme['background-basic-color-1'],
    color: theme['text-basic-color']
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: wallet.address,
    size: width / 15
  })))) : /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, wallet.mnemonic.phrase)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginVertical: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, `${t('import_from_seed.derive_path')}`), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, `${path}`)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 10
    }
  }, !qr && /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic"
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    onPress: copySeedPhrase
  }, t('reveal_credential.copy_to_clipboard')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    onPress: () => setQr(!qr),
    style: {
      marginTop: 10
    }
  }, qr ? t('reveal_credential.text') : t('reveal_credential.qr_code')))) : /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    onPress: () => setSeedPhrase(true)
  }, t('reveal_credential.seed_phrase_title')))), back ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: toBack
  }, t('account_backup.back_up_again'))) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: toBack
  }, t('account_backup.back_up_now'))), /*#__PURE__*/_react.default.createElement(AccountBackup, {
    wallet: wallet
  }));
});
const AccountBackup = /*#__PURE__*/(0, _react.memo)(({
  wallet
}) => {
  const theme = (0, _components.useTheme)();
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const [back] = (0, _storage2.useStorage)(`${_storage.WALLET_BACK_KEY}_${wallet?.address}`, false);
  const [remindMeLater, setRemindMeLater] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      if (wallet && !back && !remindMeLater && wallet.mnemonic) {
        open();
      }
    }, 1000);
    return () => {
      clearTimeout(id);
      close();
    };
  }, [back, wallet, ref.current]);
  const onRemindMeLater = (0, _react.useCallback)(() => {
    setRemindMeLater(true);
    close();
  }, []);
  const toBack = (0, _react.useCallback)(() => {
    close();
    // @ts-ignore
    wallet && navigation.navigate('BackScreen', {
      wallet
    });
  }, [wallet]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativeModalize.Modalize, {
    ref: ref,
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
  }, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    size: 50,
    address: wallet.address
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, t('account_backup.protect_title'))), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c2"
  }, t('account_backup.account_backup_step_1B.why_secure_1')), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c2"
  }, t('account_backup.account_backup_step_1B.why_secure_2')), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onRemindMeLater
  }, t('account_backup.account_backup_step_1.remind_me_later')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: toBack,
    disabled: !wallet
  }, t('account_backup.back_up_now')))))));
});