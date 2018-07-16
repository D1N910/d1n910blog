<template>
    <div class="pagemanager">
      <ul class="pageList">
        <li class="pagetitle">
          <ul>
            <li class="pagemanager-title">文章标题</li>
            <li v-for="item in listdatas" :key="item.id">
              {{item.title}}
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="pagemanager-title">文章类型</li>
            <li v-for="item in listdatas" :key="item.id">
              {{item.tag}}
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="pagemanager-title">发表时间</li>
            <li v-for="item in listdatas" :key="item.id">
              {{item.time}}
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="pagemanager-title">点击量</li>
            <li v-for="item in listdatas" :key="item.id">
              {{item.clickNumber}}
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="pagemanager-title">操作</li>
            <li v-for="item in listdatas" :key="item.id">
              删除/编辑
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'PageManager',
  data() {
    return {
      listdatas: [
        {
          id: 0,
          title: 'page_manager',
          tag: '技术',
          time: '2018-07-13 18:47',
          clickNumber: 121,
        },
        {
          id: 1,
          title: 'page_manager',
          tag: '技术',
          time: '2018-07-13 18:47',
          clickNumber: 121,
        },
      ],
    };
  },
};
</script>
<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
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
ul{
  list-style: none;
}
.pageList{
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
}
.pageList li{
  margin: 8px 16px;
}
ul li.pagemanager-title{
  font-weight: bold;
  color: black;
}
.pagetitle{
  color: #771ae4;
  cursor: pointer;
  font-weight: bold;
}
ul li span{
  margin: 0 16px;
}
</style>

