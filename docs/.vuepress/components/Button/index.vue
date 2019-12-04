<template>
  <div class="explain">
    <span class="title">
      按钮类型
    </span>
    <div class="block">
      <ZMbutton>默认按钮</ZMbutton>
      <ZMbutton type="primary">主要按钮</ZMbutton>
      <ZMbutton type="success">成功按钮</ZMbutton>
      <ZMbutton type="danger">错误按钮</ZMbutton>
      <ZMbutton type="warning">警告按钮</ZMbutton>
    </div>

    <span class="title">
      不同大小
    </span>
    <div class="block">
      <ZMbutton type="primary" size="large">最大</ZMbutton>
      <ZMbutton type="warning">默认大小</ZMbutton>
      <ZMbutton type="success" size="small">小按钮</ZMbutton>
      <ZMbutton type="danger" size="mini">最小按钮</ZMbutton>
    </div>

    <span class="title">
      其他形状按钮
    </span>
    <div class="block">
      <ZMbutton shape="square">直角</ZMbutton>
      <ZMbutton type="primary" shape="round">圆角</ZMbutton>
      <ZMbutton type="success" shape="plain">朴素</ZMbutton>
    </div>

    <span class="title">
      禁用按钮
    </span>
    <div class="block">
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
.z-mbutton
  margin-right .5rem
  margin-top .5rem
.block
  margin-bottom 2rem
.title
  display block
  margin-top 1rem
</style>
