"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[93],{7093:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r,a=n(5861),c=n(885),u=n(7757),o=n.n(u),s=n(2791),i=n(6871),p=n(9177),f=n(168),l=n(5751).ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  & > li {\n    width: 190px;\n    margin-bottom: 10px;\n  }\n"]))),h=n(184);function d(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),n=(0,c.Z)(e,2),r=n[0],u=n[1];return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0===r.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,p.M1)(t);case 5:if(n=e.sent,0!==(a=n.cast).length){e.next=10;break}return alert("Sorry! Nothing found!"),e.abrupt("return");case 10:c=a.map((function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}})),u(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,r]),(0,h.jsx)(l,{children:r&&r.map((function(t){return(0,h.jsxs)("li",{children:[t.profile_path&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.profile_path),alt:"".concat(t.name),width:"190"})||(0,h.jsx)("img",{src:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",alt:"".concat(t.name),width:"190",height:"285"}),(0,h.jsxs)("p",{children:["Name: ",t.name]}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}},9177:function(t,e,n){n.d(e,{Hg:function(){return i},on:function(){return p},TP:function(){return f},M1:function(){return l},tx:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="051044c279aad319532da903b2292510",i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o().defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&page=").concat(e+1),t.next=3,o().get("".concat(o().defaults.baseURL));case 3:return n=t.sent,console.log(n),t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o().defaults.baseURL="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1&language=en-US"),t.next=3,o().get("".concat(o().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),t.next=3,o().get("".concat(o().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),t.next=3,o().get("".concat(o().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),t.next=3,o().get("".concat(o().defaults.baseURL));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.4b2a9014.chunk.js.map