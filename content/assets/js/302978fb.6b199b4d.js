"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[961],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var l=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),s=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=s(e.components);return l.createElement(u.Provider,{value:a},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),h=s(t),m=r,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return t?l.createElement(k,i(i({ref:a},o),{},{components:t})):l.createElement(k,i({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var n={};for(var u in a)hasOwnProperty.call(a,u)&&(n[u]=a[u]);n.originalType=e,n[h]="string"==typeof e?e:r,i[1]=n;for(var s=2;s<p;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37833:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var l=t(87462),r=(t(67294),t(3905));const p={id:"pulsar-2.11.1",title:"Apache Pulsar 2.11.1",sidebar_label:"Apache Pulsar 2.11.1"},i=void 0,n={unversionedId:"versioned/pulsar-2.11.1",id:"versioned/pulsar-2.11.1",title:"Apache Pulsar 2.11.1",description:"2023-04-19",source:"@site/release-notes/versioned/pulsar-2.11.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.11.1",permalink:"/release-notes/versioned/pulsar-2.11.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.11.1.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.11.1",title:"Apache Pulsar 2.11.1",sidebar_label:"Apache Pulsar 2.11.1"}},u={},s=[{value:"2023-04-19",id:"2023-04-19",level:4},{value:"Broker",id:"broker",level:3},{value:"Clients",id:"clients",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Observability",id:"observability",level:3},{value:"CLI",id:"cli",level:3},{value:"Others",id:"others",level:3},{value:"Library updates",id:"library-updates",level:3}],o={toc:s};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"2023-04-19"},"2023-04-19"),(0,r.kt)("h3",{id:"broker"},"Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AbstractBatchedMetadataStore - use AlreadyClosedException instead of IllegalStateException ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19284"},"#19284")),(0,r.kt)("li",{parentName:"ul"},"Add ref count for sticky hash to optimize the performance of Key_Shared subscription ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19167"},"#19167")),(0,r.kt)("li",{parentName:"ul"},"Pass subName for subscription operations in ServerCnx ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19184"},"#19184")),(0,r.kt)("li",{parentName:"ul"},"Enable custom metadata stores ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19208"},"#19208")),(0,r.kt)("li",{parentName:"ul"},"Topics stats shows msgBacklog but there reality no backlog ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19275"},"#19275")),(0,r.kt)("li",{parentName:"ul"},"Fix open cursor with null-initialPosition result with earliest position ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18416"},"#18416")),(0,r.kt)("li",{parentName:"ul"},"Added isActive in ManagedCursorImpl ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19341"},"#19341")),(0,r.kt)("li",{parentName:"ul"},"Replaced checkBackloggedCursors with checkBackloggedCursor(single subscription check) upon subscription ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19343"},"#19343")),(0,r.kt)("li",{parentName:"ul"},"Close TransactionBuffer when MessageDeduplication#checkStatus failed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19289"},"#19289")),(0,r.kt)("li",{parentName:"ul"},"Fix the incorrect total size if use ML interceptor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19404"},"#19404")),(0,r.kt)("li",{parentName:"ul"},"Support deleting partitioned topics with the keyword -partition- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19230"},"#19230")),(0,r.kt)("li",{parentName:"ul"},"Correct the prompt message ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17009"},"#17009")),(0,r.kt)("li",{parentName:"ul"},"Expect msgs after server initiated CloseProducer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19446"},"#19446")),(0,r.kt)("li",{parentName:"ul"},"Fix Npe thrown by splitBundle ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17370"},"#17370")),(0,r.kt)("li",{parentName:"ul"},"Fix executeWithRetry result is null ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17694"},"#17694")),(0,r.kt)("li",{parentName:"ul"},"ManagedLedger: move to FENCED state in case of BadVersionException ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17736"},"#17736")),(0,r.kt)("li",{parentName:"ul"},"Fix can not revoke permission after update topic partition ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17393"},"#17393")),(0,r.kt)("li",{parentName:"ul"},"Allow deletion of a namespace that was left in deleted status ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17592"},"#17592")),(0,r.kt)("li",{parentName:"ul"},"Add UncaughtExceptionHandler for every thread pool ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18211"},"#18211")),(0,r.kt)("li",{parentName:"ul"},"Support setting ForceDeleteNamespaceAllowed dynamically ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18181"},"#18181")),(0,r.kt)("li",{parentName:"ul"},"Support setting forceDeleteTenantAllowed dynamically ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18192"},"#18192")),(0,r.kt)("li",{parentName:"ul"},"Remove locallyAcquiredLock when removeOwnership ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18197"},"#18197")),(0,r.kt)("li",{parentName:"ul"},"Update the log print content of createSubscriptions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18024"},"#18024")),(0,r.kt)("li",{parentName:"ul"},"Unify time unit at dropping the backlog on a topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17957"},"#17957")),(0,r.kt)("li",{parentName:"ul"},"Fix mutex never released when trimming ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17911"},"#17911")),(0,r.kt)("li",{parentName:"ul"},"Fix getChildren in MemoryMetadataStore and EtcdMetadataStore ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18172"},"#18172")),(0,r.kt)("li",{parentName:"ul"},"Fix the order of resource close in the InMemoryDelayedDeliveryTracker ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18000"},"#18000")),(0,r.kt)("li",{parentName:"ul"},"Allow to configure and disable the size of lookahead for detecting fixed delays in messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17907"},"#17907")),(0,r.kt)("li",{parentName:"ul"},"Make BookieId work with PulsarRegistrationDriver ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17922"},"#17922")),(0,r.kt)("li",{parentName:"ul"},"In the trimDeletedEntries method, release the removed entry ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18305"},"#18305")),(0,r.kt)("li",{parentName:"ul"},"Make Consumer#equals more effective ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18662"},"#18662")),(0,r.kt)("li",{parentName:"ul"},"PulsarRegistrationClient - implement getAllBookies and follow BookieServiceInfo updates ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18133"},"#18133")),(0,r.kt)("li",{parentName:"ul"},"Fix PulsarRegistrationClient and ZkRegistrationClient not aware rack info problem ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18672"},"#18672")),(0,r.kt)("li",{parentName:"ul"},"Simplify extract entryMetadata code in filterEntriesForConsumer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18729"},"#18729")),(0,r.kt)("li",{parentName:"ul"},"Fix uncompleted future when getting the topic policies of a deleted topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18824"},"#18824")),(0,r.kt)("li",{parentName:"ul"},"Close transactionBuffer after MessageDeduplication#checkStatus failed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19157"},"#19157")),(0,r.kt)("li",{parentName:"ul"},"GetLastMessageId returns a wrong batch index of last message if enabled read compacted ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18877"},"#18877")),(0,r.kt)("li",{parentName:"ul"},"Fix multi invocation for ledger createComplete ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18975"},"#18975")),(0,r.kt)("li",{parentName:"ul"},"Fix txn coordinator recover handle committing and aborting txn race condition ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19201"},"#19201")),(0,r.kt)("li",{parentName:"ul"},"Reset individualDeletedMessagesSerializedSize after acked all messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19428"},"#19428")),(0,r.kt)("li",{parentName:"ul"},"Fix potential NPE cause future never complete ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19415"},"#19415")),(0,r.kt)("li",{parentName:"ul"},"Fix the return value of canConsumeAsync ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19412"},"#19412")),(0,r.kt)("li",{parentName:"ul"},"Close TransactionBuffer when creating persistent topic timeout ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19384"},"#19384")),(0,r.kt)("li",{parentName:"ul"},"Handle changeToReadyState failure correctly in TC client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19308"},"#19308")),(0,r.kt)("li",{parentName:"ul"},"The atomicity of multiple fields of ml is broken ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19346"},"#19346")),(0,r.kt)("li",{parentName:"ul"},"MessagesConsumedCounter of NonDurableCursor was initialized incorrectly ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19355"},"#19355")),(0,r.kt)("li",{parentName:"ul"},"Improve PersistentMessageExpiryMonitor expire speed when ledger not existed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17842"},"#17842")),(0,r.kt)("li",{parentName:"ul"},"Always send correct transaction id in end txn response ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19137"},"#19137")),(0,r.kt)("li",{parentName:"ul"},"Allow superusers to abort transactions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19467"},"#19467")),(0,r.kt)("li",{parentName:"ul"},"Make ServerCnx#originalAuthData volatile ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19507"},"#19507")),(0,r.kt)("li",{parentName:"ul"},"Validate originalPrincipal earlier in ServerCnx ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19270"},"#19270")),(0,r.kt)("li",{parentName:"ul"},"Require authRole is proxyRole to set originalPrincipal ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19455"},"#19455")),(0,r.kt)("li",{parentName:"ul"},"ServerCnx broken after recent cherry-picks ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19521"},"#19521")),(0,r.kt)("li",{parentName:"ul"},"ServerCnx: go to Failed state when auth fails ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19312"},"#19312")),(0,r.kt)("li",{parentName:"ul"},"Add test to verify authRole cannot change ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19430"},"#19430")),(0,r.kt)("li",{parentName:"ul"},"Make authentication refresh threadsafe ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19506"},"#19506")),(0,r.kt)("li",{parentName:"ul"},"OneStageAuth State: move authn out of constructor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19295"},"#19295")),(0,r.kt)("li",{parentName:"ul"},"Allow proxy to pass same role for authRole and originalRole ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19557"},"#19557")),(0,r.kt)("li",{parentName:"ul"},"Copy command fields and fix potential thread-safety in ServerCnx ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19517"},"#19517")),(0,r.kt)("li",{parentName:"ul"},"Topic load fail by ledger lost ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19444"},"#19444")),(0,r.kt)("li",{parentName:"ul"},"Incorrect service name selection logic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19505"},"#19505")),(0,r.kt)("li",{parentName:"ul"},"Make the service name resolver cache of PulsarWebResource expire after access ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19532"},"#19532")),(0,r.kt)("li",{parentName:"ul"},"Simplify enabling Broker, WS Proxy hostname verification ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19674"},"#19674")),(0,r.kt)("li",{parentName:"ul"},"Improve tls config on replication client and cluster cli ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19588"},"#19588")),(0,r.kt)("li",{parentName:"ul"},"Fix geo-replication admin ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19686"},"#19686")),(0,r.kt)("li",{parentName:"ul"},"Filter system topic when getting topic list by binary proto ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19667"},"#19667")),(0,r.kt)("li",{parentName:"ul"},"Fixed history load not releasing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19560"},"#19560")),(0,r.kt)("li",{parentName:"ul"},"Fix loadbalance score calculation problem ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19420"},"#19420")),(0,r.kt)("li",{parentName:"ul"},"Use shrink map for trackerCache ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19534"},"#19534")),(0,r.kt)("li",{parentName:"ul"},"Fix individual ack batch message with transaction abort redevlier duplicate messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14327"},"#14327")),(0,r.kt)("li",{parentName:"ul"},"Fix receive duplicated messages due to pendingAcks in PendingAckHandle ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19581"},"#19581")),(0,r.kt)("li",{parentName:"ul"},"Fail to update partition meta of topic due to ConflictException: subscription already exists for topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17251"},"#17251")),(0,r.kt)("li",{parentName:"ul"},"Fix catching ConflictException when update topic partition ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17374"},"#17374")),(0,r.kt)("li",{parentName:"ul"},"Only create extended partitions when updating partition number ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17349"},"#17349")),(0,r.kt)("li",{parentName:"ul"},"Create replicated subscriptions for new partitions when needed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18659"},"#18659")),(0,r.kt)("li",{parentName:"ul"},"Fix race condition while updating partition number ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19199"},"#19199")),(0,r.kt)("li",{parentName:"ul"},"Topic close failure leaves subscription in a permanent fence state ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19692"},"#19692")),(0,r.kt)("li",{parentName:"ul"},"Fix potential exception cause the policy service init fail ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19746"},"#19746")),(0,r.kt)("li",{parentName:"ul"},"Allow version to start positive and grow by more than one ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19503"},"#19503")),(0,r.kt)("li",{parentName:"ul"},"Fix deadlock causes session notification not to work ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19754"},"#19754")),(0,r.kt)("li",{parentName:"ul"},"Fix issue where msgRateExpired may not refresh forever ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19759"},"#19759")),(0,r.kt)("li",{parentName:"ul"},"Delete topic failed if disabled system topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19735"},"#19735")),(0,r.kt)("li",{parentName:"ul"},"Fix index generator is not rollback after entries are failed added ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19727"},"#19727")),(0,r.kt)("li",{parentName:"ul"},"Store the original authentication data ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19519"},"#19519")),(0,r.kt)("li",{parentName:"ul"},"Copy subscription properties during updating the topic partition number ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19800"},"#19800")),(0,r.kt)("li",{parentName:"ul"},"Fix close borrowed executor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19761"},"#19761")),(0,r.kt)("li",{parentName:"ul"},"Fixed race condition between ResourceLock update and invalidation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19817"},"#19817")),(0,r.kt)("li",{parentName:"ul"},"Counter of pending send messages in Replicator incorrect if schema future not complete ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19242"},"#19242")),(0,r.kt)("li",{parentName:"ul"},"Add getState in transaction for client API ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19834"},"#19834")),(0,r.kt)("li",{parentName:"ul"},"Follow up #19230 to tighten the validation scope ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19234"},"#19234")),(0,r.kt)("li",{parentName:"ul"},"Authorize originalPrincipal when provided ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19830"},"#19830")),(0,r.kt)("li",{parentName:"ul"},"Follow up #19817, Fix race condition between ResourceLock update and invalidation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19859"},"#19859")),(0,r.kt)("li",{parentName:"ul"},"Fix delete system topic clean topic policy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19835"},"#19835")),(0,r.kt)("li",{parentName:"ul"},"Fix NPE when update topic policy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19875"},"#19875")),(0,r.kt)("li",{parentName:"ul"},"Make the result of delete cursor is success if cursor is deleted ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19825"},"#19825")),(0,r.kt)("li",{parentName:"ul"},"Only validate superuser access if authz enabled ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19989"},"#19989")),(0,r.kt)("li",{parentName:"ul"},"Cleanup how superusers abort txns ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19976"},"#19976")),(0,r.kt)("li",{parentName:"ul"},"Return if AbstractDispatcherSingleActiveConsumer closed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19934"},"#19934")),(0,r.kt)("li",{parentName:"ul"},"Use AuthenticationParameters for rest producer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20046"},"#20046")),(0,r.kt)("li",{parentName:"ul"},"Fix uncompleted future when removing cursor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20050"},"#20050")),(0,r.kt)("li",{parentName:"ul"},"Fix estimateBacklogFromPosition if position is greater than the greatest ledgerId ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20069"},"#20069"))),(0,r.kt)("h3",{id:"clients"},"Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix reader listener can't auto ack with pooled message ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19354"},"#19354")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Prevent DNS reverse lookup when physical address is an IP address ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19028"},"#19028")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Set fields earlier for correct ClientCnx initialization ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19327"},"#19327")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Improve docs and code quality about KeyValueSchema usages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17256"},"#17256")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Add init capacity for messages in BatchMessageContainerImpl ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17822"},"#17822")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Support MAX_ACK_GROUP_SIZE configurable ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18107"},"#18107")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix exception when calling loadConf on a ConsumerBuilder that has a KeySharedPolicy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18345"},"#18345")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Support LocalDateTime Conversion ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18334"},"#18334")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix pendingLookupRequestSemaphore leak ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18219"},"#18219")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Unify the acknowledge process for batch and non-batch message IDs ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17833"},"#17833")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Set authentication when using loadConf in client and admin client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18358"},"#18358")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fixes batch_size not checked in MessageId#fromByteArrayWithTopic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18405"},"#18405")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix possible npe ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18406"},"#18406")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Change the get lastMessageId to debug level ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18421"},"#18421")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix failover/exclusive consumer with batch cumulate ack issue ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18454"},"#18454")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Avoid redelivering duplicated messages when batching is enabled ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18486"},"#18486")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," For exclusive subscriptions, if two consumers are created repeatedly, the second consumer will block ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18633"},"#18633")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix the Windows absolute path not recognized in auth param string ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18403"},"#18403")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Broker address resolution wrong if connect through a multi-dns names proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19597"},"#19597")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix memory leak if enabled pooled messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19585"},"#19585")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix authentication not update after changing the serviceUrl ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19510"},"#19510")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix async completion in ConsumerImpl#processPossibleToDLQ ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19392"},"#19392")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Moving get sequenceId into the sync code segment ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19837"},"#19837")),(0,r.kt)("li",{parentName:"ul"},"[Java]"," Fix DeadLetterProducer creation callback blocking client io thread ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19930"},"#19930"))),(0,r.kt)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Functions]"," Ensure prometheus metrics are grouped by type ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15558"},"#15558")),(0,r.kt)("li",{parentName:"ul"},"[Functions]"," Fix k8s merge runtime opts bug ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19481"},"#19481")),(0,r.kt)("li",{parentName:"ul"},"[Functions]"," Use AuthorizationServer more in Function Worker API ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19975"},"#19975")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," Debezium sources: Support loading config from secrets ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19205"},"#19205")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," Elasticsearch sink: Support loading config from secrets ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19206"},"#19206")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," Update Elasticsearch sink idle cnx timeout to 30s ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19377"},"#19377")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," DBC sink: allow any jdbc driver ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17951"},"#17951")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," ElasticSearch sink: align null fields behaviour ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18577"},"#18577")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," KCA sink: handle null values with KeyValue<Avro,Avro> schema ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19861"},"#19861")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," KCA: option to collapse partitioned topics ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19923"},"#19923")),(0,r.kt)("li",{parentName:"ul"},"[IO Connector]"," KCA: flag to force optional primitive schemas ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19951"},"#19951")),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h3",{id:"observability"},"Observability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fix wrong metrics text generated when label_cluster specified ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17704"},"#17704")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Add metrics for transaction ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15140"},"#15140")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Remove timestamp from Prometheus metrics ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17419"},"#17419")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fix incorrect bundle split count metric ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17970"},"#17970")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Update authentication failed metrics report ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17787"},"#17787")),(0,r.kt)("li",{parentName:"ul"},"[Function]",' Fix invalid metric type "gauge " ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18129"},"#18129"))),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Returns 4xx error when pulsar-worker-service is disabled and trying to access it ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17901"},"#17901")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," PulsarAdminBuilderImpl overrides timeout properties passed through config map ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17375"},"#17375")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Improve partitioned-topic condition evaluation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19015"},"#19015")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Make the default value of param --get-subscription-backlog-size of admin API topics stats true ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19302"},"#19302")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Make response code to 400 instead of 500 when deleting topic fails due to enabled geo-replication ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19879"},"#19879")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Fix delete tenant ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19925"},"#19925")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Fix incorrect state replication.connected on API partitioned-topic stat ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19942"},"#19942")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar CLI]"," Quit PerformanceConsumer after receiving numMessages messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17750"},"#17750")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar CLI]"," Check numMessages after incrementing counter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17826"},"#17826")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar CLI]"," Fix Pulsar admin tool is ignoring tls-trust-cert path arg ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19696"},"#19696")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar CLI]"," Fix Broker crashed by too much memory usage of pulsar tools ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20031"},"#20031"))),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Only go to connecting state once ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19331"},"#19331")),(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Fix using wrong client version in pulsar proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19569"},"#19569")),(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Implement graceful shutdown for Pulsar Proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20011"},"#20011")),(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Fix connection read timeout handling in Pulsar Proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20014"},"#20014")),(0,r.kt)("li",{parentName:"ul"},"[WebSocket]"," Add ping support  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19255"},"#19255")),(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Do not print error log with stacktrace for 404 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19130"},"#19130")),(0,r.kt)("li",{parentName:"ul"},"[Tiered Storage]"," Don't cleanup data when offload met Metastore exception ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17512"},"#17512")),(0,r.kt)("li",{parentName:"ul"},"Fix transitive critical CVEs in file-system tiered storage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19957"},"#19957"))),(0,r.kt)("h3",{id:"library-updates"},"Library updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump snakeyaml to 1.32 for CVE-2022-38752 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17779"},"#17779")),(0,r.kt)("li",{parentName:"ul"},"Upgrade jettison to 1.5.3 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19038"},"#19038")),(0,r.kt)("li",{parentName:"ul"},"Upgrade woodstox to 5.4.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19041"},"#19041")),(0,r.kt)("li",{parentName:"ul"},"Upgrade lombok to 1.8.26 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19426"},"#19426")),(0,r.kt)("li",{parentName:"ul"},"Upgrade to zk 3.8.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19425"},"#19425")),(0,r.kt)("li",{parentName:"ul"},"Upgrade bookkeeper to 4.15.4 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19812"},"#19812"))))}h.isMDXComponent=!0}}]);