<template>
    <div class="pagemanager">
      <div class="title">
        <textarea placeholder="请输入标题（建议30字以内）" type="text" v-model="
        PageTitle" :style="{height:getTitleLength<=23?'64px':'104px'}"></textarea>
        <div class="showtitleNumber" :style="{color:getTitleLength>=40?'#771ae4':'green'}">
          （{{getTitleLength}}/40)
        </div>
      </div>
      <div class="edit">
        <!-- <div class="fontContainer">
          <i class="iconfont icon-font"
          @mousemove="showfontcolor=true;"
          @mouseover="showfontcolor=false;"></i>
          <div class="font-color-container">
            <div class="title">
              默认样式
            </div>
            <ul class="colorlists">
              <li :style="{borderColor:'black',
                background:'black'}"> </li>
            </ul>
            <div class="title">
              最近使用
            </div>
            <div class="nousetextcolor" v-if='usecolorlist.length===0?true:false'>
              你还没使用过文字颜色
            </div>
            <ul class="colorlists" v-if='usecolorlist.length>0?true:false'>
              <li v-for="color in usecolorlist"
              :key="color.backgrounColor"
              :style="{borderColor:color.backgrounColor,background:color.borderColor}"> </li>
            </ul>
            <div class="title">
              文字颜色
            </div>
            <ul class="colorlists">
              <li v-for="color in fontcolorlist"
              :key="color.backgrounColor" :style="{borderColor:color.backgrounColor,
              background:color.borderColor}"> </li>
            </ul>
          </div>
        </div>
        <i class="iconfont icon-fuwenben_beijingyanse"></i> -->
        <a href="javascript:void(0);"
        v-for="item in filtersEditList" :key="item.methods" @click="changeStyle(item.methods)">
        <i class="iconfont" :class="item.iconName"></i></a>
        <i class="iconfont icon-fuwenben-tupian" @click="showImgContainer"></i>
        <div class="localStorage" @click="savePageContent">
          {{savePageContentText}}
        </div>
      </div>
      <div class="articleContent" contenteditable="true" id="articleContent" @keyup.9="indent">
      </div>
      <div class="tag">
        <InputRadio  v-for="item in taglists" :key="item.id" :radio="item"
        @showChecked='updatePageType'/>
      </div>
      <div class="time">
        <span>显示发表时间：</span>
        <input type="date" v-model="pageDate">
        <input type="time" v-model="pageTime">
        <span>作者：</span><input type="text" v-model="author">
      </div>
      <div class="showImgContainer" v-if="
      showImgCharuC0ontainer" @click="showImgCharuC0ontainer=false;">
        <div class="showImg" @click.stop>
          <span>在此插入图片的链接:</span>
          <input type="text" v-model="imgurl" placeholder="请输入你的地址(你可以随便玩，但是一般要图片才能输出来：）)">
          <button class="charu" @click="addImage">插入</button>
        </div>
      </div>
      <button class="upAndSubmit" @click='submit'>发表</button>
    </div>
</template>
<script>
import InputRadio from './InputRadio';

export default {
  name: 'PageManager',
  components: { InputRadio },
  data() {
    return {
      pageDate: '',
      pageTime: '',
      pageType: '日常',
      author: 'D1n910',
      savePageContentText: '缓存到本地',
      editList: [{
        methods: 'undo',
        iconName: 'icon-undo',
      }, {
        methods: 'redo',
        iconName: 'icon-redo',
      }, {
        methods: 'bold',
        iconName: 'icon-fuwenben_jiacu',
      }, {
        methods: 'italic',
        iconName: 'icon-fuwenben_xieti',
      }],
      PageTitle: '',
      imgurl: '',
      showImgCharuC0ontainer: false,
      taglists: [{
        id: 'daily',
        name: '日常',
      }, {
        id: 'technology',
        name: '技术',
      }, {
        id: 'tutorial',
        name: '教程',
      }],
      usecolorlist: [],
      fontcolorlist: [{
        backgrounColor: 'rgb(107, 195, 245)',
        borderColor: 'rgb(137, 212, 255)',
      }, {
        backgrounColor: 'rgb(98, 215, 199)',
        borderColor: 'rgb(115, 253, 234)',
      }, {
        backgrounColor: 'rgb(116, 213, 67)',
        borderColor: 'rgb(137, 250, 78)',
      }, {
        backgrounColor: 'rgb(218, 214, 87)',
        borderColor: 'rgb(255, 243, 89)',
      }, {
        backgrounColor: 'rgb(217, 128, 120)',
        borderColor: 'rgb(255, 150, 141)',
      }, {
        backgrounColor: 'rgb(243, 142, 193)',
        borderColor: 'rgb(255, 160, 208)',
      }, {
        backgrounColor: 'rgb(8, 122, 192)',
        borderColor: 'rgb(11, 132, 237)',
      }, {
        backgrounColor: 'rgb(25, 196, 176)',
        borderColor: 'rgb(24, 231, 207)',
      }, {
        backgrounColor: 'rgb(83, 183, 49)',
        borderColor: 'rgb(96, 216, 55)',
      }, {
        backgrounColor: 'rgb(213, 192, 44)',
        borderColor: 'rgb(251, 226, 49)',
      }, {
        backgrounColor: 'rgb(217, 84, 66)',
        borderColor: 'rgb(255, 101, 78)',
      }, {
        backgrounColor: 'rgb(204, 37, 121)',
        borderColor: 'rgb(234, 0, 119)',
      }, {
        backgrounColor: 'rgb(6, 101, 159)',
        borderColor: 'rgb(1, 118, 186)',
      }, {
        backgrounColor: 'rgb(0, 168, 158)',
        borderColor: 'rgb(6, 143, 134)',
      }, {
        backgrounColor: 'rgb(29, 150, 6)',
        borderColor: 'rgb(29, 177, 0)',
      }, {
        backgrounColor: 'rgb(210, 158, 4)',
        borderColor: 'rgb(248, 186, 0)',
      }, {
        backgrounColor: 'rgb(202, 31, 12)',
        borderColor: 'rgb(238, 35, 13)',
      }, {
        backgrounColor: 'rgb(173, 35, 105)',
        borderColor: 'rgb(203, 41, 122)',
      }, {
        backgrounColor: 'rgb(2, 66, 109)',
        borderColor: 'rgb(0, 78, 128)',
      }, {
        backgrounColor: 'rgb(3, 106, 101)',
        borderColor: 'rgb(1, 124, 118)',
      }, {
        backgrounColor: 'rgb(5, 96, 4)',
        borderColor: 'rgb(1, 112, 1)',
      }, {
        backgrounColor: 'rgb(217, 126, 5)',
        borderColor: 'rgb(255, 146, 1)',
      }, {
        backgrounColor: 'rgb(154, 21, 4)',
        borderColor: 'rgb(180, 23, 0)',
      }, {
        backgrounColor: 'rgb(130, 22, 80)',
        borderColor: 'rgb(153, 25, 94)',
      }, {
        backgrounColor: 'rgb(182, 181, 181)',
        borderColor: 'rgb(214, 213, 213)',
      }, {
        backgrounColor: 'rgb(124, 124, 124)',
        borderColor: 'rgb(146, 146, 146)',
      }, {
        backgrounColor: 'rgb(80, 80, 80)',
        borderColor: 'rgb(95, 95, 95)',
      }],
      showfontcolor: false,
      clickB: '',
      page: {},
    };
  },
  computed: {
    filtersEditList() {
      const editList = this.editList;
      return editList.filter((element, index, self) => {
        const selflength = self.length;
        return index <= selflength - 1;
      });
    },
    getUrl() {
      const imgurlArray = [];
      imgurlArray.push('<figure class="img-box" contenteditable="false"><img style="max-width:600px;width:100%;" src="');
      imgurlArray.push(this.imgurl);
      imgurlArray.push('"><figure>');
      const imgUrl = imgurlArray.join('');
      return imgUrl;
    },
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
  mounted() {
    const date = new Date();
    const SpageDate = [];
    SpageDate.push(date.getFullYear());
    SpageDate.push('-');
    SpageDate.push((date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1));
    SpageDate.push('-');
    SpageDate.push(date.getDate());
    const SpageTime = [];
    SpageTime.push((date.getHours() + 1 < 10 ? `0${date.getHours()}` : date.getHours()));
    SpageTime.push(':');
    SpageTime.push((date.getMinutes() + 1 < 10 ? `0${date.getMinutes()}` : date.getMinutes()));
    this.pageDate = SpageDate.join('');
    this.pageTime = SpageTime.join('');
    if (!window.localStorage.getItem('pageContent')) {
      return false;
    }
    document.getElementById('articleContent').innerHTML = window.localStorage.getItem('pageContent');
    if (!window.localStorage.getItem('pageTitle')) {
      return false;
    }
    this.PageTitle = window.localStorage.getItem('pageTitle');
    setInterval(() => { this.savePageContent(); }, 8000);
    return true;
  },
  methods: {
    updatePageType(data) {
      this.pageType = data.checkedValue;
    },
    submit() {
      this.page.date = this.pageDate;
      this.page.datetime = this.pageTime;
      this.page.anthor = this.author;
      this.page.pageContent = document.getElementById('articleContent').innerHTML;
      this.page.pageType = this.pageType;
      this.page.pageTitle = this.PageTitle;
      const postPage = this.page;
      this.$http.post(
        '/api/blogCreate',
        postPage,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    },
    savePageContent() {
      this.savePageContentText = '缓存中';
      const articleContent = document.getElementById('articleContent').innerHTML;
      window.localStorage.setItem('pageContent', articleContent);
      window.localStorage.setItem('pageTitle', this.PageTitle);
      setTimeout(() => {
        this.savePageContentText = '缓存到本地';
      }, 500);
    },
    checkHave() {
      const articleContent = document.getElementById('articleContent');
      if (articleContent.innerHTML === '') {
        articleContent.innerHTML = '<div style="color:#ededed;">请在此输入正文</div>';
      }
    },
    changeStyle(methods) {
      document.execCommand(methods, false, null);
    },
    checkContent() {
      const articleContent = document.getElementById('articleContent');
      if (articleContent.innerText === '请在此输入正文') {
        articleContent.innerHTML = '';
      }
    },
    SetMaxPageTitle(i) {
      this.PageTitle = this.PageTitle.substr(0, i - 1);
    },
    showImgContainer() {
      this.showImgCharuC0ontainer = true;
    },
    addImage() {
      this.showImgCharuC0ontainer = false;
      document.getElementById('articleContent').innerHTML += this.getUrl;
    },
  },
};
</script>
<style scoped>
*{
  padding: 0px;
  margin: 0px;
  color: #000;
}
body{
  position: relative;
}
a{
  text-decoration: none;
}
.showImgContainer{
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.showImgContainer .showImg{
  background-color: #ededed;
  padding: 10px;
  width: 400px;
  border-radius: 3px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}
.showImgContainer .showImg input{
  border: 0px;
  outline: 0px;
  width: 100%;
  height: 24px;
}
.showImgContainer .showImg .charu{
  padding: 4px 8px;
  margin: 8px;
  background: #771ae4;
  color: #fff;
  float: right;
  cursor: pointer;
}
.articleContent{
  outline: 0px;
  min-height: 600px;
  margin: 30px 0 30px 0;
  border-bottom: 1px solid #ececec;
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
.edit{
  width: 100%;
  height: 42px;
  background: #ededed;
  color: #000;
  line-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.edit .left{
  float: right;
}
.fontContainer{
  position: relative;
}
.font-color-container{
  display: flex;
  background-color: #ededed;
  position: absolute;
  z-index: 999;
  left: 0px;
  top: 32px;
  display: none;
}
.fontContainer:hover .font-color-container{
  display: block;
}
.font-color-container:hover{
  display: block;
}
.colorlists{
  list-style: none;
  width: 172px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 16px 0;
  border-bottom: 2px solid #fff;
}
.edit .title{
  font-size: 14px;
  text-align: left;
  text-indent: 8px;
}
.colorlists li{
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: 3px;
  margin: 8px;
  border: 1px solid #fff;
}
.colorlists li:hover{
  outline: 2px solid #fff;
  box-shadow:0px 0px 8px #fff;
}
.edit i{
  margin: 0 8px;
  font-size: 18px;
  cursor: pointer;
}
.origin-placeholder{
  color: #ccd0d4;
}
.nousetextcolor{
  font-size: 14px;
  text-align: center;
  color: #771ae4;
  border-bottom: 2px solid #fff;
  cursor: not-allowed;
}
.localStorage{
  height: 18px;
  font-size: 16px;
  color: #771ae4;
  border: 2px solid #771ae4;
  border-radius: 2px;
  line-height: 18px;
  cursor: pointer;
  margin: 0 0 0 30px;
  position: absolute;
  right: 16px;
}
.upAndSubmit{
  height: 24px;
  font-size: 16px;
  color: #771ae4;
  border: 2px solid #771ae4;
  border-radius: 4px;
  line-height: 12px;
  cursor: pointer;
  margin: 30px 0;
  padding: 4px 16px;
  outline: 0px;
}
.tag,.time{
  padding: 0 0 30px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #ececec;
}
.img-box, figure {
    text-align: center !important;
    margin: 0 auto 20px;
    display: block;
    width: 100%;
    outline: none;
    font-size: 0;
}
</style>

