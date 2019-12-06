/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:20:02
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-05 13:30:37
 */
import tabs from "./zMTabs";
import tabsPane from "./zMTabsPane";
import util from "../../utils";

const ZMTabs = util.instantiation("ZMTabs", tabs);
const ZMTabsPane = util.instantiation("ZMTabsPane", tabsPane);

export { ZMTabs, ZMTabsPane };
export default ZMTabs;
