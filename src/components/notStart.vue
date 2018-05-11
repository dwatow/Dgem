<template lang="html">
  <div>
    <img :src="`https://picsum.photos/${imgSize}`" alt="">
  </div>
</template>

<script>
export default {
  computed: {
    imgSize () {
      return this.$store.getters.imgSize || 200
    },
  },
}
</script>

<style lang="css">
</style>
