<template>
  <div class="index">
    <div class="logo">
      <img src="https://wx4.sinaimg.cn/mw690/006ES7aSgy1ftdctro1r2j30590590sn.jpg" alt="" @click="jumptoback">
    </div>
    <div v-if='jump>=3'>
      <input type="text" placeholder="在这里输入神秘的密码" v-model="daima">
      <div @click="innerbg">进入后台</div>
      <div @click="innerbg">取消</div>
    </div>
    <h1>{{ msg }}</h1>
    <h2>根据下面的链接跟踪我</h2>
    <ul>
      <li>
        <a
          href="https://github.com/d1n910"
          target="_blank"
        >
          Github
        </a>
      </li>
        <li>
        <a
          href="https://space.bilibili.com/12324653/#/"
          target="_blank"
        >
          bilibili
        </a>
      </li>
    </ul>
    <h2>小工具</h2>
    <ul>
      <li>
        <a
          href="https://www.d1n910.cn/hp"
          target="_blank"
        >
          解救选择恐惧症2.0
        </a>
      </li>
        <li>
        <a
          href="https://www.d1n910.cn/dazs"
          target="_blank"
        >
          答案之书
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      msg: '这里是D1n910的blog',
      jump: 0,
      daima: '',
      url: '',
    };
  },
  methods: {
    jumptoback() {
      this.jump += 1;
      if (this.daima !== '') {
        const url = [];
        url.push('https://www.d1n910.cn/api/jumptobg?daima=');
        url.push(this.daima);
        const geturl = url.join('');
        this.$http.get(
          geturl,
        ).then((response) => {
          const pages = response.bodyText;
          if (pages !== 'OK') {
            window.location.href = JSON.parse(response.bodyText).ddd;
          }
        });
        this.jump = 0;
        this.daima = '';
      }
    },
    innerbg() {
      this.jump = 0;
      this.daima = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  margin: 24px 0 0 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #771ae4;
}
</style>
