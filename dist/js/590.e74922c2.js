"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[590],{7590:function(t,a,r){r.r(a),r.d(a,{default:function(){return F}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.restaurants,(function(t){return a("RestaurantsTopCard",{key:t.id,attrs:{initialrestaurant:t}})}))],2)},e=[],n=r(6561),i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"card-img",attrs:{src:t.restaurant.image}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.restaurant.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(t.restaurant.description)+" ")]),a("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),t.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")])])])])])},o=[],u=r(8390),c=r(6163),d={name:"RestaurantsTopCard",props:{initialrestaurant:{type:Object,require:!0}},data(){return{restaurant:this.initialrestaurant}},methods:{async deleteFavorite(t){try{const a=await u.Z.deleteFavorite({restaurantId:t});if("error"===a.data.status)throw new Error(a.data.message);this.restaurant={...this.restaurant,isFavorited:!1,FavoriteCount:this.restaurant.FavoriteCount-1}}catch(a){c.F.fire({icon:"error",title:"無法"})}},async addFavorite(t){try{const a=await u.Z.addFavorite({restaurantId:t});if("error"===a.data.status)throw new Error(a.data.message);this.restaurant={...this.restaurant,isFavorited:!0,FavoriteCount:this.restaurant.FavoriteCount+1}}catch(a){c.F.fire({icon:"error",title:"無法"})}}}},l=d,v=r(1001),h=(0,v.Z)(l,i,o,!1,null,null,null),p=h.exports,C=r(4818),f={name:"RestaurantsTop",components:{NavTabs:n.Z,RestaurantsTopCard:p},data(){return{restaurants:[]}},methods:{async fetchRestaurantsTop(){try{const t=await C.Z.getRestaurantsTop();this.restaurants=t.data.restaurants}catch(t){c.F.fire({icon:"error",title:"無法"})}}},created(){this.fetchRestaurantsTop()}},m=f,b=(0,v.Z)(m,s,e,!1,null,null,null),F=b.exports}}]);
//# sourceMappingURL=590.e74922c2.js.map