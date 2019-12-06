import { Component, Vue, Inject, Prop, Watch } from "vue-property-decorator";

@Component
export default class ZMTabsPane extends Vue {
  @Inject()
  private tabParent!: Tabs.TabsVue;

  @Inject()
  private active: string;

  @Prop()
  private name!: string;

  @Prop()
  private label?: string;

  public clickPane() {
    this.tabParent.active = this.name;
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
  render(): JSX.Element {
    const slots = this.$slots.default;
    return (
      <div class={this.getClass} onClick={this.clickPane}>
        {this.label ? this.label : this.name}
      </div>
    );
  }
}
