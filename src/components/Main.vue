<style>
.layout{
  /* border: 1px solid #d7dde4; */
  /* background: #f5f7f9; */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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
.ivu-layout-sider-children {
  padding-top: 50px;
  background-image: url("../../static/images/logo1.svg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.ivu-layout-content {
  background:
  url("../../static/images/gems_decoration_L.png") no-repeat left 110%,
  url("../../static/images/gems_decoration_R.png") no-repeat right bottom,
  url("../../static/images/bg_lighting.png") no-repeat center bottom;
  background-size: auto, auto, cover;
  color: #f8f8f9;
}

.layout-header-bar.ivu-layout-header {
  background-color: #923233;
  color: #fff;
  font-size: 1.5rem;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
  background-color: #cc3536!important;
}

.ivu-table-wrapper {
  padding-top: 20px;
  border: none;
  max-width: 750px;
}

thead {
  background-image: linear-gradient(90deg, #FF8C8C 0%, rgba(148,54,54,0.90) 100%, black 100%);
  color: #f8f8f9;
}

.ivu-table th {
  background-color: transparent;
}

.ivu-table td {
  background-color: #fffc;
}

.ivu-table, .ivu-table::after, .ivu-table::before,
.ivu-table:after, .ivu-table:before,
.ivu-table-header, .ivu-table-body {
  background-color: transparent;
}

.ivu-page {
  padding: 10px 0;
}

.ivu-page li {
  background-color: rgba(148,54,54,0.90);
}

.ivu-btn-primary {
  background-color: #d26e6d;
  border-color: #d26e6d;
  color: #fff;
}

.ivu-btn-error {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.ivu-layout-sider-zero-width-trigger {
  top: 0;
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
                      <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="2-3">更換手機</MenuItem></router-link>
                      <router-link to="notStart"><MenuItem v-show="false" name="2-4">夢想卡解涷</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="3">
                      <template slot="title">
                          <Icon type="leaf"></Icon>
                          夢寶龍樹種區
                      </template>
                      <router-link to="BuyDragon"><MenuItem v-show="isFunctionEnabel" name="3-1">夢寶龍購買</MenuItem></router-link>
                      <router-link to="Dragon"><MenuItem v-show="isFunctionEnabel" name="3-2">夢寶龍激活</MenuItem></router-link>
                      <router-link to="Tree"><MenuItem v-show="isFunctionEnabel" name="3-3">夢寶樹激活</MenuItem></router-link>
                      <router-link to="Activating"><MenuItem name="3-4">開採狀況</MenuItem></router-link>
                  </Submenu>
                  <Submenu name="4">
                      <template slot="title">
                          <Icon type="social-usd"></Icon>
                          寶石卡片管理
                      </template>
                      <router-link to="Wallet"><MenuItem name="4-3">寶石庫存</MenuItem></router-link>
                      <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="4-1">外部轉帳</MenuItem></router-link>
                      <router-link to="notStart"><MenuItem v-show="isFunctionEnabel" name="4-2">平台轉帳</MenuItem></router-link>
                      <router-link to="notStart"><MenuItem name="4-4">進出明細</MenuItem></router-link>
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
      return `${this.$store.getters.self.id} ${this.$store.getters.self.name}`
    },
  },
}
</script>
