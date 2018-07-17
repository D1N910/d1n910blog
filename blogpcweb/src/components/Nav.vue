<template>
    <nav>
        <div class="logo">
          <router-link :to="'/'"><img src="http://wx2.sinaimg.cn/large/006ES7aSgy1ftdcos7qo5g30jj05ykb5.gif"></router-link>
        </div>
         <nav>
            <router-link  v-for="nav in navs" :key="
            nav.id" :to="nav.navUrl" active-class="aclick">{{nav.navName}}</router-link>
            </nav>
    </nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      navs: [
        {
          id: 0,
          navUrl: '/',
          navName: '主页',
        },
        {
          id: 1,
          navUrl: 'page',
          navName: '文章',
        },
        // {
        //   id: 2,
        //   navUrl: 'guidang',
        //   navName: '归档',
        // },
        {
          id: 3,
          navUrl: 'littlegongju',
          navName: '自制',
        },
        {
          id: 4,
          navUrl: 'AboutMe',
          navName: '关于我',
        },
      ],
      whichclick: -1,
    };
  },
  methods: {
    getIndex(index) {
      this.whichclick = index;
    },
  },
};
</script>
<style scoped>
nav{
    text-align: center;
    background-color: #fff;
    font-size: 15px;
    font-weight: 500;
    background-size: 44px 44px;
    padding: 16px 20px 0 20px
}
nav img{
    width: 100px;
}
nav a{
    color: #771ae4;
    margin: 0 8px;
}
nav nav a:hover{
    border-bottom: 2px solid #771ae4;
}
nav .aclick{
    border-bottom: 2px solid #771ae4;
}
</style>

