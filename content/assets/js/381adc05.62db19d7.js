"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),h=s(a),m=l,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(k,i(i({ref:t},o),{},{components:a})):r.createElement(k,i({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=m;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n[h]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.7.1",title:"Apache Pulsar 2.7.1",sidebar_label:"Apache Pulsar 2.7.1"},i=void 0,n={unversionedId:"versioned/pulsar-2.7.1",id:"versioned/pulsar-2.7.1",title:"Apache Pulsar 2.7.1",description:"2021-03-18",source:"@site/release-notes/versioned/pulsar-2.7.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.1",permalink:"/release-notes/versioned/pulsar-2.7.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.1.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.1",title:"Apache Pulsar 2.7.1",sidebar_label:"Apache Pulsar 2.7.1"}},u={},s=[{value:"2021-03-18",id:"2021-03-18",level:4},{value:"Broker",id:"broker",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar Perf",id:"pulsar-perf",level:4},{value:"Transaction",id:"transaction",level:4},{value:"Pulsar Admin",id:"pulsar-admin",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Function",id:"function",level:4},{value:"Pulsar IO",id:"pulsar-io",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4}],o={toc:s};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2021-03-18"},"2021-03-18"),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix topic ownership is not checked when getting topic policy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9781"},"#9781")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue of consumers cannot be created for older subscriptions if the limit of ",(0,l.kt)("inlineCode",{parentName:"li"},"maxSubscriptionsPerTopic")," is reached ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9758"},"#9758")),(0,l.kt)("li",{parentName:"ul"},"Fix marking individual deletes as dirty ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9732"},"#9732")),(0,l.kt)("li",{parentName:"ul"},"Fix broker-address header added when response has already been committed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9744"},"#9744")),(0,l.kt)("li",{parentName:"ul"},"Fix ByteBuffer allocate error in the AirliftUtils ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9667"},"#9667")),(0,l.kt)("li",{parentName:"ul"},"Use Atomic Field Updater to increment volatile messagesConsumedCounter ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9656"},"#9656")),(0,l.kt)("li",{parentName:"ul"},"Schema comparison logic change ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9612"},"#9612")),(0,l.kt)("li",{parentName:"ul"},"Add metrics for the cursor ack state ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9618"},"#9618")),(0,l.kt)("li",{parentName:"ul"},"Fix race condition in BrokerService topic cache ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9565"},"#9565")),(0,l.kt)("li",{parentName:"ul"},"Avoid introducing bookkeeper-common into the pulsar-common ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9551"},"#9551")),(0,l.kt)("li",{parentName:"ul"},"Async read entries with max size bytes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9532"},"#9532")),(0,l.kt)("li",{parentName:"ul"},"Fix the metric data of msgDelayed for partitioned topics is not aggregated ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9529"},"#9529")),(0,l.kt)("li",{parentName:"ul"},"Fix the batch index ack persistent issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9504"},"#9504")),(0,l.kt)("li",{parentName:"ul"},"Fix logic in ManagedLedgerWriter when config threadNum >= ledgerNum ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9497"},"#9479")),(0,l.kt)("li",{parentName:"ul"},"Do not use a static map of listeners in TopicPoliciesService ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/94861"},"#9486")),(0,l.kt)("li",{parentName:"ul"},"Makes subscription start from MessageId.latest as default ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9444"},"#9444")),(0,l.kt)("li",{parentName:"ul"},"Fix setting backlogQuota will always succeed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9382"},"#9382")),(0,l.kt)("li",{parentName:"ul"},"Skip clear delayed messages while dispatch does not init ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9378"},"#9378")),(0,l.kt)("li",{parentName:"ul"},"Expose offloaded storage size to the topic stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9335"},"#9335")),(0,l.kt)("li",{parentName:"ul"},"Expose more info with unknown exception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9323"},"#9323")),(0,l.kt)("li",{parentName:"ul"},"Add alerts for expired/expiring soon tokens ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9321"},"#9321")),(0,l.kt)("li",{parentName:"ul"},"Fix fake complete issue in offloading ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9306"},"#9306")),(0,l.kt)("li",{parentName:"ul"},"Fix system topic can not auto created ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9272"},"#9272")),(0,l.kt)("li",{parentName:"ul"},"Fix BookkeeperSchemaStorage NPE ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9264"},"#9264")),(0,l.kt)("li",{parentName:"ul"},"Fix race condition on producer/consumer maps in ServerCnx ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9256"},"#9256")),(0,l.kt)("li",{parentName:"ul"},"Fix interceptor disabled in ResponseHandlerFilter.java ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9252"},"#9252")),(0,l.kt)("li",{parentName:"ul"},"Fix the interceptor that not handle boundary for multipart/form-data ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9247"},"#9247")),(0,l.kt)("li",{parentName:"ul"},"Add authentication metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9244"},"#9244")),(0,l.kt)("li",{parentName:"ul"},"Handle web application exception to redirect request ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9228"},"#9228")),(0,l.kt)("li",{parentName:"ul"},"Skip the interceptor for MediaType.MULTIPART_FORM_DATA ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9217"},"#9217")),(0,l.kt)("li",{parentName:"ul"},"Keep topic-level policies commands consistent with that for namespace level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9215"},"#9215")),(0,l.kt)("li",{parentName:"ul"},"Fix handle topic loading failure due to broken schema ledger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9212"},"#9212")),(0,l.kt)("li",{parentName:"ul"},"Fix issue with topic compaction when compaction ledger is empty ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9206"},"#9206")),(0,l.kt)("li",{parentName:"ul"},"Fix incoming message size issue that introduced in #9113 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9182"},"#9182")),(0,l.kt)("li",{parentName:"ul"},"Disallow parsing of token with none signature in authenticateToken ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9172"},"#9172")),(0,l.kt)("li",{parentName:"ul"},"Fix locking for ConsumerImpl when creating deadLetterProducer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9166"},"#9166")),(0,l.kt)("li",{parentName:"ul"},"Fix maxProducersPerTopic cannot be disabled at the namespace level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9157"},"#9157")),(0,l.kt)("li",{parentName:"ul"},"Fix wrong default value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9149"},"#9149")),(0,l.kt)("li",{parentName:"ul"},"Fix the closed ledger did not delete after expired ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9136"},"#9136")),(0,l.kt)("li",{parentName:"ul"},"Additional error checks in TwoPhasesCompactor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9133"},"#9133")),(0,l.kt)("li",{parentName:"ul"},"Fix master broker while subscribing to non-persistent partitioned topics without topic auto-creation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9107"},"#9107")),(0,l.kt)("li",{parentName:"ul"},"Support chained authentication with same auth method name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9094"},"#9094")),(0,l.kt)("li",{parentName:"ul"},"Broker expires messages one at a time after topic unload ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9083"},"#9083")),(0,l.kt)("li",{parentName:"ul"},"Add refresh authentication command in broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9064"},"#9064")),(0,l.kt)("li",{parentName:"ul"},"Add updateRates method for kop to collect publish rate ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9049"},"#9094")),(0,l.kt)("li",{parentName:"ul"},"Fix DelayedDelivery at the broker level has a default value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9030"},"#9030")),(0,l.kt)("li",{parentName:"ul"},"Getting the stats of a non-persistent topic that has been cleaned causes it to re-appear ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9029"},"#9029")),(0,l.kt)("li",{parentName:"ul"},"Add raw Prometheus metrics provider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9021"},"#9021")),(0,l.kt)("li",{parentName:"ul"},"Improve error handling when broker doesn't trust client certificates ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8998"},"#8998")),(0,l.kt)("li",{parentName:"ul"},"Remove duplicated broker Prometheus metrics type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8995"},"8995")),(0,l.kt)("li",{parentName:"ul"},"Peeking at compressed messages throws an exception (Readonly buffers not supported by Airlift) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8990"},"#8990")),(0,l.kt)("li",{parentName:"ul"},"Make namespaces isolation policy updates take effect on time ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8976"},"#8976")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE in PersistentStickyKeyDispatcherMultipleConsumers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8969"},"#8969")),(0,l.kt)("li",{parentName:"ul"},"Fix the recovery not respect to the isolation group settings ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8961"},"#8961")),(0,l.kt)("li",{parentName:"ul"},"Add properties default value for SchemaInfoBuilder ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8952"},"#8952")),(0,l.kt)("li",{parentName:"ul"},"Consumer support update stats with specified stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8951"},"#8951")),(0,l.kt)("li",{parentName:"ul"},"Support configure max subscriptions per topic on the topic level policy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8948"},"#8948")),(0,l.kt)("li",{parentName:"ul"},"Fix subscription dispatch rate does not work after the topic unload without dispatch rate limit ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8947"},"#8947")),(0,l.kt)("li",{parentName:"ul"},"Avro custom schema not working in consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8939"},"#8939")),(0,l.kt)("li",{parentName:"ul"},"Expose non-contiguous deleted messages ranges stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8936"},"#8936")),(0,l.kt)("li",{parentName:"ul"},"Intercept beforeSendMessage calls ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8932"},"#8932")),(0,l.kt)("li",{parentName:"ul"},"Monitor if a cursor moves its mark-delete position ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8930"},"#8930")),(0,l.kt)("li",{parentName:"ul"},"Capture stats with precise backlog ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8928"},"#8928")),(0,l.kt)("li",{parentName:"ul"},"Support configure max subscriptions per topic on the namespace level policy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8924"},"#8924")),(0,l.kt)("li",{parentName:"ul"},"Export Prometheus metric for messageTTL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8871"},"#8871")),(0,l.kt)("li",{parentName:"ul"},"Add pulsar-perf new feature: one subscription has more than one consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8837"},"#8837")),(0,l.kt)("li",{parentName:"ul"},"Execute removing non-persistent subscription of a topic from a different thread to avoid deadlock when removing inactive subscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8820"},"#8820")),(0,l.kt)("li",{parentName:"ul"},"Fix get partition metadata problem for a non-existed topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8818"},"#8818")),(0,l.kt)("li",{parentName:"ul"},"Fix the problem that batchMessageId is converted to messageIdImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8779"},"#8779")),(0,l.kt)("li",{parentName:"ul"},"Clear delayed messages when clear backlog ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8691"},"#8691")),(0,l.kt)("li",{parentName:"ul"},"Fixes first automatic compaction issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8209"},"#8209"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix Proxy Config bindAddress does not working for servicePort ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9068"},"#9068")),(0,l.kt)("li",{parentName:"ul"},"Return correct authz and auth errors from proxy to client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9055"},"#9055")),(0,l.kt)("li",{parentName:"ul"},"Fix the metadata setup compatibility issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8959"},"#8959")),(0,l.kt)("li",{parentName:"ul"},"Support HAProxy proxy protocol for broker and proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8686"},"#8686"))),(0,l.kt)("h4",{id:"pulsar-perf"},"Pulsar Perf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dump JVM information ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9769"},"#9769")),(0,l.kt)("li",{parentName:"ul"},"pulsar-perf uses DefaultCryptoKeyReader for E2E encryption  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9668"},"#9668")),(0,l.kt)("li",{parentName:"ul"},"Add --batch-index-ack for the pulsar-perf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9521"},"#9521"))),(0,l.kt)("h4",{id:"transaction"},"Transaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix deleteTransactionMarker memory leak ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9752"},"#9752")),(0,l.kt)("li",{parentName:"ul"},"Fix transaction messages order error and deduplication error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9024"},"#9024")),(0,l.kt)("li",{parentName:"ul"},"Fix transaction log replay not handle right ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8723"},"#8723"))),(0,l.kt)("h4",{id:"pulsar-admin"},"Pulsar Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Validate offload param ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9737"},"#9737")),(0,l.kt)("li",{parentName:"ul"},"Inform user when expiring message request is not executed. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9561"},"#9561")),(0,l.kt)("li",{parentName:"ul"},"Fix get-message-by-id throwing NPE when message is null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9537"},"#9537")),(0,l.kt)("li",{parentName:"ul"},"Expire message by position ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9519"},"#9519")),(0,l.kt)("li",{parentName:"ul"},"Add subscription backlog size info for topicstats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9302"},"#9302")),(0,l.kt)("li",{parentName:"ul"},"Expose schema ledger in ",(0,l.kt)("inlineCode",{parentName:"li"},"topic stats-internal")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9284"},"#9284")),(0,l.kt)("li",{parentName:"ul"},"Fix potential HTTP get hangs in the Pulsar Admin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9203"},"#9203")),(0,l.kt)("li",{parentName:"ul"},"Fix admin-api-brokers list failed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9191"},"#9191")),(0,l.kt)("li",{parentName:"ul"},"Fix force delete namespace did not delete all topics of the namespace ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8806"},"#8806")),(0,l.kt)("li",{parentName:"ul"},"Change method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWebServiceUrl")," into async ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8746"},"#8746")),(0,l.kt)("li",{parentName:"ul"},"Fix cannot get lastMessageId for an empty topic due to message retention ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8725"},"#8725"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Duplicate key ",(0,l.kt)("inlineCode",{parentName:"li"},"__pfn_input_topic__")," in presto server ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9686"},"#9686")),(0,l.kt)("li",{parentName:"ul"},"Pulsar sql key-value schema separated model support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9685"},"#9685")),(0,l.kt)("li",{parentName:"ul"},"Fix OffloadPolicies json serialization error in Pulsar SQL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9300"},"#9300"))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add downloadDirectory support to function k8s runtime ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9619"},"#9619")),(0,l.kt)("li",{parentName:"ul"},"Kubernetes runtime functions create rfc1123 compliant labels ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9556"},"#9556")),(0,l.kt)("li",{parentName:"ul"},"Fix can't create functions with m-TLS ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9553"},"#9553")),(0,l.kt)("li",{parentName:"ul"},"Fix reading metrics will always get stuck in some cases ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9538"},"#9538")),(0,l.kt)("li",{parentName:"ul"},"Call the corresponding restart according to the componentype ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9519"},"#9519")),(0,l.kt)("li",{parentName:"ul"},"Fix narExtractionDirectory not set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9319"},"#9319")),(0,l.kt)("li",{parentName:"ul"},"Fix java function logging appender not added to java function logger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9299"},"#9299")),(0,l.kt)("li",{parentName:"ul"},"Fix don't attempt to clean up packages when Source/Sink is builtin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9289"},"#9289")),(0,l.kt)("li",{parentName:"ul"},"Fix function worker get superuser role ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9259"},"#9259")),(0,l.kt)("li",{parentName:"ul"},"Fix broker and functions-worker authentication compatibility ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9190"},"#9190")),(0,l.kt)("li",{parentName:"ul"},"Splitting the authentication logic of function worker and client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8824"},"#8824")),(0,l.kt)("li",{parentName:"ul"},"[Go]"," Fix metrics server handler error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9394"},"#9394")),(0,l.kt)("li",{parentName:"ul"},"[Go]"," Add metrics server to go function ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9318"},"#9318")),(0,l.kt)("li",{parentName:"ul"},"[Go]"," Fix publishfunc example is broken ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9124"},"#9124"))),(0,l.kt)("h4",{id:"pulsar-io"},"Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add option for auto.offset.reset to kafka source ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9482"},"#9482")),(0,l.kt)("li",{parentName:"ul"},"Fix debezium-connector error log ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9063"},"#9063")),(0,l.kt)("li",{parentName:"ul"},"Fix NSQ source META-INF file name and sourceConfigClass ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8941"},"#8941")),(0,l.kt)("li",{parentName:"ul"},"Make Source topic Schema information available to downstream Sinks ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8854"},"#8854"))),(0,l.kt)("h4",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow AWS credentials to be refreshed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9387"},"#9387")),(0,l.kt)("li",{parentName:"ul"},"Offload manager initialization once ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8739"},"#8739")),(0,l.kt)("li",{parentName:"ul"},"Configurable data source for offloaded messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8717"},"#8717"))))}h.isMDXComponent=!0}}]);