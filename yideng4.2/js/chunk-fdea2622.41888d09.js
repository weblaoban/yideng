(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdea2622"],{"02dd":function(t,n,e){"use strict";e("556d")},"556d":function(t,n,e){},"857a":function(t,n,e){var i=e("1d80"),s=/"/g;t.exports=function(t,n,e,o){var c=String(i(t)),r="<"+n;return""!==e&&(r+=" "+e+'="'+String(o).replace(s,"&quot;")+'"'),r+">"+c+"</"+n+">"}},9911:function(t,n,e){"use strict";var i=e("23e7"),s=e("857a"),o=e("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return s(this,"a","href",t)}})},af03:function(t,n,e){var i=e("d039");t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},bb51:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"h2"},[e("h2",{domProps:{textContent:t._s(t.$t("lang.homeTitle"))}}),e("h4",{domProps:{textContent:t._s(t.$t("lang.homeP"))}})])]),e("div",{staticClass:"container"},[e("ul",{staticClass:"clear"},t._l(t.sectionData,(function(n,i){return e("li",{key:i,on:{click:function(e){return t.sectionClick(n)}}},[e("p",{domProps:{textContent:t._s(t.$t("lang.homeMenu"+(i+1)))}})])})),0)])])},s=[],o=e("5530"),c=(e("9911"),e("2f62")),r={name:"Home",data:function(){return{sectionData:[{link:"/list"},{desc:"我们的团队",link:"/introduce"},{desc:"我们的服务",link:"/service"},{desc:"我们的网络",link:"/internet"}]}},computed:Object(o["a"])({},Object(c["c"])(["isLogin"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setShowLogin","setLoginMaskHeight"])),{},{sectionClick:function(t){var n=this;"/list"===t.link?this.isLogin?this.$router.push(t.link):(this.$nextTick((function(){var t=document.getElementById("app");n.setLoginMaskHeight(t.offsetHeight)})),this.setShowLogin(!0),sessionStorage.setItem("toList","toList"),window.scrollTo(0,0)):this.$router.push(t.link)}})},a=r,u=(e("02dd"),e("2877")),l=Object(u["a"])(a,i,s,!1,null,"59195bf6",null);n["default"]=l.exports}}]);