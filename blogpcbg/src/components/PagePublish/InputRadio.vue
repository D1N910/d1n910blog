<template>
    <div class="inputradio">
        <input id="radio.id" type="radio" name="tag" :value="radio.name" v-model="checkedValue">
        <label for="radio.id">{{radio.name}}</label>
    </div>
</template>
<script>
export default {
  name: 'inputradio',
  props: ['radio'],
  data() {
    return {
      checkedValue: '',
    };
  },
};
</script>

<style scoped>
.inputradio{
    display: inline;
}
</style>
