(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fdae6f4"],{"13c5":function(t,e,a){"use strict";a.r(e);var n=a("69de"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"36ba":function(t,e,a){"use strict";a.r(e);var n=a("c91a"),i=a("13c5");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("742a");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"7d39b64d",null);e["default"]=o.exports},"69de":function(t,e,a){"use strict";a("b0c0"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"home",data:function(){return{homeStyle:!0,cartStyle:!1,myStyle:!1}},methods:{goPage:function(t){this.$router.replace(t)},changeStyleNav:function(t){switch(t){case"index":this.homeStyle=!0,this.cartStyle=!1,this.myStyle=!1;break;case"cart":this.homeStyle=!1,this.cartStyle=!0,this.myStyle=!1;break;case"my":this.homeStyle=!1,this.cartStyle=!1,this.myStyle=!0;break;default:this.homeStyle=!0,this.cartStyle=!1,this.myStyle=!1;break}}},created:function(){document.title=this.$route.meta.title,this.changeStyleNav(this.$route.name)},beforeRouteUpdate:function(t,e,a){document.title=t.meta.title,this.changeStyleNav(t.name),a()},activated:function(){document.title=this.$route.meta.title,this.changeStyleNav(this.$route.name)}};e.default=n},"742a":function(t,e,a){"use strict";var n=a("be83"),i=a.n(n);i.a},be83:function(t,e,a){},c91a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),a("div",{staticClass:"bottom-nav"},[a("ul",{class:{home:!0,active:t.homeStyle},on:{click:function(e){return t.goPage("/index")}}},[a("li"),a("li",[t._v("首页")])]),a("ul",{class:{cart:!0,active:t.cartStyle},on:{click:function(e){return t.goPage("/cart")}}},[a("li"),a("li",[t._v("购物车")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.cart.cartData.length>0,expression:"$store.state.cart.cartData.length>0"}],staticClass:"spot"})]),a("ul",{class:{my:!0,active:t.myStyle},on:{click:function(e){return t.goPage("/my")}}},[a("li"),a("li",[t._v("我的")])])])],1)},i=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))}}]);
//# sourceMappingURL=chunk-7fdae6f4.04911a71.js.map