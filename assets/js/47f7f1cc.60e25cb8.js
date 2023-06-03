"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2490],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),v=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=v(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=v(t),u=o,y=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var v=2;v<i;v++)a[v]=t[v];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>v});var r=t(2564),o=(t(9496),t(9613));const i={},a="Server events",l={unversionedId:"ox_inventory/Events/Server",id:"ox_inventory/Events/Server",title:"Server events",description:"This is not a comprehensive list of events and is missing events intended for internal use only.",source:"@site/docs/ox_inventory/Events/Server.md",sourceDirName:"ox_inventory/Events",slug:"/ox_inventory/Events/Server",permalink:"/docs/ox_inventory/Events/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Events/Server.md",tags:[],version:"current",lastUpdatedAt:1685541824,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client events",permalink:"/docs/ox_inventory/Events/Client"},next:{title:"GetItemCount",permalink:"/docs/ox_inventory/Functions/Client/Inventory/GetItemCount"}},s={},v=[{value:"Handlers",id:"handlers",level:2},{value:"ox_inventory:openedInventory",id:"ox_inventoryopenedinventory",level:3},{value:"ox_inventory:closeInventory",id:"ox_inventorycloseinventory",level:3}],c={toc:v},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-events"},"Server events"),(0,o.kt)("p",null,"This is not a comprehensive list of events and is missing events intended for internal use only."),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("p",null,"These events shouldn't be triggered by any other scripts."),(0,o.kt)("h3",{id:"ox_inventoryopenedinventory"},"ox_inventory:openedInventory"),(0,o.kt)("p",null,"Triggered after an inventory is opened by a player."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox_inventory:openedInventory', function(playerId, inventoryId) end)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"playerId: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"inventoryId: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("h3",{id:"ox_inventorycloseinventory"},"ox_inventory:closeInventory"),(0,o.kt)("p",null,"Triggered after an inventory is closed by a player."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox_inventory:closeInventory', function(playerId, inventoryId) end)\n")))}p.isMDXComponent=!0}}]);