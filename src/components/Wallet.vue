<template lang="html">
  <div class="">
    <Table stripe :columns="columns1" :data="wallet"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '寶石種類',
          key: 'gem_name',
          minWidth: 120,
        },
        {
          title: '寶石種類',
          key: 'amount',
          minWidth: 120,
        },
      ],
    }
  },
  computed: {
    wallet () {
      if (this.$store.getters.isExist('wallet', 'wallet')) {
        return this.$store.getters.wallet.map((item) => {
          item.gem_name = this.$store.getters.gems[item.gem]
          return item
        })
      } else {
        return []
      }
    },
  },
}
</script>

<style lang="css">
</style>
