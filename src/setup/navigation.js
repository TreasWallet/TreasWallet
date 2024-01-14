"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _native = require("@react-navigation/native");
var _nativeStack = require("@react-navigation/native-stack");
var _components = require("@ui-kitten/components");
var _useDark = require("../hooks/theme/useDark");
var _welcome = require("../screen/welcome");
var _setup = require("../screen/welcome/setup");
var _reactI18next = require("react-i18next");
var _reactNativePortalize = require("react-native-portalize");
var _create = require("../screen/welcome/create");
var _import = require("../screen/welcome/import");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _useWallet = require("../hooks/wallet/useWallet");
var _drawer = require("@react-navigation/drawer");
var _drawer2 = require("../screen/drawer");
var _bottomTabs = require("@react-navigation/bottom-tabs");
var _LogoComponent = require("../components/LogoComponent");
var _storage = require("../config/storage");
var _reactNativeSplashScreen = _interopRequireDefault(require("react-native-splash-screen"));
var _wallet = require("../screen/wallet");
var _setting = require("../screen/setting/setting");
var _about = require("../screen/setting/about");
var _general = require("../screen/setting/general");
var _security = require("../screen/setting/security");
var _contacts = require("../screen/setting/contacts");
var _advanced = require("../screen/setting/advanced");
var _securityWallet = require("../screen/setting/securityWallet");
var _resetPassword = require("../screen/setting/resetPassword");
var _chat = require("../screen/chat");
var _browser = require("../screen/browser/browser");
var _chat2 = require("../screen/setting/chat");
var _storage2 = require("../lib/storage");
var _networks = require("../screen/setting/networks");
var _find = require("../screen/find");
var _reactNative = require("react-native");
var _webview = require("../screen/browser/webview");
var _receive = require("../screen/wallet/receive");
var _import2 = require("../screen/wallet/import");
var _node = require("../screen/setting/node");
var _chat3 = require("../config/chat");
var _primaryCurrency = require("../screen/setting/primaryCurrency");
var _back = require("../screen/setting/back");
var _addasset = require("../screen/wallet/addasset");
var _selectassets = require("../screen/wallet/selectassets");
var _send = require("../screen/wallet/send");
var _LoadingComponent = require("../components/LoadingComponent");
var _asset = require("../screen/wallet/asset");
var _searchtoken = require("../screen/wallet/searchtoken");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Welcome = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const Stack = (0, _react.useMemo)(() => (0, _nativeStack.createNativeStackNavigator)(), []);
  return /*#__PURE__*/_react.default.createElement(Stack.Navigator, {
    initialRouteName: "welcome",
    screenOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerShadowVisible: false,
      animation: 'simple_push'
    }
  }, /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "welcome",
    options: {
      title: ''
    },
    component: _welcome.WelcomeScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SetupScreen",
    options: {
      title: t('onboarding.title')
    },
    component: _setup.SetupScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "WalletCreateScreen",
    options: {
      title: t('start_exploring_now.title')
    },
    component: _create.WalletCreateScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "WalletImportFromSeedScreen",
    options: {
      title: t('import_from_seed.title')
    },
    component: _import.WalletImportFromSeedScreen
  }));
});
const AppView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const Stack = (0, _react.useMemo)(() => (0, _nativeStack.createNativeStackNavigator)(), []);
  return /*#__PURE__*/_react.default.createElement(Stack.Navigator, {
    initialRouteName: "TabScreen",
    screenOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerShadowVisible: _reactNative.Platform.OS === 'ios',
      animation: 'simple_push'
    }
  }, /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "TabScreen",
    options: {
      headerShown: false,
      title: t('tab.home')
    },
    component: TabView
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "WebViewScreen",
    options: {
      title: t('browser.title'),
      headerShown: false
      //  headerTransparent: true,
    },
    component: _webview.WebViewScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "AboutScreen",
    options: {
      title: t('setting.info_title')
    },
    component: _about.AboutScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "GeneralScreen",
    options: {
      title: t('setting.general_title')
    },
    component: _general.GeneralScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "AdvancedScreen",
    options: {
      title: t('setting.advanced_title')
    },
    component: _advanced.AdvancedScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SecurityScreen",
    options: {
      title: t('setting.security_title')
    },
    component: _security.SecurityScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SecurityWalletScreen",
    options: {
      title: t('reveal_credential.private_key_title')
    },
    component: _securityWallet.SecurityWalletScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "ResetPasswordScreen",
    options: {
      title: t('reset_password.title')
    },
    component: _resetPassword.ResetPasswordScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "ChatSettingScreen",
    options: {
      title: t('setting.chat_title')
    },
    component: _chat2.ChatSettingScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "NetworksScreen",
    options: {
      title: t('networks.title')
    },
    component: _networks.NetworksScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "ContactsScreen",
    options: {
      title: t('setting.contacts_title')
    },
    component: _contacts.ContactsScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "ReceiveScreen",
    options: {
      title: t('transfer.receive')
    },
    component: _receive.ReceiveScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "WalletImportSeedScreen",
    options: {
      title: t('import_from_seed.title')
    },
    component: _import2.WalletImportSeedScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "NodeScreen",
    options: {
      title: t('nodes.title')
    },
    component: _node.NodeScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "PrimaryCurrencyScreen",
    options: {
      title: t('primary_currency.title')
    },
    component: _primaryCurrency.PrimaryCurrencyScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "BackScreen",
    options: {
      title: t('account_backup.protect_title')
    },
    component: _back.BackScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "AddAssetScreen",
    options: {
      title: t('add_asset.title')
    },
    component: _addasset.AddAssetScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SelectAssetsScreen",
    options: {
      title: t('wallet.choose_asset')
    },
    component: _selectassets.SelectAssetsScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SendScreen",
    options: {
      title: t('transfer.send')
    },
    component: _send.SendScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "AssetsScreen",
    options: {
      title: t('wallet.asset'),
      headerShadowVisible: false
    },
    component: _asset.AssetsScreen
  }), /*#__PURE__*/_react.default.createElement(Stack.Screen, {
    name: "SearchTokenScreen",
    options: {
      title: t('add_asset.search_token'),
      headerShadowVisible: false
    },
    component: _searchtoken.SearchTokenScreen
  }));
});
const TabView = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const Tab = (0, _react.useMemo)(() => (0, _bottomTabs.createBottomTabNavigator)(), []);
  const [switchChat] = (0, _storage2.useStorage)(_storage.SWITCH_CHAT_KEY, _chat3.IM_ENABLED);
  return /*#__PURE__*/_react.default.createElement(Tab.Navigator, {
    screenOptions: {
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      tabBarHideOnKeyboard: true
      //tabBarShowLabel: false,
    }
  }, /*#__PURE__*/_react.default.createElement(Tab.Screen, {
    name: "WalletScreen",
    options: {
      headerShadowVisible: false,
      title: '',
      tabBarLabel: t('tab.home'),
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({
        color,
        size
      }) => /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgWallet, {
        width: size,
        height: size,
        fill: color
      })
    },
    component: _wallet.WalletScreen
  }), switchChat && /*#__PURE__*/_react.default.createElement(Tab.Screen, {
    name: "Chatcreen",
    options: {
      title: t('tab.chat'),
      tabBarLabel: t('tab.chat'),
      // @ts-ignore
      tabBarIcon: ({
        color,
        size
      }) => /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgComments, {
        width: size + 5,
        height: size + 5,
        fill: color
      })
    },
    component: _chat.ChatScreen
  }), /*#__PURE__*/_react.default.createElement(Tab.Screen, {
    name: "FindScreen",
    options: {
      title: t('tab.feeds'),
      tabBarLabel: t('tab.feeds'),
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({
        color,
        size
      }) => /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgApps, {
        width: size + 5,
        height: size + 5,
        fill: color
      })
    },
    component: _find.FindScreen
  }), /*#__PURE__*/_react.default.createElement(Tab.Screen, {
    name: "BrowserScreen",
    options: {
      title: t('browser.title'),
      tabBarLabel: t('tab.browser'),
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({
        color,
        size
      }) => /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgBrowser, {
        width: size + 5,
        height: size + 5,
        fill: color
      })
    },
    component: _browser.BrowserScreen
  }), /*#__PURE__*/_react.default.createElement(Tab.Screen, {
    name: "SettingScreen",
    options: {
      title: t('tab.setting'),
      tabBarLabel: t('tab.setting'),
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({
        color,
        size
      }) => /*#__PURE__*/_react.default.createElement(_LogoComponent.SvgSetting, {
        width: size + 10,
        height: size + 10,
        fill: color
      })
    },
    component: _setting.SettingScreen
  }));
});
const DrawerApp = /*#__PURE__*/(0, _react.memo)(() => {
  const Drawer = (0, _react.useMemo)(() => (0, _drawer.createDrawerNavigator)(), []);
  const drawerContent = (0, _react.useCallback)(props => /*#__PURE__*/_react.default.createElement(_drawer2.DrawerScreen, props), []);
  return /*#__PURE__*/_react.default.createElement(Drawer.Navigator, {
    screenOptions: {
      headerTitleAlign: 'center',
      swipeEnabled: false,
      drawerType: 'slide',
      drawerContentStyle: {
        flex: 1
      }
    },
    drawerContent: drawerContent,
    initialRouteName: "AppView"
  }, /*#__PURE__*/_react.default.createElement(Drawer.Screen, {
    name: "AppView",
    options: {
      headerShown: false,
      title: 'Treas Wallet'
    },
    component: AppView
  }));
});
const Navigation = exports.Navigation = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    dark
  } = (0, _useDark.useDark)();
  const theme = (0, _components.useTheme)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    isEmpty
  } = (0, _useWallet.useWallet)();
  (0, _react.useEffect)(() => {
    setTimeout(() => {
      _reactNativeSplashScreen.default.hide();
    }, 500);
  }, []);
  const ScreenNavigator = (0, _react.useCallback)(() => isEmpty ? /*#__PURE__*/_react.default.createElement(Welcome, null) : /*#__PURE__*/_react.default.createElement(DrawerApp, null), [isEmpty]);
  return /*#__PURE__*/_react.default.createElement(_components.Layout, {
    level: "1",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, {
    theme: {
      dark,
      colors: {
        primary: theme['color-primary-default'],
        background: theme['background-basic-color-1'],
        card: theme['background-basic-color-1'],
        text: theme['text-basic-color'],
        border: theme['background-basic-color-2'],
        notification: theme['outline-color']
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativePortalize.Host, null, /*#__PURE__*/_react.default.createElement(ScreenNavigator, null), /*#__PURE__*/_react.default.createElement(_LoadingComponent.LoadingBlockchainComponent, null))), /*#__PURE__*/_react.default.createElement(_reactNativeToastMessage.default, {
    position: "top",
    topOffset: insets.top + 15
  }));
});