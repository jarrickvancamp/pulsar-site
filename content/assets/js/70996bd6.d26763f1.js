"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace"},l=void 0,o={unversionedId:"tutorials-namespace",id:"version-2.8.x/tutorials-namespace",title:"Create a namespace",description:"Pulsar namespaces are logical groupings of topics.",source:"@site/versioned_docs/version-2.8.x/tutorials-namespace.md",sourceDirName:".",slug:"/tutorials-namespace",permalink:"/docs/2.8.x/tutorials-namespace",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/tutorials-namespace.md",tags:[],version:"2.8.x",frontMatter:{Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Set up a tenant",permalink:"/docs/2.8.x/tutorials-tenant"},next:{title:"Create a topic",permalink:"/docs/2.8.x/tutorials-topic"}},i={},c=[{value:"Related Topics",id:"related-topics",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar namespaces are logical groupings of topics."),(0,n.kt)("p",null,"Namespaces can be managed via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The namespaces command of the pulsar-admin tool"),(0,n.kt)("li",{parentName:"ul"},"The /admin/v2/namespaces endpoint of the admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.kt)("li",{parentName:"ul"},"The namespaces method of the PulsarAdmin object in the Java API")),(0,n.kt)("p",null,"In this tutorial, we create a namespace called pulsar in the tenant apache. Then we list namespaces of tenant apache to see if the namespace is created successfully."),(0,n.kt)("p",null,"Create the namespace."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces create apache/pulsar\n")),(0,n.kt)("p",null,"Verify the namespace."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list apache\n")),(0,n.kt)("p",null,"You should see similar output to show the namespace apache/pulsar has been successfully created."),(0,n.kt)("h4",{id:"related-topics"},"Related Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-tenant"},"Set up a tenant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-topic"},"Create a topic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-produce-consume"},"Produce and consume messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/admin-api-clusters"},"Manage clusters"))))}u.isMDXComponent=!0}}]);