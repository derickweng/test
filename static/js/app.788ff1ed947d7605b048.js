webpackJsonp([1,2],Array(27).concat([function(s,t,a){"use strict";var i=a(64);({getLyc:i.a.jsonp.bind(null,"http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg")})},,,,,,,,,,,,,,,,,,,function(s,t,a){s.exports=a.p+"static/img/1.9c7ca18.jpg"},function(s,t,a){s.exports=a.p+"static/img/2.3c957b3.jpg"},function(s,t,a){a(105);var i=a(2)(a(55),a(124),"data-v-769ce2e8",null);s.exports=i.exports},function(s,t,a){a(110);var i=a(2)(a(56),a(127),null,null);s.exports=i.exports},function(s,t,a){"use strict";var i=a(6),n=a.n(i);n.a.directive("flowScroll",{update:function(s,t){t.value?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"):(document.documentElement.style.overflow="",document.body.style.overflow="")}})},function(s,t,a){"use strict";var i=a(6),n=a.n(i),e=a(130),l=a.n(e),c=a(118),o=a.n(c),r=a(117),v=a.n(r),_=a(115),p=a.n(_),u=a(114),d=a.n(u);n.a.use(l.a),t.a=new l.a({base:"/",routes:[{path:"/",component:o.a,children:[{path:"",name:"billboard",component:v.a}]},{path:"/playing",name:"playing",component:p.a},{path:"/list",name:"list",component:d.a},{path:"*",redirect:"/"}]})},function(s,t,a){"use strict";var i=a(29),n=a.n(i),e=a(6),l=a.n(e),c=a(15),o=a.n(c);l.a.use(o.a),t.a=new o.a.Store({state:{playlistToggle:!1,showSearch:!1,playing:!1,tranStyle:"downslide"},mutations:{increPlaylist:function(s){s.playlistToggle=!s.playlistToggle},incresearch:function(s){s.showSearch=!s.showSearch},increTranStyle:function(s,t){s.tranStyle=t},increPlaying:function(s){s.playing=!s.playing}},actions:{increTranStyle:function(s,t){return new n.a(function(a,i){s.commit("increTranStyle",t),s.state.tranStyle===t&&a()})}}})},function(s,t,a){a(109),a(108),a(107);var i=a(2)(a(54),a(126),null,null);s.exports=i.exports},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(27);t.default={name:"app",beforeMount:function(){this.setFontSize(640)},methods:{setFontSize:function(s){var t=document.documentElement,a="orientationchange"in window?"orientationchage":"resize",i=function(){var a=t.clientWidth;a&&(t.style.fontSize=20*(a/s)+"px")};t.style.fontSize||i(),window.addEventListener(a,i,!1)}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"playfooter",data:function(){return{}},computed:{audioActived:function(){return this.$store.state.playing}},methods:{goPlaying:function(){this.$emit("routego","playing")},togglePlaying:function(){this.$store.commit("increPlaying")},showplaylist:function(){this.$store.commit("increPlaylist")}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(30),n=a.n(i),e=a(15);a.n(e);t.default={name:"playlist",computed:n()({},a.i(e.mapState)({showlist:function(s){return s.playlistToggle}})),methods:{setScroll:function(s){console.log(s),s.preventDefault()},close:function(s){s.target===s.currentTarget&&(this.$store.state.playlistToggle=!1)}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},directives:{focus:{update:function(s,t){t.value&&s.focus()}}},computed:{showSearch:function(){return this.$store.state.showSearch}},methods:{toggleSearch:function(s){s.target===s.currentTarget&&this.$store.commit("incresearch")}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"songset",data:function(){return{togglelist:!1}},mounted:function(){this.togglelist=!0},methods:{toggleSet:function(){this.$emit("toggleset")},playImm:function(){this.$emit("playImm")},addPlayList:function(){this.$emit("addPlayList")}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(47),n=a.n(i),e=a(48),l=a.n(e),c=a(113),o=a.n(c);t.default={components:{playfooter:l.a,songset:o.a},data:function(){return{listImg:n.a,showHeader:!1,showsongset:!1}},beforeRouteEnter:function(s,t,a){a(function(s){setTimeout(function(){s.showHeader=!0},500)})},methods:{toggleSet:function(){this.showsongset=!this.showsongset},routego:function(s){var t=this;this.$store.dispatch("increTranStyle","downslide").then(function(){t.$router.push({name:s})})},backIndex:function(){this.$router.push({name:"billboard"})}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(46),n=(a.n(i),a(49)),e=a.n(n);t.default={name:"playing",components:{playlist:e.a},computed:{transtyle:function(){return this.$store.state.tranStyle},hasplaying:function(){return this.$store.state.playing}},methods:{goback:function(){var s=this;this.$store.dispatch("increTranStyle","rightslide").then(function(){s.$router.push({name:"billboard"})})},toggleAudio:function(){this.$store.commit("increPlaying")},showplaylist:function(){this.$store.commit("increPlaylist")}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(28),n=a.n(i),e=a(66),l=a.n(e);t.default={name:"banner",props:{bannerlist:{require:!0}},data:function(){return{sliderActive:{transform:"translate3d(0,0,0)"},nowSlider:0}},computed:{sliderBtn:function(){return this.bannerlist},sliderImg:function(){var s=l()(this.bannerlist),t=s.slice(0);return t}},mounted:function(){this.sliderStart()},methods:{canActive:function(s){return s===this.nowSlider},sliderStart:function(){var s=this,t=this.bannerlist.length;setInterval(function(){s.nowSlider++,s.nowSlider%=t,s.sliderActive=n()({},{transform:"translate3d("+-100*s.nowSlider+"%,0,0)"})},3e3)}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(47),n=a.n(i);t.default={name:"billboard",data:function(){return{listContent:[{url:n.a},{url:n.a},{url:n.a}]}},methods:{gotlist:function(){var s=this;this.$store.dispatch("increTranStyle","leftslide").then(function(){s.$router.push({name:"list"})})}}}},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(30),n=a.n(i),e=a(116),l=a.n(e),c=a(48),o=a.n(c),r=a(49),v=a.n(r),_=a(112),p=a.n(_),u=(a(27),a(46)),d=a.n(u),C=a(15);a.n(C);t.default={name:"toplist",components:{banner:l.a,playfooter:o.a,playlist:v.a,search:p.a},data:function(){return{nowType:{width:"",left:""},showHeader:!1,bannerlist:[{url:d.a},{url:d.a},{url:d.a}]}},beforeRouteEnter:function(s,t,a){a(function(s){setTimeout(function(){s.showHeader=!0},100)})},computed:n()({},a.i(C.mapState)({showSearch:function(s){return s.showSearch},transtyle:function(s){return s.tranStyle}})),mounted:function(){},methods:{routego:function(s){var t=this;this.$store.dispatch("increTranStyle","downslide").then(function(){t.$router.push({name:s})})},stateSearch:function(){this.$store.commit("incresearch")},listActive:function(s){var t=s.target;if(~t.className.search("list-type-item")){var a=window.getComputedStyle(t).width;this.nowType={width:a,left:s.target.getAttribute("index")*parseInt(a)+"px"}}}}}},function(s,t,a){"use strict";function i(s){return 0!=s.data.code?c.a.reject(s):c.a.resolve(s)}function n(s,t){return r.a.http.get(s,{params:t}).then(function(s){return i(s)})}function e(s,t){return r.a.http.jsonp(s,{params:{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(s){return i(s)})}var l=a(29),c=a.n(l),o=a(6),r=a.n(o),v=a(129),_=a.n(v);r.a.use(_.a),t.a={get:n,jsonp:e}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t){},function(s,t,a){a(100);var i=a(2)(a(57),a(119),null,null);s.exports=i.exports},function(s,t,a){a(103);var i=a(2)(a(58),a(122),"data-v-38aa9ce6",null);s.exports=i.exports},function(s,t,a){a(102);var i=a(2)(a(59),a(121),null,null);s.exports=i.exports},function(s,t,a){a(106);var i=a(2)(a(60),a(125),"data-v-7e682f1e",null);s.exports=i.exports},function(s,t,a){a(111);var i=a(2)(a(61),a(128),"data-v-dd5c128a",null);s.exports=i.exports},function(s,t,a){a(104);var i=a(2)(a(62),a(123),"data-v-3a85c0b4",null);s.exports=i.exports},function(s,t,a){a(101);var i=a(2)(a(63),a(120),"data-v-29d64576",null);s.exports=i.exports},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"search-head"},[a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.showSearch,expression:"showSearch"}],staticClass:"search-inp-wrap"},[a("input",{directives:[{name:"focus",rawName:"v-focus",value:s.showSearch,expression:"showSearch"}],staticClass:"searchtext",attrs:{type:"text"}})])])],1),s._v(" "),a("transition",{attrs:{name:"downslide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.showSearch,expression:"showSearch"},{name:"flowScroll",rawName:"v-flowScroll",value:s.showSearch,expression:"showSearch"}],staticClass:"search-list-warp",on:{click:function(t){s.toggleSearch(t)}}},[a("ol",{staticClass:"searchlist"},[a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])]),s._v(" "),a("li",{staticClass:"search-items"},[a("span",[s._v("1.")]),a("span",{staticClass:"songname"},[s._v("摆渡人")]),a("span",{staticClass:"hot-res"},[s._v("热度:18910")])])])])])],1)},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:s.transtyle}},[a("div",{staticClass:"top-wrap"},[a("div",{staticClass:"toplist"},[a("header",{staticClass:"topheader"},[a("a",{staticClass:"search-ico-wrap",attrs:{href:"javascript:;"}},[a("span",{staticClass:"icon-search",on:{click:s.stateSearch}})])]),s._v(" "),a("banner",{attrs:{bannerlist:s.bannerlist}}),s._v(" "),a("div",{staticClass:"list-wrap"},[a("ul",{staticClass:"list-type",on:{click:function(t){s.listActive(t)}}},[a("li",{staticClass:"list-type-item",attrs:{index:"0"}},[s._v("排行榜")]),s._v(" "),a("li",{staticClass:"list-type-item",attrs:{index:"1"}},[s._v("歌单")]),s._v(" "),a("li",{staticClass:"list-type-item",attrs:{index:"2"}},[s._v("个性推荐")]),s._v(" "),a("li",{staticClass:"list-type-item",attrs:{index:"3"}},[s._v("主播电台")])]),s._v(" "),a("div",{staticClass:"list-bar",style:s.nowType})]),s._v(" "),a("router-view")],1),s._v(" "),a("transition",{attrs:{name:"downslide"}},[s.showHeader?a("playfooter",{on:{routego:s.routego}}):s._e()],1),s._v(" "),a("playlist"),s._v(" "),a("search")],1)])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:"rightslide"}},[a("div",{staticClass:"listdetail",class:[s.showHeader?"calcH":"maxH"]},[a("header",{staticClass:"list-head"},[a("div",{staticClass:"icon-back",on:{click:s.backIndex}})]),s._v(" "),a("div",{staticClass:"list-img"},[a("img",{attrs:{src:s.listImg}})]),s._v(" "),a("article",{staticClass:"list-art"},[a("ol",[a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap",on:{click:s.toggleSet}},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])]),s._v(" "),a("li",{staticClass:"list-item"},[a("p",{staticClass:"list-num"},[s._v("1")]),s._v(" "),a("p",{staticClass:"song"},[a("span",{staticClass:"song-name"},[s._v("还不是因为你长得不好了")]),s._v(" "),a("span",{staticClass:"song-art"},[s._v("张杰-歌手"),a("span",[s._v("第5期")])])]),s._v(" "),a("div",{staticClass:"icon-song-wrap"},[a("div",{staticClass:"icon-song"})])])])]),s._v(" "),s.showsongset?a("songset",{on:{toggleset:s.toggleSet}}):s._e(),s._v(" "),s.showHeader?a("playfooter",{on:{routego:s.routego}}):s._e()],1)])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"song-add",on:{click:function(t){t.target===t.currentTarget&&s.toggleSet(t)}}},[a("transition",{attrs:{name:"downslide"}},[s.togglelist?a("div",{staticClass:"song-set"},[a("div",{staticClass:"song-head"},[s._v("歌曲：还不是因为你长得不好了")]),s._v(" "),a("ul",{staticClass:"set-items"},[a("li",{staticClass:"set-item",on:{click:s.playImm}},[s._v("立即播放")]),s._v(" "),a("li",{staticClass:"set-item",on:{click:s.addPlayList}},[s._v("加入到播放列表")])])]):s._e()])],1)])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"billboard-wrap"},[a("ul",{staticClass:"billboard"},s._l(s.listContent,function(t){return a("li",{staticClass:"billboard-item",on:{click:s.gotlist}},[a("div",{staticClass:"ban-l"},[a("img",{attrs:{src:t.url}})]),s._v(" "),s._m(0,!0)])}))])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",{staticClass:"ban-r"},[a("li",[s._v("1.送情郎-岳云鹏/好妹妹乐队")])])}]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:"downslide"}},[a("div",{staticClass:"footer-warp"},[a("div",{staticClass:"playfooter"},[a("div",{staticClass:"playmsg",on:{click:s.goPlaying}},[a("p",{staticClass:"song-name"},[s._v("\r\n                        全世界东北话\r\n                    ")]),s._v(" "),a("p",{staticClass:"song-artist"},[s._v("\r\n                        DBbosy组合\r\n                    ")])]),s._v(" "),a("ul",{staticClass:"nav-button"},[a("li",{staticClass:"nav-btn-items",on:{click:s.showplaylist}},[a("span",{staticClass:"icon-list"})]),s._v(" "),a("li",{staticClass:"nav-btn-items",on:{click:s.togglePlaying}},[a("div",{staticClass:"icon-audio"},[a("div",{class:[s.audioActived?"audio-playing":"audio-pause"]})])]),s._v(" "),a("li",{staticClass:"nav-btn-items"},[a("div",{staticClass:"audio-next"},[a("div",{staticClass:"next-line"}),s._v(" "),a("div",{staticClass:"line-right"})])])])]),s._v(" "),a("div",{staticClass:"playbar"})])])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:s.transtyle}},[a("div",{staticClass:"playing"},[a("div",{staticClass:"play-warp"},[a("header",{staticClass:"playing-head",on:{click:s.goback}},[a("a",{staticClass:"back-btn",attrs:{href:"javascript:;"}},[a("span",{staticClass:"icon-back"})]),s._v(" "),a("div",{staticClass:"playing-title"},[a("p",{staticClass:"song-name"},[s._v("分生疏啊首发身份撒发射反反复复吩咐")]),s._v(" "),a("p",{staticClass:"song-art"},[s._v("容祖儿")])])]),s._v(" "),a("article",{staticClass:"playing-art"},[a("ul",{staticClass:"lysrc-items"},[a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),s._v(" "),a("li",[s._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")])])]),s._v(" "),a("footer",{staticClass:"playing-footer"},[a("div",{staticClass:"progess"}),s._v(" "),a("ul",{staticClass:"foot-btn"},[a("li",[a("div",{staticClass:"icon-pre icon"})]),s._v(" "),a("li",{on:{click:s.toggleAudio}},[a("div",{staticClass:"icon-audio icon"},[a("div",{class:[s.hasplaying?"audio-playing":"audio-pause"]})])]),s._v(" "),a("li",[a("div",{staticClass:"icon-next icon"})]),s._v(" "),a("li",{staticClass:"icon-list-btn",on:{click:s.showplaylist}},[a("div",{staticClass:"icon-list icon"})])])])]),s._v(" "),a("div",{staticClass:"playbg"}),s._v(" "),a("playlist")],1)])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"app"},[a("router-view")],1)},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.showlist,expression:"showlist"}],staticClass:"mask",on:{click:function(t){s.close(t)},scroll:function(t){s.setScroll(t)}}},[a("transition",{attrs:{name:"downslide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.showlist,expression:"showlist"},{name:"flowScroll",rawName:"v-flowScroll",value:s.showlist,expression:"showlist"}],staticClass:"playlist"},[a("header",{staticClass:"playlist-head"},[a("span",{staticClass:"title"},[s._v("播放列表(23)")]),a("a",{staticClass:"clearList",attrs:{href:"javascript:;"}},[s._v("清空")])]),s._v(" "),a("ul",{staticClass:"playlist-art"},[a("li",{staticClass:"list-li"},[a("span",{staticClass:"songname"},[s._v("想你的旧名字")]),a("span",{staticClass:"songart"},[s._v("- 李克勤")]),a("span",{staticClass:"del-list"},[s._v("✖")])]),s._v(" "),a("li",{staticClass:"list-li"},[a("span",{staticClass:"songname"},[s._v("想你的旧名字")]),a("span",{staticClass:"songart"},[s._v("- 李克勤")]),a("span",{staticClass:"del-list"},[s._v("✖")])]),s._v(" "),a("li",{staticClass:"list-li active"},[a("span",{staticClass:"songname"},[s._v("想你的旧名字")]),a("span",{staticClass:"songart"},[s._v("- 李克勤")]),a("span",{staticClass:"del-list"},[s._v("✖")])])])])])],1)])},staticRenderFns:[]}},function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"banner"},[a("div",{staticClass:"slider-wrap"},[a("ul",{staticClass:"slider-img",style:s.sliderActive},s._l(s.sliderImg,function(s){return a("li",{staticClass:"slider-item"},[a("img",{attrs:{src:s.url}})])}))]),s._v(" "),a("ul",{staticClass:"banner-page"},s._l(s.bannerlist,function(t,i){return a("li",{staticClass:"slider-btn",class:{active:s.canActive(i)}})}))])},staticRenderFns:[]}},,,,,function(s,t){},function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(6),n=a.n(i),e=a(53),l=a.n(e),c=a(51),o=a(52),r=a(50);new n.a({el:"#app",router:c.a,store:o.a,directives:r.default,template:"<App/>",components:{App:l.a}})}]),[134]);
//# sourceMappingURL=app.788ff1ed947d7605b048.js.map