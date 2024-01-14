"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _components = require("@ui-kitten/components");
var _native = require("@react-navigation/native");
var _reactI18next = require("react-i18next");
var _reactNative = require("react-native");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _uilCopy = _interopRequireDefault(require("../../assets/icons/uil-copy"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _storage = require("../../config/storage");
var _storage2 = require("../../lib/storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BackScreen = exports.BackScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const [step, setStep] = (0, _react.useState)(1);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "2",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: 15
    }
  }, step === 1 && /*#__PURE__*/_react.default.createElement(BackupStep1, {
    step: step,
    setStep: setStep
  }), step === 2 && /*#__PURE__*/_react.default.createElement(BackupStep2, {
    step: step,
    setStep: setStep
  }))));
});
const BackupStep2 = /*#__PURE__*/(0, _react.memo)(({
  setStep,
  step
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    wallet
  } = params;
  const theme = (0, _components.useTheme)();
  const [phrase, setPhrase] = (0, _react.useState)([]);
  const mnemonic = (0, _react.useMemo)(() => wallet.mnemonic.phrase, [wallet]);
  const istPhrase = (0, _react.useMemo)(() => {
    const m = mnemonic.split(' ');
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] !== m[i]) {
        return false;
      }
    }
    return true;
  }, [wallet, phrase]);
  const isOK = (0, _react.useMemo)(() => phrase.join(' ') === mnemonic, [mnemonic, phrase]);
  const onConfirm = (0, _react.useCallback)(async () => {
    if (isOK) {
      await _storage2.storage.setBoolAsync(`${_storage.WALLET_BACK_KEY}_${wallet.address}`, true);
      _reactNative.Alert.alert(t('account_backup.account_backup_step_6.modal_title'), t('account_backup.account_backup_step_6.modal_text'), [{
        text: t('account_backup.account_backup_step_6.modal_button'),
        onPress: () => {
          navigation.goBack();
        }
      }]);
    } else {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('account_backup.account_backup_step_5.error_title'),
        text2: t('account_backup.account_backup_step_5.error_message')
      });
    }
  }, [isOK, wallet]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Card, {
    disabled: true,
    appearance: "filled",
    header: /*#__PURE__*/_react.default.createElement(_reactNative.View, null, !istPhrase ? /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label",
      status: "warning"
    }, t('account_backup.account_backup_step_5.error_message')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label",
      status: "danger"
    }, t('account_backup.account_backup_step_6.title')), /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "c1",
      status: "danger"
    }, t('account_backup.account_backup_step_1B.wrong_answer_description')))),
    footer: /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('account_backup.account_backup_step_5.info_text')))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, phrase.map((v, index) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    key: index,
    onPress: () => {
      setPhrase(value => value.filter((_, i) => i !== index));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: istPhrase ? theme['color-success-300'] : theme['color-danger-300'],
      margin: 5,
      padding: 5,
      borderRadius: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label',
    style: {
      color: theme['text-basic-color']
    }
  }, `${index + 1} ${v}`))))))), /*#__PURE__*/_react.default.createElement(RandomView, {
    setPhrase: setPhrase
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: "basic",
    onPress: () => setStep(step - 1)
  }, t('account_backup.account_backup_step_4.back')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    style: {
      marginTop: 10
    },
    onPress: onConfirm,
    disabled: !isOK
  }, t('account_backup.account_backup_step_4.confirm'))));
});
const RandomView = /*#__PURE__*/(0, _react.memo)(({
  setPhrase
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    wallet
  } = params;
  const [random, setRandom] = (0, _react.useState)([]);
  const theme = (0, _components.useTheme)();
  const mnemonic = (0, _react.useMemo)(() => wallet.mnemonic.phrase, [wallet]);
  (0, _react.useEffect)(() => {
    if (mnemonic) {
      (0, _react.startTransition)(() => {
        const data = mnemonic.split(' ').sort(() => 0.5 - Math.random());
        setRandom(data);
      });
    }
  }, [mnemonic]);
  const onPhrase = (0, _react.useCallback)(index => {
    //const arr = random
    const str = random[index];
    setPhrase(value => [...value, str]);
  }, [random]);
  const RandomView = (0, _react.useCallback)(() => random.map((v, index) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    key: index,
    onPress: () => {
      onPhrase(index);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme['background-basic-color-4'],
      margin: 5,
      padding: 5,
      borderRadius: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label',
    style: {
      color: theme['text-basic-color']
    }
  }, `${v}`))))), [random]);
  return random.length > 0 ? /*#__PURE__*/_react.default.createElement(_components.Card, {
    style: {
      marginTop: 15
    },
    disabled: true,
    appearance: "filled",
    header: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('account_backup.account_backup_step_6.disclaimer'))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react.default.createElement(RandomView, null))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
});
const BackupStep1 = /*#__PURE__*/(0, _react.memo)(({
  setStep,
  step
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    params
  } = (0, _native.useRoute)();
  const {
    wallet
  } = params;
  const theme = (0, _components.useTheme)();
  const mnemonic = (0, _react.useMemo)(() => wallet.mnemonic.phrase, [wallet]);
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
  const accessoryRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_uilCopy.default, {
    size: style?.height,
    color: style?.tintColor
  }), []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Card, {
    disabled: true,
    appearance: "filled",
    header: /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('account_backup.account_backup_step_4.title')),
    footer: /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('account_backup.account_backup_step_4.info_text_1')), /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label",
      status: "primary"
    }, t('account_backup.account_backup_step_1B.right_answer_description')), /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, t('account_backup.account_backup_step_4.info_text_2')))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, mnemonic.split(' ').map((v, index) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: index,
    style: {
      backgroundColor: theme['background-basic-color-4'],
      margin: 5,
      padding: 5,
      borderRadius: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'label',
    style: {
      color: theme['text-basic-color']
    }
  }, `${index + 1} ${v}`)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center',
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic"
    // @ts-ignore
    ,
    accessoryRight: accessoryRight,
    onPress: copySeedPhrase
  }, t('reveal_credential.copy_to_clipboard')))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: () => setStep(step + 1)
  }, t('account_backup.account_backup_step_4.confirm'))));
});