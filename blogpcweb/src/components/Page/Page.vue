<template>
  <div class="pageContainer">
      <PageItem  v-for="page in pages" :key="page.pageUrl" :page="page" />
      <p class="nothing" v-if='pages.length == 0'>
          这里啥都没有～
      </p>
  </div>
</template>
<script>
import PageItem from './PageItem';

export default {
  name: 'Page',
  components: { PageItem },
  data() {
    return {
      pages: [],
    };
  },
  mounted() {
    this.$http.get(
      'https://www.d1n910.cn/api/getMypageBoth',
    ).then((response) => {
      const pages = JSON.parse(response.bodyText).getMypageBoth;
      for (let i = 0; i <= pages.length - 1; i += 1) {
        const data = [];
        data.push(pages[i].date.substr(0, 10));
        data.push(' ');
        data.push(pages[i].datetime);
        pages[i].date = data.join('');
        pages[i].pageContent = '';
      }
      this.pages = pages;
    });
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
.nothing{
  margin: 30px 0;
  color: #771ae4;
}
</style>
