(this["webpackJsonpkiedy-kolos"]=this["webpackJsonpkiedy-kolos"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(20),i=n.n(s),o=(n(37),n(38),n(6)),u=n(3),d=n(4),l=n(9),j=n.n(l),p=function(e){return{type:"SET_DATE",payload:e}},b=function(e){return{type:"SET_OPTIONS_POPUP",payload:e}},f=function(e){return{type:"SET_ADD_EVENT_POPUP",payload:e}},h=function(e){return{type:"SET_EDIT_EVENT_POPUP",payload:e}},v=function(e){return{type:"SET_DELETE_EVENT_POPUP",payload:e}},O=function(e){return{type:"SET_CHOSEN_EVENT",payload:e}},m=function(e){return{type:"SET_CHOSEN_THEME",payload:e}},_=function(e){return{type:"SET_EVENT_TYPES",payload:e}},y=function(e){return{type:"SET_GROUPS",payload:e}},x=function(e){var t=e.cardDate,n=e.isInCurrentMonth,c=e.events,r=Object(u.b)(),s=Object(u.c)((function(e){return e.chosenDate}));return Object(a.jsxs)(d.b.div,{className:"day "+function(){var e="";return n?(t===s&&(e+="day--selected "),0!==j()(t).day()&&6!==j()(t).day()||(e+="day--weekend "),j()(t).format("DD-MM-YYYY")===j()().format("DD-MM-YYYY")&&(e+="day--current "),e):"day--inactive "}(),"data-date":j()(t).format("DD-MM-YYYY"),tabindex:"0",onClick:function(){r(p(t))},whileHover:{y:-2,scale:1.05},whileTap:{y:0,scale:.95},children:[Object(a.jsx)("div",{className:"day__flags",children:Object(a.jsx)("ul",{className:"day__flags-list",children:c.map((function(e,t){return Object(a.jsx)(g,{event:e},t)}))})}),Object(a.jsx)("div",{className:"day__number",children:j()(t).format("DD")})]})},g=function(e){var t=e.event;return Object(a.jsx)("li",{className:"day__flag "+{Kolokwium:"day__flag--exam",Projekt:"day__flag--project",Egzamin:"day__flag--exam",Laboratorium:"day__flag--lab",Inne:"day__flag--other"}[t.type],children:t.subjectShortName.toUpperCase()},t.id)},N=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.optionsPopup})),n=Object(u.c)((function(e){return e.chosenTheme}));Object(c.useEffect)((function(){document.body.dataset.theme=n}),[n]);return Object(a.jsxs)("div",{className:"calendar__options",children:[Object(a.jsx)("button",{className:"button button--notifications",children:Object(a.jsx)("div",{className:"button__counter",children:"1"})}),Object(a.jsx)(d.b.button,{className:"button button--settings",onClick:function(){e(b(!t))},whileTap:{scale:.9},whileHover:{scale:1.1}}),Object(a.jsx)(d.a,{children:t&&Object(a.jsx)(E,{})})]})},E=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.chosenGroup})),n=Object(u.c)((function(e){return e.chosenTheme})),c=Object(u.c)((function(e){return e.groups})),r=function(e){if(e===t)return" calendar__setting-option--selected-solid "},s=function(e){return e==n?" calendar__setting-option--selected":""};return Object(a.jsxs)(d.b.div,{className:"calendar__settings",initial:{opacity:0,y:0,scale:0},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:0,scale:0},transition:{type:"spring",stiffness:600,damping:50},children:[Object(a.jsxs)("div",{className:"calendar__setting",children:[Object(a.jsx)("h3",{className:"calendar__setting-name",children:"Grupa"}),Object(a.jsx)("ul",{className:"calendar__setting-list",children:c.map((function(t){return Object(a.jsx)(d.b.li,{className:"calendar__setting-option "+r(t.id),whileTap:{scale:.9,y:0},whileHover:{scale:1.1,y:-5},onClick:function(){return n=t.id,void e({type:"SET_GROUP",payload:n});var n},children:t.groupNumber},t.id)}))})]}),Object(a.jsxs)("div",{className:"calendar__setting",children:[Object(a.jsx)("h3",{className:"calendar__setting-name",children:"Motyw"}),Object(a.jsxs)("ul",{className:"calendar__setting-list",children:[Object(a.jsx)("div",{className:"calendar__setting-option calendar__setting-option--dark"+s("dark"),onClick:function(){e(m("dark"))}}),Object(a.jsx)("div",{className:"calendar__setting-option calendar__setting-option--light"+s("light"),onClick:function(){e(m("light"))}})]})]})]})},w=function(){var e={hidden:{opacity:0,x:-25},show:{opacity:1,x:0}},t=["pon.","wt.","\u015br.","czw.","pt.","sb.","ndz."].map((function(t){return Object(a.jsx)(d.b.li,{className:"calendar__names-item",variants:e,children:t},t)}));return Object(a.jsx)("div",{className:"calendar__names",children:Object(a.jsx)(d.b.ul,{className:"calendar__names-list",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.05}}},initial:"hidden",animate:"show",children:t})})},T=n(2),S=n.n(T),k=n(7),D=function(){var e=Object(k.a)(S.a.mark((function e(t,n,a,c,r,s,i,o){var u,d;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={method:"POST",headers:{"Content-Type":"application/json","Api-Key":o},body:JSON.stringify({subjectID:t,yearCourseId:n,name:"temporary name",groupIds:a,date:c+"T"+r,description:s,eventTypeId:i,password:o}),mode:"cors"},e.next=3,fetch("https://kiedy-kolos-backend.azurewebsites.net/yearCourses/".concat(n,"/Events"),u);case 3:return d=e.sent,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r,s,i,o){return e.apply(this,arguments)}}(),C=function(){var e=Object(k.a)(S.a.mark((function e(t,n,a){var c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"DELETE",headers:{"Content-Type":"application/json","Api-Key":a},mode:"cors"},e.next=3,fetch("https://kiedy-kolos-backend.azurewebsites.net/yearCourses/".concat(t,"/Events/").concat(n),c);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(k.a)(S.a.mark((function e(t,n,a,c,r,s,i,o,u){var d,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d={method:"PUT",headers:{"Content-Type":"application/json","Api-Key":u},body:JSON.stringify({subjectID:n,yearCourseId:a,id:t,name:"temporary name",groupIds:c,date:r+"T"+s,description:i,eventTypeId:o,password:u}),mode:"cors"},e.next=3,fetch("https://kiedy-kolos-backend.azurewebsites.net/yearCourses/".concat(a,"/Events/").concat(t),d);case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r,s,i,o,u){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(S.a.mark((function e(t,n){var a,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"},e.next=3,fetch("https://kiedy-kolos-backend.azurewebsites.net/yearCourses/".concat(t,"/Events/").concat(n),a);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r.result);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(e){var t=e.month,n=e.swipeDirection;return Object(a.jsx)(d.b.h2,{className:"calendar__title",initial:{x:50*n},animate:{x:0},transition:{type:"spring",stiffness:600,damping:50},children:["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"][t-1]},t)},z=function(){var e=Object(u.c)((function(e){return e.allEvents})),t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(),l=Object(o.a)(i,2),b=l[0],f=l[1],h=Object(c.useState)(0),v=Object(o.a)(h,2),O=v[0],m=v[1],_=Object(c.useState)(1),y=Object(o.a)(_,2),g=y[0],E=y[1],T=Object(u.b)(),S=(Object(u.c)((function(e){return e.chosenGroup})),[7,1,2,3,4,5,6]),k=j()();Object(c.useEffect)((function(){f(parseInt(k.format("MM"))),T(p(k.format("YYYY-MM-DD"))),D(0)}),[]);var D=function(e){for(var t=k.add(e,"month"),n=new Array(42),a=S[t.startOf("month").day()],c=t.startOf("month").subtract(a-1,"day"),r=0;r<42;r++)n[r]=c.add(r,"day").format("YYYY-MM-DD");s(n)},C=function(t){return e.filter((function(e){return e.date===t}))},P=function(e){var t=k.add(O,"month");return j()(e).format("MM")===t.format("MM")},Y={hidden:{opacity:0,x:100*g},show:{opacity:1,x:0,transition:{type:"spring",stiffness:600,damping:50}}},z=r.map((function(e){return Object(a.jsx)(x,{isInCurrentMonth:P(e),cardDate:e,events:C(e),swipeDirection:g},e)})).reduce((function(e,t,n){return n%7===0&&e.push([]),e[e.length-1].push(t),e}),[]).map((function(e,t){return Object(a.jsx)("div",{className:"calendar__row",children:e},b+t)}));return Object(a.jsxs)("div",{className:"calendar",children:[Object(a.jsxs)("div",{className:"calendar__header",children:[Object(a.jsx)("button",{className:"button button--previous",onClick:function(){return function(){E(-1);var e=O-1;m(e),f(parseInt(k.add(e,"month").format("MM"))),D(e)}()}}),Object(a.jsx)(M,{month:b,swipeDirection:g}),Object(a.jsx)("button",{className:"button button--next",onClick:function(){return function(){E(1);var e=O+1;m(e),f(parseInt(k.add(e,"month").format("MM"))),D(e)}()}})]}),Object(a.jsx)(N,{}),Object(a.jsx)(w,{}),Object(a.jsx)(d.b.div,{className:"calendar__days",initial:"hidden",animate:"show",variants:Y,children:z},b)]})},I=function(e){var t=e.event,n=Object(u.b)();return Object(a.jsxs)(d.b.li,{className:"event",variants:{hidden:{opacity:0,y:50},show:{opacity:1,y:0,transition:{type:"spring",stiffness:600,damping:50}}},whileTap:{scale:.98},whileHover:{scale:1.02},children:[Object(a.jsxs)("div",{className:"event__topbar event__topbar"+function(){var e="";return e+={Kolokwium:"--red",Projekt:"--green",Egzamin:"--red",Laboratorium:"--blue",Inne:"--yellow"}[t.type]}(),children:[Object(a.jsx)("h3",{className:"event__title",children:t.subjectLongName}),Object(a.jsx)("button",{className:"event__editor",onClick:function(){n(b(!1)),n(h(!0)),n(O(t))}}),Object(a.jsx)("button",{className:"event__deleter",onClick:function(){n(b(!1)),n(v(!0)),n(O(t.id))}})]}),Object(a.jsxs)("div",{className:"event__panel",children:[Object(a.jsxs)("div",{className:"event__tags",children:[Object(a.jsx)("div",{className:"event__tag event__tag--type",children:t.type}),Object(a.jsx)("div",{className:"event__tag event__tag--time",children:t.time}),Object(a.jsx)("div",{className:"event__tag event__tag--info",children:"Informacja"})]}),Object(a.jsx)("div",{className:"event__description",children:t.description})]})]},t.id)},R=function(){var e=Object(u.b)();return Object(a.jsx)(d.b.div,{className:"event--adder",whileHover:{scale:1.05},whileTap:{scale:.95},children:Object(a.jsx)("button",{className:"extension__button",onClick:function(){e(b(!1)),e(f(!0))},children:"Dodaj Wydarzenie"})})},U=function(){var e=Object(u.c)((function(e){return e.dayEvents})),t=Object(c.useState)(),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(u.c)((function(e){return e.chosenDate})),l=Object(c.useState)([]),p=Object(o.a)(l,2),b=p[0],f=p[1];Object(c.useEffect)(Object(k.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f([]),setTimeout((function(){return f(e)}),0);case 2:case"end":return t.stop()}}),t)}))),[e]);return Object(a.jsx)("div",{className:"extension",children:Object(a.jsxs)(d.b.div,{className:"extension__events",children:[Object(a.jsxs)("h2",{className:"extension__header",children:["Wydarzenia ",function(){var e=j()(i).format("DD");return"0"==e[0]&&(e=e.slice(1,2)),e}()," ",["Stycznia","Lutego","Marca","Kwietnia","Maja","Czerwca","Lipca","Sierpnia","Wrzesienia","Pa\u017adziernika","Listopada","Grudnia"][parseInt(j()(i).format("MM"))-1]]}),Object(a.jsx)(R,{}),Object(a.jsx)(d.b.ul,{className:"events-list",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.07}}},initial:"hidden",animate:b.length>0&&"show",children:b.map((function(e){return Object(a.jsx)(I,{event:e,setChosenEventLocal:s,chosenEvent:r},e.id)}))})]})})},H=n(17),L=n(5),A=function(){var e,t=Object(u.b)(),n=Object(u.c)((function(e){return e.chosenDate})),r=Object(u.c)((function(e){return e.eventTypes})),s=Object(u.c)((function(e){return e.subjects})),i=Object(u.c)((function(e){return e.groups})),l=Object(L.f)().id,p=Object(c.useState)(0),b=Object(o.a)(p,2),h=b[0],v=b[1],O=Object(c.useState)(0),m=Object(o.a)(O,2),_=m[0],y=m[1],x=Object(c.useState)(0),g=Object(o.a)(x,2),N=g[0],E=g[1],w=Object(c.useState)("12:00"),T=Object(o.a)(w,2),C=T[0],P=T[1],Y=Object(c.useState)(""),M=Object(o.a)(Y,2),z=M[0],I=M[1],R=Object(c.useState)(""),U=Object(o.a)(R,2),A=U[0],G=U[1],F=Object(c.useState)(""),V=Object(o.a)(F,2),J=V[0],K=V[1];Object(c.useEffect)(Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(),E(r[0].id),v(s[0].id),t={id:0,groupNumber:"Wszystkie",groupName:""},i.some((function(e){return 0==e.id}))||i.push(t),y(i[i.length-1].id);case 6:case"end":return e.stop()}}),e)}))),[]);var W=function(){var e=Object(k.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(k.a)(S.a.mark((function e(){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],0==_?i.forEach((function(e){0!=e.id&&a.push(e.id)})):a.push(_),e.next=4,D(h,l,a,n,C,z,N,A);case 4:(c=e.sent).ok?(t(f(!1)),t({type:"REFRESH"})):X(c.status);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){K("Niepoprawne has\u0142o!"),console.log("CAUGHT AN ERROR!"),console.log(e)};return Object(a.jsx)(d.b.div,{className:"modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.08,.75,.21,.98]},children:Object(a.jsxs)(d.b.div,{className:"event-adder",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{ease:[.08,.75,.21,.98]},children:[Object(a.jsxs)("h2",{className:"event-adder__title",children:["Dodawanie wydarzenia ",j()(n).format("DD/MM/YYYY")]}),Object(a.jsxs)("form",{className:"event-adder__form",children:[Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"subject",children:"Przedmiot"}),Object(a.jsx)("select",{className:"event-adder__input",id:"subject",value:h,onChange:function(e){v(e.target.value)},children:s.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"group",children:"Grupa"}),Object(a.jsx)("select",{className:"event-adder__input",id:"group",value:_,onChange:function(e){y(e.target.value)},children:i.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.groupNumber},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"type",children:"Typ"}),Object(a.jsx)("select",{className:"event-adder__input",id:"type",value:N,onChange:function(e){E(e.target.value)},children:r.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"time",children:"Godzina"}),Object(a.jsx)("input",(e={type:"time",id:"time",name:"time",min:"07:00",value:"16:00:00",max:"21:00"},Object(H.a)(e,"value",C),Object(H.a)(e,"onChange",(function(e){P(e.target.value)})),e))]}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"description",children:"Opis"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"5",cols:"30",placeholder:"Tu wpisz opis...",value:z,onChange:function(e){I(e.target.value)}})]}),Object(a.jsx)("div",{className:"edition__setting submit",children:Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){G(e.target.value)}})}),Object(a.jsx)("h1",{children:J}),Object(a.jsxs)("div",{className:"event-adder__buttons",children:[Object(a.jsx)("button",{className:"event-adder__button--reject",onClick:function(e){e.preventDefault(),t(f(!1))},children:"Anuluj"}),Object(a.jsx)("button",{className:"event-adder__button--accept",onClick:function(e){e.preventDefault(),B()},children:"Utw\xf3rz wydarzenie"})]})]})]})})},G=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.chosenEvent})),n=Object(L.f)().id,r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(c.useState)(""),p=Object(o.a)(j,2),b=p[0],f=p[1],h=function(){var a=Object(k.a)(S.a.mark((function a(){var c;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(n,t,i);case 2:(c=a.sent).ok?(e(v(!1)),e({type:"REFRESH"})):O(c.status);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),O=function(e){f("Niepoprawne has\u0142o!"),console.log("CAUGHT AN ERROR!"),console.log(e)};return Object(a.jsx)(d.b.div,{className:"modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.08,.75,.21,.98]},children:Object(a.jsxs)(d.b.div,{className:"event-adder",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{ease:[.08,.75,.21,.98]},children:[Object(a.jsxs)("h2",{className:"event-adder__title",children:["Usuwanie wydarzenia ",t]}),Object(a.jsxs)("form",{className:"event-adder__form",children:[Object(a.jsx)("div",{className:"edition__setting submit",children:Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){l(e.target.value)}})}),Object(a.jsx)("h1",{children:b}),Object(a.jsxs)("div",{className:"event-adder__buttons",children:[Object(a.jsx)("button",{className:"event-adder__button--reject",onClick:function(t){t.preventDefault(),e(v(!1))},children:"Anuluj"}),Object(a.jsx)("button",{className:"event-adder__button--accept",onClick:function(e){e.preventDefault(),h()},children:"Usu\u0144 wydarzenie"})]})]})]})})},F=function(){var e,t=Object(u.b)(),n=Object(u.c)((function(e){return e.chosenEvent})),r=Object(u.c)((function(e){return e.eventTypes})),s=Object(u.c)((function(e){return e.subjects})),i=Object(u.c)((function(e){return e.groups})),l=Object(L.f)().id,p=Object(c.useState)(0),b=Object(o.a)(p,2),f=b[0],v=b[1],O=Object(c.useState)(0),m=Object(o.a)(O,2),_=m[0],y=m[1],x=Object(c.useState)(0),g=Object(o.a)(x,2),N=g[0],E=g[1],w=Object(c.useState)(""),T=Object(o.a)(w,2),D=T[0],C=T[1],M=Object(c.useState)(""),z=Object(o.a)(M,2),I=z[0],R=z[1],U=Object(c.useState)(""),A=Object(o.a)(U,2),G=A[0],F=A[1],V=Object(c.useState)(""),J=Object(o.a)(V,2),K=J[0],W=J[1],B=Object(c.useState)(""),X=Object(o.a)(B,2),q=X[0],Q=X[1];Object(c.useEffect)(Object(k.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(l,n.id);case 2:t=e.sent,E(t.eventTypeId),v(t.subjectId),F(t.description),C(j()(t.date).format("YYYY-MM-DD")),R(j()(t.date).format("hh:mm")),a={id:0,groupNumber:"Wszystkie",groupName:""},i.some((function(e){return 0==e.id}))||i.push(a),y(i[i.length-1].id);case 11:case"end":return e.stop()}}),e)}))),[]);var Z=function(){var e=Object(k.a)(S.a.mark((function e(){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],0==_?i.forEach((function(e){0!=e.id&&a.push(e.id)})):a.push(_),e.next=4,P(n.id,f,l,a,D,I,G,N,K);case 4:(c=e.sent).ok?(t(h(!1)),t({type:"REFRESH"})):$(c.status);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){Q("Niepoprawne has\u0142o!"),console.log("CAUGHT AN ERROR!"),console.log(e)};return Object(a.jsx)(d.b.div,{className:"modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.08,.75,.21,.98]},children:Object(a.jsxs)(d.b.div,{className:"event-adder",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{ease:[.08,.75,.21,.98]},children:[Object(a.jsxs)("h2",{className:"event-adder__title",children:["Edytowanie wydarzenia ",j()(D).format("DD/MM/YYYY")]}),Object(a.jsxs)("form",{className:"event-adder__form",children:[Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"subject",children:"Przedmiot"}),Object(a.jsx)("select",{className:"event-adder__input",id:"subject",value:f,onChange:function(e){v(e.target.value)},children:s.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"group",children:"Grupa"}),Object(a.jsx)("select",{className:"event-adder__input",id:"group",value:_,onChange:function(e){y(e.target.value)},children:i.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.groupNumber},e.id)}))}),Object(a.jsx)("label",{className:"event-adder__label",htmlFor:"type",children:"Typ"}),Object(a.jsx)("select",{className:"event-adder__input",id:"type",value:N,onChange:function(e){E(e.target.value)},children:r.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"time",children:"Godzina"}),Object(a.jsx)("input",(e={type:"time",id:"time",name:"time",min:"07:00",value:"16:00:00",max:"21:00"},Object(H.a)(e,"value",I),Object(H.a)(e,"onChange",(function(e){R(e.target.value)})),e))]}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"description",children:"Opis"}),Object(a.jsx)("textarea",{id:"description",name:"description",rows:"5",cols:"30",placeholder:"Tu wpisz opis...",value:G,onChange:function(e){F(e.target.value)}})]}),Object(a.jsxs)("div",{className:"edition__setting",children:[Object(a.jsx)("label",{className:"edition__label",htmlFor:"date",children:"Data"}),Object(a.jsx)("input",{type:"date",id:"date",name:"date",value:D,onChange:function(e){C(e.target.value)}})]}),Object(a.jsx)("div",{className:"edition__setting submit",children:Object(a.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Has\u0142o",onChange:function(e){W(e.target.value)}})}),Object(a.jsx)("h1",{children:q}),Object(a.jsxs)("div",{className:"event-adder__buttons",children:[Object(a.jsx)("button",{className:"event-adder__button--reject",onClick:function(e){e.preventDefault(),t(h(!1))},children:"Anuluj"}),Object(a.jsx)("button",{className:"event-adder__button--accept",onClick:function(e){e.preventDefault(),Z()},children:"Edytuj wydarzenie"})]})]})]})})},V=n(22),J=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.forceEventsRefresh})),n=Object(u.c)((function(e){return e.chosenDate})),a=Object(u.c)((function(e){return e.subjects})),r=Object(u.c)((function(e){return e.chosenGroup})),s=Object(c.useState)(!1),i=Object(o.a)(s,2),d=i[0],l=i[1],p=Object(c.useState)([]),b=Object(o.a)(p,2),f=b[0],h=b[1],v=Object(c.useState)([]),O=Object(o.a)(v,2),m=O[0],x=O[1],g=Object(L.f)().id;Object(c.useEffect)((function(){C(),console.log("Downloading data")}),[t,r]),Object(c.useEffect)((function(){P(),Y(n),z(),console.log("Building data")}),[d]),Object(c.useEffect)((function(){Y(n)}),[n]);var N=function(){var e=Object(k.a)(S.a.mark((function e(t){var n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://kiedy-kolos-backend.azurewebsites.net/"+t,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c.result);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("yearCourses/".concat(g,"/groups/").concat(r,"/events"));case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("yearCourses/".concat(g,"/subjects"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("eventTypes");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("yearCourses/".concat(g,"/groups"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var t=Object(k.a)(S.a.mark((function t(){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.next=3,E();case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.next=7,w();case 7:return n=t.sent,e({type:"SET_SUBJECTS",payload:n}),t.next=11,T();case 11:return a=t.sent,x(a),e(_(a)),t.t2=e,t.t3=y,t.next=18,D();case 18:t.t4=t.sent,t.t5=(0,t.t3)(t.t4),(0,t.t2)(t.t5),l(!d);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(k.a)(S.a.mark((function t(){var n,c,r,s,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],c=Object(V.a)(f);try{for(c.s();!(r=c.n()).done;)s=r.value,i={date:j()(s.date).format("YYYY-MM-DD"),subjectLongName:M(a,s.subjectId,"name"),subjectShortName:M(a,s.subjectId,"shortName"),type:M(m,s.eventTypeId,"name")},n.push(i)}catch(o){c.e(o)}finally{c.f()}e({type:"SET_ALL_EVENTS",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=function(){var t=Object(k.a)(S.a.mark((function t(n){var c,r,s,i,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=[],r=Object(V.a)(f),t.prev=2,r.s();case 4:if((s=r.n()).done){t.next=12;break}if(i=s.value,j()(i.date).format("YYYY-MM-DD")==n){t.next=8;break}return t.abrupt("continue",10);case 8:o={id:i.id,date:j()(i.date).format("YYYY-MM-DD"),description:i.description,subjectLongName:M(a,i.subjectId,"name"),type:M(m,i.eventTypeId,"name"),time:j()(i.date).format("HH:mm")},c.push(o);case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),r.e(t.t0);case 17:return t.prev=17,r.f(),t.finish(17);case 20:e({type:"SET_DAY_EVENTS",payload:c});case 21:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),M=function(e,t,n){var a,c=Object(V.a)(e);try{for(c.s();!(a=c.n()).done;){var r=a.value;if(r.id==t)return r[n]}}catch(s){c.e(s)}finally{c.f()}},z=function(){};return null},K=function(){var e=Object(u.c)((function(e){return e.addEventPopup})),t=Object(u.c)((function(e){return e.deleteEventPopup})),n=Object(u.c)((function(e){return e.editEventPopup}));return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(J,{}),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(z,{}),Object(a.jsx)(U,{})]}),Object(a.jsx)(d.a,{children:e&&Object(a.jsx)(A,{})}),Object(a.jsx)(d.a,{children:t&&Object(a.jsx)(G,{})}),Object(a.jsx)(d.a,{children:n&&Object(a.jsx)(F,{})})]})},W=function(){return Object(a.jsx)(L.c,{children:Object(a.jsx)(L.a,{path:"/:id",component:K})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},X=n(16),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2020-11-01",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return t.payload;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUP":return t.payload;default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADD_EVENT_POPUP":return t.payload;default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH":return!e;default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DELETE_EVENT_POPUP":return t.payload;default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHOSEN_EVENT":return t.payload;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHOSEN_THEME":return t.payload;default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EDIT_EVENT_POPUP":return t.payload;default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_EVENTS":return t.payload;default:return e}},re=n(31),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DAY_EVENTS":return Object(re.a)(t.payload);default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENT_TYPES":return t.payload;default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUBJECTS":return t.payload;default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OPTIONS_POPUP":return t.payload;default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUPS":return t.payload;default:return e}},le=Object(X.b)({allEvents:ce,dayEvents:se,eventTypes:ie,subjects:oe,chosenDate:q,chosenGroup:Q,addEventPopup:Z,deleteEventPopup:ee,editEventPopup:ae,forceEventsRefresh:$,chosenEvent:te,chosenTheme:ne,optionsPopup:ue,groups:de}),je=n(30),pe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),be=Object(X.c)(le,pe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());be.subscribe((function(){!function(e){try{localStorage.setItem("state",JSON.stringify(e))}catch(t){}}({chosenGroup:be.getState().chosenGroup,chosenTheme:be.getState().chosenTheme})})),i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u.a,{store:be,children:Object(a.jsx)(je.a,{basename:"/",children:Object(a.jsx)(W,{})})})}),document.getElementById("root")),B()}},[[45,1,2]]]);
//# sourceMappingURL=main.a9ae7844.chunk.js.map