<template>
  <div class="explain">
    <span class="bhabgs-title">默认导航栏</span>

    <div class="bhabgs-block">
      <ZMNavBar title="默认导航栏" />
    </div>
    <span class="bhabgs-title">暗色导航</span>

    <div class="bhabgs-block">
      <ZMNavBar theme="dark" title="暗色导航" />
    </div>
    <span class="bhabgs-title">自定义背景色 文字颜色</span>

    <div class="bhabgs-block">
      <ZMNavBar backgroundColor="red" color="#fff" title="自定义背景色" />
    </div>
    <span class="bhabgs-title">带返回键的导航</span>

    <div class="bhabgs-block">
      <ZMNavBar hasBack title="返回键" />
    </div>
    <span class="bhabgs-title">带返回键的导航 并设置返回按键text</span>

    <div class="bhabgs-block">
      <ZMNavBar hasBack backText="返回" @back="back" title="返回键" />
    </div>
    <span class="bhabgs-title">自定义按钮</span>

    <div class="bhabgs-block">
      <ZMNavBar
        hasBack
        backText="返回"
        @back="back"
        :leftButtonList="leftButtonList"
        title="自定义按钮"
      />
    </div>
    <span class="bhabgs-title">自定义左侧按钮</span>

    <div class="bhabgs-block">
      <ZMNavBar
        @buttonclick="buttonClick"
        :leftButtonList="leftButtonList"
        title="自定义左侧按钮"
      />
    </div>
    <span class="bhabgs-title">自定义右侧按钮</span>

    <div class="bhabgs-block">
      <ZMNavBar
        @buttonclick="buttonClick"
        :rightButtonList="leftButtonList"
        title="自定义右侧按钮"
      />
    </div>

    <span class="bhabgs-title">用户自定义左右两侧</span>

    <div class="bhabgs-block">
      <ZMNavBar title="用户自定义左右两侧">
        <div slot="left">left</div>
        <div slot="right">right</div>
      </ZMNavBar>
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
    // 用户自定义按钮点击事件
    buttonClick(item) {
      alert(`您点击了${item.type}的第${item.key + 1} 个按钮`);
    },
    back(e) {
      alert("您点击了返回按键");
    }
  }
};
</script>
<style lang="stylus" scope>
.z-mbutton {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
.bhabgs-block{
  background-color: transparent;
  }
.block {
  margin-bottom: 2rem;
}

.title {
  display: block;
  margin-top: 1rem;
}
</style>
