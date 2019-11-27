/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 15:09:51
 */
const themeConfig = {
  nav: [
    { text: "指南", link: "/" },
    {
      text: "组件",
      link: "/vue/"
    },
    {
      text: "github",
      origin: true,
      link: "https://github.com/zx-js/Mobile-Design"
    }
  ],
  sidebar: {
    "/vue/": [
      ["", "vue 组件介绍"],
      ["Button/", "Button"]
    ]
  },
  sidebarDepth: 2
};
exports.themeConfig = themeConfig;
