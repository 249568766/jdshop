(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b703dbaa"],{"077c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("SubHeader",{attrs:{title:"添加收货地址"}}),a("div",{staticClass:"main"},[a("ul",[a("li",[e._v("收货人")]),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"收货人姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("ul",[a("li",[e._v("联系方式")]),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cellphone,expression:"cellphone"}],attrs:{type:"text",placeholder:"联系人手机号"},domProps:{value:e.cellphone},on:{input:function(t){t.target.composing||(e.cellphone=t.target.value)}}})])]),a("ul",[a("li",[e._v("所在地区")]),a("li",[a("input",{staticClass:"area",attrs:{type:"text",placeholder:"请选择所在地区",readOnly:""},domProps:{value:e.showArea},on:{click:function(t){e.isArea=!0}}})])]),a("ul",[a("li",[e._v("详细地址")]),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"街道详细地址"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),a("ul",[a("li",[e._v("设置为默认地址")]),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isDefault,expression:"isDefault"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isDefault)?e._i(e.isDefault,null)>-1:e.isDefault},on:{change:function(t){var a=e.isDefault,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=e._i(a,i);s.checked?n<0&&(e.isDefault=a.concat([i])):n>-1&&(e.isDefault=a.slice(0,n).concat(a.slice(n+1)))}else e.isDefault=r}}})])]),a("button",{staticClass:"submit-save",attrs:{type:"button"},on:{click:function(t){return e.submit()}}},[e._v("保存")])]),a("van-popup",{model:{value:e.isArea,callback:function(t){e.isArea=t},expression:"isArea"}},[a("van-area",{attrs:{"area-list":e.areaList},on:{cancel:function(t){e.isArea=!1},confirm:e.selectArea}})],1)],1)},r=[];a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}))},4378:function(e,t,a){"use strict";a.r(t);var s=a("077c"),r=a("6534");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("8fc44");var n=a("2877"),c=Object(n["a"])(r["default"],s["a"],s["b"],!1,null,"72041ad3",null);t["default"]=c.exports},"4ec4":function(e,t,a){"use strict";var s=a("1bd5");a("a4d3"),a("4de4"),a("4160"),a("a15b"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("ac1f"),a("466d"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e7e5");var r=s(a("d399")),i=s(a("2fa7"));a("8a58");var n=s(a("e41f"));a("db2c");var c=s(a("1125")),o=s(a("2b0e")),l=a("2f62"),u=(a("b970"),s(a("ba32"))),d=s(a("98d7"));function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}o.default.use(c.default),o.default.use(n.default);var h={name:"address-add",data:function(){return{name:"",cellphone:"",showArea:"",address:"",isDefault:!1,areaList:d.default,isArea:!1,province:"",city:"",area:""}},created:function(){this.$utils.safeUser(this),this.isSubmit=!0},mounted:function(){document.title=this.$route.meta.title},components:{SubHeader:u.default},methods:p({},(0,l.mapActions)({addAddress:"address/addAddress"}),{submit:function(){var e=this;this.name.match(/^\s*$/)?(0,r.default)("请输入收货人姓名"):this.cellphone.match(/^\s*$/)?(0,r.default)("请输入联系人手机号"):this.cellphone.match(/^1[0-9][0-9]\d{8}$/)?this.showArea.match(/^\s*$/)?(0,r.default)("请选择所在地区"):this.address.match(/^\s*$/)?(0,r.default)("请输入详细地址"):this.isSubmit&&(this.isSubmit=!1,this.addAddress({name:this.name,cellphone:this.cellphone,province:this.province,area:this.area,city:this.city,address:this.address,isdefault:this.isDefault?"1":"0",success:function(t){200===t.code&&(0,r.default)({duration:2e3,message:"添加成功！",onClose:function(){e.$router.go(-1)}})}})):(0,r.default)("您输入的手机号格式不正确")},selectArea:function(e){this.isArea=!1;var t=[];if(e.length>0){for(var a=0;a<e.length;a++)t.push(e[a].name);this.province=t[0],this.city=t[1],this.area=t[2]}this.showArea=t.join(" ")}})};t.default=h},6534:function(e,t,a){"use strict";a.r(t);var s=a("4ec4"),r=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,(function(){return s[e]}))}(i);t["default"]=r.a},"8c2d":function(e,t,a){},"8fc44":function(e,t,a){"use strict";var s=a("8c2d"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-b703dbaa.bc4c7e39.js.map