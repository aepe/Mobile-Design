<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-28 09:17:12
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-02 11:30:19
 -->
<template>
  <div class="bhabgs-template-pc">
    <div class="code-example">
      <slot></slot>
    </div>
    <!-- <showMobileUi :name="name" /> -->
  </div>
</template>
<script>
import showMobileUi from "../components/showMobileUi";
export default {
  name: "demoTemplate",
  components: {
    showMobileUi
  },
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
  created() {
    this.$bus.cname = this.name;
  },
  methods: {
    showCode() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style lang="stylus">
.bhabgs-template-pc {
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  background: #fff;
  display: flex;

  .view-example {
    padding: 20px 40px;
    border-bottom: 1px solid #eee;
  }

  .code-example {
    flex: 1;

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
