(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(3),o=n.n(s),a=(n(13),n(4)),i=n(5),h=n(7),l=n(6),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"DiverseRobots",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},d=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid grey",height:"800px"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"tc",children:"Robot Friends"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(u,{robots:n})})]})}}]),n}(c.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(14),n(15),n(16);o.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.63a3c168.chunk.js.map