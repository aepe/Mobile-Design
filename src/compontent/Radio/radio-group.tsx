import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
import util from "../../utils";
import RadioButton from "./radio-button";
import Radio from "./radio-item";
@Component({
  components: { RadioButton, Radio }
})
export default class RadioGroup extends Vue {
  @Model("input", { type: String })
  private value: string;

  @Emit("input")
  private changeValue(e) {
    return e;
  }

  @Prop()
  private activeColor: string;

  @Prop({
    type: Boolean,
    default: false
  })
  private inline: boolean;

  created() {}
  private get classname(): string {
    const baseClass = "z-radio-group";
    let classname =
      "z-radio-group " +
      util.assembleClass(baseClass, this.inline ? "-inline" : "");
    return util.clearBlank(classname);
  }
  private get radioButton(): JSX.Element[] {
    console.log(this.$slots.default[0]);
    const { value, $slots, changeValue, activeColor } = this;
    return $slots.default.map((item, key) => {
      const props = {
        props: {
          ...item.componentOptions.propsData,
          value,
          activeColor
        },
        on: {
          "change-radio-button"(e) {
            changeValue(e);
          }
        }
      };
      let kids = null;
      if (item.componentOptions.tag === "ZMRadioItem") {
        kids = <Radio {...props}>{item.componentOptions.children}</Radio>;
      } else {
        kids = (
          <RadioButton {...props}>{item.componentOptions.children}</RadioButton>
        );
      }
      return kids;
    });
  }
  render(): JSX.Element {
    const { classname, radioButton } = this;
    return <div class={classname}>{radioButton}</div>;
  }
}
