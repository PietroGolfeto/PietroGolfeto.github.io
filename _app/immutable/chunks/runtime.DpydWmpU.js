var vt=Array.isArray,pt=Array.from,ht=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,dt=Object.prototype,Et=Array.prototype,Yn=Object.getPrototypeOf;function yt(n){return typeof n=="function"}const wt=()=>{};function Tt(n){return n()}function Un(n){for(var t=0;t<n.length;t++)n[t]()}const w=2,an=4,P=8,fn=16,T=32,Q=64,S=128,B=256,d=512,g=1024,C=2048,I=4096,q=8192,Bn=16384,_n=32768,mt=65536,Hn=1<<18,rn=Symbol("$state");function cn(n){return n===this.v}function Vn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function vn(n){return!Vn(n,this.v)}function Gn(n){throw new Error("effect_in_teardown")}function Kn(){throw new Error("effect_in_unowned_derived")}function $n(n){throw new Error("effect_orphan")}function Zn(){throw new Error("effect_update_depth_exceeded")}function gt(){throw new Error("hydration_failed")}function At(n){throw new Error("props_invalid_value")}function Ot(){throw new Error("state_descriptors_fixed")}function Rt(){throw new Error("state_prototype_fixed")}function Wn(){throw new Error("state_unsafe_local_read")}function zn(){throw new Error("state_unsafe_mutation")}function X(n){return{f:0,v:n,reactions:null,equals:cn,version:0}}function St(n){return Jn(X(n))}function xt(n){var r;const t=X(n);return t.equals=vn,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(t),t}function Jn(n){return l!==null&&l.f&w&&(y===null?lt([n]):y.push(n)),n}function kt(n,t){return l!==null&&z()&&l.f&w&&(y===null||!y.includes(n))&&zn(),n.equals(t)||(n.v=t,n.version=Pn(),pn(n,g),z()&&i!==null&&i.f&d&&!(i.f&T)&&(v!==null&&v.includes(n)?(h(i,g),K(i)):m===null?at([n]):m.push(n))),t}function pn(n,t){var r=n.reactions;if(r!==null)for(var e=z(),s=r.length,o=0;o<s;o++){var u=r[o],_=u.f;_&g||!e&&u===i||(h(u,t),_&(d|S)&&(_&w?pn(u,C):K(u)))}}const Dt=1,Nt=2,It=4,Pt=8,Ct=16,qt=4,Ft=1,bt=2,Qn="[",Xn="[!",nt="]",hn={},Lt=Symbol();function dn(n){console.warn("hydration_mismatch")}let R=!1;function Mt(n){R=n}let E;function H(n){if(n===null)throw dn(),hn;return E=n}function jt(){return H(x(E))}function Yt(n){if(R){if(x(E)!==null)throw dn(),hn;E=n}}function Ut(n=1){if(R){for(var t=n,r=E;t--;)r=x(r);E=r}}function Bt(){for(var n=0,t=E;;){if(t.nodeType===8){var r=t.data;if(r===nt){if(n===0)return t;n-=1}else(r===Qn||r===Xn)&&(n+=1)}var e=x(t);t.remove(),t=e}}var en,En,yn;function Ht(){if(en===void 0){en=window;var n=Element.prototype,t=Node.prototype;En=tn(t,"firstChild").get,yn=tn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function wn(n=""){return document.createTextNode(n)}function Z(n){return En.call(n)}function x(n){return yn.call(n)}function Vt(n){if(!R)return Z(n);var t=Z(E);return t===null&&(t=E.appendChild(wn())),H(t),t}function Gt(n,t){if(!R){var r=Z(n);return r instanceof Comment&&r.data===""?x(r):r}return E}function Kt(n,t=1,r=!1){let e=R?E:n;for(;t--;)e=x(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var o=wn();return e==null||e.before(o),H(o),o}return H(e),e}function $t(n){n.textContent=""}function Tn(n){i===null&&l===null&&$n(),l!==null&&l.f&S&&Kn(),nn&&Gn()}function tt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var s=(n&Q)!==0,o=i,u={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:n|g,first:null,fn:t,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var _=D;try{sn(!0),G(u),u.f|=Bn}catch(A){throw j(u),A}finally{sn(_)}}else t!==null&&K(u);var a=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;if(!a&&!s&&e&&(o!==null&&tt(u,o),l!==null&&l.f&w)){var c=l;(c.children??(c.children=[])).push(u)}return u}function Zt(n){const t=F(P,null,!1);return h(t,d),t.teardown=n,t}function Wt(n){Tn();var t=i!==null&&(i.f&P)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push(n)}else{var e=mn(n);return e}}function zt(n){return Tn(),gn(n)}function Jt(n){const t=F(Q,n,!0);return()=>{j(t)}}function mn(n){return F(an,n,!1)}function gn(n){return F(P,n,!0)}function Qt(n){return gn(n)}function Xt(n,t=0){return F(P|fn|t,n,!0)}function nr(n,t=!0){return F(P|T,n,!0,t)}function An(n){var t=n.teardown;if(t!==null){const r=nn,e=l;on(!0),un(null);try{t.call(null)}finally{on(r),un(e)}}}function j(n,t=!0){var r=!1;if((t||n.f&Hn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var o=e===s?null:x(e);e.remove(),e=o}r=!0}qn(n,t&&!r),M(n,0),h(n,q);var u=n.transitions;if(u!==null)for(const a of u)a.stop();An(n);var _=n.parent;_!==null&&_.first!==null&&On(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function On(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function tr(n,t){var r=[];Rn(n,r,!0),rt(r,()=>{j(n),t&&t()})}function rt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Rn(n,t,r){if(!(n.f&I)){if(n.f^=I,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var s=e.next,o=(e.f&_n)!==0||(e.f&T)!==0;Rn(e,t,o?r:!1),e=s}}}function rr(n){Sn(n,!0)}function Sn(n,t){if(n.f&I){n.f^=I,Y(n)&&G(n);for(var r=n.first;r!==null;){var e=r.next,s=(r.f&_n)!==0||(r.f&T)!==0;Sn(r,s?t:!1),r=e}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}let V=!1,W=[];function xn(){V=!1;const n=W.slice();W=[],Un(n)}function er(n){V||(V=!0,queueMicrotask(xn)),W.push(n)}function et(){V&&xn()}function st(n){let t=w|g;i===null&&(t|=S);const r={children:null,deps:null,equals:cn,f:t,fn:n,reactions:null,v:null,version:0};if(l!==null&&l.f&w){var e=l;(e.children??(e.children=[])).push(r)}return r}function sr(n){const t=st(n);return t.equals=vn,t}function kn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&w?ot(e):j(e)}}}function Dn(n){var t;kn(n),t=Cn(n);var r=(k||n.f&S)&&n.deps!==null?C:d;h(n,r),n.equals(t)||(n.v=t,n.version=Pn())}function ot(n){kn(n),M(n,0),h(n,q),n.children=n.deps=n.reactions=n.fn=null}const Nn=0,ut=1;let U=Nn,L=!1,D=!1,nn=!1;function sn(n){D=n}function on(n){nn=n}let O=[],N=0;let l=null;function un(n){l=n}let i=null,y=null;function lt(n){y=n}let v=null,p=0,m=null;function at(n){m=n}let In=0,k=!1,f=null;function Pn(){return++In}function z(){return f!==null&&f.l===null}function Y(n){var u,_;var t=n.f;if(t&g)return!0;if(t&C){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&B){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(n);n.f^=B}for(s=0;s<r.length;s++){var o=r[s];if(Y(o)&&Dn(o),e&&i!==null&&!k&&!((_=o==null?void 0:o.reactions)!=null&&_.includes(n))&&(o.reactions??(o.reactions=[])).push(n),o.version>n.version)return!0}}e||h(n,d)}return!1}function it(n,t,r){throw n}function Cn(n){var A;var t=v,r=p,e=m,s=l,o=k,u=y;v=null,p=0,m=null,l=n.f&(T|Q)?null:n,k=!D&&(n.f&S)!==0,y=null;try{var _=(0,n.fn)(),a=n.deps;if(v!==null){var c;if(M(n,p),a!==null&&p>0)for(a.length=p+v.length,c=0;c<v.length;c++)a[p+c]=v[c];else n.deps=a=v;if(!k)for(c=p;c<a.length;c++)((A=a[c]).reactions??(A.reactions=[])).push(n)}else a!==null&&p<a.length&&(M(n,p),a.length=p);return _}finally{v=t,p=r,m=e,l=s,k=o,y=u}}function ft(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&w&&(h(t,C),t.f&(S|B)||(t.f^=B),M(t,0))}function M(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)ft(n,r[e])}function qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;j(r,t),r=e}}function G(n){var t=n.f;if(!(t&q)){h(n,d);var r=n.ctx,e=i,s=f;i=n,f=r;try{t&fn||qn(n),An(n);var o=Cn(n);n.teardown=typeof o=="function"?o:null,n.version=In}catch(u){it(u)}finally{i=e,f=s}}}function Fn(){N>1e3&&(N=0,Zn()),N++}function bn(n){var t=n.length;if(t!==0){Fn();var r=D;D=!0;try{for(var e=0;e<t;e++){var s=n[e];if(s.first===null&&!(s.f&T))ln([s]);else{var o=[];Ln(s,o),ln(o)}}}finally{D=r}}}function ln(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(q|I))&&Y(e)&&(G(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?On(e):e.fn=null))}}function _t(){if(L=!1,N>1001)return;const n=O;O=[],bn(n),L||(N=0)}function K(n){U===Nn&&(L||(L=!0,queueMicrotask(_t)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&T){if(!(r&d))return;h(t,C)}}O.push(t)}function Ln(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,o=(s&(q|I))===0,u=(s&T)!==0,_=(s&d)!==0,a=r.first;if(o&&(!u||!_)){if(u&&h(r,d),s&P){if(!u&&Y(r)&&G(r),a=r.first,a!==null){r=a;continue}}else if(s&an)if(u||_){if(a!==null){r=a;continue}}else e.push(r)}var c=r.next;if(c===null){let b=r.parent;for(;b!==null;){if(n===b)break n;var A=b.next;if(A!==null){r=A;continue n}b=b.parent}}r=c}for(var $=0;$<e.length;$++)a=e[$],t.push(a),Ln(a,t)}function Mn(n){var t=U,r=O;try{Fn();const s=[];U=ut,O=s,L=!1,bn(r);var e=n==null?void 0:n();return et(),(O.length>0||s.length>0)&&Mn(),N=0,e}finally{U=t,O=r}}async function or(){await Promise.resolve(),Mn()}function ur(n){var t=n.f;if(t&q)return n.v;if(l!==null){y!==null&&y.includes(n)&&Wn();var r=l.deps;v===null&&r!==null&&r[p]===n?p++:v===null?v=[n]:v.push(n),m!==null&&i!==null&&i.f&d&&!(i.f&T)&&m.includes(n)&&(h(i,g),K(i))}if(t&w){var e=n;Y(e)&&Dn(e)}return n.v}function lr(n){const t=l;try{return l=null,n()}finally{l=t}}const ct=~(g|C|d);function h(n,t){n.f=n.f&ct|t}function ar(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},t||(f.l={s:null,u:null,r1:[],r2:X(!1)})}function ir(n){const t=f;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)mn(e[r])}f=t.p,t.m=!0}return{}}function fr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(rn in n)J(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&rn in r&&J(r)}}}function J(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{J(n[e],t)}catch{}const r=Yn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jn(r);for(let s in e){const o=e[s].get;if(o)try{o.call(n)}catch{}}}}}export{dt as $,f as A,bt as B,zt as C,Wt as D,_n as E,Un as F,lr as G,Qn as H,Tt as I,ur as J,fr as K,Zt as L,xt as M,kt as N,Qt as O,Vt as P,Yt as Q,Kt as R,fn as S,Ft as T,Bn as U,mn as V,yt as W,er as X,qt as Y,Ut as Z,rn as _,nr as a,Et as a0,X as a1,Ot as a2,Lt as a3,tn as a4,Rt as a5,Yn as a6,Xn as a7,Bt as a8,rr as a9,tr as aa,gn as ab,At as ac,mt as ad,It as ae,vn as af,Dt as ag,Nt as ah,Pt as ai,st as aj,sr as ak,Ct as al,Mn as am,or as an,St as ao,Vn as ap,Xt as b,E as c,j as d,ir as e,Gt as f,ht as g,R as h,vt as i,wn as j,Ht as k,Z as l,x as m,wt as n,hn as o,ar as p,H as q,jt as r,Mt as s,nt as t,dn as u,gt as v,$t as w,pt as x,Jt as y,i as z};
