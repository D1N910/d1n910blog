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
        <div class="fontContainer">
          <i class="iconfont icon-font" @mousemove="
        showfontcolor=true;" @mouseover="showfontcolor=false;"></i>
          <div class="font-color-container">
          <ul class="colorlists">
            <li v-for="color in fontcolorlist" :key="
            color.backgrounColor" :style="{borderColor:color.backgrounColor,
            background:color.borderColor}"> </li>
          </ul>
        </div>
        </div>
        <i class="iconfont icon-fuwenben_beijingyanse"></i>
        <i class="iconfont icon-fuwenben_jiacu"></i>
        <i class="iconfont icon-fuwenben_xieti"></i>
        <i class="iconfont icon-fuwenben-tupian"></i>
        <div class="left">
            <i class="iconfont icon-undo"></i>
            <i class="iconfont icon-redo"></i>
        </div>
      </div>
      <div class="articleContent" contenteditable="true">
        <p class="origin-placeholder">请在此输入正文</p>
      </div>
      <div class="tag">
        <InputRadio  v-for="item in taglists" :key="item.id" :radio="item"/>
      </div>
    </div>
</template>
<script>
import InputRadio from './InputRadio';

export default {
  name: 'PageManager',
  components: { InputRadio },
  data() {
    return {
      PageTitle: '',
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
  color: #000;
}
.articleContent{
  outline: 0px;
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
.articleContent{
  height: 600px;
}
.edit{
  width: 100%;
  height: 32px;
  background: #ededed;
  color: #000;
  text-align: center;
  line-height: 32px;
  display: flex;
  justify-content: center;
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
</style>

