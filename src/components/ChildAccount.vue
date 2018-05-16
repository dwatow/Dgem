<template lang="html">
  <div>
    <h1>子帳號</h1>
    <Button type="error" @click="addChildAccount()">增加子帳號</Button>
    <Button type="error" @click="callbackMe()">一鍵召回</Button>
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
          minWidth: 150,
        },
        {
          title: '使用者名稱',
          key: 'name',
          minWidth: 150,
        },
        {
          title: '使用者信箱',
          key: 'email',
          minWidth: 150,
        },
        {
          title: '是否被凍結帳號',
          key: 'frozen',
          minWidth: 150,
        },
        {
          title: '是否已激活',
          key: 'activated',
          minWidth: 150,
        },
      ],
    }
  },
  computed: {
    childAccount () {
      if (this.$store.getters.isExist('user', 'childAccount')) {
        return this.$store.getters.childAccount
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
      await this.$store.dispatch('addChildAccount')
      const currIndex = this.$store.getters.paging('user', 'childAccount').curr_page
      this.$store.dispatch('goToChildAccountPage', { currIndex })
      console.log(`addChildAccount: ${currIndex}`)
    },
  },
}
</script>

<style lang="css">
</style>
