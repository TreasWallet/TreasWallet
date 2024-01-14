"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWebViewContext = exports.WebViewContext = void 0;
var _react = require("react");
var _native = require("@react-navigation/native");
var _reactNative = require("react-native");
var _provider = require("../../config/provider");
var _storage = require("../../config/storage");
var _storage2 = require("../../lib/storage");
var _urlParse = _interopRequireDefault(require("url-parse"));
var _search = require("../../config/search");
var _useBrowser = require("./useBrowser");
var _useRpc = require("../rpc/useRpc");
var _useWallet = require("../wallet/useWallet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore

const useWebViewContext = () => {
  const {
    params
  } = (0, _native.useRoute)();
  const [progress, setProgress] = (0, _react.useState)(0);
  const [isLoading, setLoading] = (0, _react.useState)(false);
  const [canGoBack, setCanGoBack] = (0, _react.useState)(false);
  const [canGoForward, setCanGoForward] = (0, _react.useState)(false);
  const [connect, setConnect] = (0, _react.useState)(false);
  const [uri, setUri] = (0, _react.useState)('');
  const [title, setTitle] = (0, _react.useState)('');
  const [url, setUrl] = (0, _react.useState)('');
  const [error, setError] = (0, _react.useState)('');
  const [js, setJs] = (0, _react.useState)();
  const [message, setMessage] = (0, _react.useState)();
  const webViewRefs = (0, _react.useRef)();
  const navigation = (0, _native.useNavigation)();
  const {
    node
  } = (0, _useWallet.useWallet)();
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const chainId = (0, _react.useMemo)(() => node.chainId, [node.chainId]);
  const info = (0, _react.useMemo)(() => (0, _urlParse.default)(url), [url]);
  const host = (0, _react.useMemo)(() => (0, _useBrowser.extractHostname)(info.hostname), [info.hostname]);
  const [searchEngine] = (0, _storage2.useStorage)(_storage.SEARCH_ENGINE_KEY, _search.SEARCH_ENGINES_DEFAULT);
  const so = (0, _react.useMemo)(() => _search.SEARCH_ENGINES.find(v => v.name === searchEngine)?.uri || _search.SEARCH_ENGINES_DEFAULT, [searchEngine]);
  (0, _react.useEffect)(() => {
    onSubmitEditing(params.value.toLowerCase());
  }, [params.value]);
  (0, _react.useEffect)(() => {
    if (info.hostname && info.href && title) {
      setHistory({
        uri: info.href,
        title
      });
    }
  }, [info.hostname, title]);
  const setHistory = async data => {
    const prev = await _storage2.storage.getArrayAsync(_storage.HISTORY_LIST_KEY);
    if (prev === null || !prev?.length) {
      await _storage2.storage.setArrayAsync(_storage.HISTORY_LIST_KEY, [data]);
    } else if (prev?.length) {
      const value = Array.from(new Set([{
        uri: info.href,
        title
      }, ...prev.filter(v => (0, _urlParse.default)(v.uri).hostname !== info.hostname)]));
      await _storage2.storage.setArrayAsync(_storage.HISTORY_LIST_KEY, value);
    }
  };
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      const data = `(function () {
    var config = {
        ethereum: {
            chainId: ${chainId},
            rpcUrl: "${rpc}"
        }
    };
    treaswallet.ethereum = new treaswallet.Provider(config);
    treaswallet.postMessage = (json) => {
        window.ReactNativeWebView.postMessage(JSON.stringify(json));
    }
    window.ethereum = treaswallet.ethereum;
})();`;
      setJs(`${_provider.provider}${data}`);
    });
  }, []);
  /* useEffect(() => {
        if (wallet && connect) {
          startTransition(() => {
            webViewRefs.current?.injectJavaScript(
              `window.ethereum.setAddress("${wallet.address}");`,
            );
          });
        }
      }, [wallet?.address, connect]);*/
  const onMessage = (0, _react.useCallback)(event => {
    const {
      data
    } = event.nativeEvent;
    console.log(data);
    const message = JSON.parse(data);
    setMessage(message);
  }, []);
  const sendResult = (id, data) => {
    console.log(id, data);
    webViewRefs.current?.injectJavaScript(data ? `window.ethereum.sendResponse(${id}, ${JSON.stringify(data)});` : `window.ethereum.sendResponse(${id},null);`);
    // setMessage(undefined);
  };
  const sendError = (id, error) => {
    console.log(id, error);
    webViewRefs.current?.injectJavaScript(`window.ethereum.sendError(${id}, "${error}");`);
    //setMessage(undefined);
  };
  const onLoad = (0, _react.useCallback)(event => {
    const {
      loading,
      title,
      url,
      canGoBack,
      canGoForward
    } = event.nativeEvent;
    (0, _react.startTransition)(() => {
      setLoading(loading);
      setTitle(title);
      setCanGoBack(canGoBack);
      setCanGoForward(canGoForward);
      setUrl(url);
    });
  }, []);
  const onLoadEnd = (0, _react.useCallback)(event => {
    const {
      loading,
      title,
      url,
      canGoBack,
      canGoForward
    } = event.nativeEvent;
    (0, _react.startTransition)(() => {
      setLoading(loading);
      setTitle(title);
      setCanGoBack(canGoBack);
      setCanGoForward(canGoForward);
      setUrl(url);
    });
  }, []);
  const onLoadStart = (0, _react.useCallback)(event => {
    const {
      loading,
      title,
      url,
      canGoBack,
      canGoForward
    } = event.nativeEvent;
    (0, _react.startTransition)(() => {
      setLoading(loading);
      setTitle(title);
      setCanGoBack(canGoBack);
      setCanGoForward(canGoForward);
      setUrl(url);
    });
  }, []);
  const onError = (0, _react.useCallback)(event => {
    const {
      loading,
      title,
      url,
      canGoBack,
      canGoForward,
      description
    } = event.nativeEvent;
    (0, _react.startTransition)(() => {
      setLoading(loading);
      setTitle(title);
      setCanGoBack(canGoBack);
      setCanGoForward(canGoForward);
      setUrl(url);
      setError(description);
    });
  }, []);
  const onLoadProgress = (0, _react.useCallback)(event => {
    const {
      progress
    } = event.nativeEvent;
    (0, _react.startTransition)(() => {
      setProgress(progress);
    });
  }, []);
  const onContentProcessDidTerminate = event => {
    webViewRefs.current?.reload();
  };
  const handleClose = () => {
    /*Alert.alert(t('Hold on'), t('Are you sure you want to go back'), [
                      {
                        text: t('Cancel'),
                        onPress: () => null,
                        style: 'cancel',
                      },
                      {text: t('Go Confirm'), onPress: () => navigation.goBack()},
                    ]);*/
    navigation.goBack();
  };
  const goBack = () => {
    canGoBack ? webViewRefs.current?.goBack() : handleClose();
  };
  const goForward = () => {
    canGoForward && webViewRefs.current?.goForward();
  };
  const onReload = () => {
    webViewRefs.current?.reload();
  };
  const onStopLoading = () => {
    isLoading && webViewRefs.current?.stopLoading();
  };
  (0, _react.useEffect)(() => {
    const backAction = () => {
      goBack();
      return true;
    };
    const backHandler = _reactNative.BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);
  const onSubmitEditing = (0, _react.useCallback)(value => {
    (0, _react.startTransition)(() => {
      if (value.split('.').length < 2) {
        const v = `${so}${value}`;
        setUri(v);
        setUrl(v);
      } else if (value.startsWith('https://') || value.startsWith('http://')) {
        setUri(value);
        setUrl(value);
      } else {
        const http = `https://${value}`;
        setUri(http);
        setUrl(http);
      }
    });
  }, []);
  const onOpenWindow = (0, _react.useCallback)(event => {
    const {
      targetUrl: value
    } = event.nativeEvent;
    // @ts-ignore
    value && navigation.navigate('WebViewScreen', {
      value
    });
  }, []);
  /*const decryptTransaction = async () => {
        const data = {
          //data: '0xa9059cbb000000000000000000000000a88cee0d58139993975c0a11eb5bcaec5205888800000000000000000000000000000000000000000000000029a2e6714fced6a0',
          //data: '0x095ea7b300000000000000000000000013f4ea83d0bd40e75c8222255bc855a974568dd4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          //data: '0x23b872dd000000000000000000000000BFb30a082f650C2A15D0632f0e87bE4F8e64460f000000000000000000000000BFb30a082f650C2A15D0632f0e87bE4F8e64460a000000000000000000000000000000000000000000000000000000000000000f',
          data: '0x5ae401dc000000000000000000000000000000000000000000000000000000006563bc2d0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000104472b43f3000000000000000000000000000000000000000000000000002129032abb2480000000000000000000000000000000000000000000000009769cf6bb51959d0400000000000000000000000000000000000000000000000000000000000000800000000000000000000000007a9703420cd40a891a0999275e7ae1661298ba840000000000000000000000000000000000000000000000000000000000000003000000000000000000000000bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c00000000000000000000000055d398326f99059ff775485246999027b3197955000000000000000000000000a4958e0660cce1b58b8c623bebaabf0959e9c1a300000000000000000000000000000000000000000000000000000000',
          //data: '0x',
          from: '0x7a9703420Cd40A891a0999275e7AE1661298Ba84',
          gas: '0xdc3c',
          gasPrice: '0xb2d05e00',
          to: '0x55d398326f99059fF775485246999027B3197955',
          value: '0x019',
        };
        const test = {id: 1703646594501, name: 'signTransaction', object: data};
        setMessage({...test});
      };
      useEffect(() => {
        decryptTransaction().then(console.log);
      }, []);*/
  return {
    webViewRefs,
    progress,
    isLoading,
    canGoBack,
    canGoForward,
    uri,
    title,
    url,
    setUri,
    setUrl,
    onMessage,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onError,
    onLoadProgress,
    onContentProcessDidTerminate,
    goBack,
    goForward,
    onReload,
    onStopLoading,
    handleClose,
    onSubmitEditing,
    onOpenWindow,
    error,
    js,
    sendResult,
    sendError,
    message,
    host,
    setConnect,
    connect,
    info
  };
};

// @ts-ignore
exports.useWebViewContext = useWebViewContext;
const WebViewContext = exports.WebViewContext = /*#__PURE__*/(0, _react.createContext)();