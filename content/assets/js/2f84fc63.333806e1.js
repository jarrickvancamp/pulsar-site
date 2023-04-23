"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"transactions-guarantee",title:"Transactions Guarantee",sidebar_label:"Transactions Guarantee",original_id:"transactions-guarantee"},o=void 0,s={unversionedId:"transactions-guarantee",id:"version-2.7.0/transactions-guarantee",title:"Transactions Guarantee",description:"Pulsar transactions support the following guarantee.",source:"@site/versioned_docs/version-2.7.0/transactions-guarantee.md",sourceDirName:".",slug:"/transactions-guarantee",permalink:"/docs/2.7.0/transactions-guarantee",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/transactions-guarantee.md",tags:[],version:"2.7.0",frontMatter:{id:"transactions-guarantee",title:"Transactions Guarantee",sidebar_label:"Transactions Guarantee",original_id:"transactions-guarantee"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.7.0/transactions"},next:{title:"Transactions API",permalink:"/docs/2.7.0/transactions-api"}},c={},l=[{value:"Atomic multi-partition writes and multi-subscription acknowledges",id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges",level:2},{value:"Read transactional message",id:"read-transactional-message",level:2},{value:"Acknowledge transactional message",id:"acknowledge-transactional-message",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar transactions support the following guarantee."),(0,r.kt)("h2",{id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges"},"Atomic multi-partition writes and multi-subscription acknowledges"),(0,r.kt)("p",null,"Transactions enable atomic writes to multiple topics and partitions. A batch of messages in a transaction can be received from, produced to, and acknowledged by many partitions. All the operations involved in a transaction succeed or fail as a single unit."),(0,r.kt)("h2",{id:"read-transactional-message"},"Read transactional message"),(0,r.kt)("p",null,"All the messages in a transaction are available only for consumers until the transaction is committed."),(0,r.kt)("h2",{id:"acknowledge-transactional-message"},"Acknowledge transactional message"),(0,r.kt)("p",null,"A message is acknowledged successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."))}p.isMDXComponent=!0}}]);