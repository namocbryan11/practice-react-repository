(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),o=n(19),s=n.n(o),a=(n(25),n(3)),i=n(4),h=n(8),l=n(7),u=(n(10),n(0)),j=function(e){return Object(u.jsxs)("div",{className:"cardsRobots",children:[Object(u.jsx)("img",{alt:"robot",className:"cardImage",src:"https://robohash.org/".concat(e.robot.id)}),Object(u.jsx)("h3",{children:e.robot.name}),Object(u.jsx)("p",{children:e.robot.email})]})},b=function(e){var t=e.robots.map((function(e,t){return Object(u.jsx)(j,{robot:e},t)}));return Object(u.jsx)("div",{className:"divRobots",children:t})},d=function(e){return Object(u.jsx)("div",{className:"divSearch",children:Object(u.jsx)("input",{className:"searchBox",placeholder:"Find my robot",type:"search",onChange:e.SearchChange})})},f=n(20),O=n.n(f),p=(new(function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"getAllUsers",value:function(){return O.a.get("http://jsonplaceholder.typicode.com/users")}}]),e}()),function(e){return Object(u.jsx)("div",{className:"scroll",children:e.children})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops. Something went wrong!"}):this.props.children}}]),n}(c.Component),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){console.log(e),c.setState({robots:e})}))},c.onSearchChange=function(e){c.setState({search:e.target.value})},c.state={robots:[],search:""},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));return console.log(t),Object(u.jsx)(m,{children:Object(u.jsxs)("div",{className:"mainpage",children:[Object(u.jsx)("div",{className:"Title",children:Object(u.jsx)("h1",{id:"pageTitle",children:"Robofriends"})}),Object(u.jsx)(d,{SearchChange:this.onSearchChange}),Object(u.jsx)(p,{children:Object(u.jsx)(b,{robots:t})})]})})}}]),n}(r.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.5c879564.chunk.js.map