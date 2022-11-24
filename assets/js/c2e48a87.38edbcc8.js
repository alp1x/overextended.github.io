"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4434],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),r=n(5924);const o="tabItem_De_A";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),r=n(9496),o=n(5924),i=n(6704),l=n(8876),s=n(4138),u=n(2509);const p="tabList_V3hT",c="tabItem_B35_";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,x]=(0,r.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==w&&(T(t),x(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>_.push(e),onKeyDown:C,onClick:O},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(4250),r=(n(9496),n(9613)),o=n(3408),i=n(6489);const l={title:"Getting Started",sidebar_position:1},s=void 0,u={unversionedId:"ox_lib/index",id:"ox_lib/index",title:"Getting Started",description:"ox_lib is a collection of Lua and UI functions to utilise in other resources.",source:"@site/docs/ox_lib/index.md",sourceDirName:"ox_lib",slug:"/ox_lib/",permalink:"/docs/ox_lib/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/index.md",tags:[],version:"current",lastUpdatedAt:1669277795,formattedLastUpdatedAt:"Nov 24, 2022",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"ox_lib",previous:{title:"Library",permalink:"/docs/category/library"},next:{title:"Server",permalink:"/docs/ox_lib/ACL/Server"}},p={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ox_lib is a collection of Lua and UI functions to utilise in other resources."),(0,r.kt)("p",null,"The UI is built in React so the code needs to be compiled into standard JS.",(0,r.kt)("br",{parentName:"p"}),"\n","If you don't know how to do this then please download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_lib/releases/latest"},"release")," (ox_lib.zip) which is ",(0,r.kt)("em",{parentName:"p"},"already")," compiled into a working resource."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable the library inside of your resource just add ",(0,r.kt)("inlineCode",{parentName:"p"},"@ox_lib/init.lua")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"shared_scripts")," or\na ",(0,r.kt)("inlineCode",{parentName:"p"},"shared_script")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"shared_scripts {\n    '@ox_lib/init.lua'\n}\n")),(0,r.kt)("p",null,"Or if the library is the only shared script you use you can do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"shared_script '@ox_lib/init.lua'\n"))),(0,r.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Npm package for the lib does ",(0,r.kt)("strong",{parentName:"p"},"not")," support all the functions that are available for Lua."),(0,r.kt)("p",{parentName:"admonition"},"All supported functions are located inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," folder in the lib.")),(0,r.kt)("p",null,"You can get the npm package ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@overextended/ox_lib"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:"),(0,r.kt)("br",{parentName:"p"}),"\n","You can either import the whole library object which contains all the functions for that scope (client/server/shared) or\nyou can deconstruct it and import the functions you find needed at the time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/server'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { versionCheck } from '@overextended/ox_lib/server'\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ACE Permissions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"add_ace resource.ox_lib command.add_ace allow\nadd_ace resource.ox_lib command.remove_ace allow\nadd_ace resource.ox_lib command.add_principal allow\nadd_ace resource.ox_lib command.remove_principal allow\n")),(0,r.kt)("p",null,"That's it!",(0,r.kt)("br",{parentName:"p"}),"\n","You can now use the library functions inside of your resource, check the rest of the\ndocumentation to see how to utilise them."),(0,r.kt)("h1",{id:"using-icons-for-interface-functions"},"Using icons for interface functions"),(0,r.kt)("p",null,"The icon library used is Font Awesome 6.0, if for the icon you define only a string\nthe default icon type will be ",(0,r.kt)("inlineCode",{parentName:"p"},"solid"),".",(0,r.kt)("br",{parentName:"p"}),"\n","If you want to use a different icon type, i.e\napple as a brand, you need to define icon as a table (",(0,r.kt)("inlineCode",{parentName:"p"},"array"),") with the first value being\nthe icon type (",(0,r.kt)("inlineCode",{parentName:"p"},"fas"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"far"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fab"),") as a string, and the second being the icon name."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"icon = {'fab', 'apple'}\n"))),(0,r.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"icon: ['fab', 'apple']\n")))),(0,r.kt)("h1",{id:"building-the-ui"},"Building the UI"),(0,r.kt)("p",null,"If you wish to edit any of the UI elements you will need to download the ",(0,r.kt)("em",{parentName:"p"},"source")," code, edit what you need and then\ncompile it."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DO NOT")," debundle and unminify the release CSS and JS files to edit them.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js (LTS)")),(0,r.kt)("li",{parentName:"ul"},"pnpm")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installing Node.js:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the LTS version of Node.js."),(0,r.kt)("li",{parentName:"ul"},"Go through the install and make sure you install all of the features."),(0,r.kt)("li",{parentName:"ul"},"Run node --version in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installing pnpm:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After installing NodeJS you can install pnpm by running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g pnpm"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building the UI:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cd into the web directory."),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm i")," to install the dependencies."),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm build")," to build the source files.")),(0,r.kt)("admonition",{title:"Hot reloads",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When working in the browser you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm start"),", which supports hot reloads meaning that\nyou will see your changes after saving your file."),(0,r.kt)("p",{parentName:"admonition"},"If you want to work in game you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm start:game")," which writes changes to disk, so\nthe only thing you have to do is restart the resource for it take affect.")))}m.isMDXComponent=!0}}]);