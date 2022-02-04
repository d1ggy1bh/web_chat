"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[133],{1133:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>Z,AuthPassword:()=>P,AuthRegister:()=>w});var a=n(4050),o=n(5116),r=n(7361),s=n(782),l=n(2340),i=n(6590),c=n(9107),d=n(7687),u=n(4288),m=n(3716),p=n(7324),g=n(7799);const h=r.wB?m.qp:m.z7,f=(0,a.X$)((e=>{let{code:t,codeLength:n,trackingDirection:o,isTracking:r,isBig:s}=e;const[l,i]=(0,a.eJ)(),[c,d]=(0,a.eJ)(),[u,f]=(0,a.eJ)(!1),Z=165/n;(0,a.d4)((()=>{l||(0,p.Z)("MonkeyIdle").then(i)}),[l]),(0,a.d4)((()=>{c||(0,p.Z)("MonkeyTracking").then(d)}),[c]);const v=(0,a.I4)((()=>f(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:s?"big":""},!u&&a.ZP.createElement("div",{className:"monkey-preview"}),l&&a.ZP.createElement(g.Z,{id:"idleMonkey",size:s?m.K2:h,className:r?"hidden":void 0,animationData:l,play:!r,onLoad:v}),c&&a.ZP.createElement(g.Z,{id:"trackingMonkey",size:s?m.K2:h,className:r?"shown":"hidden",animationData:c,playSegment:r?function(){const e=t&&t.length>1||o<0?15+Z*(t.length-1):0,a=t.length===n?180:15+Z*t.length;return o<1?[a,e]:[e,a]}():void 0,speed:2,noLoop:!0}))})),Z=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((e=>{let{authPhoneNumber:t,authIsCodeViaApp:n,authIsLoading:s,authError:m}=e;const{setAuthCode:p,returnToAuthPhoneNumber:g,clearAuthError:h}=(0,o.uC)(),Z=(0,c.Z)(),v=(0,a.sO)(null),[b,P]=(0,a.eJ)(""),[E,y]=(0,a.eJ)(!1),[w,k]=(0,a.eJ)(1);(0,a.d4)((()=>{r.$b||v.current.focus()}),[]),(0,i.ZP)(!0,g);const N=(0,a.I4)((e=>{m&&h();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==b&&(P(t.value),E?t.value.length||y(!1):y(!0),b&&b.length>t.value.length?k(-1):k(1),5===t.value.length&&p({code:t.value}))}),[m,h,b,E,p]);return a.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(f,{code:b,codeLength:5,isTracking:E,trackingDirection:w}),a.ZP.createElement("h2",null,t,a.ZP.createElement("div",{className:"auth-number-edit",onClick:g,role:"button",tabIndex:0,title:Z("WrongNumber")},a.ZP.createElement("i",{className:"icon-edit"}))),a.ZP.createElement("p",{className:"note"},(0,l.Z)(Z(n?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),a.ZP.createElement(d.Z,{ref:v,id:"sign-in-code",label:Z("Code"),onInput:N,value:b,error:m&&Z(m),autoComplete:"one-time-code",inputMode:"numeric"}),s&&a.ZP.createElement(u.Z,null)))})));var v=n(3490),b=n(9364);const P=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authIsLoading","authError","authHint"])))((e=>{let{authIsLoading:t,authError:n,authHint:r}=e;const{setAuthPassword:s,clearAuthError:l}=(0,o.uC)(),i=(0,c.Z)(),[d,u]=(0,a.eJ)(!1),m=(0,a.I4)((e=>{u(e)}),[]),p=(0,a.I4)((e=>{s({password:e})}),[s]);return a.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(v.Z,{isPasswordVisible:d}),a.ZP.createElement("h2",null,i("Login.Header.Password")),a.ZP.createElement("p",{className:"note"},i("Login.EnterPasswordDescription")),a.ZP.createElement(b.Z,{clearError:l,error:n&&i(n),hint:r,isLoading:t,isPasswordVisible:d,onChangePasswordVisibility:m,onSubmit:p})))})));var E=n(231),y=n(710);const w=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authIsLoading","authError"])))((e=>{let{authIsLoading:t,authError:n}=e;const{signUp:r,clearAuthError:s,uploadProfilePhoto:l}=(0,o.uC)(),i=(0,c.Z)(),[u,m]=(0,a.eJ)(!1),[p,g]=(0,a.eJ)(),[h,f]=(0,a.eJ)(""),[Z,v]=(0,a.eJ)("");return a.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),r({firstName:h,lastName:Z}),p&&l({file:p})}},a.ZP.createElement(y.Z,{onChange:g}),a.ZP.createElement("h2",null,i("YourName")),a.ZP.createElement("p",{className:"note"},i("Login.Register.Desc")),a.ZP.createElement(d.Z,{id:"registration-first-name",label:i("Login.Register.FirstName.Placeholder"),onChange:function(e){n&&s();const{target:t}=e;f(t.value),m(t.value.length>0)},value:h,error:n&&i(n),autoComplete:"given-name"}),a.ZP.createElement(d.Z,{id:"registration-last-name",label:i("Login.Register.LastName.Placeholder"),onChange:function(e){const{target:t}=e;v(t.value)},value:Z,autoComplete:"family-name"}),u&&a.ZP.createElement(E.Z,{type:"submit",ripple:!0,isLoading:t},i("Next")))))})))},7799:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(4050),o=n(9118),r=n(6752),s=n(8674),l=n(5332);let i,c;async function d(){return i||(i=n.e(941).then(n.bind(n,7941)),c=(await i).default),i}setTimeout(d,5e3);const u=(0,a.X$)((e=>{let{className:t,id:n,animationData:i,play:u,playSegment:m,speed:p,noLoop:g,size:h,quality:f,isLowPriority:Z,color:v,forceOnHeavyAnimation:b,onLoad:P,onEnded:E}=e;const[y,w]=(0,a.eJ)(),k=(0,a.sO)(null),N=(0,a.sO)(!1),C=(0,a.sO)(!1),L=(0,a.sO)(!0),x=(0,a.sO)();x.current=u;const I=(0,a.sO)();I.current=m,(0,a.d4)((()=>{if(y||!i)return;const e=()=>{if(!k.current)return;const e=new c(n,k.current,i,{noLoop:g,size:h,quality:f,isLowPriority:Z},P,v,E);p&&e.setSpeed(p),w(e)};c?e():d().then((()=>{(0,o.T2)((()=>{k.current&&e()}))}))}),[v,y,i,n,Z,g,P,f,h,p,E]),(0,a.d4)((()=>{y&&y.setColor(v)}),[v,y]),(0,a.d4)((()=>()=>{y&&y.destroy()}),[y]);const A=(0,a.I4)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y&&(x.current||I.current)&&(I.current?y.playSegment(I.current):e?y.goToAndPlay(0):y.play())}),[y]),J=(0,a.I4)((()=>{y&&y.pause()}),[y]),M=(0,a.I4)((()=>{C.current=!0,y&&(N.current||(N.current=y.isPlaying()),J())}),[y,J]),S=(0,a.I4)((()=>{N.current&&A(),N.current=!1,C.current=!1}),[A]),T=(0,a.I4)((()=>{(0,o.T2)(S)}),[S]);(0,a.d4)((()=>{y&&(u||m?C.current?N.current=!0:A(g):C.current?N.current=!1:J())}),[y,u,m,g,A,J]),(0,a.d4)((()=>{y&&(L.current?L.current=!1:i&&(y.changeData(i),A()))}),[A,y,i]),(0,s.ZP)(M,S,b),(0,l.Z)(M,T);const O=(0,r.Z)("AnimatedSticker",t),D=h?`width: ${h}px; height: ${h}px;`:void 0;return a.ZP.createElement("div",{ref:k,className:O,style:D})}))},9364:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(4050),o=n(3716),r=n(7361),s=n(6752),l=n(9107),i=n(231);const c=r.wB?550:400,d=(0,a.X$)((e=>{let{isLoading:t=!1,isPasswordVisible:n,error:d,hint:u,placeholder:m="Password",submitLabel:p="Next",clearError:g,onChangePasswordVisibility:h,onInputChange:f,onSubmit:Z}=e;const v=(0,a.sO)(null),b=(0,l.Z)(),[P,E]=(0,a.eJ)(""),[y,w]=(0,a.eJ)(!1);return(0,a.d4)((()=>{r.$b||setTimeout((()=>{v.current.focus()}),c)}),[]),(0,a.d4)((()=>{d&&requestAnimationFrame((()=>{v.current.focus(),v.current.select()}))}),[d]),a.ZP.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),t||y&&Z(P)},autoComplete:"off"},a.ZP.createElement("div",{className:(0,s.Z)("input-group password-input",P&&"touched",d&&"error"),dir:b.isRtl?"rtl":void 0},a.ZP.createElement("input",{ref:v,className:"form-control",type:n?"text":"password",id:"sign-in-password",value:P||"",autoComplete:"current-password",onChange:function(e){d&&g();const{target:t}=e;E(t.value),w(t.value.length>=o.lo),f&&f(t.value)},dir:"auto"}),a.ZP.createElement("label",null,d||u||m),a.ZP.createElement("div",{className:"toggle-password",onClick:function(){h(!n)},role:"button",tabIndex:0,title:"Toggle password visibility"},a.ZP.createElement("i",{className:n?"icon-eye":"icon-eye-closed"}))),y&&a.ZP.createElement(i.Z,{type:"submit",ripple:!0,isLoading:t},p))}))},3490:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4050),o=n(3716),r=n(7361),s=n(7324),l=n(7799);const i=[0,50],c=[0,20],d=[20,0],u=r.wB?o.qp:o.z7,m=(0,a.X$)((e=>{let{isPasswordVisible:t,isBig:n}=e;const[r,m]=(0,a.eJ)(),[p,g]=(0,a.eJ)(),[h,f]=(0,a.eJ)(!1),[Z,v]=(0,a.eJ)(!1);(0,a.d4)((()=>{r?setTimeout((()=>v(!0)),2e3):(0,s.Z)("MonkeyClose").then(m)}),[r]),(0,a.d4)((()=>{p||(0,s.Z)("MonkeyPeek").then(g)}),[p]);const b=(0,a.I4)((()=>f(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:n?"big":""},!h&&a.ZP.createElement("div",{className:"monkey-preview"}),r&&a.ZP.createElement(l.Z,{id:"closeMonkey",size:n?o.K2:u,className:Z?"hidden":"shown",animationData:r,playSegment:i,noLoop:!0,onLoad:b}),p&&a.ZP.createElement(l.Z,{id:"peekMonkey",size:n?o.K2:u,className:Z?"shown":"hidden",animationData:p,playSegment:t?c:d,noLoop:!0}))}))},7324:(e,t,n)=>{n.d(t,{x:()=>r,Z:()=>s});var a=n(6137),o=n(647);const r={MonkeyIdle:n(8760),MonkeyTracking:n(6917),MonkeyClose:n(6257),MonkeyPeek:n(7785),FoldersAll:n(9356),FoldersNew:n(5485),DiscussionGroups:n(6978),CameraFlip:n(5665),HandFilled:n(2456),HandOutline:n(5667),Speaker:n(8763),VoiceAllowTalk:n(401),VoiceMini:n(5106),VoiceMuted:n(487),VoiceOutlined:n(5740),Peach:n(3677),Eggplant:n(5435),Cumshot:n(1879),JoinRequest:n(5095),Invite:n(7879)};function s(e){const t=r[e].replace(window.location.origin,"");return o.he(`file${t}`,a.IU.Lottie)}},710:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(4050),o=n(6752),r=n(3716),s=n(1394),l=n(9107),i=n(231),c=n(3103),d=n(4288);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,p,g;const h=(0,a.X$)((e=>{let{file:t,onChange:o,onClose:h}=e;const[f,Z]=(0,a.eJ)(!1);(0,a.d4)((()=>{t&&(f?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;g=new m(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const o=await(0,s.YJ)(e);await g.bind({url:o})}catch(e){r.eM&&console.error(e)}}(t):async function(){return p||(p=Promise.all([n.e(99),n.e(472)]).then(n.bind(n,3472)),m=(await p).default),p}().then((()=>Z(!0))))}),[t,f]);const v=(0,l.Z)();return a.ZP.createElement(c.Z,{isOpen:Boolean(t),onClose:h,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},f?a.ZP.createElement("div",{id:"avatar-crop"}):a.ZP.createElement(d.Z,null),a.ZP.createElement(i.Z,{className:"confirm-button",round:!0,color:"primary",onClick:async function(){if(!g)return;const e=await g.result(u),t="string"==typeof e?e:(0,s.hl)(e,"avatar.jpg");o(t)},ariaLabel:v("CropImage")},a.ZP.createElement("i",{className:"icon-check"})))})),f=(0,a.X$)((e=>{let{title:t="Change your profile picture",disabled:n,currentAvatarBlobUrl:r,onChange:s}=e;const[l,i]=(0,a.eJ)(),[c,d]=(0,a.eJ)(r);(0,a.d4)((()=>{d(r)}),[r]);const u=(0,o.Z)(c&&"filled",n&&"disabled");return a.ZP.createElement("div",{className:"AvatarEditable"},a.ZP.createElement("label",{className:u,role:"button",tabIndex:0,title:t},a.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(i(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.ZP.createElement("i",{className:"icon-camera-add"}),c&&a.ZP.createElement("img",{src:c,alt:"Avatar"})),a.ZP.createElement(h,{file:l,onClose:function(){i(void 0)},onChange:function(e){i(void 0),s(e),c&&URL.revokeObjectURL(c),d(URL.createObjectURL(e))}}))}))},3103:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(4050),o=n(517),r=n(6752),s=n(8674),l=n(1212),i=n(274),c=n(9107),d=n(6590),u=n(231),m=n(2898);const p=e=>{let{dialogRef:t,title:n,className:p,isOpen:g,header:h,hasCloseButton:f,noBackdrop:Z,children:v,onClose:b,onCloseAnimationEnd:P,onEnter:E,shouldSkipHistoryAnimations:y}=e;const{shouldRender:w,transitionClassNames:k}=(0,l.Z)(g,P,y,void 0,y),N=(0,a.sO)(null);(0,a.d4)((()=>g?(0,o.Z)({onEsc:b,onEnter:E}):void 0),[g,b,E]),(0,a.d4)((()=>g&&N.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const a=n.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;a>=0&&(o=t.shiftKey?a>0?a-1:n.length-1:a<n.length-1?a+1:0),n[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(N.current):void 0),[g]);const{forceClose:C}=(0,d.ZP)(g,b);(0,a.d4)((()=>()=>{g&&C()}),[]),(0,i.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",g),(g||!g&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[g]);const L=(0,c.Z)();if(!w)return;const x=(0,r.Z)("Modal",p,k,Z&&"transparent-backdrop");return a.ZP.createElement(m.Z,null,a.ZP.createElement("div",{ref:N,className:x,tabIndex:-1,role:"dialog"},a.ZP.createElement("div",{className:"modal-container"},a.ZP.createElement("div",{className:"modal-backdrop",onClick:b}),a.ZP.createElement("div",{className:"modal-dialog",ref:t},h||(n?a.ZP.createElement("div",{className:"modal-header"},f&&a.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:L("Close"),onClick:b},a.ZP.createElement("i",{className:"icon-close"})),a.ZP.createElement("div",{className:"modal-title"},n)):void 0),a.ZP.createElement("div",{className:"modal-content custom-scroll"},v)))))}},2898:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(4050),o=n(2916);const r=e=>{let{containerId:t,className:n,children:r}=e;const s=(0,a.sO)();return s.current||(s.current=document.createElement("div")),(0,a.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const a=s.current;return n&&a.classList.add(n),e.appendChild(a),()=>{o.Z.render(void 0,a),e.removeChild(a)}}),[n,t]),o.Z.render(r,s.current)}},5332:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4050);function o(e,t){(0,a.d4)((()=>(e&&!document.hasFocus()&&e(),e&&window.addEventListener("blur",e),t&&window.addEventListener("focus",t),()=>{t&&window.removeEventListener("focus",t),e&&window.removeEventListener("blur",e)})),[e,t])}},1879:(e,t,n)=>{e.exports=n.p+"Cumshot.7a17984a6b80787dab34..tgs"},5435:(e,t,n)=>{e.exports=n.p+"Eggplant.7693d877087b802d04be..tgs"},3677:(e,t,n)=>{e.exports=n.p+"Peach.a289b2c54c563f11208f..tgs"},5665:(e,t,n)=>{e.exports=n.p+"CameraFlip.1a9fe44cf01fcb22347d..tgs"},2456:(e,t,n)=>{e.exports=n.p+"HandFilled.f87939d160f1dc288586..tgs"},5667:(e,t,n)=>{e.exports=n.p+"HandOutline.f9831751ba60df30c484..tgs"},8763:(e,t,n)=>{e.exports=n.p+"Speaker.04bb3743412b41ff83c5..tgs"},401:(e,t,n)=>{e.exports=n.p+"VoiceAllowTalk.a9cc7c39ec438973ddc9..tgs"},5106:(e,t,n)=>{e.exports=n.p+"VoiceMini.bf00ffdf69625c579569..tgs"},487:(e,t,n)=>{e.exports=n.p+"VoiceMuted.a4b4ec6bfd7c6c5fb275..tgs"},5740:(e,t,n)=>{e.exports=n.p+"VoiceOutlined.91b394ab3562cdfad6bc..tgs"},7879:(e,t,n)=>{e.exports=n.p+"Invite.4502ec3aa4249d6e6723..tgs"},5095:(e,t,n)=>{e.exports=n.p+"Requests.af9f19772695a8898810..tgs"},6257:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e..tgs"},8760:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab..tgs"},7785:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e..tgs"},6917:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12..tgs"},6978:(e,t,n)=>{e.exports=n.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a..tgs"},9356:(e,t,n)=>{e.exports=n.p+"FoldersAll.3f9f9e243d19f0fbf9aa..tgs"},5485:(e,t,n)=>{e.exports=n.p+"FoldersNew.9a40d71c0c8be70f5bd1..tgs"}}]);
//# sourceMappingURL=133.d22af7758e4787b37d66.js.map