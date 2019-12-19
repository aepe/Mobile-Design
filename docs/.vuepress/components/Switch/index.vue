<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:52:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-18 14:38:21
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">switch</span>
    <div class="bhabgs-block">
      <ZMSwitch v-model="active" @changeStatus="changeStatus" />
    </div>

    <span class="bhabgs-title">switch 不同大小</span>
    <div class="bhabgs-block">
      <ZMSwitch v-model="active" size="large" @changeStatus="changeStatus" />
      <ZMSwitch v-model="active" size="small" @changeStatus="changeStatus" />
      <ZMSwitch v-model="active" @changeStatus="changeStatus" />
      <ZMSwitch v-model="active" size="mini" @changeStatus="changeStatus" />
    </div>

    <span class="bhabgs-title">switch 自定义大小</span>
    <div class="bhabgs-block">
      <ZMSwitch
        v-model="active"
        size="large"
        :customSize="20"
        @changeStatus="changeStatus"
      />
    </div>

    <span class="bhabgs-title">switch 自定义颜色</span>
    <div class="bhabgs-block">
      <ZMSwitch
        v-model="active"
        activeColor="red"
        @changeStatus="changeStatus"
      />
    </div>

    <span class="bhabgs-title">switch 禁用</span>
    <div class="bhabgs-block">
      <ZMSwitch
        v-model="active1"
        activeColor="red"
        disabled
        @changeStatus="changeStatus"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      active1: true
    };
  },
  methods: {
    changeStatus(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="stylus" scope>
.z-mbutton {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
</style>
