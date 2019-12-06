import { Vue, Component, Inject } from "vue-property-decorator";

@Component
export default class ItemsBox extends Vue {
  @Inject()
  public childSlots: any;
  @Inject()
  public tabParent: any;
  @Inject()
  public active: any;

  get getChilds(): JSX.Element {
    return this.childSlots.map((item, key) => {
      if ((this.tabParent.active || this.active) == item.name) {
        return item.slot;
      }
      return [];
    });
  }
  render(): JSX.Element {
    return <div class="zMTabs-body">{this.getChilds}</div>;
  }
}
