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
          minWidth: 150,
        },
        {
          title: 'e-mail',
          key: 'email',
          minWidth: 150,
        },
        {
          title: '是否涷結',
          key: 'frozen',
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
      return this.$store.getters.downLines
    },
  },
}
</script>

<style lang="css">
</style>
