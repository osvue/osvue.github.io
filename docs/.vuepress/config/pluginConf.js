const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    // 配置自动折叠 用于文件多的情况
    collapseList: [
      "/ui/javascript/",
      "/ui/vue/",
      "/backend/boot/",
      "/backend/cloud/"
    ]
  }
};