<template>
    <div class="Footer">
        Copyright © 2015-2018 D1N910 <span @click="JumpToBack">蛋糕</span><br><a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">{{ beian }}</a>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      beian: '粤ICP备17002625号',
    };
  },
  methods: {
    JumpToBack() {
      window.location.href = '/#/bg';
    },
  },
};
</script>
<style scoped>
.Footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding-bottom: 8px;
    font-size: 14px;
}
a {
  color: #771ae4;
}
</style>

