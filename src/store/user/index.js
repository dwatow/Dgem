import actions from './actions'

export default {
  state: {
    childAccount: {},
    userDownLines: {},
  },
  getters: {
    childAccount: (state) => state.childAccount.data,
    downlines: (state) => state.userDownLines.downlines,
    self: (state) => state.userDownLines,
  },
  mutations: {
    setChildAccount (state, json) {
      state.childAccount = json
    },
    setUserDownLines (state, json) {
      state.userDownLines = json
    },
  },
  actions,
}

//   <Dropdown trigger="click" style="margin-left: 20px">
//     <a href="javascript:void(0)">
//        click 触发
//        <Icon type="arrow-down-b"></Icon>
//     </a>
//     <DropdownMenu slot="list">
//        <DropdownItem>驴打滚</DropdownItem>
//        <DropdownItem>炸酱面</DropdownItem>
//        <DropdownItem>豆汁儿</DropdownItem>
//        <DropdownItem>冰糖葫芦</DropdownItem>
//        <DropdownItem>北京烤鸭</DropdownItem>
//     </DropdownMenu>
// </Dropdown>
