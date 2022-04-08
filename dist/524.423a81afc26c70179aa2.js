(()=>{"use strict";const e="tt-media-progressive",t="tt-assets",n=("undefined"!=typeof window&&window.innerHeight,Math.round(425),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/gif","image/jpeg"])),a=new Set(["video/mp4"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...n,...a]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]);const s=e=>new Promise((t=>{setTimeout((()=>t()),e)})),i=524288,o=new Map;async function r(t){const{url:n}=t.request,a=t.request.headers.get("range"),r=/^bytes=(\d+)-(\d+)?$/g.exec(a||""),c=Number(r[1]);let d=Number(r[2]);if((!d||d-c+1>i)&&(d=c+i-1),0===c&&1===d){const e=t.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),n=e&&Number(e[1]),a=null==e?void 0:e[2];if(n&&a)return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:[["Content-Range",`bytes 0-1/${n}`],["Accept-Ranges","bytes"],["Content-Length","2"],["Content-Type",a]]})}const l=`${n}?start=${c}&end=${d}`,[u,f]=await async function(t){const n=await self.caches.open(e);return Promise.all([n.match(`${t}&type=arrayBuffer`).then((e=>e?e.arrayBuffer():void 0)),n.match(`${t}&type=headers`).then((e=>e?e.json():void 0))])}(l);if(u)return new Response(u,{status:206,statusText:"Partial Content",headers:f});let g;try{g=await async function(e,t){if(!e.clientId)return;const n=await self.clients.get(e.clientId);if(!n)return;const a=(e=>{let t;do{t=String(Math.random()).replace("0.","id")}while(e.hasOwnProperty(t));return t})(o),i={},r=Promise.race([s(6e4).then((()=>Promise.reject(new Error("ERROR_PART_TIMEOUT")))),new Promise(((e,t)=>{Object.assign(i,{resolve:e,reject:t})}))]);return o.set(a,i),r.catch((()=>{})).finally((()=>{o.delete(a)})),n.postMessage({type:"requestPart",messageId:a,params:t}),r}(t,{url:n,start:c,end:d})}catch(e){}if(!g)return new Response("",{status:500,statusText:"Failed to fetch progressive part"});const{arrayBuffer:p,fullSize:w,mimeType:m}=g,h=Math.min(d-c+1,p.byteLength);d=c+h-1;const y=p.slice(0,h),v=[["Content-Range",`bytes ${c}-${d}/${w}`],["Accept-Ranges","bytes"],["Content-Length",String(h)],["Content-Type",m]];return h<=524288&&d<2097151&&async function(t,n,a){const s=await self.caches.open(e);Promise.all([s.put(new Request(`${t}&type=arrayBuffer`),new Response(n)),s.put(new Request(`${t}&type=headers`),new Response(JSON.stringify(a)))])}(l,y,v),new Response(y,{status:206,statusText:"Partial Content",headers:v})}async function c(e){const n=await async function(n,a){try{return await Promise.race([s(3e3).then((()=>Promise.reject(new Error("TIMEOUT")))),(async()=>{const n=await self.caches.open(t),a=await n.match(e.request);return{cache:n,cached:a}})()])}catch(e){return void console.error(e)}}(),{cache:a,cached:i}=n||{};if(a&&i){if(i.ok)return i;await a.delete(e.request)}const o=await fetch(e.request);return o.ok&&a&&a.put(e.request,o.clone()),o}var d,l;self.addEventListener("message",(e=>{const{type:t,messageId:n,result:a}=e.data;if("partResponse"===t){const e=o.get(n);e&&e.resolve(a)}})),(l=d||(d={})).True="1",l.False="0";let u=(new Date).valueOf();const f=new Set,g={};function p(e){return e.custom.from_id?e.custom.from_id:e.custom.chat_id||e.custom.channel_id?`-${e.custom.chat_id||e.custom.channel_id}`:void 0}function w(e){if(e.custom.msg_id)return parseInt(e.custom.msg_id,10)}async function m(){const e=new URL(self.registration.scope).origin;return(await self.clients.matchAll({type:"window"})).filter((t=>new URL(t.url).origin===e))}async function h(e){const t=(await m())[0];t&&t.postMessage({type:"playNotificationSound",payload:{id:e}})}function y(e){let{chatId:t,messageId:n,body:a,title:s,icon:i,reaction:o}=e;const r=(new Date).valueOf()-u<1e3,c={body:a,data:{chatId:t,messageId:n,reaction:o,count:1},icon:i||"icon-192x192.png",badge:"icon-192x192.png",tag:String(r?0:t||0),vibrate:[200,100,200]};return Promise.all([o?void 0:h(String(n)||t||""),self.registration.showNotification(s,c)])}async function v(e,t){if(t.chatId&&(e.postMessage({type:"focusMessage",payload:t}),!e.focused))try{await e.focus()}catch(e){}}self.addEventListener("sync",(()=>{u=Date.now()}));const I=/[0-9a-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|json|wasm)$/;self.addEventListener("install",(e=>{e.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(e=>{e.waitUntil(Promise.race([s(3e3),Promise.all([self.caches.delete(t),self.clients.claim()])]))})),self.addEventListener("fetch",(e=>{const{url:t}=e.request;return t.includes("/progressive/")?(e.respondWith(r(e)),!0):!(!t.startsWith("http")||!t.match(I)||(e.respondWith(c(e)),0))})),self.addEventListener("push",(function(e){const t=function(e){try{return e.data.json()}catch(e){return}}(e);if(!t||t.mute===d.True)return;const n=function(e){return{chatId:p(e),messageId:w(e),title:e.title||"Telegram WebZ",body:e.description}}(t);f.has(n.messageId)?f.delete(n.messageId):e.waitUntil(y(n))})),self.addEventListener("notificationclick",(function(e){const t=self.registration.scope;e.notification.close();const{data:n}=e.notification;e.waitUntil((async()=>{const e=await m();if(await Promise.all(e.map((e=>(g[e.id]=n,v(e,n))))),self.clients.openWindow&&!(e.length>0)){g[0]=n;try{const e=await self.clients.openWindow(t);e&&(g[e.id]=n)}catch(e){}}})())})),self.addEventListener("message",(function(e){if(!e.data)return;const t=e.source;if("clientReady"===e.data.type){const n=g[t.id]||g[0];n&&(delete g[t.id],delete g[0],e.waitUntil(v(t,n)))}if("showMessageNotification"===e.data.type){const t=e.data.payload;e.waitUntil((async()=>(t.chatId&&(await self.registration.getNotifications({tag:t.chatId})).forEach((e=>e.close())),f.add(t.messageId),y(t)))())}"closeMessageNotifications"===e.data.type&&e.waitUntil(async function(e){let{chatId:t,lastReadInboxMessageId:n}=e;const a=await self.registration.getNotifications(),s=n||Number.MAX_VALUE;a.forEach((e=>{("0"===e.tag||e.data.chatId===t&&e.data.messageId<=s)&&e.close()}))}(e.data.payload))}))})();
//# sourceMappingURL=524.423a81afc26c70179aa2.js.map