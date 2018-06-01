<template lang="html">
  <div>
    <Select v-model="currOperatableId" style="width:200px" placeholder="請選擇物品 Id">
        <Option v-for="item in ids" :value="item.id" :key="item.id">{{ item.title }}</Option>
    </Select>
    <Button type="primary" @click="search()">查詢</Button>
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="eventsLog"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currOperatableId: '',
      actionType: [
        '初始化（建立）',
        '修改',
        '激活',
        '召回（錢包）',
        '轉賬（美金）',
      ],
      columns1: [
        {
          title: '時間',
          key: 'created_at',
          minWidth: 150,
        },
        {
          title: '操作者 ID',
          key: 'operator_id',
          minWidth: 100,
        },
        {
          title: '操作行為',
          key: 'action',
          width: 100,
        },
        {
          title: '物品',
          key: 'item',
          width: 100,
        },
        {
          title: '金額',
          key: 'amount',
          align: 'right',
          width: 150,
        },
        {
          title: '接受人 ID',
          key: 'user_id',
          minWidth: 100,
        },
      ],
    }
  },
  computed: {
    eventsLog () {
      return this.$store.getters.eventsLog.map(item => {
        console.log(item)
        item.action = `${this.actionType[item.type]}`
        item.item = `${this.$store.getters.gems[item.result_data.gem]}`
        item.amount = item.result_data.amount
        return item
      })
    },
    paging () {
      return this.$store.getters.paging('user', 'eventsLog')
    },
    ids () {
      return this.$store.getters.wallet.map(item => {
        item.title = `${this.$store.getters.gems[item.gem]}`
        return item
      })
    },
  },
  methods: {
    async changePage (nextIndex) {
      const searchParams = new URLSearchParams()
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
    async search () {
      const searchParams = new URLSearchParams()
      searchParams.append('operatable_type', `1`)
      if (this.currOperatableId) {
        searchParams.append('operatable_id', this.currOperatableId)
      }
      const nextIndex = this.$store.getters.paging('user', 'eventsLog').curr_page
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
  },
}
</script>

<style lang="css">
</style>
