"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChatApp = exports.ChatContext = void 0;
var _react = require("react");
var _chat = require("../../config/chat");
var _env = require("@env");
var _ethers = require("../../lib/ethers");
var _useOpenWallet = require("../wallet/useOpenWallet");
var _useInitSDK = require("./useInitSDK");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useWallet = require("../wallet/useWallet");
// @ts-ignore

const useChatApp = () => {
  const [switchChat] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_KEY, _chat.IM_ENABLED);
  const {
    address
  } = (0, _useWallet.useWallet)();
  const [chatAddress] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_ADDRESS_KEY, address);
  const {
    wallet
  } = (0, _useOpenWallet.useOpenWallet)({
    address: chatAddress
  });
  const [login, setLogin] = (0, _react.useState)(false);
  const {
    initSDK,
    connecting,
    connectSuccess,
    kickedOffline,
    userSigExpired,
    selfInfo,
    setSelfInfo,
    setUserSigExpired
  } = (0, _useInitSDK.useInitSDK)({
    wallet
  });
  const [sig, setSig] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    setLogin(false);
    const id = setTimeout(() => {
      initSDK && switchChat && getSig();
    }, 1000);
    return () => clearTimeout(id);
  }, [wallet?.address, initSDK, userSigExpired, switchChat]);
  const getSig = (0, _react.useCallback)(async () => {
    if (wallet?.address && initSDK && switchChat) {
      const message = (0, _ethers.genId)().toString();
      const signature = await wallet.signMessage(message);
      const body = JSON.stringify({
        address: wallet.address,
        signature,
        message //: msg,
      });
      const sig = await fetch(`${_env.ENV_IM_API}/sig`, {
        method: 'POST',
        body: body
      }).then(j => j.json());
      setSig(sig);
      setUserSigExpired(false);
    }
  }, [wallet?.address, initSDK, switchChat]);
  // @ts-ignore
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      if (sig) {
        loginIm();
      }
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [sig, switchChat]);
  const loginIm = (0, _react.useCallback)(async () => {
    setLogin(false);
    try {
      await _useInitSDK.TimManger.logout();
      if (switchChat && sig) {
        const {
          code
        } = await _useInitSDK.TimManger.login(sig.address, sig.sig);
        setLogin(code === 0);
      }
    } catch (e) {
      setLogin(false);
    }
    //.catch(() => setLogin(false));
  }, [sig, switchChat]);
  return {
    login,
    connecting,
    connectSuccess,
    kickedOffline,
    userSigExpired,
    selfInfo,
    chatAddress
  };
};
// @ts-ignore
exports.useChatApp = useChatApp;
const ChatContext = exports.ChatContext = /*#__PURE__*/(0, _react.createContext)(null);