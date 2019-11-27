<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 11:25:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-27 13:25:31
 -->
<template>
  <div id="bhabgs-header">
    <a class="bhabgs-title" href="http://">{{ this.title }}</a>

    <span class="bhabgs-seach">
      <input type="text" placeholder="搜索文档..." />
    </span>

    <ul class="bhabgs-nav">
      <li
        v-for="i in nav"
        @click="goTo(i)"
        :class="[i.link == path ? 'active' : '']"
      >
        {{ i.text }}
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
  methods: {
    goTo(i) {
      if (i.origin) {
        window.open(i.link, "_blank");
        return;
      }
      this.$router.push(i.link);
    }
  },
  computed: {
    path() {
      return this.$route.path;
    },
    nav() {
      return this.$site.themeConfig.nav;
    },
    title() {
      return this.$site.title;
    }
  }
};
</script>
