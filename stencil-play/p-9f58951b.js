const t="stencil-play";let n;let e;let s=false;let o=false;const l=(t,n="")=>{{return()=>{}}};const c=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f={};const r=t=>t!=null;const u=t=>{t=typeof t;return t==="object"||t==="function"};function a(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const d=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!u(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?y(null,s):s)}l=o}}};i(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const f=y(t,null);f.o=n;if(c.length>0){f.l=c}return f};const y=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const h={};const p=t=>t&&t.u===h;const $=(t,n)=>{if(t!=null&&!u(t)){if(n&1){return String(t)}return t}return t};const m=(t,n,e)=>{const s=at.ce(n,e);t.dispatchEvent(s);return s};const v=new WeakMap;const b=(t,n,e)=>{let s=ft.get(t);if(yt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ft.set(t,s)};const w=(t,n,e)=>{var s;const o=g(n);const l=ft.get(o);t=t.nodeType===11?t:ut;if(l){if(typeof l==="string"){t=t.head||t;let n=v.get(t);let e;if(!n){v.set(t,n=new Set)}if(!n.has(o)){{e=ut.createElement("style");e.innerHTML=l;const n=(s=at.p)!==null&&s!==void 0?s:a(ut);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const S=t=>{const n=t.$;const e=t.m;const s=n.i;const o=l("attachStyles",n.v);const c=w(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}o()};const g=(t,n)=>"sc-"+t.v;const j=(t,n,e,s,o,l)=>{if(e!==s){let c=ot(t,n);let i=n.toLowerCase();if(n==="class"){const n=t.classList;const o=M(e);const l=M(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else if(!c&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(ot(rt,i)){n=i.slice(2)}else{n=i[2]+n.slice(3)}if(e){at.rel(t,n,e,false)}if(s){at.ael(t,n,s,false)}}else{const i=u(s);if((c||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const k=/\s/;const M=t=>!t?[]:t.split(k);const O=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||f;const c=n.o||f;{for(s in l){if(!(s in c)){j(o,s,l[s],undefined,e,n.i)}}}for(s in c){j(o,s,l[s],c[s],e,n.i)}};const C=(t,e,o,l)=>{const c=e.l[o];let i=0;let f;let u;if(c.t!==null){f=c.h=ut.createTextNode(c.t)}else{f=c.h=ut.createElement(c.u);{O(null,c,s)}if(r(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(c.l){for(i=0;i<c.l.length;++i){u=C(t,c,i);if(u){f.appendChild(u)}}}}return f};const P=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=C(null,s,l);if(f){o[l].h=f;i.insertBefore(f,n)}}}};const U=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const x=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(A(i,u)){E(i,u);i=n[++o];u=s[++l]}else if(A(f,a)){E(f,a);f=n[--c];a=s[--r]}else if(A(i,a)){E(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(A(f,u)){E(f,u);t.insertBefore(f.h,i.h);f=n[--c];u=s[++l]}else{{d=C(n&&n[l],e,l);u=s[++l]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>c){P(t,s[r+1]==null?null:s[r+1].h,e,s,l,r)}else if(l>r){U(n,o,c)}};const A=(t,n)=>{if(t.u===n.u){return true}return false};const E=(t,n)=>{const e=n.h=t.h;const o=t.l;const l=n.l;const c=n.u;const i=n.t;if(i===null){{if(c==="slot");else{O(t,n,s)}}if(o!==null&&l!==null){x(e,o,n,l)}else if(l!==null){if(t.t!==null){e.textContent=""}P(e,null,n,l,0,l.length-1)}else if(o!==null){U(o,0,o.length-1)}}else if(t.t!==i){e.data=i}};const N=(t,s,o=false)=>{const l=t.m;const c=t.S||y(null,null);const i=p(s)?s:d(null,null,s);e=l.tagName;if(o&&i.o){for(const t of Object.keys(i.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){i.o[t]=l[t]}}}i.u=null;i.i|=4;t.S=i;i.h=c.h=l.shadowRoot||l;{n=l["s-sc"]}E(c,i)};const T=(t,n)=>{if(n&&!t.j&&n["s-p"]){n["s-p"].push(new Promise((n=>t.j=n)))}};const H=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}T(t,t.k);const e=()=>L(t,n);return wt(e)};const L=(t,n)=>{const e=l("scheduleUpdate",t.$.v);const s=t.M;let o;e();return R(o,(()=>q(t,s,n)))};const R=(t,n)=>W(t)?t.then(n):n();const W=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const q=async(t,n,e)=>{var s;const o=t.m;const c=l("update",t.$.v);const i=o["s-rc"];if(e){S(t)}const f=l("render",t.$.v);{F(t,n,o,e)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();c();{const n=(s=o["s-p"])!==null&&s!==void 0?s:[];const e=()=>I(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const F=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{N(t,n,s)}}}}catch(n){lt(n,t.m)}return null};const I=t=>{const n=t.$.v;const e=t.m;const s=l("postUpdate",n);const o=t.k;if(!(t.i&64)){t.i|=64;{_(e)}s();{t.O(e);if(!o){V()}}}else{s()}{if(t.j){t.j();t.j=undefined}if(t.i&512){bt((()=>H(t,false)))}t.i&=~(4|512)}};const V=n=>{{_(ut.documentElement)}bt((()=>m(rt,"appload",{detail:{namespace:t}})))};const _=t=>t.classList.add("hydrated");const z=(t,n)=>nt(t).C.get(n);const B=(t,n,e,s)=>{const o=nt(t);const l=o.C.get(n);const c=o.i;const i=o.M;e=$(e,s.P[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.C.set(n,e);if(i){if((c&(2|16))===2){H(o,false)}}}};const D=(t,n,e)=>{var s;if(n.P){const o=Object.entries(n.P);const l=t.prototype;o.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(l,t,{get(){return z(this,t)},set(e){B(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;l.attributeChangedCallback=function(t,s,o){at.jmp((()=>{const c=e.get(t);if(this.hasOwnProperty(c)){o=this[c];delete this[c]}else if(l.hasOwnProperty(c)&&typeof this[c]==="number"&&this[c]==o){return}else if(c==null){const e=nt(this);const l=e===null||e===void 0?void 0:e.i;if(!(l&8)&&l&128&&o!==s){const l=e.M;const c=n.U[t];c===null||c===void 0?void 0:c.forEach((n=>{if(l[n]!=null){l[n].call(l,o,s,t)}}))}return}this[c]=o===null&&typeof this[c]==="boolean"?false:o}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=n.U)!==null&&s!==void 0?s:{}),...o.filter((([t,n])=>n[0]&15)).map((([t,n])=>{const s=n[1]||t;e.set(s,t);return s}))]))}}return t};const G=async(t,n,e,s,o)=>{if((n.i&32)===0){n.i|=32;{o=it(e);if(o.then){const t=c();o=await o;t()}if(!o.isProxied){D(o,e,2);o.isProxied=true}const t=l("createInstance",e.v);{n.i|=8}try{new o(n)}catch(t){lt(t)}{n.i&=~8}t()}if(o.style){let t=o.style;const n=g(e);if(!ft.has(n)){const s=l("registerStyles",e.v);b(n,t,!!(e.i&1));s()}}}const i=n.k;const f=()=>H(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{};const K=t=>{if((at.i&1)===0){const n=nt(t);const e=n.$;const s=l("connectedCallback",e.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){T(n,n.k=e);break}}}if(e.P){Object.entries(e.P).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{G(t,n,e)}}else{if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.A){n.A.then((()=>J()))}}s()}};const Q=t=>{};const X=async t=>{if((at.i&1)===0){const n=nt(t);if(n===null||n===void 0?void 0:n.M);else if(n===null||n===void 0?void 0:n.A){n.A.then((()=>Q()))}}};const Y=(t,n={})=>{var e;const s=l();const o=[];const c=n.exclude||[];const f=rt.customElements;const r=ut.head;const u=r.querySelector("meta[charset]");const d=ut.createElement("style");const y=[];let h;let p=true;Object.assign(at,n);at.N=new URL(n.resourcesUrl||"./",ut.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],P:n[2],T:n[3]};{e.P=n[2]}const s=e.v;const l=class extends HTMLElement{constructor(t){super(t);t=this;st(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){y.push(this)}else{at.jmp((()=>K(this)))}}disconnectedCallback(){at.jmp((()=>X(this)))}componentOnReady(){return nt(this).A}};e.H=t[0];if(!c.includes(s)&&!f.get(s)){o.push(s);f.define(s,D(l,e,1))}}))}));{d.innerHTML=o+i;d.setAttribute("data-styles","");const t=(e=at.p)!==null&&e!==void 0?e:a(ut);if(t!=null){d.setAttribute("nonce",t)}r.insertBefore(d,u?u.nextSibling:r.firstChild)}p=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{at.jmp((()=>h=setTimeout(V,30)))}}s()};const Z=t=>at.p=t;const tt=new WeakMap;const nt=t=>tt.get(t);const et=(t,n)=>tt.set(n.M=t,n);const st=(t,n)=>{const e={i:0,m:t,$:n,C:new Map};{e.A=new Promise((t=>e.O=t));t["s-p"]=[];t["s-rc"]=[]}return tt.set(t,e)};const ot=(t,n)=>n in t;const lt=(t,n)=>(0,console.error)(t,n);const ct=new Map;const it=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.H;const l=ct.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ct.set(o,t)}return t[s]}),lt)};const ft=new Map;const rt=typeof window!=="undefined"?window:{};const ut=rt.document||{head:{}};const at={i:0,N:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const dt=t=>Promise.resolve(t);const yt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ht=[];const pt=[];const $t=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&at.i&4){bt(vt)}else{at.raf(vt)}}};const mt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){lt(t)}}t.length=0};const vt=()=>{mt(ht);{mt(pt);if(o=ht.length>0){at.raf(vt)}}};const bt=t=>dt().then(t);const wt=$t(pt,true);export{h as H,Y as b,d as h,dt as p,et as r,Z as s};
//# sourceMappingURL=p-9f58951b.js.map