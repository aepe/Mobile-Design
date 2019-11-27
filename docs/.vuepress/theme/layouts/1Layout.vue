<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 10:23:11
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 15:05:10
 -->
<template>
  <div class="theme-container theme-bhabgs-box">
    <headerBox />
    <div id="bhabgs-body">
      <siderBox />
      <Content id="bhabgs-content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="stylus">
.theme-bhabgs-box{
  height: 100vh;
  display flex;
  flex-direction: column;
}
</style>
