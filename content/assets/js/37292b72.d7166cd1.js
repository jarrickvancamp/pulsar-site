"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=a,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||n;return r?i.createElement(d,l(l({ref:t},u),{},{components:r})):i.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}k.displayName="MDXCreateElement"},53033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={id:"pulsar-2.10.4",title:"Apache Pulsar 2.10.4",sidebar_label:"Apache Pulsar 2.10.4"},l=void 0,o={unversionedId:"versioned/pulsar-2.10.4",id:"versioned/pulsar-2.10.4",title:"Apache Pulsar 2.10.4",description:"2023-4-19",source:"@site/release-notes/versioned/pulsar-2.10.4.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.10.4",permalink:"/release-notes/versioned/pulsar-2.10.4",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.10.4.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.10.4",title:"Apache Pulsar 2.10.4",sidebar_label:"Apache Pulsar 2.10.4"}},s={},p=[{value:"2023-4-19",id:"2023-4-19",level:4},{value:"Broker",id:"broker",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"CLI",id:"cli",level:3},{value:"Admin",id:"admin",level:3},{value:"Security",id:"security",level:3},{value:"CI &amp; Test",id:"ci--test",level:3},{value:"Others",id:"others",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"2023-4-19"},"2023-4-19"),(0,a.kt)("h3",{id:"broker"},"Broker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add ref count for sticky hash to optimize the performance of Key_Shared subscription (#19167)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Pass subName for subscription operations in ServerCnx (#19184)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," AbstractBatchedMetadataStore - use AlreadyClosedException instead of IllegalStateException (#19284)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix open cursor with null-initialPosition result with earliest position (#18416)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Topics stats shows msgBacklog but there reality no backlog (#19275)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Added isActive in ManagedCursorImpl (#19341)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Replaced checkBackloggedCursors with checkBackloggedCursor(single subscription check) upon subscription (#19343)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," fixed the build error for pattern matching variable in lower JVM versions (#19362)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","optimize the shutdown sequence of broker service when it close (#16756)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Pass subscriptionName to auth service (#17123) (#19423)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","fix multi invocation for ledger createComplete (#18975)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," getLastMessageId returns a wrong batch index of last message if enabled read compacted (#18877)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Support deleting partitioned topics with the keyword ",(0,a.kt)("inlineCode",{parentName:"li"},"-partition-")," (#19230)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Fix the incorrect total size if use ML interceptor (#19404)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Added isActive in ManagedCursorImpl (#19341)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Added isActive in ManagedCursorImpl (#19341)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Copy subscription properties during updating the topic partition number. (#19223)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Expect msgs after server initiated CloseProducer (#19446)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix PulsarRegistrationClient and ZkRegistrationClient not aware rack info problem. (#18672)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Fix potential NPE cause future never complete. (#19415)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," The atomicity of multiple fields of ml is broken (#19346)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition while updating partition number (#19199)"),(0,a.kt)("li",{parentName:"ul"},"[Improve][broker]"," Support clear old bookie data for BKCluster (#16744)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Reset individualDeletedMessagesSerializedSize after acked all messages. (#19428)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Make ServerCnx#originalAuthData volatile (#19507)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," ServerCnx broken after recent cherry-picks (#19521)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix loadbalance score caculation problem (#19420)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," messagesConsumedCounter of NonDurableCursor was initialized incorrectly (#19355)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","[branch-2.10]"," Replace sync method call in async call chain to prevent ZK event thread deadlock (#19539)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Require authRole is proxyRole to set originalPrincipal (#19455)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," ServerCnx: go to Failed state when auth fails (#19312)"),(0,a.kt)("li",{parentName:"ul"},"[feat][broker]"," Cherry-pick tests from (#19409)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add test to verify authRole cannot change (#19430)"),(0,a.kt)("li",{parentName:"ul"},"[feat][broker]"," OneStageAuth State: move authn out of constructor (#19295)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Correct MockAlwaysExpiredAuthenticationState test impl"),(0,a.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Validate originalPrincipal earlier in ServerCnx (#19270)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," ServerCnx broken after recent cherry-picks (#19521)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix loadbalance score caculation problem (#19420)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," messagesConsumedCounter of NonDurableCursor was initialized incorrectly (#19355)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","[branch-2.10]"," Replace sync method call in async call chain to prevent ZK event thread deadlock (#19539)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Require authRole is proxyRole to set originalPrincipal (#19455)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," ServerCnx: go to Failed state when auth fails (#19312\uff09"),(0,a.kt)("li",{parentName:"ul"},"[feat][broker]"," Cherry-pick tests from (#19409)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add test to verify authRole cannot change (#19430)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Call originalAuthState.authenticate in ServerCnx"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Correct MockAlwaysExpiredAuthenticationState test impl"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Make authentication refresh threadsafe (#19506)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Allow proxy to pass same role for authRole and originalRole (#19557)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Copy command fields and fix potential thread-safety in ServerCnx (#19517)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","[branch-2.10]"," Fix geo-replication admin (#19608\uff09"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," PulsarRegistrationClient - implement getAllBookies and follow BookieServiceInfo updates (#18133)"),(0,a.kt)("li",{parentName:"ul"},"[Improve][Broker]","Reduce GetReplicatedSubscriptionStatus local REST call (#16946)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Incorrect service name selection logic (#19505)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Use shrink map for trackerCache (#19534)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add UncaughtExceptionHandler for every thread pool (#18211)"),(0,a.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Simplify extract entryMetadata code in filterEntriesForConsumer (#18729)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Follow up #19230 to tighten the validation scope (#19234)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," topic load fail by ledger lost (#19444)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Topic close failure leaves subscription in a permanent fence state (#19692)"),(0,a.kt)("li",{parentName:"ul"},"[cherry-pick][branch-2.10]"," Fix deadlock causes session notification not to work (#19754) (#19768)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential exception cause the policy service init fail. (#19746)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Authorize originalPrincipal when provided (#19830)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Only validate superuser access if authz enabled (#19989)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Ignore and remove the replicator cursor when the remote cluster is absent (#19972)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix index generator is not rollback after entries are failed added (#19980)"),(0,a.kt)("li",{parentName:"ul"},"[fix][proxy]"," Used in proxyConf file when configuration is missing in the command line (#15938)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Remove timestamp from broker metrics (#17419)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Counter of pending send messages in Replicator incorrect if schema future not complete (#19242)")),(0,a.kt)("h3",{id:"transaction"},"Transaction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," Correct the prompt message (#17009)"),(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," Catch and log runtime exceptions in async operations (#19258)"),(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," fix txn coordinator recover handle committing and aborting txn race condition. (#19201)"),(0,a.kt)("li",{parentName:"ul"},"[improve][txn]"," Handle changeToReadyState failure correctly in TC client (#19308)"),(0,a.kt)("li",{parentName:"ul"},"[cherry-pick][branch-2.10]"," Allow superusers to abort transactions (#1\u20269467) (#19473)"),(0,a.kt)("li",{parentName:"ul"},"[feature][txn]"," Fix individual ack batch message with transaction abor\u2026"),(0,a.kt)("li",{parentName:"ul"},"Close TransactionBuffer when MessageDeduplication#checkStatus failed (#19288)"),(0,a.kt)("li",{parentName:"ul"},"[improve][txn]"," Cleanup how superusers abort txns (#19976)"),(0,a.kt)("li",{parentName:"ul"},"[feature][txn]"," Fix individual ack batch message with transaction abort redevlier duplicate messages (#14327)")),(0,a.kt)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][io]"," Update Elasticsearch sink idle cnx timeout to 30s (#19377)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Fix k8s merge runtime opts bug (#19481)"),(0,a.kt)("li",{parentName:"ul"},"[refactor][fn]"," Use AuthorizationServer more in Function Worker API (#19975)")),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][cli]"," Fix Broker crashed by too much memory usage of pulsar tools (#20031)")),(0,a.kt)("h3",{id:"admin"},"Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix validatePersistencePolicies that Namespace/Topic persistent policies cannot set to < 0 (#18999)"),(0,a.kt)("li",{parentName:"ul"},"[improve][admin]","[branch-2.10]"," Unset namespace policy to improve deleting namespace (#17033) (#19865)"),(0,a.kt)("li",{parentName:"ul"},"[fix][admin]"," fix incorrect state replication.connected on API partitioned-topic stat (#19942)"),(0,a.kt)("li",{parentName:"ul"},"[fix][admin]"," Make response code to 400 instead of 500 when delete topic fails due to enabled geo-replication (#19879)")),(0,a.kt)("h3",{id:"security"},"Security"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade jettison to 1.5.3 (#19038)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade woodstox to 5.4.0 (#19041)"),(0,a.kt)("li",{parentName:"ul"},"[improve][sec]"," Suppress false positive OWASP reports (#19105)"),(0,a.kt)("li",{parentName:"ul"},"[fix][misc]"," do not require encryption on system topics (#18898)"),(0,a.kt)("li",{parentName:"ul"},"[fix][authorization]"," Fix the return value of canConsumeAsync (#19412)"),(0,a.kt)("li",{parentName:"ul"},"[fix][security]"," Fix secure problem CVE-2017-1000487 (#19479)"),(0,a.kt)("li",{parentName:"ul"},"[improve]"," Upgrade wildfly-eytron (used by debezium) to fix CVE-2022-3143 (#19333)"),(0,a.kt)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Netty to 4.1.87.Final (#19417)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Ignore and remove the replicator cursor when the remote cluster is absent (#19972)"),(0,a.kt)("li",{parentName:"ul"},"[Authenticate]"," fix Invalid signature error when use Kerberos Authentication (#15121)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix transitive critical CVEs in file-system tiered storage (#19957)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix transitive critical CVEs in file-system tiered storage (#19957)")),(0,a.kt)("h3",{id:"ci--test"},"CI & Test"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][test]"," ProxyWithAuthorizationTest remove SAN from test certs (#19594)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][test]","Run and fix tests (#19636)"),(0,a.kt)("li",{parentName:"ul"},"[test]"," Fix ServerCnxTest failing after merge of #19830")),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][build]"," Resolve OWASP Dependency Check false positives (#19120)"),(0,a.kt)("li",{parentName:"ul"},"Debezium sources: Support loading config from secrets (#19163)"),(0,a.kt)("li",{parentName:"ul"},"[fix][proxy]"," Only go to connecting state once (#19331)"),(0,a.kt)("li",{parentName:"ul"},"[fix][build]"," Upgrade dependency-check-maven plugin to fix broken OWASP check (#19170)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][fix]","[proxy]"," Fix using wrong client version in pulsar proxy (#19576)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][fix]","[proxy]"," Fix using wrong client version in pulsar proxy (#19576)"),(0,a.kt)("li",{parentName:"ul"},"[improve]"," Upgrade lombok to 1.8.26 (#19426)"),(0,a.kt)("li",{parentName:"ul"},"[improve]"," upgrade the bookkeeper version to 4.14.7 (#19179)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][broker]"," Support zookeeper read-only config. (#19156) (#19637)"),(0,a.kt)("li",{parentName:"ul"},"[improve]"," Simplify enabling Broker, WS Proxy hostname verification (#19674)"),(0,a.kt)("li",{parentName:"ul"},"[cherry-pick][branch-2.10]"," KCA: picking fixes from master (#19788)"),(0,a.kt)("li",{parentName:"ul"},"[Build]"," Make the test JVM exit if OOME occurs (#14509)")))}c.isMDXComponent=!0}}]);