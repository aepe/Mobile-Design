/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 09:48:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-26 16:55:00
 */
const themeConfig = {
  nav: [
    { text: "指南", link: "/" },
    {
      text: "组件",
      items: [
        // { text: 'react', link: '/react/' },
        { text: "vue", link: "/vue/" }
        // { text: 'ts', link: '/ts/' }
      ]
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
