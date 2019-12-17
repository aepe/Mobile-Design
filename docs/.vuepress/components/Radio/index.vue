<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:52:33
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 17:12:09
 -->
<template>
  <div class="explain">
    <div class="bhabgs-block">
      <span class="bhabgs-title">radio block</span>
      <z-m-radio-group v-model="radioValue">
        <ZMRadioItem v-for="i in radios" :label="i.label" />
      </z-m-radio-group>
    </div>
    <div class="bhabgs-block">
      <span class="bhabgs-title">radio inline</span>
      <z-m-radio-group v-model="radioValue1" inline>
        <ZMRadioItem v-for="i in radios" :label="i.label" />
      </z-m-radio-group>
    </div>

    <div class="bhabgs-block">
      <span class="bhabgs-title">radio disabled</span>
      <z-m-radio-group v-model="radioValueDisabled" inline>
        <ZMRadioItem
          v-for="i in radios"
          :label="i.label"
          :disabled="i.disabled"
        />
      </z-m-radio-group>
    </div>

    <div class="bhabgs-block">
      <span class="bhabgs-title">radio button</span>
      <z-m-radio-group v-model="radioValueDisabled" inline>
        <ZMRadioButton v-for="i in radios" :label="i.label" />
      </z-m-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radioValue: "88",
      radioValue1: "66",
      radioValueDisabled: "99",
      radios: [
        {
          label: "99",
          disabled: false
        },
        {
          label: "88",
          disabled: true
        },
        {
          label: "66",
          disabled: false
        }
      ]
    };
  },
  methods: {
    click() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>
<style lang="stylus" scope>
.z-mbutton {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
</style>
