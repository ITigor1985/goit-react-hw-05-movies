"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[965],{8965:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a=n(5861),c=n(885),u=n(7757),i=n.n(u),o=n(501),s=n(2791),p=n(9177),f=n(168),l=n(5751).ZP.ul(r||(r=(0,f.Z)(["\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:space-between;\n  & > li{\n    width: 250px;\n  }\n"]))),d=n(184);function h(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1];return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var e,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,0===n.length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,(0,p.Hg)(2);case 5:if(e=t.sent,a=e.results,0!==e.total_results){t.next=11;break}return alert("Nothing found"),t.abrupt("return");case 11:c=a.map((function(t){return{id:t.id,original_title:t.original_title,backdrop_path:t.backdrop_path}})),console.log(c),r(c),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l,{children:n.map((function(t){return(0,d.jsx)("li",{children:(0,d.jsxs)(o.rU,{style:{display:"block",margin:"1rem 0"},to:"/movies/".concat(t.id),children:[t.backdrop_path&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path),alt:"".concat(t.original_title),width:"250"}),t.original_title]},t.id)},t.id)}))})})}},9177:function(t,e,n){n.d(e,{Hg:function(){return s},on:function(){return p},TP:function(){return f},M1:function(){return l},tx:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),o="051044c279aad319532da903b2292510",s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i().defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&page=").concat(e+1),t.next=3,i().get("".concat(i().defaults.baseURL));case 3:return n=t.sent,console.log(n),t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i().defaults.baseURL="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1&language=en-US"),t.next=3,i().get("".concat(i().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),t.next=3,i().get("".concat(i().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"),t.next=3,i().get("".concat(i().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"),t.next=3,i().get("".concat(i().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=965.012fbbed.chunk.js.map