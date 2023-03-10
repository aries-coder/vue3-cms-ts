(function(){var e={5453:function(e,t,n){"use strict";var o=n(9242),r=n(3396),s=n(4870);function a(e,t,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div")}var i=n(1260),c=(0,r.aZ)({setup(){window.$message=(0,i.U)()}}),u=n(89);const l=(0,u.Z)(c,[["render",a]]);var d=l,h=d,m=n(3424),f=n(906);const p={class:"app"};var g=(0,r.aZ)({name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("n-message-provider"),o=(0,r.up)("router-view"),a=(0,r.up)("n-loading-bar-provider"),i=(0,r.up)("n-config-provider");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,s.SU)(h))])),_:1}),(0,r.Wm)(i,{locale:(0,s.SU)(m.Z),"date-locale":(0,s.SU)(f.Z)},{default:(0,r.w5)((()=>[(0,r.Wm)(a,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o)])),_:1})])),_:1},8,["locale","date-locale"])])}}});const v=(0,u.Z)(g,[["__scopeId","data-v-4bb6422e"]]);var y=v,b=n(3824),w=n(3155),C=n(6542),Z=n(5393),L=n(2638),k=n(74),P=n(2695),M=n(3273),I=n(7762),E=n(6914),O=n(6765),A=n(2666),D=n(9522),U=n(1407),S=n(1727),q=n(4605),N=n(3638),T=n(2034),_=n(9762),j=n(4922),R=n(4786),$=n(254),x=n(2644),z=n(344),F=n(318),G=n(8322),K=n(3282),W=n(7108),B=n(5210),J=n(3695),H=n(2371),Q=n(5033);const V=(0,C.Z)({components:[Z.Z,L.Z,k.Z,P.Z,M.Z,I.ZP,E.Z,O.Z,A.Z,D.ZP,U.Z,S.Z,q.ZP,N.Z,T.Z,_.Z,j.Z,R.g,$.Z,x.Z,z.Z,F.Z,G.Z,K.Z,W.Z,B.ZP,J.Z,H.J,Q.ZP]});function X(e){e.use(V)}function Y(e){X(e)}const ee=(0,o.ri)(y);Y(ee),ee.use(w.ZP),(0,w.PQ)(),ee.use(b.Z),ee.mount("#app")},3824:function(e,t,n){"use strict";var o=n(3224),r=n(678);const s=[{path:"/",redirect:"/main"},{path:"/login",name:"login",component:()=>n.e(599).then(n.bind(n,8599))},{path:"/main",name:"main",redirect:o.Z.getCache("defaultRoutePath")??"/main/analysis/overview",component:()=>n.e(507).then(n.bind(n,6382)),children:[]},{path:"/:pathMatch(.*)*",component:()=>n.e(89).then(n.bind(n,8438))}],a=(0,r.p7)({history:(0,r.r5)("/"),routes:s});a.beforeEach((e=>{if("/login"!==e.path){const e=o.Z.getCache("token");if(!e)return"/login"}else{const e=o.Z.getCache("token");if(e)return"/main"}})),t["Z"]=a},901:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(912).then(n.bind(n,2912));t["default"]={path:"/main/analysis/dashboard",name:"dashboard",component:o,children:[]}},8979:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(489).then(n.bind(n,1489));t["default"]={path:"/main/analysis/overview",name:"overview",component:o,children:[]}},1666:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(479).then(n.bind(n,479));t["default"]={path:"/main/product/category",name:"category",component:o,children:[]}},1934:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(568),n.e(630)]).then(n.bind(n,3315));t["default"]={path:"/main/product/goods",name:"goods",component:o,children:[]}},649:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(914).then(n.bind(n,3825));t["default"]={path:"/main/story/chat",name:"chat",component:o,children:[]}},604:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(378).then(n.bind(n,1378));t["default"]={path:"/main/story/list",name:"list",component:o,children:[]}},9515:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(411).then(n.bind(n,2411));t["default"]={path:"/main/system/department",name:"department",component:o,children:[]}},5291:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(568),n.e(163)]).then(n.bind(n,8832));t["default"]={path:"/main/system/menu",name:"menu",component:o,children:[]}},6645:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(568),n.e(638),n.e(544)]).then(n.bind(n,4129));t["default"]={path:"/main/system/role",name:"role",component:o,children:[]}},1169:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(568),n.e(638),n.e(673)]).then(n.bind(n,1269));t["default"]={path:"/main/system/user",name:"user",component:o,children:[]}},3155:function(e,t,n){"use strict";n.d(t,{ZP:function(){return q},PQ:function(){return U},oR:function(){return S}});var o=n(65),r=n(3824),s=(n(1703),n(3224)),a=n(2482),i=n(6265),c=n.n(i);class u{constructor(e){(0,a.Z)(this,"instance",void 0),(0,a.Z)(this,"interceptors",void 0),this.instance=c().create(e),this.interceptors=e.interceptors,this.instance.interceptors.request.use(this.interceptors?.requestInterceptor,this.interceptors?.requestInterceptorCatch),this.instance.interceptors.response.use(this.interceptors?.responseInterceptor,this.interceptors?.responseInterceptorCatch),this.instance.interceptors.request.use((e=>(console.log("所有实例的请求拦截器"),e))),this.instance.interceptors.response.use((e=>(console.log("所有实例的响应拦截器"),e)))}request(e){return e.interceptors?.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),new Promise(((t,n)=>{this.instance.request(e).then((e=>{t(e)})).catch((e=>{n(e)}))}))}get(e){return this.request({...e,method:"GET"})}post(e){return this.request({...e,method:"POST"})}delete(e){return this.request({...e,method:"DELETE"})}patch(e){return this.request({...e,method:"PATCH"})}}var l=u;let d;const h=5e3;switch("production"){case"development":d="/api";break;case"production":d="http://152.136.185.210:5000";break;default:d="http://152.136.185.210:5000";break}const m=new l({baseURL:d,timeout:h,interceptors:{requestInterceptor(e){const t=s.Z.getCache("token")??"123";return t&&(e.headers.Authorization=`Bearer ${t}`),e},responseInterceptor(e){return e.data},responseInterceptorCatch(e){return window.$message.error(e.response.data),Promise.reject(new Error(e))}}});var f,p=m;(function(e){e["AccountLogin"]="/login",e["LoginUserInfo"]="/users/",e["LoginUserMenus"]="/role/"})(f||(f={}));const g=e=>p.post({url:f.AccountLogin,data:e}),v=e=>p.get({url:f.LoginUserInfo+e}),y=e=>p.get({url:f.LoginUserMenus+e+"/menu"});function b(e){const t=[],o=[],r=n(372);function s(e){for(const n of e)if(2===n.type){const e=o.find((e=>e.path===n.url));e&&t.push(e)}else s(n.children)}return r.keys().forEach((e=>{const t=n(7259)("./main"+e.split(".")[1]);o.push(t.default)})),s(e),t}function w(e){const t=[],n=e=>{for(const o of e)1===o.type||2===o.type?n(o.children??[]):3===o.type&&t.push(o.permission)};return n(e),t}const C={namespaced:!0,state:()=>({token:s.Z.getCache("token")??"",userInfo:s.Z.getCache("userInfo")??{},userMenus:s.Z.getCache("userMenus")??[],permissions:[]}),getters:{},mutations:{changeToken(e,t){e.token=t},changeUserInfo(e,t){e.userInfo=t},changeUserMenus(e,t){e.userMenus=t;const n=b(t);n.forEach((e=>{r.Z.addRoute("main",e)}));const o=w(t);console.log(o),e.permissions=o}},actions:{async accountLoginAction({commit:e},t){const n=await g(t),{id:o,token:a}=n.data;s.Z.setCache("token",a),e("changeToken",a);const i=await v(o);console.log(i),s.Z.setCache("userinfo",i.data),e("changeUserInfo",i.data),console.log(o,"id");const c=await y(i.data.role.id);console.log(c,"hhhhhh"),s.Z.setCache("userMenus",c.data),e("changeUserMenus",c.data),r.Z.replace("/main"),window.$message.success("登陆成功")},loadLocalLogin({commit:e}){const t=s.Z.getCache("token");t&&e("changeToken",t);const n=s.Z.getCache("userInfo");n&&e("changeUserInfo",n);const o=s.Z.getCache("userMenus");o&&e("changeUserMenus",o)}}};var Z=C;const L={namespaced:!0,state:()=>({isCollapsed:!1}),mutations:{handleShowSiderMenuCollapsed(e){e.isCollapsed=!e.isCollapsed}}};var k=L;const P=(e,t)=>p.post({url:e,data:t}),M=e=>p["delete"]({url:e}),I=(e,t)=>p.post({url:e,data:t}),E=(e,t)=>p.patch({url:e,data:t}),O={namespaced:!0,state:()=>({userList:[],userCount:10,roleList:[],roleCount:10,goodsList:[],goodsCount:10,menuList:[],menuCount:10}),getters:{pageListData(e){return console.log("hello"),t=>{switch(t){case"users":return e.userList;case"role":return e.roleList;case"goods":return e.goodsList;case"menu":return e.menuList;default:break}}}},mutations:{changeUserList(e,t){e.userList=t},changeUserCount(e,t){e.userCount=t},changeRoleList(e,t){e.roleList=t},changeRoleCount(e,t){e.roleCount=t},changeGoodsList(e,t){e.goodsList=t},changeGoodsCount(e,t){e.goodsCount=t},changeMenuList(e,t){e.menuList=t},changeMenuCount(e,t){e.menuCount=t}},actions:{async getPageListAction({commit:e},t){const{pageName:n,queryInfo:o}=t,r=`/${n}/list`,s=await P(r,o),{list:a,totalCount:i}=s.data;switch(n){case"users":e("changeUserList",a),e("changeUserCount",i);break;case"role":e("changeRoleList",a),e("changeRoleCount",i);break;case"goods":e("changeGoodsList",a),e("changeGoodsCount",i);break;case"menu":e("changeMenuList",a),e("changeMenuCount",i)}},async deletePageDataAction({dispatch:e},t){const{pageName:n,id:o,queryInfo:r}=t,s=`/${n}/${o}`,a=await M(s);window.$message.info(a.data),e("getPageListAction",{pageName:n,queryInfo:r})},async createPageDataAction({dispatch:e},t){const{pageName:n,newData:o}=t,r=`/${n}`,s=await I(r,o);window.$message.info(s.data),e("getPageListAction",{pageName:n,queryInfo:{offset:0,size:10}})},async editPageDataAction({dispatch:e},t){const{pageName:n,editData:o,id:r}=t,s=`/${n}/${r}`,a=await E(s,o);window.$message.info(a.data),e("getPageListAction",{pageName:n,queryInfo:{offset:0,size:10}})}}};var A=O;const D=(0,o.MT)({state:()=>({showDialogKey:!1,entireDepartment:[],entireRole:[],entireMenu:[]}),getters:{},mutations:{changeShowDialogKey(e){e.showDialogKey=!e.showDialogKey},changeEntireDepartment(e,t){e.entireDepartment=t},changeEntireRole(e,t){e.entireRole=t},changeEntireMenu(e,t){e.entireMenu=t}},actions:{logoutAction(){s.Z.clearCache(),r.Z.replace("/login"),setTimeout((()=>{location.reload()}),100)},async getInitailDataAction({commit:e}){const{list:t}=(await P("/department/list",{offset:0,size:100})).data,{list:n}=(await P("/role/list",{offset:0,size:100})).data,{list:o}=(await P("/menu/list",{offset:0,size:100})).data;e("changeEntireMenu",o),e("changeEntireDepartment",t),e("changeEntireRole",n)}},modules:{loginModule:Z,siderMenuModule:k,systemModule:A}});function U(){console.log(location.hash),"#/login"!==location.hash&&"#/"!==location.hash&&(D.dispatch("loginModule/loadLocalLogin"),D.dispatch("getInitailDataAction"))}function S(){return(0,o.oR)()}var q=D},3224:function(e,t){"use strict";class n{setCache(e,t){localStorage.setItem(e,JSON.stringify(t))}getCache(e){const t=localStorage.getItem(e);if(t)return JSON.parse(t)}deleteCache(e){localStorage.removeItem(e)}clearCache(){localStorage.clear()}}t["Z"]=new n},372:function(e,t,n){var o={"./analysis/dashboard/dashboard.ts":901,"./analysis/overview/overview.ts":8979,"./product/category/category.ts":1666,"./product/goods/goods.ts":1934,"./story/chat/chat.ts":649,"./story/list/list.ts":604,"./system/department/department.ts":9515,"./system/menu/menu.ts":5291,"./system/role/role.ts":6645,"./system/user/user.ts":1169};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=372},7259:function(e,t,n){var o={"./main/analysis/dashboard/dashboard":901,"./main/analysis/dashboard/dashboard.ts":901,"./main/analysis/overview/overview":8979,"./main/analysis/overview/overview.ts":8979,"./main/product/category/category":1666,"./main/product/category/category.ts":1666,"./main/product/goods/goods":1934,"./main/product/goods/goods.ts":1934,"./main/story/chat/chat":649,"./main/story/chat/chat.ts":649,"./main/story/list/list":604,"./main/story/list/list.ts":604,"./main/system/department/department":9515,"./main/system/department/department.ts":9515,"./main/system/menu/menu":5291,"./main/system/menu/menu.ts":5291,"./main/system/role/role":6645,"./main/system/role/role.ts":6645,"./main/system/user/user":1169,"./main/system/user/user.ts":1169};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=7259}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{89:"a9010772",163:"9d380605",378:"017473ce",411:"3e7a03af",479:"95691a7d",489:"57c4375c",507:"9298f2ca",544:"1644aa98",568:"3adb3797",599:"34a2c8b0",630:"57d026b8",638:"e2cdac58",673:"2a56b62d",912:"2c3eef7c",914:"2781d566"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{89:"af9f23aa",163:"3c8c65f4",489:"2db0bd06",507:"3f842772",544:"058fccef",599:"4d6c6a26",630:"3c8c65f4",673:"85ebb3da",914:"bad0d0c4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3-cms-ts:";n.l=function(o,r,s,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[r];var h=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],s=r.getAttribute("data-href");if(s===e||s===t)return r}},o=function(o){return new Promise((function(r,s){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return r();e(o,i,r,s)}))},r={143:0};n.f.miniCss=function(e,t){var n={89:1,163:1,489:1,507:1,544:1,599:1,630:1,673:1,914:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=s);var a=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},o=self["webpackChunkvue3_cms_ts"]=self["webpackChunkvue3_cms_ts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5453)}));o=n.O(o)})();
//# sourceMappingURL=app.cae6fc7c.js.map