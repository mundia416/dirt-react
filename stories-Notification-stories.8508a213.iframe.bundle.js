"use strict";(self.webpackChunk_mundia_dirt_react=self.webpackChunk_mundia_dirt_react||[]).push([[338],{"./src/stories/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIcon:()=>CustomIcon,Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});var src=__webpack_require__("./src/index.tsx"),react=__webpack_require__("./node_modules/react/index.js");function BuildingLibraryIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"}))}const esm_BuildingLibraryIcon=react.forwardRef(BuildingLibraryIcon),Notification_stories={title:"Components/Notification",component:src.Eg,parameters:{layout:"centered"},argTypes:{}},Main={args:{open:!0,title:"Hello World!",content:"Upgraded your account"}},CustomIcon={args:{open:!0,title:"Hello World!",content:"Upgraded your account",icon:esm_BuildingLibraryIcon,iconClassname:"text-orange-500"}},__namedExportsOrder=["Main","CustomIcon"];Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:'{\n  args: {\n    open: true,\n    title: "Hello World!",\n    content: "Upgraded your account"\n  }\n}',...Main.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    open: true,\n    title: "Hello World!",\n    content: "Upgraded your account",\n    icon: BuildingLibraryIcon,\n    iconClassname: \'text-orange-500\'\n  }\n}',...CustomIcon.parameters?.docs?.source}}}}}]);