(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"054d":function(t,e,n){},2541:function(t,e,n){t.exports=n.p+"img/LOGO_TITLE.e713a8cf.png"},"69ea":function(t,e,n){},"96c6":function(t,e,n){"use strict";n("69ea")},af7c:function(t,e,n){"use strict";n("fcd3")},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"scroll-content",attrs:{fluid:""}},[!0===t.getIsLoadingPage?n("loadPage",{staticClass:"clip"}):n("div",[n("HiddenHeader",{staticClass:"home-hidden"}),n("div",{staticClass:"home"},[n("Header"),n("div",{staticClass:"router"},[n("router-view")],1)],1)],1)],1)},c=[],s=n("5530"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homeBar",attrs:{id:"homebar-id"}},[a("div",{staticClass:"logo-title",on:{click:function(e){return t.$router.push({name:"Main"})}}},[a("img",{staticClass:"header-png",attrs:{src:n("2541")}})]),a("div",{staticClass:"countBar"},[a("CountBar")],1)])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"count-input"}},[n("input",{ref:"count-search",staticClass:"count-search",attrs:{id:"tt",type:"text",placeholder:"테스트"}})])},l=[],d=(n("b0c0"),n("2f62")),u={computed:Object(s["a"])({},Object(d["c"])(["getCounter","getWhatCount","getIssue"])),name:"CountBar",methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["changeCountMain","changeCountIssue"])),{},{changePlaceholder:function(t){if(t){var e=this.$refs["count-search"];e.placeholder="현재 모아진 아이디어   ".concat(this.getCounter)}else{var n=this.$refs["count-search"];n.placeholder="요청 검토 중인 아이디어    ".concat(this.getIssue.length)}}}),mounted:function(){var t=this.$refs["count-search"];t.placeholder="현재 모아진 아이디어   ".concat(this.getCounter)},watch:{$route:function(t){console.log(t),"Main"===t.name?(this.changeCountMain(),this.changePlaceholder(this.getWhatCount)):"Issue"===t.name?(this.changeCountIssue(),this.changePlaceholder(this.getWhatCount)):console.log("다른 페이지")}}},h=u,f=(n("bfce"),n("2877")),m=Object(f["a"])(h,r,l,!1,null,"44506a96",null),g=m.exports,p={components:{CountBar:g},name:"Header"},b=p,v=(n("bfed"),Object(f["a"])(b,i,o,!1,null,"42e0044b",null)),C=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hidden-title",attrs:{id:"hiddenbar"}},[a("div",{staticClass:"hidden-text",on:{click:function(e){return t.$router.push({name:"Home"})}}},[a("img",{staticClass:"hidden-png",attrs:{src:n("2541")}})]),t._m(0)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hidden-input"}},[n("input",{staticClass:"hidden-search",attrs:{type:"text",placeholder:""}})])}],H={data:function(){return{scroll:0,scrollWindow:"",homeHeader:""}},name:"HiddenHeader",methods:{handleScroll:function(){this.scroll=window.scrollY,0<=this.scroll&&this.scroll<10?(this.scrollWindow.style.display="none",this.homeHeader.style.display="flex"):(this.homeHeader.style.display="hidden",this.scrollWindow.style.display="flex")}},created:function(){window.addEventListener("scroll",this.handleScroll)},mounted:function(){var t=document.getElementById("hiddenbar"),e=document.getElementById("homebar-id");this.homeHeader=e,this.scrollWindow=t},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},_=H,j=(n("dfc6"),Object(f["a"])(_,w,O,!1,null,"348e5069",null)),y=j.exports,$=n("be51"),x={computed:Object(s["a"])({},Object(d["c"])(["getIsLoadingPage"])),components:{HiddenHeader:y,Header:C,loadPage:$["a"]},methods:Object(s["a"])({},Object(d["b"])(["dataLoad"])),created:function(){this.dataLoad()}},E=x,I=(n("af7c"),n("6544")),L=n.n(I),P=n("a523"),B=Object(f["a"])(E,a,c,!1,null,"2647ded2",null);e["default"]=B.exports;L()(B,{VContainer:P["a"]})},be51:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[t._v("로딩")])},c=[],s={name:"loadPage"},i=s,o=(n("96c6"),n("2877")),r=Object(o["a"])(i,a,c,!1,null,"11f860ee",null);e["a"]=r.exports},bfce:function(t,e,n){"use strict";n("c3cc")},bfed:function(t,e,n){"use strict";n("054d")},c3b3:function(t,e,n){},c3cc:function(t,e,n){},dfc6:function(t,e,n){"use strict";n("c3b3")},fcd3:function(t,e,n){}}]);
//# sourceMappingURL=Home.7c20a219.js.map