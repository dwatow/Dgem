<template lang="html">
  <div>
    <Table :columns="columns1" :data="tree"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '是否激活',
          key: 'isEnable',
        },
        {
          title: '夢寶樹激活對象',
          key: 'user_id',
        },
        {
          title: '夢寶樹的擁有者',
          key: 'owner_id',
        },
        {
          title: '夢寶樹剩餘開採數量',
          key: 'remain',
        },
        {
          title: '夢寶樹原始開採數量',
          key: 'capacity',
        },
        {
          title: '夢寶樹目前開採進度',
          key: 'progress',
        },
      ],
    }
  },
  // mounted () {
  //   this.$store.dispatch('initTree')
  // },
  computed: {
    tree () {
      return this.$store.getters.tree.map((item) => {
        item.isEnable = item.owner_id !== ''
        return item
      })
    },
  },
}
</script>

<style lang="css">
</style>
