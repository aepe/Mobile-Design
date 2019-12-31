import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component
export default class RadioButton extends Vue {
  @Prop()
  private label!: string;

  @Prop({
    type: Boolean,
    default: false
  })
  private disabled!: boolean;
  @Emit("change-radio-button")
  changeRadioButton() {
    return this.label;
  }
  @Prop()
  private value!: string;
  private get classname(): string {
    const baseClass = "z-radio-label";
    return baseClass;
  }
  render(): JSX.Element {
    const { classname, label, value, changeRadioButton, disabled } = this;
    return (
      <label class={classname} onChange={changeRadioButton} disabled={disabled}>
        <input
          class="z-radio-radio"
          tabindex="-1"
          type="radio"
          disabled={disabled}
          checked={label === value}
        />
        <span class="z-radio-radioInput"></span>
        {label}
      </label>
    );
  }
}
