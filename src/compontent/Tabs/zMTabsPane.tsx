import { Component, Vue } from "vue-property-decorator";

@Component
export default class ZMTabsPane extends Vue {
  render(): JSX.Element {
    const slots = this.$slots.default;
    return <div class="z-mtabs-pane">{slots}</div>;
  }
}
