const __vite__fileDeps=["./MuFgL9vC.js","./qessadaq.js","./CC3PRc6u.js","./BF7ZIgla.js","./C-v3KzvZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as f}from"./C-BdqUqt.js";import{m as v,P as p,_ as g,d,Q as l,R as h,q as _,E as y,H as r}from"./qessadaq.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./CC3PRc6u.js";import{u as j}from"./BF7ZIgla.js";import{_ as E}from"./B-tU7WWX.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./MuFgL9vC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),O=D;export{O as default};
