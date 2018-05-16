<style>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar{
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.ivu-layout-sider {
min-height: 100vh;
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                  <router-link to="/">
                    <MenuItem name="1-1">
                      <Icon type="ios-navigate"></Icon>
                      首頁
                    </MenuItem>
                  </router-link>
                  <Submenu name="2">
                      <template slot="title">
                          <Icon type="person"></Icon>
                          個人中心
                      </template>
                      <router-link to="/notStart"><MenuItem name="2-1">基本資料</MenuItem></router-link>
                      <router-link to="/ChildAccount"><MenuItem name="2-2">子母帳號</MenuItem></router-link>
                      <router-link to="/notStart"><MenuItem name="2-3">更換手機</MenuItem></router-link>
                      <router-link to="/notStart"><MenuItem name="2-4">夢想卡解涷</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="3">
                      <template slot="title">
                          <Icon type="leaf"></Icon>
                          夢寶龍樹種區
                      </template>
                      <router-link to="/BuyDragon"><MenuItem name="3-1">夢寶龍購買</MenuItem></router-link>
                      <router-link to="/Dragon"><MenuItem name="3-2">夢寶龍激活</MenuItem></router-link>
                      <router-link to="/Tree"><MenuItem name="3-3">夢寶樹激活</MenuItem></router-link>
                      <router-link to="/Activating"><MenuItem name="3-4">開採狀況</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="4">
                      <template slot="title">
                          <Icon type="social-usd"></Icon>
                          寶石卡片管理
                      </template>
                      <router-link to="/Wallet"><MenuItem name="4-3">寶石庫存</MenuItem></router-link>
                      <router-link to="/notStart"><MenuItem name="4-1">外部轉帳</MenuItem></router-link>
                      <router-link to="/notStart"><MenuItem name="4-2">平台轉帳</MenuItem></router-link>
                      <router-link to="/notStart"><MenuItem name="4-4">進出明細</MenuItem></router-link>
                  </Submenu>
                  <router-link to="/Group"><MenuItem name="5-1">
                    <Icon type="person-stalker"></Icon>
                    家族開採狀況
                  </MenuItem></router-link>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar"></Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.dispatch('Login')
    this.$store.dispatch('userDownLines', { idUser: 1 })
  },
  data () {
    return {
      isCollapsed: false,
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : '',
      ]
    },
  },
}
</script>
