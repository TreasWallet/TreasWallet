"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignTransaction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@ui-kitten/components");
var _reactNativeModalize = require("react-native-modalize");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _storage = require("../../../lib/storage");
var _storage2 = require("../../../config/storage");
var _useWebView = require("../../../hooks/browser/useWebView");
var _reactI18next = require("react-i18next");
var _useRpc = require("../../../hooks/rpc/useRpc");
var _useTransactionData = require("../../../hooks/browser/useTransactionData");
var _useToken = require("../../../hooks/wallet/useToken");
var _useEstimateGas = require("../../../hooks/wallet/useEstimateGas");
var _useBalance = require("../../../hooks/wallet/useBalance");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _ethers = require("../../../lib/ethers");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _reactNativePortalize = require("react-native-portalize");
var _reactNative = require("react-native");
var _uilTransaction = _interopRequireDefault(require("../../../assets/icons/uil-transaction"));
var _AssetsComponent = require("../../../components/AssetsComponent");
var _BlockiesComponent = require("../../../components/BlockiesComponent");
var _AuthenticationComponent = require("../../../components/AuthenticationComponent");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));
var _useWallet = require("../../../hooks/wallet/useWallet");
var _utils = require("ethers/lib/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SignTransaction = exports.SignTransaction = /*#__PURE__*/(0, _react.memo)(() => {
  const theme = (0, _components.useTheme)();
  const [sign, setSign] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    ref,
    open,
    close
  } = (0, _reactNativeModalize.useModalize)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const [showCustomNonce] = (0, _storage.useStorage)(_storage2.SHOW_CUSTOM_NONCE_KEY, false);
  const {
    message,
    sendResult,
    sendError
  } = (0, _useWebView.useWebView)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const is = (0, _react.useMemo)(() => message ? message.name === 'signTransaction' : false, [message]);
  const [free, setFree] = (0, _react.useState)('0');
  const [gas_price, setGasPrice] = (0, _react.useState)('0');
  const [gas_limit, setGasLimit] = (0, _react.useState)('0');
  const [nonce, setNonce] = (0, _react.useState)('');
  const [isSend, setIsSend] = (0, _react.useState)(false);
  const {
    node
  } = (0, _useWallet.useWallet)();
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const data = (0, _react.useMemo)(() => is && message ? message.object : undefined, [message, is]);
  const {
    info: abiData
  } = (0, _useTransactionData.useTransactionData)({
    data: data?.data
  });
  const {
    info: token
  } = (0, _useToken.useToken)({
    token: abiData ? data?.to : undefined,
    rpc
  });
  const {
    gasPrice,
    estimateGas,
    nonce: pending,
    loading: loadingEstimateGas
  } = (0, _useEstimateGas.useEstimateGas)({
    row: data
  });
  const {
    balance
  } = (0, _useBalance.useBalance)({
    address: data?.from,
    node,
    asset: node
  });
  (0, _react.useEffect)(() => {
    setGasPrice(gasPrice);
    setGasLimit(estimateGas);
    setNonce(pending);
  }, [gasPrice, estimateGas, pending]);
  (0, _react.useEffect)(() => {
    if (gas_price && gas_limit) {
      const frreBN = (0, _bignumber.default)((0, _utils.parseUnits)(gas_price, _ethers.GWEI).toString()).multipliedBy((0, _bignumber.default)(gas_limit));
      const free = frreBN.isPositive() ? frreBN.toString() : '0';
      setFree(free);
      setIsSend(true);
    }
    return () => setIsSend(false);
  }, [gas_price, gas_limit]);
  const onCancel = (0, _react.useCallback)(() => {
    if (message) {
      close();
      sendError(message.id, 'cancel');
    }
  }, [message]);
  const onSign = (0, _react.useCallback)(() => {
    setLoading(true);
    setTimeout(() => {
      if (message && is) {
        close();
        setSign(true);
      } else {
        setLoading(false);
        close();
      }
    }, 1);
  }, [message, is]);
  (0, _react.useEffect)(() => {
    if (is) {
      open();
    } else {
      close();
    }
  }, [is, message]);
  const onConfirm = (0, _react.useCallback)(async wallet => {
    if (message && is && data) {
      try {
        const sned = {
          from: data.from,
          to: data.to
        };
        if (data.value) {
          sned.value = (0, _utils.parseUnits)((0, _ethers.formatUnits)(data.value, node.decimals), node.decimals);
        }
        if (data.data) {
          sned.data = data.data;
        }
        const provider = new _ethers.ethers.providers.JsonRpcProvider(rpc);
        sned.chainId = Number(node.chainId);
        sned.gasLimit = (0, _utils.parseUnits)(gas_limit, 0);
        sned.gasPrice = (0, _utils.parseUnits)(gas_price || '0', _ethers.GWEI); //ethers.utils.parseUnits(gas_price, 0);
        if (!nonce) {
          sned.nonce = await provider.getTransactionCount(wallet.address, 'pending');
        } else {
          sned.nonce = Number(nonce);
        }
        const sign = await wallet.signTransaction(sned);
        const {
          hash
        } = await provider.sendTransaction(sign);
        _reactNativeToastMessage.default.show({
          type: 'success',
          text1: t('transactions.sent'),
          text2: hash
        });
        sendResult(message.id, hash);
      } catch (e) {
        _reactNativeToastMessage.default.show({
          type: 'error',
          text1: t('transactions.transaction_error'),
          text2: e?.toString()
        });
        sendError(message.id, 'cancel');
      } finally {
        setLoading(false);
        close();
        setSign(false);
      }
    } else {
      setSign(false);
    }
  }, [message, is, gas_limit, gas_price, showCustomNonce, nonce]);
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
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_uilTransaction.default, {
    size: 35,
    color: theme['color-info-600']
  }), /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('browser.paymentRequest.title'))), abiData ? /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, abiData.name === 'transfer' ? t('transactions.tx_review_transfer') : abiData.name === 'transferFrom' ? t('transactions.tx_review_transfer_from') : abiData.name === 'approve' ? t('transactions.tx_review_approve') : t('transactions.tx_review_unknown'))), token && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: token.name,
    description: token.id,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      item: token
      // @ts-ignore
      ,
      size: props.style.width
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  }))) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "h6"
  }, data?.data && data.data.length > 2 && _ethers.ethers.utils.isHexString(data.data) ? t('transactions.tx_review_unknown') : t('browser.paymentRequest.is_requesting_you_to_pay'))), abiData && token ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, abiData?.name === 'transfer' || abiData?.name === 'approve' ? /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('transactions.to'),
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      address: abiData?.args[0]
      // @ts-ignore
      ,
      size: props.style.width
    })),
    description: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "c1",
      appearance: "hint"
    }, abiData?.args[0]), token ? /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, `${t('transactions.amount')} ${data?.data?.endsWith('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff') ? t('transactions.infinite_large') : (0, _ethers.formatUnits)(abiData?.args[1], token.decimals)} ${token.symbol}`) : /*#__PURE__*/_react.default.createElement(_components.Spinner, {
      size: "tiny",
      style: {
        width: 10,
        height: 10
      }
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  }) : abiData?.name === 'transferFrom' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('transactions.from'),
    description: abiData?.args[0]
    // @ts-ignore
    ,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      address: abiData?.args[0]
      // @ts-ignore
      ,
      size: props.style.width
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  }), /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('transactions.to'),
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      address: abiData?.args[1]
      // @ts-ignore
      ,
      size: props.style.width
    })),
    description: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "c1",
      appearance: "hint"
    }, abiData?.args[1]), token ? /*#__PURE__*/_react.default.createElement(_components.Text, {
      category: "label"
    }, `${t('transactions.amount')} ${(0, _ethers.formatUnits)(abiData?.args[2], token.decimals)} ${token.symbol}`) : /*#__PURE__*/_react.default.createElement(_components.Spinner, {
      size: "tiny",
      style: {
        width: 10,
        height: 10
      }
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8,
      marginTop: 5
    }
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))) : data?.to && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('transactions.to'),
    description: data.to
    // @ts-ignore
    ,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_BlockiesComponent.AddressAvatar, {
      address: data.to
      // @ts-ignore
      ,
      size: props.style.width
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  })), data?.value && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.ListItem, {
    disabled: true,
    title: t('transactions.amount'),
    description: `${(0, _ethers.formatUnits)(data.value, node.decimals)} ${node.symbol}`
    // @ts-ignore
    ,
    accessoryLeft: props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props, /*#__PURE__*/_react.default.createElement(_AssetsComponent.AssetsAvatarComponent, {
      item: node
      // @ts-ignore
      ,
      size: props.style.width
    })),
    style: {
      backgroundColor: theme['background-basic-color-2'],
      borderRadius: 8
    }
  })), estimateGas && gasPrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCustomNonce && pending && /*#__PURE__*/_react.default.createElement(_components.Input, {
    size: "small",
    placeholder: t('transactions.nonce'),
    label: t('transactions.nonce'),
    value: nonce,
    style: {
      marginTop: 5
    },
    onChangeText: setNonce,
    disabled: loadingEstimateGas
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
    placeholder: t('transactions.gas_limit'),
    label: t('transactions.gas_limit'),
    value: gas_limit,
    onChangeText: setGasLimit,
    disabled: loadingEstimateGas
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      marginLeft: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Input, {
    size: "small",
    placeholder: t('transactions.gas_price'),
    label: t('transactions.gas_price'),
    value: gas_price,
    onChangeText: setGasPrice,
    disabled: loadingEstimateGas
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: 'c1'
  }, `${t('transactions.estimated_gas_fee')} ${(0, _ethers.formatUnits)(free, node.decimals)} ${node.symbol}, ${t('transactions.address_from_balance')}${balance.toFormat(6)} ${node.symbol}`))), data?.data && /*#__PURE__*/_react.default.createElement(DetailsView, {
    data: data.data
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: insets.bottom + 5
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    status: 'basic',
    onPress: onCancel
  }, t('browser.paymentRequest.cancel')), /*#__PURE__*/_react.default.createElement(_components.Button, {
    onPress: onSign,
    disabled: !isSend || loading
  }, abiData ? t('transactions.approve') : t('browser.paymentRequest.confirm')))))), sign && data.from && /*#__PURE__*/_react.default.createElement(_AuthenticationComponent.AuthenticationComponent, {
    onCancel: onCancel,
    onConfirm: onConfirm,
    address: data.from
  }));
});
const DetailsView = /*#__PURE__*/(0, _react.memo)(({
  data
}) => {
  const theme = (0, _components.useTheme)();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [showHexData] = (0, _storage.useStorage)(_storage2.SHOW_HEX_DATA_KEY, false);
  const [details, setDetails] = (0, _react.useState)(showHexData);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 5
    }
  }, details && /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    entering: _reactNativeReanimated.FadeIn,
    style: {
      borderRadius: 8,
      padding: 10,
      backgroundColor: theme['background-basic-color-2']
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "label"
  }, t('transactions.data_description')), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.ScrollView, {
    style: {
      maxHeight: 60
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Text, {
    category: "c1"
  }, data))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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