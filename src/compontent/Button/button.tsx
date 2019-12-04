import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import utils from "../../utils";
@Component
export default class Button extends Vue {
  @Emit("click")
  public btnClick(e) {
    return e;
  }
  // 是否有icon
  @Prop({
    default() {
      return "";
    }
  })
  private icon?: string;

  // 按钮形状
  @Prop({
    default() {
      return "";
    }
  })
  private shape?: string;

  // 按钮类型
  @Prop({
    default() {
      return "";
    }
  })
  private type?: string;

  // 按钮大小
  @Prop({
    default() {
      return "";
    }
  })
  private size?: string;

  // 禁用状态
  @Prop({
    default() {
      return false;
    }
  })
  private disabled?: boolean;

  private types: string[] = ["primary", "success", "warning", "danger"];
  private BCN: string = "z-mbutton ";
  // 拼接class 处理样式问题
  get className(): string {
    let classname: string = "z-mbutton-";
    let hasType =
      this.types.indexOf(this.type) == -1 ? "" : "z-mbutton-hastype";

    let newclassname =
      this.BCN +
      utils.assembleClass(classname, this.type) +
      utils.assembleClass(classname, this.shape) +
      utils.assembleClass(classname, this.size) +
      hasType;
    return newclassname.replace(/(\s*$)/g, "");
  }

  render() {
    const slots = this.$slots.default || [];
    return (
      <button
        onClick={this.btnClick}
        disabled={this.disabled}
        class={this.className}
      >
        {slots}
      </button>
    );
  }
}
