<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-29 16:41:40
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-03 16:55:21
 -->
<template>
  <div class="bhabgs-showMobileUi">
    <div class="bhabgs-compontent-position">
      <component :is="cname" v-if="cname"></component>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    cname() {
      return this.name;
    }
  },
  mounted() {
    this.$bus.cname = this.name;
  }
};
</script>
<style lang="stylus">
.bhabgs-showMobileUi {
  width: 460px;
  height: 924px;
  position: fixed;
  right: 20px;
  transform: scale(0.9);
  background: url('../phone.png') no-repeat;

  .bhabgs-compontent-position {
    position: absolute;
    width: 414px;
    height: 736px;
    top: 102px;
    left: 23px;
    background $gray-1
    box-sizing: border-box;
    padding: .5rem;
  }
}
</style>
