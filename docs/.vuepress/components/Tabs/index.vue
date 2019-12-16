<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:31:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-16 17:40:09
 -->
<template>
  <div class="explain">
    <ZMTabs v-model="activeName" type="hhhh">
      <ZMTabsItem v-for="i in paneList" :name="i.name" :label="i.label">
        {{ i.label }}
      </ZMTabsItem>
    </ZMTabs>

    <ZMTabs v-model="activeName" center>
      <ZMTabsItem
        v-for="i in paneList"
        :name="i.name"
        :label="i.label"
      ></ZMTabsItem>
    </ZMTabs>
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
          label: "标题切换"
        },
        {
          name: "manager",
          label: "标题切换"
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
