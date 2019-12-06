<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:52:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 15:37:53
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">按钮类型</span>
    <div class="bhabgs-block">
      <ZMbutton>默认按钮</ZMbutton>
      <ZMbutton type="primary">主要按钮</ZMbutton>
      <ZMbutton type="success">成功按钮</ZMbutton>
      <ZMbutton type="danger">错误按钮</ZMbutton>
      <ZMbutton type="warning">警告按钮</ZMbutton>
    </div>

    <span class="bhabgs-title">不同大小</span>
    <div class="bhabgs-block">
      <ZMbutton type="primary" size="large">最大</ZMbutton>
      <ZMbutton type="warning">默认大小</ZMbutton>
      <ZMbutton type="success" size="small">小按钮</ZMbutton>
      <ZMbutton type="danger" size="mini">最小按钮</ZMbutton>
    </div>

    <span class="bhabgs-title">其他形状按钮</span>
    <div class="bhabgs-block">
      <ZMbutton shape="square">直角</ZMbutton>
      <ZMbutton type="primary" shape="round">圆角</ZMbutton>
      <ZMbutton type="success" shape="plain">朴素</ZMbutton>
    </div>

    <span class="bhabgs-title">禁用按钮</span>
    <div class="bhabgs-block">
      <ZMbutton disabled type="primary" shape="round">圆角</ZMbutton>
      <ZMbutton disabled type="success" shape="plain">朴素</ZMbutton>

      <ZMbutton disabled type="primary">主要按钮</ZMbutton>
      <ZMbutton disabled type="success">成功按钮</ZMbutton>
      <ZMbutton disabled type="danger">错误按钮</ZMbutton>
      <ZMbutton disabled type="warning">警告按钮</ZMbutton>
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
