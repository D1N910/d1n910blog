<template>
  <div class="pageItem">
    <div class="time">{{page.time}}</div>
    <div class="pageItem_text">
        <h1><a :href="'/#/page/pageId?pageId='+page.pageUrl">{{page.title}}</a></h1>
        <div v-html="page.content">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageItem',
  props: ['page'],
};
</script>

<style scoped>
.pageItem {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px 0 24px 0;
}
.time {
    background-color: #d5d5d5;
    padding: 0 4px;
    color: #fff;
    font-size: 14px;
    margin-bottom: 16px;
}
.pageItem h1 {
    width: 100%;
    font-size: 24px;
    color: #771ae4;
}
.pageItem p {
    margin: 2px 15px 0 15px;
    font-size: 16px;
    text-align: left;
    width: calc(100% - 30px);
}
.pageItem img {
    max-width: 100%;
}
a{
    color: #771ae4;
}
</style>
