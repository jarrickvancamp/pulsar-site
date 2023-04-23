"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var n=l.createContext({}),o=function(e){var t=l.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(n.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,n=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=o(a),m=r,k=h["".concat(n,".").concat(m)]||h[m]||c[m]||p;return a?l.createElement(k,i(i({ref:t},s),{},{components:a})):l.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=m;var u={};for(var n in t)hasOwnProperty.call(t,n)&&(u[n]=t[n]);u.originalType=e,u[h]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<p;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>o});var l=a(87462),r=(a(67294),a(3905));const p={id:"pulsar-2.5.1",title:"Apache Pulsar 2.5.1",sidebar_label:"Apache Pulsar 2.5.1"},i=void 0,u={unversionedId:"versioned/pulsar-2.5.1",id:"versioned/pulsar-2.5.1",title:"Apache Pulsar 2.5.1",description:"2020-04-20",source:"@site/release-notes/versioned/pulsar-2.5.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.5.1",permalink:"/release-notes/versioned/pulsar-2.5.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.5.1.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.1",title:"Apache Pulsar 2.5.1",sidebar_label:"Apache Pulsar 2.5.1"}},n={},o=[{value:"2020-04-20",id:"2020-04-20",level:4},{value:"Features",id:"features",level:4},{value:"Fixes",id:"fixes",level:4},{value:"Broker",id:"broker",level:5},{value:"Managed Ledger",id:"managed-ledger",level:5},{value:"Pulsar Proxy",id:"pulsar-proxy",level:5},{value:"Zookeeper",id:"zookeeper",level:5},{value:"Pulsar Functions",id:"pulsar-functions",level:5},{value:"Pulsar SQL",id:"pulsar-sql",level:5},{value:"Security",id:"security",level:5},{value:"Pulsar Schema",id:"pulsar-schema",level:5},{value:"Java client",id:"java-client",level:5},{value:"C++ client",id:"c-client",level:5},{value:"Python Client",id:"python-client",level:5},{value:"Pulsar Websocket",id:"pulsar-websocket",level:5},{value:"Deployments",id:"deployments",level:5},{value:"Enhancements",id:"enhancements",level:4},{value:"Pulsar Broker",id:"pulsar-broker",level:5},{value:"Zookeeper",id:"zookeeper-1",level:5},{value:"Pulsar IO",id:"pulsar-io",level:5},{value:"Pulsar Functions",id:"pulsar-functions-1",level:5},{value:"Stats &amp; Monitoring",id:"stats--monitoring",level:5},{value:"Security",id:"security-1",level:5},{value:"Pulsar Schema",id:"pulsar-schema-1",level:5},{value:"Deployments",id:"deployments-1",level:5},{value:"Adaptors",id:"adaptors",level:5}],s={toc:o};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"2020-04-20"},"2020-04-20"),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIP-55: Refresh Authentication Credentials ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6074"},"#6074")),(0,r.kt)("li",{parentName:"ul"},"Namespace level support offloader ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6183"},"#6183"),"  "),(0,r.kt)("li",{parentName:"ul"},"Upgrade Avro to 1.9.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5938"},"#5938"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Avro 1.9.1 enables the JSR310 datetimes by default, which might introduce some regression problems if users use generated source code by Avro compiler 1.8.x and contains datetimes fields. It's better to use Avro 1.9.x compiler to recompile.")))),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"unload")," all partitions of a partitioned topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6187"},"#6187"),"  "),(0,r.kt)("li",{parentName:"ul"},"Supports evenly distribute topics count when splits bundle ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6241"},"#6241"),"  "),(0,r.kt)("li",{parentName:"ul"},"KeyValue schema support for pulsar sql ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6325"},"#6325"),"  "),(0,r.kt)("li",{parentName:"ul"},"Bump netty version to 4.1.45.Final ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6424"},"#6424"),"  "),(0,r.kt)("li",{parentName:"ul"},"Support BouncyCastle FIPS provider ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6588"},"#6588"),"  "),(0,r.kt)("li",{parentName:"ul"},"Improve Key_Shared subscription message dispatching performance. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6647"},"#6647"),"  "),(0,r.kt)("li",{parentName:"ul"},"Add JSR310 logical type conversion. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6704"},"#6704"),"  "),(0,r.kt)("li",{parentName:"ul"},"Introduce maxMessagePublishBufferSizeInMB configuration to avoid broker OOM ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6178"},"#6178"),"  ")),(0,r.kt)("h4",{id:"fixes"},"Fixes"),(0,r.kt)("h5",{id:"broker"},"Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed NPE occurs when getting partitioned topic stats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6060"},"#6060")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed zero queue consumer message redelivery ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6076"},"#6076")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed message redelivery for zero queue consumer while using async api to receive messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6090"},"#6090")),(0,r.kt)("li",{parentName:"ul"},"[broker]"," Fixed bug that backlog message that has not yet expired could be deleted due to TTL ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6211"},"#6211")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Remove problematic semicolon from conf ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6303"},"#6303")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed broker to specify a list of bookie groups ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6349"},"#6349")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed create consumer on partitioned topic while disable topic auto creation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5572"},"#5572")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fix maven broken link ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6068"},"#6068")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed java code errors reported by lgtm. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6398"},"#6398")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed memory leak when running topic compaction. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6485"},"#6485")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed admin getLastMessageId return batchIndex ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6511"},"#6511")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed topic with one partition cannot be updated ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6560"},"#6560")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed negative un-ack messages in consumer stats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5929"},"#5929")),(0,r.kt)("li",{parentName:"ul"},"[broker]"," Fixed bug that tenants whose allowed clusters include global cannot be created/updated ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6275"},"#6275")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed log compaction for flow control/empty topic/last deletion ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6237"},"#6237")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed restore clusterDispatchRate policy for compatibility ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6176"},"#6176")," "),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fix some async method problems at PersistentTopicsBase. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6483"},"#6483")," "),(0,r.kt)("li",{parentName:"ul"},"[Broker]",' This "earlier" message should be avoided to emit when reset cursor.',(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6393"},"#6393")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Change the permission level of managing subscription from super-user to tenant admin ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6122"},"#6122"))),(0,r.kt)("h5",{id:"managed-ledger"},"Managed Ledger"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Managed Ledger]"," Fixed consumer received duplicated delayed messages upon restart ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6404"},"#6404"))),(0,r.kt)("h5",{id:"pulsar-proxy"},"Pulsar Proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Fixed correct name for proxy thread executor name ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6460"},"#6460")),(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Fixed logging for published messages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6474"},"#6474")),(0,r.kt)("li",{parentName:"ul"},"[Proxy]"," Fixed proxy routing to functions worker ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6486"},"#6486"))),(0,r.kt)("h5",{id:"zookeeper"},"Zookeeper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Zookeeper]"," Fixed casting in ZooKeeperCache.getDataIfPresent() ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6313"},"#6313"))),(0,r.kt)("h5",{id:"pulsar-functions"},"Pulsar Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Function]"," remove future.join() from PulsarSinkEffectivelyOnceProcessor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6361"},"#6361"))),(0,r.kt)("h5",{id:"pulsar-sql"},"Pulsar SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[SQL]"," Fixed integration Pulsar SQL test failed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6279"},"#6279"))),(0,r.kt)("h5",{id:"security"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed publish buffer limit does not take effect ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6431"},"#6431")),(0,r.kt)("li",{parentName:"ul"},"Fixed the bug of authenticationData is't initialized. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6440"},"#6440"))),(0,r.kt)("h5",{id:"pulsar-schema"},"Pulsar Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Fixed get schema version in HttpLookupService. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6193"},"#6193")," "),(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Fixed avro schema decode error ",(0,r.kt)("inlineCode",{parentName:"li"},"ClassCastException")," in Pulsar Function ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6662"},"#6662")),(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Fixed channel write error handling for send get raw schema request ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6650"},"#6650"))),(0,r.kt)("h5",{id:"java-client"},"Java client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Client]"," Fixed available permits may be greater than 1 even though queue size is 0. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6106"},"#6106")),(0,r.kt)("li",{parentName:"ul"},"[Client]"," Fixed broker client tls settings error ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6128"},"#6128")),(0,r.kt)("li",{parentName:"ul"},"[Client]","Fixed hasMessageAvailable() ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6362"},"#6362")),(0,r.kt)("li",{parentName:"ul"},"[Client]"," Fixed duplicate key to send propertys ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6390"},"#6390")),(0,r.kt)("li",{parentName:"ul"},"[Client]"," fixed deadlock on send failure ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6488"},"#6488")),(0,r.kt)("li",{parentName:"ul"},"[Client]"," Fixed NPE while call getLastMessageId ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6562"},"#6562")," "),(0,r.kt)("li",{parentName:"ul"},"[Client]"," Fixed the max backoff configuration for lookups ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6444"},"#6444"))),(0,r.kt)("h5",{id:"c-client"},"C++ client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed static linking on C++ lib on MacOS ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5581"},"#5581")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed memory corruption on ExecutorService destructor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6270"},"#6270")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed handling of canceled timer events on NegativeAcksTracker ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6272"},"#6272")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed for possible deadlock when closing Pulsar client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6277"},"#6277")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed Unacked Message Tracker by Using Time Partition on C++ ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6391"},"#6391")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fixed Redelivery of Messages on UnackedMessageTracker When Ack Messages . ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6498"},"#6498"))),(0,r.kt)("h5",{id:"python-client"},"Python Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Python Client]","Fixed the enum34 package not found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6401"},"#6401"))),(0,r.kt)("h5",{id:"pulsar-websocket"},"Pulsar Websocket"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Websocket]"," Fixed Websocket doesn't set the correct cluster data ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6102"},"#6102"))),(0,r.kt)("h5",{id:"deployments"},"Deployments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Helm]"," Autorecovery - Fixed could not find or load main class ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6373"},"#6373")),(0,r.kt)("li",{parentName:"ul"},"[Helm]",": Start proxy pods when at least one broker pod is running ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6158"},"#6158"))),(0,r.kt)("h4",{id:"enhancements"},"Enhancements"),(0,r.kt)("h5",{id:"pulsar-broker"},"Pulsar Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Broker]"," close managed-ledgers before giving up bundle ownership to avoid bad zk-version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5599"},"#5599")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Add timeout to search for web service URLs to avoid web threads getting stuck ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6124"},"#6124")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Flush the potential duplicated message when add messages to a batch. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6326"},"#6326")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Avoid getting partition metadata while the topic name is a partition name. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6339"},"#6339")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fixed create partitioned topic with a substring of an existing topic name. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6478"},"#6478")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Do not retry on authorization failure ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6577"},"#6577")),(0,r.kt)("li",{parentName:"ul"},"[Broker]","Handle BadVersionException thrown by updateSchemaLocator() ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6683"},"#6683")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Expose bookkeeper expose explicit lac configuration in broker.conf ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5822"},"#5822")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Allow to enable/disable delayed delivery for messages on namespace ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5915"},"#5915")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Prevent creation of regular topic with the same name as existing partitioned topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5943"},"#5943")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Reset cursor with a non-exists position ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6120"},"#6120")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Use fully qualified hostname as default to advertise brokers ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6235"},"#6235")),(0,r.kt)("li",{parentName:"ul"},"[broker]"," Timeout API calls in BrokerService ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6489"},"#6489")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Start namespace service and schema registry service before start broker. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6499"},"#6499")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Disable channel auto read when publish rate or publish buffer exceeded ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6550"},"#6550")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Resume some servercnx method to public ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6581"},"#6581")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Enable get precise backlog and backlog without delayed messages. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6310"},"#6310")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Avoid using same OpAddEntry between different ledger handles ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5942"},"#5942")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Clean up closed producer to avoid publish-time for producer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5988"},"#5988")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Support delete inactive topic when subscriptions caught up ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6077"},"#6077")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Add a message on how to make log refresh immediately when starting a component ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6078"},"#6078")),(0,r.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," allow tenant admin to manage subscription permission ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6122"},"#6122")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Output resource usage rate to log on broker ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6152"},"#6152")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Creating a topic does not wait for creating cursor of replicators ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6364"},"#6364")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Stop increase unacked messages for the consumer with Exclusive/Failover subscription mode. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6558"},"#6558")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Not allow sub auto create by admin when disable topic auto create ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6685"},"#6685"))),(0,r.kt)("h5",{id:"zookeeper-1"},"Zookeeper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Zookeeper]"," Close ZK before canceling future with exception ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6399"},"#6399")),(0,r.kt)("li",{parentName:"ul"},"[ZooKeeper]"," Upgrade ZooKeeper to 3.5.7 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6329"},"#6329"))),(0,r.kt)("h5",{id:"pulsar-io"},"Pulsar IO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[IO]"," Adds integration test for RabbitMQ ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6033"},"#6033"))),(0,r.kt)("h5",{id:"pulsar-functions-1"},"Pulsar Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Function]"," remove future.join() from PulsarSinkEffectivelyOnceProcessor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6361"},"#6361"))),(0,r.kt)("h5",{id:"stats--monitoring"},"Stats & Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Add backlogSize in topicStats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5914"},"#5914")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Expose lastConsumedTimestamp and lastAckedTimestamp to consumer stats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6051"},"#6051")),(0,r.kt)("li",{parentName:"ul"},"Improve backlogSize stats in the topic. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6700"},"#6700"))),(0,r.kt)("h5",{id:"security-1"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validate tokens for binary connections ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6233"},"#6233")),(0,r.kt)("li",{parentName:"ul"},"Create namespace failed when TLS is enabled in PulsarStandalone ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6457"},"#6457")," "),(0,r.kt)("li",{parentName:"ul"},"Use more granular permissions for topics ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6504"},"#6504"))),(0,r.kt)("h5",{id:"pulsar-schema-1"},"Pulsar Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Independent schema is set for each consumer generated by topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6356"},"#6356")),(0,r.kt)("li",{parentName:"ul"},"[Schema]",' Extract an original avro schema from the "$SCHEMA" field using reflection. If it doesn\'t work, the process falls back generation of the schema from POJO.',(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6406"},"#6406")),(0,r.kt)("li",{parentName:"ul"},"[Schema]"," Add verification for SchemaDefinitionBuilderImpl.java ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6405"},"#6405"))),(0,r.kt)("h5",{id:"deployments-1"},"Deployments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Helm]"," Explicit statement env-var 'BOOKIE_MEM' and 'BOOKIE_GC' for values-mini.yaml ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6340"},"#6340")),(0,r.kt)("li",{parentName:"ul"},"[Helm]"," Add missing check to dashboard-ingress ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6160"},"#6160")),(0,r.kt)("li",{parentName:"ul"},"Make kubernetes yamls for aws operational ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6192"},"#6192")),(0,r.kt)("li",{parentName:"ul"},"Ensure JVM memory and GC options are set for bookie ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6201"},"#6201")),(0,r.kt)("li",{parentName:"ul"},"Default functionAuthProvider when running in k8s ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6203"},"#6203"))),(0,r.kt)("h5",{id:"adaptors"},"Adaptors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Adaptor]"," Skip javadoc task for pulsar-client-kafka-compact modules ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5836"},"#5836")),(0,r.kt)("li",{parentName:"ul"},"[Flink-Connector]"," Get PulsarClient from cache should always return an open instance ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6436"},"#6436"))))}h.isMDXComponent=!0}}]);