<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:31:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-05 16:10:11
 -->
<template>
  <div class="explain">
    <div class="bhabgs-block">
      <span class="bhabgs-title">Tabs</span>
      <ZMTabs>
        <ZMTabsPane v-for="i in 3" :name="'ss'+i">{{i}}</ZMTabsPane>
      </ZMTabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
