"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BN", {
  enumerable: true,
  get: function () {
    return _reactNativeBignumber.BN;
  }
});
exports.GWEI = exports.FINNEY = exports.ETHER = void 0;
Object.defineProperty(exports, "IERC20ABI", {
  enumerable: true,
  get: function () {
    return _contract.IERC20ABI;
  }
});
Object.defineProperty(exports, "IERC721ABI", {
  enumerable: true,
  get: function () {
    return _contract.IERC721ABI;
  }
});
Object.defineProperty(exports, "IPancakeRouter02", {
  enumerable: true,
  get: function () {
    return _contract.IPancakeRouter02;
  }
});
exports.createMnemonic = exports.createHash = exports.WEI = exports.SZABO = exports.MWEI = exports.KWEI = void 0;
Object.defineProperty(exports, "crypto", {
  enumerable: true,
  get: function () {
    return _reactNativeQuickCrypto.default;
  }
});
exports.descriptionAddress = void 0;
Object.defineProperty(exports, "ethers", {
  enumerable: true,
  get: function () {
    return _ethers.ethers;
  }
});
exports.strHide = exports.parseUnits = exports.parseEther = exports.isValidPrivateKey = exports.isValidMnemonic = exports.isAddressTrx = exports.isAddress = exports.getTronAddress = exports.getMethodID = exports.getEthAddress = exports.getCheckSumAddress = exports.getAddress = exports.genId = exports.fromMnemonic = exports.formatUnits = exports.formatEther = void 0;
var _reactNativeQuickCrypto = _interopRequireDefault(require("react-native-quick-crypto"));
var _reactNativeBignumber = require("react-native-bignumber");
var _ethers = require("ethers");
var _contract = require("./contract");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WEI = exports.WEI = 'wei';
const KWEI = exports.KWEI = 'kwei';
const MWEI = exports.MWEI = 'mwei';
const GWEI = exports.GWEI = 'gwei';
const SZABO = exports.SZABO = 'szabo';
const FINNEY = exports.FINNEY = 'finney';
const ETHER = exports.ETHER = 'ether';
const formatUnits = (value, decims = ETHER) => {
  try {
    return _ethers.ethers.utils.formatUnits(value, decims);
  } catch (e) {
    return '0';
  }
};
exports.formatUnits = formatUnits;
const parseUnits = (value, decims = ETHER) => {
  try {
    return _ethers.ethers.utils.parseUnits(value, decims);
  } catch (e) {
    return _ethers.ethers.utils.parseUnits('', 0);
  }
};
exports.parseUnits = parseUnits;
const formatEther = wei => formatUnits(wei, 'ETHER');
exports.formatEther = formatEther;
const parseEther = ether => parseUnits(ether, 'ETHER');
exports.parseEther = parseEther;
const strHide = (str, start = 4, end = 4) => str ? `${str?.substring(0, start)}***${str?.substring(str.length - end)}` : '';
exports.strHide = strHide;
const getCheckSumAddress = address => _ethers.ethers.utils.getAddress(address);
exports.getCheckSumAddress = getCheckSumAddress;
const isAddress = address => _ethers.ethers.utils.isAddress(address);
exports.isAddress = isAddress;
const getAddress = address => {
  return isAddress(address) ? getCheckSumAddress(address) : getEthAddress(address);
};
exports.getAddress = getAddress;
const descriptionAddress = (address, tron = false) => {
  return tron ? getTronAddress(address) : getAddress(address);
};
exports.descriptionAddress = descriptionAddress;
const isAddressTrx = base58Sting => {
  try {
    if (base58Sting.length !== 34) {
      return false;
    }
    return isAddress(getEthAddress(base58Sting));
  } catch (e) {
    return false;
  }
};
exports.isAddressTrx = isAddressTrx;
const isValidMnemonic = mnemonic => !!mnemonic && (_ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.en) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh_cn) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh_tw) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.es) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.fr) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.it) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.ja) || _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.ko));
exports.isValidMnemonic = isValidMnemonic;
const fromMnemonic = (mnemonic, password) => _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.en) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.en) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.zh) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh_cn) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.zh_cn) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.zh_tw) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.zh_tw) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.es) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.es) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.fr) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.fr) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.it) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.it) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.ja) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.ja) : _ethers.ethers.utils.isValidMnemonic(mnemonic, _ethers.ethers.wordlists.ko) ? _ethers.ethers.utils.HDNode.fromMnemonic(mnemonic, password, _ethers.ethers.wordlists.ko) : undefined;
exports.fromMnemonic = fromMnemonic;
const isValidPrivateKey = privateKey => verifyPrivateKey(privateKey); // && new ethers.Wallet(privateKey)._isSigner;
exports.isValidPrivateKey = isValidPrivateKey;
const verifyPrivateKey = value => _ethers.ethers.utils.isHexString(value, 32) || value.length === 64 && _ethers.ethers.utils.isHexString(`0x${value}`);
const createHash = (data, algorithm = 'sha256') => _reactNativeQuickCrypto.default.createHash(algorithm).update(data).digest('hex');
exports.createHash = createHash;
const sha256 = msg => _reactNativeQuickCrypto.default.createHash('sha256').update(Buffer.from(msg, 'hex')).digest('hex');
const getTronAddress = address => {
  if (isAddressTrx(address)) {
    return address;
  }
  const hex = getCheckSumAddress(address);
  const add = `41${hex.substring(2)}`;
  const doubleSha256 = sha256(sha256(add));
  const checkSum = doubleSha256.substring(0, 8);
  const addr = Buffer.from(add + checkSum, 'hex');
  return _ethers.ethers.utils.base58.encode(addr);
};
exports.getTronAddress = getTronAddress;
const getEthAddress = base58Sting => {
  let address = Buffer.from(_ethers.ethers.utils.base58.decode(base58Sting)).toString('hex');
  const checkSum = address.substring(address.length - 8, address.length);
  address = address.substring(0, address.length - 8);
  const checkSum1 = sha256(sha256(address)).substring(0, 8);
  if (`${checkSum}` === `${checkSum1}`) {
    return getCheckSumAddress(`0x${address.substring(2)}`);
  }
  throw new Error('Invalid address provided');
};
/**
 * @param seedByte 16-12words 20-15words 24-18words 28-21words 32-24words
 */
exports.getEthAddress = getEthAddress;
const createMnemonic = (seedByte = 32, lang = 'en') => {
  const privateSeed = _ethers.ethers.utils.randomBytes(seedByte);
  return _ethers.ethers.utils.entropyToMnemonic(privateSeed, lang);
};
exports.createMnemonic = createMnemonic;
const genId = () => {
  return new Date().getTime() + Math.floor(Math.random() * 1000);
};
exports.genId = genId;
const getMethodID = method => _ethers.ethers.utils.id(method).substring(2, 10);
exports.getMethodID = getMethodID;