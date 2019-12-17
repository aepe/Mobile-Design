import { Vue, Component } from "vue-property-decorator";

@Component
export default class ZSwitch extends Vue {
  private get className(): string {
    const baseClass = "z-switch";
    return baseClass;
  }
  public click = () => {};
  render(): JSX.Element {
    const { className, click } = this;
    return (
      <div class={className} onClick={click}>
        <div></div>
      </div>
    );
  }
}
