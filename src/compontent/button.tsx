import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  render() {
    return <div>button</div>;
  }
}
