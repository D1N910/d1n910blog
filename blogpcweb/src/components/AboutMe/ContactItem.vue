<template>
    <div class="ContactItem">
      <a :href="
            contactMe.contactMehref" target="_blank">
      <img :src="contactMe.contactMeimg" alt="">
       </a>
        <div class="ContactItem-text">
            {{contactMe.contactMetext}}
        </div>
    </div>
</template>
<script>
export default {
  name: 'ContactItem',
  props: ['contactMe'],
};
</script>

<style scoped>
.ContactItem{
  position: relative;
  margin: 0 30px;

}
img{
  width: 24px;
  height: 24px;
  padding: 2px;
  border: 2px solid #fff;
  box-shadow: 0 0 8px #9a9a9a;
  border-radius: 50%;
}
.ContactItem .ContactItem-text{
  background-color: #fff;
  font-size: 14px;
  box-shadow: 0 0 8px #9a9a9a;
  padding: 0 4px;
}

</style>
