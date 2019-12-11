import { Component, Vue, Prop } from "vue-property-decorator";
import { NestedCSSProperties } from "typestyle/lib/types";
const col: NestedCSSProperties = {
  display: "grid"
};
@Component
export default class Grid extends Vue {
  private row() {}
  private col() {}
  render(): JSX.Element {
    return <div style={col}>Grid</div>;
  }
}
