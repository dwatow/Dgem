<template lang="html">
  <div>
    <Table border stripe :columns="columns1" :data="dragon"></Table>
    <Page :total="paging.total" :page-size="paging.per_page" simple size="small" @on-change="changePage($event)"></Page>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '是否激活',
          key: 'isEnable',
          minWidth: 100,
        },
        {
          title: '夢寶龍激活對象',
          key: 'user',
          minWidth: 150,
        },
        {
          title: '夢寶龍的擁有者',
          key: 'owner',
          minWidth: 150,
        },
      ],
    }
  },
  // mounted () {
  //   this.$store.dispatch('initTree')
  // },
  computed: {
    dragon () {
      if (this.$store.getters.isExist('dragon')) {
        return this.$store.getters.dragon.map((item) => {
          item.isEnable = item.owner_id !== ''
          item.owner = item.owner_id === null ? 'null' : item.owner_id
          item.user = item.user_id === null ? 'null' : item.user_id
          return item
        })
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('dragon')
    },
  },
  methods: {
    async changePage (nextIndex) {
      const json = await this.$store.dispatch('GET', `/api/dragons?page=${nextIndex}`)
      this.$store.commit('setDragonList', json)
    },
  },
}
</script>

<style lang="css">
</style>
