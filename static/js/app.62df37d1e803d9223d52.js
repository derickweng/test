webpackJsonp([1,2],[,,,,,,function(t,s,e){"use strict";var i=e(30),n=e.n(i),a=e(63),o=function(){var t={getbanner:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",gettoplist:"http://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",getlistDetail:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",gethotkey:"http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg"},s={};return n()(t).forEach(function(e){s[e]=a.a.jsonp.bind(null,t[e])}),s}();s.a=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){e(107);var i=e(2)(e(54),e(129),"data-v-769ce2e8",null);t.exports=i.exports},function(t,s,e){e(112);var i=e(2)(e(55),e(132),null,null);t.exports=i.exports},function(t,s,e){"use strict";var i=e(12),n=e.n(i);n.a.directive("flowScroll",{update:function(t,s){s.value?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"):(document.documentElement.style.overflow="",document.body.style.overflow="")}}),n.a.directive("load",{update:function(t,s){s.value&&s.value.length?t.style.display="none":t.style.display="block"}})},function(t,s,e){"use strict";var i=e(12),n=e.n(i),a=e(134),o=e.n(a),l=e(122),r=e.n(l),c=e(121),u=e.n(c),d=e(119),v=e.n(d),h=e(118),p=e.n(h);n.a.use(o.a),s.a=new o.a({base:"/",routes:[{path:"/",component:r.a,children:[{path:"",name:"billboard",component:u.a}]},{path:"/playing",name:"playing",component:v.a},{path:"/list/:id",name:"list",component:p.a},{path:"*",redirect:"/"}]})},function(t,s,e){"use strict";var i=e(31),n=e.n(i),a=e(12),o=e.n(a),l=e(18),r=e.n(l);o.a.use(r.a),s.a=new r.a.Store({state:{playlistToggle:!1,showSearch:!1,playing:!1,tranStyle:"downslide"},mutations:{increPlaylist:function(t){t.playlistToggle=!t.playlistToggle},incresearch:function(t){t.showSearch=!t.showSearch},increTranStyle:function(t,s){t.tranStyle=s},increPlaying:function(t){t.playing=!t.playing}},actions:{increTranStyle:function(t,s){return new n.a(function(e,i){t.commit("increTranStyle",s),t.state.tranStyle===s&&e()})}}})},function(t,s,e){e(111),e(110),e(109);var i=e(2)(e(53),e(131),null,null);t.exports=i.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e(6);s.default={name:"app",beforeMount:function(){this.setFontSize(640)},methods:{setFontSize:function(t){var s=document.documentElement,e="orientationchange"in window?"orientationchage":"resize",i=function(){var e=s.clientWidth;e&&(s.style.fontSize=20*(e/t)+"px")};s.style.fontSize||i(),window.addEventListener(e,i,!1)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"playfooter",computed:{audioActived:function(){return this.$store.state.playing}},methods:{goPlaying:function(){this.$emit("routego","playing")},togglePlaying:function(){this.$emit("toggleplaying")},showplaylist:function(){this.$emit("showplaylist")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(32),n=e.n(i),a=e(18);e.n(a);s.default={name:"playlist",computed:n()({},e.i(a.mapState)({showlist:function(t){return t.playlistToggle}})),methods:{setScroll:function(t){console.log(t),t.preventDefault()},close:function(t){t.target===t.currentTarget&&this.$emit("playlisttoggle")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"songset",props:{targetsong:{require:!0}},data:function(){return{togglelist:!1}},mounted:function(){this.togglelist=!0},methods:{toggleSet:function(){this.$emit("toggleset")},playImm:function(){this.$emit("playImm")},addPlayList:function(){this.$emit("addPlayList")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(114),n=e.n(i),a=e(47),o=e.n(a),l=e(117),r=e.n(l),c=e(6);s.default={components:{playfooter:o.a,songset:r.a},data:function(){return{blockload:n.a,topinfo:{},songlist:[],targetSong:{},showHeader:!1,showsongset:!1}},mounted:function(){this.getListDetail(this.$route.params.id)},beforeRouteEnter:function(t,s,e){e(function(t){setTimeout(function(){t.showHeader=!0},500)})},methods:{getListDetail:function(t){var s=this,e={topid:t,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:"0",callback:"jsonpCallback"};c.a.getlistDetail(e).then(function(t){s.topinfo=t.topinfo,s.songlist=t.songlist})},toggleSet:function(t){t&&(this.targetSong=t),this.showsongset=!this.showsongset},routego:function(t){var s=this;this.$store.dispatch("increTranStyle","downslide").then(function(){s.$router.push({name:t})})},backIndex:function(){this.$router.push({name:"billboard"})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(48),n=e.n(i);s.default={name:"playing",components:{playlist:n.a},computed:{transtyle:function(){return this.$store.state.tranStyle},hasplaying:function(){return this.$store.state.playing}},methods:{goback:function(){var t=this;this.$store.dispatch("increTranStyle","rightslide").then(function(){t.$router.push({name:"billboard"})})},toggleAudio:function(){this.$store.commit("increPlaying")},showplaylist:function(){this.$store.commit("increPlaylist")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(29),n=e.n(i),a=e(65),o=e.n(a),l=e(116),r=e.n(l);s.default={name:"banner",props:{bannerlist:{require:!0},picurl:{require:!0},linkurl:{require:!0}},data:function(){return{sliderActive:{transform:"translate3d(-100vw,0,0)",transition:"transform 2s"},interTimer:"",startTouch:"",moveTouch:"",canslider:!0,nowSlider:0}},computed:{sliderImg:function(){var t=o()(this.bannerlist),s=t.slice(0),e=o()(this.bannerlist),i=e[0],n=e.slice(1);return s.unshift(n[n.length-1]),s.push(i),s}},mounted:function(){var t=this;this.bannerlist&&this.bannerlist.length&&(this.interTimer=setInterval(function(){t.sliderStart()},3e3))},methods:{linkURl:function(t){window.open(t[this.linkurl])},getURl:function(t,s){return t?t.hasload?t[this.picurl]:this.nowSlider==s-1?(t.hasload=!0,t[this.picurl]):r.a:r.a},stopSlider:function(t){t.preventDefault(),t.stopPropagation(),t.target!=t.currentTarget&&(clearInterval(this.interTimer),delete this.sliderActive.transition,this.startTouch=t.targetTouches[0].screenX)},moveSlider:function(t){if(t.preventDefault(),t.stopPropagation(),this.nowSlider!==-1&&this.nowSlider!==this.bannerlist.length&&t.target!=t.currentTarget){this.moveTouch=t.targetTouches[0].screenX;var s=this.moveTouch-this.startTouch,e=parseInt(window.getComputedStyle(t.target).width),i=void 0;(s<-50||s>50)&&(s<0?s-=50:s+=50,i=-e*(this.nowSlider+1)+s,this.sliderActive.transform="translate3d("+i+"px,0,0)")}},continSilder:function(t){var s=this;if(t.preventDefault(),t.stopPropagation(),t.target!=t.currentTarget&&this.moveTouch){var e=this.moveTouch-this.startTouch;e<0?this.nowSlider++:e>0&&this.nowSlider--,this.nowSlider--,this.sliderStart(),this.moveTouch=0,this.startTouch=0,this.interTimer=setInterval(function(){s.sliderStart()},3e3)}},sliderStart:function(){var t=this;this.nowSlider++,this.nowSlider%=this.sliderImg.length,this.nowSlider===this.bannerlist.length&&setTimeout(function(){t.sliderActive={transform:"translate3d(-100vw,0,0)"},t.nowSlider=0},500),this.nowSlider===-1&&setTimeout(function(){t.nowSlider=t.bannerlist.length-1,t.sliderActive={transform:"translate3d("+-100*(t.nowSlider+1)+"vw,0,0)"}},500),this.sliderActive=n()({},{transition:"transform 0.5s",transform:"translate3d("+-100*(this.nowSlider+1)+"vw,0,0)"})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(115),n=e.n(i),a=e(6);s.default={name:"billboard",data:function(){return{listContent:[],loadgif:n.a}},mounted:function(){this.getbillboard()},methods:{getbillboard:function(){var t=this;a.a.gettoplist({g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:(new Date).getTime(),callback:"jsonpCallback"}).then(function(s){t.listContent=s.data.topList})},gotlist:function(t){var s=this;this.$store.dispatch("increTranStyle","leftslide").then(function(){s.$router.push({name:"list",params:{id:t.id}})})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(32),n=e.n(i),a=e(120),o=e.n(a),l=e(47),r=e.n(l),c=e(48),u=e.n(c),d=e(123),v=e.n(d),h=e(6),p=e(18);e.n(p);s.default={name:"toplist",components:{banner:o.a,playfooter:r.a,playlist:u.a,search:v.a},data:function(){return{nowType:{width:"",left:""},showSearch:!1,showHeader:!1,bannerlist:[]}},beforeRouteEnter:function(t,s,e){e(function(t){setTimeout(function(){t.showHeader=!0},100)})},computed:n()({},e.i(p.mapState)({transtyle:function(t){return t.tranStyle}})),mounted:function(){this.getbanner()},methods:{getbanner:function(){var t=this;h.a.getbanner({g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:"1",_:(new Date).getTime(),callback:"jsonpCallback"}).then(function(s){t.bannerlist=s.data.slider})},routego:function(t){var s=this;this.$store.dispatch("increTranStyle","downslide").then(function(){s.$router.push({name:t})})},togglePlaying:function(){this.$store.commit("increPlaying")},showplaylist:function(){this.$store.commit("increPlaylist")},stateSearch:function(){this.showSearch=!this.showSearch},listActive:function(t){var s=t.target;if(~s.className.search("list-type-item")){var e=window.getComputedStyle(s).width;this.nowType={width:e,left:t.target.getAttribute("index")*parseInt(e)+"px"}}}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(6);s.default={props:{showsearch:{require:!0}},data:function(){return{hostlist:[]}},directives:{focus:{update:function(t,s){s.value&&t.focus()}}},watch:{showsearch:function(t){t&&!this.hostlist.length&&this.gethot()}},methods:{gethot:function(){var t=this,s={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,callback:"jsonpCallback"};i.a.gethotkey(s).then(function(s){t.hostlist=s.data.hotkey})},toggleSearch:function(t){t.target===t.currentTarget&&this.$emit("togglesearch")}}}},function(t,s,e){"use strict";function i(t){return t.code&&0!=t.code?c.a.reject(t):c.a.resolve(t)}function n(t,s){return new c.a(function(e,i){try{var n=document.createElement("script"),a=document.getElementsByTagName("head")[0],o="",r=(new Date).getTime()+"_"+Math.random().toString().substr(2);l()(s).forEach(function(t){"callback"!=t&&(o+=t+"="+s[t]+"&")}),n.src=t+"?"+o+s.callback+"=jsonpback"+r,a.appendChild(n),window["jsonpback"+r]=function(t){e(t),a.removeChild(n),delete window["jsonpback"+r]}}catch(t){i(t)}})}function a(t,s){return n(t,s).then(function(t){return i(t)})}var o=e(30),l=e.n(o),r=e(31),c=e.n(r);s.a={jsonp:a}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){t.exports=e.p+"static/img/block-load.40fd521.gif"},function(t,s,e){t.exports=e.p+"static/img/load.547d53b.gif"},function(t,s){t.exports="data:image/gif;base64,R0lGODlh0AIgAaIAAP///8HU6QhWp9Xi8E+Gwejv93ym0a7H4iH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3ODVCQ0JERjhFQjExRTY5QjhCQTc4NEM5MTQ2NDM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk3ODVCQ0JFRjhFQjExRTY5QjhCQTc4NEM5MTQ2NDM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTc4NUJDQkJGOEVCMTFFNjlCOEJBNzg0QzkxNDY0MzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc4NUJDQkNGOEVCMTFFNjlCOEJBNzg0QzkxNDY0MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAA0AIgAQAD/wi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsf+jx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AA98tcMAAAQICEgs4EKDxgAEFCghOStiA4suKGTfevBnyZKEHEGMevZiz6c6SP++0TLq15tOwU6umWYB1a9ewczeWPfvlgdvAS+vWzbt3ygGig+MernuAcZW/lQN/zTx38echk0sXQMAAY8ipJRd4XN20c+whkW/vHgBD5PKb0X8csN1A+w7j4cvnSF+5gev/HQxQ3n4Z9QccAQCCICBzBFpUgHIHqFBAdQ1SpN1oCLawYG7nVfjQhZgZAMOGsHXo4ULRuSbDhMSduJCBpEU4A4u5uagQiJnZQONpJto4UIqjiXgDiaYl6CM/D7ZGgA5EcnbkQLaNZqQMLT75T5Kk3afDjqZZ+U+Uly3ZQ5O7ednPbVPWoJuZ+wTQmpA+kBlAmmy6g6MAdKpZYp33YBmiEHLyaQ+Ql2n5A5eb5SnoOXcSweGi87xJBKKNQRqPn5f1eGiNlr5DqGJGWNepO2AmJiYRZCo66jc4wjkEmZquag6OMk66p6zqtGaoEJTuims5rcUKBKe/ntOaqjgQWyyw/6Qhe4Oyy47D2AHTMoYEtNGGg60Q22brjahF9OotOeDaCtu446RqBKXCoqsNrEbA6y447MYb27z0dutDufh2wy8Q4vb7zb+bniuwN4EO8ejB3fTqLJX3MuzvrUAkLDE3Fv+w8MXb9NrukARzfM2aGusrMjUexxnyydZUuSXJLHcMcw4ux6xNc0zObHM2vc6JQ88P77yMnD7X0PPHQlMzXNAh9Oxr0tg4zbQHUkON8NIwOI201dQQHcDWIngNNtfTVDd1BU5XSjY41Y2tgddqr/1N2o6RAHfccrNdnmf43Y133uD4/bXbCrwHH+GAVyM4apEVFxl58NWdeDl0R255ovaTo7P45cMhnjnPnIeO+efrVC766KS3YzrnZ6fOTX6nc8a36/TAzvnstOfzuJyPRZb778AHL/zwxBdv/PHIJ6/88sw37/zz0Ecv/fTUV2/99dhnr/323Hfv/ffghy/++OSXb/756Kev/vrst+/++/DHL//89Ndv//3456///vz37///AAygAAdIwAIa8IAITKACF8jABjrwgRCMoAQnSMEKWvCCGMygBjfIwQ568IMgDKEIR0jCEprwhChMoQpXyMIWuvCFMIyhDGdIwxra8IY4zKEOd8jDHvrwh0AMohCHSMQiGvGISEyiEpfIxCY68YlQjGJUEgAAOw=="},function(t,s,e){e(104);var i=e(2)(e(56),e(126),"data-v-38aa9ce6",null);t.exports=i.exports},function(t,s,e){e(103);var i=e(2)(e(57),e(125),"data-v-369c4f22",null);t.exports=i.exports},function(t,s,e){e(108);var i=e(2)(e(58),e(130),"data-v-7e682f1e",null);t.exports=i.exports},function(t,s,e){e(113);var i=e(2)(e(59),e(133),"data-v-dd5c128a",null);t.exports=i.exports},function(t,s,e){e(105);var i=e(2)(e(60),e(127),"data-v-3a85c0b4",null);t.exports=i.exports},function(t,s,e){e(102);var i=e(2)(e(61),e(124),"data-v-29d64576",null);t.exports=i.exports},function(t,s,e){e(106);var i=e(2)(e(62),e(128),null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.transtyle}},[e("div",{staticClass:"top-wrap"},[e("div",{staticClass:"toplist"},[e("header",{staticClass:"topheader"},[e("a",{staticClass:"search-ico-wrap",attrs:{href:"javascript:;"}},[e("span",{staticClass:"icon-search",on:{click:t.stateSearch}})])]),t._v(" "),e("banner",{attrs:{bannerlist:t.bannerlist,picurl:"picUrl",linkurl:"linkUrl"}}),t._v(" "),e("div",{staticClass:"list-wrap"},[e("ul",{staticClass:"list-type",on:{click:function(s){t.listActive(s)}}},[e("li",{staticClass:"list-type-item",attrs:{index:"0"}},[t._v("排行榜")]),t._v(" "),e("li",{staticClass:"list-type-item",attrs:{index:"1"}},[t._v("歌单")]),t._v(" "),e("li",{staticClass:"list-type-item",attrs:{index:"2"}},[t._v("个性推荐")]),t._v(" "),e("li",{staticClass:"list-type-item",attrs:{index:"3"}},[t._v("主播电台")])]),t._v(" "),e("div",{staticClass:"list-bar",style:t.nowType})]),t._v(" "),e("router-view")],1),t._v(" "),t.showHeader?e("playfooter",{on:{routego:t.routego,toggleplaying:t.togglePlaying,showplaylist:t.showplaylist}}):t._e(),t._v(" "),e("playlist",{on:{playlisttoggle:t.showplaylist}}),t._v(" "),e("search",{attrs:{showsearch:t.showSearch},on:{togglesearch:t.stateSearch}})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"rightslide"}},[e("div",{staticClass:"listdetail",class:[t.showHeader?"calcH":"maxH"]},[e("header",{staticClass:"list-head"},[e("div",{staticClass:"icon-wrap",on:{click:t.backIndex}},[e("div",{staticClass:"icon-back"})]),t._v(" "),e("span",{staticClass:"list-title"},[t._v(" "+t._s(t.topinfo.ListName))])]),t._v(" "),e("div",{staticClass:"list-img"},[e("img",{attrs:{src:t.topinfo.pic_v12}})]),t._v(" "),e("article",{staticClass:"list-art"},[e("ol",t._l(t.songlist,function(s,i){return e("li",{staticClass:"list-item"},[e("p",{staticClass:"list-num"},[t._v(t._s(i+1))]),t._v(" "),e("p",{staticClass:"song"},[e("span",{staticClass:"song-name"},[t._v(t._s(s.data.songname))]),t._v(" "),e("span",{staticClass:"song-art"},[t._l(s.data.singer,function(s){return e("span",[t._v(t._s(s.name))])}),t._v(" "),e("span",{staticClass:"hot"},[t._v("热度:"+t._s(s.cur_count))])],2)]),t._v(" "),e("div",{staticClass:"icon-song-wrap",on:{click:function(e){t.toggleSet(s)}}},[e("div",{staticClass:"icon-song"})])])}))]),t._v(" "),e("div",{directives:[{name:"load",rawName:"v-load",value:t.songlist,expression:"songlist"}],staticClass:"loading"},[e("img",{staticClass:"loading_img",attrs:{src:t.blockload}})]),t._v(" "),t.showsongset?e("songset",{attrs:{targetsong:t.targetSong},on:{toggleset:t.toggleSet}}):t._e(),t._v(" "),t.showHeader?e("playfooter",{on:{routego:t.routego}}):t._e()],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"song-add",on:{click:function(s){s.target===s.currentTarget&&t.toggleSet(s)}}},[e("transition",{attrs:{name:"downslide"}},[t.togglelist?e("div",{staticClass:"song-set"},[e("div",{staticClass:"song-head"},[t._v("歌曲："+t._s(t.targetsong.data.songname))]),t._v(" "),e("ul",{staticClass:"set-items"},[e("li",{staticClass:"set-item",on:{click:function(s){t.playImm(t.targetsong)}}},[t._v("立即播放")]),t._v(" "),e("li",{staticClass:"set-item",on:{click:function(s){t.addPlayList(t.targetsong)}}},[t._v("加入到播放列表")])])]):t._e()])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"billboard-wrap"},[e("ul",{staticClass:"billboard"},[e("li",{directives:[{name:"load",rawName:"v-load",value:t.listContent,expression:"listContent"}],staticClass:"billboard-item bill-loading"},[e("img",{attrs:{src:t.loadgif}})]),t._v(" "),t._l(t.listContent,function(s){return e("li",{staticClass:"billboard-item",on:{click:function(e){t.gotlist(s)}}},[e("div",{staticClass:"ban-l"},[e("img",{attrs:{src:s.picUrl}})]),t._v(" "),e("ol",{staticClass:"ban-r"},t._l(s.songList,function(s,i){return e("li",[t._v(t._s(i+1)+". "+t._s(s.songname)+"/"+t._s(s.singername))])}))])})],2)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{directives:[{name:"flowScroll",rawName:"v-flowScroll",value:t.showsearch,expression:"showsearch"}],staticClass:"search-head"},[e("transition",{attrs:{name:"fade"}},[t.showsearch?e("span",{staticClass:"search-inp-wrap"},[e("input",{directives:[{name:"focus",rawName:"v-focus",value:t.showsearch,expression:"showsearch"}],staticClass:"searchtext",attrs:{type:"text"}})]):t._e()])],1),t._v(" "),e("transition",{attrs:{name:"downslide"}},[t.showsearch?e("div",{staticClass:"search-list-warp",on:{click:function(s){t.toggleSearch(s)}}},[e("ol",{staticClass:"searchlist"},t._l(t.hostlist,function(s,i){return e("li",{staticClass:"search-items"},[e("span",[t._v(t._s(i+1)+".")]),e("span",{staticClass:"songname"},[t._v(t._s(s.k))]),e("span",{staticClass:"hot-res"},[t._v("热度:"+t._s(s.n))])])}))]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"downslide"}},[e("div",{staticClass:"footer-warp"},[e("div",{staticClass:"playfooter"},[e("div",{staticClass:"playmsg",on:{click:t.goPlaying}},[e("p",{staticClass:"song-name"},[t._v("\n                        全世界东北话\n                    ")]),t._v(" "),e("p",{staticClass:"song-artist"},[t._v("\n                        DBbosy组合\n                    ")])]),t._v(" "),e("ul",{staticClass:"nav-button"},[e("li",{staticClass:"nav-btn-items",on:{click:t.showplaylist}},[e("span",{staticClass:"icon-list"})]),t._v(" "),e("li",{staticClass:"nav-btn-items",on:{click:t.togglePlaying}},[e("div",{staticClass:"icon-audio"},[e("div",{class:[t.audioActived?"audio-playing":"audio-pause"]})])]),t._v(" "),e("li",{staticClass:"nav-btn-items"},[e("div",{staticClass:"audio-next"},[e("div",{staticClass:"next-line"}),t._v(" "),e("div",{staticClass:"line-right"})])])])]),t._v(" "),e("div",{staticClass:"playbar"})])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:t.transtyle}},[e("div",{staticClass:"playing"},[e("div",{staticClass:"play-warp"},[e("header",{staticClass:"playing-head",on:{click:t.goback}},[e("a",{staticClass:"back-btn",attrs:{href:"javascript:;"}},[e("span",{staticClass:"icon-back"})]),t._v(" "),e("div",{staticClass:"playing-title"},[e("p",{staticClass:"song-name"},[t._v("分生疏啊首发身份撒发射反反复复吩咐")]),t._v(" "),e("p",{staticClass:"song-art"},[t._v("容祖儿")])])]),t._v(" "),e("article",{staticClass:"playing-art"},[e("ul",{staticClass:"lysrc-items"},[e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发")]),t._v(" "),e("li",[t._v("不舍得啊沙发沙发不舍得啊沙发沙发不舍得啊沙发沙发")])])]),t._v(" "),e("footer",{staticClass:"playing-footer"},[e("div",{staticClass:"progess"}),t._v(" "),e("ul",{staticClass:"foot-btn"},[e("li",[e("div",{staticClass:"icon-pre icon"})]),t._v(" "),e("li",{on:{click:t.toggleAudio}},[e("div",{staticClass:"icon-audio icon"},[e("div",{class:[t.hasplaying?"audio-playing":"audio-pause"]})])]),t._v(" "),e("li",[e("div",{staticClass:"icon-next icon"})]),t._v(" "),e("li",{staticClass:"icon-list-btn",on:{click:t.showplaylist}},[e("div",{staticClass:"icon-list icon"})])])])]),t._v(" "),e("div",{staticClass:"playbg"}),t._v(" "),e("playlist",{on:{playlisttoggle:t.showplaylist}})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app"},[e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showlist,expression:"showlist"}],staticClass:"mask",on:{click:function(s){t.close(s)},scroll:function(s){t.setScroll(s)}}},[e("transition",{attrs:{name:"downslide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showlist,expression:"showlist"},{name:"flowScroll",rawName:"v-flowScroll",value:t.showlist,expression:"showlist"}],staticClass:"playlist"},[e("header",{staticClass:"playlist-head"},[e("span",{staticClass:"title"},[t._v("播放列表(23)")]),e("a",{staticClass:"clearList",attrs:{href:"javascript:;"}},[t._v("清空")])]),t._v(" "),e("ul",{staticClass:"playlist-art"},[e("li",{staticClass:"list-li"},[e("span",{staticClass:"songname"},[t._v("想你的旧名字")]),e("span",{staticClass:"songart"},[t._v("- 李克勤")]),e("span",{staticClass:"del-list"},[t._v("✖")])]),t._v(" "),e("li",{staticClass:"list-li"},[e("span",{staticClass:"songname"},[t._v("想你的旧名字")]),e("span",{staticClass:"songart"},[t._v("- 李克勤")]),e("span",{staticClass:"del-list"},[t._v("✖")])]),t._v(" "),e("li",{staticClass:"list-li active"},[e("span",{staticClass:"songname"},[t._v("想你的旧名字")]),e("span",{staticClass:"songart"},[t._v("- 李克勤")]),e("span",{staticClass:"del-list"},[t._v("✖")])])])])])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"banner"},[e("div",{staticClass:"slider-wrap"},[e("ul",{staticClass:"slider-items",style:[t.sliderActive,{width:100*t.sliderImg.length+"vw"}],on:{touchstart:function(s){t.stopSlider(s)},touchmove:function(s){t.moveSlider(s)},touchend:function(s){t.continSilder(s)}}},t._l(t.sliderImg,function(s,i){return e("li",{staticClass:"slider-item",on:{click:function(e){t.linkURl(s)}}},[e("img",{staticClass:"item-img",attrs:{src:t.getURl(s,i)}})])}))]),t._v(" "),e("ul",{staticClass:"banner-page"},t._l(t.bannerlist,function(s,i){return e("li",{staticClass:"slider-btn",class:{active:i===t.nowSlider}})}))])},staticRenderFns:[]}},,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(12),n=e.n(i),a=e(52),o=e.n(a),l=e(50),r=e(51),c=e(49);new n.a({el:"#app",router:l.a,store:r.a,directives:c.default,template:"<App/>",components:{App:o.a}})}],[137]);
//# sourceMappingURL=app.62df37d1e803d9223d52.js.map