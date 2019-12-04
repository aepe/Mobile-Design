<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 11:25:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 11:17:14
 -->
<template>
  <div id="bhabgs-sider" v-if="menus.length > 0">
    <div class="title">开发指南</div>
    <ul>
      <li
        v-for="i in menus"
        @click="goTo(i)"
        :class="[path + i[0] == $route.path ? 'active' : '']"
      >
        {{ i[1] }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    path() {
      return "/" + this.$route.path.split("/")[1] + "/";
    },
    menus() {
      return this.$site.themeConfig.sidebar[this.path] || [];
    }
  },
  methods: {
    goTo(i) {
      const url = this.path + i[0];
      if (this.$route.path == url) {
        return;
      }
      this.$router.push(url);
    }
  }
};
</script>
>
