import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import util from "../../utils";
import { VueConstructor, VNode } from "vue";
interface style {
  width: number;
  left: number | string;
}
@Component
export default class TabsHeader extends Vue {
  @Prop()
  private type!: string;
  @Watch("value")
  private valueChange() {
    this.computedStyle();
  }
  @Prop()
  private value!: string;
  @Prop()
  private headerItems!: Z.Tabslabel[];

  private style: style = {
    left: 0,
    width: 0
  };
  private created() {}

  public clickItem(item: Z.Tabslabel, key: number, e: Event) {
    util.globalBus.$emit("click-item", item);
  }
  computedStyle() {
    const { headerItems, $refs } = this;
    let element: Vue | Element | Vue[] | Element[] | any = null;
    for (let i in headerItems) {
      if (this.value === headerItems[i].name) {
        element = $refs[`active${i}`];
      }
    }
    let w = element.clientWidth * 0.6;
    let nw = (element.clientWidth - w) / 2;
    this.style = {
      width: w,
      left: element.offsetLeft + nw + "px"
    };
  }
  get items(): JSX.Element[] {
    const { value, clickItem } = this;
    return this.headerItems.map((item: Z.Tabslabel, key) => {
      return (
        <div
          class={[
            "z-tabs-header-item",
            value && item.name === value ? "active" : ""
          ]}
          ref={`active${key}`}
          onClick={clickItem.bind(event, item, key)}
        >
          {item.label || item.name}
        </div>
      );
    });
  }
  mounted() {
    this.computedStyle();
  }
  render(): JSX.Element {
    const { style } = this;
    return (
      <div class="z-tabs-header">
        {this.items}
        <div
          class="z-tabs-active-line"
          style={`width: ${style.width}px; left:${style.left}`}
        />
      </div>
    );
  }
}
