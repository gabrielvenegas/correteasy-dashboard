(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),h=a,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||r;return n?i.a.createElement(m,o(o({ref:t},p),{},{components:n})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(7),r=(n(0),n(1006)),l={id:"flexbox",title:"Layout with Flexbox"},o={unversionedId:"flexbox",id:"version-0.63/flexbox",isDocsHomePage:!1,title:"Layout with Flexbox",description:"A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout on different screen sizes.",source:"@site/versioned_docs/version-0.63/flexbox.md",slug:"/flexbox",permalink:"/docs/flexbox",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/flexbox.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Height and Width",permalink:"/docs/height-and-width"},next:{title:"Images",permalink:"/docs/images"}},c=[{value:"Flex",id:"flex",children:[]},{value:"Flex Direction",id:"flex-direction",children:[]},{value:"Layout Direction",id:"layout-direction",children:[]},{value:"Justify Content",id:"justify-content",children:[]},{value:"Align Items",id:"align-items",children:[]},{value:"Align Self",id:"align-self",children:[]},{value:"Align Content",id:"align-content",children:[]},{value:"Flex Wrap",id:"flex-wrap",children:[]},{value:"Flex Basis, Grow, and Shrink",id:"flex-basis-grow-and-shrink",children:[]},{value:"Width and Height",id:"width-and-height",children:[]},{value:"Absolute &amp; Relative Layout",id:"absolute--relative-layout",children:[]},{value:"Going Deeper",id:"going-deeper",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout on different screen sizes."),Object(r.b)("p",null,"You will normally use a combination of ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection"),", ",Object(r.b)("inlineCode",{parentName:"p"},"alignItems"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"justifyContent")," to achieve the right layout."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection")," defaulting to ",Object(r.b)("inlineCode",{parentName:"p"},"column")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"row"),", and the ",Object(r.b)("inlineCode",{parentName:"p"},"flex")," parameter only supporting a single number.")),Object(r.b)("h2",{id:"flex"},"Flex"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flex"}),Object(r.b)("inlineCode",{parentName:"a"},"flex"))," will define how your items are going to ",Object(r.b)("strong",{parentName:"p"},"\u201cfill\u201d")," over the available space along your main axis. Space will be divided according to each element's flex property."),Object(r.b)("p",null,"In the following example, the red, yellow, and green views are all children in the container view that has ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 1")," set. The red view uses ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 1")," , the yellow view uses ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 2"),", and the green view uses ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 3")," . ",Object(r.b)("strong",{parentName:"p"},"1+2+3 = 6"),", which means that the red view will get ",Object(r.b)("inlineCode",{parentName:"p"},"1/6")," of the space, the yellow ",Object(r.b)("inlineCode",{parentName:"p"},"2/6")," of the space, and the green ",Object(r.b)("inlineCode",{parentName:"p"},"3/6")," of the space."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png",alt:"Flex"}))),Object(r.b)("h2",{id:"flex-direction"},"Flex Direction"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flexdirection"}),Object(r.b)("inlineCode",{parentName:"a"},"flexDirection"))," controls the direction in which the children of a node are laid out. This is also referred to as the ",Object(r.b)("em",{parentName:"p"},"main axis"),". The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"row")," Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"column")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"row-reverse")," Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"column-reverse")," Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container."))),Object(r.b)("p",null,"You can learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/flex-direction"}),"here"),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Flex Direction","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FlexDirectionBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60flexDirection%60%20to%20%60column%60.%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20flexDirection%3A%20'row'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20FlexDirectionBasics%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*rA7IbuUsJWsx6evKAsabVw.png",alt:"Flex Direction"}))),Object(r.b)("h2",{id:"layout-direction"},"Layout Direction"),Object(r.b)("p",null,"Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge ",Object(r.b)("inlineCode",{parentName:"p"},"start")," and ",Object(r.b)("inlineCode",{parentName:"p"},"end")," refer to. By default, React Native lays out with LTR layout direction. In this mode ",Object(r.b)("inlineCode",{parentName:"p"},"start")," refers to left and ",Object(r.b)("inlineCode",{parentName:"p"},"end")," refers to right."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"LTR")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") Text and children are laid out from left to right. Margin and padding applied to the start of an element are applied on the left side.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RTL")," Text and children are laid out from right to left. Margin and padding applied to the start of an element are applied on the right side."))),Object(r.b)("h2",{id:"justify-content"},"Justify Content"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#justifycontent"}),Object(r.b)("inlineCode",{parentName:"a"},"justifyContent"))," describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"row")," or vertically within a container with ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"column"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-start"),"(",Object(r.b)("strong",{parentName:"p"},"default value"),") Align children of a container to the start of the container's main axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-end")," Align children of a container to the end of the container's main axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"center")," Align children of a container in the center of the container's main axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"space-between")," Evenly space off children across the container's main axis, distributing the remaining space between the children.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"space-around")," Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to ",Object(r.b)("inlineCode",{parentName:"p"},"space-between"),", using ",Object(r.b)("inlineCode",{parentName:"p"},"space-around")," will result in space being distributed to the beginning of the first child and end of the last child.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"space-evenly")," Evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same."))),Object(r.b)("p",null,"You can learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/justify-content"}),"here"),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Justify Content","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20JustifyContentBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60justifyContent%60%20to%20%60center%60.%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60flexDirection%60%20to%20%60row%60.%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20flexDirection%3A%20'column'%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20JustifyContentBasics%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*i5TVlme-TisAVvD5ax2yPA.png",alt:"Justify Content"}))),Object(r.b)("h2",{id:"align-items"},"Align Items"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#alignitems"}),Object(r.b)("inlineCode",{parentName:"a"},"alignItems"))," describes how to align children along the cross axis of their container. Align items is very similar to ",Object(r.b)("inlineCode",{parentName:"p"},"justifyContent")," but instead of applying to the main axis, ",Object(r.b)("inlineCode",{parentName:"p"},"alignItems")," applies to the cross axis."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"stretch")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") Stretch children of a container to match the ",Object(r.b)("inlineCode",{parentName:"p"},"height")," of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-start")," Align children of a container to the start of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-end")," Align children of a container to the end of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"center")," Align children of a container in the center of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"baseline")," Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For ",Object(r.b)("inlineCode",{parentName:"p"},"stretch")," to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting ",Object(r.b)("inlineCode",{parentName:"p"},"alignItems: stretch")," does nothing until the ",Object(r.b)("inlineCode",{parentName:"p"},"width: 50")," is removed from the children.")),Object(r.b)("p",null,"You can learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/align-items"}),"here"),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Align Items","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20AlignItemsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60alignItems%60%20to%20'flex-start'%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60justifyContent%60%20to%20%60flex-end%60.%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60flexDirection%60%20to%20%60row%60.%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20flexDirection%3A%20'column'%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20'stretch'%2C%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bheight%3A%2050%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bheight%3A%20100%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20AlignItemsBasics%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*evkM7zfxt-9p-HJ1M0Bh2g.png",alt:"Align Items"}))),Object(r.b)("h2",{id:"align-self"},"Align Self"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#alignself"}),Object(r.b)("inlineCode",{parentName:"a"},"alignSelf"))," has the same options and effect as ",Object(r.b)("inlineCode",{parentName:"p"},"alignItems")," but instead of affecting the children within a container, you can apply this property to a single child to change its alignment within its parent. ",Object(r.b)("inlineCode",{parentName:"p"},"alignSelf")," overrides any option set by the parent with ",Object(r.b)("inlineCode",{parentName:"p"},"alignItems"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*J1JCoKwLCokX9JXVBvP71g.png",alt:"Align Self"}))),Object(r.b)("h2",{id:"align-content"},"Align Content"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#aligncontent"}),"alignContent")," defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using ",Object(r.b)("inlineCode",{parentName:"p"},"flexWrap"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-start")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") Align wrapped lines to the start of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flex-end")," Align wrapped lines to the end of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"stretch")," Stretch wrapped lines to match the height of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"center")," Align wrapped lines in the center of the container's cross axis.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"space-between")," Evenly space wrapped lines across the container's main axis, distributing the remaining space between the lines.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"space-around")," Evenly space wrapped lines across the container's main axis, distributing the remaining space around the lines. Compared to ",Object(r.b)("inlineCode",{parentName:"p"},"space-between"),", using ",Object(r.b)("inlineCode",{parentName:"p"},"space-around")," will result in space being distributed to the beginning of the first line and the end of the last line."))),Object(r.b)("p",null,"You can learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/align-content"}),"here"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*cC2XFyCF_igp20Ombt4wBw.png",alt:"Align Content"}))),Object(r.b)("h2",{id:"flex-wrap"},"Flex Wrap"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flexwrap"}),Object(r.b)("inlineCode",{parentName:"a"},"flexWrap"))," property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed."),Object(r.b)("p",null,"When wrapping lines, ",Object(r.b)("inlineCode",{parentName:"p"},"alignContent")," can be used to specify how the lines are placed in the container. Learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/flex-wrap"}),"here"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*_7v4uQhSsuCn1cfeOMVfrA.png",alt:"Flex Wrap"}))),Object(r.b)("h2",{id:"flex-basis-grow-and-shrink"},"Flex Basis, Grow, and Shrink"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flexgrow"}),Object(r.b)("inlineCode",{parentName:"a"},"flexGrow"))," describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children."),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flexGrow")," accepts any floating point value >= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"flexGrow")," values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flexshrink"}),Object(r.b)("inlineCode",{parentName:"a"},"flexShrink"))," describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. ",Object(r.b)("inlineCode",{parentName:"p"},"flexShrink")," is very similar to ",Object(r.b)("inlineCode",{parentName:"p"},"flexGrow")," and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed."),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"flexShrink")," accepts any floating point value >= 0, with 1 being the default value. A container will shrink its children weighted by the children\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"flexShrink")," values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"layout-props#flexbasis"}),Object(r.b)("inlineCode",{parentName:"a"},"flexBasis"))," is an axis-independent way of providing the default size of an item along the main axis. Setting the ",Object(r.b)("inlineCode",{parentName:"p"},"flexBasis")," of a child is similar to setting the ",Object(r.b)("inlineCode",{parentName:"p"},"width")," of that child if its parent is a container with ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection: row")," or setting the ",Object(r.b)("inlineCode",{parentName:"p"},"height")," of a child if its parent is a container with ",Object(r.b)("inlineCode",{parentName:"p"},"flexDirection: column"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"flexBasis")," of an item is the default size of that item, the size of the item before any ",Object(r.b)("inlineCode",{parentName:"p"},"flexGrow")," and ",Object(r.b)("inlineCode",{parentName:"p"},"flexShrink")," calculations are performed."))),Object(r.b)("p",null,"You can learn more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/flex"}),"here"),"."),Object(r.b)("h2",{id:"width-and-height"},"Width and Height"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"width")," property specifies the width of an element's content area. Similarly, the ",Object(r.b)("inlineCode",{parentName:"p"},"height")," property specifies the height of an element's content area."),Object(r.b)("p",null,"Both ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," can take the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"auto")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") React Native calculates the width/height for the element based on its content, whether that is other children, text, or an image.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"pixels")," Defines the width/height in absolute pixels. Depending on other styles set on the component, this may or may not be the final dimension of the node.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"percentage")," Defines the width or height in percentage of its parent's width or height, respectively."))),Object(r.b)("h2",{id:"absolute--relative-layout"},"Absolute & Relative Layout"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"position")," type of an element defines how it is positioned within its parent."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"relative")," (",Object(r.b)("strong",{parentName:"p"},"default value"),") By default, an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of ",Object(r.b)("inlineCode",{parentName:"p"},"top"),", ",Object(r.b)("inlineCode",{parentName:"p"},"right"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bottom"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"left"),". The offset does not affect the position of any sibling or parent elements.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"absolute")," When positioned absolutely, an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the ",Object(r.b)("inlineCode",{parentName:"p"},"top"),", ",Object(r.b)("inlineCode",{parentName:"p"},"right"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bottom"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"left")," values."))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*NlPeRQCQK3Vb5nyjL0Mqxw.png",alt:"Absolute & Relative Layoutp"}))),Object(r.b)("h2",{id:"going-deeper"},"Going Deeper"),Object(r.b)("p",null,"Check out the interactive ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/playground"}),"yoga playground")," that you can use to get a better understanding of flexbox."),Object(r.b)("p",null,"We've covered the basics, but there are many other styles you may need for layouts. The full list of props that control layout is documented ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/layout-props"}),"here"),"."),Object(r.b)("p",null,"Additionally, you can see some examples from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c"}),"Wix Engineers"),"."))}b.isMDXComponent=!0}}]);