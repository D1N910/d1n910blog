<template>
  <div class="pageItem">
    <div class="time">{{page.date}}</div>
    <div class="pageItem_text">
        <h1><router-link :to="'/pageId?pageId='+page.id">{{page.pageTitle}}</router-link >
        <button>{{page.pageType}}</button></h1>
        <h2>{{page.anthor||'匿名'}}</h2>
        <div class="pageContent" v-html="page.pageContent || ''">
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
.pageItem h2 {
    font-size: 14px;
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
.pageContent{
    text-align: left;
}
</style>
