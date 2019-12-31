/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 12:15:44
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-31 14:41:54
 */
import compontents from "./component";
// const { version } = require("../package.json");
import "./styles/base.less";
import { Vue } from "vue-property-decorator";
const install: any = (Vue: Vue.VueConstructor) => {
  // 组件
  compontents.forEach(component =>
    Vue.component(component.name, component.install)
  );
};
export default { install, version: "0.0.6" };
