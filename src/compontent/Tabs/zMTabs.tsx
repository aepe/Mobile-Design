import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class ZMTabs extends Vue {
  @Emit()
  private active() {}
  render(): JSX.Element {
    const slots = this.$slots.default;
    console.log(this.$slots);
    return <div class="z-mtabs">{slots}</div>;
  }
}
