<template lang="html">
  <div>
    <Page :total="pagingTree.total" :page-size="pagingTree.pre_page" simple size="small" @on-change="changeTreePage($event)"></Page>
    <Table stripe :columns="columnsTree" :data="tree"></Table>
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
        // {
        //   title: '夢寶樹激活對象',
        //   key: 'user_name',
        //   minWidth: 120,
        // },
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
        // {
        //   title: '激活',
        //   key: 'activated',
        //   minWidth: 120,
        // },
      ],
    }
  },
  computed: {
    tree () {
      if (this.$store.getters.isExist('tree', 'activeTree')) {
        return this.$store.getters.activeTree.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    pagingTree () {
      return this.$store.getters.paging('tree', 'activeTree')
    },
  },
  methods: {
    async changeTreePage (nextIndex) {
      await this.$store.dispatch('goToActiveTreePage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
.ivu-table-wrapper + .ivu-page-simple {
  margin-top: 20px;
}
</style>
