import { VueConstructor } from "vue";
import { VueClass } from "vue-class-component/lib/declarations";

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-03 16:11:22
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 13:43:24
 */
export default {
  //根据状态组合class
  assembleClass(className: string, type: any) {
    if (type) {
      return className + type + " ";
    }
    return "";
  },
  // 创建需要处理的组件
  instantiation(name: string, install: VueConstructor, version?: string) {
    return {
      version: version || "0.0.1",
      name,
      install
    };
  },
  // 清除class 结尾多余空格
  clearBlank(className: string) {
    return className.replace(/(\s*$)/g, "");
  }
};
