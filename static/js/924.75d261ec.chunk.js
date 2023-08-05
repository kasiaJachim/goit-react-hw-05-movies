"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[924],{658:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(689),a=r(87),s={listOfMovies:"movieList_listOfMovies__STHBQ",card:"movieList_card__Nr0BI",title:"movieList_title__Jbv61",noImg:"movieList_noImg__b-QXZ"},u=r(652),c=r(184);var i=function(e){var t=e.movies,r=(0,n.TH)();return console.log(t),(0,c.jsx)("ul",{className:s.listOfMovies,children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)("div",{className:s.card,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,c.jsx)("div",{className:s.imgWrap,children:e.poster_path?(0,c.jsx)("img",{className:s.img,alt:e.original_title,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)}):(0,c.jsx)("img",{className:s.noImg,src:u,alt:"not available"})}),(0,c.jsx)("p",{className:s.title,children:e.title})]})})},e.id)}))})}},924:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),s=r(757),u=r.n(s),c=r(658),i=r(791),o="searchMovie_searchbar__SyVLd",l="searchMovie_searchForm__9ZABJ",p="searchMovie_searchFormButton__LVXAs",m="searchMovie_searchFormInput__BA+DJ",v=r(596),f=r(184);var h=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),s=n[0],u=n[1];return(0,f.jsx)("header",{className:o,children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=s.trim().toLowerCase();r?t(r):v.Am.warning("The query is empty! Try again.")},className:l,children:[" ",(0,f.jsx)("button",{type:"button",className:p,onClick:function(){u("")},children:"\ud83d\uddd1\ufe0f"}),(0,f.jsx)("button",{type:"submit",className:p,children:"\ud83d\udd0d"}),(0,f.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:s,onChange:function(e){u(e.target.value)}})]})})},d=r(87),g=r(274);var _=function(){var e,t=(0,i.useState)(null),r=(0,a.Z)(t,2),s=r[0],o=r[1],l=(0,d.lr)(),p=(0,a.Z)(l,2),m=p[0],v=p[1],_=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){_&&(0,g.Hq)(_).then((function(e){return o(e.results)}))}),[_]);var x=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({query:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("header",{children:(0,f.jsx)(h,{onSubmit:x})}),(0,f.jsx)("main",{children:s&&(0,f.jsx)(c.Z,{movies:s})})]})}},274:function(e,t,r){r.d(t,{Hg:function(){return o},Hq:function(){return l},Hx:function(){return m},Y5:function(){return p},xc:function(){return v}});var n=r(861),a=r(757),s=r.n(a),u=r(243),c=r(596),i=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0fd779472876e4af22673aa006824d25"}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/trending/movie/day",{});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),c.Am.warning("OOPS"),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/search/movie",{params:{language:"en-US",page:1,include_adult:!1,query:t}});case 3:return r=e.sent,n=r.data,console.log(n.results),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},652:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=924.75d261ec.chunk.js.map