<template lang="html">
  <div>
    <Page :total="paging.total" :page-size="paging.per_page" simple size="small"></Page>
    <Table stripe :columns="columnsDragon" :data="activeDragon"></Table>
    <Page :total="paging.total" :page-size="paging.per_page" simple size="small"></Page>
    <Table stripe :columns="columnsTree" :data="activeTree"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnsTree: [
        {
          title: '夢寶樹的擁有者',
          key: 'owner_name',
          minWidth: 120,
        },
        {
          title: '夢寶樹激活對象',
          key: 'user_name',
          minWidth: 120,
        },
        {
          title: '夢寶樹剩餘開採數量',
          key: 'remain',
          minWidth: 170,
        },
        {
          title: '夢寶樹原始開採數量',
          key: 'capacity',
          minWidth: 170,
        },
        {
          title: '夢寶樹目前開採進度',
          key: 'progress',
          minWidth: 200,
        },
        {
          title: '激活',
          key: 'activated',
          minWidth: 120,
        },
      ],
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
    activeDragon () {
      if (!!this.$store.state.dragon.activeDragon) {
        return this.$store.getters.activeDragon.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    activeTree () {
      if (!!this.$store.state.tree.activeTree) {
        return this.$store.getters.activeTree.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('tree')
    },
  },
  methods: {
    async changePage (nextIndex) {
      const json = await this.$store.dispatch('GET', `/api/users/1/trees?owner_id=1&page=${nextIndex}`)
      this.$store.commit('setTreeList', json)
    },
  },
}
</script>

<style lang="css">
.ivu-table-wrapper + .ivu-page-simple {
  margin-top: 20px;
}
</style>
