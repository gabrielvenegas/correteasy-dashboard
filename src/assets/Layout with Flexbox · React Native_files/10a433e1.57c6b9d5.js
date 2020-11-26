(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={title:"Announcing React Native 0.61 with Fast Refresh",author:"Dan Abramov",authorTitle:"React Core at Facebook",authorURL:"https://twitter.com/dan_abramov",authorImageURL:"https://avatars1.githubusercontent.com/u/810438?s=460&v=4",authorTwitter:"dan_abramov",tags:["announcement","release"]},s={permalink:"/blog/2019/09/18/version-0.61",source:"@site/blog/2019-09-18-version-0.61.md",description:"We\u2019re excited to announce React Native 0.61, which includes a new reloading experience we\u2019re calling Fast Refresh.",date:"2019-09-18T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],title:"Announcing React Native 0.61 with Fast Refresh",readingTime:2.78,truncated:!1,prevItem:{title:"Meet Doctor, a new React Native command",permalink:"/blog/2019/11/18/react-native-doctor"},nextItem:{title:"Meet Hermes, a new JavaScript Engine optimized for React Native",permalink:"/blog/2019/07/17/hermes"}},c=[{value:"Fast Refresh",id:"fast-refresh",children:[]},{value:"Other Improvements",id:"other-improvements",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Thanks",id:"thanks",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We\u2019re excited to announce React Native 0.61, which includes a new reloading experience we\u2019re calling Fast Refresh."),Object(o.b)("h2",{id:"fast-refresh"},"Fast Refresh"),Object(o.b)("p",null,"When we asked the React Native community about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/64"}),"common pain points"),", one of the top answers was that the \u201chot reloading\u201d feature was broken. It didn\u2019t work reliably for function components, often failed to update the screen, and wasn\u2019t resilient to typos and mistakes. We heard that most people turned it off because it was too unreliable."),Object(o.b)("p",null,"In React Native 0.61, ",Object(o.b)("strong",{parentName:"p"},"we\u2019re unifying the existing \u201clive reloading\u201d (reload on save) and \u201chot reloading\u201d features into a single new feature called \u201cFast Refresh\u201d"),". Fast Refresh was implemented from scratch with the following principles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fast Refresh ",Object(o.b)("strong",{parentName:"li"},"fully supports modern React"),", including function components and Hooks."),Object(o.b)("li",{parentName:"ul"},"Fast Refresh ",Object(o.b)("strong",{parentName:"li"},"gracefully recovers after typos")," and other mistakes, and falls back to a full reload when needed."),Object(o.b)("li",{parentName:"ul"},"Fast Refresh ",Object(o.b)("strong",{parentName:"li"},"doesn\u2019t perform invasive code transformations")," so it\u2019s reliable enough to be on by default.")),Object(o.b)("p",null,"To see Fast Refresh in action, check out this video:"),Object(o.b)("p",{style:{textAlign:"center"}},Object(o.b)("video",{width:700,controls:"controls",autoPlay:!0},Object(o.b)("source",{type:"video/mp4",src:"https://reactnative.dev/img/homepage/ReactRefresh.mp4"}))),Object(o.b)("p",null,"Give it a try, and let us know what you think! If you prefer, you can turn it off in the Dev Menu (Cmd+D on iOS, Cmd+M or Ctrl+M on Android). Turning it on and off is instant so you can do it any time."),Object(o.b)("p",null,"Here are a few Fast Refresh tips:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fast Refresh preserves React local state in function components (and Hooks!) by default."),Object(o.b)("li",{parentName:"ul"},"If you need to reset the React state on every edit, you can add a special ",Object(o.b)("inlineCode",{parentName:"li"},"// @refresh reset")," comment to the file with that component."),Object(o.b)("li",{parentName:"ul"},"Fast Refresh always remounts class components without preserving state. This ensures it works reliably."),Object(o.b)("li",{parentName:"ul"},"We all make mistakes in the code! Fast Refresh automatically retries rendering after you save a file. You don't need to reload the app manually after fixing a syntax or a runtime error."),Object(o.b)("li",{parentName:"ul"},"Adding a ",Object(o.b)("inlineCode",{parentName:"li"},"console.log")," or a ",Object(o.b)("inlineCode",{parentName:"li"},"debugger")," statement during edits is a neat debugging technique.")),Object(o.b)("p",null,"Please report any issues with Fast Refresh on GitHub, and we\u2019ll look into them."),Object(o.b)("h2",{id:"other-improvements"},"Other Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Fixed use_frameworks! CocoaPods support.")," In 0.60 we made some updates to integrate CocoaPods by default. Unfortunately, this broke builds using ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://guides.cocoapods.org/syntax/podfile.html#use_frameworks_bang"}),"use_frameworks!"),". This is ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/25619"}),"fixed in 0.61"),", making it easier to integrate React Native into your iOS projects that require building with dynamic frameworks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add useWindowDimensions Hook.")," This new Hook automatically provides and subscribes to dimension updates, and can be used instead of the Dimensions API in most cases."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"React was upgraded to 16.9.")," This version deprecates old names for the UNSAFE","_"," lifecycle methods, contains improvements to ",Object(o.b)("inlineCode",{parentName:"li"},"act"),", and more. See the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/blog/2019/08/08/react-v16.9.0.html"}),"React 16.9 blog post")," for an automated migration script and more information.")),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Remove React .xcodeproj.")," In 0.60, we introduced auto-linking support via CocoaPods. We have also integrated CocoaPods into the e2e tests runs, so that from now on, we have a unified standard way of integrating RN into iOS apps. This effectively deprecates the React .xcodeproj support, and the file has been removed starting 0.61. Note: if you use 0.60 auto-linking already, you shouldn't be affected.")),Object(o.b)("h2",{id:"thanks"},"Thanks"),Object(o.b)("p",null,"Thanks to all of the contributors that helped make 0.61 possible!"),Object(o.b)("p",null,"To see all the updates, take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md"}),"0.61 changelog"),"."))}u.isMDXComponent=!0}}]);