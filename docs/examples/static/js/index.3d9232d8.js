(function(){var n={230:function(n,e,o){var i=o(6195);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var t=o(56).Z;t("384a0b49",i,!0,{sourceMap:!1,shadowMode:!1})},3557:function(n,e,o){"use strict";var i=o(1541),t=(o(752),o(3964),o(429),o(6409),o(278),o(228),o(6265),o(4043),o(7267),o(657)),a={keys:function(){return[]}};o.g["________"]=!0,delete o.g["________"],o.g.__uniConfig={tabBar:{color:"#7A7E83",selectedColor:"#007AFF",borderStyle:"black",backgroundColor:"#F8F8F8",list:[{pagePath:"pages/index",iconPath:"static/home.png",selectedIconPath:"static/home_active.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/component",iconPath:"static/component.png",selectedIconPath:"static/component_active.png",text:"组件",redDot:!1,badge:""},{pagePath:"pages/api",iconPath:"static/api.png",selectedIconPath:"static/api_active.png",text:"接口",redDot:!1,badge:""}]},easycom:{autoscan:!0,custom:{"^ui-(.*)":"@/components/$1/index.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uniQuery",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"}},o.g.__uniConfig.compilerVersion="3.8.12",o.g.__uniConfig.darkmode=!1,o.g.__uniConfig.themeConfig={},o.g.__uniConfig.uniPlatform="h5",o.g.__uniConfig.appId="",o.g.__uniConfig.appName="",o.g.__uniConfig.appVersion="1.0.0",o.g.__uniConfig.appVersionCode="100",o.g.__uniConfig.router={mode:"hash",base:"./"},o.g.__uniConfig.publicPath="./",o.g.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},o.g.__uniConfig.debug=!1,o.g.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},o.g.__uniConfig.sdkConfigs={},o.g.__uniConfig.qqMapKey=void 0,o.g.__uniConfig.googleMapKey=void 0,o.g.__uniConfig.aMapKey=void 0,o.g.__uniConfig.aMapSecurityJsCode=void 0,o.g.__uniConfig.aMapServiceHost=void 0,o.g.__uniConfig.locale="",o.g.__uniConfig.fallbackLocale=void 0,o.g.__uniConfig.locales=a.keys().reduce((function(n,e){var o=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),i=a(e);return Object.assign(n[o]||(n[o]={}),i.common||i),n}),{}),o.g.__uniConfig.nvue={"flex-direction":"column"},o.g.__uniConfig.__webpack_chunk_load__=o.e,t.Z.component("pages-index",(function(n){var e={component:o.e(769).then(function(){return n(o(5688))}.bind(null,o))["catch"](o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.Z.component("pages-component",(function(n){var e={component:o.e(210).then(function(){return n(o(6508))}.bind(null,o))["catch"](o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.Z.component("pages-api",(function(n){var e={component:o.e(904).then(function(){return n(o(5204))}.bind(null,o))["catch"](o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.Z.component("pages-component-tabs-index",(function(n){var e={component:o.e(461).then(function(){return n(o(5051))}.bind(null,o))["catch"](o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.Z.component("pages-api-getLocation-index",(function(n){var e={component:o.e(841).then(function(){return n(o(942))}.bind(null,o))["catch"](o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.g.__uniRoutes=[{path:"/",alias:"/pages/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 组件库项目"})},[n("pages-index",{slot:"page"})])}},meta:{id:1,name:"pages-index",isNVue:!1,maxWidth:0,pagePath:"pages/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/component",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 组件"})},[n("pages-component",{slot:"page"})])}},meta:{id:2,name:"pages-component",isNVue:!1,maxWidth:0,pagePath:"pages/component",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/api",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 接口"})},[n("pages-api",{slot:"page"})])}},meta:{id:3,name:"pages-api",isNVue:!1,maxWidth:0,pagePath:"pages/api",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/component/tabs/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"tabs 标签页"})},[n("pages-component-tabs-index",{slot:"page"})])}},meta:{name:"pages-component-tabs-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/tabs/index",windowTop:44}},{path:"/pages/api/getLocation/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"getLocation 获取地理位置"})},[n("pages-api-getLocation-index",{slot:"page"})])}},meta:{name:"pages-api-getLocation-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/getLocation/index",windowTop:44}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],o.g.UniApp&&new o.g.UniApp;o(6088);var r,u,c=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},s=[],g=o(1980)["Z"],d={onLaunch:function(){g.log("App Launch")},onShow:function(){g.log("App Show")},onHide:function(){g.log("App Hide")}},p=d,l=(o(230),o(9453)),f=(0,l.Z)(p,c,s,!1,null,null,null,!1,r,u),_=f.exports,m=(o(2789),o(779)),y=o.n(m),h=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wgs84",o="scope.userLocation";uni.getLocation({type:e,success:n,fail:function(){uni.getSetting({success:function(i){i.authSetting[o]?uni.showModal({title:"温馨提示",content:"地理位置获取失败，请打开手机定位后再试"}):uni.showModal({title:"温馨提示",content:"请允许授权位置信息,并确保系统设置中已打开位置信息",confirmText:"授权",success:function(i){i.confirm&&uni.openSetting({success:function(i){i.authSetting[o]?uni.getLocation({type:e,success:n}):uni.showModal({title:"温馨提示",content:"用户未授权"})}})}})}})}})};uni.$uniQuery={getLocation:h};var v={install:function(n){}};y()(),t.Z.config.productionTip=!1,_.mpType="app",t.Z.use(v);var b=new t.Z((0,i.Z)({},_));b.$mount()},2789:function(n,e,o){var i=o(6587)["default"];o(228),uni.addInterceptor({returnValue:function(n){return!n||"object"!==i(n)&&"function"!==typeof n||"function"!==typeof n.then?n:new Promise((function(e,o){n.then((function(n){return n[0]?o(n[0]):e(n[1])}))}))}})},6195:function(n,e,o){"use strict";o.r(e);var i=o(8081),t=o.n(i),a=o(3645),r=o.n(a),u=r()(t());u.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e["default"]=u}},e={};function o(i){var t=e[i];if(void 0!==t)return t.exports;var a=e[i]={id:i,exports:{}};return n[i].call(a.exports,a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(e,i,t,a){if(!i){var r=1/0;for(g=0;g<n.length;g++){i=n[g][0],t=n[g][1],a=n[g][2];for(var u=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(n){return o.O[n](i[c])}))?i.splice(c--,1):(u=!1,a<r&&(r=a));if(u){n.splice(g--,1);var s=t();void 0!==s&&(e=s)}}return e}a=a||0;for(var g=n.length;g>0&&n[g-1][2]>a;g--)n[g]=n[g-1];n[g]=[i,t,a]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var i in e)o.o(e,i)&&!o.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){o.f={},o.e=function(n){return Promise.all(Object.keys(o.f).reduce((function(e,i){return o.f[i](n,e),e}),[]))}}(),function(){o.u=function(n){return"static/js/"+{210:"pages-component",461:"pages-component-tabs-index",769:"pages-index",841:"pages-api-getLocation-index",904:"pages-api"}[n]+"."+{210:"73617e9b",461:"86262b01",769:"903e80de",841:"cc179f90",904:"4934ae00"}[n]+".js"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="uni-query:";o.l=function(i,t,a,r){if(n[i])n[i].push(t);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),g=0;g<s.length;g++){var d=s[g];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",e+a),u.src=i),n[i]=[t];var p=function(e,o){u.onerror=u.onload=null,clearTimeout(l);var t=n[i];if(delete n[i],u.parentNode&&u.parentNode.removeChild(u),t&&t.forEach((function(n){return n(o)})),e)return e(o)},l=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){o.p="./"}(),function(){o.b=document.baseURI||self.location.href;var n={826:0};o.f.j=function(e,i){var t=o.o(n,e)?n[e]:void 0;if(0!==t)if(t)i.push(t[2]);else{var a=new Promise((function(o,i){t=n[e]=[o,i]}));i.push(t[2]=a);var r=o.p+o.u(e),u=new Error,c=function(i){if(o.o(n,e)&&(t=n[e],0!==t&&(n[e]=void 0),t)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,t[1](u)}};o.l(r,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===n[e]};var e=function(e,i){var t,a,r=i[0],u=i[1],c=i[2],s=0;if(r.some((function(e){return 0!==n[e]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(c)var g=c(o)}for(e&&e(i);s<r.length;s++)a=r[s],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(g)},i=self["webpackChunkuni_query"]=self["webpackChunkuni_query"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(3557)}));i=o.O(i)})();