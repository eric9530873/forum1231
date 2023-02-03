"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[219],{3219:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("RestaurantDetail",{key:t.restaurant.id,attrs:{initialuserrestaurant:t.restaurant}}),e("hr"),e("RestaurantCommentsVue",{attrs:{restaurantComments:t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),e("CreateCommentVue",{attrs:{restaurantId:t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},s=[],n=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v("義大利料理")])]),e("div",{staticClass:"col-lg-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),t._m(0)]),e("div",{staticClass:"col-lg-8"},[e("p",[t._v(t._s(t.restaurant.description))]),e("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:t.deleteFavorite}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:t.addFavorite}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:t.deleteLike}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:t.addLike}},[t._v(" Like ")])],1)])}),i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info-wrap"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" 08:00 ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" (918) 827-1962 ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" 98138 Elisa Road ")])])])}],o={name:"RestaurantDetail",props:{initialuserrestaurant:{type:Object,require:!0}},data(){return{restaurant:this.initialuserrestaurant}},methods:{addFavorite(){this.restaurant={...this.restaurant,isFavorited:!0}},deleteFavorite(){this.restaurant={...this.restaurant,isFavorited:!1}},addLike(){this.restaurant={...this.restaurant,isLiked:!0}},deleteLike(){this.restaurant={...this.restaurant,isLiked:!1}}}},u=o,d=a(1001),m=(0,d.Z)(u,n,i,!1,null,null,null),l=m.exports,c=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(a){return e("div",{key:a.id},[e("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(e){return t.handleDeleteButtonClick(a.id)}}},[t._v(" Delete ")]):t._e(),e("h3",[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(a.User.name)+" ")])]),e("p",[t._v(t._s(a.text))]),e("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(a.createdAt))+" ")])]),e("hr")])}))],2)},p=[],v=a(3459);const b={currentUser:{id:1,name:"root",email:"root@example.com",isAdmin:!0},isAuthenticated:!0};var C={name:"restaurantComments",mixins:[v.q],props:{restaurantComments:{type:Array,require:!0}},data(){return{currentUser:b.currentUser}},methods:{handleDeleteButtonClick(t){this.$emit("after-delete-comment",t)}}},h=C,f=(0,d.Z)(h,c,p,!1,null,null,null),g=f.exports,_=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"text"}},[t._v("留下評論：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),e("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},k=[],x=a(7632),y={name:"CreateComment",props:{restaurantId:{type:Number,require:!0}},data(){return{text:""}},methods:{handleSubmit(){this.$emit("after-create-comment",{commentId:(0,x.Z)(),restaurantId:this.restaurantId,text:this.text}),this.text=""}}},A=y,Z=(0,d.Z)(A,_,k,!1,null,null,null),T=Z.exports;const U={restaurant:{id:1,name:"Trey Weimann",tel:"(536) 896-8493 x67881",address:"74161 Nienow Streets",opening_hours:"08:00",description:"Et in veritatis repellat asperiores fuga recusandae.\nAlias dolorem beatae.\nQuia sapiente et maxime.\nOmnis vero in sit libero est neque id est.\nEa rerum quia.",image:"https://loremflickr.com/320/240/restaurant,food/?random=66.53294827062011",viewCounts:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-06T06:47:04.480Z",CategoryId:1,Category:{id:1,name:"中式料理",createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"},FavoritedUsers:[],LikedUsers:[],Comments:[{id:101,text:"Eligendi voluptatem ducimus sit fugiat rerum rerum molestiae voluptates.",UserId:1,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:1,name:"root",email:"root@example.com",password:"$2a$10$2gCT6P3h8B8XzRiGjfypkOyvbkj2DxxxtiAwbEyxqMrkFNc/LSZdq",isAdmin:!0,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}},{id:1,text:"Reprehenderit rerum quisquam voluptatem ut sunt labore.",UserId:2,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",isAdmin:!1,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}},{id:51,text:"Eos fugiat sed molestiae tenetur.",UserId:2,RestaurantId:1,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z",User:{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",isAdmin:!1,image:null,createdAt:"2023-01-04T03:05:03.000Z",updatedAt:"2023-01-04T03:05:03.000Z"}}]},isFavorited:!1,isLiked:!1},w={currentUser:{id:1,name:"root",email:"root@example.com",image:null,isAdmin:!0},isAuthenticated:!0};var R={name:"RestaurantModal",components:{RestaurantDetail:l,RestaurantCommentsVue:g,CreateCommentVue:T},data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],currentUser:w.currentUser}},methods:{fetchRestaurantModal(){this.restaurant={id:U.restaurant.id,name:U.restaurant.name,categoryName:U.restaurant.Category?U.restaurant.Category.name:"未分類",image:U.restaurant.image,openingHours:U.restaurant.opening_hours,tel:U.restaurant.tel,address:U.restaurant.address,description:U.restaurant.description,isFavorited:U.isFavorited,isLiked:U.isLiked},this.restaurantComments=U.restaurant.Comments},afterDeleteComment(t){this.restaurantComments=this.restaurantComments.filter((e=>t!==e.id))},afterCreateComment(t){const{commentId:e,restaurantId:a,text:r}=t;this.restaurantComments.push({id:e,RestaurantId:a,User:{id:this.currentUser.id,name:this.currentUser.name},text:r,createdAt:new Date})}},created(){const{id:t}=this.$route.params;this.fetchRestaurantModal(t)}},q=R,I=(0,d.Z)(q,r,s,!1,null,null,null),L=I.exports}}]);
//# sourceMappingURL=219.a998668f.js.map