<template lang="html">
  <div>
    <h1>子帳號</h1>
    <Button type="error" @click="addChildAccount()" :disabled="isChildAccount">增加子帳號</Button>
    <!-- <Button type="primary" @click="callbackMe()">一鍵召回</Button> -->
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="childAccount"></Table>
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
          width: 50,
        },
        {
          title: '使用者名稱',
          key: 'name',
          minWidth: 150,
        },
        // {
        //   title: '使用者信箱',
        //   key: 'email',
        //   minWidth: 270,
        // },
        {
          title: this.$store.getters.gems[0],
          key: 'gem0',
          minWidth: 100,
        },
        {
          title: this.$store.getters.gems[1],
          key: 'gem1',
          minWidth: 100,
        },
        {
          title: this.$store.getters.gems[2],
          key: 'gem2',
          minWidth: 100,
        },
        {
          title: this.$store.getters.gems[3],
          key: 'gem3',
          minWidth: 100,
        },
        {
          title: '是否被凍結帳號',
          key: 'frozen',
          minWidth: 150,
        },
        {
          title: '是否已激活',
          key: 'activated',
          width: 150,
        },
        {
          title: '動作',
          key: 'action',
          width: 120,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: this.isChildAccount ? 'success' : 'primary',
                  disabled: this.isChildAccount && this.$store.getters.self.id !== params.row.id,
                },
                on: {
                  click: (e) => {
                    if (this.isChildAccount) {
                      this.$store.dispatch('whoAmI')
                    } else {
                      const childAccount = this.$store.getters.childAccount.filter(item => item.id === params.row.id).shift()
                      this.$store.commit('IAm', childAccount)
                    }
                  },
                },
              }, this.labelTitle),
            ])
          },
        },
      ],
    }
  },
  computed: {
    isChildAccount () {
      // child account not enable
      return this.$store.getters.self.is_child_account
    },
    labelTitle () {
      return this.$store.getters.self.is_child_account ? '恢復身份' : '變身'
    },
    childAccount () {
      if (this.$store.getters.isExist('user', 'childAccount')) {
        return this.$store.getters.childAccount.map(item => {
          item.action = { label: '變身' }
          return item
        }).sort((a, b) => parseInt(a.id) - parseInt(b.id))
      } else {
        return []
      }
    },
    paging () {
      return this.$store.getters.paging('user', 'childAccount')
    },
  },
  methods: {
    async changePage (nextIndex) {
      await this.$store.dispatch('goToChildAccountPage', { nextIndex })
    },
    async addChildAccount () {
      const nextIndex = this.$store.getters.paging('user', 'childAccount').curr_page
      await this.$store.dispatch('addChildAccount')
      this.$store.dispatch('goToChildAccountPage', { nextIndex })
    },
  },
}
</script>

<style lang="css">
</style>
