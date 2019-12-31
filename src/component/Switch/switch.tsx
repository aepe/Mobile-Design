import { Vue, Component, Emit, Model, Prop } from "vue-property-decorator";
import util from "../../utils";

@Component
export default class ZSwitch extends Vue {
  @Model("input", { default: false, type: Boolean })
  private value!: boolean;

  @Prop()
  private size?: string;

  @Prop({
    type: Number
  })
  private customSize?: number;

  @Prop({
    default: false
  })
  private disabled?: boolean;

  @Prop()
  private activeColor?: string;

  created() {}
  private get switchStyle(): string {
    const { value, activeColor, customSize } = this;
    let style = "";

    // 背景色
    style += value && activeColor ? `background-color:${activeColor};` : "";

    // font-size
    style += customSize ? `font-size:${customSize}px` : "";
    return style;
  }
  private get className(): string {
    const { size, customSize } = this;
    const baseClass =
      "z-switch " +
      (customSize
        ? "z-switch-def"
        : util.assembleClass("z-switch-", size || "def"));
    return baseClass;
  }
  @Emit("input")
  private changeStatus() {
    return !this.value;
  }

  render(): JSX.Element {
    const { className, changeStatus, value, switchStyle, disabled } = this;
    return (
      <button
        disabled={disabled}
        class={[className, value ? "active" : ""]}
        style={switchStyle}
        onClick={changeStatus}
      ></button>
    );
  }
}
