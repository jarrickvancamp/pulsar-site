"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},s=void 0,i={unversionedId:"sql-overview",id:"version-2.2.0/sql-overview",title:"Pulsar SQL Overview",description:"One of the common use cases of Pulsar is storing streams of event data. Often the event data is structured which predefined fields.  There is tremendous value for users to be able to query the existing data that is already stored in Pulsar topics.  With the implementation of the Schema Registry, structured data can be stored in Pulsar and allows for the potential to query that data via SQL language.",source:"@site/versioned_docs/version-2.2.0/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/docs/2.2.0/sql-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/sql-overview.md",tags:[],version:"2.2.0",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Develop",permalink:"/docs/2.2.0/io-develop"},next:{title:"Getting Started",permalink:"/docs/2.2.0/sql-getting-started"}},l={},c=[{value:"Performance",id:"performance",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the common use cases of Pulsar is storing streams of event data. Often the event data is structured which predefined fields.  There is tremendous value for users to be able to query the existing data that is already stored in Pulsar topics.  With the implementation of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/concepts-schema-registry"},"Schema Registry"),", structured data can be stored in Pulsar and allows for the potential to query that data via SQL language."),(0,n.kt)("p",null,"By leveraging ",(0,n.kt)("a",{parentName:"p",href:"https://prestosql.io/"},"Presto"),", we have created a method for users to be able to query structured data stored within Pulsar in a very efficient and scalable manner. We will discuss why this very efficient and scalable in the ",(0,n.kt)("a",{parentName:"p",href:"#performance"},"Performance")," section below."),(0,n.kt)("p",null,"At the core of this Pulsar SQL is the Presto Pulsar connector which allows Presto workers within a Presto cluster to query data from Pulsar."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:r(35478).Z,width:"1847",height:"854"})),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"The reason why query performance is very efficient and highly scalable because of Pulsar's ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/concepts-architecture-overview#apache-bookkeeper"},"two level segment based architecture"),"."),(0,n.kt)("p",null,"Topics in Pulsar are stored as segments in ",(0,n.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache Bookkeeper"),". Each topic segment is also replicated to a configurable (default 3) number of Bookkeeper nodes which allows for concurrent reads and high read throughput. In the Presto Pulsar connector, we read data directly from Bookkeeper to take advantage of the Pulsar's segment based architecture.  Thus, Presto workers can read concurrently from horizontally scalable number bookkeeper nodes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:r(50623).Z,width:"1847",height:"854"})))}d.isMDXComponent=!0},50623:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},35478:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);