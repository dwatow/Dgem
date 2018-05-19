<template lang="html">
  <div>
    <div>是否登入{{ isLogin }}</div>
    <button type="button" name="button" @click="login()" v-text="loginBtnText"></button>
    <hr>
    <button type="button" name="button" @click="test()">test</button>

  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.dispatch('Login')
    },
    test () {
      // this.$store.dispatch('CreateQRcode')
      console.log(this.$router)
      this.$router.push('/Main')
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
  async created () {
    await this.$store.dispatch('Login')
    this.$store.dispatch('userDownLines', { idUser: 1 })
    this.$store.dispatch(`allChildAccount`)
    await this.$store.dispatch(`WalletPage`)
    // await this.$store.dispatch('CreateQRcode')
  },
}
</script>

<style lang="css">
</style>
