<template>
    <div class="inputradio">
        <input id="radio.id" type="radio"
        name="tag" :value="radio.name" v-model="checkedValue" @click="checkTag">
        <label for="radio.id">{{radio.name}}</label>
    </div>
</template>
<script>
export default {
  name: 'inputradio',
  props: ['radio'],
  data() {
    return {
      checkedValue: '日常',
    };
  },
  methods: {
    checkTag() {
      const data = {
        checkedValue: this.checkedValue,
      };
      this.$emit('showChecked', data);
    },
  },
};
</script>

<style scoped>
.inputradio{
    display: inline;
}
</style>
