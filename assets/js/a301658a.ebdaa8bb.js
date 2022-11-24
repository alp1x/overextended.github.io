"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4467],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(n),d=o,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(4250),o=(n(9496),n(9613));const a={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/setPlayerInventory",id:"ox_inventory/Functions/Server/setPlayerInventory",title:"setPlayerInventory",description:"Creates and sets the player's inventory.",source:"@site/docs/ox_inventory/Functions/Server/setPlayerInventory.md",sourceDirName:"ox_inventory/Functions/Server",slug:"/ox_inventory/Functions/Server/setPlayerInventory",permalink:"/docs/ox_inventory/Functions/Server/setPlayerInventory",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/setPlayerInventory.md",tags:[],version:"current",lastUpdatedAt:1669277795,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Items",permalink:"/docs/ox_inventory/Functions/Server/Items"},next:{title:"Guides",permalink:"/docs/ox_inventory/Guides/"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates and sets the player's inventory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:setPlayerInventory(player, data)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"player: ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"source: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"identifier: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"name: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"groups?: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")),(0,o.kt)("li",{parentName:"ul"},"sex?: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"dateofbirth?: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")))),(0,o.kt)("li",{parentName:"ul"},"data?: ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If not provided will load player's inventory data from the db.")))))}u.isMDXComponent=!0}}]);