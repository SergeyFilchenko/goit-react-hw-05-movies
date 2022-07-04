"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[927],{8950:function(e,t,n){n.d(t,{l3:function(){return g},b:function(){return f},$o:function(){return p},$G:function(){return v},Mb:function(){return d}});var r=n(5861),a=n(885),u=n(7757),c=n.n(u),s=n(2791),i=n(6871),o=n(9403);function p(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.hG)(v);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{filmDetails:n,isLoading:l}}function f(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.jf)(v);case 4:t=e.sent,u(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message,"ERROR by useFechCastOfTheFilm");case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{cast:n,isLoading:l}}var l=n(2007),h=n.n(l);function v(e){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),u=n[0],i=n[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,(0,o.z1)(e);case 4:if(0!==(n=t.sent).results.length){t.next=7;break}return t.abrupt("return",alert('Nothing was found for the query "'.concat(e,'", please specify your query)')));case 7:i(n.results),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.message,"An error occurred in useFetchSearchMovieOnRequest");case 13:return t.prev=13,h(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))).apply(this,arguments)}e&&function(){t.apply(this,arguments)}()}),[e]),{filmsBySearch:u,isLoading:l}}function d(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,s.useState)(!1),p=(0,a.Z)(i,2),f=p[0],l=p[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,(0,o.Hg)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{films:n,isLoading:f}}function g(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,o.Cm)(v);case 4:t=e.sent,u(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message,"ERROR by useFatchReviewsOfTheFilm");case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),{review:n,isLoading:l}}v.propTypes={searchQuery:h().string.isRequired}},9403:function(e,t,n){n.d(t,{Cm:function(){return x},Hg:function(){return p},hG:function(){return v},jf:function(){return g},yA:function(){return i},z1:function(){return l}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c),i="https://image.tmdb.org/t/p/w500";s().defaults.baseURL="https://api.themoviedb.org/3";var o="cdd27e005bd8c0d816b6c6c875eecf17";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/week?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5927:function(e,t,n){n.r(t);n(2791);var r=n(8950),a=n(8735),u=n(184);t.default=function(){var e=(0,r.l3)(),t=e.review,n=e.isLoading;return(0,u.jsxs)(u.Fragment,{children:[n&&"...Loading",0!==t.length?(0,u.jsx)(a.QI,{spacing:3,children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,u.jsxs)(a.HC,{children:[(0,u.jsxs)(a.xv,{as:"h2",fontWeight:700,children:["Author: ",n]}),(0,u.jsx)(a.xv,{as:"p",children:r})]},t)}))}):(0,u.jsx)(a.xv,{fontSize:"6xl",children:"No Reviews \xaf\\_(\u30c4)_/\xaf"})]})}}}]);
//# sourceMappingURL=927.96435e9c.chunk.js.map