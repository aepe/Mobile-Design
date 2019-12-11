/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-04 11:42:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 12:11:08
 */
import callGroup from "./call-group";
import call from "./call";
import util from "../../utils";
const zMCallGroup = util.instantiation("zMCallGroup", callGroup);
const zMCall = util.instantiation("zMCall", call);

export { zMCallGroup, zMCall };

export default zMCall;
