<template>
    <div class="pageShowcontainer">
        <PageItem :page="pages" />
    </div>
</template>
<script>
import PageItem from './PageItem';

export default {
  name: 'PageShow',
  components: { PageItem },
  data() {
    return {
      pages: {
      },
    };
  },
  beforeCreate() {
    const search = window.location.hash.split('?')[1];
    const getUrl = [];
    getUrl.push('https://www.d1n910.cn/api/getMypage?');
    getUrl.push(search);
    const url = getUrl.join('');
    this.$http.get(
      url,
    ).then((response) => {
      const pages = JSON.parse(response.bodyText).getMypage;
      for (let i = 0; i <= pages.length - 1; i += 1) {
        const data = [];
        data.push(pages[i].date.substr(0, 10));
        data.push(' ');
        data.push(pages[i].datetime);
        pages[i].date = data.join('');
      }
      this.pages = pages[0];
    });
  },
};
</script>

<style scope>
  img{
    max-width: 100%;
    object-fit: cover;
    width: 300px;
  }
</style>
