"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWalletEthers = void 0;
var _ethers = require("ethers");
var _react = require("react");
var _sinfo = require("../../lib/sinfo");
var _storage = require("../../config/storage");
var _ethers2 = require("../../lib/ethers");
var _useWallet = require("./useWallet");
var _reactNativeFingerprintScanner = _interopRequireDefault(require("react-native-fingerprint-scanner"));
var _reactI18next = require("react-i18next");
var _storage2 = require("../../lib/storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useWalletEthers = ({
  password,
  address: address1
}) => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const [wallet, setWallet] = (0, _react.useState)();
  const [isPassword, setIsPassword] = (0, _react.useState)(false);
  const {
    address: address2
  } = (0, _useWallet.useWallet)();
  const [enableBiometrics] = (0, _storage2.useStorage)(_storage.ENABLE_BIOMETRICS_KEY, false);
  const address = (0, _react.useMemo)(() => address1 || address2, [address1, address2]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      openPassword();
    }, 500);
    return () => {
      clearTimeout(id);
      setIsPassword(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      openWallet();
    }, 500);
    return () => {
      clearTimeout(id);
      setWallet(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPassword, address]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      enableBiometrics && authenticateBiometrics();
    }, 500);
    return () => {
      clearTimeout(id);
      setWallet(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, enableBiometrics]);
  const authenticateBiometrics = (0, _react.useCallback)(async () => {
    try {
      await _reactNativeFingerprintScanner.default.authenticate({
        title: t('authentication.fingerprint_prompt_title'),
        subTitle: t('authentication.fingerprint_prompt_desc'),
        cancelButton: t('authentication.fingerprint_prompt_cancel')
      });
      setIsPassword(true);
    } catch (e) {
      setIsPassword(false);
    } finally {
      _reactNativeFingerprintScanner.default.release();
    }
  }, [address]);
  const openPassword = (0, _react.useCallback)(async () => {
    if (password) {
      const pin = await (0, _sinfo.getItemSInfo)(_storage.PERSISTENCE_KEY);
      const passwordHash = (0, _ethers2.createHash)(password);
      setIsPassword(passwordHash === pin);
    }
  }, [password]);
  const openWallet = (0, _react.useCallback)(async () => {
    if (isPassword && address) {
      const seedPhrase = await (0, _sinfo.getItemSInfo)(`${_storage.WALLET_KEY}_${address}`);
      if ((0, _ethers2.isValidMnemonic)(seedPhrase)) {
        const node = (0, _ethers2.fromMnemonic)(seedPhrase);
        if (node) {
          const path = await (0, _sinfo.getItemSInfo)(`${_storage.WALLET_PATH_KEY}_${address}`);
          const hdnode = node.derivePath(path || _ethers.ethers.utils.defaultPath);
          const HDwallet = new _ethers.ethers.Wallet(hdnode);
          if (HDwallet._isSigner) {
            setWallet(HDwallet);
          }
        }
      } else if ((0, _ethers2.isValidPrivateKey)(seedPhrase)) {
        const HEXwallet = new _ethers.ethers.Wallet(seedPhrase);
        if (HEXwallet._isSigner) {
          setWallet(HEXwallet);
        }
      }
    }
  }, [isPassword, address]);
  return {
    wallet,
    isPassword,
    address
  };
};
exports.useWalletEthers = useWalletEthers;