webpackJsonp([1],{"1BQ1":function(t,e){},"4QVa":function(t,e){},"7UEn":function(t,e){},"81Pi":function(t,e){},BjtM:function(t,e){},ClqS:function(t,e){},CpWM:function(t,e){},H2VD:function(t,e){},Hd4t:function(t,e){},IrGs:function(t,e){},"K+R4":function(t,e){},KJRB:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail,Category"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("K+R4")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{staticClass:"header-middle",attrs:{to:"/search"}},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")]),this._v(" "),e("router-link",{staticClass:"header-right",attrs:{to:"/city"}},[this._v("\n    "+this._s(this.city)+"\n    "),e("span",{staticClass:"iconfont"},[this._v("")])])],1)},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(t){i("mwjZ")},"data-v-7f4ce112",null).exports,p=(i("v2ns"),i("F3EI")),m=i.n(p),f={name:"HomeSwiper",components:{swiper:p.swiper,swiperSlide:p.swiperSlide},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3}}},props:{swiperList:{type:Array}},computed:{showSwiper:function(){return this.swiperList.length}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("a",{attrs:{href:t.linkUrl}},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var y=i("VU/8")(f,v,!1,function(t){i("KJRB")},"data-v-00b8aee1",null).exports,_={name:"HomeIcons",data:function(){return{swiperOption:{autoplay:!1}}},props:{iconList:{type:Array}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("router-link",{key:e.id,staticClass:"icons-item",attrs:{to:{name:"Category",query:{title:e.desc}}}},[i("img",{staticClass:"icons-img",attrs:{src:e.imgUrl}}),t._v(" "),i("span",{staticClass:"icons-desc"},[t._v(t._s(e.desc))])])}),1)}),1)],1)},staticRenderFns:[]};var C=i("VU/8")(_,w,!1,function(t){i("H2VD")},"data-v-eb6ec568",null).exports,g={name:"HomeRecommend",props:{recommendList:{type:Array}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"recommend-wrapper"},t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"recommend-item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var k=i("VU/8")(g,b,!1,function(t){i("hBKo")},"data-v-125350d6",null).exports,x={name:"HomeWeekend",props:{weekendList:{type:Array}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"weekend-wrapper"},t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"weekend-item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var $=i("VU/8")(x,L,!1,function(t){i("CpWM")},"data-v-df890e82",null).exports,S=i("mtWM"),E=i.n(S),I={name:"Home",data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getInfo:function(){var t=this;E.a.get("/api/index.json?city="+this.city).then(function(e){if((e=e.data).ret&&e.data){var i=e.data;t.swiperList=i.swiperList,t.iconList=i.iconList,t.recommendList=i.recommendList,t.weekendList=i.weekendList}})}},mounted:function(){this.lastCity=this.city,this.getInfo()},activated:function(){this.lastCity!==this.city&&(this.getInfo(),this.lastCity=this.city)},components:{HomeHeader:h,HomeSwiper:y,HomeIcons:C,HomeRecommend:k,HomeWeekend:$}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var U=i("VU/8")(I,H,!1,function(t){i("cLfG")},null,null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{staticClass:"header-back",attrs:{to:"/"}},[e("span",{staticClass:"iconfont"},[this._v("")])]),this._v(" "),e("p",{staticClass:"header-title"},[this._t("default")],2)],1)},staticRenderFns:[]};var F=i("VU/8")({name:"CHeader"},R,!1,function(t){i("huEL")},"data-v-73581dba",null).exports,V=i("GQaK"),T={name:"CitySearch",data:function(){return{keyword:"",timer:null,list:[]}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),computed:{hasList:function(){return!this.list.length}},props:{citys:Object},mounted:function(){this.scroll=new V.a(this.$refs.search)},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.citys)t.citys[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i.name)});t.list=e},100):this.list=[]}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasList,expression:"hasList"}],staticClass:"search-item"},[t._v("未找到要匹配的城市")])],2)])])},staticRenderFns:[]};var O=i("VU/8")(T,j,!1,function(t){i("bWoy")},"data-v-73684474",null).exports,N={name:"CityList",props:{citys:Object,hotCitys:Array,letter:String},computed:c()({},Object(l.c)(["city"])),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new V.a(this.$refs.wrapper,{click:!0})},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"area-title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"item"},[t._v(t._s(this.city))])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"area-title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCitys,function(e){return i("div",{key:e.id,staticClass:"item",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)]),t._v(" "),t._l(t.citys,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"area-title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"city-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"city-name border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var G=i("VU/8")(N,A,!1,function(t){i("4QVa")},"data-v-e2c224d4",null).exports,D={name:"CityAlphabet",props:{citys:Object},data:function(){return{touchStatus:!1,ATop:0,timer:null}},updated:function(){this.ATop=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.citys)t.push(e);return t}},methods:{handleClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){console.log(e.ATop);var i=t.touches[0].clientY,s=Math.floor((i-e.ATop)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},10))},handleTouchEnd:function(){this.touchStatus=!1}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alphabet"},[i("ul",{staticClass:"list"},t._l(t.letters,function(e,s){return i("li",{key:s,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleClick}},[t._v("\n      "+t._s(e)+"\n    ")])}),0)])},staticRenderFns:[]};var B={name:"City",components:{CHeader:F,CitySearch:O,CityList:G,CityAlphabet:i("VU/8")(D,M,!1,function(t){i("ClqS")},"data-v-d39bb768",null).exports},data:function(){return{citys:{},hotCitys:[],letter:""}},methods:{getCityInfo:function(){E.a.get("/api/city.json").then(this.handleCityInfo)},handleCityInfo:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.citys=e.cities,this.hotCitys=e.hotCities}},handleLetter:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("c-header",[i("span",[t._v("城市选择")])]),t._v(" "),i("city-search",{attrs:{citys:t.citys}}),t._v(" "),i("city-list",{attrs:{citys:t.citys,hotCitys:t.hotCitys,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{citys:t.citys},on:{change:t.handleLetter}})],1)},staticRenderFns:[]};var W=i("VU/8")(B,P,!1,function(t){i("7UEn")},"data-v-4d47a380",null).exports,K={name:"CommonGallary",data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},props:{imgs:{type:Array,default:function(){return[]}}},methods:{handleCloseGallary:function(){this.$emit("close")}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallary",on:{click:this.handleCloseGallary}},[e("div",{staticClass:"gallary-wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var q=i("VU/8")(K,Q,!1,function(t){i("81Pi")},"data-v-254fc314",null).exports,J={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var Y=i("VU/8")({name:"FadeAnimate"},J,!1,function(t){i("1BQ1")},"data-v-2360f2e4",null).exports,z={name:"DetailBanner",data:function(){return{showGallary:!1}},props:{sightName:String,bannerImg:String,gallaryImgs:Array},components:{CommonGallary:q,FadeAnimate:Y},methods:{handleShowGallary:function(){this.showGallary=!0},handleCloseGallary:function(){this.showGallary=!1}}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleShowGallary}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.gallaryImgs.length))])])]),t._v(" "),i("fade-animate",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleCloseGallary}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(z,Z,!1,function(t){i("Hd4t")},"data-v-bbe1967c",null).exports,tt={name:"DetailHeader",components:{CHeader:F},data:function(){return{showHeader:!1,opacity:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;t>60&&t<=140?(this.opacity.opacity=(t-60)/80,this.showHeader=!0):this.showHeader=t>140}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showHeader,expression:"showHeader"}],staticClass:"detail-header",style:this.opacity},[e("c-header",[this._t("default",[this._v("景点详情")])],2)],1),this._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.showHeader,expression:"!showHeader"}],staticClass:"detail-back",attrs:{tag:"div",to:"/"}},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])])],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("uk2G")},"data-v-840c2bd2",null).exports,st={name:"DetailList",props:{list:Array}},nt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list-item"},[i("div",{staticClass:"list-title border-bottom"},[i("span",{staticClass:"title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"list-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var at={name:"Detail",components:{DetailBanner:X,DetailHeader:it,DetailList:i("VU/8")(st,nt,!1,function(t){i("oSxs")},"data-v-24c4d9b7",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},methods:{getDetailInfo:function(){E.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoScc)},getDetailInfoScc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.getDetailInfo()}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-header"),this._v(" "),e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-list",{attrs:{list:this.categoryList}})],1)},staticRenderFns:[]};var ot=i("VU/8")(at,rt,!1,function(t){i("IrGs")},"data-v-1b4a1f72",null).exports,ct={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"search"},[e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市/景点/主题"}})])])}]};var lt={name:"Search",components:{CHeader:F,SearchInput:i("VU/8")({name:"SearchInput"},ct,!1,function(t){i("mU2M")},"data-v-be125c52",null).exports}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c-header",[e("span",[this._v("搜索")])]),this._v(" "),e("search-input"),this._v(" "),e("h2",{staticClass:"search-info"},[this._v("开发中~~~")])],1)},staticRenderFns:[]};var ut=i("VU/8")(lt,dt,!1,function(t){i("x5u2")},"data-v-78efc6e8",null).exports,ht={name:"Category",components:{CHeader:F},data:function(){return{title:""}},mounted:function(){this.title=this.$route.query.title}},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("c-header",[e("span",[this._v(this._s(this.title))])])},staticRenderFns:[]};var mt=i("VU/8")(ht,pt,!1,function(t){i("dxfQ")},null,null).exports;s.a.use(r.a);var ft=new r.a({routes:[{path:"/",name:"Home",component:U},{path:"/city",name:"City",component:W},{path:"/detail/:id",name:"Detail",component:ot},{path:"/search",name:"Search",component:ut},{path:"/category",name:"Category",component:mt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),vt="北京";try{localStorage.city&&(vt=localStorage.city)}catch(t){console.log("您的浏览器不支持localStorage")}var yt={city:vt},_t={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){console.log("您的浏览器不支持localStorage")}}};s.a.use(l.a);var wt=new l.a.Store({state:yt,mutations:_t}),Ct=i("v5o6"),gt=i.n(Ct);i("j1ja"),i("m0iu"),i("cjdf"),i("BjtM");s.a.config.productionTip=!1,gt.a.attach(document.body),s.a.use(m.a),new s.a({el:"#app",router:ft,store:wt,components:{App:a},template:"<App/>"})},bWoy:function(t,e){},cLfG:function(t,e){},cjdf:function(t,e){},dxfQ:function(t,e){},hBKo:function(t,e){},huEL:function(t,e){},m0iu:function(t,e){},mU2M:function(t,e){},mwjZ:function(t,e){},oSxs:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},uk2G:function(t,e){},v2ns:function(t,e){},x5u2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.786f46971fa29e5447c8.js.map