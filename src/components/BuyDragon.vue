<template lang="html">
  <div>
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="allDragon"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: 'ID',
          key: 'id',
          minWidth: 20,
        },
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
          minWidth: 50,
        },
        {
          title: '操作',
          key: 'operate',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h('Dropdown', {
                props: {
                  trigger: 'click',
                },
                class: 'defaultStyle',
                on: {
                  'on-click': (value) => {
                    params.row.operate = [...this.$store.getters.downlines, ...this.$store.getters.allChildAccount].filter(item => item.id === value).shift()
                  },
                },
              }, [
                h('span', [`${params.row.operate.id} ${params.row.operate.name} `, h('Icon', {
                  props: {
                    type: 'arrow-down-b',
                  },
                  style: {
                    marginRight: '5px',
                  },
                })]),
                h('DropdownMenu', {
                  slot: 'list',
                }, [...this.$store.getters.downlines, ...this.$store.getters.allChildAccount].map(item => {
                  return h('DropdownItem', {
                    props: {
                      name: item.id,
                    },
                  }, `${item.id} ${item.name}`)
                }),
                ),
              ]),
            ])
          },
        },
        {
          title: '動作',
          key: 'action',
          maxWidth: 100,
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
                    const idDragon = params.row.id
                    this.buy({ data: { 'owner_id': params.row.operate.id }, idDragon })
                  },
                },
              }, '購買'),
            ])
          },
        },
      ],
    }
  },
  computed: {
    allDragon () {
      if (this.$store.getters.isExist('dragon', 'allDragon')) {
        return this.$store.getters.allDragon.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          item.operate = { id: '', name: '選一個對象' }
          return item
        })
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('dragon', 'allDragon')
    },
  },
  methods: {
    async changePage (nextIndex) {
      await this.$store.dispatch('goToAllDragonPage', { nextIndex })
    },
    async buy (payload) {
      const nextIndex = this.$store.getters.paging('dragon', 'allDragon').curr_page
      await this.$store.dispatch('buyDragon', payload)
      this.$store.dispatch('goToAllDragonPage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
</style>
