import { Vue, Component, Prop, Inject } from "vue-property-decorator";
import util from "../../utils";
@Component
export default class TabsItem extends Vue {
  @Prop({
    required: true,
    type: String
  })
  private name!: string;
  @Inject()
  private value?: string;
  private get classname(): string {
    const baseClass = "z-tabs-item-box ";
    return util.clearBlank(baseClass);
  }

  private get showType(): boolean {
    return false;
  }
  render(): JSX.Element {
    // v-show={showType}
    const { $slots, classname, showType } = this;
    return <div class={classname}>{$slots.default}</div>;
  }
}
