<template lang="html">
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <MenuItem name="key" v-for="(value, key) in menuItems">{{ value }}</MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  data () {
    return {
      menuItems: {
        'home': '首頁',
        'profile': '個人中心',
        'game': '夢寶龍樹種區',
        'money': '寶石卡片區',
        'group': '家族開採情況'
      }
    }
  }
}
</script>

<style lang="css">
</style>
