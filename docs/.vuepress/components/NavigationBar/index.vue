<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-04 13:25:04
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 16:56:03
 -->
<template>
  <div class="explain">
    <span class="bhabgs-title">默认导航栏</span>
    <div class="bhabgs-block">
      <ZMNavigationarBar
        :leftButtonList="leftButtonList"
        :rightButtonList="leftButtonList"
        hasBack
        backText="返回"
        title="哈哈哈"
        @back="back"
      >
        <!-- <div slot="left">haha</div> -->
        <div slot="right">
          <div class="nav-bar-button">确认</div>
        </div>
      </ZMNavigationarBar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftButtonList: [
        {
          text: "关闭",
          icon: "close"
        },
        {
          text: "关闭2",
          icon: "close2"
        }
      ],
      rightButtonList: [
        {
          text: "r关闭",
          icon: "close"
        },
        {
          text: "r关闭2",
          icon: "close2"
        }
      ]
    };
  },
  methods: {
    back(e, i) {}
  }
};
</script>
<style lang="stylus" scope>
.z-mbutton {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.block {
  margin-bottom: 2rem;
}

.title {
  display: block;
  margin-top: 1rem;
}
</style>
