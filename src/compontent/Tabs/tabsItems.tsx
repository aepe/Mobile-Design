import { Vue, Component, Prop } from "vue-property-decorator";
import util from "../../utils";
@Component
export default class TabsItem extends Vue {
  private get classname(): string {
    const baseClass = "z-tabs-item-body ";
    return util.clearBlank(baseClass);
  }

  @Prop()
  private value?: string;
  private get Item(): JSX.Element[] {
    const { $slots } = this;
    return $slots.default.map((item, key) => {
      console.log(item);
      return item;
    });
  }
  render(): JSX.Element {
    const { $slots, classname, Item, value } = this;
    return <div class={classname}>{value}</div>;
  }
}
