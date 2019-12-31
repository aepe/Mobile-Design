/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-05 16:22:07
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-19 14:25:29
 */
import { Vue } from "vue-property-decorator";
import { TabsTs, TabsLabel, TabsStyle } from "./types";
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends Vue.VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface ComponentOptions<V extends Vue> {
      [propName: string]: any;
    }
  }
  namespace Z {
    interface Tabs extends TabsTs {}
    interface Tabslabel extends TabsLabel {}

    interface tabsStyle extends TabsStyle {}
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $Zutil: any;
  }
}
