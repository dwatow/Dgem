<template lang="html">
  <div class="">
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="wallet"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gems: [
        '七彩寶石',
        '多喜寶石',
        '多福寶石',
        '多財寶石',
        '美金',
      ],
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
          item.gem_name = this.gems[item.gem]
          return item
        })
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('wallet', 'wallet')
    },
  },
  methods: {
    async changePage (nextIndex) {
      await this.$store.dispatch('goToWalletPage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
</style>
