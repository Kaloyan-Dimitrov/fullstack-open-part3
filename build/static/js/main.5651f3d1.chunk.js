(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(17),u=t.n(a),o=(t(22),t(8)),i=t(3),s=t(4),d=t.n(s),l="/api/persons",b={getAll:function(){return d.a.get(l).then((function(e){return e.data}))},create:function(e){return d.a.post(l,e).then((function(e){return e.data}))},deletePerson:function(e){return d.a.delete("".concat(l,"/").concat(e))},update:function(e){return d.a.put("".concat(l,"/").concat(e.id),e).then((function(e){return e.data}))}},j=t(0),f=function(e){var n=e.searchString,t=e.changeSearchString;return Object(j.jsxs)(j.Fragment,{children:["filter shown with ",Object(j.jsx)("input",{value:n,onChange:t})]})},h=function(e){var n=e.newName,t=e.newNumber,c=e.changeNewName,r=e.changeNewNumber,a=e.addNewPerson;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:n,onChange:c}),Object(j.jsx)("br",{}),"number: ",Object(j.jsx)("input",{value:t,onChange:r})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},m=function(e){var n=e.persons,t=e.deletePerson;return Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsxs)("div",{children:[e.name," ",e.number," ",Object(j.jsx)("button",{onClick:t(e),children:"Delete"})]},e.id)}))})},O=function(e){var n=e.message,t=e.type;return null===n?null:Object(j.jsx)("div",{className:t,children:n})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),s=u[0],d=u[1],l=Object(c.useState)(""),g=Object(i.a)(l,2),p=g[0],v=g[1],w=Object(c.useState)(""),x=Object(i.a)(w,2),N=x[0],S=x[1],y=Object(c.useState)(null),C=Object(i.a)(y,2),P=C[0],k=C[1],A=Object(c.useState)(null),F=Object(i.a)(A,2),D=F[0],L=F[1];Object(c.useEffect)((function(){b.getAll().then((function(e){return r(e)}))}),[]);var T=function(e){k(e),setTimeout((function(){k(null)}),5e3)},I=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(O,{message:P,type:"success"}),Object(j.jsx)(O,{message:D,type:"error"}),Object(j.jsx)(f,{searchString:N,changeSearchString:function(e){return S(e.target.value)}}),Object(j.jsx)("h1",{children:"Add a new"}),Object(j.jsx)(h,{newName:s,newNumber:p,changeNewName:function(e){return d(e.target.value)},changeNewNumber:function(e){return v(e.target.value)},addNewPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.number===p})),c=t.find((function(e){return e.name===s}));if(n)alert('A person with the number "'.concat(p,'" is already added to phonebook'));else if(c){if(window.confirm("Are you sure you want to update ".concat(s)).valueOf()){var a=Object(o.a)(Object(o.a)({},c),{},{number:p});b.update(a).then((function(e){T("Updated ".concat(e.name,"'s phone number to ").concat(e.number)),r(t.map((function(n){return n.id===e.id?e:n}))),d(""),v("")})).catch((function(e){var n;n="Information of ".concat(a.name," has already been removed from the server."),L(n),setTimeout((function(){L(null)}),5e3)}))}else d(""),v("")}else{var u=t[t.length-1].id+1,i={name:s,number:p,id:u};b.create(i).then((function(e){T("Added ".concat(e.name)),r(t.concat(e)),d(""),v("")}))}}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(m,{persons:I,deletePerson:function(e){return function(n){window.confirm("Do you really want to delete ".concat(e.name)).valueOf()&&b.deletePerson(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id})))}))}}})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,u=n.getTTFB;t(e),c(e),r(e),a(e),u(e)}))};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.5651f3d1.chunk.js.map