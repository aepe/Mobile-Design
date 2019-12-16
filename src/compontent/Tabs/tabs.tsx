import {
  Vue,
  Component,
  Model,
  Emit,
  Prop,
  Provide
} from "vue-property-decorator";
import TabsHeader from "./tabsHeader";
import TabsItems from "./tabsItems";
import util from "../../utils";
import { VNode } from "vue";
@Component({
  components: { TabsHeader, TabsItems }
})
export default class Tabs extends Vue {
  @Model("input", { type: String, default: "123" })
  @Provide()
  public value!: string;

  @Emit("input")
  private changeVal(item: string) {
    return item;
  }

  @Prop({
    type: Boolean,
    default: false
  })
  private center?: boolean;
  private headerItems: object[] = [];
  private getItems() {
    const { $slots, headerItems, value } = this;
    const slots = $slots.default;
    for (let i of slots) {
      const hprops = Object.assign(i.data.attrs, i.componentOptions.propsData);
      headerItems.push(hprops);
    }
  }

  private get classname(): string {
    console.log(this.center);
    const baseClass =
      "z-tabs-box " +
      util.assembleClass("z-tabs-box", this.center ? "-center" : false);
    return util.clearBlank(baseClass);
  }
  created() {
    this.getItems();
    util.globalBus.$on("click-item", (item: Z.Tabslabel) => {
      this.changeVal(item.name);
    });
  }
  render(): JSX.Element {
    const { classname, $attrs, headerItems, value, $slots } = this;
    const headerProps = {
      attrs: {
        ...$attrs
      },
      props: {
        headerItems,
        value
      },
      class: "",
      on: {}
    };
    const bodyProp = {
      props: {
        value
      }
    };
    return (
      <div class={classname}>
        <TabsHeader {...headerProps} />
        <div class="z-tabs-item-body">{$slots.default}</div>
      </div>
    );
  }
}
