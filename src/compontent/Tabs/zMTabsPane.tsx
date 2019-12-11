import {
  Component,
  Vue,
  Inject,
  Prop,
  Watch,
  Ref
} from "vue-property-decorator";

@Component
export default class ZMTabsPane extends Vue {
  @Inject()
  private tabParent!: Tabs.TabsVue;

  @Inject()
  private active: string;

  @Inject()
  public position: Event;

  @Prop()
  private name!: string;

  @Prop()
  private label?: string;

  @Ref() public _position: Event;
  public clickPane() {
    this.tabParent.active = this.name;
    // this.position = this._position;
  }
  get getClass(): string {
    const baseClass = "z-mtabs-pane ";
    let classname =
      baseClass +
      (this.name == (this.tabParent.active || this.active)
        ? "z-mtabs-pane-active "
        : "");
    return classname;
  }
  mounted() {
    if (this.name == (this.tabParent.active || this.active)) {
      // this.position = this._position;
    }
  }
  render(): JSX.Element {
    return (
      <div ref="_position" class={this.getClass} onClick={this.clickPane}>
        {this.label ? this.label : this.name}
      </div>
    );
  }
}
