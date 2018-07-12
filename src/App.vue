<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <div class="border"></div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default {
  name: 'App',
  components: { Footer, Nav },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: calc(100% - 42px);
  padding-bottom: 42px;
  position: relative;
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
}
a{
  text-decoration: none;
}
.border{
    padding: 30px 0;
    width: calc(100% - 300px);
    min-width: 150px;
    border-bottom: 2px solid #ededed;
    margin: 30px auto;
}
</style>
