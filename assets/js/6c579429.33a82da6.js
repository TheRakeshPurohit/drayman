"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[66],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9084:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o="browserWindow_25XZ",a="browserWindowHeader_KqAw",i="buttons_1hjc",l="browserWindowAddressBar_3kU8",s="dot_3vUt",c="browserWindowMenuIcon_62Vr",p="bar_1GUQ",m="browserWindowBody_2pXR";var u=function(e){var n=e.children,t=e.minHeight,u=e.url;return r.createElement("div",{className:o,style:{minHeight:t}},r.createElement("div",{className:a},r.createElement("div",{className:i},r.createElement("span",{className:s,style:{background:"#f25f58"}}),r.createElement("span",{className:s,style:{background:"#fbbe3c"}}),r.createElement("span",{className:s,style:{background:"#58cb42"}})),r.createElement("div",{className:l},u),r.createElement("div",{className:c},r.createElement("div",null,r.createElement("span",{className:p}),r.createElement("span",{className:p}),r.createElement("span",{className:p})))),r.createElement("div",{className:m},n))}},8444:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(9084),l=["components"],s={title:"The Browser object",sidebar_position:4},c=void 0,p={unversionedId:"components-in-depth/helpers/the-browser-object",id:"components-in-depth/helpers/the-browser-object",isDocsHomePage:!1,title:"The Browser object",description:"The Browser object can be used to control browser. Here are some use-cases:",source:"@site/docs/components-in-depth/helpers/the-browser-object.mdx",sourceDirName:"components-in-depth/helpers",slug:"/components-in-depth/helpers/the-browser-object",permalink:"/docs/components-in-depth/helpers/the-browser-object",editUrl:"https://github.com/Claviz/drayman/blob/main/docs/docs/components-in-depth/helpers/the-browser-object.mdx",version:"current",sidebarPosition:4,frontMatter:{title:"The Browser object",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"props",permalink:"/docs/components-in-depth/helpers/props"},next:{title:"The EventHub object",permalink:"/docs/components-in-depth/helpers/the-event-hub-object"}},m=[{value:"Showing alert inside browser",id:"showing-alert-inside-browser",children:[]},{value:"Retrieving data from browser",id:"retrieving-data-from-browser",children:[]},{value:"Executing callbacks",id:"executing-callbacks",children:[]}],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Browser")," object can be used to control browser. Here are some use-cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Showing modals, alerts, popups."),(0,a.kt)("li",{parentName:"ul"},"Retrieving browser info, current URL."),(0,a.kt)("li",{parentName:"ul"},"Accessing local storage, cookies."),(0,a.kt)("li",{parentName:"ul"},"Navigation, routing.")),(0,a.kt)("h2",{id:"showing-alert-inside-browser"},"Showing alert inside browser"),(0,a.kt)("p",null,"First, you'll need to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeDraymanFramework")," function inside ",(0,a.kt)("inlineCode",{parentName:"p"},"public/index.html"),". Add browser commands function and alert function as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},"...\n\n<script>\n  initializeDraymanFramework({\n    browserCommands: () => ({\n      // highlight-start\n      alert: async ({ text }) => {\n        alert(text);\n      },\n      // highlight-end\n    }),\n  });\n<\/script>\n\n...\n")),(0,a.kt)("p",null,"Functions defined inside ",(0,a.kt)("inlineCode",{parentName:"p"},"browserCommands")," will be executed by your browser. In our example we have added ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," function which shows an alert inside browser when Drayman component asks to do so. And here is how Drayman component can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},'export const component: DraymanComponent = async ({ Browser }) => {\n  return () => {\n    return (\n      <button\n        onclick={async () => {\n          // highlight-next-line\n          await Browser.alert({ text: "Hello, world!" });\n        }}\n      >\n        Alert!\n      </button>\n    );\n  };\n};\n')),(0,a.kt)("p",null,"We have exposed ",(0,a.kt)("inlineCode",{parentName:"p"},"Browser")," object and told Drayman to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," function when user clicks a button."),(0,a.kt)("h2",{id:"retrieving-data-from-browser"},"Retrieving data from browser"),(0,a.kt)("p",null,"Functions defined inside ",(0,a.kt)("inlineCode",{parentName:"p"},"browserCommands")," also can return some useful data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},"...\n\n<script>\n  initializeDraymanFramework({\n    browserCommands: () => ({\n      // highlight-start\n      getCurrentUrl: async () => {\n        return window.location.href;\n      },\n      // highlight-end\n    }),\n  });\n<\/script>\n\n...\n")),(0,a.kt)("p",null,"Now this function can be used inside Drayman component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},"export const component: DraymanComponent = async ({ Browser }) => {\n  // highlight-next-line\n  const currentUrl = await Browser.getCurrentUrl();\n\n  return () => {\n    return <h3>You are now here: {currentUrl}</h3>;\n  };\n};\n")),(0,a.kt)("p",null,"In result user will see something like this:"),(0,a.kt)(i.Z,{url:"http://localhost:3033",mdxType:"BrowserWindow"},(0,a.kt)("h3",null,"You are now here: http://localhost:3033/")),(0,a.kt)("h2",{id:"executing-callbacks"},"Executing callbacks"),(0,a.kt)("p",null,"You can also execute callbacks inside ",(0,a.kt)("inlineCode",{parentName:"p"},"browserCommands"),". This can be useful if you are creating some interactive views (modals) and you need to wait for some user interaction."),(0,a.kt)("p",null,"Let's modify our previous alert example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},"...\n\n<script>\n  initializeDraymanFramework({\n    // highlight-next-line\n    browserCommands: (emit) => ({\n      // highlight-next-line\n      alert: async ({ text, onClose }) => {\n        alert(text);\n        // highlight-next-line\n        emit(onClose);\n      },\n    }),\n  });\n<\/script>\n\n...\n")),(0,a.kt)("p",null,"Pay attention on how ",(0,a.kt)("inlineCode",{parentName:"p"},"emit")," parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"browserCommands")," was introduced. It is used to tell Drayman to execute passed callbacks. In our case we are executing ",(0,a.kt)("inlineCode",{parentName:"p"},"onClose")," callback after ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," is executed. Now modify ",(0,a.kt)("inlineCode",{parentName:"p"},"home.tsx")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},'export const component: DraymanComponent = async ({ Browser, forceUpdate }) => {\n  let closed = false;\n\n  return () => {\n    return (\n      <>\n        <button\n          onclick={async () => {\n            await Browser.alert({\n              text: "Hello, world!",\n              onClose: async () => {\n                closed = true;\n                await forceUpdate();\n              },\n            });\n          }}\n        >\n          Alert!\n        </button>\n        {closed && <h3>You have closed an alert!</h3>}\n      </>\n    );\n  };\n};\n')),(0,a.kt)("p",null,'Now when user clicks a button, an alert will be shown. After closing an alert, a text "You have closed an alert!" will be shown on page:'),(0,a.kt)(i.Z,{url:"http://localhost:3033",mdxType:"BrowserWindow"},(0,a.kt)("button",null,"Alert!"),(0,a.kt)("h3",null,"You have closed an alert!")),(0,a.kt)("p",null,"And remember, instead of showing a text, you are free to execute any server-side code (for example, saving some data to database)."))}d.isMDXComponent=!0}}]);