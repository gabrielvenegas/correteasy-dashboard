(self.webpackJsonp=self.webpackJsonp||[]).push([[17],{1144:function(e,t,n){"use strict";n.r(t);n(27),n(19),n(303),n(322),n(25);var s=n(957),o=n(958),r=n(319),a=n.n(r),i=n(693);const l=["asyncGenerators","bigInt","classProperties","classPrivateProperties","classPrivateMethods",["decorators",{decoratorsBeforeExport:!0}],"doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importMeta","logicalAssignment","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining",["pipelineOperator",{proposal:"minimal"}],"throwExpressions"],c=e=>(null==e?void 0:e[0])&&/^\s*((\d+\.)?(\d+\.)?(\*|\d+))|(LATEST)\s*$/.test(e[0].value)?e[0].value.trim():null,u=e=>{if("string"!=typeof e)return!1;const t=/^(?:@([^/?]+)\/)?([^@/?]+)(?:\/([^@]+))?/.exec(e),n=t?(t[1]?"@".concat(t[1],"/"):"")+t[2]:null;return a()(n).validForOldPackages},p=e=>{let t;if("CallExpression"===e.node.type){const n=e.parentPath;t="VariableDeclarator"===n.node.type?n.parentPath.node:n.node}else t=e.node;t.comments=t.comments||[],t.comments=t.comments.filter(e=>!("CommentLine"===e.type&&e.trailing))};t.default=(e,t,n=!1)=>{const r=[...l];"typescript"===Object(i.a)(t)?(r.push("typescript"),t.endsWith(".tsx")&&r.push("jsx")):r.push("flow","jsx");const a={parse:e=>s.parse(e,{sourceType:"module",sourceFilename:t,allowImportExportEverywhere:!0,allowReturnOutsideFunction:!0,tokens:!0,plugins:r})},d={},m=Object(o.parse)(e,{parser:a}),v=e=>{const s=e.node.source&&e.node.source.value;if(s){const o=c(e.node.trailingComments);n&&p(e),d[s]={isPackage:u(s),version:null!=o?o:void 0,location:e.node.source.loc?{fileName:t,startLineNumber:e.node.source.loc.start.line,startColumn:e.node.source.loc.start.column+1,endLineNumber:e.node.source.loc.end.line,endColumn:e.node.source.loc.end.column+1}:void 0}}};try{o.types.visit(m,{visitImportDeclaration(e){v(e),this.traverse(e)},visitExportNamedDeclaration(e){v(e),this.traverse(e)},visitExportAllDeclaration(e){v(e),this.traverse(e)},visitCallExpression(e){(e=>{const s=e.node,o=s.callee,r=s.arguments;let a;if("require"===o.name&&1===r.length&&("Literal"===r[0].type||"StringLiteral"===r[0].type?a=r[0].value:"TemplateLiteral"===r[0].type&&1===r[0].quasis.length&&(a=r[0].quasis[0].value.cooked)),a){var i;const s=c(r[0]&&r[0].trailingComments||e.parentPath.parentPath.node.trailingComments);n&&p(e);const o=(null===(i=e.node.source)||void 0===i?void 0:i.loc)||e.node.loc;d[a]={isPackage:u(a),version:null!=s?s:void 0,location:o?{fileName:t,startLineNumber:o.start.line,startColumn:o.start.column+1,endLineNumber:o.end.line,endColumn:o.end.column+1}:void 0}}})(e),this.traverse(e)}})}catch(e){}return d}},693:function(e,t,n){"use strict";n(92),n(93),n(89);t.a=function(e){if(e.includes("."))switch(e.split(".").pop()){case"js":return"javascript";case"ts":case"tsx":return"typescript";case"json":return"json";case"css":return"css";case"html":return"html";case"md":return"markdown";default:return}}},959:function(e,t){}}]);