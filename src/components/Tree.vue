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
        {
          title: '動作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  disabled: params.row.isEnable,
                },
                on: {
                  click: () => {
                    // this.$store.dispatch('')
                    // console.log(params)
                    // const List = this.$store.getters.tree
                    // List.filter((item) => item.index)
                  },
                },
              }, '激活'),
            ])
          },
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
</style>
