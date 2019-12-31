import { Component, Vue } from "vue-property-decorator";
import utils from "../../utils";
@Component
export default class Call extends Vue {
  private baseClassName: string = "z-mCall ";
  get className(): string {
    let className = this.baseClassName;
    return utils.clearBlank(className);
  }
  render() {
    let solt = this.$slots.default || [];
    return <div class={this.className}>{solt}</div>;
  }
}
