"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),p=l,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1106:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var a=n(7294),l=n(6010),r=n(7462),o=n(5999),s=n(9960);function c(e){const{permalink:t,title:n,subLabel:l}=e;return a.createElement(s.Z,{className:"pagination-nav__link",to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(c,(0,r.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(c,(0,r.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=n(2263),d=n(5551),u=n(1548);const p={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=p[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:n,onClick:l},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,m.Z)(),{pluginId:o}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,u.J)(o),{latestDocSuggestion:c,latestVersionSuggestion:i}=(0,d.Jo)(o),p=null!=c?c:(v=i).docs.find((e=>e.id===v.mainDocId));var v;return a.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:i.label,to:p.path,onClick:()=>s(i.name)})))}function b(e){let{className:t}=e;const n=(0,u.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}function f(e){let{className:t}=e;const n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const N="iconEdit_dcUD";function _(e){let{className:t,...n}=e;return a.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(N,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(_,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const Z="tag_hD8n",T="tagRegular_D6E_",C="tagWithCount_i0QQ";function w(e){const{permalink:t,name:n,count:r}=e;return a.createElement(s.Z,{href:t,className:(0,l.Z)(Z,r?C:T)},n,r&&a.createElement("span",null,r))}const O="tags_XVD_",x="tag_JSN8";function A(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(O,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:x},a.createElement(w,{name:t,permalink:n}))}))))}const U="lastUpdated_foO9";function B(e){return a.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(A,e)))}function P(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(L,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",U)},(n||r)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function M(e){const{content:t}=e,{metadata:n}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:s,lastUpdatedBy:c,tags:i}=n,m=i.length>0,d=!!(r||o||c);return m||d?a.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},m&&a.createElement(B,{tags:i}),d&&a.createElement(P,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}function S(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(S,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}function j(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:s,maxHeadingLevel:c,...i}=e;const m=(0,u.LU)(),d=null!=s?s:m.tableOfContents.minHeadingLevel,p=null!=c?c:m.tableOfContents.maxHeadingLevel,g=(0,u.b9)({toc:t,minHeadingLevel:d,maxHeadingLevel:p}),h=(0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:p}}),[l,o,d,p]);return(0,u.Si)(h),a.createElement(S,(0,r.Z)({toc:g,className:n,linkClassName:l},i))}const D="tableOfContents_cNA8";function H(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(D,"thin-scrollbar",t)},a.createElement(j,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}const I="tocCollapsible_jdIR",V="tocCollapsibleButton_Fzxq",R="tocCollapsibleContent_MpvI",F="tocCollapsibleExpanded_laf4";function z(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:i}=(0,u.uR)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(I,!c&&F,n)},a.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",V),onClick:i},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:R,collapsed:c},a.createElement(j,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}const W="anchorWithStickyNavbar_mojV",X="anchorWithHideOnScrollNavbar_R0VQ";function J(e){let{as:t,id:n,...s}=e;const{navbar:{hideOnScroll:c}}=(0,u.LU)();return n?a.createElement(t,(0,r.Z)({},s,{className:(0,l.Z)("anchor",c?X:W),id:n}),s.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,s)}function Q(e){let{as:t,...n}=e;return"h1"===t?a.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):a.createElement(J,(0,r.Z)({as:t},n))}const q="docItemContainer_vinB",G="docItemCol_DM6M",K="tocMobile_TmEX",Y={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var $=n(4996);function ee(e){let{children:t,href:n}=e;const l="breadcrumbs__link";return n?a.createElement(s.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l,itemProp:"item name"},t)}function te(e){let{children:t,active:n,index:r}=e;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ne(){const e=(0,$.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.Z,{className:(0,l.Z)("breadcrumbs__link",Y.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ae(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ne,null),e.map(((t,n)=>a.createElement(te,{key:n,active:n===e.length-1,index:n},a.createElement(ee,{href:n<e.length-1?t.href:void 0},t.label)))))):null}var le=n(3905),re=n(5742);const oe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var se={Prism:n(7410).default,theme:oe};function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ie.apply(this,arguments)}var me=/\r\n|\r|\n/,de=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},ue=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},pe=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=ie({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=ie({},n,{backgroundColor:null}),l};function ge(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const he=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),ce(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?pe(e.theme,e.language):void 0;return t.themeDict=n})),ce(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=ie({},ge(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?ie({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),ce(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),ce(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,o=ie({},ge(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?ie({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),ce(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],r=0,o=0,s=[],c=[s];o>-1;){for(;(r=a[o]++)<l[o];){var i=void 0,m=t[o],d=n[o][r];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=ue(m,d.type),d.alias&&(m=ue(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(me),p=u.length;s.push({types:m,content:u[0]});for(var g=1;g<p;g++)de(s),c.push(s=[]),s.push({types:m,content:u[g]})}else o++,t.push(m),n.push(i),a.push(0),l.push(i.length)}o--,t.pop(),n.pop(),a.pop(),l.pop()}return de(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const ve="copyButton_eDfN",be="copyButtonCopied_ljy5",fe="copyButtonIcons_W9eQ",ye="copyButtonIcon_XEyF",Ee="copyButtonSuccessIcon_i9w9";function ke(e){let{code:t}=e;const[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),l&&l.focus()}(t),r(!0),s.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)(ve,"clean-btn",n&&be),onClick:c},a.createElement("span",{className:fe,"aria-hidden":"true"},a.createElement("svg",{className:ye,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Ee,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ne="codeBlockContainer_I0IT",_e="codeBlockContent_wNvx",Le="codeBlockTitle_BvAR",Ze="codeBlock_jd64",Te="codeBlockStandalone_csWH",Ce="codeBlockLines_mRuA";function we(e){var t;let{children:n,className:o="",metastring:s,title:c,language:i}=e;const{prism:m}=(0,u.LU)(),[d,p]=(0,a.useState)(!1);(0,a.useEffect)((()=>{p(!0)}),[]);const g=(0,u.bc)(s)||c,h=(0,u.pJ)();if(a.Children.toArray(n).some((e=>(0,a.isValidElement)(e))))return a.createElement(he,(0,r.Z)({},se,{key:String(d),theme:h,code:"",language:"text"}),(e=>{let{className:t,style:r}=e;return a.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,Te,"thin-scrollbar",Ne,o,u.kM.common.codeBlock),style:r},a.createElement("code",{className:Ce},n))}));const v=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=i?i:(0,u.Vo)(o))?t:m.defaultLanguage,{highlightLines:f,code:y}=(0,u.nZ)(v,s,b);return a.createElement(he,(0,r.Z)({},se,{key:String(d),theme:h,code:y,language:null!=b?b:"text"}),(e=>{let{className:t,style:n,tokens:s,getLineProps:c,getTokenProps:i}=e;return a.createElement("div",{className:(0,l.Z)(Ne,o,{["language-"+b]:b&&!o.includes("language-"+b)},u.kM.common.codeBlock)},g&&a.createElement("div",{style:n,className:Le},g),a.createElement("div",{className:_e,style:n},a.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,Ze,"thin-scrollbar")},a.createElement("code",{className:Ce},s.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=c({line:e,key:t});return f.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},i({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement(ke,{code:y})))}))}const Oe="details_BAp3";function xe(e){let{...t}=e;return a.createElement(u.PO,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",Oe,t.className)}))}function Ae(e){return a.createElement(Q,e)}const Ue="img_E7b_";const Be={head:function(e){const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e)));return a.createElement(re.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(we,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var t;return a.createElement(we,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(xe,(0,r.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,Ue))}));var t},h1:e=>a.createElement(Ae,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(Ae,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(Ae,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(Ae,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(Ae,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(Ae,(0,r.Z)({as:"h6"},e))};function Pe(e){let{children:t}=e;return a.createElement(le.Zo,{components:Be},t)}function Me(e){var t;const{content:n}=e,{metadata:l,frontMatter:r,assets:o}=n,{keywords:s}=r,{description:c,title:i}=l,m=null!=(t=o.image)?t:r.image;return a.createElement(u.d,{title:i,description:c,keywords:s,image:m})}function Se(e){const{content:t}=e,{metadata:n,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:s,toc_min_heading_level:c,toc_max_heading_level:m}=r,{title:d}=n,p=!o&&void 0===t.contentTitle,g=(0,u.iP)(),h=!s&&t.toc&&t.toc.length>0,v=h&&("desktop"===g||"ssr"===g);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",!s&&G)},a.createElement(b,null),a.createElement("div",{className:q},a.createElement("article",null,a.createElement(ae,null),a.createElement(f,null),h&&a.createElement(z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:(0,l.Z)(u.kM.docs.docTocMobile,K)}),a.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(Q,{as:"h1"},d)),a.createElement(Pe,null,a.createElement(t,null))),a.createElement(M,e)),a.createElement(i,{previous:n.previous,next:n.next}))),v&&a.createElement("div",{className:"col col--3"},a.createElement(H,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function je(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(u.FG,{className:t},a.createElement(Me,e),a.createElement(Se,e))}}}]);