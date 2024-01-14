"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendScreen = exports.ITEM_NFT_HEIGHT = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _StatusBarComponent = require("../../components/StatusBarComponent");
var _native = require("@react-navigation/native");
var _reactNative = require("react-native");
var _reactNativeKeyboardAwareScrollView = require("react-native-keyboard-aware-scroll-view");
var _reactI18next = require("react-i18next");
var _clipboard = _interopRequireDefault(require("@react-native-clipboard/clipboard"));
var _ethers = require("../../lib/ethers");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _NavigationActionComponent = require("../../components/NavigationActionComponent");
var _uilQrcodeScan = _interopRequireDefault(require("../../assets/icons/uil-qrcode-scan"));
var _uilClipboardAlt = _interopRequireDefault(require("../../assets/icons/uil-clipboard-alt"));
var _useNode = require("../../hooks/rpc/useNode");
var _AssetsComponent = require("../../components/AssetsComponent");
var _useTransaction = require("../../hooks/wallet/useTransaction");
var _BalanceComponent = require("../../components/BalanceComponent");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));
var _useBalance = require("../../hooks/wallet/useBalance");
var _BlockiesComponent = require("../../components/BlockiesComponent");
var _AuthenticationComponent = require("../../components/AuthenticationComponent");
var _useNFT = require("../../hooks/wallet/useNFT");
var _flashList = require("@shopify/flash-list");
var _useWallet = require("../../hooks/wallet/useWallet");
var _useTron = require("../../hooks/rpc/useTron");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ITEM_NFT_HEIGHT = exports.ITEM_NFT_HEIGHT = 80;
const SendScreen = exports.SendScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const value = (0, _useTransaction.useTransactionContext)();
  const navigation = (0, _native.useNavigation)();
  const {
    node,
    isTron
  } = (0, _useWallet.useWallet)();
  (0, _react.useEffect)(() => {
    navigation.setOptions({
      headerRight
    });
  }, []);
  const headerRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction
  // @ts-ignore
  , {
    icon: ({
      style
    }) => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      size: style?.height,
      item: node
    })
  }), []);
  return /*#__PURE__*/_react.default.createElement(_useTransaction.WalletTransactionContext.Provider, {
    value: value
  }, /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_StatusBarComponent.StatusBarComponent, null), /*#__PURE__*/_react.default.createElement(_reactNativeKeyboardAwareScrollView.KeyboardAwareScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    enableAutomaticScroll: true,
    extraScrollHeight: 50
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(InputToView, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(InputAmountView, null)), !isTron && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(EstimateGasView, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(DetailsView, null)), isTron ? /*#__PURE__*/_react.default.createElement(SendButtonTronView, null) : /*#__PURE__*/_react.default.createElement(SendButtonView, null)))));
});
/*const SuggestedGasFees = () => {
const {node}=useWallet()
  useEffect(() => {
    const id = setTimeout(() => {
      getSuggestedGasFees(node.chainId).then(console.log).catch(console.log)
    }, 1000);
    return () => clearTimeout(id);
  }, [node]);
  return <></>
}*/
const EstimateGasView = /*#__PURE__*/(0, _react.memo)(() => {
  const [showCustomNonce] = (0, _storage.useStorage)(_storage2.SHOW_CUSTOM_NONCE_KEY, false);
  const {
    loading,
    gasPrice,
    setGasPrice,
    estimateGas,
    setEstimateGas,
    nonce,
    setNonce,
    free,
    node,
    address
  } = (0, _useTransaction.useTransaction)();
  const [details, setDetails] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    balance
  } = (0, _useBalance.useBalance)({
    address,
    node,
    asset: node
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, details && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginRight: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    size: "small",
    placeholder: t('transactions.gas_limit'),
    label: t('transactions.gas_limit'),
    value: estimateGas,
    onChangeText: setEstimateGas,
    disabled: loading
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginLeft: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    size: "small",
    placeholder: t('transactions.gas_price'),
    label: t('transactions.gas_price'),
    value: gasPrice,
    onChangeText: setGasPrice,
    disabled: loading
  }))), showCustomNonce && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginRight: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    size: "small",
    placeholder: t('transactions.nonce'),
    label: t('transactions.nonce'),
    value: nonce,
    style: {
      marginTop: 5
    },
    onChangeText: setNonce,
    disabled: loading
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginLeft: 5
    }
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1'
  }, `${t('transactions.estimated_gas_fee')} ${(0, _ethers.formatUnits)(free, node.decimals)} ${node.symbol}, ${t('transactions.address_from_balance')}${balance.toFormat(6)} ${node.symbol}`)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    appearance: "ghost",
    onPress: () => setDetails(!details)
  }, details ? t('import_from_seed.hide_advanced_options') : t('import_from_seed.advanced_options'))));
});
const InputAmountView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    amount,
    setAmount,
    isAmount,
    asset,
    node,
    address
  } = (0, _useTransaction.useTransaction)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const accessoryRight = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_BalanceComponent.BalanceNodeItem, {
    address: address,
    asset: asset,
    node: node
  }), [asset, node, address]);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
    item: asset,
    size: props.style.width
  }), [asset]);
  return asset.isERC721 ? /*#__PURE__*/_react.default.createElement(InputNFTView, null) : /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: amount,
    label: t('wallet.send.amount'),
    placeholder: t('wallet.send.amount'),
    status: !amount || isAmount ? 'basic' : 'danger',
    accessoryRight: accessoryRight,
    accessoryLeft: accessoryLeft,
    onChangeText: setAmount,
    multiline: true
  });
});
const InputNFTView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    asset,
    node,
    address
  } = (0, _useTransaction.useTransaction)();
  const {
    loading,
    balance,
    getBalance
  } = (0, _useNFT.useNFT)({
    address,
    asset,
    node
  });
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const renderItem = (0, _react.useCallback)(({
    item
  }) => /*#__PURE__*/_react.default.createElement(AssetsItem, {
    item: item
  }), []);
  const itemSeparatorComponent = (0, _react.useCallback)(() => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: 5
    }
  }), []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: width / 2,
      // backgroundColor: theme['background-basic-color-2'],
      padding: 10,
      borderRadius: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_flashList.FlashList, {
    refreshing: loading,
    onRefresh: getBalance,
    data: balance,
    renderItem: renderItem,
    ItemSeparatorComponent: itemSeparatorComponent,
    numColumns: 3,
    keyExtractor: item => item.id
  }));
});
const AssetsItem = /*#__PURE__*/(0, _react.memo)(({
  item
}) => {
  const {
    amount,
    setAmount
  } = (0, _useTransaction.useTransaction)();
  const theme = (0, _components.useTheme)();
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const onAmount = (0, _react.useCallback)(() => {
    setAmount(item.id);
  }, [item]);
  const size = (0, _react.useMemo)(() => (width - 15 - 15 - 15 - 15 - 5) / 3, [width]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onAmount
  }, /*#__PURE__*/_react.default.createElement(_components.Avatar, {
    style: {
      height: size,
      width: size,
      borderRadius: 5,
      opacity: amount === item.id ? 1 : 0.5
    },
    source: {
      uri: item.uri
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      left: 5,
      top: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme['color-basic-500'],
      borderRadius: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 's1',
    status: "control",
    style: {
      fontSize: 10
    }
  }, `#${item.id}`))));
});
const InputToView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    to,
    setTo,
    isTo
  } = (0, _useTransaction.useTransaction)();
  const {
    isTron
  } = (0, _useNode.useNode)();
  (0, _react.useEffect)(() => {
    setTo(params?.address || '');
  }, [params]);
  const onClipboard = (0, _react.useCallback)(async () => {
    _reactNative.Keyboard.dismiss();
    const address = await _clipboard.default.getString();
    if (!isTron && (0, _ethers.isAddress)(address) || isTron && (0, _ethers.isAddressTrx)(address)) {
      setTo(address);
    } else {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('wallet.send.invalid_recipient'),
        text2: t('wallet.send.invalid_recipient_description')
      });
    }
  }, []);
  const onItem = (0, _react.useCallback)(address => {
    if (!isTron && (0, _ethers.isAddress)(address) || isTron && (0, _ethers.isAddressTrx)(address)) {
      setTo(address);
    } else {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('wallet.send.invalid_recipient'),
        text2: t('wallet.send.invalid_recipient_description')
      });
    }
  }, []);
  const seedPhraseRight = (0, _react.useCallback)(
  // @ts-ignore
  ({
    style
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_NavigationActionComponent.ScanAction, {
    onItem: onItem
  }, /*#__PURE__*/_react.default.createElement(_uilQrcodeScan.default, {
    size: style?.height / 1.1,
    color: style?.tintColor
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onClipboard,
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_uilClipboardAlt.default, {
    size: style?.height,
    color: style?.tintColor
  }))), []);
  const accessoryLeft = (0, _react.useCallback)(
  // @ts-ignore
  props => /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
    address: to,
    size: props.style.width
  }), [to]);
  return /*#__PURE__*/_react.default.createElement(_components.Input, {
    value: to,
    label: t('wallet.send.send_to'),
    placeholder: t('wallet.send.send_to'),
    status: !to || isTo ? 'basic' : 'danger',
    accessoryLeft: accessoryLeft,
    accessoryRight: seedPhraseRight,
    onChangeText: setTo,
    disabled: !!params?.address,
    multiline: true
  });
});
const DetailsView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    transaction
  } = (0, _useTransaction.useTransaction)();
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [showHexData] = (0, _storage.useStorage)(_storage2.SHOW_HEX_DATA_KEY, false);
  const [details, setDetails] = (0, _react.useState)(showHexData);
  const hex = (0, _react.useMemo)(() => transaction?.data || '0x', [transaction]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, details && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn,
    style: {
      borderRadius: 8,
      padding: 10,
      backgroundColor: theme['background-basic-color-2'],
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('transactions.data_description')), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, {
    style: {
      maxHeight: 60
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, hex)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    size: "small",
    status: "basic",
    appearance: "ghost",
    onPress: () => setDetails(!details),
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_Fontisto.default
    // @ts-ignore
    , {
      size: props.style?.height
      // @ts-ignore
      ,
      color: props.style?.tintColor,
      name: "hexo"
    })
  }, t('transactions.details'))));
});
const SendButtonTronView = /*#__PURE__*/(0, _react.memo)(() => {
  const [sign, setSign] = (0, _react.useState)(false);
  const {
    rpc
  } = (0, _useTron.useTron)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    isConfirm,
    transaction,
    provider,
    to,
    amount,
    node,
    isAsset,
    asset
  } = (0, _useTransaction.useTransaction)();
  const onCancel = (0, _react.useCallback)(() => {}, []);
  const onConfirm = (0, _react.useCallback)(wallet => {
    if (transaction) {
      setTimeout(async () => {
        try {
          const privateKey = wallet.privateKey;
          /*const tronWeb = new TronWeb({
            fullHost: rpc,
            //TSkVTqJKX8uaZAWbCbF8TjXzZsMDVDwE88
          });*/
          if (isAsset) {
            /*  await tronWeb.trx.sendToken(
              to,
              parseUnits(amount, asset.decimals).toNumber(),
              asset.id,
              privateKey,
            );*/
          } else {
            // const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
            /*  await tronWeb.trx.sendTransaction(
              to,
              parseUnits(amount, node.decimals).toNumber(),
              privateKey,
            );*/
          }
          _reactNativeToastMessage.default.show({
            type: 'success',
            text1: t('transactions.sent')
            //text2: hash,
          });
          /* const sign = await wallet.signTransaction(transaction);
          const {hash} = await provider.sendTransaction(sign);
          Toast.show({
            type: 'success',
            text1: t('transactions.sent'),
            //text2: hash,
          });
           await storage.setStringAsync(
            `${TRANSACTION_HASH}_${node.id}`,
            hash,
          );*/
          navigation.goBack();
        } catch (e) {
          setSign(false);
          console.log('tron', e);
          _reactNativeToastMessage.default.show({
            type: 'error',
            text1: t('wallet.send.deeplink_failure')
          });
        } finally {}
      }, 5);
    }
  }, [transaction, provider, rpc]);
  const onSign = (0, _react.useCallback)(() => {
    setSign(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    disabled: !isConfirm,
    onPress: onSign
  }, t('wallet.send.confirm'))), sign && /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    address: transaction?.from
  }));
});
const SendButtonView = /*#__PURE__*/(0, _react.memo)(() => {
  const [sign, setSign] = (0, _react.useState)(false);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const navigation = (0, _native.useNavigation)();
  const {
    isConfirm,
    transaction,
    provider,
    node
  } = (0, _useTransaction.useTransaction)();
  const onCancel = (0, _react.useCallback)(() => {}, []);
  const onConfirm = (0, _react.useCallback)(wallet => {
    if (transaction) {
      setTimeout(async () => {
        try {
          const sign = await wallet.signTransaction(transaction);
          const {
            hash
          } = await provider.sendTransaction(sign);
          _reactNativeToastMessage.default.show({
            type: 'success',
            text1: t('transactions.sent')
            //text2: hash,
          });
          await _storage.storage.setStringAsync(`${_storage2.TRANSACTION_HASH}_${node.id}`, hash);
          navigation.goBack();
        } catch (e) {
          setSign(false);
          _reactNativeToastMessage.default.show({
            type: 'error',
            text1: t('wallet.send.deeplink_failure')
          });
        } finally {}
      }, 5);
    }
  }, [transaction, provider, node]);
  const onSign = (0, _react.useCallback)(() => {
    setSign(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    disabled: !isConfirm,
    onPress: onSign
  }, t('wallet.send.confirm'))), sign && /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    address: transaction?.from
  }));
});