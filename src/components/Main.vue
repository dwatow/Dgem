<style>
.layout{
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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
.menu-item i {
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
                <Menu active-name="2-1" theme="dark" width="auto" :class="menuitemClasses">
                  <Submenu name="2">
                      <template slot="title">
                          <Icon type="person"></Icon>
                          個人中心
                      </template>
                      <router-link to="userProfile"><MenuItem name="2-1">基本資料</MenuItem></router-link>
                      <router-link to="ChildAccount"><MenuItem name="2-2">子母帳號</MenuItem></router-link>
                      <!-- <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="2-3">更換手機</MenuItem></router-link> -->
                      <router-link to="notStart"><MenuItem v-show="false" name="2-4">夢想卡解涷</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="3">
                      <template slot="title">
                          <Icon type="leaf"></Icon>
                          夢寶龍樹種區
                      </template>
                      <!-- <router-link to="BuyDragon"><MenuItem v-show="isFunctionEnabel" name="3-1">夢寶龍購買</MenuItem></router-link> -->
                      <router-link to="Dragon"><MenuItem v-show="isFunctionEnabel" name="3-2">夢寶龍激活</MenuItem></router-link>
                      <router-link to="Tree"><MenuItem v-show="isFunctionEnabel" name="3-3">夢寶樹激活</MenuItem></router-link>
                      <router-link to="EventsLog"><MenuItem name="3-4">操作明細查詢</MenuItem></router-link>
                      <router-link to="Activating"><MenuItem name="3-5">開採狀況</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="4">
                      <template slot="title">
                          <Icon type="social-usd"></Icon>
                          寶石卡片管理
                      </template>
                      <router-link to="Wallet"><MenuItem name="4-3">寶石庫存</MenuItem></router-link>
                      <!-- <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="4-1">外部轉帳</MenuItem></router-link>
                      <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="4-2">平台轉帳</MenuItem></router-link> -->
                      <router-link to="WalletLog"><MenuItem name="4-4">進出明細</MenuItem></router-link>
                      <router-link to="TransferUSD"><MenuItem v-show="isFunctionEnabel" name="4-5">美金轉帳</MenuItem></router-link>
                  </Submenu>
                  <router-link to="Group"><MenuItem name="5-1">
                    <Icon type="person-stalker"></Icon>
                    家族開採狀況
                  </MenuItem></router-link>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">
                  <span>{{ userHeadUpDisplay }}</span>
                </Header>
                <Content :style="{padding: '20px', minHeight: '220px'}">
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
  data () {
    return {
      isCollapsed: false,
    }
  },
  computed: {
    isFunctionEnabel () {
      // child account not show
      return !this.$store.getters.self.is_child_account
    },
    menuitemClasses: () => {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : '',
      ]
    },
    userHeadUpDisplay () {
      return `${this.$store.getters.self.name}`
    },
  },
}
</script>
