<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 10:23:11
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-02 18:02:47
 -->
<template>
  <div class="theme-container theme-bhabgs-box">
    <headerBox />
    <div id="bhabgs-body">
      <siderBox />
      <div id="bhabgs-content">
        <Content :class="[cname ? 'position' : '']" />
        <showMobileUi :name="cname" v-if="cname" />
      </div>
    </div>
    <BT />
  </div>
</template>

<script>
import BT from "../components/BackToTop";
import showMobileUi from "../components/showMobileUi";
export default {
  data() {
    return {};
  },
  computed: {
    cname() {
      return this.$bus.cname;
    }
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler() {
        this.$bus.cname = "";
      }
    }
  },
  methods: {},
  created() {},
  components: {
    BT,
    showMobileUi
  }
};
</script>
<style lang="stylus">
.theme-bhabgs-box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .position{
      position absolute
      right 480px
      left 20px
    }
}
</style>
