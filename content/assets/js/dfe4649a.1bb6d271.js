"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,d=c["".concat(o,".").concat(m)]||c[m]||h[m]||n;return a?r.createElement(d,p(p({ref:t},s),{},{components:a})):r.createElement(d,p({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,p=new Array(n);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<n;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const n={id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"},p=void 0,i={unversionedId:"versioned/pulsar-2.5.2",id:"versioned/pulsar-2.5.2",title:"Apache Pulsar 2.5.2",description:"2020-05-19",source:"@site/release-notes/versioned/pulsar-2.5.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.5.2",permalink:"/release-notes/versioned/pulsar-2.5.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.5.2.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"}},o={},u=[{value:"2020-05-19",id:"2020-05-19",level:4},{value:"Fixes and Enhancements",id:"fixes-and-enhancements",level:4},{value:"Broker",id:"broker",level:5},{value:"Pulsar Schema",id:"pulsar-schema",level:5},{value:"Pulsar Functions",id:"pulsar-functions",level:5},{value:"Tiered Storage",id:"tiered-storage",level:5},{value:"Pulsar IO",id:"pulsar-io",level:5}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2020-05-19"},"2020-05-19"),(0,l.kt)("h4",{id:"fixes-and-enhancements"},"Fixes and Enhancements"),(0,l.kt)("h5",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Implement AutoTopicCreation by namespace level override\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6471"},"#6471")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add custom deletionLag and threshold for offload policies per namespace\xa0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6422"},"#6422")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Invalidate managed ledgers zookeeper cache instead of reloading on watcher triggered ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6659"},"#6659")," "),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Retention policy should be respected when there is no traffic\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6676"},"#6676")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fixed double delete on a namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6713"},"#6713")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," fix get batch message from http response, only get the first message",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6715"},"#6715")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix Deadlock by Consumer and Reader",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6728"},"#6728")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," avoid backpressure by skipping dispatching if consumer channel is not writable\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6740"},"#6740")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," fix when producing encrypted messages, MessageMetadata objects are not released after they are created. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6745"},"#6745")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Bump netty version to 4.1.48.Final ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6746"},"#6746")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Increase timeout for loading topics\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6750"},"#6750")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix wrong cursor state for cursor without consumer\xa0\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6766"},"#6766")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," change nondurable cursor to active to improve performance\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6769"},"#6769")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," register loadbalance znode should attempt to wait until session expired\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6788"},"#6788")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix some empty message related problems in the compacted topic.\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6795"},"#6795")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid creating partitioned topic for partition name\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6846"},"#6846")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add Tls with keystore type config support\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6853"},"#6853")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," fix consumer stuck when batchReceivePolicy maxNumMessages > maxReceiverQueueSize\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6862"},"#6862")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," use originalAuthMethod on originalAuthChecker in Proxy Authentication\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6870"},"#6870")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Close producer when the topic does not exists.\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6879"},"#6879")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Handle all exceptions from ",(0,l.kt)("inlineCode",{parentName:"li"},"topic.addProducer"),"\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6881"},"#6881")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," fix topicPublishRateLimiter not effective after restart broker\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6893"},"#6893")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer.\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6918"},"#6918")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Policy ttlDurationDefaultInSeconds not applying \xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6920"},"#6920")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix pulsar admin thread number explode bug. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6940"},"#6940"))),(0,l.kt)("h5",{id:"pulsar-schema"},"Pulsar Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Schema]"," Fix long field parse in GenricJsonRecord ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6622"},"#6622")," "),(0,l.kt)("li",{parentName:"ul"},"[Schema]"," Fix the leak of cursor reset if message encode fails in Avro schema.\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6695"},"#6695")," "),(0,l.kt)("li",{parentName:"ul"},"[Schema]"," fix Get schema by version can get the deleted schema info #6754\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6754"},"#6754")),(0,l.kt)("li",{parentName:"ul"},"[Schema]"," Fix serialization of enums with json/avro schemas in python ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6808"},"#6808")," "),(0,l.kt)("li",{parentName:"ul"},"[Schema]"," Pulsar SQL Support Avro Schema ",(0,l.kt)("inlineCode",{parentName:"li"},"ByteBuffer")," Type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6925"},"#6925")," ")),(0,l.kt)("h5",{id:"pulsar-functions"},"Pulsar Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Functions]"," Support function with format: ",(0,l.kt)("inlineCode",{parentName:"li"},"Function<I, CompletableFuture<O>>"),(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6684"},"#6684")),(0,l.kt)("li",{parentName:"ul"},"[Functions]"," Function endpoint admin/v3/functions/{tenant}/{namespace} always returns 404 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6767"},"#6767")),(0,l.kt)("li",{parentName:"ul"},"[Functions]"," Ensure that all dangling consumers are cleaned up during failures ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6778"},"#6778")),(0,l.kt)("li",{parentName:"ul"},"[Functions]"," Fix localrunner netty dependency issue\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6779"},"#6779")),(0,l.kt)("li",{parentName:"ul"},"[Functions]"," Fix SerDe validation of function's update ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6888"},"#6888"))),(0,l.kt)("h5",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]","  Extract common SerDe method in tiered storage to managed-ledger module\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6533"},"#6533")),(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]","  Make SchemaStorage accessible in Offloader\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6567"},"#6567")),(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]","  Avoid prefetch too much data causing OutOfMemory, when offloading data to HDFS\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6717"},"#6717"))),(0,l.kt)("h5",{id:"pulsar-io"},"Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[IO]"," JDBC sink does not handle null in schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6848"},"#6848"))))}c.isMDXComponent=!0}}]);