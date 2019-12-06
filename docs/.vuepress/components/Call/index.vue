<template>
  <div class="explain">
    <zMCallGroup>
      <zMCall v-for="i in 5">{{i}}</zMCall>
    </zMCallGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
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
