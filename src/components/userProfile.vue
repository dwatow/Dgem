<template lang="html">
  <div>
    <h1>夢寶龍</h1>
    <Page :total="pagingDragon.total" :page-size="pagingDragon.pre_page" simple size="small" @on-change="changeDragonPage($event)"></Page>
    <Table stripe :columns="columnsDragon" :data="dragon"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnsDragon: [
        {
          title: '夢寶龍的擁有者',
          key: 'owner_name',
          minWidth: 150,
        },
        {
          title: '夢寶龍激活對象',
          key: 'user_name',
          minWidth: 150,
        },
        {
          title: '是否激活',
          key: 'activated',
          minWidth: 100,
        },
      ],
    }
  },
  computed: {
    dragon () {
      if (this.$store.getters.isExist('dragon', 'activeDragon')) {
        return this.$store.getters.activeDragon.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    pagingDragon () {
      return this.$store.getters.paging('dragon', 'activeDragon')
    },
  },
  methods: {
    async changeDragonPage (nextIndex) {
      await this.$store.dispatch('goToActiveDragonPage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
</style>
