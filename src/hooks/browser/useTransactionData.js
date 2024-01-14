"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTransactionData = void 0;
var _react = require("react");
var _abi = require("../../lib/abi");
const useTransactionData = ({
  data
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [info, setInfo] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      decode();
    }, 50);
    return () => {
      clearTimeout(id);
      setInfo(undefined);
    };
  }, [data]);
  const decode = (0, _react.useCallback)(() => {
    try {
      if (data) {
        setLoading(true);
        const d = (0, _abi.decodeABI)(data);
        setInfo(d);
      }
    } catch (e) {
      setInfo(undefined);
    } finally {
      setLoading(false);
    }
  }, [data]);
  return {
    info,
    loading
  };
};
exports.useTransactionData = useTransactionData;