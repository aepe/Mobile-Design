/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-03 16:11:22
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 09:35:26
 */
export default {
  assembleClass(className: string, type: any) {
    if (type) {
      return className + type + " ";
    }
    return "";
  }
};
