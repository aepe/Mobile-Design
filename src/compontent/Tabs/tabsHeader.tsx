import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
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
  private activeColor!: string;

  @Prop()
  private headerItems!: Z.Tabslabel[];

  private style: style = {
    left: 0,
    width: 0
  };
  private created() {}

  @Emit("clickItem")
  public clickItem(item: Z.Tabslabel, key: number, e: Event) {
    if (item.disabled) {
      return;
    }
    return item;
  }

  clickToEmit(item: Z.Tabslabel, key: number, e: Event) {
    if (item.disabled) {
      return;
    }
    this.clickItem(item, key, e);
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
    const { value, clickToEmit, activeColor, type } = this;
    let itemStyle, itemActiveStyle, color;
    if (activeColor && type === "card") {
      itemStyle = {
        borderColor: activeColor
      };
      itemActiveStyle = {
        backgroundColor: activeColor
      };
    } else if (activeColor) {
      color = {
        color: activeColor
      };
    }
    return this.headerItems.map((item: Z.Tabslabel, key) => {
      return (
        <div
          disabled={item.disabled}
          class={[
            "z-tabs-header-item",
            value && item.name === value ? "active" : "",
            item.disabled ? "z-tabs-header-item-disabled" : ""
          ]}
          style={[
            itemStyle,
            value && item.name === value ? itemActiveStyle : "",
            value && item.name === value ? color : ""
          ]}
          ref={`active${key}`}
          onClick={clickToEmit.bind(event, item, key)}
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
    const { style, activeColor } = this;
    return (
      <div class="z-tabs-header">
        {this.items}
        <div
          class="z-tabs-active-line"
          style={`width: ${style.width}px; left:${style.left}; background-color: ${activeColor}`}
        />
      </div>
    );
  }
}
