webpackJsonp([1],{"+skl":function(e,t){},"2dCh":function(e,t){},"7U5f":function(e,t){},"7cu6":function(e,t){},"GJK/":function(e,t){},KgQc:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("NoCs")},null,null).exports,i=n("Xxa5"),o=n.n(i),c=n("exGp"),u=n.n(c),p=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Layout",[n("Sider",{attrs:{breakpoint:"md",collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[n("Menu",{class:e.menuitemClasses,attrs:{"active-name":"2-1",theme:"dark",width:"auto"}},[n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"person"}}),e._v("\n                      個人中心\n                  ")],1),e._v(" "),n("router-link",{attrs:{to:"notStart"}},[n("MenuItem",{attrs:{name:"2-1"}},[e._v("基本資料")])],1),e._v(" "),n("router-link",{attrs:{to:"ChildAccount"}},[n("MenuItem",{attrs:{name:"2-2"}},[e._v("子母帳號")])],1),e._v(" "),n("router-link",{attrs:{to:"notStart"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"2-3"}},[e._v("更換手機")])],1)],2),e._v(" "),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"leaf"}}),e._v("\n                      夢寶龍樹種區\n                  ")],1),e._v(" "),n("router-link",{attrs:{to:"BuyDragon"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"3-1"}},[e._v("夢寶龍購買")])],1),e._v(" "),n("router-link",{attrs:{to:"Dragon"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"3-2"}},[e._v("夢寶龍激活")])],1),e._v(" "),n("router-link",{attrs:{to:"Tree"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"3-3"}},[e._v("夢寶樹激活")])],1),e._v(" "),n("router-link",{attrs:{to:"Activating"}},[n("MenuItem",{attrs:{name:"3-4"}},[e._v("開採狀況")])],1)],2),e._v(" "),n("Submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"social-usd"}}),e._v("\n                      寶石卡片管理\n                  ")],1),e._v(" "),n("router-link",{attrs:{to:"Wallet"}},[n("MenuItem",{attrs:{name:"4-3"}},[e._v("寶石庫存")])],1),e._v(" "),n("router-link",{attrs:{to:"notStart"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"4-1"}},[e._v("外部轉帳")])],1),e._v(" "),n("router-link",{attrs:{to:"notStart"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"4-2"}},[e._v("平台轉帳")])],1),e._v(" "),n("router-link",{attrs:{to:"notStart"}},[n("MenuItem",{attrs:{name:"4-4"}},[e._v("進出明細")])],1),e._v(" "),n("router-link",{attrs:{to:"TransferUSD"}},[n("MenuItem",{directives:[{name:"show",rawName:"v-show",value:e.isFunctionEnabel,expression:"isFunctionEnabel"}],attrs:{name:"4-5"}},[e._v("美金轉帳")])],1)],2),e._v(" "),n("router-link",{attrs:{to:"Group"}},[n("MenuItem",{attrs:{name:"5-1"}},[n("Icon",{attrs:{type:"person-stalker"}}),e._v("\n                家族開採狀況\n              ")],1)],1)],1),e._v(" "),n("div",{attrs:{slot:"trigger"},slot:"trigger"})],1),e._v(" "),n("Layout",[n("Header",{staticClass:"layout-header-bar"}),e._v(" "),n("Content",{style:{margin:"20px",background:"#fff",minHeight:"220px"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")({data:function(){return{isCollapsed:!1}},computed:{isFunctionEnabel:function(){return!this.$store.getters.self.is_child_account},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}},l,!1,function(e){n("bo6Y")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"noStart"},[t("img",{attrs:{src:"https://fakeimg.pl/350x200/fff/000/?text=Comming soon...&font=bebas",alt:""}})])}]};var g=n("VU/8")({},m,!1,function(e){n("m1Mv")},null,null).exports,h=n("gRE1"),f=n.n(h),v={data:function(){var e=this;return{columns1:[{title:"ID",key:"id",width:50},{title:"夢寶龍的擁有者",key:"owner_name",minWidth:150},{title:"夢寶龍激活對象",key:"user_name",minWidth:150},{title:"選擇激活對象",key:"operate",width:200,render:function(t,n){return t("div",[t("Dropdown",{props:{trigger:"click"},class:"defaultStyle",on:{"on-click":function(t){n.row.operate=e.dropdownItems.filter(function(e){return e.id===t}).shift()}}},[t("span",[n.row.operate.id+" "+n.row.operate.name+" ",t("Icon",{props:{type:"arrow-down-b"},style:{marginRight:"5px"}})]),t("DropdownMenu",{slot:"list"},e.dropdownItems.sort(function(e,t){return e.id-t.id}).map(function(e){return t("DropdownItem",{props:{name:e.id,disabled:n.row.activated}},e.id+" "+e.name)}))])])}},{title:"動作",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small",disabled:n.row.activated},on:{click:function(){var t=n.row.id;e.activate({data:{user_id:n.row.operate.id},idDragon:t})}}},"激活")])}}]}},computed:{dragon:function(){return this.$store.getters.isExist("dragon","dragon")?this.$store.getters.dragon.map(function(e){return e.owner_name=e.owner&&e.owner.name||"未指定",e.user_name=e.user&&e.user.name||"未指定",e.operate={id:"",name:"選一個對象"},e}):[]},paging:function(){return this.$store.getters.paging("dragon","dragon")},dropdownItems:function(){var e={};return e[""+this.$store.getters.self.id]=this.$store.getters.self,this.$store.getters.allChildAccount.forEach(function(t){e[t.id]=t}),this.$store.getters.downlines.forEach(function(t){e[t.id]=t}),f()(e).filter(function(e){return!e.activated})}},methods:{changePage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToDragonPage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()},activate:function(e){var t=this;return u()(o.a.mark(function n(){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=t.$store.getters.paging("dragon","dragon").curr_page,n.next=4,t.$store.dispatch("activateDragon",e);case 4:t.$store.dispatch("goToDragonPage",{nextIndex:r}),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:t.$store.dispatch("userDownLines",{idUser:t.$store.getters.myId}),t.$store.dispatch("allChildAccount"),t.$store.dispatch("whoAmI");case 12:case"end":return n.stop()}},n,t,[[0,7]])}))()}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Page",{attrs:{total:e.paging.total,"page-size":e.paging.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changePage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columns1,data:e.dragon}})],1)},staticRenderFns:[]};var x=n("VU/8")(v,w,!1,function(e){n("GJK/")},null,null).exports,_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h4",[this._v("目前美金額度")]),this._v(" "),t("span",{staticClass:"currUSD"},[this._v(this._s(this.currUSD))]),this._v("元\n")])},staticRenderFns:[]};var k=n("VU/8")({computed:{currUSD:function(){return this.$store.getters.isExist("wallet","wallet")?this.$store.getters.wallet.filter(function(e){return 4===e.gem}).pop().amount:0}}},_,!1,function(e){n("luSp")},"data-v-6ad4b0c2",null).exports,y={components:{currUsdWallet:k},data:function(){var e=this;return{columns1:[{title:"夢寶樹的擁有者",key:"owner_name",minWidth:120},{title:"夢寶樹激活對象",key:"user_name",minWidth:120},{title:"選擇激活對象",key:"operate",width:200,render:function(t,n){return t("div",[t("Dropdown",{props:{trigger:"click",disabled:!0},class:"defaultStyle",on:{"on-click":function(t){n.row.operate=e.dropdownItems.filter(function(e){return e.id===t}).shift()}}},[t("span",[n.row.operate.id+" "+n.row.operate.name+" ",t("Icon",{props:{type:"arrow-down-b"},style:{marginRight:"5px"}})]),t("DropdownMenu",{slot:"list"},e.dropdownItems.sort(function(e,t){return e.id-t.id}).map(function(e){return t("DropdownItem",{props:{name:e.id,disabled:n.row.activated}},e.id+" "+e.name)}))])])}},{title:"動作",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small",disabled:n.row.activated},on:{click:function(){var t=n.row.id;e.activate({data:{user_id:n.row.operate.id},idTree:t})}}},"激活")])}}]}},computed:{tree:function(){return this.$store.getters.isExist("tree","tree")?this.$store.getters.tree.map(function(e){return e.owner_name=e.owner&&e.owner.name||"未指定",e.user_name=e.user&&e.user.name||"未指定",e.operate={id:"",name:"選一個對象"},e}):[]},paging:function(){return this.$store.getters.paging("tree","tree")},dropdownItems:function(){var e={};return e[""+this.$store.getters.self.id]=this.$store.getters.self,this.$store.getters.allChildAccount.forEach(function(t){e[t.id]=t}),f()(e).filter(function(e){return e.activated})}},methods:{changePage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToTreePage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()},buy:function(){var e=this;return u()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={user_id:"1"},r=e.$store.getters.paging("tree","tree").curr_page,t.next=4,e.$store.dispatch("buyTree",{data:n});case 4:return t.next=6,e.$store.dispatch("WalletPage");case 6:e.$store.dispatch("goToTreePage",{nextIndex:r});case 7:case"end":return t.stop()}},t,e)}))()},activate:function(e){var t=this;return u()(o.a.mark(function n(){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$store.getters.paging("tree","tree").curr_page,n.next=3,t.$store.dispatch("activateTree",e);case 3:t.$store.dispatch("goToTreePage",{nextIndex:r});case 4:case"end":return n.stop()}},n,t)}))()}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("currUsdWallet"),e._v(" "),n("Button",{attrs:{type:"error"},on:{click:function(t){e.buy()}}},[e._v("買一顆全新夢寶樹")]),e._v(" "),n("Page",{attrs:{total:e.paging.total,"page-size":e.paging.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changePage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columns1,data:e.tree}})],1)},staticRenderFns:[]};var $=n("VU/8")(y,b,!1,function(e){n("7U5f")},null,null).exports,I={data:function(){return{columnsDragon:[{title:"夢寶龍的擁有者",key:"owner_name",minWidth:150},{title:"夢寶龍激活對象",key:"user_name",minWidth:150},{title:"是否激活",key:"activated",minWidth:100}],columnsTree:[{title:"夢寶樹的擁有者",key:"owner_name",minWidth:120},{title:"夢寶樹剩餘開採數量",key:"remain",minWidth:170},{title:"夢寶樹原始開採數量",key:"capacity",minWidth:170},{title:"夢寶樹目前開採進度",key:"progress",minWidth:200}]}},computed:{dragon:function(){return this.$store.getters.isExist("dragon","activeDragon")?this.$store.getters.activeDragon.map(function(e){return e.owner_name=e.owner&&e.owner.name||"未指定",e.user_name=e.user&&e.user.name||"未指定",e}):[]},tree:function(){return this.$store.getters.isExist("tree","activeTree")?this.$store.getters.activeTree.map(function(e){return e.owner_name=e.owner&&e.owner.name||"未指定",e.user_name=e.user&&e.user.name||"未指定",e}):[]},pagingDragon:function(){return this.$store.getters.paging("dragon","activeDragon")},pagingTree:function(){return this.$store.getters.paging("tree","activeTree")}},methods:{changeDragonPage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToActiveDragonPage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()},changeTreePage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToActiveTreePage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("夢寶龍")]),e._v(" "),n("Page",{attrs:{total:e.pagingDragon.total,"page-size":e.pagingDragon.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changeDragonPage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columnsDragon,data:e.dragon}}),e._v(" "),n("h1",[e._v("夢寶樹")]),e._v(" "),n("Page",{attrs:{total:e.pagingTree.total,"page-size":e.pagingTree.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changeTreePage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columnsTree,data:e.tree}})],1)},staticRenderFns:[]};var A=n("VU/8")(I,T,!1,function(e){n("oX/h")},null,null).exports,U={data:function(){var e=this;return{columns1:[{title:"ID",key:"id",width:50},{title:"使用者名稱",key:"name",minWidth:150},{title:this.$store.getters.gems[0],key:"gem0",minWidth:100},{title:this.$store.getters.gems[1],key:"gem1",minWidth:100},{title:this.$store.getters.gems[2],key:"gem2",minWidth:100},{title:this.$store.getters.gems[3],key:"gem3",minWidth:100},{title:"是否被凍結帳號",key:"frozen",minWidth:150},{title:"是否已激活",key:"activated",width:150},{title:"動作",key:"action",width:150,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:e.isFunctionEnabel?"success":"primary",disabled:e.isFunctionEnabel&&e.$store.getters.self.id!==n.row.id},on:{click:function(t){if(e.isFunctionEnabel)e.$store.dispatch("whoAmI"),n.row.action.label="變身";else{var r=e.$store.getters.childAccount.filter(function(e){return e.id===n.row.id}).shift();e.$store.commit("IAm",r),n.row.action.label="恢復身份"}}}},n.row.action.label)])}}]}},computed:{isFunctionEnabel:function(){return this.$store.getters.self.is_child_account},childAccount:function(){return this.$store.getters.isExist("user","childAccount")?this.$store.getters.childAccount.map(function(e){return e.action={label:"變身"},e}):[]},paging:function(){return this.$store.getters.paging("user","childAccount")}},methods:{changePage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToChildAccountPage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()},addChildAccount:function(){var e=this;return u()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$store.getters.paging("user","childAccount").curr_page,t.next=3,e.$store.dispatch("addChildAccount");case 3:e.$store.dispatch("goToChildAccountPage",{nextIndex:n});case 4:case"end":return t.stop()}},t,e)}))()}}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("子帳號")]),e._v(" "),n("Button",{attrs:{type:"error",disabled:e.isFunctionEnabel},on:{click:function(t){e.addChildAccount()}}},[e._v("增加子帳號")]),e._v(" "),n("Page",{attrs:{total:e.paging.total,"page-size":e.paging.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changePage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columns1,data:e.childAccount}})],1)},staticRenderFns:[]};var S=n("VU/8")(U,D,!1,function(e){n("2dCh")},null,null).exports,C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("Table",{attrs:{stripe:"",columns:this.columns1,data:this.wallet}})],1)},staticRenderFns:[]};var E=n("VU/8")({data:function(){return{columns1:[{title:"寶石種類",key:"gem_name",minWidth:120},{title:"寶石種類",key:"amount",minWidth:120}]}},computed:{wallet:function(){var e=this;return this.$store.getters.isExist("wallet","wallet")?this.$store.getters.wallet.map(function(t){return t.gem_name=e.$store.getters.gems[t.gem],t}):[]}}},C,!1,function(e){n("Usyk")},null,null).exports,W={components:{currUsdWallet:k},data:function(){var e=this;return{columns1:[{title:"ID",key:"id",width:50},{title:"夢寶龍的擁有者",key:"owner_name",minWidth:150},{title:"夢寶龍激活對象",key:"user_name",minWidth:150},{title:"動作",key:"action",maxWidth:100,render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small",disabled:n.row.activated},on:{click:function(){var t=n.row.id;e.buy({data:{owner_id:e.$store.getters.self.id},idDragon:t})}}},"購買")])}}]}},computed:{allDragon:function(){return this.$store.getters.isExist("dragon","allDragon")?this.$store.getters.allDragon.map(function(e){return e.owner_name=e.owner&&e.owner.name||"未指定",e.user_name=e.user&&e.user.name||"未指定",e.operate={id:"",name:"選一個對象"},e}):[]},paging:function(){return this.$store.getters.paging("dragon","allDragon")}},methods:{changePage:function(e){var t=this;return u()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("goToAllDragonPage",{nextIndex:e});case 2:case"end":return n.stop()}},n,t)}))()},buy:function(e){var t=this;return u()(o.a.mark(function n(){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$store.getters.paging("dragon","allDragon").curr_page,n.next=3,t.$store.dispatch("buyDragon",e);case 3:return n.next=5,t.$store.dispatch("WalletPage");case 5:t.$store.dispatch("goToAllDragonPage",{nextIndex:r});case 6:case"end":return n.stop()}},n,t)}))()}}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("currUsdWallet"),e._v(" "),n("Page",{attrs:{total:e.paging.total,"page-size":e.paging.pre_page,simple:"",size:"small"},on:{"on-change":function(t){e.changePage(t)}}}),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columns1,data:e.allDragon}})],1)},staticRenderFns:[]};var F=n("VU/8")(W,P,!1,function(e){n("KgQc")},null,null).exports,L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("自己")]),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columnsUser,data:e.self}}),e._v(" "),n("h1",[e._v("下線")]),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columnsUser,data:e.downlines}})],1)},staticRenderFns:[]};var R=n("VU/8")({data:function(){return{columnsUser:[{title:"ID",key:"id",width:50},{title:"e-mail",key:"email",minWidth:150},{title:"是否涷結",key:"frozen",minWidth:100},{title:"是否子帳號",key:"activated",minWidth:100},{title:"是否激活",key:"activated",minWidth:100}]}},computed:{self:function(){return[this.$store.getters.self]},downlines:function(){return this.$store.getters.downlines}}},L,!1,function(e){n("ZfN3")},null,null).exports,M={components:{currUsdWallet:k},data:function(){return{id:0,amount:0,busy:!1}},computed:{currUSD:function(){return this.$store.getters.isExist("wallet","wallet")?this.$store.getters.wallet.filter(function(e){return 4===e.gem}).pop().amount:0},myId:function(){return this.$store.getters.myId}},methods:{transferTo:function(){var e=this;return u()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.busy=!0,n={user_id:e.id,amount:e.amount},t.next=5,e.$store.dispatch("TransferUSD",{data:n});case 5:return t.next=7,e.$store.dispatch("WalletPage");case 7:e.busy=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.busy=!1;case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()}}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h4",[e._v("轉帳對象")]),e._v(" "),n("Input",{staticClass:"input-id",staticStyle:{width:"300px"},attrs:{placeholder:""+e.myId,clearable:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),e._v(" "),n("currUsdWallet"),e._v(" "),n("div",[n("h4",[e._v("轉出額度")]),e._v(" "),n("Input",{staticClass:"input-amount",staticStyle:{width:"300px"},attrs:{placeholder:"0",clearable:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),e._v(" "),n("div",[n("Alert",{attrs:{type:"error"}},[e._v("接下來的行為，將不可回溯!!")])],1),e._v(" "),n("Button",{attrs:{type:"error"},on:{click:function(t){e.transferTo()}}},[e._v("轉帳")]),e._v(" "),e.busy?n("Spin",[e._v("轉帳中...")]):e._e()],1)},staticRenderFns:[]};var z=n("VU/8")(M,q,!1,function(e){n("jIAq")},"data-v-66c03a3b",null).exports,N={data:function(){var e=this;return{areaType:{true:"SignIn",false:"SignUp"},switchAreaType:!0,SignIn:{username:"",password:""},SignInRule:{username:[{required:!0,message:"填入要登入的使用者帳號",trigger:"blur"}],password:[{required:!0,message:"填入要登入的使用者帳號相對應的密碼",trigger:"blur"},{type:"string",min:6,message:"長度要有 6 個字元",trigger:"blur"}]},SignUp:{name:"",email:"",password:"",passwordCheck:"",upline_id:0},SignUpRule:{name:[{required:!0,message:"填入要註冊的使用者帳號",trigger:"blur"}],email:[{required:!0,message:"填入要註冊的 email",trigger:"blur"},{type:"email",message:"請檢查 email 格式，是否有誤",trigger:"blur"}],password:[{required:!0,validator:function(t,n,r){""===n?r(new Error("填入一組密碼，符合長度 6 個字元以上")):(""!==e.SignUp.passwordCheck&&e.$refs.SignUp.validateField("passwordCheck"),r())},trigger:"blur"}],passwordCheck:[{required:!0,validator:function(t,n,r){""===n?r(new Error("再填入一樣的密碼")):n!==e.SignUp.password?r(new Error("兩邊不一樣，請再確認")):r()},trigger:"blur"}],upline_id:[{required:!0,type:"number",validator:function(e,t,n){t<1?n(new Error("填入上線的 ID 號碼")):n()},trigger:"blur"}]}}},methods:{signIn:function(){var e,t=this;this.$refs.SignIn.validate((e=u()(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}return e.prev=1,e.next=4,t.$store.dispatch("Login",{password:t.SignIn.password,name:t.SignIn.username});case 4:t.$router.push("/Main"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),t.$Message.error("帳號密碼不匹配");case 11:e.next=14;break;case 13:t.$Message.error("帳號密碼格式出錯");case 14:case"end":return e.stop()}},e,t,[[1,7]])})),function(t){return e.apply(this,arguments)}))},signUp:function(){var e,t=this;this.$refs.SignUp.validate((e=u()(o.a.mark(function e(n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return r={email:t.SignUp.email,name:t.SignUp.name,password:t.SignUp.password,upline_id:t.SignUp.upline_id},e.next=4,t.$store.dispatch("CreateUser",r);case 4:t.switchAreaType=!0,e.next=8;break;case 7:t.$Message.error("註冊失敗");case 8:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},reset:function(){this.$refs.SignUp.resetFields()}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginIn"},[n("i-switch",{model:{value:e.switchAreaType,callback:function(t){e.switchAreaType=t},expression:"switchAreaType"}}),e._v(" "),n("span",[e._v(e._s(e.areaType[e.switchAreaType]))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!!e.switchAreaType,expression:"!!switchAreaType"}],staticClass:"SignIn"},[n("Form",{ref:"SignIn",attrs:{model:e.SignIn,rules:e.SignInRule,"label-position":"top"}},[n("FormItem",{attrs:{label:"User Name",prop:"username"}},[n("Input",{attrs:{type:"text"},model:{value:e.SignIn.username,callback:function(t){e.$set(e.SignIn,"username",t)},expression:"SignIn.username"}})],1),e._v(" "),n("FormItem",{attrs:{label:"Password",prop:"password"}},[n("Input",{attrs:{type:"password"},model:{value:e.SignIn.password,callback:function(t){e.$set(e.SignIn,"password",t)},expression:"SignIn.password"}})],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){e.signIn()}}},[e._v("SignIn")])],1)],1)],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.switchAreaType,expression:"!switchAreaType"}],staticClass:"SignUp"},[n("Form",{ref:"SignUp",attrs:{model:e.SignUp,rules:e.SignUpRule,"label-position":"top"}},[n("FormItem",{attrs:{label:"User Name",prop:"name"}},[n("Input",{attrs:{type:"text"},model:{value:e.SignUp.name,callback:function(t){e.$set(e.SignUp,"name",t)},expression:"SignUp.name"}})],1),e._v(" "),n("FormItem",{attrs:{label:"email",prop:"email"}},[n("Input",{attrs:{type:"email"},model:{value:e.SignUp.email,callback:function(t){e.$set(e.SignUp,"email",t)},expression:"SignUp.email"}})],1),e._v(" "),n("FormItem",{attrs:{label:"Password",prop:"password"}},[n("Input",{attrs:{type:"password"},model:{value:e.SignUp.password,callback:function(t){e.$set(e.SignUp,"password",t)},expression:"SignUp.password"}})],1),e._v(" "),n("FormItem",{attrs:{label:"Confirm",prop:"passwordCheck"}},[n("Input",{attrs:{type:"password"},model:{value:e.SignUp.passwordCheck,callback:function(t){e.$set(e.SignUp,"passwordCheck",t)},expression:"SignUp.passwordCheck"}})],1),e._v(" "),n("FormItem",{attrs:{label:"Upline Id",prop:"upline_id"}},[n("Input",{model:{value:e.SignUp.upline_id,callback:function(t){e.$set(e.SignUp,"upline_id",t)},expression:"SignUp.upline_id"}})],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){e.signUp()}}},[e._v("SignUp")]),e._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:function(t){e.reset()}}},[e._v("Reset")])],1)],1)],1)],1)},staticRenderFns:[]};var B=n("VU/8")(N,G,!1,function(e){n("7cu6")},null,null).exports,V=this;r.default.use(p.a);var j,O=new p.a({routes:[{path:"/",redirect:"/Login"},{path:"/Login",name:"Login",component:B},{path:"/Main",name:"Main",component:d,redirect:"/Main/notStart",children:[{path:"notStart",name:"notStart",component:g},{path:"Dragon",name:"Dragon",component:x},{path:"Tree",name:"Tree",component:$},{path:"Activating",name:"Activating",component:A},{path:"ChildAccount",name:"ChildAccount",component:S},{path:"Wallet",name:"Wallet",component:E},{path:"TransferUSD",name:"TransferUSD",component:z},{path:"BuyDragon",name:"BuyDragon",component:F},{path:"Group",name:"Group",component:R}]}]});O.beforeEach((j=u()(o.a.mark(function e(t,n,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n.name||"Login"===t.name||void 0!==O.app.$store&&0!==O.app.$store.getters.token.length||O.push("/Login"),"Login"!==n.name){e.next=7;break}return e.next=4,O.app.$store.dispatch("whoAmI");case 4:O.app.$store.dispatch("allChildAccount"),O.app.$store.dispatch("userDownLines",{idUser:O.app.$store.getters.myId}),O.app.$store.dispatch("WalletPage");case 7:if(void 0===O.app.$store){e.next=34;break}e.t0=t.name,e.next="Activating"===e.t0?11:"BuyDragon"===e.t0?15:"Tree"===e.t0?19:"Dragon"===e.t0?19:"ChildAccount"===e.t0?19:"Group"===e.t0?28:"Wallet"===e.t0?31:"TransferUSD"===e.t0?31:34;break;case 11:return e.next=13,O.app.$store.dispatch("goToActiveDragonPage",{nextIndex:1});case 13:return O.app.$store.dispatch("goToActiveTreePage",{nextIndex:1}),e.abrupt("break",34);case 15:return e.next=17,O.app.$store.dispatch("goToAllDragonPage",{nextIndex:1});case 17:return O.app.$store.dispatch("WalletPage"),e.abrupt("break",34);case 19:if(O.app.$store.getters.self.is_child_account){e.next=25;break}return e.next=22,O.app.$store.dispatch("whoAmI");case 22:return O.app.$store.dispatch("allChildAccount"),e.next=25,O.app.$store.dispatch("goTo"+t.name+"Page",{nextIndex:1});case 25:return O.app.$store.dispatch("userDownLines",{idUser:O.app.$store.getters.myId}),O.app.$store.dispatch("WalletPage"),e.abrupt("break",34);case 28:return e.next=30,O.app.$store.dispatch("userDownLines",{idUser:O.app.$store.getters.myId});case 30:return e.abrupt("break",34);case 31:return e.next=33,O.app.$store.dispatch("WalletPage");case 33:return e.abrupt("break",34);case 34:r();case 35:case"end":return e.stop()}},e,V)})),function(e,t,n){return j.apply(this,arguments)}));var Q=O,K=n("NYxO"),J=n("woOf"),Y=n.n(J),H={state:{childAccount:{},userDownLines:{},allChildAccount:{},mySelf:{}},getters:{childAccount:function(e){return e.childAccount.data},downlines:function(e){return e.userDownLines.downlines},self:function(e){return e.mySelf},allChildAccount:function(e){return e.allChildAccount},myId:function(e){return e.mySelf.id}},mutations:{allChildAccount:function(e,t){e.allChildAccount=t},setChildAccount:function(e,t){e.childAccount=t},setUserDownLines:function(e,t){e.userDownLines=t},IAm:function(e,t){e.mySelf=t}},actions:{allChildAccount:function(e){var t=this,n=e.dispatch,r=e.commit,a=e.getters;return u()(o.a.mark(function e(){var s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.myId,e.next=3,n("GET","/api/users/"+s+"/child-accounts?hello=world&activated=1");case 3:i=e.sent,r("allChildAccount",i);case 5:case"end":return e.stop()}},e,t)}))()},goToChildAccountPage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=e.getters,i=t.nextIndex;return u()(o.a.mark(function e(){var t,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||1,t=s.myId,e.next=4,r("GET","/api/users/"+t+"/child-accounts?page="+i);case 4:return c=e.sent,e.next=7,r("accountAndWallet",{array:c.data});case 7:c.data=e.sent,a("setChildAccount",c);case 9:case"end":return e.stop()}},e,n)}))()},addChildAccount:function(e){var t=this,n=e.dispatch,r=e.commit,a=e.getters;return u()(o.a.mark(function e(){var s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.myId,e.next=3,n("POST",{path:"/api/users/"+s+"/child-accounts"});case 3:return i=e.sent,e.next=6,n("accountAndWallet",{array:i.data});case 6:i.data=e.sent,r("setChildAccount",i);case 8:case"end":return e.stop()}},e,t)}))()},userDownLines:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=t.idUser;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("GET","/api/users/"+s);case 2:t=e.sent,a("setUserDownLines",t);case 4:case"end":return e.stop()}},e,n)}))()},childAccountWallet:function(e,t){var n=this,r=e.dispatch,a=(e.commit,t.idUser);return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("GET","/api/users/"+a+"/wallets?page=1");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,n)}))()},accountAndWallet:function(e,t){var n,r=this,a=e.dispatch,s=(e.commit,t.array);if("Array"===s.constructor.name){var i=[];return s.forEach((n=u()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("childAccountWallet",{idUser:t.id});case 2:e.sent.data.forEach(function(e){t["gem"+e.gem]=t.activated?e.amount:""}),i.push(Y()({},t));case 5:case"end":return e.stop()}},e,r)})),function(e){return n.apply(this,arguments)})),i}return[]},whoAmI:function(e){var t=this,n=e.dispatch,r=e.commit;return u()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("GET","/api/users/me");case 2:a=e.sent,r("IAm",a);case 4:case"end":return e.stop()}},e,t)}))()}}},Z=n("Dd8w"),X=n.n(Z),ee=n("mtWM"),te=n.n(ee),ne={CreateUser:function(e,t){var n=this,r=(e.dispatch,e.getters);return u()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={Accept:"application/json","Content-Type":"application/json"},e.next=3,te.a.post(r.host+"/api/users",t,{headers:a});case 3:case"end":return e.stop()}},e,n)}))()},Login:function(e,t){var n=this,r=(e.dispatch,e.commit),a=e.getters,s=t.name,i=t.password;return u()(o.a.mark(function e(){var t,c,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json"},c={grant_type:"password",username:s,password:i,client_id:"2",client_secret:"vZ08ruaFRkqnDgzWJhnUImmIBtNON19YAzdKWSRF"},e.next=4,te.a.post(a.host+"/oauth/token",c,{headers:t});case 4:u=e.sent,r("token",u.data);case 6:case"end":return e.stop()}},e,n)}))()},LoginQRcode:function(e){var t=this,n=(e.dispatch,e.commit),r=e.getters;return u()(o.a.mark(function e(){var a,s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={"Content-Type":"application/json"},s={grant_type:"qrcode",id:""+r.qrcodeUser.id,password:""+r.qrcodeUser.password,client_id:"2",client_secret:"vZ08ruaFRkqnDgzWJhnUImmIBtNON19YAzdKWSRF"},e.next=4,te.a.post(r.host+"/oauth/token",s,{headers:a});case 4:i=e.sent,n("token",i.data);case 6:case"end":return e.stop()}},e,t)}))()},CreateQRcode:function(e){var t=this,n=e.commit,r=e.getters;return u()(o.a.mark(function e(){var a,s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={Accept:"application/json"},s={id:10,password:"h%1`2{A/A",qrcode_url:"https://uim.dreamsgem.net/applets?action=/applets/dreamsgem/auth/scan-login/10"},e.next=4,te.a.post(r.host+"/api/qrcodes",s,{headers:a});case 4:i=e.sent,n("setQRcodeData",i.data);case 6:case"end":return e.stop()}},e,t)}))()},GET:function(e,t){var n=this,r=e.getters;return u()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.get(""+r.host+t,{headers:X()({},r.headers)});case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",a.data);case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e,n)}))()},POST:function(e,t){var n=this,r=e.getters,a=t.path,s=t.data;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.post(""+r.host+a,s,{headers:X()({},r.headers,{"Content-Type":"application/json"})});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,n)}))()},PUT:function(e,t){var n=this,r=e.getters,a=t.path,s=t.data;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.put(""+r.host+a,s,{headers:X()({},r.headers,{"Content-Type":"application/json"})});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,n)}))()}},re={state:{allDragon:{},dragon:{},activeDragon:{}},getters:{allDragon:function(e){return e.allDragon.data},dragon:function(e){return e.dragon.data},activeDragon:function(e){return e.activeDragon.data}},mutations:{setAllDragonList:function(e,t){e.allDragon=t},setDragonList:function(e,t){e.dragon=t},setActiveDragonList:function(e,t){e.activeDragon=t}},actions:{buyDragon:function(e,t){var n=this,r=e.dispatch,a=t.idDragon,s=t.data;return u()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("PUT",{path:"/api/dragons/"+a,data:s});case 2:case"end":return e.stop()}},e,n)}))()},activateDragon:function(e,t){var n=this,r=e.dispatch,a=t.idDragon,s=t.data;return u()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("PUT",{path:"/api/dragons/"+a,data:s});case 2:case"end":return e.stop()}},e,n)}))()},goToAllDragonPage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=t.nextIndex;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=s||1,e.next=3,r("GET","/api/dragons?page="+s);case 3:t=e.sent,a("setAllDragonList",t);case 5:case"end":return e.stop()}},e,n)}))()},goToDragonPage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=e.getters,i=t.nextIndex;return u()(o.a.mark(function e(){var t,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||1,t=s.myId,e.next=4,r("GET","/api/dragons?owner_id="+t+"&activated=0&page="+i);case 4:c=e.sent,a("setDragonList",c);case 6:case"end":return e.stop()}},e,n)}))()},goToActiveDragonPage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=e.getters,i=t.nextIndex;return u()(o.a.mark(function e(){var t,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||1,t=s.myId,e.next=4,r("GET","/api/dragons?user_id="+t+"&page="+i);case 4:c=e.sent,a("setActiveDragonList",c);case 6:case"end":return e.stop()}},e,n)}))()}}},ae={state:{tree:{},activeTree:{}},getters:{tree:function(e){return e.tree.data},activeTree:function(e){return e.activeTree.data}},mutations:{setTreeList:function(e,t){e.tree=t},setActiveTreeList:function(e,t){e.activeTree=t}},actions:{buyTree:function(e,t){var n=this,r=e.dispatch,a=e.getters,s=t.data;return u()(o.a.mark(function e(){var t,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.myId,i="/api/users/"+t+"/trees",e.next=4,r("POST",{path:i,data:s});case 4:case"end":return e.stop()}},e,n)}))()},activateTree:function(e,t){var n=this,r=e.dispatch,a=e.getters,s=t.idTree,i=t.data;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.myId,e.next=3,r("PUT",{path:"/api/users/"+t+"/trees/"+s,data:i});case 3:case"end":return e.stop()}},e,n)}))()},goToTreePage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=e.getters,i=t.nextIndex;return u()(o.a.mark(function e(){var t,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||1,t=s.myId,e.next=4,r("GET","/api/users/"+t+"/trees?owner_id="+t+"&activated=0&page="+i);case 4:c=e.sent,a("setTreeList",c);case 6:case"end":return e.stop()}},e,n)}))()},goToActiveTreePage:function(e,t){var n=this,r=e.dispatch,a=e.commit,s=e.getters,i=t.nextIndex;return u()(o.a.mark(function e(){var t,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||1,t=s.myId,e.next=4,r("GET","/api/users/"+t+"/trees?user_id="+t+"&page="+i);case 4:c=e.sent,a("setActiveTreeList",c);case 6:case"end":return e.stop()}},e,n)}))()}}},se={state:{wallet:{}},getters:{wallet:function(e){return e.wallet.data},idUsdWallet:function(e,t){return t.isExist("wallet","wallet")?e.wallet.data.filter(function(e){return 4===e.gem}).shift().id:0}},mutations:{setWallet:function(e,t){e.wallet=t}},actions:{WalletPage:function(e){var t=this,n=e.dispatch,r=e.commit,a=e.getters;return u()(o.a.mark(function e(){var s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.myId,e.next=3,n("GET","/api/users/"+s+"/wallets?page=1");case 3:i=e.sent,r("setWallet",i);case 5:case"end":return e.stop()}},e,t)}))()},TransferUSD:function(e,t){var n=this,r=e.dispatch,a=e.getters,s=t.data;return u()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.idUsdWallet,e.next=3,r("POST",{path:"/api/wallets/"+t+"/transfers",data:s});case 3:case"end":return e.stop()}},e,n)}))()}}};r.default.use(K.a);var ie=new K.a.Store({state:{host:"http://dreamsgem-staging.ap-northeast-1.elasticbeanstalk.com",token:"",token_type:"",qrCode:{}},getters:{isExist:function(e){return function(t,n){return!!e[t][n].data&&"Array"===e[t][n].data.constructor.name}},isLogin:function(e){return 0!==e.token.length},token:function(e){return e.token},host:function(e){return e.host},paging:function(e){return function(t,n){return{total:e[t][n].total,pre_page:e[t][n].per_page,curr_page:e[t][n].current_page}}},headers:function(e){return{Accept:"application/json",Authorization:e.token_type+" "+e.token}},gems:function(){return["七彩寶石","多喜寶石","多福寶石","多財寶石","美金"]},qrcode:function(e){return e.qrCode.qrcode_url},qrcodeUser:function(e){return e.qrCode}},mutations:{token:function(e,t){e.token=t.access_token,e.token_type=t.token_type},setQRcodeData:function(e,t){e.qrCode=t}},actions:ne,modules:{user:H,dragon:re,tree:ae,wallet:se}}),oe=n("BTaQ"),ce=n.n(oe);n("+skl");r.default.use(ce.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:Q,store:ie,components:{App:s},template:"<App/>"})},NoCs:function(e,t){},Usyk:function(e,t){},ZfN3:function(e,t){},bo6Y:function(e,t){},jIAq:function(e,t){},luSp:function(e,t){},m1Mv:function(e,t){},"oX/h":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c46e8db0731c9cc2c85a.js.map