import{r as e,M as t,T as l}from"./vendor.c166482a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,r)=>{const a=new URL(e,n);if(self[t].moduleMap[a])return l(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),o(m)},onload(){l(self[t].moduleMap[a]),o(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const n=()=>React.createElement(React.Fragment,null,React.createElement(l,null,"Hello vite!"),React.createElement("h1",null,"Hello vite!"));e((()=>React.createElement(t,null,React.createElement(n,null))));