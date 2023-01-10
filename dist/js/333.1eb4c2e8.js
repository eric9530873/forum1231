"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[333],{3333:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("h1",[t._v("餐廳描述頁")]),e("RestaurantDetail",{key:t.restaurant.id,attrs:{initialuserrestaurant:t.restaurant}}),e("hr"),e("RestaurantCommentsVue",{attrs:{restaurantComments:t.restaurantComments}})],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v("義大利料理")])]),e("div",{staticClass:"col-lg-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),t._m(0)]),e("div",{staticClass:"col-lg-8"},[e("p",[t._v(t._s(t.restaurant.description))]),e("a",{staticClass:"btn btn-primary btn-border mr-2",attrs:{href:"#"}},[t._v("Dashboard")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:t.deleteFavorite}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:t.addFavorite}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:t.deleteLike}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:t.addLike}},[t._v(" Like ")])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info-wrap"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" 08:00 ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" (918) 827-1962 ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" 98138 Elisa Road ")])])])}],u={name:"RestaurantDetail",props:{initialuserrestaurant:{type:Object,require:!0}},data(){return{restaurant:this.initialuserrestaurant}},methods:{addFavorite(){this.restaurant={...this.restaurant,isFavorited:!0}},deleteFavorite(){this.restaurant={...this.restaurant,isFavorited:!1}},addLike(){this.restaurant={...this.restaurant,isLiked:!0}},deleteLike(){this.restaurant={...this.restaurant,isLiked:!1}}}},o=u,d=a(1001),l=(0,d.Z)(o,i,n,!1,null,null,null),m=l.exports,c=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(a){return e("div",{key:a.id},[e("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"}},[t._v(" Delete ")]):t._e(),e("h3",[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(a.User.name)+" ")])]),e("p",[t._v(t._s(a.text))]),e("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(a.createdAt))+" ")])]),e("hr")])}))],2)},p=[],v=a(3459);const b={currentUser:{id:1,name:"root",email:"root@example.com",isAdmin:!0},isAuthenticated:!0};var h={name:"restaurantComments",mixins:[v.q],props:{restaurantComments:{type:Array,require:!0}},data(){return{currentUser:b.currentUser}}},g=h,C=(0,d.Z)(g,c,p,!1,null,null,null),_=C.exports;const k={restaurant:{id:1,name:"Trey Weimann",tel:"(536) 896-8493 x67881",address:"74161 Nienow Streets",opening_hours:"08:00",description:"Et in veritatis repellat asperiores fuga recusandae.\nAlias dolorem beatae.\nQuia sapiente et maxime.\nOmnis vero in sit libero est neque id est.\nEa rerum quia.",image:"https://loremflickr.com/320/240/restaurant,food/?random=66.53294827062011",viewCounts:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-06T06:47:04.480Z",CategoryId:1,Category:{id:1,name:"中式料理",createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"},FavoritedUsers:[],LikedUsers:[],Comments:[{id:101,text:"Eligendi voluptatem ducimus sit fugiat rerum rerum molestiae voluptates.",UserId:1,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:1,name:"root",email:"root@example.com",password:"$2a$10$2gCT6P3h8B8XzRiGjfypkOyvbkj2DxxxtiAwbEyxqMrkFNc/LSZdq",isAdmin:!0,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}},{id:1,text:"Reprehenderit rerum quisquam voluptatem ut sunt labore.",UserId:2,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",isAdmin:!1,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}},{id:51,text:"Eos fugiat sed molestiae tenetur.",UserId:2,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",isAdmin:!1,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}}]},isFavorited:!1,isLiked:!1};var f={name:"RestaurantModal",components:{RestaurantDetail:m,RestaurantCommentsVue:_},data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},methods:{fetchRestaurantModal(){this.restaurant={id:k.restaurant.id,name:k.restaurant.name,categoryName:k.restaurant.Category?k.restaurant.Category.name:"未分類",image:k.restaurant.image,openingHours:k.restaurant.opening_hours,tel:k.restaurant.tel,address:k.restaurant.address,description:k.restaurant.description,isFavorited:k.isFavorited,isLiked:k.isLiked},this.restaurantComments=k.restaurant.Comments}},created(){const t=this.$route.params;this.fetchRestaurantModal(t),console.log(this.$route.params)}},y=f,A=(0,d.Z)(y,r,s,!1,null,null,null),Z=A.exports}}]);
//# sourceMappingURL=333.1eb4c2e8.js.map