<template lang="html">
  <div>
    <h1>自己</h1>
    <Table stripe :columns="columnsUser" :data="self"></Table>
    <h1>下線</h1>
    <Table stripe :columns="columnsUser" :data="downlines"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnsUser: [
        {
          title: 'ID',
          key: 'id',
          width: 50,
        },
        {
          title: 'e-mail',
          key: 'email',
          minWidth: 150,
        },
        {
          title: '總開採數',
          key: 'total_capacity',
          minWidth: 100,
        },
        {
          title: '未開採',
          key: 'total_remain',
          minWidth: 100,
        },
        {
          title: '擁有子帳號',
          key: 'total_user_count',
          minWidth: 100,
        },
        {
          title: '是否子帳號',
          key: 'activated',
          minWidth: 100,
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
    self () {
      return [this.$store.getters.self]
    },
    downlines () {
      return this.$store.getters.downlines
    },
  },
}
</script>

<style lang="css" scoped>
h1 {
  margin-top: 20px;
}
</style>
