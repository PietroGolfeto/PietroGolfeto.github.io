import{a as R,t as P}from"../chunks/disclose-version.CJ4EiInT.js";import{j as Z,b as ee,h as b,q as D,r as ae,l as re,i as te,x as B,S as ne,U as L,s as F,c as N,t as se,V as Y,a as j,W as ie,X as oe,z as U,N as le,Y as fe,Z as ce,M as ue,_ as z,$ as ve,a0 as de,w as he,a1 as pe,d as _e,m as me,E as ge,a2 as ke,a3 as ye,a4 as be,a5 as xe,a6 as Ae,n as S,a7 as we,G as Ee,a8 as Ie,P as M,f as Te,Q as I,R as E,O as Ce,J as G}from"../chunks/runtime.-mgUMQ6S.js";import{a as Ne,s as O}from"../chunks/render.DLlR-2qQ.js";let H=null;function Se(a,e){return e}function Re(a,e,r,n){for(var s=[],o=e.length,l=0;l<o;l++)de(e[l].e,s,!0);var p=o>0&&s.length===0&&r!==null;if(p){var f=r.parentNode;he(f),f.append(r),n.clear(),x(a,e[0].prev,e[o-1].next)}pe(s,()=>{for(var t=0;t<o;t++){var u=e[t];p||(n.delete(u.k),x(a,u.prev,u.next)),_e(u.e,!p)}})}function Me(a,e,r,n,s,o=null){var l=a,p={flags:e,items:new Map,first:null};{var f=a;l=b?D(re(f)):f.appendChild(Z())}b&&ae();var t=null;ee(()=>{var u=r(),c=te(u)?u:u==null?[]:B(u),v=c.length;let h=!1;if(b){var i=l.data===ne;i!==(v===0)&&(l=L(),D(l),F(!1),h=!0)}if(b){for(var m=null,d,_=0;_<v;_++){if(N.nodeType===8&&N.data===se){l=N,h=!0,F(!1);break}var w=c[_],k=n(w,_);d=J(N,p,m,null,w,k,_,s,e),p.items.set(k,d),m=d}v>0&&D(L())}b||Pe(c,p,l,s,e,n),o!==null&&(v===0?t?Y(t):t=j(()=>o(l)):t!==null&&ie(t,()=>{t=null})),h&&F(!0)}),b&&(l=N)}function Pe(a,e,r,n,s,o){var l=a.length,p=e.items,f=e.first,t=f,u,c=null,v=[],h=[],i,m,d,_;for(_=0;_<l;_+=1){if(i=a[_],m=o(i,_),d=p.get(m),d===void 0){var w=t?t.e.nodes_start:r;c=J(w,e,c,c===null?e.first:c.next,i,m,_,n,s),p.set(m,c),v=[],h=[],t=c.next;continue}if(De(d,i,_),d.e.f&oe&&Y(d.e),d!==t){if(u!==void 0&&u.has(d)){if(v.length<h.length){var k=h[0],g;c=k.prev;var T=v[0],C=v[v.length-1];for(g=0;g<v.length;g+=1)$(v[g],k,r);for(g=0;g<h.length;g+=1)u.delete(h[g]);x(e,T.prev,C.next),x(e,c,T),x(e,C,k),t=k,c=C,_-=1,v=[],h=[]}else u.delete(d),$(d,t,r),x(e,d.prev,d.next),x(e,d,c===null?e.first:c.next),x(e,c,d),c=d;continue}for(v=[],h=[];t!==null&&t.k!==m;)(u??(u=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;d=t}v.push(d),c=d,t=d.next}if(t!==null||u!==void 0){for(var y=u===void 0?[]:B(u);t!==null;)y.push(t),t=t.next;var Q=y.length;if(Q>0){var W=l===0?r:null;Re(e,y,W,p)}}U.first=e.first&&e.first.e,U.last=c&&c.e}function De(a,e,r,n){le(a.v,e),a.i=r}function J(a,e,r,n,s,o,l,p,f){var t=H;try{var u=(f&fe)!==0,c=(f&ce)===0,v=u?c?ue(s):z(s):s,h=f&ve?z(l):l,i={i:h,v,k:o,a:null,e:null,prev:r,next:n};return H=i,i.e=j(()=>p(a,v,h),b),i.e.prev=r&&r.e,i.e.next=n&&n.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),n!==null&&(n.prev=i,n.e.prev=i.e),i}finally{H=t}}function $(a,e,r){for(var n=a.next?a.next.e.nodes_start:r,s=e?e.e.nodes_start:r,o=a.e.nodes_start;o!==n;){var l=me(o);s.before(o),o=l}}function x(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Fe(a,e,r,n){r=r==null?null:r+"";var s=a.__attributes??(a.__attributes={});b&&(s[e]=a.getAttribute(e),a.nodeName==="LINK")||s[e]!==(s[e]=r)&&(r===null?a.removeAttribute(e):a.setAttribute(e,r))}const Ge=requestAnimationFrame,He=()=>performance.now(),A={tick:a=>Ge(a),now:()=>He(),tasks:new Set};function K(a){A.tasks.forEach(e=>{e.c(a)||(A.tasks.delete(e),e.f())}),A.tasks.size!==0&&A.tick(K)}function Ue(a){let e;return A.tasks.size===0&&A.tick(K),{promise:new Promise(r=>{A.tasks.add(e={c:a,f:r})}),abort(){A.tasks.delete(e)}}}function q(a,e){a.dispatchEvent(new CustomEvent(e))}function Le(a){const e=a.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function V(a){const e={},r=a.split(";");for(const n of r){const[s,o]=n.split(":");if(!s||o===void 0)break;const l=Le(s.trim());e[l]=o.trim()}return e}const ze=a=>a;function Oe(a,e,r,n){var s=(a&we)!==0,o="in",l,p=e.inert,f,t;function u(){return l??(l=r()(e,{},{direction:o}))}var c={is_global:s,in(){e.inert=p,f==null||f.abort(),q(e,"introstart"),f=X(e,u(),t,1,()=>{q(e,"introend"),f==null||f.abort(),f=l=void 0})},out(m){{m==null||m(),l=void 0;return}},stop:()=>{f==null||f.abort()}},v=U;if((v.transitions??(v.transitions=[])).push(c),Ne){var h=s;if(!h){for(var i=v.parent;i&&i.f&ge;)for(;(i=i.parent)&&!(i.f&ke););h=!i||(i.f&ye)!==0}h&&be(()=>{Ee(()=>c.in())})}}function X(a,e,r,n,s){if(xe(e)){var o,l=!1;return Ae(()=>{if(!l){var m=e({direction:"in"});o=X(a,m,r,n,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(!(e!=null&&e.duration))return s(),{abort:S,deactivate:S,reset:S,t:()=>n};const{delay:p=0,css:f,tick:t,easing:u=ze}=e;var c=[];if(t&&t(0,1),f){var v=V(f(0,1));c.push(v,v)}var h=()=>1-n,i=a.animate(c,{duration:p});return i.onfinish=()=>{var m=1-n,d=n-m,_=e.duration*Math.abs(d),w=[];if(_>0){if(f)for(var k=Math.ceil(_/16.666666666666668),g=0;g<=k;g+=1){var T=m+d*u(g/k),C=f(T,1-T);w.push(V(C))}h=()=>{var y=i.currentTime;return m+d*u(y/_)},t&&Ue(()=>{if(i.playState!=="running")return!1;var y=h();return t(y,1-y),!0})}i=a.animate(w,{duration:_,fill:"forwards"}),i.onfinish=()=>{h=()=>n,t==null||t(n,1-n),s()}},{abort:()=>{i&&(i.cancel(),i.effect=null)},deactivate:()=>{s=S},reset:()=>{},t:()=>h()}}var $e=P(`<h2>About Me</h2> <section class="about-me svelte-135ua28"><p class="aligned-text">I'm a computer science student at Unicamp with completion scheduled for July 2026 and a Undergraduate Researcher at the Hub for Artificial Intelligence and Cognitive Architectures (H.IAAC) at Unicamp.<br><br> I'm interested in artificial intelligence, data science and software development and I'm always looking for new projects to work on.</p></section>`,1);function qe(a){var e=$e();Ie(2),R(a,e)}var Ve=P('<li class="svelte-1kamnwk"><a target="_blank" rel="noopener noreferrer" class="svelte-1kamnwk"><strong> </strong></a> </li>'),Be=P('<h2>Projects</h2> <section class="projects svelte-1kamnwk"><ul class="svelte-1kamnwk"></ul></section>',1);function Ye(a){const e=[{name:"College Salaries",link:"https://github.com/PietroGolfeto/College_Salaries",description:"Data visualization project that explores the salaries of college graduates of different majors and universities across the US."},{name:"Food Database Analysis",link:"https://github.com/PietroGolfeto/mc536-grupoVIRUS",description:"Data analysis project exploring the nutritional value of various foods, ranking them based on health metrics."},{name:"Chemosymphony",link:"https://github.com/chemosymphony/chemosymphony.github.io",description:"NASA Space Apps 2024 project focused on chemosynthesis in an exoplanetary environment. Did the research and led the team."}];var r=Be(),n=M(Te(r),2),s=I(n);Me(s,5,()=>e,Se,(o,l)=>{var p=Ve(),f=I(p),t=I(f),u=I(t);E(t),E(f);var c=M(f);E(p),Ce(()=>{Fe(f,"href",G(l).link),O(u,G(l).name),O(c,` - ${G(l).description??""}`)}),R(o,p)}),E(s),E(n),R(a,r)}const je=a=>a;function Je(a,{delay:e=0,duration:r=400,easing:n=je}={}){const s=+getComputedStyle(a).opacity;return{delay:e,duration:r,easing:n,css:o=>`opacity: ${o*s}`}}var Ke=P('<main class="svelte-4xf6ln"><section class="hero svelte-4xf6ln"><h1 class="svelte-4xf6ln">Pietro Grazzioli Golfeto</h1> <div class="social-links svelte-4xf6ln"><a href="https://www.linkedin.com/in/pietro-golfeto-ba2429235/" target="_blank" rel="noopener noreferrer" class="svelte-4xf6ln"><img src="/icons/linkedin.svg" alt="LinkedIn" class="svelte-4xf6ln"></a> <a href="https://github.com/PietroGolfeto" target="_blank" rel="noopener noreferrer" class="svelte-4xf6ln"><img src="/icons/github.svg" alt="GitHub" class="svelte-4xf6ln"></a> <a href="mailto:pggolfeto@gmail.com" rel="noopener noreferrer" class="svelte-4xf6ln"><img src="/icons/gmail.svg" alt="Email" class="svelte-4xf6ln"></a></div> <!> <!></section></main>');function Ze(a){var e=Ke(),r=I(e),n=M(I(r),4);qe(n);var s=M(n,2);Ye(s),E(r),E(e),Oe(1,r,()=>Je),R(a,e)}export{Ze as component};
