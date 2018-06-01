<template lang="html">
  <div>
    <Select v-model="currAction" style="width:200px">
      <Option v-for="(item, index) in actionType" :value="index" :key="index">{{ item }}</Option>
    </Select>
    <Select v-model="currOperatable" style="width:200px">
        <Option v-for="(item, index) in operatable_type" :value="index" :key="index">{{ item }}</Option>
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
      currOperatable: '',
      currAction: '',
      operatable_type: [
        'User',
        'Wallet',
        'Dragon',
        'Tree',
      ],
      actionType: [
        '初始化（建立）',
        '修改',
        '激活',
        '召回（錢包）',
        '轉賬（美金）',
      ],
      columns1: [
        {
          title: '建立時間',
          key: 'created_at',
          minWidth: 100,
        },
        {
          title: '操作者 ID',
          key: 'operator_id',
          minWidth: 50,
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
        },
        {
          title: '物品',
          key: 'item',
          width: 150,
        },
        {
          title: '接受人 ID',
          key: 'user_id',
          minWidth: 50,
        },
      ],
    }
  },
  computed: {
    eventsLog () {
      return this.$store.getters.eventsLog.map(item => {
        item.action = `${this.actionType[item.type]}`
        item.item = `${this.operatable_type[item.operatable_type]} ${item.operatable_id}`
        return item
      })
    },
    paging () {
      return this.$store.getters.paging('user', 'eventsLog')
    },
  },
  methods: {
    async changePage (nextIndex) {
      const searchParams = new URLSearchParams()
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
    async search () {
      const searchParams = new URLSearchParams()
      searchParams.append('operatable_type', this.currOperatable)
      searchParams.append('type', this.currAction)
      const nextIndex = this.$store.getters.paging('tree', 'tree').curr_page
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
  },
}
</script>

<style lang="css">
</style>
