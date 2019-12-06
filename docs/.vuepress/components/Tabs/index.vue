<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:31:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-06 17:50:04
 -->
<template>
  <div class="explain">
    <div class="bhabgs-block">
      <span class="bhabgs-title">Tabs</span>
      <ZMTabs v-model="activeName" flex>
        <ZMTabsPane v-for="i in paneList" :name="i.name" :label="i.label"></ZMTabsPane>
      </ZMTabs>
    </div>

    <div class="bhabgs-block">
      <span class="bhabgs-title">居中Tabs</span>
      <ZMTabs center v-model="activeName">
        <ZMTabsPane v-for="i in paneList" :name="i.name" :label="i.label">
          <div class="jjj">{{i.label}}</div>
        </ZMTabsPane>
      </ZMTabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "it",
      paneList: [
        {
          name: "it",
          label: "IT"
        },
        {
          name: "manager",
          label: "管理"
        },
        {
          name: "wiki",
          label: "百科"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scope>
.z-mbutton {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
</style>
