<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-27 11:25:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-28 11:50:41
 -->
<template>
  <div id="bhabgs-header">
    <a class="bhabgs-title" href="http://">{{ this.title }}</a>

    <span class="bhabgs-seach">
      <!-- <input type="text"  /> -->
      <SearchBox />
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
import SearchBox from "../components/SearchBox";
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
  },
  components: { SearchBox }
};
</script>
