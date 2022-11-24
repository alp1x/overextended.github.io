"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8910],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(4250),o=(t(9496),t(9613));const i={},a="Points",l={unversionedId:"ox_lib/Points/Client",id:"ox_lib/Points/Client",title:"Points",description:"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates.",source:"@site/docs/ox_lib/Points/Client.md",sourceDirName:"ox_lib/Points",slug:"/ox_lib/Points/Client",permalink:"/docs/ox_lib/Points/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Points/Client.md",tags:[],version:"current",lastUpdatedAt:1669277795,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/Logger/Server"},next:{title:"Client",permalink:"/docs/ox_lib/Raycast/Client"}},s={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"points"},"Points"),(0,o.kt)("p",null,"Simple and centralised distance checking, supporting callbacks when entering, leaving, and standing in-range of set coordinates.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"lib.points.new(coords, distance, data)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"coords: ",(0,o.kt)("inlineCode",{parentName:"li"},"vector3")),(0,o.kt)("li",{parentName:"ul"},"distance: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"data: ",(0,o.kt)("inlineCode",{parentName:"li"},"table"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local point = lib.points.new(playerCoords, 5, {\n    dunak = 'nerd',\n})\n\nfunction point:onEnter()\n    print('entered range of point', self.id)\nend\n\nfunction point:onExit()\n    print('left range of point', self.id)\nend\n\nfunction point:nearby()\n    DrawMarker(2, self.coords.x, self.coords.y, self.coords.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 1.0, 1.0, 1.0, 200, 20, 20, 50, false, true, 2, nil, nil, false)\n\n    if self.currentDistance < 1 and IsControlJustReleased(0, 38) then\n        print('inside marker', self.id)\n        print(self.dunak)\n    end\nend\n")),(0,o.kt)("p",null,"Points can be deleted by using the remove method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"point:remove()\n")))}d.isMDXComponent=!0}}]);