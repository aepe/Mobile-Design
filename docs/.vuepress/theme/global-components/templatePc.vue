<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-28 09:17:12
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-03 09:14:08
 -->
<template>
  <div class="bhabgs-template-mobile">
    <div class="view-example">
      <component :is="name"></component>
    </div>
    <div class="code-example">
      <div class="code-btn" @click="showCode()">{{ isShow ? "隐藏" : "显示" }}代码</div>
      <div class="code-content" v-show="isShow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demoTemplate",
  props: {
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  created() {},
  methods: {
    showCode() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style lang="stylus">
.bhabgs-template-mobile {
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  overflow-x: auto;
  margin-top: 20px;
  background: #fff;

  .view-example {
    padding: 20px 40px;
    border-bottom: 1px solid #eee;
  }

  .code-example {
    .line-numbers-mode {
      border-radius: 0;
    }
  }

  .code-btn {
    text-align: center;
    cursor: pointer;
    padding: 5px;

    &:hover {
      background-color: #f9fafc;
      transition: all 0.3s;

      button {
        color: #000;
        transition: all 0.3s;
      }
    }
  }
}
</style>
