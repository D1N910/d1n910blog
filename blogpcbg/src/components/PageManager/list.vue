<template>
    <div class="pagemanager">
    </div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      navs: [
        {
          id: 0,
          navUrl: 'page_manager',
          navName: '文章管理',
        },
        {
          id: 1,
          navUrl: 'page_publish',
          navName: '文章发布',
        },
      ],
    };
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
    text-decoration: none;
}
nav nav a:hover{
    border-bottom: 2px solid #771ae4;
}
nav .aclick{
    border-bottom: 2px solid #771ae4;
}
</style>

