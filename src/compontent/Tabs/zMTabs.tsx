import {
  Component,
  Vue,
  Provide,
  Watch,
  Emit,
  Model,
  Prop
} from "vue-property-decorator";
import { VNode } from "vue";
import ZMTabsPane from "./zMTabsPane";
import ZMTabsItems from "./zMTabsItems";
import utils from "../../utils";
interface PaneProps {
  name: string;
  label?: string;
}
@Component({
  components: { ZMTabsPane, ZMTabsItems }
})
export default class ZMTabs extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  private center?: boolean;

  @Model("input", { type: String })
  @Provide()
  public active: string;

  @Watch("onActive")
  @Emit("input")
  onActiveChange() {
    return this.tabParent.active;
  }

  get onActive(): string {
    return this.tabParent.active;
  }
  @Provide()
  private tabParent: Tabs.TabsVue = this;
  private slots: VNode[] = [];
  private paneProps: PaneProps[] = [];

  @Provide()
  private childSlots: any[] = [];
  private get HeaderTabs(): JSX.Element {
    const panes: JSX.Element[] = this.paneProps.map((item, key) => {
      return <ZMTabsPane name={item.name} label={item.label} />;
    });
    let className: string =
      "zMTabs-header " + (this.center ? "zMTabs-header-" + "center " : " ");
    return <div class={utils.clearBlank(className)}>{panes}</div>;
  }
  get className(): string {
    const baseClass = "z-mtabs-";
    let classname = "z-mtabs ";
    return utils.clearBlank(classname);
  }

  setSlots() {
    this.slots.map((item, key) => {
      this.paneProps.push(item.componentOptions.propsData as PaneProps);
      this.childSlots.push({
        slot: (
          <div class="zMTabs-body-page">
            {item.componentOptions.children as any}
          </div>
        ),
        name: (item.componentOptions.propsData as any).name
      });
    });
  }
  get getZMTabsItems(): JSX.Element | string {
    return this.childSlots.length > 0 ? <ZMTabsItems /> : "";
  }
  created() {
    this.slots = this.$slots.default || [];
    this.setSlots();
  }
  render(): JSX.Element {
    return (
      <div class={this.className}>
        {this.HeaderTabs}
        {this.getZMTabsItems}
      </div>
    );
  }
}
