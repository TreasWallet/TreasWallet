"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  translation: {
    onboarding_carousel: {
      title1: '欢迎使用 Treas 钱包',
      title2: '管理您的数字资产',
      title3: '您通往 web3 的门户',
      subtitle1: 'Treas 是一款可以让所有人进入 web3 世界的安全钱包。',
      subtitle2: '存储、支出和发送数字资产，如代币、以太币、独特收藏品。',
      subtitle3: '使用 TreasWallet 登录并进行交易，以便投资、赚钱、玩游戏、销售等！',
      get_started: '开始使用',
      next: '下一个',
      skip: '跳过'
    },
    onboarding: {
      title: '钱包设置',
      import: '导入现有钱包或创建新钱包',
      import_from_seed_button: '使用私钥助记词导入',
      start_exploring_now: '创建新钱包',
      scan: '扫描'
    },
    import_from_seed: {
      title: '从私钥助记词导入',
      seed_phrase_placeholder: '在此输入您的私钥或者助记词',
      seed_phrase_desc: '支持私钥和助记词，助记词语言支持：English 日本语 Español 中文(简体) 中文(繁体) Français Italiano 한국어',
      new_password: '新密码',
      confirm_password: '确认密码',
      i_understand: '我了解 Treas 钱包 无法为我找回此密码。',
      import_button: '导入',
      cancel_button: '取消',
      password_length_error: '密码至少需要 8 个字符',
      password_dont_match: '密码不匹配',
      seed_phrase_requirements: '私钥助记词包含 12、15、18、21 或 24 个字词',
      invalid_seed_phrase: '私钥助记词无效',
      error: '错误',
      invalid_qr_code_title: '无效二维码',
      invalid_qr_code_message: '此二维码不代表有效的私钥助记词',
      seed_phrase: '私钥助记词',
      advanced_options: '高级选项',
      hide_advanced_options: '隐藏高级选项',
      derive_path: '派生路径',
      derive_password: '派生密码',
      derive_address: '派生地址'
    },
    start_exploring_now: {
      title: '创建密码',
      password: '新密码',
      confirm_password: '确认密码',
      create_button: '创建密码',
      subtitle: '此密码将仅在此设备上解锁您的 Treas 钱包。',
      i_understand: '我了解 Treas 钱包 无法为我找回此密码。',
      creating_password: '正在创建密码...',
      mnemonic_Language: '助记词语言'
    },
    tab: {
      home: '首页',
      swap: '兑换',
      setting: '设置',
      feeds: '发现',
      browser: '浏览器',
      chat: '聊天'
    },
    password: {
      cancel: '取消'
    },
    theme: {
      eva: 'Eva主题',
      material: 'Material主题'
    },
    networks: {
      mainnet: '主网',
      testnet: '测试网',
      title: '网络',
      other_networks: '其他网络',
      close: '关闭',
      status_ok: '所有系统运转正常',
      status_not_ok: '网络遇到一些问题',
      want_to_add_network: '想要添加此网络吗？',
      network_infomation: '这样，此网络就可以在TreasWallet中使用',
      network_endorsement: 'TreasWallet对自定义网络或其安全性不提供保证。',
      learn_about: '了解',
      network_risk: '欺诈和网络安全风险',
      network_display_name: '显示名称',
      network_chain_id: '链 ID',
      network_rpc_url: '网络URL',
      view_details: '查看详情',
      network_details: '网络详情',
      network_currency_symbol: '货币符号',
      network_block_explorer_url: '区块浏览器URL',
      search: '搜索以前添加的网络',
      add: '添加',
      cancel: '取消',
      approve: '批准',
      malicious_network_warning: '恶意网络提供商可能会谎报区块链的状态，并记录您的网络活动。仅添加您信任的自定义网络。',
      network_warning_title: '网络信息',
      network_warning_desc: '此网络连接依赖于第三方。这种连接可靠程度可能会较低，或会使第三方能够跟踪活动。',
      learn_more: '了解详情',
      switch_network: '切换到网络',
      switch: '切换',
      new_network: '已添加新网络',
      network_name: '{{networkName}}网络',
      network_added: ' 现已在网络选择工具中。',
      provider: '提供商获信任将余额告知钱包，并如实广播其交易',
      no_match: '未找到匹配结果。',
      empty_popular_networks: '您已经添加了所有热门网络。要探索更多网络，请前往',
      add_other_network_here: '这里。',
      you_can: '或者您可以',
      add_network: '手动添加更多网络。',
      select_network: '选择网络',
      show_test_networks: '显示测试网络'
    },
    setting: {
      title: '设置',
      general_title: '通用',
      general_desc: '主要货币、主题、语言和搜索引擎',
      advanced_title: '高级',
      advanced_desc: '访问开发者功能、重置账户',
      contacts_title: '联系方式',
      contacts_desc: '添加、编辑、删除和管理您的账户',
      security_title: '安全和隐私',
      security_desc: '隐私设置、私钥和钱包私钥助记词',
      networks_title: '网络',
      networks_desc: '添加并编辑自定义 RPC 网络',
      request_feature: '功能请求',
      contact_support: '联系支持团队',
      info_title: '关于我们',
      about_info1: '真正去中心化的加密所有权，100%开源',
      about_info2: 'Treas 钱包是一个基于 React Native 开发的去中心化数字资产钱包，用于管理以太坊和其它基于 Ethereum 的区块链网络的数字资产。它提供了丰富的功能，包括资产的管理、交易、DApp 的访问、聊天等。Treas 钱包还具有用户友好的界面和强大的安全性，确保用户资产的安全。',
      open_source_code: 'Treas Wallet 源码',
      chat_title: '聊天',
      chat_desc: '开启、关闭、管理你的聊天账户'
    },
    chat: {
      open_chat: '开启聊天',
      open_chat_desc: '开启聊天，可以在线聊天、群聊，包括聊天转账等，这样你的地址可能会暴露给第三方，如果你不希望这样，关闭即可',
      start_conversation: '发起会话',
      start_group: '发起群聊',
      group: '我的群聊'
    },
    advanced: {
      show_hex_data: '显示十六进制数据',
      show_hex_data_desc: '选择此项可在发送屏幕上显示十六进制数据字段。',
      enable_eth_sign: 'Eth_sign 请求',
      enable_eth_sign_desc: '如果您启用此设置，您可能会收到不可读的签名请求。对您不理解的信息进行签名，可能会导致您放弃您的资金和 NFT。',
      enable_eth_sign_warning: '您面临网络钓鱼攻击的风险。关闭 eth_sign 以保护自己。',
      show_custom_nonce: '自定义交易 nonce',
      custom_nonce_desc: '打开这个功能可以改变确认屏幕上的 nonce（交易号码）。这是一个高级功能，请谨慎使用。',
      token_detection_title: '增强型代币检测',
      token_detection_description: '我们使用第三方 API 来检测和显示发送到您钱包的新代币。如果您不希望该应用程序从这些服务中获取数据，请关闭。',
      toggleEthSignModalBannerText: '如果要求您打开此设置，',
      toggleEthSignModalBannerBoldText: ' 您可能遭受了诈骗。',
      toggleEthSignModalCheckBox: '我明白，如果我启用 eth_sign 请求，我可能失去所有资金和 NFT。',
      toggleEthSignModalDescription: '允许 eth_sign 请求可能会使您易于受到网络钓鱼攻击。始终检查 URL，并且在签署包含代码的消息时保持谨慎。',
      toggleEthSignModalTitle: '使用风险自负',
      toggleEthSignModalEnable: '启用',
      toggleEthSignModalLearnMore: '了解更多。',
      toggleEthSignOff: '关闭（推荐）',
      toggleEthSignOn: '开启（不推荐）',
      toggleEthSignContinueButton: '继续',
      toggleEthSignEnableButton: '启用',
      cancel: '取消',
      enable_synchronization_node: '开启节点同步',
      enable_synchronization_node_desc: '打开这个功能可以监听账户交易记录，这样可能会消耗流量和电量，如果你不希望这样，关闭即可'
    },
    reset_account: {
      reset_account_button: '重置账户',
      reset_account_confirm_button: '是，重置',
      reset_account_cancel_button: '取消',
      reset_account_modal_title: '重置账户？',
      reset_account_modal_message: '重置账户将清除您的交易历史记录。',
      reset_desc: '此操作将清除您的交易历史记录。这些数据可能无法恢复。',
      cancel: '取消'
    },
    security: {
      privacy_mode: '隐私模式',
      privacy_mode_desc: '网站必须请求查看您的账户信息的访问权限。',
      clear_browser_history: '清除浏览器历史记录',
      clear_browser_history_desc: '此操作将清除您的清除浏览器历史记录。这些数据可能无法恢复。',
      clear_browser_history_modal_title: '清除浏览器历史记录？',
      clear_browser_history_modal_message: '我们即将删除您的所有浏览器历史记录。您确定吗？',
      clear: '清除',
      cancel: '取消',
      success: '成功',
      seedphrase_not_backed_up: '重要！私钥助记词未备份',
      seedphrase_backed_up: '私钥助记词已备份',
      clear_clipboard: '清除剪切板',
      clear_clipboard_desc: '剪切板中可能包含复制的敏感数据如私钥等'
    },
    reset_password: {
      title: '更改密码',
      subtitle: '此密码将仅在此设备上解锁您的 Treas 钱包。',
      password: '新密码',
      confirm_password: '确认密码',
      reset_button: '重置密码',
      import_with_seed_phrase: '使用私钥助记词导入',
      password_length_error: '密码至少需要 8 个字符',
      password_dont_match: '密码不匹配',
      password_strength: '密码强度：',
      strength_weak: '弱',
      strength_good: '好',
      strength_strong: '强',
      show: '显示',
      hide: '隐藏',
      seed_phrase: '私钥助记词',
      must_be_at_least: '必须至少包含 {{number}} 个字符',
      remember_me: '记住我',
      security_alert_title: '安全警报',
      security_alert_message: '若要继续，您需要开启密码或设备上支持的任何生物特征身份验证方法（FaceID、TouchID 或指纹）',
      i_understand: '我了解 Treas 钱包 无法为我找回此密码。',
      learn_more: '了解更多。',
      secure: '保护钱包安全',
      confirm: '确认私钥助记词',
      password_updated: '密码已更新',
      successfully_changed: '您的密码已成功更改'
    },
    reveal_credential: {
      seed_phrase_title: '显示助记词',
      private_key_title: '显示私钥',
      show_private_key: '显示私钥',
      private_key_title_for_account: '显示 "{{accountName}}" 的私钥',
      cancel: '取消',
      confirm: '下一步',
      private_key_explanation: '将它保存在安全、秘密的地方。',
      private_key_warning: '这是当前选定账户的私钥：{{accountName}}。请勿泄露此密钥。任何得到您的私钥的人都可以完全控制您的账户，包括转走所有资金。',
      private_key_warning_explanation: '请勿泄露此密钥。任何得到您的私钥的人都可以完全控制您的账户，包括转走所有资金。',
      seed_phrase: '您的助记词',
      private_key: '您的私钥',
      copy_to_clipboard: '复制到剪贴板',
      enter_password: '输入密码继续',
      seed_phrase_copied: '助记词已复制到剪贴板',
      private_key_copied: '私钥已复制到剪贴板',
      warning_incorrect_password: '密码不正确',
      unknown_error: '无法解锁您的账户。请重试。',
      seed_warning: '这是您的钱包的 {{n}} 字助记词。此助记词可用来控制您当前和未来的所有账户，还能够转走其中的所有资金。请妥善保管此助记词，不要告诉任何人。',
      text: '文本',
      qr_code: '二维码'
    },
    general: {
      search_engine: '搜索引擎',
      engine_desc: '更改在 URL 栏中输入搜索词时所使用的默认搜索引擎。',
      current_language: '当前语言',
      theme_button_text: '改变主题',
      theme_title: '主题（{{theme}})',
      theme_description: '通过设置主题更改应用程序外观。',
      theme_os: '系统',
      theme_light: '浅色',
      theme_dark: '深色',
      accounts_identicon_title: '账户哈希头像',
      accounts_identicon_desc: '哈希头像是帮助您一眼识别账户的独特图标，有 Jazzicons 和 Blockies 两种不同风格。',
      jazzicons: 'Jazzicons',
      blockies: 'Blockies',
      primary_currency_title: '主要货币（{{symbol}})',
      primary_currency_desc: '选择“原生”可优先以链的原生货币（如 ETH）显示值。选择“代币”可优先以您选定的代币显示值。',
      primary_currency_text_first: '原生',
      primary_currency_text_second: '代币'
    },
    primary_currency: {
      title: '主要货币',
      router_address: '路由地址',
      router_address_desc: '查询价格的路由地址，地址必须是一个兼容 Uniswap Router v2协议',
      value_contract_address: '价值合约地址',
      value_contract_address_desc: '用来代币显示价值',
      save: '保存'
    },
    update_needed: {
      title: '需要更新',
      description: '我们增強了您钱包的安全！请花点时间保护自己，更新到最新版本。',
      primary_action: '更新到最新版本',
      secondary_action: '稍后提醒我'
    },
    address_book: {
      recents: '最近',
      save: '保存',
      delete_contact: '删除联系信息',
      delete: '删除',
      cancel: '取消',
      add_to_address_book: '添加至通讯簿',
      enter_an_alias: '输入别名',
      add_this_address: '将此地址添加至您的通讯簿。',
      next: '下一步',
      enter_an_alias_placeholder: '例如，Vitalik B。',
      add_contact_title: '添加联系信息',
      add_contact: '添加联系信息',
      edit_contact_title: '编辑联系信息',
      edit_contact: '编辑联系信息',
      edit: '编辑',
      address_already_saved: '已保存联系信息',
      address: '地址',
      name: '名称',
      nickname: '名称',
      add_input_placeholder: '公钥 (0x)',
      between_account: '在我的账户之间转账',
      others: '其他',
      memo: '备注'
    },
    browser: {
      title: 'dApp 浏览器',
      reload: '重新加载',
      share: '共享',
      bookmark: '书签',
      add_to_favorites: '添加到收藏夹',
      error: '错误',
      cancel: '取消',
      go_back: '返回',
      go_forward: '前进',
      home: '主页',
      close: '关闭',
      open_in_browser: '在浏览器中打开',
      change_url: '更改 URL',
      switch_network: '切换网络',
      switch_address: '切换地址',
      featured_dapps: '特色去中心化应用',
      my_favorites: '我的收藏夹',
      search: '搜索或键入 URL',
      welcome: '欢迎！',
      remove: '删除',
      new_tab: '新标签页',
      tabs_close_all: '全部关闭',
      tabs_done: '完成',
      no_tabs_title: '无打开的标签页',
      no_tabs_desc: '要浏览去中心化网络，请添加新标签页',
      failed_to_resolve_ens_name: '我们无法解析该 ENS 名称',
      remove_bookmark_title: '删除收藏',
      remove_bookmark_msg: '是否确实想要从您的收藏夹中删除此站点？',
      yes: '是',
      private_key_detected: '检测到私钥或助记词,禁止直接使用浏览器搜索',
      protocol_alert_options: {
        ignore: '忽略',
        allow: '允许'
      },
      webview_error: {
        title: '出错了',
        message: '我们无法加载该页面。',
        return_home: '返回首页'
      },
      watch_asset_request: {
        title: '添加建议代币',
        cancel: '取消',
        add: '添加代币',
        message: '是否要添加此代币？',
        token: '代币',
        balance: '余额'
      },
      switch_custom_network: {
        title_existing_network: '本站点希望切换网络',
        title_new_network: '已增加新网络',
        switch_warning: '这将把 Treas 钱包中选择的网络切换到先前添加的网络：',
        available: '现在可以在网络选择工具中使用。',
        cancel: '取消',
        switch: '切换网络'
      },
      protocol_alerts: {
        tel: '此网站已被禁止自动拨打电话',
        mailto: '此网站已被禁止自动撰写电子邮件。',
        generic: '此网站已被禁止自动打开外部应用程序'
      },
      ipfs_gateway_off_title: 'IPFS网关关闭',
      ipfs_gateway_off_content: '要查看此网站，请在隐私和安全设置中开启IPFS网关。',
      paymentRequest: {
        title: '付款请求',
        title_complete: '付款完成',
        confirm: '支付',
        cancel: '拒绝',
        is_requesting_you_to_pay: '请求您付款',
        total: '总计：'
      },
      signature_request: {
        title: '签名请求',
        cancel: '取消',
        sign: '签名',
        sign_requested: '正在请求您的签名',
        signing: '签署此消息？',
        account_title: '账户：',
        balance_title: '余额：',
        message: '消息',
        message_from: '消息来自',
        learn_more: '了解更多',
        read_more: '了解更多',
        eth_sign_warning: '谨慎行事。此操作有可能用来从您的账户提取资产。确保您信任此站点。'
      },
      accountApproval: {
        title: '连接请求',
        walletconnect_title: 'WalletConnect 请求',
        action: '连接此站点？',
        action_reconnect: '要恢复连接，请选择您在dApp上看到的号码',
        action_reconnect_deeplink: '是否要重新连接到此dApp？',
        connect: '连接',
        resume: '恢复',
        cancel: '取消',
        donot_rememberme: '不要记住此dApp连接',
        disconnect: '断开连接',
        permission: '查看您的',
        address: '公钥',
        sign_messages: '代表您自己',
        on_your_behalf: '签署消息',
        warning: '单击“连接”即表示您允许此去中心化应用查看您的公钥。这是保护您的数据防范网络钓鱼风险的重要安全步骤。'
      }
    },
    biometrics: {
      enable_biometrics: '使用生物特征解锁钱包',
      enable_biometrics_desc: '需要设备上支持的任何生物特征身份验证方法（FaceID、TouchID 或指纹）',
      enable_device_passcode_ios: '使用设备密码登录？',
      enable_device_passcode_android: '使用设备 PIN 登录？'
    },
    authentication: {
      auth_prompt_title: '需要身份验证',
      auth_prompt_desc: '请进行身份验证以便解锁 Treas 钱包',
      fingerprint_prompt_title: '需要身份验证',
      fingerprint_prompt_desc: '使用您的指纹解锁Treas 钱包',
      fingerprint_prompt_cancel: '取消'
    },
    transfer: {
      title: '转账',
      send: '发送',
      receive: '接收',
      no_camera_permission_android: '您需要授予 Treas 钱包对您的相机的访问权限才能继续。您可能还需要更改系统设置。'
    },
    tool: {
      secure: '安全',
      contacts: '地址簿',
      explorer: '浏览器',
      swap: '兑换',
      approve: '授权',
      check: '检测'
    },
    nodes: {
      title: '节点',
      fast: '快速',
      average: '中速',
      slow: '慢速',
      unknown: '未知',
      node_number: '节点 {{n}}',
      block_height: '区块高度：{{n}}',
      connection_state_descriptions: '节点的连接状态可能有所不同：'
    },
    transactions: {
      tx_review_confirm: '确认',
      tx_review_transfer: '转账',
      tx_review_contract_deployment: '合约部署',
      tx_review_transfer_from: '转移',
      tx_review_unknown: '未知方法',
      tx_review_approve: '授权',
      sent_ether: '已发送以太币',
      self_sent_ether: '已向自己发送以太币',
      received_ether: '已接收以太币',
      sent_dai: '已发送 DAI',
      self_sent_dai: '已向自己发送 DAI',
      received_dai: '已接收 DAI',
      sent_tokens: '已发送代币',
      ether: '以太币',
      sent_unit: '已发送 {{unit}} 个',
      self_sent_unit: '已向自己发送 {{unit}} 个',
      received_unit: '已接收 {{unit}} 个',
      sent_collectible: '已发送收藏品',
      sent: '已发送',
      received: '已接收',
      contract_deploy: '合约部署',
      to_contract: '新合约',
      tx_details_free: '免费',
      tx_details_not_available: '不可用',
      smart_contract_interaction: '智能合约交互',
      swaps_transaction: '兑换交易',
      approve: '批准',
      hash: '哈希',
      from: '自',
      to: '至',
      details: '详细信息',
      amount: '数额',
      gas_limit: '燃料限额',
      gas_price: '燃料价格 (GWEI)',
      total: '总计',
      view_on: '在以下位置查看：',
      view_on_etherscan: '在 Etherscan 上查看',
      view_full_history_on: '在此查看完整的历史记录：',
      view_full_history_on_etherscan: '在 Etherscan 上查看完整的历史记录',
      hash_copied_to_clipboard: '交易哈希已复制到剪贴板',
      address_copied_to_clipboard: '地址已复制到剪贴板',
      transaction_error: '交易出错',
      address_to_placeholder: '搜索、公钥 (0x) 或 ENS',
      address_from_balance: '余额：',
      status: '状态',
      date: '日期',
      nonce: 'nonce',
      data: '数据',
      data_description: '与此交易关联的数据',
      hex_data: '十六进制数据',
      infinite_large: '无限',
      estimated_gas_fee: '估算的燃料费'
    },
    account_backup: {
      protect_title: '保护您的钱包',
      protect_desc: '为了保护您的钱包，请将助记词保存在不同的地点，如纸上、密码管理器中和/或云端。',
      seedphrase_not_backed_up: '重要！助记词未备份',
      seedphrase_backed_up: '助记词已备份',
      back_up_now: '立即备份',
      back_up_again: '再次备份',
      account_backup_step_1: {
        remind_me_later: '稍后提醒我',
        remind_me_later_subtext: '（不建议）',
        title: '保护您的钱包安全',
        info_text_1_1: '不要冒丢失资金的风险。在信任的地点保存您的',
        info_text_1_2: '助记词，',
        info_text_1_3: '以此保护您的钱包。',
        info_text_1_4: '如果您被应用锁定或换新设备，这是找回钱包的唯一途径。',
        cta_text: '开始',
        cta_subText: '强烈建议',
        skip_button_cancel: '立即保护',
        skip_button_confirm: '跳过',
        skip_title: '跳过账户安全？',
        skip_check: '我了解丢失助记词后将无法访问钱包。'
      },
      account_backup_step_1B: {
        title: '保护您的钱包安全',
        subtitle_1: '保护您的钱包',
        subtitle_2: '助记词。',
        cta_text: '开始',
        learn_more: '了解更多',
        why_important: '它为什么重要？',
        manual_title: '手动',
        manual_subtitle: '在一张纸上写下您的助记词并将其存放在安全的地方。',
        right_answer_description: '将它写下来，或保存在多个秘密位置，这样您就不会丢失它。如果丢失了，它就会永远消失。',
        wrong_answer_description: '一旦遗失私钥助记词，它将永远消失。无论他人如何保证，无人能够帮您找回。',
        manual_security: '安全级别：很强',
        risks_title: '风险是：',
        risks_1: '您丢失它',
        risks_2: '您忘记放在哪里',
        risks_3: '别人发现它',
        other_options: '其他选项：不一定用纸！',
        tips_title: '提示：',
        tips_1: '存放在银行金库中',
        tips_2: '存放在保险箱中',
        tips_3: '存放在多个秘密地点',
        why_secure_title: '保护您的钱包',
        why_secure_1: '不要冒丢失资金的风险。在信任的地点保存您的助记词，以此保护您的钱包。',
        why_secure_2: ' 如果您被应用锁定或换新设备，这是找回钱包的唯一途径。'
      },
      account_backup_step_2: {
        cancel_backup_title: '取消备份',
        cancel_backup_message: '我们强烈建议您保存助记词，以便恢复钱包。',
        cancel_backup_ok: '是，我将承受风险',
        cancel_backup_no: '不，备份助记词',
        title: '拿起笔和纸',
        info: '下一步是写下您的助记词。',
        info_2_1: '您将需要',
        info_2_2: '重新输入',
        info_2_3: ' 以进行确认',
        cta_text: '确定'
      },
      account_backup_step_3: {
        cancel_backup_title: '取消备份',
        cancel_backup_message: '我们强烈建议您保存助记词，以便恢复钱包。',
        cancel_backup_ok: '是，我将承受风险',
        cancel_backup_no: '不，备份助记词',
        title: '有人在看吗？',
        info_text: '确保其他人或机器人没有看您的屏幕和监听了剪切板。如果有人复制您的助记词和私钥，可能会在其他设备上窃取您的资金',
        cta_text: '没有人看我'
      },
      account_backup_step_4: {
        cancel_backup_title: '取消备份',
        cancel_backup_message: '我们强烈建议您保存助记词，以便恢复钱包。',
        cancel_backup_ok: '是，我将承受风险',
        cancel_backup_no: '不，备份助记词',
        back: '返回',
        title: '您的助记词',
        info_text_1: '在纸上认真记下这些字词。它们的顺序十分重要。',
        info_text_2: '您将需要在下一屏幕上重新输入',
        cta_text: '我已经复制助记词',
        confirm_password: '确认您的密码',
        before_continiuing: '在继续之前，我们需要您确认自己的密码',
        confirm: '确认'
      },
      account_backup_step_5: {
        error_title: '糟糕！',
        error_message: '字词的顺序不正确。请确保您在纸上的记录正确无误，需要的话可以返回上一屏幕',
        back: '返回',
        title: '确认助记词',
        info_text: '按照前一屏幕上呈现的顺序插入每个字词。',
        cta_text: '确认助记词',
        modal_title: '已确认助记词！',
        modal_text: '这是为了确保您遵守该安全措施',
        modal_button: '下一步'
      },
      account_backup_step_6: {
        title: '安全提示',
        info_text: '如果您丢失助记词，Treas 钱包无法找回',
        tip_1: '为助记词保留多个备份',
        tip_2: '在信任的密码管理器中保存助记词，并在安全的地方存放纸质备份',
        tip_3: '切勿将此助记词告诉他人',
        disclaimer: '* 您可以在以下位置找到助记词：',
        disclaimer_bold: '“设置”>“安全和隐私”',
        cta_text: '知道了！',
        modal_title: '恭喜！',
        modal_text: '您已完全备份，整装待发！',
        modal_button: '完成',
        copy_seed_phrase: '将助记词复制到剪贴板'
      }
    },
    wallet: {
      asset: '资产',
      nft: 'NFT',
      no_collectibles: '您没有关注任何收藏品',
      no_available_tokens: '您没有关注任何代币',
      choose_asset: '选择要请求的资产',
      send: {
        title: '发送',
        deeplink_failure: '出错了。请重试',
        send_to: '发送到',
        send_to_desc: '支持EVM地址或TRON地址',
        amount: '数额',
        confirm: '确认',
        sign: '签名',
        invalid_recipient: '收件人无效',
        invalid_recipient_description: '请检查地址，确保其为有效地址',
        pending_message: '正在等待确认'
      }
    },
    add_asset: {
      title: '添加资产',
      title_nft: '导入 NFT',
      search_token: '搜索代币',
      custom_token: '自定义代币',
      tokens: {
        cancel_add_token: '取消',
        add_token: '添加代币'
      },
      collectibles: {
        cancel_add_collectible: '取消',
        add_collectible: '添加'
      }
    },
    token: {
      max_total_supply: '最大供应量',
      token_name: '合约名称',
      token_symbol: '合约符号',
      token_address: '合约地址',
      token_decimal: '通证小数位',
      search_tokens_placeholder: '搜索代币',
      address_cant_be_empty: '代币地址不能为空。',
      address_must_be_valid: '代币地址必须是有效地址。',
      symbol_cant_be_empty: '代币符号不能为空。',
      decimals_cant_be_empty: '代币小数位数不能为空。',
      no_tokens_found: '我们无法找到具有该名称的任何代币。',
      select_token: '选择代币',
      address_must_be_smart_contract: '检测到个人地址。输入代币合约地址。'
    },
    risk: {
      title: '风险检测',
      honeypot: '蜜罐',
      honeypot_desc: '在存储超过整数限制的值时出现不可预测的行为',
      mintable: '铸币',
      mintable_desc: '通过增加特定地址的余额',
      ownership_retrieval: '所有权检索',
      ownership_retrieval_desc: '当所有者权限设置为黑洞地址时，仍然可以将所有者权限取回到可操作的地址。',
      balance_manipulation: '余额操纵',
      balance_manipulation_desc: '可以在无需用户允许的情况下对用户的余额进行更改，以实现减少用户持仓百分比的目的。',
      hidden_ownership: '隐藏所有权',
      hidden_ownership_desc: '要隐藏特权地址的状态，请将其设置为不可读的地址，或使用非标准方法命名。',
      self_destruction: '自毁',
      self_destruction_desc: '合约可能会被销毁，导致所有功能丧失和资产归零。',
      external_invocation: '外部调用',
      external_invocation_desc: '合约内的某些功能或逻辑判断依赖于外部合约。',
      black_list: '黑名单功能',
      black_list_desc: '限制交易到特定地址，阻止他们买入/卖出，或仅以高额亏损卖出',
      full_sale_restriction: '全面销售限制',
      full_sale_restriction_desc: '用户无法一次性出售全部。他们只能按百分比交易一部分或保留一定数量的持股。',
      slippage_modification: '税率修改',
      slippage_modification_desc: '交易税率可能会发生变化',
      transfer_pausable: '转移暂停',
      transfer_pausable_desc: '有一个用于交易的切换开关。当开关关闭时，非指定地址的交易将受到限制。',
      personal_slippage_modification: '个人滑点修改',
      personal_slippage_modification_desc: '可以为每个地址设置单独的交易税。',
      transaction_whitelisting: '交易白名单',
      transaction_whitelisting_desc: '有某些特权地址不受交易限制或需要缴纳交易税的影响。',
      anti_whale: '交易量限制',
      anti_whale_desc: '合约对最大交易量或最大持有量进行限制。',
      anti_whale_modification: '交易限制修改',
      anti_whale_modification_desc: '最大交易量或最大持仓限制可以修改。',
      trading_cooldown: '交易冷却',
      trading_cooldown_desc: '来自同一地址的两笔交易之间需要有一定的冷却时间。'
    },
    info: {
      title: '信息',
      description: '简介',
      explorer: '浏览器',
      website: '官网'
    },
    copied_clipboard: '已复制到剪贴板',
    failed: '失败',
    success: '成功',
    ok: '确定',
    cancel: '取消',
    neutral: '稍后询问我'
  }
};