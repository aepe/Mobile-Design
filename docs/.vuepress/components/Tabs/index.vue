<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:31:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 14:27:48
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">默认tabs</span>

    <div class="bhabgs-block">
      <ZMTabs v-model="activeName">
        <ZMTabsItem v-for="i in paneList" :name="i.name" :label="i.label">
          {{ i.label }}
        </ZMTabsItem>
      </ZMTabs>
    </div>
    <span class="bhabgs-title">居中tabs</span>

    <div class="bhabgs-block">
      <ZMTabs v-model="activeName2" center>
        <ZMTabsItem
          v-for="i in paneList"
          :name="i.name"
          :label="i.label"
        ></ZMTabsItem>
      </ZMTabs>
    </div>
    <span class="bhabgs-title">自定义activecolor tabs</span>

    <div class="bhabgs-block">
      <ZMTabs v-model="activeName" activeColor="red">
        <ZMTabsItem
          v-for="i in paneList"
          :name="i.name"
          :label="i.label"
        ></ZMTabsItem>
      </ZMTabs>
    </div>
    <span class="bhabgs-title">带禁用的 tabs</span>

    <div class="bhabgs-block">
      <ZMTabs v-model="activeName">
        <ZMTabsItem
          v-for="i in paneList"
          :name="i.name"
          :label="i.label"
          :disabled="i.disabled"
        ></ZMTabsItem>
      </ZMTabs>
    </div>

    <span class="bhabgs-title">card 类型 tabs</span>
    <div class="bhabgs-block">
      <ZMTabs v-model="activeName" type="card" center activeColor="red">
        <ZMTabsItem
          v-for="i in paneList"
          :name="i.name"
          :label="i.label"
        ></ZMTabsItem>
      </ZMTabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "it",
      activeName2: "it",
      paneList: [
        {
          name: "it",
          label: "标题切换",
          disabled: false
        },
        {
          name: "manager",
          label: "标题切换",
          disabled: true
        },
        {
          name: "wiki",
          label: "百科",
          disabled: false
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
