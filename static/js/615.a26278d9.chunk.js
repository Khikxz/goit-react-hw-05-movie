"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{713:function(e,t,r){r.d(t,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"b86981a07e5296001ff10a61d56b5942"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){r.d(t,{e:function(){return f}});var n="MovieList_movieList__uFrOZ",a="MovieListItem_movieItem__mZL09",u="MovieListItem_movieLink__QdmjJ",c=r(87),s=r(689),i=r(184),o=function(e){var t=e.id,r=e.title,n=(0,s.TH)();return(0,i.jsx)("li",{className:a,children:(0,i.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:n},className:u,children:(0,i.jsx)("h3",{children:r})})},t)},f=function(e){var t=e.movies;return(0,i.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.title;return(0,i.jsx)(o,{id:t,title:r},t)}))})}},615:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(713),o=r(645),f=r(689),p=r(87),v="MoviesPage_inputWrapper__RY+g5",l="MoviesPage_input__tXUWp",d=r(184),m=function(){var e,t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],m=r[1],h=(0,p.lr)(),x=(0,a.Z)(h,2),_=x[0],w=x[1],Z=null!==(e=_.get("query"))&&void 0!==e?e:"a",g=(0,s.useState)(!1),k=(0,a.Z)(g,2),b=k[0],j=k[1],y=(0,f.s0)(),L=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.trim()){e.next=2;break}return e.abrupt("return");case 2:return j(!0),e.prev=3,e.next=6,(0,i.mv)(Z);case 6:if(0!==(t=e.sent).length){e.next=10;break}return y("/not-found",{replace:!0}),e.abrupt("return");case 10:console.log("movies",t),m(t),j(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0),j(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){L()}),[Z]),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:v,children:(0,d.jsx)("input",{type:"text",className:l,onChange:function(e){return t=e.target.value,void w(""!==t?{query:t}:{});var t},placeholder:"Search movies..."})}),b?(0,d.jsx)("p",{style:{textAlign:"center"},children:"Loading..."}):(0,d.jsx)(o.e,{movies:u}),(0,d.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=615.a26278d9.chunk.js.map