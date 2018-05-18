<template lang="html">
  <div>
    TransferUSD
  </div>
</template>

<script>
export default {
  methods: {
    transferTo () {
      const data = {
        'user_id': '5',
        'amount': '30',
      }
      this.$store.dispatch('TransferUSD', data)
    },
  },
}
</script>

<style lang="css">
</style>
