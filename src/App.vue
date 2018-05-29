<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from '@/components/Home'
export default {
  // components: { Home },
  name: 'App',
}
</script>

<style>
#app {
  background:
  url("../static/images/gems_decoration_L.png") no-repeat left 110%,
  url("../static/images/gems_decoration_R.png") no-repeat right bottom,
  url("../static/images/bg_lighting.png") no-repeat center bottom;
  background-size: auto, auto, cover;
  color: #f8f8f9;
}

.ivu-form .ivu-form-item-label {
  color: #f8f8f9;
}
</style>
