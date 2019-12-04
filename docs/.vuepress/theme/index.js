/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 10:26:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-03 15:07:58
 */
module.exports = {
  extend: "@vuepress/theme-default",
  plugins: [
    [
      "container",
      {
        type: "explain",
        defaultTitle: {
          "/": "组件介绍"
        },
        before(info) {
          return `<div class="bhabgs-md explain"> <span class="bhabgs-m-title" id="${info}">${info}</span> <div class="bhabgs-md-content">`;
        },
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "b-danger",
        defaultTitle: {
          "/": "危险提醒"
        },
        before(info) {
          return `<div class="bhabgs-md b-danger"> <span class="bhabgs-m-title" id="${info}">${info}</span> <div class="bhabgs-md-content">`;
        },
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "b-warning",
        defaultTitle: {
          "/": "警告提醒"
        },
        before(info) {
          return `<div class="bhabgs-md b-warning"> <span class="bhabgs-m-title" id="${info}">${info}</span> <div class="bhabgs-md-content">`;
        },
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "b-info", // info
        defaultTitle: {
          "/": "主要提醒"
        },
        before(info) {
          return `<div class="bhabgs-md b-info"> <span class="bhabgs-m-title" id="${info}">${info}</span> <div class="bhabgs-md-content">`;
        },
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "b-success",
        defaultTitle: {
          "/": "成功提醒"
        },
        before(info) {
          return `<div class="bhabgs-md b-success"> <span class="bhabgs-m-title" id="${info}">${info}</span> <div class="bhabgs-md-content">`;
        },
        after: "</div></div>"
      }
    ]
  ]
};
