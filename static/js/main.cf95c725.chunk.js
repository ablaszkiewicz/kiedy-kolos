(this["webpackJsonpkiedy-kolos"]=this["webpackJsonpkiedy-kolos"]||[]).push([[0],{18:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(19),r=n.n(i),o=(n(34),n(35),n(4)),l=n(11),u=n(2),d=n.n(u),j=n(6),p=n(3),b=(n(18),function(){var e,t,n=Object(s.useState)([]),c=Object(p.a)(n,2),i=c[0],r=c[1],o=Object(s.useState)([]),u=Object(p.a)(o,2),b=u[0],h=u[1],f=Object(s.useState)([]),O=Object(p.a)(f,2),v=O[0],_=O[1],x=Object(s.useState)(0),m=Object(p.a)(x,2),y=m[0],g=m[1],k=Object(s.useState)(0),w=Object(p.a)(k,2),N=w[0],z=w[1],S=Object(s.useState)(0),D=Object(p.a)(S,2),E=D[0],C=D[1],I=Object(s.useState)("2020-12-12"),T=Object(p.a)(I,2),M=T[0],P=T[1],G=Object(s.useState)("12:00"),Y=Object(p.a)(G,2),L=Y[0],A=Y[1],F=Object(s.useState)(""),R=Object(p.a)(F,2),U=R[0],H=R[1],W=Object(s.useState)(""),J=Object(p.a)(W,2),V=J[0],B=J[1];Object(s.useEffect)((function(){X(),Z(),q()}),[]);var K=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courseID:y,groupID:N,time:L,date:M,description:U,typeID:E,password:V}),mode:"no-cors"},e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/add_event.php",t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_courses.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n),g(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_groups.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n),z(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_types.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,_(n),C(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{class:"edition",children:[Object(a.jsx)("h2",{class:"edition__header",children:"Dodawanie wydarzenia"}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"course",children:"Przedmiot"}),Object(a.jsx)("select",{name:"course",id:"course",form:"add-event",value:y,onChange:function(e){g(e.target.value)},children:i.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"group",children:"Grupa"}),Object(a.jsx)("select",{name:"groupID",id:"groupID",form:"add-event",value:N,onChange:function(e){z(e.target.value)},children:b.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"type",children:"Typ"}),Object(a.jsx)("select",{name:"typeID",id:"typeID",form:"add-event",value:E,onChange:function(e){C(e.target.value)},children:v.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"date",children:"Data"}),Object(a.jsx)("input",(e={type:"date",id:"date",name:"date",value:"2020-11-25",min:"2020-11-25",max:"2021-12-31"},Object(l.a)(e,"value",M),Object(l.a)(e,"onChange",(function(e){P(e.target.value)})),e))]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"time",children:"Godzina"}),Object(a.jsx)("input",(t={type:"time",id:"time",name:"time",min:"07:00",value:"16:00:00",max:"21:00"},Object(l.a)(t,"value",L),Object(l.a)(t,"onChange",(function(e){A(e.target.value)})),t))]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"description",children:"Opis"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"5",cols:"30",placeholder:"Tu wpisz opis...",value:U,onChange:function(e){H(e.target.value)}})]}),Object(a.jsxs)("div",{class:"edition__setting submit",children:[Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){B(e.target.value)}}),Object(a.jsx)("button",{class:"submit__button submit__button--delete",children:"Usu\u0144"}),Object(a.jsx)("button",{class:"submit__button",onClick:K,children:"Zapisz"})]})]})}),h=function(){var e,t,n=Object(o.c)((function(e){return e.chosenEventAdmin})),c=Object(s.useState)([]),i=Object(p.a)(c,2),r=i[0],u=i[1],b=Object(s.useState)([]),h=Object(p.a)(b,2),f=h[0],O=h[1],v=Object(s.useState)([]),_=Object(p.a)(v,2),x=_[0],m=_[1],y=Object(s.useState)([]),g=Object(p.a)(y,2),k=g[0],w=g[1],N=Object(s.useState)(0),z=Object(p.a)(N,2),S=z[0],D=z[1],E=Object(s.useState)(0),C=Object(p.a)(E,2),I=C[0],T=C[1],M=Object(s.useState)(0),P=Object(p.a)(M,2),G=P[0],Y=P[1],L=Object(s.useState)("2020-12-12"),A=Object(p.a)(L,2),F=A[0],R=A[1],U=Object(s.useState)("12:00"),H=Object(p.a)(U,2),W=H[0],J=H[1],V=Object(s.useState)(""),B=Object(p.a)(V,2),K=B[0],X=B[1],Z=Object(s.useState)(""),q=Object(p.a)(Z,2),Q=q[0],$=q[1];Object(s.useEffect)((function(){ae(),se(),ce()}),[]),Object(s.useEffect)((function(){ie()}),[n]),Object(s.useEffect)((function(){ee()}),[r]);var ee=function(){console.log("Initializing fields"),X(r.description),R(r.date),J(r.time),T(r.group_id),Y(r.type_id),D(r.course_id)},te=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventID:n,courseID:S,groupID:I,time:W,date:F,description:K,typeID:G,password:Q}),mode:"no-cors"},e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/edit_event.php",t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventID:n,password:Q}),mode:"no-cors"},e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/delete_event.php",t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_courses.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n),D(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_groups.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n),T(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_types.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n),Y(n[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_event_details.php?id=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a[0]),console.log(a[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{class:"edition",children:[Object(a.jsxs)("h2",{class:"edition__header",children:["Edycja Wydarzenia ",r.id]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"course",children:"Przedmiot"}),Object(a.jsx)("select",{name:"course",id:"course",form:"add-event",value:S,onChange:function(e){D(e.target.value)},children:f.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"group",children:"Grupa"}),Object(a.jsx)("select",{name:"groupID",id:"groupID",form:"add-event",value:I,onChange:function(e){T(e.target.value)},children:x.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"type",children:"Typ"}),Object(a.jsx)("select",{name:"typeID",id:"typeID",form:"add-event",value:G,onChange:function(e){Y(e.target.value)},children:k.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"date",children:"Data"}),Object(a.jsx)("input",(e={type:"date",id:"date",name:"date",value:"2020-11-25",min:"2020-11-25",max:"2021-12-31"},Object(l.a)(e,"value",F),Object(l.a)(e,"onChange",(function(e){R(e.target.value)})),e))]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"time",children:"Godzina"}),Object(a.jsx)("input",(t={type:"time",id:"time",name:"time",min:"07:00",value:"16:00:00",max:"21:00"},Object(l.a)(t,"value",W),Object(l.a)(t,"onChange",(function(e){J(e.target.value)})),t))]}),Object(a.jsxs)("div",{class:"edition__setting",children:[Object(a.jsx)("label",{class:"edition__label",for:"description",children:"Opis"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"5",cols:"30",placeholder:"Tu wpisz opis...",value:K,onChange:function(e){X(e.target.value)}})]}),Object(a.jsxs)("div",{class:"edition__setting submit",children:[Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){$(e.target.value)}}),Object(a.jsx)("button",{class:"submit__button submit__button--delete",onClick:ne,children:"Usu\u0144"}),Object(a.jsx)("button",{class:"submit__button",onClick:te,children:"Zapisz"})]})]})},f=function(e){return{type:"SET_DATE",payload:e}},O=function(e){return{type:"SET_ADD_EVENT_POPUP",payload:e}},v=function(e){var t=e.event,n=Object(o.b)();return Object(a.jsxs)("li",{class:"extension__event "+function(){var e="";return"Kolokwium"==t.type?e+=" extension__event--exam ":"Projekt"==t.type?e+=" extension__event--project ":"Egzamin"==t.type?e+=" extension__event--exam ":"Laboratorium"==t.type?e+=" extension__event--lab ":"Inne"==t.type&&(e+=" extension__event--other "),e}(),onClick:function(){return n({type:"SET_EVENT",payload:t.id}),void n({type:"EDIT_ENABLE"})},children:[Object(a.jsx)("h3",{className:"extension__event-title",children:t.name}),Object(a.jsxs)("div",{class:"extension__event-panel",children:[Object(a.jsx)("div",{class:"extension__event-info",children:"17:00"}),Object(a.jsx)("div",{class:"extension__event-info",children:t.type}),Object(a.jsx)("div",{class:"extension__event-info",children:t.date}),Object(a.jsx)("div",{class:"extension__event-info",children:t.group_name})]})]})},_=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(o.b)();Object(s.useEffect)((function(){r()}),[]);var r=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_events.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{class:"extension",children:Object(a.jsxs)("div",{class:"extension__events",children:[Object(a.jsx)("h2",{class:"events__header",children:"Wydarzenia"}),Object(a.jsxs)("ul",{class:"events-list",children:[Object(a.jsxs)("li",{class:"events-list__item events-list__adder",onClick:function(){i({type:"EDIT_DISABLE"})},children:[Object(a.jsx)("i",{class:"far fa-plus-square"}),Object(a.jsx)("h3",{children:"Dodaj Wydarzenie"})]}),n.map((function(e){return Object(a.jsx)(v,{event:e})}))]})]})})},x=function(){var e=Object(o.c)((function(e){return e.editEnabled}));return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"app app--small",children:[Object(a.jsx)(_,{}),e?Object(a.jsx)(h,{}):Object(a.jsx)(b,{})]})})},m=n(5),y=n(9),g=n.n(y),k=function(e){var t=e.cardDate,n=e.isInCurrentMonth,s=e.events,c=Object(o.b)(),i=Object(o.c)((function(e){return e.chosenDate}));return Object(a.jsxs)(m.b.div,{className:"day "+function(){var e="";return n?(t===i&&(e+="day--selected "),0!==g()(t).day()&&6!==g()(t).day()||(e+="day--weekend "),g()(t).format("DD-MM-YYYY")===g()().format("DD-MM-YYYY")&&(e+="day--current "),e):"day--inactive "}(),tabindex:"0",onClick:function(){c(f(t))},whileHover:{y:-2,scale:1.05},whileTap:{y:0,scale:.95},children:[Object(a.jsx)("div",{className:"day__events",children:Object(a.jsx)("ul",{className:"day__events-list",children:s.map((function(e,t){return Object(a.jsx)(w,{event:e},t)}))})}),Object(a.jsx)("div",{className:"day__number",children:g()(t).format("DD")})]})},w=function(e){var t=e.event;return Object(a.jsx)("li",{className:"day__event "+{Kolokwium:"day__event--exam",Projekt:"day__event--project",Egzamin:"day__event--exam",Laboratorium:"day__event--lab",Inne:"day__event--other"}[t.type],children:t.short_name.toUpperCase()},t.id)},N=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{className:"calendar__options",children:[Object(a.jsx)("button",{className:"button button--notifications",children:Object(a.jsx)("div",{className:"button__counter",children:"1"})}),Object(a.jsx)(m.b.button,{className:"button button--settings",onClick:function(){c(!n)},whileTap:{scale:.9},whileHover:{scale:1.1}}),Object(a.jsx)(m.a,{children:n&&Object(a.jsx)(z,{})})]})},z=function(){for(var e=Object(o.b)(),t=Object(o.c)((function(e){return e.chosenGroup})),n=function(e){if(e===t)return" calendar__setting-option--selected-solid "},s=[],c=function(t){s.push(Object(a.jsx)(m.b.li,{className:"calendar__setting-option "+n("Grupa ".concat(t)),whileTap:{scale:.9,y:0},whileHover:{scale:1.1,y:-5},onClick:function(){return n="Grupa ".concat(t),void e({type:"SET_GROUP",payload:n});var n},children:t},t))},i=1;i<7;i++)c(i);return Object(a.jsxs)(m.b.div,{className:"calendar__settings",initial:{opacity:0,y:-100,scale:0},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-100,scale:0},transition:{type:"spring",stiffness:600,damping:50},children:[Object(a.jsxs)("div",{className:"calendar__setting",children:[Object(a.jsx)("h3",{className:"calendar__setting-name",children:"Grupa"}),Object(a.jsx)("ul",{className:"calendar__setting-list",children:s})]}),Object(a.jsxs)("div",{className:"calendar__setting",children:[Object(a.jsx)("h3",{className:"calendar__setting-name",children:"Motyw"}),Object(a.jsxs)("ul",{className:"calendar__setting-list",children:[Object(a.jsx)("div",{className:"calendar__setting-option calendar__setting-option--dark"}),Object(a.jsx)("div",{className:"calendar__setting-option calendar__setting-option--light calendar__setting-option--selected"})]})]})]})},S=function(){var e={hidden:{opacity:0,x:-25},show:{opacity:1,x:0}},t=["pon.","wt.","\u015br.","czw.","pt.","sb.","ndz."].map((function(t){return Object(a.jsx)(m.b.li,{className:"calendar__names-item",variants:e,children:t},t)}));return Object(a.jsx)("div",{className:"calendar__names",children:Object(a.jsx)(m.b.ul,{className:"calendar__names-list",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.05}}},initial:"hidden",animate:"show",children:t})})},D=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://aleksanderblaszkiewicz.pl/kiedykolos/get_events.php",e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_events.php");case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://aleksanderblaszkiewicz.pl/kiedykolos/get_events_for_day.php?date=".concat(n),e.next=3,fetch(a);case 3:return s=e.sent,e.next=6,s.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://aleksanderblaszkiewicz.pl/kiedykolos/get_groups.php",e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_groups.php");case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://aleksanderblaszkiewicz.pl/kiedykolos/get_courses.php",e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_courses.php");case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://aleksanderblaszkiewicz.pl/kiedykolos/get_types.php",e.next=3,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/get_types.php");case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.month,n=e.swipeDirection;return Object(a.jsx)(m.b.h2,{className:"calendar__title",initial:{x:50*n},animate:{x:0},transition:{type:"spring",stiffness:600,damping:50},children:["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"][t-1]},t)},P=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)([]),r=Object(p.a)(i,2),l=r[0],u=r[1],b=Object(s.useState)(),h=Object(p.a)(b,2),O=h[0],v=h[1],_=Object(s.useState)(0),x=Object(p.a)(_,2),y=x[0],w=x[1],z=Object(s.useState)(1),E=Object(p.a)(z,2),C=E[0],I=E[1],T=Object(o.b)(),P=Object(o.c)((function(e){return e.chosenGroup})),G=Object(o.c)((function(e){return e.forceEventsRefresh})),Y=[7,1,2,3,4,5,6],L=g()();Object(s.useEffect)((function(){v(parseInt(L.format("MM"))),T(f(L.format("YYYY-MM-DD"))),R(0),A()}),[]),Object(s.useEffect)((function(){A()}),[P,G]);var A=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,n=t.filter(F),c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){return"Wszystkie"===e.group_name||e.group_name===P},R=function(e){for(var t=L.add(e,"month"),n=new Array(42),a=Y[t.startOf("month").day()],s=t.startOf("month").subtract(a-1,"day"),c=0;c<42;c++)n[c]=s.add(c,"day").format("YYYY-MM-DD");u(n)},U=function(e){return n.filter((function(t){return t.date===e}))},H=function(e){var t=L.add(y,"month");return g()(e).format("MM")===t.format("MM")},W={hidden:{opacity:0,x:100*C},show:{opacity:1,x:0,transition:{type:"spring",stiffness:600,damping:50}}},J=l.map((function(e){return Object(a.jsx)(k,{isInCurrentMonth:H(e),cardDate:e,events:U(e),swipeDirection:C},e)})).reduce((function(e,t,n){return n%7===0&&e.push([]),e[e.length-1].push(t),e}),[]).map((function(e,t){return Object(a.jsx)("div",{className:"calendar__row",children:e},O+t)}));return Object(a.jsxs)("div",{className:"calendar",children:[Object(a.jsxs)("div",{className:"calendar__header",children:[Object(a.jsx)("button",{className:"button button--previous",onClick:function(){return function(){I(-1);var e=y-1;w(e),v(parseInt(L.add(e,"month").format("MM"))),R(e)}()}}),Object(a.jsx)(M,{month:O,swipeDirection:C}),Object(a.jsx)("button",{className:"button button--next",onClick:function(){return function(){I(1);var e=y+1;w(e),v(parseInt(L.add(e,"month").format("MM"))),R(e)}()}})]}),Object(a.jsx)(N,{}),Object(a.jsx)(S,{}),Object(a.jsx)(m.b.div,{className:"calendar__days",initial:"hidden",animate:"show",variants:W,children:J},O)]})},G=function(e){var t=e.event,n=e.setChosenEvent,s=e.chosenEvent;return Object(a.jsxs)(m.b.li,{className:"extension__event"+function(){var e=" ";return e+={Kolokwium:"extension__event--exam",Projekt:"extension__event--project",Egzamin:"extension__event--exam",Laboratorium:"extension__event--lab",Inne:"extension__event--other"}[t.type],t===s&&(e+=" extension__event--selected "),e}(),variants:{hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{type:"spring",stiffness:600,damping:50}}},whileTap:{scale:.95},whileHover:{y:-5,scale:1.02},onClick:function(){return n(t)},children:[Object(a.jsx)("h3",{className:"extension__event-title",children:t.name}),Object(a.jsxs)("div",{className:"extension__event-panel",children:[Object(a.jsx)("div",{className:"extension__event-info",children:t.time.slice(0,5)}),Object(a.jsx)("div",{className:"extension__event-info",children:t.type})]})]},t.id)},Y=function(e){var t=e.event;return Object(a.jsx)("div",{className:"app__info",children:t&&Object(a.jsxs)("div",{children:[Object(a.jsx)(m.b.h3,{className:"app__event-title",initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:600,damping:50,delay:0},children:t.name}),Object(a.jsx)(m.b.ul,{className:"app__links"}),Object(a.jsx)(m.b.div,{className:"app__info-text",style:{whiteSpace:"pre-line"},initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:600,damping:50,delay:.1},children:t.description})]},t.id)})},L=function(){var e=Object(o.b)();return Object(a.jsx)("li",{className:"extension__event--adder",children:Object(a.jsx)("button",{className:"extension__button",onClick:function(){e(O(!0))},children:"Dodaj Wydarzenie"})})},A=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(),r=Object(p.a)(i,2),l=r[0],u=r[1],b=Object(o.c)((function(e){return e.chosenDate})),h=Object(o.c)((function(e){return e.chosenGroup})),f=Object(o.c)((function(e){return e.forceEventsRefresh}));Object(s.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c([]),O();case 2:case"end":return e.stop()}}),e)}))),[b,h,f]);var O=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(0,b);case 2:t=e.sent,n=t.filter(v),c(n),u(n[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){return"Wszystkie"==e.group_name||e.group_name==h};return Object(a.jsxs)("div",{className:"extension",children:[Object(a.jsxs)(m.b.div,{className:"extension__events",children:[Object(a.jsxs)("h2",{className:"extension__header",children:["Wydarzenia ",function(){var e=g()(b).format("DD");return"0"==e[0]&&(e=e.slice(1,2)),e}()," ",["Stycznia","Lutego","Marca","Kwietnia","Maja","Czerwca","Lipca","Sierpnia","Wrzesienia","Pa\u017adziernika","Listopada","Grudnia"][parseInt(g()(b).format("MM"))-1]]}),Object(a.jsx)(L,{}),Object(a.jsx)(m.b.ul,{className:"extension__events-list",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.07}}},initial:"hidden",animate:n.length>0&&"show",children:n.map((function(e){return Object(a.jsx)(G,{event:e,setChosenEvent:u,chosenEvent:l},e.id)}))})]}),Object(a.jsx)(Y,{event:l})]})},F=function(){var e,t=Object(o.c)((function(e){return e.chosenDate})),n=Object(o.b)(),c=Object(s.useState)([]),i=Object(p.a)(c,2),r=i[0],u=i[1],b=Object(s.useState)([]),h=Object(p.a)(b,2),f=h[0],v=h[1],_=Object(s.useState)([]),x=Object(p.a)(_,2),y=x[0],k=x[1],w=Object(s.useState)(0),N=Object(p.a)(w,2),z=N[0],S=N[1],D=Object(s.useState)(0),E=Object(p.a)(D,2),M=E[0],P=E[1],G=Object(s.useState)(0),Y=Object(p.a)(G,2),L=Y[0],A=Y[1],F=Object(s.useState)("12:00"),R=Object(p.a)(F,2),U=R[0],H=R[1],W=Object(s.useState)(""),J=Object(p.a)(W,2),V=J[0],B=J[1],K=Object(s.useState)(""),X=Object(p.a)(K,2),Z=X[0],q=X[1];Object(s.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q();case 1:case"end":return e.stop()}}),e)}))),[]);var Q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(0);case 2:return t=e.sent,u(t),S(t[0].id),e.next=7,C(0);case 7:return n=e.sent,v(n),P(n[0].id),e.next=12,T(0);case 12:a=e.sent,k(a),A(a[0].id);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(j.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("INSIDE ADD EVENT FUNCTION"),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courseID:z,groupID:M,time:U,date:t,description:V,typeID:L,password:Z}),mode:"no-cors"},e.next=4,fetch("https://aleksanderblaszkiewicz.pl/kiedykolos/add_event.php",a);case 4:e.sent&&(n(O(!1)),n({type:"REFRESH"}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(m.b.div,{className:"modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.08,.75,.21,.98]},children:Object(a.jsxs)(m.b.div,{className:"event-adder",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{ease:[.08,.75,.21,.98]},children:[Object(a.jsxs)("h2",{className:"event-adder__title",children:["Dodawanie wydarzenia ",g()(t).format("DD/MM/YYYY")]}),Object(a.jsxs)("form",{className:"event-adder__form",children:[Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"subject",children:"Przedmiot"}),Object(a.jsx)("select",{className:"event-adder__input",id:"subject",value:z,onChange:function(e){S(e.target.value)},children:r.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"group",children:"Grupa"}),Object(a.jsx)("select",{className:"event-adder__input",id:"group",value:M,onChange:function(e){P(e.target.value)},children:f.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"type",children:"Typ"}),Object(a.jsx)("select",{className:"event-adder__input",id:"type",value:L,onChange:function(e){A(e.target.value)},children:y.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"time",children:"Godzina"}),Object(a.jsx)("input",(e={type:"time",id:"time",name:"time",min:"07:00",value:"16:00:00",max:"21:00"},Object(l.a)(e,"value",U),Object(l.a)(e,"onChange",(function(e){H(e.target.value)})),e))]}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"description",children:"Opis"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"5",cols:"30",placeholder:"Tu wpisz opis...",value:V,onChange:function(e){B(e.target.value)}})]}),Object(a.jsx)("div",{className:"edition__setting submit",children:Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){q(e.target.value)}})}),Object(a.jsxs)("div",{className:"event-adder__buttons",children:[Object(a.jsx)("button",{className:"event-adder__button--reject",onClick:function(e){e.preventDefault(),n(O(!1))},children:"Anuluj"}),Object(a.jsx)("button",{className:"event-adder__button--accept",onClick:function(e){e.preventDefault(),$()},children:"Utw\xf3rz wydarzenie"})]})]})]})})},R=function(){var e=Object(o.c)((function(e){return e.addEventPopup}));return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(P,{}),Object(a.jsx)(A,{})]}),Object(a.jsx)(m.a,{children:e&&Object(a.jsx)(F,{})})]})},U=n(8),H=function(){return Object(a.jsxs)(U.c,{children:[Object(a.jsx)(U.a,{path:"/",exact:!0,component:R}),Object(a.jsx)(U.a,{path:"/admin",exact:!0,component:x})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},J=n(16),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2020-11-01",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return t.payload;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Grupa 1",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUP":return t.payload;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENT":return t.payload;default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_ENABLE":return!0;case"EDIT_DISABLE":return!1;default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADD_EVENT_POPUP":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH":return!e;default:return e}},Q=Object(J.b)({chosenDate:V,chosenGroup:B,chosenEventAdmin:K,editEnabled:X,addEventPopup:Z,forceEventsRefresh:q}),$=n(28),ee=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),te=Object(J.c)(Q,ee,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());te.subscribe((function(){!function(e){try{localStorage.setItem("state",JSON.stringify(e))}catch(t){}}({chosenGroup:te.getState().chosenGroup})})),r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{store:te,children:Object(a.jsx)($.a,{basename:"/",children:Object(a.jsx)(H,{})})})}),document.getElementById("root")),W()}},[[42,1,2]]]);
//# sourceMappingURL=main.cf95c725.chunk.js.map