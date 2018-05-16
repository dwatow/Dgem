<template lang="html">
  <div>
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="dragon"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
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
                    console.log(params.index)
                    // this.show()
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
    dragon () {
      if (this.$store.getters.isExist('dragon', 'dragon')) {
        return this.$store.getters.dragon.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('dragon', 'dragon')
    },
  },
  methods: {
    async changePage (nextIndex) {
      await this.$store.dispatch('goToDragonPage', { nextIndex })
    },
    async Activate () {
      const currIndex = this.$store.getters.paging('user', 'childAccount').curr_page
      await this.$store.dispatch('goToDragonPage', { currIndex })
    },
  },
}
</script>

<style lang="css">
</style>
