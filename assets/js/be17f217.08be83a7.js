"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[985],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,h=u["".concat(a,".").concat(d)]||u[d]||m[d]||p;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=u;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2274:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(7462),o=t(3366),p=(t(7294),t(3905)),i=["components"],s={title:"props",sidebar_position:3},a=void 0,c={unversionedId:"components-in-depth/helpers/props",id:"components-in-depth/helpers/props",isDocsHomePage:!1,title:"props",description:"An object containing component properties.",source:"@site/docs/components-in-depth/helpers/props.mdx",sourceDirName:"components-in-depth/helpers",slug:"/components-in-depth/helpers/props",permalink:"/docs/components-in-depth/helpers/props",editUrl:"https://github.com/Claviz/drayman/blob/main/docs/docs/components-in-depth/helpers/props.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"props",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"forceUpdate",permalink:"/docs/components-in-depth/helpers/force-update"},next:{title:"The Browser object",permalink:"/docs/components-in-depth/helpers/the-browser-object"}},l=[{value:"Passing props from other component",id:"passing-props-from-other-component",children:[]},{value:"Passing props to web component",id:"passing-props-to-web-component",children:[]}],m={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"An object containing component properties."),(0,p.kt)("h2",{id:"passing-props-from-other-component"},"Passing props from other component"),(0,p.kt)("p",null,"Child component which receives props from parent:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},"export const component: DraymanComponent<{ text: string }> = async ({\n  //highlight-next-line\n  props,\n}) => {\n  return () => {\n    return <h1>{props.text}</h1>;\n  };\n};\n")),(0,p.kt)("p",null,"Parent component which passes props to child:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},'export const component: DraymanComponent = async ({ forceUpdate }) => {\n  return () => {\n    //highlight-next-line\n    return <header text="Hello, world!"></header>;\n  };\n};\n')),(0,p.kt)("h2",{id:"passing-props-to-web-component"},"Passing props to web component"),(0,p.kt)("p",null,"It is also possible to pass props to ",(0,p.kt)("a",{parentName:"p",href:"../../introduction/component-basics#using-component-as-web-component"},"component which is used as a web component"),". Consider we are using ",(0,p.kt)("inlineCode",{parentName:"p"},"header.tsx")," component from previous example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title>Drayman Framework</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="/drayman-framework-client.js"><\/script>\n  </head>\n\n  <body>\n    \x3c!-- highlight-start --\x3e\n    <drayman-element\n      component="header"\n      options=\'{"text": "Hello, world!"}\'\n    ></drayman-element>\n    \x3c!-- highlight-end --\x3e\n\n    <script>\n      initializeDraymanFramework();\n    <\/script>\n  </body>\n</html>\n')))}u.isMDXComponent=!0}}]);