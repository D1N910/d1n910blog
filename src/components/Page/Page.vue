<template>
  <div class="pageContainer">
      <PageItem  v-for="page in pages" :key="page.pageUrl" :page="page" />
  </div>
</template>
<script>
import PageItem from './PageItem';

export default {
  name: 'Page',
  components: { PageItem },
  data() {
    return {
      pages: [{
        time: '2018-07-11',
        title: '这是我的第一篇文章',
        content: '学习Vue学习Vue学习Vue学习Vue学习Vue学习Vue',
        pageUrl: 'xuexixuexi1',
      },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageContainer{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
