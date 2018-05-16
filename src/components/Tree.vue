<template lang="html">
  <div>
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="tree"></Table>
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
                  disabled: params.row.activated,
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
  computed: {
    tree () {
      if (this.$store.getters.isExist('tree', 'tree')) {
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
      return this.$store.getters.paging('tree', 'tree')
    },
  },
  methods: {
    async changePage (nextIndex) {
      await this.$store.dispatch('goToTreePage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
</style>
