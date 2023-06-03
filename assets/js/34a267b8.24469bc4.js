"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2202],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5498:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(9496),n=a(5924);const l={tabItem:"tabItem_IfE0"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},725:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(2564),n=a(9496),l=a(5924),o=a(3819),u=a(3442),s=a(1233),i=a(6491),c=a(9182);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),y=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var y=a(7502);const v={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function g(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==u&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(h,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},9416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=a(2564),n=(a(9496),a(9613)),l=a(725),o=a(5498);const u={keywords:["execute"],title:"Update"},s=void 0,i={unversionedId:"oxmysql/Usage/update",id:"oxmysql/Usage/update",title:"Update",description:"Returns the number of rows affected by the query.",source:"@site/docs/oxmysql/Usage/update.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/update",permalink:"/docs/oxmysql/Usage/update",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/update.md",tags:[],version:"current",lastUpdatedAt:1685541824,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{keywords:["execute"],title:"Update"},sidebar:"tutorialSidebar",previous:{title:"Transaction",permalink:"/docs/oxmysql/Usage/transaction"},next:{title:"Ox Lib",permalink:"/docs/category/ox-lib"}},c={},p=[{value:"Promise",id:"promise",level:2},{value:"Callback",id:"callback",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Returns the number of rows affected by the query."),(0,n.kt)("h2",{id:"promise"},"Promise"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"1",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local affectedRows = MySQL.update.await('UPDATE users SET firstname = ? WHERE identifier = ?', {\n    newName, identifier\n})\n\nprint(affectedRows)\n"))),(0,n.kt)(o.Z,{value:"2",label:"JS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const affectedRows = await MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', [\n  newName, identifier\n])\n\nconsole.log(affectedRows)\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aliases")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MySQL.Sync.execute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exports.ghmattimysql.executeSync")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exports.oxmysql.update_async"))),(0,n.kt)("h2",{id:"callback"},"Callback"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"1",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', {\n    newName, identifier\n}, function(affectedRows)\n    print(affectedRows)\nend)\n"))),(0,n.kt)(o.Z,{value:"2",label:"JS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"MySQL.update('UPDATE users SET firstname = ? WHERE identifier = ?', [\n  newName, identifier\n], (affectedRows) => {\n  console.log(affectedRows)\n})\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aliases")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MySQL.Async.execute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exports.ghmattimysql.execute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exports.oxmysql.update"))))}f.isMDXComponent=!0}}]);