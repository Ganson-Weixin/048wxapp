(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0dd4":function(n,t,i){"use strict";(function(n){i("0d1d"),i("921b");e(i("66fd"));var t=e(i("72d0"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},"1d01":function(n,t,i){"use strict";var e=i("5c86"),a=i.n(e);a.a},"5c86":function(n,t,i){},"72d0":function(n,t,i){"use strict";i.r(t);var e=i("b954"),a=i("cfa3");for(var r in a)"default"!==r&&function(n){i.d(t,n,(function(){return a[n]}))}(r);i("1d01");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);t["default"]=c.exports},a348:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,i,e,a,r,u){try{var o=n[r](u),c=o.value}catch(s){return void i(s)}o.done?t(c):Promise.resolve(c).then(e,a)}function u(n){return function(){var t=this,i=arguments;return new Promise((function(e,a){var u=n.apply(t,i);function o(n){r(u,e,a,o,c,"next",n)}function c(n){r(u,e,a,o,c,"throw",n)}o(void 0)}))}}i("d158");var o=function(){Promise.all([i.e("common/vendor"),i.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(i("ebf4"))}.bind(null,i)).catch(i.oe)},c={components:{uniIcons:o},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"电影名称"}],queryIndex:0,searchForm:{dianyingxinxidianyingmingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],dianyingxinxilist:[],news:[]}},onShow:function(){var n=u(e.default.mark((function n(){var t,i,a,r,u,o,c,s;return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t=[],n.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(i=n.sent,a=!0,r=!1,u=void 0,n.prev=8,o=i.data.list[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](8),r=!0,u=n.t0;case 16:n.prev=16,n.prev=17,a||null==o.return||o.return();case 19:if(n.prev=19,!r){n.next=22;break}throw u;case 22:return n.finish(19);case 23:return n.finish(16);case 24:return t&&(this.swiperList=t),n.next=27,this.$api.list("news",{page:1,limit:3});case 27:return i=n.sent,this.news=i.data.list,n.next=31,this.$api.recommend("dianyingxinxi",1,6);case 31:i=n.sent,this.dianyingxinxilist=i.data.list;case 33:case"end":return n.stop()}}),n,this,[[8,12,16,24],[17,,19,23]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.dianyingxinxidianyingmingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.dianyingxinxidianyingmingcheng),this.searchForm.dianyingxinxidianyingmingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,i("543d")["default"])},b954:function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement,i=(n._self._c,n.__map(n.dianyingxinxilist,(function(t,i){var e=t.haibao.split(",");return{$orig:n.__get_orig(t),g0:e}}))),e=n.__map(n.dianyingxinxilist,(function(t,i){var e=t.haibao.split(",");return{$orig:n.__get_orig(t),g1:e}}));n.$mp.data=Object.assign({},{$root:{l0:i,l1:e}})},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}))},cfa3:function(n,t,i){"use strict";i.r(t);var e=i("a348"),a=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,(function(){return e[n]}))}(r);t["default"]=a.a}},[["0dd4","common/runtime","common/vendor"]]]);