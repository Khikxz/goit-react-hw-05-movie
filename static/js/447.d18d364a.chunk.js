"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{713:function(e,t,n){n.d(t,{Hx:function(){return p},Y5:function(){return u},mv:function(){return o},uV:function(){return l},wr:function(){return c}});var r=n(861),a=n(757),s=n.n(a),i=n(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b86981a07e5296001ff10a61d56b5942"};var c=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},447:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),o=n(689),u=n(87),l=n(713),p={movieDetailsContainer:"MovieDetailsPage_movieDetailsContainer__3WwRr",image:"MovieDetailsPage_image__qPA9k",movieDetailsWrap:"MovieDetailsPage_movieDetailsWrap__TH-K6",goBackButton:"MovieDetailsPage_goBackButton__mVPnh",goBackLink:"MovieDetailsPage_goBackLink__lejaw"},v=n(184),d=function(){var e,t,n=(0,o.UO)().movieId,s=(0,c.useState)(null),d=(0,a.Z)(s,2),f=d[0],h=d[1],m=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",x=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(n);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){x()}),[n]),f?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.rU,{to:m,className:p.goBackLink,children:(0,v.jsx)("button",{className:p.goBackButton,children:"\u2b05 Go back"})}),(0,v.jsxs)("div",{className:p.movieDetailsContainer,children:[(0,v.jsx)("img",{className:p.image,src:f.poster_path?"https://image.tmdb.org/t/p/w500".concat(f.poster_path):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:f.title}),(0,v.jsxs)("div",{className:p.movieDetailsWrap,children:[(0,v.jsx)("h1",{children:f.title}),(0,v.jsxs)("h4",{children:["User score: ",Math.round(10*f.vote_average),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:f.overview}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:f.genres.map((function(e){return(0,v.jsxs)("span",{children:[" ",e.name]},e.id)}))})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsx)(u.rU,{to:"cast",className:p.link,children:(0,v.jsx)("button",{className:p.infoButton,children:"Cast"})}),(0,v.jsx)(u.rU,{to:"reviews",className:p.link,children:(0,v.jsx)("button",{className:p.infoButton,children:"Reviews"})}),(0,v.jsx)("hr",{}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(o.j3,{})})]}):(0,v.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=447.d18d364a.chunk.js.map