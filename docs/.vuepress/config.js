const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '回首恍然如梦中', // 设置网站标题
  base: '/',
  dest: './dist',   // 设置输出目录
  port: 2666, //端口
  search: true,
  searchMaxSuggestions: 5,
  description: '微服务解决复杂问题',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新时间',
    logo: "/img/600.png",
   
    nav: navConf 
  }
}