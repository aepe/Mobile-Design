/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-16 15:09:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 10:10:49
 */
import { ZComponent } from "../compontent";

declare class TabsTs extends ZComponent {
  activeKey: string;
}

declare class TabsLabel extends ZComponent {
  name: string;
  label?: string;
  disabled?: boolean;
}

declare class TabsStyle extends ZComponent {
  left: number;
  width: number;
}

export { TabsTs, TabsLabel, TabsStyle };
