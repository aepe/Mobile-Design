import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import Icon from "../Icon/icon";
import utils from "../../utils";

@Component({
  components: { Icon }
})
export default class ZNavigationarBar extends Vue {
  // title 文字
  @Prop({
    required: true,
    type: String,
    default: "Title"
  })
  private title!: string;

  // 用户自定义背景色
  @Prop({
    type: String,
    default: ""
  })
  private backgroundColor?: string;

  // 用户自定义文字颜色
  @Prop({
    type: String,
    default: ""
  })
  private color?: string;

  // 主题颜色
  @Prop({
    type: String,
    default: ""
  })
  private theme?: string;

  // 是否有返回按键
  @Prop({
    type: Boolean,
    default: false
  })
  private hasBack?: boolean;

  // 返回按键文字
  @Prop({
    type: String,
    default: ""
  })
  private backText?: String;

  // 右侧按钮列表
  @Prop({
    type: Array,
    default() {
      return [];
    }
  })
  private rightButtonList?: any[];

  // 左侧按钮列表
  @Prop({
    type: Array,
    default() {
      return [];
    }
  })
  private leftButtonList?: any[];

  // 基础类名
  private baseClass: string = "z-MNavigationarBar ";

  // 返回按键点击事件
  @Emit()
  public back(e: Event) {
    return "e";
  }

  // 按钮列表点击事件
  @Emit()
  public buttonclick(item: any, key: Number, type: string, Event: Event) {
    const CallBack = {
      Event,
      item,
      key,
      type
    };
    return CallBack;
  }

  // 返回左侧按钮列表 JSX.Element
  get getLeftButtonList(): JSX.Element[] {
    return this.leftButtonList.map((item, key) => {
      return (
        <div
          onClick={this.buttonclick.bind(Event, item, key, "left")}
          class="nav-bar-button nav-bar-button-custom"
        >
          {item.text}
        </div>
      );
    });
  }

  // 返回右侧按钮列表 JSX.Element
  get getRightButtonList(): JSX.Element[] {
    return this.rightButtonList.map((item, key) => {
      return (
        <div
          onClick={this.buttonclick.bind(Event, item, key, "right")}
          class="nav-bar-button nav-bar-button-custom"
        >
          {item.text}
        </div>
      );
    });
  }

  // 组装class类名列
  get className(): string {
    let classname: string = "z-MNavigationarBar-";
    let newclassname =
      this.baseClass + utils.assembleClass(classname, this.theme);
    return utils.clearBlank(newclassname);
  }

  // 左侧 slot
  get leftBox(): JSX.Element {
    return (
      <div class="nav-bar-left-box">
        {this.hasBack ? (
          <div onClick={this.back} class="nav-bar-button nav-bar-button-back">
            <Icon type="fanhui" /> {this.backText}
          </div>
        ) : (
          ""
        )}
        {this.getLeftButtonList}
      </div>
    );
  }

  // 右侧slot
  get rightBox(): JSX.Element {
    return <div class="nav-bar-right-box">{this.getRightButtonList}</div>;
  }

  get styles(): string {
    let styles = this.backgroundColor
      ? `background-color:${this.backgroundColor};`
      : "";
    styles += this.color ? `color:${this.color};` : "";
    return styles;
  }
  render(): JSX.Element {
    const slots = this.$slots;
    return (
      <div class={this.className} style={this.styles}>
        {slots.left ? slots.left : this.leftBox}
        <div class="nav-bar-title">{this.title}</div>
        {slots.right ? slots.right : this.rightBox}
      </div>
    );
  }
}
