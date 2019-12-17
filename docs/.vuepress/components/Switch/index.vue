<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:52:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 18:35:06
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">按钮类型</span>
    <div class="bhabgs-block">
      <ZMSwitch />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    click() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
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
