"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[666],{9279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var i=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],r={title:"Server and client combined",sidebar_position:3},l=void 0,d={unversionedId:"introduction/server-and-client-combined",id:"introduction/server-and-client-combined",isDocsHomePage:!1,title:"Server and client combined",description:"Drayman allows using server-side and client-side code together. This allows you to easily combine server-side libraries, file-system queries, database connections, managing user-sensitive data and creating UI inside single script.",source:"@site/docs/introduction/server-and-client-combined.mdx",sourceDirName:"introduction",slug:"/introduction/server-and-client-combined",permalink:"/docs/introduction/server-and-client-combined",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/server-and-client-combined.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"Server and client combined",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Component basics",permalink:"/docs/introduction/component-basics"},next:{title:"Configuration",permalink:"/docs/introduction/configuration"}},u=[{value:"Building full stack component",id:"building-full-stack-component",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Drayman allows using server-side and client-side code together. This allows you to easily combine server-side libraries, file-system queries, database connections, managing user-sensitive data and creating UI inside single script."),(0,s.kt)("p",null,"On this page you will find out how to easily build user list manager powered by persistent datastore library ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bajankristof/nedb-promises"},"nedb-promises"),"."),(0,s.kt)("h2",{id:"building-full-stack-component"},"Building full stack component"),(0,s.kt)("p",null,"Let's build UI for adding user data to database. First, Drayman needs to be installed using ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting started guide"),"."),(0,s.kt)("p",null,"Install ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bajankristof/nedb-promises"},"nedb-promises")," library using this script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install nedb-promises\n")),(0,s.kt)("p",null,"After Drayman is up and running and nedb is installed, replace ",(0,s.kt)("inlineCode",{parentName:"p"},"home.tsx")," script as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/home.tsx"',title:'"src/components/home.tsx"'},'import Datastore from "nedb-promises";\n\nexport const component: DraymanComponent = async ({ forceUpdate }) => {\n  let user: string;\n\n  const db = new Datastore({ filename: "./data.db", autoload: true });\n  const userList = (await db.find<{ user: string }>({})).map((x) => x.user);\n\n  return () => {\n    return (\n      <>\n        <input\n          type="text"\n          value={user}\n          oninput={async ({ value }) => {\n            user = value;\n            await forceUpdate();\n          }}\n        />\n        <button\n          disabled={!user}\n          onclick={async () => {\n            userList.push(user);\n            await db.insert({ user });\n            user = null;\n            await forceUpdate();\n          }}\n        >\n          Add user\n        </button>\n        <ul>\n          {userList.map((x) => (\n            <li>{x}</li>\n          ))}\n        </ul>\n      </>\n    );\n  };\n};\n')),(0,s.kt)("p",null,"After heading up to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3033/"},"http://localhost:3033/")," you will see two elements on page:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Input for user name."),(0,s.kt)("li",{parentName:"ul"},"Button which is disabled until some user name is entered and saves this name to database after it is clicked.")),(0,s.kt)("p",null,'Let\'s input two names - "Alice", click a button, "Bob", click a button. You will immediately see a list of names below input and button. If you reload this page you will still see this list. That is because it was stored persistently. You can now check contents of this database in your file system:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"my-app\n\u2514\u2500\u2500 data.db\n")),(0,s.kt)("p",null,"If you check ",(0,s.kt)("inlineCode",{parentName:"p"},"data.db")," contents you will see something similar to this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="data.db"',title:'"data.db"'},'{"user":"Alice","_id":"65tYOhzAakhwqDSG"}\n{"user":"Bob","_id":"Zuo3hNv5lKOumMPd"}\n')),(0,s.kt)("p",null,"So now you have created a component which combines server-side and client-side code inside single script. In place of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bajankristof/nedb-promises"},"nedb-promises")," you can use any other database library which is available for Node.js, without separating client and server code."))}p.isMDXComponent=!0}}]);