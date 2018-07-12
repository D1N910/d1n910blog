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
        time: '2018-07-11',
        title: '这是我的第一篇文章',
        content: '<p>学习V学习VueVue学习Vue学习Vue学习Vue学习VueVue学习Vue学习Vue学习Vue学习VueVue学习Vue学习Vue学习Vue学习VueVue学习Vue学习Vue学习Vue学习VueVue学习Vue学习Vue学习VueueVue学习Vue学习Vue学习Vue</p><img src="https://wx3.sinaimg.cn/mw690/68fe876aly1fsif8rrjdkj21kw23vx6r.jpg" alt="">',
        pageUrl: 'xuexixuexi1',
      },
    };
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
