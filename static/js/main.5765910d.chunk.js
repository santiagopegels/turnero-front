(this["webpackJsonpturnero-front"]=this["webpackJsonpturnero-front"]||[]).push([[0],{419:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(28),r=n.n(s),i=n(29),u=n(229),o=n(422),l=n(104),j=n(58),d=n(427),b=n(227),m=n(44),O=n(24),h=n(53),p=n.n(h),f=n(85),x="https://turnero-back.herokuapp.com/api",g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(x,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(x,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},v="[ui] Set Error",N="[ui] Remove Error",k="[ui] Start Loading",S="[ui] Stop Loading",w="[auth] Login",q="[auth] Finish checking login state",I="[auth] Logout",E="[queue] Queues loaded",F="[queue] Add New Queue",C="[queue] Add Call Place",A="[queue] Queue Logout",P=function(){return{type:k}},T=function(){return{type:S}},_=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P()),e.prev=1,e.next=4,y("queue/getAllUserQueues");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t(R(a.queues)),t(T()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return{type:E,payload:e}},z=function(e){return{type:F,payload:e}},L=function(e){return{type:w,payload:e}},V=function(){return{type:q}},D=function(){return function(e){localStorage.clear(),e({type:A}),e(G())}},G=function(){return{type:I}},M=function(e){return document.body.classList.add(e)},H=function(e){return document.body.classList.remove(e)};function Q(e){Object(a.useEffect)((function(){return e instanceof Array?e.map(M):M(e),function(){e instanceof Array?e.map(H):H(e)}}),[e])}var U=n(6),J=function(){var e=Object(O.b)(),t=Object(i.g)(),n=Object(O.c)((function(e){return e.ui})).loading;Q("auth-body");return Object(U.jsx)(U.Fragment,{children:n?Object(U.jsx)(o.a,{size:"large"}):Object(U.jsxs)(l.a,{className:"auth-container",children:[Object(U.jsx)(j.a,{span:12,children:Object(U.jsx)(l.a,{className:"auth-container-box",children:Object(U.jsxs)(j.a,{span:24,className:"auth-form-container",children:[Object(U.jsx)("h1",{className:"auth-title",children:"Login"}),Object(U.jsxs)(d.a,{name:"login",layout:"vertical",wrapperCol:{span:24},initialValues:{remember:!0},onFinish:function(t){var n=t.email,a=t.password;e(function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(a){var c,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(P()),n.next=4,g("auth/login",{email:e,password:t},"POST");case 4:return c=n.sent,n.next=7,c.json();case 7:if(s=n.sent,a(T()),!s.status){n.next=15;break}localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(L({uid:s.user.uid,name:s.user.name})),n.next=16;break;case 15:return n.abrupt("return",s);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(e){return n.apply(this,arguments)}}()}(n,a)).then((function(e){e&&(e.status||u.b.error(e.message))}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(U.jsx)(d.a.Item,{name:"email",initialValue:"1241254@test.com",rules:[{required:!0,type:"email",message:"Please input your email!"}],children:Object(U.jsx)(b.a,{className:"auth-input",placeholder:"EMAIL"})}),Object(U.jsx)(d.a.Item,{name:"password",initialValue:"124124",rules:[{required:!0,message:"Please input your password!"}],children:Object(U.jsx)(b.a.Password,{className:"auth-input",placeholder:"PASSWORD"})}),Object(U.jsx)(d.a.Item,{children:Object(U.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,className:"auth-button",size:"large",children:"INGRESAR"})})]})]})})}),Object(U.jsx)(j.a,{span:12,className:"overlay-container",children:Object(U.jsx)(l.a,{className:"overlay",children:Object(U.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(U.jsx)("h1",{className:"text-header",children:"\xbfEres Nuevo?"}),Object(U.jsx)("p",{children:"Para crear una cuenta, presiona el bot\xf3n"}),Object(U.jsx)(m.a,{ghost:!0,block:!0,onClick:function(){t.push("/register")},className:"auth-button",size:"large",children:"CREAR CUENTA"})]})})})]})})},W=n(23),Y=n(149),K=["isAuthenticated","component"],B=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Y.a)(e,K);return Object(U.jsx)(i.b,Object(W.a)(Object(W.a)({},a),{},{component:function(e){return t?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsx)(n,Object(W.a)({},e))}}))},X=function(){var e=Object(O.b)(),t=Object(i.g)(),n=Object(O.c)((function(e){return e.ui})).loading;Q("auth-body");return Object(U.jsx)(U.Fragment,{children:n?Object(U.jsx)(o.a,{size:"large"}):Object(U.jsxs)(l.a,{className:"auth-container",children:[Object(U.jsx)(j.a,{span:12,children:Object(U.jsx)(l.a,{className:"overlay",children:Object(U.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(U.jsx)("h1",{className:"text-header",children:"\xbfEst\xe1s Registrado?"}),Object(U.jsx)("p",{children:"Para iniciar sesi\xf3n, presiona en el bot\xf3n"}),Object(U.jsx)(m.a,{ghost:!0,block:!0,onClick:function(){t.push("/login")},className:"auth-button",size:"large",children:"INICIAR SESI\xd3N"})]})})}),Object(U.jsx)(j.a,{span:12,children:Object(U.jsx)(l.a,{className:"auth-container-box",children:Object(U.jsxs)(j.a,{span:24,className:"auth-form-container",children:[Object(U.jsx)("h1",{className:"auth-title",children:"Registro"}),Object(U.jsxs)(d.a,{name:"register",wrapperCol:{span:24},initialValues:{remember:!0},onFinish:function(t){var n=t.email,a=t.password,c=t.name;e(function(e,t,n){return function(){var a=Object(f.a)(p.a.mark((function a(c){var s,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g("auth/register",{email:e,password:t,name:n},"POST");case 2:return s=a.sent,a.next=5,s.json();case 5:if(!(r=a.sent).status){a.next=12;break}localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(L({uid:r.user.uid,name:r.user.name})),a.next=13;break;case 12:return a.abrupt("return",r);case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,a,c)).then((function(e){e&&(e.status||u.b.error(e.message))}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(U.jsx)(d.a.Item,{name:"name",rules:[{required:!0,message:"Please input a name!"}],children:Object(U.jsx)(b.a,{className:"auth-input",placeholder:"NAME"})}),Object(U.jsx)(d.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"Please input your email!"}],children:Object(U.jsx)(b.a,{className:"auth-input",placeholder:"EMAIL"})}),Object(U.jsx)(d.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(U.jsx)(b.a.Password,{className:"auth-input",placeholder:"PASSWORD"})}),Object(U.jsx)(d.a.Item,{name:"password2",dependencies:["password"],rules:[{required:!0,message:"Please input your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(U.jsx)(b.a.Password,{placeholder:"PASSWORD CONFIRM",className:"auth-input"})}),Object(U.jsx)(d.a.Item,{children:Object(U.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,className:"auth-button",size:"large",children:"REGISTRARSE"})})]})]})})})]})})},Z=["isAuthenticated","component","children"],$=function(e){var t=e.isAuthenticated,n=e.component,a=(e.children,Object(Y.a)(e,Z));return localStorage.setItem("lastPath",a.location.pathname),Object(U.jsx)(i.b,Object(W.a)(Object(W.a)({},a),{},{component:function(e){return t?Object(U.jsx)(n,Object(W.a)({},e)):Object(U.jsx)(i.a,{to:"/login"})}}))},ee=n(27),te=n(426),ne=n(423),ae=function(e){var t=e.queue,n=e.handleNextTicket,a=e.actualNumber;return Object(U.jsxs)(te.a,{title:t.description?t.description:t.name,className:"queue-card-container",headStyle:{fontSize:"2em",justifyContent:"center",display:"flex"},children:[Object(U.jsxs)(l.a,{children:[Object(U.jsxs)(j.a,{span:12,style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[Object(U.jsxs)("p",{className:"queue-card-body-title-text",children:["Total: ",Object(U.jsx)("span",{className:"queue-card-body-info-text",children:t.lastNumber})]}),Object(U.jsxs)("p",{className:"queue-card-body-title-text",children:["Atendidos: ",Object(U.jsx)("span",{className:"queue-card-body-info-text",children:t.ticketsAttended.length})]}),Object(U.jsxs)("p",{className:"queue-card-body-title-text",children:["Pendientes: ",Object(U.jsx)("span",{className:"queue-card-body-info-text",children:t.tickets.length})]})]}),Object(U.jsx)(j.a,{span:12,className:"queue-card-body-actual-number-container",children:Object(U.jsx)("p",{className:"queue-card-body-actual-number-text",children:"".concat(t.name).concat(a)})})]}),Object(U.jsx)(ne.a,{}),Object(U.jsx)(m.a,{block:!0,type:"primary",size:"large",onClick:function(){return n(t._id)},children:"LLAMAR SIGUIENTE"})]})},ce=n(222),se=n.n(ce),re=n(233),ie=function(){var e=Object(a.useState)(!1),t=Object(ee.a)(e,2),n=t[0],c=t[1],s=Object(O.b)(),r=function(e){var t;s((t=e,function(){var e=Object(f.a)(p.a.mark((function e(n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("queue",t,"POST");case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(z(c.queue)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),c(!1)},i=d.a.useForm(),u=Object(ee.a)(i,1)[0];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(m.a,{type:"link",shape:"rounded",size:"small",onClick:function(){c(!0)},icon:Object(U.jsx)(re.a,{style:{display:"flex",justifyContent:"center",fontSize:"2em",fontWeight:"bold"}})}),Object(U.jsx)(se.a,{title:"Nueva Fila",visible:n,onOk:function(){u.validateFields().then((function(e){u.resetFields(),r(e)})).catch((function(e){console.log("Validate Failed:",e)}))},onCancel:function(){c(!1)},children:Object(U.jsxs)(d.a,{form:u,name:"form_in_modal",initialValues:{modifier:"public"},children:[Object(U.jsx)(d.a.Item,{name:"name",label:"Prefijo",rules:[{required:!0,message:"Ingresar el prefijo de la fila."}],children:Object(U.jsx)(b.a,{})}),Object(U.jsx)(d.a.Item,{name:"description",label:"Descripci\xf3n",children:Object(U.jsx)(b.a,{})})]})})]})},ue=n(424),oe=n(83),le=n(147),je=n(429),de=n(430),be=n(431),me=n(432),Oe=n(433),he=n(434),pe=n(55),fe=function(e){var t=e.children,n=e.keySelected,s=Object(a.useState)(!0),r=Object(ee.a)(s,2),i=r[0],u=r[1],j=ue.a.Header,d=ue.a.Sider,b=ue.a.Content,h=Object(O.b)(),p=Object(O.c)((function(e){return e.ui})).loading;return Object(U.jsxs)(ue.a,{style:{minHeight:"100vh"},children:[Object(U.jsxs)(d,{trigger:null,collapsible:!0,collapsed:i,children:[Object(U.jsx)("div",{className:"logo"}),Object(U.jsxs)(oe.a,{theme:"dark",mode:"inline",selectedKeys:[n],children:[Object(U.jsx)(oe.a.Item,{icon:Object(U.jsx)(je.a,{}),children:Object(U.jsx)(pe.b,{to:"/queues",children:"Filas"})},"1"),Object(U.jsx)(oe.a.Item,{icon:Object(U.jsx)(de.a,{}),children:Object(U.jsx)(pe.b,{to:"/screen",children:"Pantallas"})},"2"),Object(U.jsx)(oe.a.Item,{icon:Object(U.jsx)(be.a,{}),children:Object(U.jsx)(pe.b,{to:"/printer",children:"Impresora"})},"3")]})]}),Object(U.jsxs)(ue.a,{className:"site-layout",children:[Object(U.jsx)(j,{className:"site-layout-background",style:{padding:0},children:Object(U.jsxs)(l.a,{justify:"space-between",align:"middle",children:[c.a.createElement(i?me.a:Oe.a,{className:"trigger",onClick:function(){u(!i)}}),Object(U.jsx)(le.a,{placement:"bottom",title:"Logout",children:Object(U.jsx)(m.a,{type:"primary",danger:!0,className:"logout-button",icon:Object(U.jsx)(he.a,{style:{display:"flex",justifyContent:"center"}}),onClick:function(){h(D())}})})]})}),Object(U.jsx)(b,{className:p?"loading-content":"site-layout-background dashboard-content",children:p?Object(U.jsx)(o.a,{size:"large"}):t})]})]})},xe=n(428),ge=function(e){var t=e.isVisible,n=d.a.useForm(),a=Object(ee.a)(n,1)[0],c=Object(O.b)(),s=function(e){c({type:C,payload:e})};return Object(U.jsx)(xe.a,{title:"Nombre del lugar de llamado",visible:t,closable:!1,cancelButtonProps:{hidden:!0},onOk:function(){a.validateFields().then((function(e){a.resetFields(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:Object(U.jsx)(d.a,{form:a,name:"form_call_place",initialValues:{modifier:"public"},children:Object(U.jsx)(d.a.Item,{name:"name",label:"Lugar",rules:[{required:!0,message:"Ingresar el nombre del lugar donde realiza el llamado."}],children:Object(U.jsx)(b.a,{})})})})},ye=n(223),ve=n.n(ye)()("https://turnero-back.herokuapp.com"),Ne=c.a.createContext(),ke=function(){var e=Object(a.useState)([]),t=Object(ee.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),r=Object(ee.a)(s,2),i=r[0],u=r[1],o=Object(O.c)((function(e){return e.queue})),j=o.queues,d=o.place,b=Object(a.useContext)(Ne),m=Object(O.b)();Object(a.useEffect)((function(){m(_())}),[m]),Object(a.useEffect)((function(){c(j)}),[j]),Object(a.useEffect)((function(){u(!d)}),[d]),Object(a.useEffect)((function(){return b.on("queues-change",(function(e){var t=n.map((function(t){return t._id===e._id?e:t}));c(t)})),function(){b.off()}}),[n,b]);var h=function(e){b.emit("next-ticket",{queueId:e,screen:d.name},(function(e){var t=e.status,a=e.message,s=e.queue;if(t){var r=n.map((function(e){return e._id===s._id?s:e}));c(r)}else console.log("next ticket error",a)}))};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(ge,{isVisible:i}),Object(U.jsxs)(fe,{keySelected:"1",children:[Object(U.jsxs)(l.a,{justify:"center",align:"center",className:"title",children:["Filas",Object(U.jsx)(ie,{})]}),Object(U.jsx)(ne.a,{}),Object(U.jsx)(l.a,{justify:"center",children:n.map((function(e){return Object(U.jsx)(ae,{queue:e,actualNumber:e.actualNumber,handleNextTicket:h},e._id)}))})]})]})},Se=n(80),we=n(425),qe=function(e){var t=e.onFinish,n=e.data,c=Object(a.useState)([]),s=Object(ee.a)(c,2),r=s[0],i=s[1],u=Object(a.useState)([]),o=Object(ee.a)(u,2),l=o[0],j=o[1];return Object(U.jsxs)(d.a,{name:"basic",labelCol:{span:24},wrapperCol:{span:24},initialValues:{remember:!0},onFinish:t,children:[Object(U.jsx)(d.a.Item,{label:"Seleccione las filas",name:"queues",rules:[{required:!0,message:"Debe seleccionar al menos 1 Fila!"}],children:Object(U.jsx)(we.a,{dataSource:n,titles:["Todas las filas","Filas P\xfablicas"],targetKeys:r,selectedKeys:l,onChange:function(e){i(e)},onSelectChange:function(e,t){j([].concat(Object(Se.a)(e),Object(Se.a)(t)))},render:function(e){return"".concat(e.title)},listStyle:{width:"100%",height:250}})}),Object(U.jsx)(d.a.Item,{label:"Nombre de la pantalla",name:"name",children:Object(U.jsx)(b.a,{})}),Object(U.jsx)(d.a.Item,{wrapperCol:{offset:11},children:Object(U.jsx)(m.a,{type:"primary",htmlType:"submit",size:"large",children:"SIGUIENTE"})})]})},Ie=n(155),Ee=function(e){var t=e.tickets,n=e.name;Q("public-screen-body");var c=Object(a.useState)(Ie().format("HH:mm")),s=Object(ee.a)(c,2),r=s[0],i=s[1];return setInterval((function(){i(Ie().format("HH:mm"))}),6e4),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(l.a,{className:"ps-header-container",justify:"space-between",children:[Object(U.jsx)("span",{children:r}),Object(U.jsx)("span",{children:n}),Object(U.jsx)("span",{children:Ie().format("d/M/YYYY")})]}),Object(U.jsxs)(l.a,{className:"ps-content-container",justify:"space-around",align:"middle",children:[Object(U.jsx)(j.a,{span:12,className:"ps-img-container",children:Object(U.jsx)("img",{alt:"scenerys",className:"ps-img",src:"https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg"})}),Object(U.jsx)(j.a,{span:12,className:"ps-content-list-numbers",children:t.map((function(e,t){return Object(U.jsxs)("div",{className:0===t?"ps-number-call zoom-effect":"ps-number-call",children:[Object(U.jsx)("span",{children:e.screen}),Object(U.jsx)("span",{className:"ps-number-divider"}),Object(U.jsx)("span",{children:"".concat(e.prefix).concat(e.number)})]},e._id)}))})]})]})},Fe=function(){var e=Object(a.useContext)(Ne),t=Object(a.useState)([]),n=Object(ee.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),i=Object(ee.a)(r,2),u=i[0],o=i[1],j=Object(a.useState)(""),d=Object(ee.a)(j,2),b=d[0],m=d[1],h=Object(a.useState)([]),p=Object(ee.a)(h,2),f=p[0],x=p[1],g=Object(O.c)((function(e){return e.queue})).queues,y=Object(O.b)();Object(a.useEffect)((function(){y(_())}),[y]),Object(a.useEffect)((function(){var e=g.map((function(e){var t=e._id,n=e.name,a=e.description;return a&&(n=a+"-"+n),{key:t,title:n,description:a}}));x(e)}),[g]);return Object(a.useEffect)((function(){return e.on("queues-change",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;u.includes(e._id)&&t&&(t.prefix=e.name,c.length>5&&c.splice(-1,1),s([t].concat(Object(Se.a)(c))),new Audio("./audio/next-ticket.mp3").play())})),function(){e.off()}}),[e,c,u]),Object(U.jsx)(U.Fragment,{children:!u.length>0?Object(U.jsxs)(fe,{keySelected:"2",children:[Object(U.jsx)(l.a,{justify:"center",align:"center",className:"title",children:"Configuraci\xf3n de Pantalla P\xfablica"}),Object(U.jsx)(ne.a,{}),Object(U.jsx)(qe,{onFinish:function(e){var t=e.queues,n=e.name;o(t),m(n)},data:f})]}):Object(U.jsx)(Ee,{tickets:c,name:b})})},Ce=function(e){var t=e.number;return Object(U.jsxs)("div",{className:"printer-message-container",children:[Object(U.jsx)("p",{className:"printer-message-default",children:"Usted ser\xe1 llamado por el n\xfamero"}),Object(U.jsx)("div",{className:"printer-message-number-container",children:Object(U.jsx)("span",{className:"printer-message-number",children:t})})]})},Ae=function(e){var t=e.queues,n=e.handleQueueSelected;return Object(U.jsx)("div",{children:t.map((function(e){return Object(U.jsx)(l.a,{justify:"center",children:Object(U.jsx)(m.a,{className:"printer-option-button",type:"primary",onClick:function(){return n(e)},children:e.description?e.description:e.name})},e._id)}))})},Pe=function(){var e=Object(a.useState)(!1),t=Object(ee.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(ee.a)(s,2),i=r[0],u=r[1],o=Object(O.c)((function(e){return e.queue})).queues,l=Object(O.b)();Q("printer-body"),Object(a.useEffect)((function(){l(_())}),[l]);return Object(U.jsx)(U.Fragment,{children:n?Object(U.jsx)(Ce,{number:i}):Object(U.jsx)(Ae,{queues:o,handleQueueSelected:function(e){var t=e._id;ve.emit("new-ticket",{queueId:t},(function(e){var t=e.status,n=e.message,a=e.queue;t?(u("".concat(a.name).concat(a.lastNumber)),c(!0),setTimeout((function(){c(!1)}),3e3)):console.log(n)}))}})})},Te=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).status?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(L({uid:a.user.uid,name:a.user.name}))):t(V());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(U.jsx)(o.a,{className:"spinner-body",size:"large"}):Object(U.jsxs)(i.d,{children:[Object(U.jsx)(B,{exact:!0,path:"/login",component:J,isAuthenticated:!!c}),Object(U.jsx)(B,{exact:!0,path:"/register",component:X,isAuthenticated:!!c}),Object(U.jsx)($,{exact:!0,path:"/",isAuthenticated:!!c,component:fe}),Object(U.jsx)($,{exact:!0,path:"/queues",isAuthenticated:!!c,component:ke}),Object(U.jsx)($,{exact:!0,path:"/screen",isAuthenticated:!!c,component:Fe}),Object(U.jsx)($,{exact:!0,path:"/printer",isAuthenticated:!!c,component:Pe}),Object(U.jsx)(i.a,{to:"/"})]})},_e=n(103),Re={checking:!0},ze={queues:[],place:""},Le={loading:!1,msgError:null},Ve=Object(_e.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(W.a)(Object(W.a)(Object(W.a)({},e),t.payload),{},{checking:!1});case q:return Object(W.a)(Object(W.a)({},e),{},{checking:!1});case I:return{checking:!1};default:return e}},queue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(W.a)(Object(W.a)({},e),{},{queues:Object(Se.a)(t.payload)});case F:return Object(W.a)(Object(W.a)({},e),{},{queues:[].concat(Object(Se.a)(e.queues),[t.payload])});case C:return Object(W.a)(Object(W.a)({},e),{},{place:t.payload});case A:return Object(W.a)({},ze);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(W.a)(Object(W.a)({},e),{},{msgError:t.payload});case N:return Object(W.a)(Object(W.a)({},e),{},{msgError:null});case k:return Object(W.a)(Object(W.a)({},e),{},{loading:!0});case S:return Object(W.a)(Object(W.a)({},e),{},{loading:!1});default:return e}}}),De=n(225),Ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c,Me=Object(_e.d)(Ve,Ge(Object(_e.a)(De.a))),He=function(){return Object(U.jsx)(Ne.Provider,{value:ve,children:Object(U.jsx)(O.a,{store:Me,children:Object(U.jsx)(pe.a,{basename:"/",children:Object(U.jsx)(Te,{})})})})};n(419);r.a.render(Object(U.jsx)(He,{}),document.getElementById("root"))}},[[420,1,2]]]);
//# sourceMappingURL=main.5765910d.chunk.js.map