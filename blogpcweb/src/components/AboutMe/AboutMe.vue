<template>
    <div class="aboutme">
        <h1>
            About Me 关于我
        </h1>
        <img src="../../assets/logo.png" alt="">
        <p class="title">D1N910 (pengjiangao)</p>
        <p>
            自认是Github上最肥的🐔客、程序🦍、PM、水瓶座纠结强迫症、在校大三大学生，现居广东深圳
        </p>
        <p>
            主修信息于计算科学，就读于数学于统计学院
        </p>
        <p>
            曾任<i>校数学建模协会</i>网络部部长、副会长，<i>校计算机俱乐部</i>宣传部部长，<i>学院计算机协会</i>副会长，
            <i>学院网络部</i>部长，<i>网园资讯工作室</i>页面部核心干事，现在均已“荣休”
        </p>
        <p>主要使用Vue,JQuary框架开发，开发过PC端、移动端、微信小程序端等完整可用的产品，学的比较庞杂，基础不是很过关，现在在补充中</p>
        <p>不折腾就会死，看到好的项目比赛就带头冲锋，为了顺利完成项目不择手段</p>
        <p>热爱写教程、码字、写有趣的小工具，热衷分享与开源
        </p>
        <h1>
            CONTACT ME 联系我
        </h1>
        <div class="contactContainer">
            <ContactItem v-for="contactMe in contactMes" :key="
            contactMe.contactMehref" :contactMe="contactMe" />
        </div>
    </div>
</template>
<script>
import ContactItem from './ContactItem';

export default {
  name: 'AboutMe',
  data() {
    return {
      contactMes: [{
        contactMehref: 'https://github.com/D1N910',
        contactMeimg: 'https://wx3.sinaimg.cn/mw1024/006ES7aSgy1ftdct9vo5uj303n03kjr9.jpg',
        contactMetext: 'D1n910',
      }, {
        contactMehref: 'https://coding.net/u/d1n910',
        contactMeimg: 'https://wx3.sinaimg.cn/mw1024/006ES7aSgy1ftdct9asbhj303k03ka9w.jpg',
        contactMetext: 'D1n910',
      }, {
        contactMehref: 'https://space.bilibili.com/12324653/#/',
        contactMeimg: 'https://wx2.sinaimg.cn/mw1024/006ES7aSgy1ftdct9aak2j303x03kmwy.jpg',
        contactMetext: 'D1n910',
      }, {
        contactMehref: 'https://www.weibo.com/6100747726/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1',
        contactMeimg: 'https://wx4.sinaimg.cn/mw1024/006ES7aSgy1ftdcu1tb5kj304j03k747.jpg',
        contactMetext: '枉送一命',
      }, {
        contactMehref: 'mailto: 260002330@qq.com',
        contactMeimg: 'https://wx2.sinaimg.cn/mw1024/006ES7aSgy1ftdct9efk5j303k03kt8j.jpg',
        contactMetext: '260002330@qq.com',
      }],
    };
  },
  components: { ContactItem },
};
</script>

<style scoped>
h1{
    font-size: 18px;
    margin: 36px 0 0 0;
}
img{
    width: 100px;
    height: 100px;
    padding: 2px;
    border: 2px solid #fff;
    box-shadow: 0 0 8px #9a9a9a;
    border-radius: 50%;
    margin: 30px;
}
.title{
    font-weight: bold;
}
p{
    margin: 16px auto;
    width:600px;
    max-width: 100%;
}
.contactContainer{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin:16px 0 24px 0;
}
</style>

