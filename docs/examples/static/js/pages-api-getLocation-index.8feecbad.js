(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-api-getLocation-index"],{"02a0":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value1:""}},methods:{doit1:function(){var t=this;uni.$uniQuery.getLocation((function(e){t.value1="经度:"+e.longitude+" 纬度:"+e.latitude}))}}};e.default=i},2606:function(t,e,n){"use strict";n.r(e);var i=n("02a0"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"6f4e":function(t,e,n){"use strict";var i=n("9fca"),a=n.n(i);a.a},"9fca":function(t,e,n){var i=n("e762");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ab3b40ce",i,!0,{sourceMap:!1,shadowMode:!1})},b15a:function(t,e,n){"use strict";n.r(e);var i=n("c2a8"),a=n("2606");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("6f4e");var o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"524f22e6",null,!1,i["a"],void 0);e["default"]=l.exports},c2a8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"example-title"},[t._v("基础用法：")]),n("v-uni-view",{staticClass:"example-btnInput"},[n("v-uni-input",{attrs:{disabled:!0,type:"text",placeholder:"请点击右边的‘获取’按钮"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doit1.apply(void 0,arguments)}}},[t._v("获取")])],1)],1)},a=[]},e762:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".example-title[data-v-524f22e6]{padding:%?20?% 0 %?10?% %?10?%;font-weight:800;font-size:%?30?%}.example-btnInput[data-v-524f22e6]{display:flex;align-items:center}.example-btnInput uni-input[data-v-524f22e6]{flex-grow:1;border-bottom:1px solid grey;margin:0 %?20?%;height:%?50?%;padding:%?4?% %?10?%;font-size:%?26?%}.example-btnInput uni-button[data-v-524f22e6]{flex-shrink:0;margin-right:%?20?%;height:%?50?%;line-height:%?50?%;font-size:12px;display:inline-block;padding:0 %?20?%}.example-btnbottom[data-v-524f22e6]{margin:%?20?% auto;width:-webkit-fit-content;width:fit-content;font-size:12px}",""]),t.exports=e}}]);