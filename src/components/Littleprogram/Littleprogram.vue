<template>
  <div class="littleprogramContainer">
    <div class="littleprogramSon">
        <div class="littleprogramSon-tag wechat">
            微信小程序端
        </div>
        <img src="../../assets/lizdiner.png" alt="">
        <div class="littleprogramSon-title">
            莱兹食客
        </div>
        <button @click="code_show=!code_show;">Link</button>
        <div class="code" v-show="code_show">
            <div class="code_hidden" @click="code_show=!code_show;">
                X
            </div>
            <img src="../../assets/lizdiner_code.jpg" alt="">
        </div>
    </div>
    <div class="littleprogramSon">
        <div class="littleprogramSon-tag vscode">
            VSCode插件
        </div>
        <img src="https://d1n910.gallerycdn.vsassets.io/extensions/d1n910/fast-open-html-in-browser/0.0.4/1529807067353/Microsoft.VisualStudio.Services.Icons.Default" alt="">
        <div class="littleprogramSon-title">
            Fast Open HTML in Default Browser
        </div>
        <button><a href="https://marketplace.visualstudio.com/items?itemName=D1n910.fast-open-html-in-browser"> Link</a></button>
    </div>
    <div class="littleprogramSon">
        <div class="littleprogramSon-tag">
            移动端
        </div>
        <img src="../../assets/hp.png" alt="">
        <div class="littleprogramSon-title">
            解救选择恐惧症v2.0
        </div>
        <iframe src="https://ghbtns.com/github-btn.html?user=D1N910&repo=Rescue-options-phobia-WeUI-&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
        <button><a href="https://www.d1n910.cn/hp">Link</a></button>
    </div>
    <div class="littleprogramSon">
        <div class="littleprogramSon-tag">
            移动端
        </div>
        <img src="../../assets/sdm.png" alt="">
        <div class="littleprogramSon-title">
            加个圣诞帽吧 beta版本
        </div>
        <button><a href="https://www.d1n910.cn/map">Link</a></button>
    </div>
    <div class="littleprogramSon">
        <div class="littleprogramSon-tag">
            移动端
        </div>
        <img src="../../assets/dazs.jpeg" alt="">
        <div class="littleprogramSon-title">
            答案之书
        </div>
        <button><a href="https://www.d1n910.cn/dazs">Link</a></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Littleprogram',
  data() {
    return {
      code_show: false,
    };
  },
};
</script>

<style>
.littleprogramContainer{
    display: flex;
    justify-content: space-around;
    margin: 16px 0 0 0;
    flex-wrap: wrap;
}
.littleprogramSon{
    width: 200px;
    height: 200px;
    margin: 16px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 8px #9a9a9a;
}
.littleprogramSon iframe{
    position: absolute;
    left: 8px;
    bottom: 6px;
    transition: all 0.2s;
}
.littleprogramSon:hover iframe{
    bottom: 30px;
}
.littleprogramSon img{
    width: 200px;
    height: 200px;
    object-fit: cover;
}
.littleprogramSon button{
    position: absolute;
    right: 8px;
    bottom: 6px;
    padding: 2px 8px;
    border: 0px;
    outline: 0px;
    font-weight: bold;
    background-color: #771ae4;
    border-radius: 3px;
    transition: all 0.2s;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 8px #9a9a9a;
}
.littleprogramSon:hover button{
    bottom: 30px;
}
.littleprogramSon button a{
    color: #fff;
}
.littleprogramSon .littleprogramSon-title{
    position: absolute;
    height: 24px;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    bottom: -24px;
    left: 0px;
    line-height: 24px;
    transition: all 0.2s;
}
.littleprogramSon:hover .littleprogramSon-title{
    bottom: 0px;
}
.littleprogramSon-tag{
    position: absolute;
    background-color: rgba(236, 83, 42, 1);
    color: #fff;
    right: 8px;
    top: 6px;
    padding: 2px 8px;
    border: 0px;
    outline: 0px;
    font-weight: bolder;
    border-radius: 3px;
    font-size: 14px;
    box-shadow: 0 0 8px #9a9a9a;
}
.littleprogramSon .code{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
}
.littleprogramSon .code .code_hidden{
    width: 24px;
    height: 24px;
    color: #771ae4;
    font-size: 18px;
    position: absolute;
    right: 0px;
    top: 0px;
    font-weight: bolder;
    border:2px solid #771ae4;
    border-radius: 50%;
    cursor: pointer;
}
.wechat{
    background-color: rgba(121, 217, 93, 1);
}
.vscode{
    background-color: #49ace1;
}
</style>
