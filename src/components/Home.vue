<template lang="html">
  <div>
    <div>這是首頁</div>
    <div>是否登入{{ isLogin }}</div>
    <button type="button" name="button" @click="login()" v-text="loginBtnText"></button>
    <hr>
    <button type="button" name="button" @click="test()">test</button>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('Login')
  },
  methods: {
    login () {
      this.$store.dispatch('Login')
    },
    test () {
      console.log('test')
    },
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
    loginBtnText () {
      return this.$store.getters.isLogin ? '重新登入' : '登入'
    },
  },
}
</script>

<style lang="css">
</style>
