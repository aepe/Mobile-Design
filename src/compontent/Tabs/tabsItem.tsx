import { Vue, Component, Prop } from "vue-property-decorator";
import util from "../../utils";
@Component
export default class TabsItem extends Vue {
  @Prop({
    required: true,
    type: String
  })
  private name!: string;

  @Prop({
    type: String
  })
  private activeName: string;

  private get classname(): string {
    const baseClass = "z-tabs-item-box ";
    return util.clearBlank(baseClass);
  }

  private get showType(): boolean {
    if (this.activeName && this.activeName === this.name) {
      return true;
    }

    return false;
  }
  render(): JSX.Element {
    // v-show={showType}
    const { $slots, classname, showType } = this;
    return (
      // <transition name="z-tabs">
      <div v-show={showType} class={classname}>
        {$slots.default}
      </div>
      // </transition>
    );
  }
}
