(this["webpackJsonpkiedy-kolos"]=this["webpackJsonpkiedy-kolos"]||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(8),o=n.n(s),i=(n(20),n(7),n(2)),u=n.n(i),j=n(5),l=n(3),d=n(4),f=function(e){return{type:"SET",payload:e}},b=function(e){var t=e.day,n=e.month,a=e.year,r=e.events,s=(Object(d.c)((function(e){return e.chosenDate})),Object(d.b)());return Object(c.jsxs)("div",{className:"callendar-card",onClick:function(){console.log("Clicked on day: "+t),s(f("".concat(a,"-").concat(n,"-").concat(t)))},children:[Object(c.jsxs)("p",{className:"title",children:[t,".",n,".",a," "]}),r.map((function(e){return Object(c.jsxs)("div",{children:[e.short_name,Object(c.jsx)("br",{})]},e.id)}))]})},p=n(13),O=function(e){var t,n=e.refreshEvents,r=Object(a.useState)([]),s=Object(l.a)(r,2),o=s[0],i=s[1],d=Object(a.useState)("jezyki programowania"),f=Object(l.a)(d,2),b=f[0],O=f[1],h=Object(a.useState)("2020-12-12"),v=Object(l.a)(h,2),x=v[0],k=v[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://aleksanderblaszkiewicz.pl/kiedykolos/get_courses.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Adding event ".concat(b," to date ").concat(x)),e.next=3,fetch("http://aleksanderblaszkiewicz.pl/kiedykolos/add_event.php?name=".concat(b,"&date=").concat(x));case 3:e.sent,n();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("select",{name:"course",id:"course",form:"add-event",value:b,onChange:function(e){O(e.target.value)},children:o.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name},e.id)}))}),Object(c.jsx)("input",(t={type:"date",id:"date",name:"date",value:"2020-11-25",min:"2020-11-25",max:"2021-12-31"},Object(p.a)(t,"value",x),Object(p.a)(t,"onChange",(function(e){k(e.target.value)})),t)),Object(c.jsx)("button",{onClick:y,children:"click here"})]})},h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),o=Object(l.a)(s,2),i=o[0],p=o[1],h=Object(a.useState)(12),v=Object(l.a)(h,2),x=v[0],k=(v[1],Object(d.b)());Object(a.useEffect)((function(){y(),m(),k(f("2020-12-01"))}),[]);var m=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://aleksanderblaszkiewicz.pl/kiedykolos/get_events.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){for(var e=new Array(31),t=0;t<31;t++)e[t]=t+1;p(e)},g=function(e){var t=[];return n.forEach((function(n){n.date.slice(n.date.length-2,n.date.length)==e&&t.push(n)})),t};return Object(c.jsxs)("div",{className:"callendar",children:[Object(c.jsx)(O,{refreshEvents:m}),Object(c.jsx)("br",{}),i.map((function(e){return Object(c.jsx)(b,{day:e,month:x,year:"2020",events:g(e)},e)}))]})},v=function(e){var t=e.title;return Object(c.jsx)("div",{className:"info-event",children:Object(c.jsx)("p",{children:t})})},x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(d.c)((function(e){return e.chosenDate})),o="http://aleksanderblaszkiewicz.pl/kiedykolos/get_events_for_day.php?date=".concat(s);Object(a.useEffect)((function(){i()}),[s]);var i=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"info-panel",children:[Object(c.jsxs)("p",{children:["Wybrana data: ",s]}),n.map((function(e){return Object(c.jsx)(v,{title:e.name},e.id)}))]})},k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{}),Object(c.jsx)(x,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},y=n(6),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2020-11-01",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.payload;default:return e}},w=Object(y.b)({chosenDate:g}),_=Object(y.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d.a,{store:_,children:Object(c.jsx)(k,{})})}),document.getElementById("root")),m()},7:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.d891a9a9.chunk.js.map