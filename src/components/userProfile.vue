<template lang="html">
  <div class="userProfile">
    <h1>個人資料</h1>
    <Form>
      <FormItem label="修改䁥稱" inline>
        <i-switch v-model="isReadyOnly" @on-change="change()">
          <span slot="open">開</span>
          <span slot="close">關</span>
        </i-switch>
      </FormItem>
     <FormItem>
       <Input v-model="userName" :readonly="!isReadyOnly" :class="mode" placeholder="Enter something..." style="width: 300px"></Input>
       <Button v-show="isReadyOnly" @click="modifyUserName()" type="primary">決定䁥稱</Button>
     </FormItem>
   </Form>

    <h2>夢寶龍 × {{ this.$store.getters.paging('dragon', 'activeDragon').total }}</h2>
    <Page :total="pagingDragon.total" :page-size="pagingDragon.pre_page" simple size="small" @on-change="changeDragonPage($event)"></Page>
    <Table :columns="columnsDragon" :data="dragon"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadyOnly: false,
      columnsDragon: [
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
      ],
    }
  },
  computed: {
    dragon () {
      if (this.$store.getters.isExist('dragon', 'activeDragon')) {
        return this.$store.getters.activeDragon.map((item) => {
          item.owner_name = (item.owner && item.owner.name) || '未指定'
          item.user_name = (item.user && item.user.name) || '未指定'
          return item
        })
      } else {
        return []
      }
    },
    pagingDragon () {
      return this.$store.getters.paging('dragon', 'activeDragon')
    },
    mode () {
      return {
        readyOnly: !this.isReadyOnly,
      }
    },
    userName: {
      get: function () {
        return this.$store.getters.myName
      },
      set: function (newId) {
        this.$store.commit('myName', newId)
      },
    },
  },
  methods: {
    async changeDragonPage (nextIndex) {
      await this.$store.dispatch('goToActiveDragonPage', { nextIndex })
    },
    async change () {
      if (!this.isReadyOnly) {
        await this.$store.dispatch('whoAmI')
      }
    },
    async modifyUserName () {
      await this.$store.dispatch('modifyMyName')
      this.$store.dispatch('goToActiveDragonPage', { nextIndex: 1 })
      this.isReadyOnly = false
    },
  },
}
</script>

<style lang="css">
</style>
