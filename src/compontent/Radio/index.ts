/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-17 11:49:13
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 16:28:47
 */
import radioGroup from "./radio-group";
import radioItem from "./radio-item";
import radioBotton from "./radio-button";
import util from "../../utils";
const RadioGroup = util.instantiation("RadioGroup", radioGroup);
const RadioBotton = util.instantiation("RadioButton", radioBotton);
const RadioItem = util.instantiation("RadioItem", radioItem, "0.0.2");

export default { RadioGroup, RadioItem, RadioBotton };
