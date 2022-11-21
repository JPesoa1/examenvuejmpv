<template>
  <MenuComponentVue/>
  <router-view></router-view>
</template>

<script>
import MenuComponentVue from './components/MenuComponent.vue';
export default {
  name: 'App',
  components: {
    MenuComponentVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
