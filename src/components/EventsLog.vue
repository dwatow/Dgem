<template lang="html">
  <div>
    <Select v-model="currOperatable" style="width:200px" placeholder="請選擇物品種類" @on-change="changeType()">
      <Option v-for="(value, key) in operatable_type" :value="key" :key="value">{{ value }}</Option>
    </Select>
    <!-- <Button type="primary" @click="search()">查詢</Button> -->
    <Page :total="paging.total" :page-size="paging.pre_page" simple size="small" @on-change="changePage($event)"></Page>
    <Table stripe :columns="columns1" :data="eventsLog"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currOperatable: '2',
      operatable_type: {
        '2': 'Dragon',
        '3': 'Tree',
      },
      actionType: [
        '初始化（建立）',
        '修改',
        '激活',
        '召回（錢包）',
        '轉賬（美金）',
      ],
      Tree: [
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
          width: 120,
        },
        {
          title: '物品',
          key: 'item',
          width: 100,
        },
        {
          title: '剩餘開採數量',
          key: 'remain',
          minWidth: 120,
        },
        {
          title: '原始開採數量',
          key: 'capacity',
          minWidth: 120,
        },
        {
          title: '目前開採進度',
          key: 'progress',
          minWidth: 120,
        },
        {
          title: '接受人 ID',
          key: 'user_id',
          minWidth: 100,
        },
      ],
      Dragon: [
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
          width: 120,
        },
        {
          title: '物品',
          key: 'item',
          width: 100,
        },
        // {
        //   title: '剩餘開採數量',
        //   key: 'remain',
        //   minWidth: 120,
        // },
        // {
        //   title: '原始開採數量',
        //   key: 'capacity',
        //   minWidth: 120,
        // },
        // {
        //   title: '目前開採進度',
        //   key: 'progress',
        //   minWidth: 120,
        // },
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
        item.action = `${this.actionType[item.type]}`
        item.item = `${this.operatable_type[`${item.operatable_type}`]} ${item.operatable_id}`
        item.remain = item.result_data.remain
        item.capacity = item.result_data.capacity
        item.progress = item.result_data.progress
        return item
      })
    },
    paging () {
      return this.$store.getters.paging('user', 'eventsLog')
    },
    columns1 () {
      return this[`${this.operatable_type[this.currOperatable]}`]
    },
  },
  methods: {
    async changePage (nextIndex) {
      const searchParams = new URLSearchParams()
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
    async changeType () {
      const searchParams = new URLSearchParams()
      searchParams.append('operatable_type', this.currOperatable)
      const nextIndex = `1` // this.$store.getters.paging('user', 'eventsLog').curr_page
      await this.$store.dispatch('EventsLog', { nextIndex, searchParams })
    },
  },
}
</script>

<style lang="css">
</style>
