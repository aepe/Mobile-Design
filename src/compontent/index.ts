/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:37:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 18:34:51
 */
import ZButton from "./Button";
import { zMCall, zMCallGroup } from "./Call";
import ZMNavigationarBar from "./navigationBar";
import Grid from "./Grid";
import Icon from "./Icon";
import tabs from "./Tabs";
import Radio from "./Radio";
import Switch from "./Switch";
const compontents = [
  ZButton,
  zMCall,
  zMCallGroup,
  ZMNavigationarBar,
  Grid,
  Icon,
  tabs.Tabs,
  tabs.TabsItem,
  Radio.RadioGroup,
  Radio.RadioItem,
  Radio.RadioBotton,
  Switch.ZSwitch
];
export default compontents;
