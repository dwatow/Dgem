<template lang="html">
  <div>
    <h4>目前美金額度</h4>
    <span class="currUSD">{{ currUSD }}</span>元
  </div>
</template>
<script>
export default {
  computed: {
    currUSD () {
      if (this.$store.getters.isExist('wallet', 'wallet')) {
        const wallet = this.$store.getters.wallet.filter(wallet => wallet.gem === 4).pop()
        return wallet.amount
      } else {
        return 0
      }
    },
  },
}
</script>

<style lang="css" scoped>
.currUSD {
  font-size: 2em;
}
</style>
