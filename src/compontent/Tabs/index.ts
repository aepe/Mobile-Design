/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-16 11:38:38
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-16 13:24:16
 */
import tabs from "./tabs";
import tabsItem from "./tabsItem";
import util from "../../utils";
const Tabs = util.instantiation("Tabs", tabs);
const TabsItem = util.instantiation("TabsItem", tabsItem);

export default { Tabs, TabsItem };
