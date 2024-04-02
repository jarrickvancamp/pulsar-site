"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63285],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>g});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),c=u(t),m=l,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return t?r.createElement(g,p(p({ref:a},o),{},{components:t})):r.createElement(g,p({ref:a},o))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=m;var n={};for(var s in a)hasOwnProperty.call(a,s)&&(n[s]=a[s]);n.originalType=e,n[c]="string"==typeof e?e:l,p[1]=n;for(var u=2;u<i;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93768:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var r=t(58168),l=(t(96540),t(15680));const i={id:"pulsar-3.0.4",title:"Apache Pulsar 3.0.4",sidebar_label:"Apache Pulsar 3.0.4"},p=void 0,n={unversionedId:"versioned/pulsar-3.0.4",id:"versioned/pulsar-3.0.4",title:"Apache Pulsar 3.0.4",description:"2024-04-02",source:"@site/release-notes/versioned/pulsar-3.0.4.md",sourceDirName:"versioned",slug:"/versioned/pulsar-3.0.4",permalink:"/release-notes/versioned/pulsar-3.0.4",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-3.0.4.md",tags:[],version:"current",frontMatter:{id:"pulsar-3.0.4",title:"Apache Pulsar 3.0.4",sidebar_label:"Apache Pulsar 3.0.4"}},s={},u=[{value:"2024-04-02",id:"2024-04-02",level:4},{value:"Broker",id:"broker",level:3},{value:"Client",id:"client",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Others",id:"others",level:3},{value:"Library updates",id:"library-updates",level:3},{value:"Tests &amp; CI",id:"tests--ci",level:3}],o={toc:u},c="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,r.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h4",{id:"2024-04-02"},"2024-04-02"),(0,l.yg)("h3",{id:"broker"},"Broker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Avoid execute prepareInitPoliciesCacheAsync if namespace is deleted (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22268"},"#22268"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Avoid expired unclosed ledgers when checking expired messages by ledger closure time (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22335"},"#22335"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Check cursor state before adding it to the ",(0,l.yg)("inlineCode",{parentName:"li"},"waitingCursors")," (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22191"},"#22191"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Close dispatchers stuck due to mismatch between dispatcher.consumerList and dispatcher.consumerSet (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22270"},"#22270"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix OpReadEntry.skipCondition NPE issue (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22367"},"#22367"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix ResourceGroup report local usage (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22340"},"#22340"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix ResourceGroups loading (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21781"},"#21781"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix issue of field 'topic' is not set when handle GetSchema request (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22377"},"#22377"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong double-checked locking for readOnActiveConsumerTask in dispatcher (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22279"},"#22279"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," fix mismatch between dispatcher.consumerList and dispatcher.consumerSet (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22283"},"#22283"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]","Expose ledger timestamp  (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22338"},"#22338"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][admin]"," Fix the ",(0,l.yg)("inlineCode",{parentName:"li"},"createMissingPartitions")," doesn't response correctly (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22311"},"#22311"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add createTopicIfDoesNotExist option to RawReader constructor (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22264"},"#22264"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add fine-grain authorization to ns/topic management endpoints (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22309"},"#22309"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add missing configuration keys for caching catch-up reads (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22295"},"#22295"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Change log level to reduce duplicated logs (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22147"},"#22147"),")")),(0,l.yg)("h3",{id:"client"},"Client"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Consumer lost message ack due to race condition in acknowledge with batch message (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22353"},"#22353"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix wrong results of hasMessageAvailable and readNext after seeking by timestamp (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22363"},"#22363"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," GenericProtobufNativeSchema not implement getNativeSchema method. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22204"},"#22204"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Unclear error message when creating a consumer with two same topics (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22255"},"#22255"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," fix Reader.hasMessageAvailable might return true after seeking to latest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22201"},"#22201"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]","Fixed getting an incorrect ",(0,l.yg)("inlineCode",{parentName:"li"},"maxMessageSize")," value when accessing multiple clusters in the same process (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22306"},"#22306"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][client]"," Add backoff for ",(0,l.yg)("inlineCode",{parentName:"li"},"seek")," (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20963"},"#20963"),")")),(0,l.yg)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][fn]"," enable Go function token auth and TLS (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20468"},"#20468"),")")),(0,l.yg)("h3",{id:"others"},"Others"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Remove the call to sun InetAddressCachePolicy (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22329"},"#22329"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Make ConcurrentBitSet thread safe (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22361"},"#22361"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ws]"," Check the validity of config before start websocket service (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22231"},"#22231"),")")),(0,l.yg)("h3",{id:"library-updates"},"Library updates"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade jose4j to 0.9.4 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22273"},"#22273"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Bump google.golang.org/grpc from 1.38.0 to 1.56.3 in /pulsar-function-go (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21444"},"#21444"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Go Functions security updates (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21844"},"#21844"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade Zookeeper to 3.9.2 to address CVE-2024-23944 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22275"},"#22275"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade prometheus client_golang to v1.12.2 to fix CVE-2022-21698 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20579"},"#20579"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][build]"," Upgrade alluxio version to 2.9.3 to fix CVE-2023-38889 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21715"},"#21715"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Include native epoll library for Netty for arm64 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22319"},"#22319"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Pin Netty version in pulsar-io/alluxio (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21728"},"#21728"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Netty version to 4.1.105.Final (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21923"},"#21923"),")")),(0,l.yg)("h3",{id:"tests--ci"},"Tests & CI"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][ci]"," Tolerate mount option change failing in CI (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22241"},"#22241"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ci]","[branch-3.0]"," Increase Maven's heap size from 1024m to 1500m as it is in master"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix flaky ManagedLedgerErrorsTest.recoverAfterZnodeVersionError (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22368"},"#22368"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix flaky RGUsageMTAggrWaitForAllMsgsTest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22252"},"#22252"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix flaky test BrokerServiceAutoSubscriptionCreationTest (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22190"},"#22190"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix flaky test ManagedLedgerTest.testGetNumberOfEntriesInStorage (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22344"},"#22344"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]","[branch-3.0]"," Fix broken ManagedLedgerTest.testGetNumberOfEntriesInStorage"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix the tests with same namespace name (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22240"},"#22240"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][test]","[branch-3.0]"," Improve ManagedLedgerTest.testGetNumberOfEntriesInStorage"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade checkstyle to 10.14.2 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22291"},"#22291"),")")),(0,l.yg)("p",null,"For the complete list, check the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare/v3.0.3...v3.0.4"},"full changelog"),"."))}h.isMDXComponent=!0}}]);