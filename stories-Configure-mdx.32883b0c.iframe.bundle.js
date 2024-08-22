/*! For license information please see stories-Configure-mdx.32883b0c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_mundia_dirt_react=self.webpackChunk_mundia_dirt_react||[]).push([[187],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:()=>RightArrow,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_dirt_react_dirt_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_assets_github_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/github.svg"),_assets_discord_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/assets/discord.svg"),_assets_youtube_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/assets/youtube.svg"),_assets_tutorials_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/assets/tutorials.svg"),_assets_styling_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/assets/styling.png"),_assets_context_png__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/assets/context.png"),_assets_assets_png__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/assets/assets.png"),_assets_docs_png__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/assets/docs.png"),_assets_share_png__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/stories/assets/share.png"),_assets_figma_plugin_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/stories/assets/figma-plugin.png"),_assets_testing_png__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/stories/assets/testing.png"),_assets_accessibility_png__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/stories/assets/accessibility.png"),_assets_theming_png__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/stories/assets/theming.png"),_assets_addon_library_png__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/stories/assets/addon-library.png");const RightArrow=()=>{const _components={path:"path",svg:"svg",...(0,_home_runner_work_dirt_react_dirt_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_16__.R)()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){const _components={code:"code",h1:"h1",p:"p",...(0,_home_runner_work_dirt_react_dirt_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_16__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_17__.W8,{title:"Configure your project"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"configure-your-project",children:"Configure your project"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_styling_png__WEBPACK_IMPORTED_MODULE_6__,alt:"A wall of logos representing different styling technologies"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/configure/styling-and-css/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_context_png__WEBPACK_IMPORTED_MODULE_7__,alt:"An abstraction representing the composition of data for a component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_assets_png__WEBPACK_IMPORTED_MODULE_8__,alt:"A representation of typography and image assets"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{className:"sb-section-item-paragraph",children:["To link static files (like fonts) to your projects and stories, use the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"staticDirs"})," configuration option to specify folders to load when\nstarting Storybook."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/configure/images-and-assets/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-features-grid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_docs_png__WEBPACK_IMPORTED_MODULE_9__,alt:"A screenshot showing the autodocs tag being set, pointing a docs page being generated"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Autodocs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Auto-generate living,\ninteractive reference documentation from your components and stories."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_share_png__WEBPACK_IMPORTED_MODULE_10__,alt:"A browser window showing a Storybook being published to a chromatic.com URL"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Publish to Chromatic"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Publish your Storybook to review and collaborate with your entire team."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_figma_plugin_png__WEBPACK_IMPORTED_MODULE_11__,alt:"Windows showing the Storybook plugin in Figma"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Figma Plugin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Embed your stories into Figma to cross-reference the design and live\nimplementation in one place."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_testing_png__WEBPACK_IMPORTED_MODULE_12__,alt:"Screenshot of tests passing and failing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Testing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Use stories to test a component in all its variations, no matter how\ncomplex."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/writing-tests/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_accessibility_png__WEBPACK_IMPORTED_MODULE_13__,alt:"Screenshot of accessibility tests passing and failing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Accessibility"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Automatically test your components for a11y issues as you develop."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-grid-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_theming_png__WEBPACK_IMPORTED_MODULE_14__,alt:"Screenshot of Storybook in light and dark mode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:"sb-section-item-heading",children:"Theming"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Theme Storybook's UI to personalize it to your project."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/docs/configure/theming/?renderer=react",target:"_blank",children:["Learn more",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-addon",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-addon-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{children:"Addons"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"sb-section-item-paragraph",children:"Integrate your tools with Storybook to connect workflows."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/addons/",target:"_blank",children:["Discover all addons",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"sb-addon-img",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_addon_library_png__WEBPACK_IMPORTED_MODULE_15__,alt:"Integrate your tools with Storybook to connect workflows."})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section sb-socials",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_github_svg__WEBPACK_IMPORTED_MODULE_2__,alt:"Github logo",className:"sb-explore-image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Join our contributors building the future of UI development."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_discord_svg__WEBPACK_IMPORTED_MODULE_3__,alt:"Discord logo",className:"sb-explore-image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Get support and chat with frontend developers."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_youtube_svg__WEBPACK_IMPORTED_MODULE_4__,alt:"Youtube logo",className:"sb-explore-image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Watch tutorials, feature previews and interviews."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:_assets_tutorials_svg__WEBPACK_IMPORTED_MODULE_5__,alt:"A book",className:"sb-explore-image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Follow guided walkthroughs on for key workflows."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",children:["Discover tutorials",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow,{})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n  .sb-container {\n    margin-bottom: 48px;\n  }\n\n  .sb-section {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n  }\n\n  img {\n    object-fit: cover;\n  }\n\n  .sb-section-title {\n    margin-bottom: 32px;\n  }\n\n  .sb-section a:not(h1 a, h2 a, h3 a) {\n    font-size: 14px;\n  }\n\n  .sb-section-item, .sb-grid-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .sb-section-item-heading {\n    padding-top: 20px !important;\n    padding-bottom: 5px !important;\n    margin: 0 !important;\n  }\n  .sb-section-item-paragraph {\n    margin: 0;\n    padding-bottom: 10px;\n  }\n\n  .sb-chevron {\n    margin-left: 5px;\n  }\n\n  .sb-features-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px 20px;\n  }\n\n  .sb-socials {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .sb-socials p {\n    margin-bottom: 10px;\n  }\n\n  .sb-explore-image {\n    max-height: 32px;\n    align-self: flex-start;\n  }\n\n  .sb-addon {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    position: relative;\n    background-color: #EEF3F8;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    background: #EEF3F8;\n    height: 180px;\n    margin-bottom: 48px;\n    overflow: hidden;\n  }\n\n  .sb-addon-text {\n    padding-left: 48px;\n    max-width: 240px;\n  }\n\n  .sb-addon-text h4 {\n    padding-top: 0px;\n  }\n\n  .sb-addon-img {\n    position: absolute;\n    left: 345px;\n    top: 0;\n    height: 100%;\n    width: 200%;\n    overflow: hidden;\n  }\n\n  .sb-addon-img img {\n    width: 650px;\n    transform: rotate(-15deg);\n    margin-left: 40px;\n    margin-top: -72px;\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0);\n    backface-visibility: hidden;\n  }\n\n  @media screen and (max-width: 800px) {\n    .sb-addon-img {\n      left: 300px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .sb-section {\n      flex-direction: column;\n    }\n\n    .sb-features-grid {\n      grid-template-columns: repeat(1, 1fr);\n    }\n\n    .sb-socials {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .sb-addon {\n      height: 280px;\n      align-items: flex-start;\n      padding-top: 32px;\n      overflow: hidden;\n    }\n\n    .sb-addon-text {\n      padding-left: 24px;\n    }\n\n    .sb-addon-img {\n      right: 0;\n      left: 0;\n      top: 130px;\n      bottom: 0;\n      overflow: hidden;\n      height: auto;\n      width: 124%;\n    }\n\n    .sb-addon-img img {\n      width: 1200px;\n      transform: rotate(-12deg);\n      margin-left: 0;\n      margin-top: 48px;\n      margin-bottom: -40px;\n      margin-left: -24px;\n    }\n  }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_dirt_react_dirt_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_16__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/assets/accessibility.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/accessibility.2dbc6973.png"},"./src/stories/assets/addon-library.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/addon-library.7a58d2cb.png"},"./src/stories/assets/assets.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/assets.e6440a95.png"},"./src/stories/assets/context.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/context.645728c6.png"},"./src/stories/assets/discord.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/discord.d85804c7.svg"},"./src/stories/assets/docs.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/docs.f7d8b9a8.png"},"./src/stories/assets/figma-plugin.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/figma-plugin.9335a1a9.png"},"./src/stories/assets/github.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/github.e4e8df82.svg"},"./src/stories/assets/share.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/share.161528bb.png"},"./src/stories/assets/styling.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/styling.38cab73b.png"},"./src/stories/assets/testing.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/testing.c720ced2.png"},"./src/stories/assets/theming.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/theming.e93de094.png"},"./src/stories/assets/tutorials.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tutorials.fde6e46f.svg"},"./src/stories/assets/youtube.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/youtube.fd046a09.svg"}}]);