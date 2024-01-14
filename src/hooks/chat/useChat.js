"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChat = void 0;
var _react = require("react");
var _useChatApp = require("./useChatApp");
const useChat = () => {
  const value = (0, _react.useContext)(_useChatApp.ChatContext);
  return {
    ...value
  };
};
exports.useChat = useChat;