(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),d=a(12),s=a.n(d),c=(a(28),a(29),a(5)),i=a(1);var r=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],d=a[1],s=Object(n.useState)(!1),r=Object(c.a)(s,2),l=r[0],u=r[1];return Object(i.jsxs)("li",{className:e.task.done?"doneTask":"",children:[e.readonly?"":Object(i.jsx)("input",{type:"checkbox",checked:e.task.done,onChange:function(){e.doneTask(e.task.id,e.list),e.setSave(!1)}}),l?Object(i.jsxs)("form",{onSubmit:function(t){console.log(o),t.preventDefault(),e.editTask({id:e.task.id,text:o,done:e.task.done},e.list),u(!l)},children:[Object(i.jsx)("input",{type:"text",placeholder:"\u0417\u0430\u0434\u0430\u0447\u0430",value:o,onChange:function(e){var t=e.target.value;d(t)},name:"text"}),Object(i.jsx)("input",{type:"submit",value:"ok"})]}):e.task.text,e.readonly?"":Object(i.jsx)("button",{className:"editButton",onClick:function(){u(!l),d(e.task.text)},children:"\ud83d\udd8d"}),e.readonly?"":Object(i.jsx)("button",{className:"deleteButton",onClick:function(){return e.removeTask(e.task.id,e.list)},children:"\u2716"})]})};var l=function(e){var t=Object(n.useState)(!0),a=Object(c.a)(t,2),o=a[0],d=a[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.new(o,e.list),e.setSave(!1)},children:[Object(i.jsx)("input",{type:"text",placeholder:"\u0417\u0430\u0434\u0430\u0447\u0430",onChange:function(e){var t=e.target.value;d(t)},name:"text"}),Object(i.jsx)("input",{type:"submit",value:"+"})]})};var u=function(e){var t=Object(n.useState)(!0),a=Object(c.a)(t,2),o=a[0],d=a[1];Object(n.useEffect)((function(){e.readonly||(localStorage.removeItem(e.id),localStorage.setItem(e.id,JSON.stringify(e.store)),console.log("effect"))}),[]);var s=e.store.map((function(t){return t.done?"":Object(i.jsx)(r,{setSave:d,kay:t.id,task:t,doneTask:e.doneTask,removeTask:e.removeTask,editTask:e.editTask,readonly:e.readonly,list:e.kay})})),u=e.store.map((function(t){return t.done?Object(i.jsx)(r,{setSave:d,kay:t.id,task:t,doneTask:e.doneTask,removeTask:e.removeTask,editTask:e.editTask,readonly:e.readonly,list:e.kay}):""}));return Object(i.jsxs)("div",{children:[e.readonly?"":Object(i.jsx)("h3",{children:e.head}),Object(i.jsxs)("ol",{children:[s,u]}),e.readonly?"":Object(i.jsx)(l,{setSave:d,new:e.new,list:e.kay}),o||e.readonly?"":Object(i.jsx)("button",{onClick:function(){d(!0),localStorage.removeItem(e.id),localStorage.setItem(e.id,JSON.stringify(e.store))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),o||e.readonly?"":Object(i.jsx)("button",{onClick:function(){e.cancel(e.kay),d(!0)},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})};var j=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],d=a[1];return Object(i.jsx)("div",{id:"modal",className:"modalHide",children:Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("div",{className:"modalHead",children:e.head}),"newList"==e.type?Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.newList(o),document.getElementById("modal").classList.remove("modalShow"),document.getElementById("modal").classList.add("modalHide")},children:[Object(i.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0438",onChange:function(e){var t=e.target.value;d(t)},name:"text"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit",value:"Ok"}),Object(i.jsx)("input",{type:"button",value:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){document.getElementById("modal").classList.remove("modalShow"),document.getElementById("modal").classList.add("modalHide")}})]}):"","removeList"==e.type?Object(i.jsxs)("div",{children:[Object(i.jsxs)("h5",{children:["\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443 ",e.listName]}),Object(i.jsx)("button",{onClick:function(){e.removeList(e.id),document.getElementById("modal").classList.remove("modalShow"),document.getElementById("modal").classList.add("modalHide")},children:"\u0414\u0430"}),Object(i.jsx)("button",{onClick:function(){document.getElementById("modal").classList.remove("modalShow"),document.getElementById("modal").classList.add("modalHide")},children:"\u041d\u0435\u0442"})]}):""]})})},m=a(14),b=a(8),O=a(13),h={DBData:localStorage.getItem("todoStore")?JSON.parse(localStorage.getItem("todoStore")):[{id:1,store:[{id:1,text:"\u0434\u0435\u043b\u043e \u0440\u0430\u0437",done:!1},{id:2,text:"\u0434\u0435\u043b\u043e \u0434\u0432\u0430\u0437",done:!1},{id:3,text:"\u0434\u0435\u043b\u043e \u0442\u0440\u0438\u0437",done:!1}],color:"red"},{id:2,store:[{id:1,text:"\u0434\u0435\u043b\u043e \u0440\u0430\u0437",done:!0},{id:2,text:"\u0434\u0435\u043b\u043e \u0434\u0432\u0430\u0437",done:!1},{id:3,text:"\u0434\u0435\u043b\u043e \u0442\u0440\u0438\u0437",done:!1}],color:"red"},{id:3,store:[{id:1,text:"\u0434\u0435\u043b\u043e \u0440\u0430\u0437",done:!1},{id:2,text:"\u0434\u0435\u043b\u043e \u0434\u0432\u0430\u0437",done:!0},{id:3,text:"\u0434\u0435\u043b\u043e \u0442\u0440\u0438\u0437",done:!1}],color:"red"}]};var v=Object(O.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_TASK":var a=e.DBData.map((function(e){return e.id==t.payload.listId?(e.store.push({text:t.payload.text,id:0!=e.store.length?e.store[e.store.length-1].id+1:0,done:!1}),e):e}));return{DBData:a};case"REMOVE_TASK":var n=e.DBData.map((function(e){return e.id==t.payload.listId?Object(b.a)(Object(b.a)({},e),{},{store:e.store.filter((function(e){return e.id!=t.payload.id}))}):e}));return{DBData:n};case"DONE_TASK":var o=e.DBData.map((function(e){return e.id==t.payload.listId?Object(b.a)(Object(b.a)({},e),{},{store:e.store.map((function(e){return e.id==t.payload.id?Object(b.a)(Object(b.a)({},e),{},{done:!e.done}):e}))}):e}));return{DBData:o};case"EDIT_TASK":var d=e.DBData.map((function(e){return e.id==t.payload.listId?Object(b.a)(Object(b.a)({},e),{},{store:e.store.map((function(e){return e.id==t.payload.task.id?Object(b.a)(Object(b.a)({},e),{},{text:t.payload.task.text}):e}))}):e}));return{DBData:d};case"NEW_LIST":var s=e.DBData.map((function(e){return e}));return s.push({header:t.payload,id:0!=e.DBData.length?e.DBData[e.DBData.length-1].id+1:0,store:[],color:"white"}),{DBData:s};case"REMOVE_LIST":var c=e.DBData.filter((function(e){return e.id!=t.payload}));return{DBData:c};case"CANCEL":var i=e.DBData.map((function(e){return e.id==t.payload?Object(b.a)(Object(b.a)({},e),{},{store:JSON.parse(localStorage.getItem(t.payload))}):e}));return{DBData:i};default:return e}})),p=a(15),x=a(3);function y(e){return Object(i.jsx)("nav",{children:Object(i.jsx)("div",{children:e.arr})})}var f={newTask:function(e,t){return{type:"NEW_TASK",payload:{text:e,listId:t}}},removeTask:function(e,t){return{type:"REMOVE_TASK",payload:{id:e,listId:t}}},doneTask:function(e,t){return{type:"DONE_TASK",payload:{id:e,listId:t}}},editTask:function(e,t){return{type:"EDIT_TASK",payload:{task:e,listId:t}}},removeList:function(e){return{type:"REMOVE_LIST",payload:e}},newList:function(e){return{type:"NEW_LIST",payload:e}},cancel:function(e){return{type:"CANCEL",payload:e}}},k=Object(m.b)((function(e){return{tasks:e.DBData}}),f)((function(e){localStorage.setItem("todoStore",JSON.stringify(e.tasks));var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],d=a[1],s=Object(n.useState)(""),r=Object(c.a)(s,2),l=r[0],m=r[1],b=Object(n.useState)(""),O=Object(c.a)(b,2),h=O[0],v=O[1],f=Object(n.useState)(""),k=Object(c.a)(f,2),S=k[0],g=k[1],D=e.tasks.map((function(e){return Object(i.jsxs)("div",{className:"list",children:[Object(i.jsxs)("div",{className:"deleteButtonConteiter",children:[" ",Object(i.jsx)("button",{className:"deleteButton",onClick:function(){d("removeList"),m("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"),v(e.header),g(e.id),document.getElementById("modal").classList.add("modalShow"),document.getElementById("modal").classList.remove("modalHide")},children:"\u2716"})]}),Object(i.jsxs)(p.b,{to:"/"+e.id,children:[e.header,Object(i.jsx)(u,{head:e.header,kay:e.id,store:e.store,readonly:!0})]})]},e.id)})),T=e.tasks.map((function(t){return Object(i.jsxs)(x.a,{path:"/"+t.id,children:[Object(i.jsx)("nav",{children:Object(i.jsx)(p.b,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(i.jsx)(u,{head:t.header,kay:t.id,id:t.id,store:t.store,readonly:!1,cancel:e.cancel,new:e.newTask,doneTask:e.doneTask,removeTask:e.removeTask,editTask:e.editTask})]},t.id)}));return Object(i.jsx)("div",{children:Object(i.jsx)(p.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(x.c,{children:[T,Object(i.jsxs)(x.a,{path:"/",children:["  ",Object(i.jsx)(j,{type:o,head:l,listName:h,id:S,removeList:e.removeList,newList:e.newList})," ",Object(i.jsx)(y,{arr:D}),Object(i.jsx)("button",{onClick:function(){d("newList"),m("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"),document.getElementById("modal").classList.add("modalShow"),document.getElementById("modal").classList.remove("modalHide")},children:"+"})]})]})})})})}));var S=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(k,{})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,d=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),d(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m.a,{store:v,children:Object(i.jsx)(S,{})})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.a1dd173d.chunk.js.map