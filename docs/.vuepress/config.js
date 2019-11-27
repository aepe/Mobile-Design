/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-06 16:39:45
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 09:25:35
 */
const themeConfig = require("./config/themeConfig").themeConfig;
module.exports = {
  title: "zx-mobile-ui",
  port: 9992,
  base: "/zx-mobile-ui-docs/",
  markdown: {
    lineNumbers: true,
    plugins: [
      "@org/foo", // 等价于 @org/markdown-it-foo，如果对应的包存在
      [
        "markdown-it-bar",
        {
          // 提供你的选项
        }
      ]
    ]
  },
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': __dirname + 'public'
      }
    }
  },
  chainWebpack(config, isServer) {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions = {
          preserveWhitespace: false
        };
        return options;
      });
  }
};
