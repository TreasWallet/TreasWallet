"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInitSDK = exports.TimManger = void 0;
var _reactNativeTimJs = require("react-native-tim-js");
var _react = require("react");
var _storage = require("../../lib/storage");
var _ethers = require("../../lib/ethers");
var _env = require("@env");
var _storage2 = require("../../config/storage");
var _chat = require("../../config/chat");
// @ts-ignore

const TimManger = exports.TimManger = _reactNativeTimJs.TencentImSDKPlugin.v2TIMManager;
const useInitSDK = ({
  wallet
}) => {
  const [switchChat] = (0, _storage.useStorage)(_storage2.SWITCH_CHAT_KEY, _chat.IM_ENABLED);
  const [sdkAppID, setSdkAppID] = (0, _react.useState)();
  const [initSDK, setInitSDK] = (0, _react.useState)(false);
  const [connecting, setConnecting] = (0, _react.useState)(false);
  const [connectSuccess, setConnectSuccess] = (0, _react.useState)(false);
  const [kickedOffline, setKickedOffline] = (0, _react.useState)(false);
  const [userSigExpired, setUserSigExpired] = (0, _react.useState)(false);
  const [selfInfo, setSelfInfo] = (0, _storage.useStorage)(`V2TimUserFullInfo_${wallet?.address}`);
  // @ts-ignore
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      if (sdkAppID) {
        initAPP();
      }
    }, 500);
    return () => clearTimeout(id);
  }, [sdkAppID]);
  const initAPP = (0, _react.useCallback)(async () => {
    try {
      setInitSDK(false);
      if (sdkAppID) {
        await TimManger.unInitSDK();
        const sdkListener = {
          onConnecting,
          onConnectSuccess,
          onConnectFailed,
          onKickedOffline,
          onUserSigExpired,
          onSelfInfoUpdated,
          onUserStatusChanged
        };
        const {
          code
        } = await TimManger.initSDK(sdkAppID, __DEV__ ? _reactNativeTimJs.LogLevelEnum.V2TIM_LOG_INFO : _reactNativeTimJs.LogLevelEnum.V2TIM_LOG_NONE, sdkListener);
        setInitSDK(code === 0);
      }
    } catch (e) {
      setInitSDK(false);
    }
  }, [sdkAppID]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      if (!sdkAppID && wallet?.address) {
        switchChat && getSdkAppID();
      }
    }, 500);
    return () => clearTimeout(id);
  }, [sdkAppID, wallet?.address, switchChat]);
  const getSdkAppID = (0, _react.useCallback)(async () => {
    if (wallet) {
      const message = (0, _ethers.genId)().toString();
      const signature = await wallet.signMessage(message);
      const body = JSON.stringify({
        address: wallet.address,
        signature,
        message //: msg,
      });
      const im = await fetch(`${_env.ENV_IM_API}/im`, {
        method: 'POST',
        body: body
      }).then(j => j.json());
      setSdkAppID(im.id);
    }
  }, [wallet]);
  const onConnecting = (0, _react.useCallback)(() => {
    setConnecting(true);
  }, []);
  const onConnectSuccess = (0, _react.useCallback)(() => {
    setConnecting(false);
    setConnectSuccess(true);
  }, []);
  const onConnectFailed = (0, _react.useCallback)(() => {
    setConnecting(false);
    setConnectSuccess(false);
  }, []);
  const onKickedOffline = (0, _react.useCallback)(() => {
    setKickedOffline(true);
  }, []);
  const onSelfInfoUpdated = (0, _react.useCallback)(info => setSelfInfo(info), []);
  const onUserStatusChanged = (0, _react.useCallback)(userStatusList => {}, []);
  const onUserSigExpired = (0, _react.useCallback)(() => {
    setUserSigExpired(true);
  }, []);
  return {
    initSDK,
    connecting,
    connectSuccess,
    kickedOffline,
    userSigExpired,
    selfInfo,
    setUserSigExpired,
    setSelfInfo
  };
};
exports.useInitSDK = useInitSDK;