import {
  Vue,
  Component,
  Model,
  Emit,
  Prop,
  Provide
} from "vue-property-decorator";
import TabsHeader from "./tabsHeader";
import TabsItem from "./tabsItem";
import util from "../../utils";
@Component({
  components: { TabsHeader, TabsItem }
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

  @Prop({
    type: String,
    default: ""
  })
  private type?: string;

  @Prop()
  public activeColor?: string;
  private headerItems: object[] = [];
  private getItems() {
    const { $slots, headerItems } = this;
    const slots = $slots.default || [];
    for (let i of slots) {
      const data = i.data as any;
      const componentOptions = i.componentOptions as any;
      const hprops = Object.assign(data.attrs, componentOptions.propsData);
      headerItems.push(hprops);
    }
  }

  private get classname(): string {
    const baseClass =
      "z-tabs-box " +
      util.assembleClass("z-tabs-box", this.center ? "-center" : false) +
      util.assembleClass("z-tabs-box-type-", this.type);
    return util.clearBlank(baseClass);
  }
  created() {
    this.getItems();
  }
  render(): JSX.Element {
    const {
      classname,
      $attrs,
      headerItems,
      value,
      $slots,
      activeColor,
      type,
      changeVal
    } = this;
    const slots = $slots.default || [];
    const headerProps = {
      attrs: {
        ...$attrs
      },
      props: {
        headerItems,
        value,
        activeColor,
        type
      },
      class: "",
      on: {
        clickItem(e: any) {
          changeVal(e.name);
        }
      }
    };
    return (
      <div class={classname}>
        <TabsHeader {...headerProps} />
        <div class="z-tabs-item-body">
          {slots.map(item => {
            const componentOptions = item.componentOptions as any;
            const props = {
              props: {
                ...componentOptions.propsData,
                activeName: value
              }
            };
            return <TabsItem {...props}>{componentOptions.children}</TabsItem>;
          })}
        </div>
      </div>
    );
  }
}
