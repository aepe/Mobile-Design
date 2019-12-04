import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import utils from "../../utils";

@Component
export default class ZNavigationarBar extends Vue {
  @Prop({
    required: true,
    type: String,
    default: "Title"
  })
  private title!: string;
  @Prop({
    type: Boolean,
    default: false
  })
  private hasBack?: boolean;

  @Prop({
    type: String,
    default: ""
  })
  private backText?: String;

  @Prop({
    type: Array,
    default: []
  })
  private rightButtonList?: any[];

  @Prop({
    type: Array,
    default: []
  })
  private leftButtonList?: any[];

  private baseClass: string = "z-MNavigationarBar ";

  @Emit()
  public back(e: Event, item: any) {
    console.log(e);
    return item;
  }

  get getTeftButtonList(): JSX.Element[] {
    return this.leftButtonList.map((key, val) => {
      return (
        <div onClick={this.back.bind(Event, key)} class="nav-bar-button-custom">
          {key.text}
        </div>
      );
    });
  }
  get className(): string {
    let classname = this.baseClass;
    return utils.clearBlank(classname);
  }
  get leftBox(): JSX.Element {
    return (
      <div class="nav-bar-left-box">
        {this.hasBack ? (
          <div onClick={this.back} class="nav-bar-button nav-bar-button-back">
            {"<" + this.backText}
          </div>
        ) : (
          ""
        )}
        {this.getTeftButtonList}
      </div>
    );
  }
  get rightBox(): JSX.Element {
    return <div class="nav-bar-right-box"></div>;
  }
  render() {
    const slots = this.$slots;
    return (
      <div class={this.className}>
        {slots.left ? slots.left : this.leftBox}
        <div class="nav-bar-title">{this.title}</div>
        {slots.right ? slots.right : this.rightBox}
      </div>
    );
  }
}
