<template>
    <div class="pagemanager">
      <div class="title">
        <textarea placeholder="请输入标题（建议30字以内）" type="text" v-model="
        PageTitle" :style="{height:getTitleLength<=23?'64px':'104px'}"></textarea>
        <div class="showtitleNumber" :style="{color:getTitleLength>=40?'#':'green'}">
          （{{getTitleLength}}/40)
        </div>
      </div>

    </div>
</template>
<script>
export default {
  name: 'PageManager',
  data() {
    return {
      PageTitle: '',
    };
  },
  computed: {
    getTitleLength() {
      let byteLen = 0;
      const len = this.PageTitle.length;
      if (this.PageTitle !== '') {
        for (let i = 0; i < len; i += 1) {
          if (this.PageTitle.charCodeAt(i) > 255) {
            byteLen += 2;
          } else {
            byteLen += 1;
          }
          if (byteLen > 80) {
            this.SetMaxPageTitle(i);
            byteLen = 80;
            break;
          }
        }
        byteLen = Math.ceil(byteLen / 2);
        return byteLen;
      }
      return 0;
    },
  },
  methods: {
    SetMaxPageTitle(i) {
      this.PageTitle = this.PageTitle.substr(0, i - 1);
    },
  },
};
</script>
<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
.pagemanager{
  text-align: left;
  padding: 30px 0;
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.title textarea{
  border:0px;
  outline: 0px;
  border-bottom: 1px solid #000;
  font-size: 34px;
  width: calc(100% - 10px);
  margin: auto;
  resize:none;
  height: 64px;
}
.showtitleNumber{
  text-align: right;
}
</style>

