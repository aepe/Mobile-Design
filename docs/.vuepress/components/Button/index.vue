<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:52:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-16 11:26:16
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">按钮类型</span>
    <div class="bhabgs-block">
      <ZMButton>默认按钮</ZMButton>
      <ZMButton type="primary">主要按钮</ZMButton>
      <ZMButton type="success">成功按钮</ZMButton>
      <ZMButton type="danger">错误按钮</ZMButton>
      <ZMButton type="warning">警告按钮</ZMButton>
    </div>

    <span class="bhabgs-title">不同大小</span>
    <div class="bhabgs-block">
      <ZMButton type="primary" size="large">最大</ZMButton>
      <ZMButton type="warning">默认大小</ZMButton>
      <ZMButton type="success" size="small">小按钮</ZMButton>
      <ZMButton type="danger" size="mini">最小按钮</ZMButton>
    </div>

    <span class="bhabgs-title">其他形状按钮</span>
    <div class="bhabgs-block">
      <ZMButton shape="square">直角</ZMButton>
      <ZMButton type="primary" shape="round">圆角</ZMButton>
      <ZMButton type="success" shape="plain">朴素</ZMButton>
    </div>

    <span class="bhabgs-title">loading</span>
    <div class="bhabgs-block">
      <ZMButton type="success" :loading="loading" shape="plain" @click="click">loading</ZMButton>

      <ZMButton type="success" :loading="loading" shape="plain" @click="click">
        <ZMIcon type="loading" />
      </ZMButton>
    </div>

    <span class="bhabgs-title">图标按钮</span>
    <div class="bhabgs-block">
      <ZMButton type="success">
        <ZMIcon type="xiangzuo" />左
      </ZMButton>
      <ZMButton type="success">
        右
        <ZMIcon type="you" />
      </ZMButton>
      <ZMButton type="success" icon="success">成功</ZMButton>
      <ZMButton type="success" icon="success">成功</ZMButton>
    </div>

    <span class="bhabgs-title">禁用按钮</span>
    <div class="bhabgs-block">
      <ZMButton disabled type="primary" shape="round">圆角</ZMButton>
      <ZMButton disabled type="success" shape="plain">朴素</ZMButton>

      <ZMButton disabled type="primary">主要按钮</ZMButton>
      <ZMButton disabled type="success">成功按钮</ZMButton>
      <ZMButton disabled type="danger">错误按钮</ZMButton>
      <ZMButton disabled type="warning">警告按钮</ZMButton>
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
