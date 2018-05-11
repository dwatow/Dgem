<template lang="html">
  <div>
    <div>這是首頁</div>
    <button type="button" name="button" @click="Go()">Go!!!</button>
    <span>{{ isLogin }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    Go () {
      this.$store.dispatch('Login')
    },
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
  },
}
</script>

<style lang="css">
</style>
