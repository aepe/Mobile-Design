/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-04 11:42:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-16 10:03:30
 */
import callGroup from "./call-group";
import call from "./call";
import util from "../../utils";
const zMCallGroup = util.instantiation("CallGroup", callGroup);
const zMCall = util.instantiation("Call", call);

export { zMCallGroup, zMCall };

export default zMCall;
