<template lang="html">
  <div class="">
    <Table stripe :columns="columns1" :data="wallet"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '寶石種類',
          key: 'gem_name',
          minWidth: 120,
          render: (h, params) => {
            return h('div', [
              h('img', {
                class: {
                  'gems-shadow': true,
                },
                domProps: {
                  src: `static/images/icon_gem${params.index}.svg`,
                },
              }),
              h('span', params.row.gem_name),
            ])
          },
        },
        {
          title: '寶石種類',
          key: 'amount',
          minWidth: 120,
        },
      ],
    }
  },
  computed: {
    wallet () {
      if (this.$store.getters.isExist('wallet', 'wallet')) {
        return this.$store.getters.wallet.map((item) => {
          item.gem_name = this.$store.getters.gems[item.gem]
          return item
        })
      } else {
        return []
      }
    },
  },
}
</script>

<style lang="css">
.gems-shadow {
  -webkit-filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.7))
}

.ivu-table-cell div img, .ivu-table-cell div span {
  vertical-align: middle;
}
</style>
