!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("zeeroCalendar",[],e):"object"==typeof exports?exports.zeeroCalendar=e():t.zeeroCalendar=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=new Date;e.a={props:{zcbox:{type:Object,default:function(){return{x:0,y:0,width:"270",height:"auto",top:0,left:0,bottom:0,right:0}}},inputname:{type:String,default:""}},watch:{zcbox:{handler:function(t,e){if(t){var n=document.body.clientWidth,o=document.body.clientHeight;Number(t.left)+270>n&&Number(t.top)+400>o?this.zcposition="max-width:270px;left:"+(Number(t.left)-270-20)+"px;top:"+(Number(t.top)-2*Number(t.height)-400-23)+"px;":Number(t.left)+270>n?this.zcposition="max-width:270px;left:"+(Number(t.left)-270-20)+"px;top:"+(Number(t.top)-Number(t.height)-23)+"px;":Number(t.top)+400>o?this.zcposition="max-width:270px;left:"+(Number(t.left)-Number(t.width)-20)+"px;top:"+(Number(t.top)-2*Number(t.height)-400-23)+"px;":this.zcposition="max-width:270px;left:"+(Number(t.left)-Number(t.width)-20)+"px;top:"+(Number(t.top)-Number(t.height)-23)+"px;"}},immediate:!0}},data:function(){return{setyear:r.getFullYear(),setmonth:r.getMonth(),datamonth:r.getMonth(),dateitem:[],today:r.getDate(),tomonth:r.getMonth(),toyear:r.getFullYear(),yearlist:[],yeartab:!1,monthtab:!1,zcposition:""}},mounted:function(){this.alculation()},methods:{alculation:function(){var t=new Date(this.setyear,this.datamonth,"01").getDay(),e=this.setyear,n=this.datamonth+1;1==n&&(n=12,e-=1);var o=this.days(e,n),r=this.days(this.setyear,this.datamonth+1),i=o,a=0,s=0;t>0&&(i=o-t+1);for(var h=new Array,l=new Array,c=(new Object,0),u=0,d=0,p=1;p<43;p++)i<=o?(0==this.datamonth?(u=11,d=this.setyear-1):(u=this.datamonth-1,d=this.setyear),l.push({year:d,month:u,day:i}),i+=1):a<r?(a+=1,d=this.setyear,l.push({year:d,month:this.datamonth,day:a})):(11==this.datamonth?(d=this.setyear+1,u=0):(u=this.datamonth+1,d=this.setyear),s+=1,l.push({year:d,month:u,day:s})),p%7==0&&(h[c]=l,c+=1,l=new Array);this.dateitem=h},days:function(t,e){return new Date(t,e,0).getDate()},preyear:function(){this.setyear=this.setyear-1,this.alculation()},premonth:function(){0==this.setmonth||0==this.datamonth?(this.setmonth=11,this.datamonth=11,this.setyear=this.setyear-1):(this.setmonth=this.setmonth-1,this.datamonth=this.datamonth-1),this.alculation()},ntmonth:function(){11==this.setmonth||11==this.datamonth?(this.setmonth=0,this.datamonth=0,this.setyear=this.setyear+1):(this.setmonth=this.setmonth+1,this.datamonth=this.datamonth+1),this.alculation()},ntyear:function(){this.setyear=this.setyear+1,this.alculation()},selectyear:function(t){this.setyear=t,console.log(this.setyear),this.yeartab=!1,this.alculation()},selectmonth:function(t){this.setmonth=t-1,this.datamonth=t-1,this.monthtab=!1,this.alculation()},yearshow:function(){var t=this.setyear-7;this.yearlist=new Array;for(var e=0;e<15;e++)this.yearlist.push(t),t+=1;this.yeartab=!this.yeartab},monthshow:function(){this.monthtab=!this.monthtab},bearfruit:function(t){if("object"==(void 0===t?"undefined":o(t))){var e=this.$options.filters.formatDate(t.year+"-"+Number(t.month+1)+"-"+t.day);this.$emit("zeerodate",e,this.inputname)}else if("string"==typeof t)if(-1!=t.indexOf("-")){var n=this.$options.filters.formatDate(t);this.$emit("zeerodate",n,this.inputname)}else this.$emit("zeerodate",t,this.inputname)}},filters:{formatDate:function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1;o=o<10?"0"+o:o;var r=e.getDate();return r=r<10?"0"+r:r,n+"-"+o+"-"+r}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r={install:function(t,e){t.component(o.a.name,o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r},function(t,e,n){"use strict";function o(t){n(3)}var r=n(0),i=n(9),a=n(8),s=o,h=a(r.a,i.a,!1,s,null,null);e.a=h.exports},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(6)("3a2c7426",o,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".zeero-calendar{display:table;width:auto;color:#666;font-size:14px;position:absolute;box-shadow:0 10px 20px 0 rgba(31,93,234,.16);border-radius:6px;border:1px solid #efeef5;background-color:#fff;z-index:999999}.zeero-calendar i{font-style:normal}.zc-content td,.zc-content th{width:36px;height:30px;padding:5px;text-align:center;cursor:pointer;transition-duration:.3s;-webkit-transition-duration:.3s}.zc-content td:hover,.zeero-month-list li:hover,.zeero-year-list li:hover{background-color:#eaeaea;color:#333}.zc-head{position:relative;line-height:30px;padding:10px;text-align:center}.zc-head span{font-weight:500}.zc-head span i{margin:0 5px}.zc-head span:hover{color:#0097fb;cursor:pointer}.nextmonth,.nextyear,.previousmonth,.previousyear{position:absolute;top:12px}.previousyear{left:5px}.previousmonth{left:35px}.nextmonth{right:35px}.nextyear{right:5px}.zeero-select-year{margin-right:4px;margin-left:4px}.zeero-othermonth{color:#ccc}.zeero-footool{position:relative;height:26px;line-height:26px;padding:10px}.zeero-footer-btns{position:absolute;right:10px;top:10px}.zeero-footer-btns span{height:26px;line-height:26px;margin:0 0 0 -1px;padding:0 10px;border:1px solid #c9c9c9;background:linear-gradient(180deg,#fff 60%,hsla(0,0%,80%,.596));white-space:nowrap;vertical-align:top;border-radius:2px}.zeero-footer-btns span:hover{color:#2196f3;cursor:pointer}.zc-content td.zeero-tdmark:hover,.zeero-month-list li.zeero-tdmark:hover,.zeero-tdmark,.zeero-year-list li.zeero-tdmark:hover{background:#0097fb;color:#fff}.zeero-month-list,.zeero-year-list{position:absolute;left:0;top:50px;width:100%;height:100%;padding:10px;background-color:#fff}.zeero-month-list>li,.zeero-year-list>li{position:relative;width:33.3%;height:42px;line-height:42px;margin:3px 0;text-align:center;display:inline-block;vertical-align:middle;cursor:pointer}",""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,n,o=document.querySelector("style["+v+'~="'+t.id+'"]');if(o){if(f)return m;o.parentNode.removeChild(o)}if(g){var i=p++;o=d||(d=r()),e=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),y.ssrId&&t.setAttribute(v,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),c={},u=h&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,m=function(){},y=null,v="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){f=n,y=r||{};var i=l(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=c[a.id];s.refs--,n.push(s)}e?(i=l(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var h=0;h<s.parts.length;h++)s.parts[h]();delete c[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s=i[1],h=i[2],l=i[3],c={id:t+":"+r,css:s,media:h,sourceMap:l};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,o,r,i){var a,s=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(a=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=o),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zeero-calendar",style:t.zcposition},[n("div",{staticClass:"zc-head"},[n("i",{staticClass:"previousyear",on:{click:function(e){t.preyear()}}},[n("svg",{staticClass:"icon",attrs:{t:"1546574535892",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1446","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"26",height:"26"}},[n("path",{attrs:{d:"M561.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L206.08 545.92A50.56 50.56 0 0 1 192 512a47.36 47.36 0 0 1 14.08-33.28L494.72 192a47.36 47.36 0 0 1 67.2 0z","p-id":"1447",fill:"#1296db"}}),n("path",{attrs:{d:"M817.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L462.08 545.92A50.56 50.56 0 0 1 448 512a47.36 47.36 0 0 1 14.08-33.28L750.72 192a47.36 47.36 0 0 1 67.2 0z","p-id":"1448",fill:"#1296db"}})])]),t._v(" "),n("i",{staticClass:"previousmonth",on:{click:function(e){t.premonth()}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1111","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"26",height:"26"}},[n("path",{attrs:{d:"M689.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L334.08 545.92A50.56 50.56 0 0 1 320 512a47.36 47.36 0 0 1 14.08-33.28L622.72 192a47.36 47.36 0 0 1 67.2 0z","p-id":"1112",fill:"#1296db"}})])]),t._v(" "),n("span",{staticClass:"zeero-select-year",on:{click:function(e){t.yearshow()}}},[t._v(t._s(t.setyear)),n("i",[t._v("年")])]),t._v(" "),n("span",{on:{click:function(e){t.monthshow()}}},[t._v(t._s(t.setmonth+1)),n("i",[t._v("月")])]),t._v(" "),n("i",{staticClass:"nextmonth",on:{click:function(e){t.ntmonth()}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1295","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"26",height:"26"}},[n("path",{attrs:{d:"M334.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 704 512a47.36 47.36 0 0 0-14.08-33.28L401.28 192a47.36 47.36 0 0 0-67.2 0z","p-id":"1296",fill:"#1296db"}})])]),t._v(" "),n("i",{staticClass:"nextyear",on:{click:function(e){t.ntyear()}}},[n("svg",{staticClass:"icon",attrs:{t:"1546574723607",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1564","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"26",height:"26"}},[n("path",{attrs:{d:"M462.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 832 512a47.36 47.36 0 0 0-14.08-33.28L529.28 192a47.36 47.36 0 0 0-67.2 0z","p-id":"1565",fill:"#1296db"}}),n("path",{attrs:{d:"M206.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l291.84-286.08A50.56 50.56 0 0 0 576 512a47.36 47.36 0 0 0-14.08-33.28L273.28 192a47.36 47.36 0 0 0-67.2 0z","p-id":"1566",fill:"#1296db"}})])])]),t._v(" "),n("table",{staticClass:"zc-content"},[t._m(0),t._v(" "),n("tbody",t._l(t.dateitem,function(e,o){return n("tr",{key:o},t._l(e,function(e,o){return n("td",{key:o,class:e.month!=t.setmonth?"zeero-othermonth":e.day==t.today&&e.month==t.tomonth?"zeero-tdmark":"",on:{click:function(n){t.bearfruit(e)}}},[t._v(t._s(e.day))])}),0)}),0)]),t._v(" "),t.yeartab?n("ul",{staticClass:"zeero-year-list"},t._l(t.yearlist,function(e,o){return n("li",{key:o,class:e==t.toyear?"zeero-tdmark":"",on:{click:function(n){t.selectyear(e)}}},[t._v(t._s(e))])}),0):t._e(),t._v(" "),t.monthtab?n("ul",{staticClass:"zeero-month-list"},t._l(12,function(e,o){return n("li",{key:o,class:e==t.tomonth+1?"zeero-tdmark":"",on:{click:function(n){t.selectmonth(e)}}},[t._v(t._s(e)+"月")])}),0):t._e(),t._v(" "),n("div",{staticClass:"zeero-footool"},[n("div",{staticClass:"zeero-footer-btns"},[n("span",{on:{click:function(e){t.bearfruit("长期")}}},[t._v("长期")]),n("span",{on:{click:function(e){t.bearfruit(t.toyear+"-"+Number(t.tomonth+1)+"-"+t.today)}}},[t._v("现在")]),n("span",{on:{click:function(e){t.bearfruit(t.toyear+"-"+Number(t.tomonth+1)+"-"+t.today)}}},[t._v("确定")]),n("span",{on:{click:function(e){t.bearfruit("")}}},[t._v("清除")])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("日")]),n("th",[t._v("一")]),n("th",[t._v("二")]),n("th",[t._v("三")]),n("th",[t._v("四")]),n("th",[t._v("五")]),n("th",[t._v("六")])])])}],i={render:o,staticRenderFns:r};e.a=i}])});
//# sourceMappingURL=zeero-calendar.js.map