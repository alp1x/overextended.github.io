"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6231],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),l=n(5924);const r="tabItem_De_A";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),l=n(9496),r=n(5924),i=n(6704),o=n(8876),u=n(4138),c=n(2509);const s="tabList_V3hT",p="tabItem_B35_";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:b,className:v}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,u.U)(),[C,x]=(0,l.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=N[b];null!=e&&e!==C&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==C&&(O(t),x(a),null!=b&&g(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},v)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:T},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},3363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(4250),l=(n(9496),n(9613)),r=n(3408),i=n(6489);const o={},u=void 0,c={unversionedId:"ox_lib/Cache/Client",id:"ox_lib/Cache/Client",title:"Client",description:"Caches data related to the player and handling some events or statebags.",source:"@site/docs/ox_lib/Cache/Client.md",sourceDirName:"ox_lib/Cache",slug:"/ox_lib/Cache/Client",permalink:"/docs/ox_lib/Cache/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Cache/Client.md",tags:[],version:"current",lastUpdatedAt:1669277795,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/AddKeybind/Client"},next:{title:"Client",permalink:"/docs/ox_lib/Callback/Client"}},s={},p=[{value:"States",id:"states",level:2},{value:"lib.onCache",id:"liboncache",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Caches data related to the player and handling some events or statebags.",(0,l.kt)("br",{parentName:"p"}),"\n","An interval runs every 100ms to update data that cannot be checked via handlers."),(0,l.kt)("h2",{id:"states"},"States"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ped: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"player entity id"))),(0,l.kt)("li",{parentName:"ul"},"playerId: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"player id"))),(0,l.kt)("li",{parentName:"ul"},"serverId: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"player server id"))),(0,l.kt)("li",{parentName:"ul"},"vehicle: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vehicle entity id"))),(0,l.kt)("li",{parentName:"ul"},"seat: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vehicle seat index"))),(0,l.kt)("li",{parentName:"ul"},"resource: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"invoking resource name"))),(0,l.kt)("li",{parentName:"ul"},"weapon: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"current ped weapon")))),(0,l.kt)("h2",{id:"liboncache"},"lib.onCache"),(0,l.kt)("p",null,"Register an event handler that is triggered when the cached value is updated."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.onCache(key, function(value) end)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.onCache('vehicle', function(value)\n    print('old vehicle:', cache.vehicle)\n    print('new vehicle:', value)\nend)\n"))),(0,l.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { onCache } from '@overextended/ox_lib/client';\n\nonCache(key, (value) => {});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { cache, onCache } from '@overextended/ox_lib/client';\n\nlib.onCache('vehicle', (value) => {\n  console.log('old vehicle:', cache.vehicle);\n  console.log('new vehicle:', value);\n});\n")))))}m.isMDXComponent=!0}}]);