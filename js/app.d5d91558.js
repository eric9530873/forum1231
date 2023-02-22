(function(){"use strict";var t={2451:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav nav-tabs mb-4"},t._l(t.tabs,(function(a){return e("li",{key:a.id,staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:a.path}},[t._v(" "+t._s(a.title)+" ")])],1)})),0)},n=[],s=a(7632),i={data(){return{tabs:[{title:"首頁",path:"/restaurants",id:(0,s.Z)()},{title:"最新動態",path:"/restaurants/feeds",id:(0,s.Z)()},{title:"TOP 10 人氣餐廳",path:"/restaurants/top",id:(0,s.Z)()},{title:"美食達人",path:"/users/top",id:(0,s.Z)()}]}}},o=i,u=a(1001),l=(0,u.Z)(o,r,n,!1,null,"d8fbbca0",null),c=l.exports},7214:function(t,e,a){var r=a(6163);e["Z"]={signIn({email:t,password:e}){return r.l.post("/signin",{email:t,password:e})},signUp(t){return r.l.post("/signup",{...t})}}},4818:function(t,e,a){var r=a(6163);e["Z"]={getRestaurants({page:t,categoryId:e}){const a=new URLSearchParams({page:t,categoryId:e});return r.l.get(`/restaurants?${a.toString()}`)},getRestaurant({restaurantId:t}){return r.l.get(`/restaurants/${t}`)},getFeeds(){return r.l.get("/restaurants/feeds")},getRestaurantsTop(){return r.l.get("/restaurants/top")},getRestaurantDashboard({restaurantId:t}){return r.l.get(`/restaurants/${t}/dashboard`)}}},8390:function(t,e,a){var r=a(6163);e["Z"]={getCurrentUser(){return r.l.get("/get_current_user")},get({userId:t}){return r.l.get(`/users/${t}`)},addFavorite({restaurantId:t}){return r.l.post(`/favorite/${t}`,null)},deleteFavorite({restaurantId:t}){return r.l["delete"](`/favorite/${t}`)},addLiked({restaurantId:t}){return r.l.post(`/like/${t}`,null)},deleteLiked({restaurantId:t}){return r.l["delete"](`/like/${t}`)},addFollowing({userId:t}){return r.l.post(`/following/${t}`,null)},deleteFollowing({userId:t}){return r.l["delete"](`/following/${t}`)},getTopUsers(){return r.l.get("/users/top")},upDate({userId:t,formData:e}){return r.l.put(`/users/${t}`,e)}}},6888:function(t,e,a){var r=a(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"forum"}},[e("NavBar"),e("main",{staticClass:"mt-5 bg-white"},[e("router-view")],1)],1)},s=[],i=(a(3734),function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" 餐廳評論網 ")]),e("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[[e("div",{staticClass:"ml-auto d-flex align-items-center"},[t.currentUser.isAdmin?e("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[t._v(" 管理員後台 ")]):t._e(),t.isAuthenticated?[e("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[t._v(" "+t._s(t.currentUser.name||"使用者")+" 您好 ")]),e("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:t.logout}},[t._v(" 登出 ")])]:t._e()],2)]],2)],1)}),o=[],u=(a(7658),a(629)),l={computed:{...(0,u.rn)(["currentUser","isAuthenticated"])},methods:{logout(){this.$store.commit("removeAuthentication"),this.$router.push("/signin")}}},c=l,d=a(1001),p=(0,d.Z)(c,i,o,!1,null,"1ec055f1",null),m=p.exports,g={components:{NavBar:m}},f=g,h=(0,d.Z)(f,n,s,!1,null,"3b9ce4b6",null),v=h.exports,b=a(8345),y=function(){var t=this,e=t._self._c;return e("h1",[t._v("404 Page Not Found")])},w=[],k={},C=(0,d.Z)(k,y,w,!1,null,null,null),P=C.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("NavTabs"),e("RestaurantsNavPillsVue",{attrs:{categories:t.categories}}),e("div",{staticClass:"row"},t._l(t.restaurants,(function(t){return e("RestaurantCardVue",{key:t.id,attrs:{initialrestaurant:t}})})),1),e("RestaurantsPagination",{attrs:{currentPage:t.currentPage,totalPage:t.totalPage,previouPage:t.previouPage,nextPage:t.nextPage,categoryId:t.categoryId}})],1)},x=[],I=a(2451),Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"card mb-4"},[e("img",{staticClass:"card-img-top",attrs:{src:t.restaurant.image,alt:"Card image cap",width:"286px",height:"180px"}}),e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text title-wrap"},[e("router-link",{attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[t._v(" "+t._s(t.restaurant.name)+" ")])],1),e("span",{staticClass:"badge badge-secondary"},[t._v(t._s(t.restaurant.Category.name?t.restaurant.Category.name:"未分類"))]),e("p",{staticClass:"card-text text-truncate"},[t._v(" "+t._s(t.restaurant.description)+" ")])]),e("div",{staticClass:"card-footer"},[t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button"},on:{click:function(e){return t.deleteFavorited(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorited(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLiked(t.restaurant.id)}}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLiked(t.restaurant.id)}}},[t._v(" Like ")])])])])},F=[],A=a(8390),E=a(6163),S={props:{initialrestaurant:{type:Object,require:!0}},data(){return{restaurant:this.initialrestaurant}},methods:{async addFavorited(t){try{const e=await A.Z.addFavorite({restaurantId:t});if(console.log(e),"error"===e.data.status)throw new Error(e.data.message);this.restaurant={...this.restaurant,isFavorited:!0}}catch(e){E.F.fire({icon:"error",title:"無法加入"})}},async deleteFavorited(t){try{const e=await A.Z.deleteFavorite({restaurantId:t});if(console.log(e),"error"===e.data.status)throw new Error(e.data.message);this.restaurant={...this.restaurant,isFavorited:!1}}catch(e){E.F.fire({icon:"error",title:"無法加入"})}},async addLiked(t){try{const e=await A.Z.addLiked({restaurantId:t});if("error"===e.data.status)throw new Error(e.data.message);this.restaurant={...this.restaurant,isLiked:!0},console.log(this.restaurant)}catch(e){E.F.fire({icon:"error",title:"無法加入"})}},async deleteLiked(t){try{const e=await A.Z.deleteLiked({restaurantId:t});if("error"===e.data.status)throw new Error(e.data.message);this.restaurant={...this.restaurant,isLiked:!1},console.log(this.restaurant)}catch(e){E.F.fire({icon:"error",title:"無法加入"})}}}},N=S,U=(0,d.Z)(N,Z,F,!1,null,"14e48ca1",null),L=U.exports,R=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav nav-pills mb-4"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[t._v(" 全部 ")])],1),t._l(t.categories,(function(a){return e("li",{key:a.id,staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:a.id}}}},[t._v(" "+t._s(a.name)+" ")])],1)}))],2)},$=[],O={props:{categories:{type:Array,require:!0}}},q=O,T=(0,d.Z)(q,R,$,!1,null,"634e33fc",null),j=T.exports,D=function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{class:["page-item",{disabled:1===t.currentPage}]},[e("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:t.categoryId,page:t.previouPage}}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])],1),t._l(t.totalPage,(function(a){return e("li",{key:a,class:["page-item",{active:t.currentPage===a}]},[e("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{page:a,categoryId:t.categoryId}}}},[t._v(" "+t._s(a)+" ")])],1)})),e("li",{class:["page-item",{disabled:t.currentPage===t.totalPage.length}]},[e("router-link",{staticClass:"page-link",attrs:{"aria-label":"Next",to:{name:"restaurants",query:{categoryId:t.categoryId,page:t.nextPage}}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])],1)],2)])},B=[],M={props:{currentPage:{type:Number,default:1},totalPage:{type:Array,require:!0},previouPage:{type:Number,require:!0},nextPage:{type:Number,require:!0},categoryId:{type:[Number,String],default:""}}},V=M,z=(0,d.Z)(V,D,B,!1,null,"bd1c3426",null),H=z.exports,K=a(4818),G={name:"RestaurantMain",components:{NavTabs:I.Z,RestaurantCardVue:L,RestaurantsNavPillsVue:j,RestaurantsPagination:H},data(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previouPage:-1,nextPage:-1}},methods:{async fetchRestaurants({page:t,categoryId:e}){try{const a=await K.Z.getRestaurants({page:t,categoryId:e});this.restaurants=a.data.restaurants,this.categories=a.data.categories,this.categoryId=a.data.categoryId,this.currentPage=a.data.page,this.totalPage=a.data.totalPage,this.previouPage=a.data.prev,this.nextPage=a.data.next}catch(a){E.F.fire({icon:"error",title:"無法取得餐廳資料,請稍後再試"})}}},created(){const{page:t="",categoryId:e=""}=this.$route.query;this.fetchRestaurants({page:t,categoryId:e})},beforeRouteUpdate(t,e,a){const{page:r="",categoryId:n=""}=t.query;this.fetchRestaurants({page:r,categoryId:n}),a()}},J=G,Q=(0,d.Z)(J,_,x,!1,null,null,null),W=Q.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[t._m(0),e("div",{staticClass:"form-label-group mb-2"},[e("label",{attrs:{for:"email"}},[t._v("email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"form-label-group mb-3"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" Submit ")]),e("div",{staticClass:"text-center mb-3"},[e("p",[e("router-link",{attrs:{to:"/signup"}},[t._v(" Sigh Up ")])],1)]),e("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© 2017-2018")])])])},Y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mb-4"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign In")])])}],tt=a(7214),et={data(){return{email:"",password:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(!this.email||!this.password)return void E.F.fire({icon:"warning",title:"請填入 email 和 password"});this.isProcessing=!0;const t=await tt.Z.signIn({email:this.email,password:this.password}),{data:e}=t;if("success"!==e.status)throw new Error(e.message);localStorage.setItem("token",e.token),this.$store.commit("setcurrentuser",e.user),this.$router.push("/restaurants")}catch(t){this.isProcessing=!1,this.password="",E.F.fire({icon:"warning",title:"輸入的帳號密碼有誤"}),console.log("error",t)}}}},at=et,rt=(0,d.Z)(at,X,Y,!1,null,null,null),nt=rt.exports;r.ZP.use(u.ZP);var st=new u.ZP.Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},getters:{},mutations:{setcurrentuser(t,e){t.currentUser={...t.currentUser,...e},t.isAuthenticated=!0,t.token=localStorage.getItem("token")},removeAuthentication(t){t.currentUser={},t.isAuthenticated=!1,t.token="",localStorage.removeItem("token")}},actions:{async fetchCurrentUser({commit:t}){try{const e=await A.Z.getCurrentUser();if("error"===e.data.status)throw new Error(e.data.message);return console.log(e),t("setcurrentuser",{id:e.data.id,name:e.data.name,email:e.data.email,image:e.data.image,isAdmin:e.data.isAdmin}),!0}catch(e){return console.log(e.message),t("removeAuthentication"),!1}}},modules:{}});r.ZP.use(b.ZP);const it=(t,e,a)=>{const r=st.state.currentUser;!r||r.isAdmin?a():a("not-found")},ot=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:nt},{path:"/signup",name:"sign-up",component:()=>a.e(152).then(a.bind(a,3152))},{path:"/restaurants",name:"restaurants",component:W},{path:"/restaurants/feeds",name:"restaurants-feeds",component:()=>Promise.all([a.e(459),a.e(49)]).then(a.bind(a,2049))},{path:"/restaurants/top",name:"restaurants-top",component:()=>a.e(461).then(a.bind(a,6461))},{path:"/restaurants/:id",name:"restaurant",component:()=>Promise.all([a.e(459),a.e(698)]).then(a.bind(a,3698))},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:()=>a.e(741).then(a.bind(a,6741))},{path:"/users/top",name:"users-top",component:()=>a.e(821).then(a.bind(a,3821))},{path:"/users/:id",name:"user",component:()=>a.e(364).then(a.bind(a,8364))},{path:"/users/:id/edit",name:"user-edit",component:()=>a.e(695).then(a.bind(a,9695))},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:()=>a.e(811).then(a.bind(a,9811)),beforeEnter:it},{path:"/admin/restaurants/new",name:"admin-restaurants-new",component:()=>a.e(908).then(a.bind(a,1908)),beforeEnter:it},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:()=>a.e(177).then(a.bind(a,3177)),beforeEnter:it},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:()=>Promise.all([a.e(459),a.e(868)]).then(a.bind(a,9868)),beforeEnter:it},{path:"/admin/categories",name:"admin-categories",component:()=>a.e(168).then(a.bind(a,168)),beforeEnter:it},{path:"/admin/users",name:"admin-users",component:()=>a.e(683).then(a.bind(a,9683)),beforeEnter:it},{path:"*",name:"NotFound",component:P}],ut=new b.ZP({linkExactActiveClass:"active",routes:ot});ut.beforeEach((async(t,e,a)=>{const r=localStorage.getItem("token"),n=st.state.token;let s=st.state.isAuthenticated;r&&r!==n&&(s=await st.dispatch("fetchCurrentUser"));const i=["sign-in","sign-up"];s||i.includes(t.name)?s&&i.includes(t.name)?a("/restaurants"):a():a("/signin")}));var lt=ut;r.ZP.config.productionTip=!1,new r.ZP({router:lt,store:st,render:t=>t(v)}).$mount("#app")},6163:function(t,e,a){a.d(e,{F:function(){return c},l:function(){return l}});var r=a(9669),n=a.n(r),s=a(6455),i=a.n(s);const o="http://localhost:3000/api",u=n().create({baseURL:o});u.interceptors.request.use((t=>{const e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=`Bearer ${e}`),t}),(t=>Promise.reject(t)));const l=u,c=i().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],n=t[c][1],s=t[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{49:"55996b47",152:"58d2cab5",168:"5bb33dd9",177:"a8dbb162",364:"9bfa3ec5",459:"d79e22ff",461:"cc3bc141",683:"67bf0238",695:"28459479",698:"de8ad7d5",741:"07601f9f",811:"8c008a1d",821:"71b9ac45",868:"4af55cee",908:"84969e0b"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{49:"7f27f218",168:"006ef5b9",698:"1cec747b"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="forum1231:";a.l=function(r,n,s,i){if(t[r])t[r].push(n);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+s),o.src=r),t[r]=[n];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(m);var n=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(a){if(s.onerror=s.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,s.parentNode.removeChild(s),n(u)}};return s.onerror=s.onload=i,s.href=e,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===t||s===e))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],s=n.getAttribute("data-href");if(s===t||s===e)return n}},r=function(r){return new Promise((function(n,s){var i=a.miniCssF(r),o=a.p+i;if(e(i,o))return n();t(r,o,null,n,s)}))},n={143:0};a.f.miniCss=function(t,e){var a={49:1,168:1,698:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=r(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(a,r){n=t[e]=[a,r]}));r.push(n[2]=s);var i=a.p+a.u(e),o=new Error,u=function(r){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,n[1](o)}};a.l(i,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(u)var c=u(a)}for(e&&e(r);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},r=self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6888)}));r=a.O(r)})();
//# sourceMappingURL=app.d5d91558.js.map