/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 12:15:44
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-19 09:16:28
 */
import compontents from "./compontent";

import "./styles/base.less";
import Vue, { VueConstructor } from "vue";
const install: any = (Vue: VueConstructor) => {
  // 组件
  compontents.forEach(component =>
    Vue.component(component.name, component.install)
  );
};
export default { install, version: "1.0.1" };
