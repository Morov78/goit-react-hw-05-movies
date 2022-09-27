"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[774],{7047:function(n,e,t){t.d(e,{e:function(){return m}});var r,a,i=t(168),u=t(6731),c=t(6444),o=c.ZP.ul(r||(r=(0,i.Z)(["\n  padding-left: 20px;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  margin-top: 15px;\n  list-style-type: upper-roman;\n  list-style-position: inside;\n"]))),s=(0,c.ZP)(u.OL)(a||(a=(0,i.Z)(["\n  margin-left: 10px;\n  text-decoration: none;\n  color: black;\n  margin-right: auto;\n  outline: none;\n  display: flex;\n  gap: 4px;\n  align-items: center;\n\n  :hover,\n  :focus {\n    color: orange;\n    text-decoration: underline;\n  }\n"]))),p=t(4651),f=t(470),d=t(2007),l=t.n(d),x=t(184),m=function(n){var e=n.movies,t=(0,f.TH)(),r=t.pathname,a=t.search;return(0,x.jsxs)(o,{children:[e&&e.map((function(n){var e=n.id,t=n.name,i=n.title;return(0,x.jsxs)(s,{to:"/movies:".concat(e),state:{from:{pathname:r,search:a},id:e},children:[(0,x.jsx)(p.O6Y,{size:"14px"}),t||i]},e)})),""!==a&&0===e.length&&(0,x.jsx)("p",{children:"No found movies on this query"})]})};m.prototype={movies:l().arrayOf(l().object.isRequired).isRequired}},8774:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a=t(885),i=t(4390),u=t(2483),c=t(7047),o=t(3105),s=t(168),p=t(6444).ZP.div(r||(r=(0,s.Z)(["\n  margin-right: auto;\n  margin-left: 15px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 4px;\n\n  & input {\n    padding: 1px 8px;\n    width: 200px;\n    border-radius: 3px;\n    border-width: 1px;\n    height: 19px;\n  }\n  & button {\n    ","\n    ","\n    border: none;\n    width: 22px;\n    height: 22px;\n    display: flex;\n    align-items: center;\n    background-color: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n\n  img {\n    width: 18px;\n    height: 18px;\n    transition: transform 300ms;\n  }\n  img:hover {\n    transform: scale(1.2);\n  }\n"])),"",""),f=t(2007),d=t.n(f),l=t(184),x=function(n){var e=n.onSubmit;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("form",{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.currentTarget.query.value.trim();""!==t&&(e(t),n.currentTarget.reset())},children:(0,l.jsxs)(p,{children:[(0,l.jsx)("input",{type:"text",name:"query"}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("img",{src:o,alt:"icon search"})})]})})})};x.prototype={onSubmit:d().func.isRequired};var m=t(2791),v=t(6731),h=t(470),y=function(){var n=(0,m.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,m.useState)(!1),s=(0,a.Z)(o,2),p=s[0],f=s[1],d=(0,v.lr)(),y=(0,a.Z)(d,2),g=y[0],A=y[1],b=g.get("query");return(0,m.useEffect)((function(){if(b)f("pending"),(0,i.Ai)(b).then((function(n){r(n.data.results),f("resolved")}));else{var n=JSON.parse(window.sessionStorage.getItem("searchQuery"));n&&A({query:n})}}),[b,A]),(0,l.jsxs)("main",{children:[(0,l.jsx)(x,{onSubmit:function(n){""!==n&&n!==b&&(A({query:n}),window.sessionStorage.setItem("searchQuery",JSON.stringify(n)))}}),"pending"===p&&(0,l.jsx)(u.a,{}),"resolved"===p&&(0,l.jsx)(c.e,{movies:t}),(0,l.jsx)(m.Suspense,{fallback:(0,l.jsx)(u.a,{}),children:(0,l.jsx)(h.j3,{})})]})}},4390:function(n,e,t){t.d(e,{Ai:function(){return y},BG:function(){return d},Hx:function(){return v},vw:function(){return p},xc:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),u=t(4569),c=t.n(u),o="https://api.themoviedb.org/3/",s="092bcb29ccd47efc5792e9a4733d23fe";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("".concat(o,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("".concat(o,"search/movie?query=").concat(e,"&api_key=").concat(s,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3105:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=774.dd508ff8.chunk.js.map