<template lang="html">
  <div>
    <Table stripe :columns="columns1" :data="tree"></Table>
    <Page :total="paging.total" :page-size="paging.per_page" simple size="small"></Page>
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
          minWidth: 120,
        },
        {
          title: '夢寶樹激活對象',
          key: 'user_id',
          minWidth: 120,
        },
        {
          title: '夢寶樹的擁有者',
          key: 'owner_id',
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
      ],
    }
  },
  // mounted () {
  //   this.$store.dispatch('initTree')
  // },
  computed: {
    tree () {
      if (this.$store.getters.isExist('tree') &&
        this.$store.getters.tree.constructor.name === 'Array') {
        return this.$store.getters.tree.map((item) => {
          item.isEnable = item.owner_id !== ''
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
      const json = await this.$store.dispatch('GET', `/api/users/1/tree?page=${nextIndex}`)
      this.$store.commit('setTreeList', json)
    },
  },
}
</script>

<style lang="css">
</style>
