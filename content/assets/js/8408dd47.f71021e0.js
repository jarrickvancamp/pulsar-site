"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74352],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,g=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return t?r.createElement(g,p(p({ref:a},u),{},{components:t})):r.createElement(g,p({ref:a},u))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=m;var n={};for(var o in a)hasOwnProperty.call(a,o)&&(n[o]=a[o]);n.originalType=e,n[c]="string"==typeof e?e:l,p[1]=n;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73551:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var r=t(58168),l=(t(96540),t(15680));const i={id:"pulsar-3.0.5",title:"Apache Pulsar 3.0.5",sidebar_label:"Apache Pulsar 3.0.5"},p=void 0,n={unversionedId:"versioned/pulsar-3.0.5",id:"versioned/pulsar-3.0.5",title:"Apache Pulsar 3.0.5",description:"2024-05-17",source:"@site/release-notes/versioned/pulsar-3.0.5.md",sourceDirName:"versioned",slug:"/versioned/pulsar-3.0.5",permalink:"/release-notes/versioned/pulsar-3.0.5",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-3.0.5.md",tags:[],version:"current",frontMatter:{id:"pulsar-3.0.5",title:"Apache Pulsar 3.0.5",sidebar_label:"Apache Pulsar 3.0.5"}},o={},s=[{value:"2024-05-17",id:"2024-05-17",level:4},{value:"Broker",id:"broker",level:3},{value:"Client",id:"client",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Others",id:"others",level:3},{value:"Library updates",id:"library-updates",level:3},{value:"Tests &amp; CI",id:"tests--ci",level:3}],u={toc:s},c="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h4",{id:"2024-05-17"},"2024-05-17"),(0,l.yg)("h3",{id:"broker"},"Broker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix force delete subscription not working (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22423"},"#22423"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Avoid being stuck when closing the broker with extensible load manager (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22573"},"#22573"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Create new ledger after the current ledger is closed (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22034"},"#22034"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Disable system topic message deduplication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22582"},"#22582"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix BufferOverflowException and EOFException bugs in /metrics gzip compression (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22576"},"#22576"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE causing dispatching to stop when using Key_Shared mode and allowOutOfOrderDelivery=true (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22533"},"#22533"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix ProducerBusy issue due to incorrect userCreatedProducerCount on non-persistent topic (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22685"},"#22685"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix a deadlock in SystemTopicBasedTopicPoliciesService during NamespaceEventsSystemTopicFactory init (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22528"},"#22528"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix broken topic policy implementation compatibility with old pulsar version (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22535"},"#22535"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix configurationMetadataSyncEventTopic is marked supporting dynamic setting, but not implemented  (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22684"},"#22684"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix consumer stops receiving messages when with large backlogs processing (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22454"},"#22454"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix invalid condition in logging exceptions (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22412"},"#22412"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix message drop record in producer stat (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22458"},"#22458"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix metrics pulsar_topic_load_failed_count is 0 when load non-persistent topic fails and fix the flaky test testBrokerStatsTopicLoadFailed (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22580"},"#22580"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix nothing changed after removing dynamic configs (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22673"},"#22673"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix typos in Consumer class (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22532"},"#22532"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix typos lister -> listener (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21068"},"#21068"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," One topic can be closed multiple times concurrently (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17524"},"#17524"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Optimize /metrics, fix unbounded request queue issue and fix race conditions in metricsBufferResponse mode (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22494"},"#22494"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Part-1: Replicator can not created successfully due to an orphan replicator in the previous topic owner (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21946"},"#21946"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Part-2: Replicator can not created successfully due to an orphan replicator in the previous topic owner (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21948"},"#21948"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Prevent long deduplication cursor backlog so that topic loading wouldn't timeout (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22479"},"#22479"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Reader stuck after call hasMessageAvailable when enable replicateSubscriptionState (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22572"},"#22572"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Skip topic.close during unloading if the topic future fails with ownership check, and fix isBundleOwnedByAnyBroker to use ns.checkOwnershipPresentAsync for ExtensibleLoadBalancer (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22379"},"#22379"),") (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22403"},"#22403"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Support OIDC providers with JWK without alg field set in keys (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22421"},"#22421"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Update TransferShedder underloaded broker check to consider max loaded broker's msgThroughputEMA and update IsExtensibleLoadBalancerImpl check (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22321"},"#22321"),") (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22416"},"#22416"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Update topic partition failed when config maxNumPartitionsPerPartitionedTopic<0 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22397"},"#22397"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," avoid offload system topic (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22497"},"#22497"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," fix replicated subscriptions for transactional messages (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22452"},"#22452"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," rename to changeMaxReadPositionCount (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22656"},"#22656"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," usedLocallySinceLastReport should always be reset (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22672"},"#22672"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]","[admin]"," Fix cannot update properties on NonDurable subscription. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22411"},"#22411"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix Reader can be stuck from transaction aborted messages. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22610"},"#22610"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Make the config ",(0,l.yg)("inlineCode",{parentName:"li"},"metricsBufferResponse")," description more effective (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22490"},"#22490"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Retry re-validating ResourceLock with backoff after errors (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22617"},"#22617"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add ",(0,l.yg)("inlineCode",{parentName:"li"},"topic_load_failed")," metric (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19236"},"#19236"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add topic name to emitted error messages. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22506"},"#22506"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Avoid repeated Read-and-discard when using Key_Shared mode (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22245"},"#22245"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Create partitioned topics automatically when enable topic level replication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22537"},"#22537"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Don't log brokerClientAuthenticationParameters and bookkeeperClientAuthenticationParameters by default (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22395"},"#22395"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Improve Gzip compression, allow excluding specific paths or disabling it (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22370"},"#22370"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Optimize gzip compression for /metrics endpoint by sharing/caching compressed result (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22521"},"#22521"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Propagate cause exception in TopicBusyException when applicable (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22596"},"#22596"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Repeat the handleMetadataChanges callback when configurationMetadataStore equals localMetadataStore (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22519"},"#22519"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Servlet support response compression (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21667"},"#21667"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Support X-Forwarded-For and HA Proxy Protocol for resolving original client IP of http/https requests (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22524"},"#22524"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," backlog quota exceed limit log replaced with ",(0,l.yg)("inlineCode",{parentName:"li"},"debug")," (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22488"},"#22488"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]"," Fix NPE of getValidPositionAfterSkippedEntries when recovering a terminated managed ledger (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22552"},"#22552"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]"," Mark delete stuck due to switching cursor ledger fails (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22662"},"#22662"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]"," No rollover inactive ledgers when metadata service invalid (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22284"},"#22284"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][offload]"," Fix OOM in tiered storage, caused by unbounded offsets cache (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22679"},"#22679"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][offload]"," Increase file upload limit from 2048MiB to 4096MiB for GCP/GCS offloading (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22554"},"#22554"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][storage]"," ReadonlyManagedLedger initialization does not fill in the properties (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22630"},"#22630"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][admin]"," Fix namespace admin api exception response (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22587"},"#22587"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][txn]","Handle exceptions in the transaction pending ack init (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21274"},"#21274"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][log]"," Print source client addr when enabled haProxyProtocolEnabled (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22686"},"#22686"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][meta]"," Log a warning when ZK batch fails with connectionloss (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22566"},"#22566"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][offload]"," Apply autoSkipNonRecoverableData configuration to tiered storage (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22531"},"#22531"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][offload]"," Replace usage of shaded class in OffsetsCache (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22683"},"#22683"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][sec]"," Align some namespace level policy authorisation check (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21640"},"#21640"),")")),(0,l.yg)("h3",{id:"client"},"Client"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix Consumer should return configured batch receive max messages (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22619"},"#22619"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix ReaderBuilder doest not give illegalArgument on connection failure retry (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22639"},"#22639"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix client side memory leak when call MessageImpl.create and fix imprecise client-side metrics: pendingMessagesUpDownCounter, pendingBytesUpDownCounter, latencyHistogram (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22393"},"#22393"),")")),(0,l.yg)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][fn]"," make sure the classloader for ContextImpl is ",(0,l.yg)("inlineCode",{parentName:"li"},"functionClassLoader")," in different runtimes (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22501"},"#22501"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][io]"," CompressionEnabled didn't work on elasticsearch sink (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22565"},"#22565"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][io]"," Fix es index creation (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22654"},"#22654"),") (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22701"},"#22701"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][io]"," Kafka Source connector maybe stuck (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22511"},"#22511"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][io]",": Add validation for JDBC sink not supporting primitive schema (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22376"},"#22376"),")")),(0,l.yg)("h3",{id:"others"},"Others"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[improve][ws]"," Add memory limit configuration for Pulsar client used in Websocket proxy (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22666"},"#22666"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][build]"," Fix building docker images without setting UBUNTU_MIRROR"),(0,l.yg)("li",{parentName:"ul"},"[fix][build]"," Fix networkaddress.cache.negative.ttl config (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22400"},"#22400"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Specify valid home dir for the default user in the Ubuntu based docker image (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22446"},"#22446"),")")),(0,l.yg)("h3",{id:"library-updates"},"Library updates"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," upgrade jclouds 2.5.0 -> 2.6.0 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22220"},"#22220"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade to Bookkeeper 4.16.5 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22484"},"#22484"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade to Netty 4.1.108 and tcnative 2.0.65 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22369"},"#22369"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Rename all shaded Netty native libraries (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22415"},"#22415"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade Bouncycastle to 1.78 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22509"},"#22509"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade aws-sdk.version to avoid CVE-2024-21634 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22633"},"#22633"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade elasticsearch-java version to avoid CVE-2023-4043 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22640"},"#22640"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade postgresql version to avoid CVE-2024-1597 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22635"},"#22635"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][build]"," Upgrade Lombok to 1.18.32 for Java 22 support (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22425"},"#22425"),")")),(0,l.yg)("h3",{id:"tests--ci"},"Tests & CI"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Clear MockedPulsarServiceBaseTest fields to prevent test runtime memory leak (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22659"},"#22659"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Clear fields in test cleanup to reduce memory consumption (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22583"},"#22583"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix NPE in BookKeeperClusterTestCase tearDown (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22493"},"#22493"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix flaky test ReplicatorTest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22594"},"#22594"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix resource leak in TransactionCoordinatorClientTest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21380"},"#21380"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix the flaky tests of ManagedLedgerImplUtilsTest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22611"},"#22611"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Flaky-test: ManagedLedgerTest.testTimestampOnWorkingLedger (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22600"},"#22600"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Flaky-test: testMessageExpiryWithTimestampNonRecoverableException and testIncorrectClientClock (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22489"},"#22489"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," SchemaMap in AutoConsumeSchema has been reused (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22500"},"#22500"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]","[branch-3.0]"," Fix test PersistentTopicsTest.testUpdatePartitionedTopic"),(0,l.yg)("li",{parentName:"ul"},"[improve][test]"," Move ShadowManagedLedgerImplTest to flaky tests (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22526"},"#22526"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][test]"," Move most flaky tests to flaky group (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22433"},"#22433"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][test]"," Replace usage of curl in Java test and fix stream leaks (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22463"},"#22463"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ci]","[branch-3.0]"," Upgrade actions in pulsar-ci and pulsar-ci-flaky, port owasp cache change"),(0,l.yg)("li",{parentName:"ul"},"[improve][build]"," Upgrade OWASP Dependency check version to 9.1.0 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22530"},"#22530"),")")),(0,l.yg)("p",null,"For the complete list, check the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare/v3.0.4...v3.0.5"},"full changelog"),"."))}h.isMDXComponent=!0}}]);