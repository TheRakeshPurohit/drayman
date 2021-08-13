"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[666],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Server and client combined",sidebar_position:3},l=void 0,c={unversionedId:"introduction/server-and-client-combined",id:"introduction/server-and-client-combined",isDocsHomePage:!1,title:"Server and client combined",description:"Drayman allows using server-side and client-side code together. This allows you to easily combine server-side libraries, file-system queries, database connections, managing user-sensitive data and creating UI inside single script.",source:"@site/docs/introduction/server-and-client-combined.mdx",sourceDirName:"introduction",slug:"/introduction/server-and-client-combined",permalink:"/docs/introduction/server-and-client-combined",editUrl:"https://github.com/Claviz/drayman/blob/main/docs/docs/introduction/server-and-client-combined.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"Server and client combined",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Component basics",permalink:"/docs/introduction/component-basics"},next:{title:"Configuration",permalink:"/docs/introduction/configuration"}},u=[{value:"Building full stack component",id:"building-full-stack-component",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Drayman allows using server-side and client-side code together. This allows you to easily combine server-side libraries, file-system queries, database connections, managing user-sensitive data and creating UI inside single script."),(0,a.kt)("p",null,"On this page you will find out how to easily build user list manager using Node.js library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jprichardson/node-fs-extra"},"fs-extra"),"."),(0,a.kt)("h2",{id:"building-full-stack-component"},"Building full stack component"),(0,a.kt)("p",null,"Let's build UI for adding user data to JSON file. First, Drayman needs to be installed using ",(0,a.kt)("a",{parentName:"p",href:"./getting-started"},"Getting started guide"),". Then install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jprichardson/node-fs-extra"},"fs-extra")," library using this script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install fs-extra @types/fs-extra\n")),(0,a.kt)("p",null,"After Drayman is up and running and fs-extra is installed, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"home.tsx")," script as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},'import { readJSON, writeJson, pathExists } from "fs-extra";\n\nexport const component: DraymanComponent = async ({ forceUpdate }) => {\n  const filePath = "./data.json";\n  let user: string;\n  const userList = (await pathExists(filePath)) ? await readJSON(filePath) : [];\n\n  return () => {\n    return (\n      <>\n        <input\n          type="text"\n          value={user}\n          oninput={async ({ value }) => {\n            user = value;\n            await forceUpdate();\n          }}\n        />\n        <button\n          disabled={!user}\n          onclick={async () => {\n            userList.push(user);\n            await writeJson(filePath, userList);\n            user = null;\n            await forceUpdate();\n          }}\n        >\n          Add user\n        </button>\n        <ul>\n          {userList.map((x) => (\n            <li>{x}</li>\n          ))}\n        </ul>\n      </>\n    );\n  };\n};\n')),(0,a.kt)("p",null,"After heading up to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3033/"},"http://localhost:3033/")," you will see two elements on page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Input for user name."),(0,a.kt)("li",{parentName:"ul"},"Button which is disabled until some user name is entered and saves this name to database after it is clicked.")),(0,a.kt)("p",null,'Let\'s input two names - "Alice", click a button, "Bob", click a button. You will immediately see a list of names below input and button. If you reload this page you will still see this list. That is because it was stored in your file system. You can now check contents of this file:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"my-app\n\u2514\u2500\u2500 data.json\n")),(0,a.kt)("p",null,"If you check ",(0,a.kt)("inlineCode",{parentName:"p"},"data.json")," contents you will see something similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="data.json"',title:'"data.json"'},'["Alice","Bob"]\n')),(0,a.kt)("p",null,"So now you have created a component which combines server-side and client-side code inside single script. In place of file system you can use any other database library which is available for Node.js, without separating client and server code."))}p.isMDXComponent=!0}}]);