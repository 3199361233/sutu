<template>
  <div id="app">
    <navs></navs>
    <router-view/>
  </div>
</template>

<script>
  import home from './components/page/home.vue'
  import upload from './components/page/upload.vue'
  import navs from './components/base/navs.vue'
  import lookpic from './components/page/lookpic.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{home,navs,upload,lookpic}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
