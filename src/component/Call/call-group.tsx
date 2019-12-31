import { Component, Vue } from "vue-property-decorator";
import utils from "../../utils";

@Component
export default class CallGroup extends Vue {
  private baseClass: string = "z-mCall-group ";
  get className(): string {
    let className = this.baseClass;
    return utils.clearBlank(className);
  }
  render() {
    const solts = this.$slots.default || [];
    return <div class={this.className}>{solts}</div>;
  }
}
