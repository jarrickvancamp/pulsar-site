"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={id:"admin-api-non-persistent-topics",title:"Managing non-persistent topics",sidebar_label:"Non-Persistent topics",original_id:"admin-api-non-persistent-topics"},s=void 0,p={unversionedId:"admin-api-non-persistent-topics",id:"version-2.6.0/admin-api-non-persistent-topics",title:"Managing non-persistent topics",description:"Non-persistent can be used in applications that only want to consume real time published messages and",source:"@site/versioned_docs/version-2.6.0/admin-api-non-persistent-topics.md",sourceDirName:".",slug:"/admin-api-non-persistent-topics",permalink:"/docs/2.6.0/admin-api-non-persistent-topics",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/admin-api-non-persistent-topics.md",tags:[],version:"2.6.0",frontMatter:{id:"admin-api-non-persistent-topics",title:"Managing non-persistent topics",sidebar_label:"Non-Persistent topics",original_id:"admin-api-non-persistent-topics"},sidebar:"version-2.6.0/docsSidebar",previous:{title:"Persistent topics",permalink:"/docs/2.6.0/admin-api-persistent-topics"},next:{title:"Partitioned topics",permalink:"/docs/2.6.0/admin-api-partitioned-topics"}},o={},l=[{value:"Non-persistent topics resources",id:"non-persistent-topics-resources",level:2},{value:"Get stats",id:"get-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get internal stats",id:"get-internal-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Create partitioned topic",id:"create-partitioned-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Get metadata",id:"get-metadata",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Unload topic",id:"unload-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Non-persistent can be used in applications that only want to consume real time published messages and\ndo not need persistent guarantee that can also reduce message-publish latency by removing overhead of\npersisting messages."),(0,i.kt)("p",null,"In all of the instructions and commands below, the topic name structure is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nnon-persistent://tenant/namespace/topic\n\n")),(0,i.kt)("h2",{id:"non-persistent-topics-resources"},"Non-persistent topics resources"),(0,i.kt)("h3",{id:"get-stats"},"Get stats"),(0,i.kt)("p",null,"It shows current statistics of a given non-partitioned topic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"msgRateIn"),": The sum of all local and replication publishers' publish rates in messages per second")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"msgThroughputIn"),": Same as above, but in bytes per second instead of messages per second")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"msgRateOut"),": The sum of all local and replication consumers' dispatch rates in messages per second")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"msgThroughputOut"),": Same as above, but in bytes per second instead of messages per second")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"averageMsgSize"),": The average size in bytes of messages published within the last interval")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"publishers"),": The list of all local publishers into the topic. There can be zero or thousands")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"averageMsgSize"),": Average message size in bytes from this publisher within the last interval")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"producerId"),": Internal identifier for this producer on this topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"producerName"),": Internal identifier for this producer, generated by the client library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"address"),": IP address and source port for the connection of this producer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"connectedSince"),": Timestamp this producer was created or last reconnected")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"subscriptions"),": The list of all local subscriptions to the topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"my-subscription"),": The name of this subscription (client defined)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"type"),": This subscription type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"consumers"),": The list of connected consumers for this subscription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"consumerName"),": Internal identifier for this consumer, generated by the client library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"availablePermits"),": The number of messages this consumer has space for in the client library's listen queue. A value less than 1 means the client library's queue is full and receive() isn't being called. A non-negative value means this consumer is ready to be dispatched messages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"replication"),": This section gives the stats for cross-colo replication of this topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"connected"),": Whether the outbound replicator is connected")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"inboundConnection"),": The IP and port of the broker in the remote cluster's publisher connection to this broker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"inboundConnectedSince"),": The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"msgDropRate"),": for publisher: publish: broker only allows configured number of in flight per connection, and drops all other published messages above the threshold. Broker also drops messages for subscriptions in case of unavailable limit and connection is not writable."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "msgRateIn": 4641.528542257553,\n  "msgThroughputIn": 44663039.74947473,\n  "msgRateOut": 0,\n  "msgThroughputOut": 0,\n  "averageMsgSize": 1232439.816728665,\n  "storageSize": 135532389160,\n  "msgDropRate" : 0.0,\n  "publishers": [\n    {\n      "msgRateIn": 57.855383881403576,\n      "msgThroughputIn": 558994.7078932219,\n      "averageMsgSize": 613135,\n      "producerId": 0,\n      "producerName": null,\n      "address": null,\n      "connectedSince": null,\n      "msgDropRate" : 0.0\n    }\n  ],\n  "subscriptions": {\n    "my-topic_subscription": {\n      "msgRateOut": 0,\n      "msgThroughputOut": 0,\n      "msgBacklog": 116632,\n      "type": null,\n      "msgRateExpired": 36.98245516804671,\n       "consumers" : [ {\n        "msgRateOut" : 20343.506296021893,\n        "msgThroughputOut" : 2.0979855364233278E7,\n        "msgRateRedeliver" : 0.0,\n        "consumerName" : "fe3c0",\n        "availablePermits" : 950,\n        "unackedMessages" : 0,\n        "blockedConsumerOnUnackedMsgs" : false,\n        "address" : "/10.73.210.249:60578",\n        "connectedSince" : "2017-07-26 15:13:48.026-0700",\n        "clientVersion" : "1.19-incubating-SNAPSHOT"\n      } ],\n      "msgDropRate" : 432.2390921571593\n\n    }\n  },\n  "replication": {}\n}\n\n')),(0,i.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("p",null,"Topic stats can be fetched using ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin non-persistent stats \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n")),(0,i.kt)("h4",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getStats"},"GET /admin/v2/non-persistent/:tenant/:namespace/:topic/stats")),(0,i.kt)("h4",{id:"java"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getStats(topic);\n\n')),(0,i.kt)("h3",{id:"get-internal-stats"},"Get internal stats"),(0,i.kt)("p",null,"It shows detailed statistics of a topic."),(0,i.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,i.kt)("p",null,"Topic internal-stats can be fetched using ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#stats-internal"},(0,i.kt)("inlineCode",{parentName:"a"},"stats-internal"))," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin non-persistent stats-internal \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n{\n  "entriesAddedCounter" : 48834,\n  "numberOfEntries" : 0,\n  "totalSize" : 0,\n  "cursors" : {\n    "s1" : {\n      "waitingReadOp" : false,\n      "pendingReadOps" : 0,\n      "messagesConsumedCounter" : 0,\n      "cursorLedger" : 0,\n      "cursorLedgerLastEntry" : 0\n    }\n  }\n}\n\n')),(0,i.kt)("h4",{id:"rest-api-1"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getInternalStats"},"GET /admin/v2/non-persistent/:tenant/:namespace/:topic/internalStats")),(0,i.kt)("h4",{id:"java-1"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getInternalStats(topic);\n\n')),(0,i.kt)("h3",{id:"create-partitioned-topic"},"Create partitioned topic"),(0,i.kt)("p",null,"Partitioned topics in Pulsar must be explicitly created. When creating a new partitioned topic you need to provide a name for the topic as well as the desired number of partitions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, after 60 seconds of creation, topics are considered inactive and deleted automatically to prevent from generating trash data.\nTo disable this feature, set ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".\nTo change the frequency of checking inactive topics, set ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsFrequencySeconds")," to your desired value.\nFor more information about these two parameters, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-configuration#broker"},"here"),".")),(0,i.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin non-persistent create-partitioned-topic \\\n  non-persistent://my-tenant/my-namespace/my-topic \\\n  --partitions 4\n\n")),(0,i.kt)("h4",{id:"rest-api-2"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/createPartitionedTopic"},"PUT /admin/v2/non-persistent/:tenant/:namespace/:topic/partitions")),(0,i.kt)("h4",{id:"java-2"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "non-persistent://my-tenant/my-namespace/my-topic";\nint numPartitions = 4;\nadmin.nonPersistentTopics().createPartitionedTopic(topicName, numPartitions);\n\n')),(0,i.kt)("h3",{id:"get-metadata"},"Get metadata"),(0,i.kt)("p",null,"Partitioned topics have metadata associated with them that you can fetch as a JSON object. The following metadata fields are currently available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partitions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of partitions into which the topic is divided")))),(0,i.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin non-persistent get-partitioned-topic-metadata \\\n  non-persistent://my-tenant/my-namespace/my-topic\n{\n  "partitions": 4\n}\n\n')),(0,i.kt)("h4",{id:"rest-api-3"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getPartitionedMetadata"},"GET /admin/v2/non-persistent/:tenant/:namespace/:topic/partitions")),(0,i.kt)("h4",{id:"java-3"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getPartitionedTopicMetadata(topicName);\n\n')),(0,i.kt)("h3",{id:"unload-topic"},"Unload topic"),(0,i.kt)("p",null,"It unloads a topic."),(0,i.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,i.kt)("p",null,"Topic can be unloaded using ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#unload"},(0,i.kt)("inlineCode",{parentName:"a"},"unload"))," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin non-persistent unload \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n")),(0,i.kt)("h4",{id:"rest-api-4"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/unloadTopic"},"PUT /admin/v2/non-persistent/:tenant/:namespace/:topic/unload")),(0,i.kt)("h4",{id:"java-4"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "non-persistent://my-tenantmy-namespace/my-topic";\nadmin.nonPersistentTopics().unload(topic);\n\n')))}m.isMDXComponent=!0}}]);