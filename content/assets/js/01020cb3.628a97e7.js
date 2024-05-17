"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19822],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(58168),r=t(96540),s=t(20053),o=t(23104),l=t(56347),u=t(57485),i=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,i]=g({queryString:t,groupId:a}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),y(e)}),[i,y,s]),tabValues:s}}var h=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==l&&(p(n),u(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function k(e){const n=y(e);return r.createElement("div",{className:(0,s.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function w(e){const n=(0,h.A)();return r.createElement(k,(0,a.A)({key:String(n)},e))}},35791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),s=t(11470),o=t(19365);const l={id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",sidebar_label:"Run Pulsar in Docker",description:"Get started with Apache Pulsar on your local machine using Docker."},u=void 0,i={unversionedId:"getting-started-docker",id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",description:"Get started with Apache Pulsar on your local machine using Docker.",source:"@site/docs/getting-started-docker.md",sourceDirName:".",slug:"/getting-started-docker",permalink:"/docs/next/getting-started-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/getting-started-docker.md",tags:[],version:"current",frontMatter:{id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",sidebar_label:"Run Pulsar in Docker",description:"Get started with Apache Pulsar on your local machine using Docker."},sidebar:"docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/docs/next/getting-started-standalone"},next:{title:"Run Pulsar in Kubernetes",permalink:"/docs/next/getting-started-helm"}},c={},p=[{value:"Step1: Start Pulsar in Docker",id:"step1-start-pulsar-in-docker",level:2},{value:"Step 2: Use Pulsar in Docker",id:"step-2-use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Step 3: Get the topic statistics",id:"step-3-get-the-topic-statistics",level:2}],d={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."),(0,r.yg)("p",null,"If you have not installed Docker, download it following ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,r.yg)("p",null,"To run Pulsar in Docker, follow the steps below."),(0,r.yg)("h2",{id:"step1-start-pulsar-in-docker"},"Step1: Start Pulsar in Docker"),(0,r.yg)("p",null,"For macOS, Linux, and Windows, run the following command to start Pulsar within a Docker container."),(0,r.yg)(s.A,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:3.2.3 \\\nbin/pulsar standalone\n"))),(0,r.yg)(o.A,{value:"Windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -it ^\n-p 6650:6650 ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:3.2.3 ^\nbin/pulsar standalone\n")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You may encounter issues with the default RocksDB metadata store."),(0,r.yg)("p",{parentName:"admonition"},"We recommend you consider using the following environment variable to use ZooKeeper as the metadata store:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"...\n-e PULSAR_STANDALONE_USE_ZOOKEEPER=1 \\\n...\n")),(0,r.yg)("p",{parentName:"admonition"},"Don't apply this fix for existing Pulsar standalone instances if you don't want to loose your data.")),(0,r.yg)("p",null,"If you want to change Pulsar configurations and start Pulsar, run the following command by passing environment variables with the ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_PREFIX_")," prefix. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/e6b12c64b043903eb5ff2dc5186fe8030f157cfc/conf/standalone.conf"},"default configuration file")," for more details."),(0,r.yg)(s.A,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -it \\\n-e PULSAR_PREFIX_xxx=yyy \\\n-p 6650:6650  \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:3.2.3 sh \\\n-c "bin/apply-config-from-env.py \\\nconf/standalone.conf && \\\nbin/pulsar standalone"\n'))),(0,r.yg)(o.A,{value:"Windows",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -it ^\n-e PULSAR_PREFIX_xxx=yyy ^\n-p 6650:6650  ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:3.2.3 sh ^\n-c "bin/apply-config-from-env.py ^\nconf/standalone.conf && ^\nbin/pulsar standalone"\n')))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The docker container runs as UID 10000 and GID 0 by default. You need to ensure the mounted volumes give write permission to either UID 10000 or GID 0. Note that UID 10000 is arbitrary, so it is recommended to make these mounts writable for the root group (GID 0)."),(0,r.yg)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes to not start "fresh" every time the container is restarted. For details on the volumes, you can use ',(0,r.yg)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>"),"."),(0,r.yg)("li",{parentName:"ul"},"For Docker on Windows, make sure to configure it to use Linux containers."))),(0,r.yg)("p",null,"After starting Pulsar successfully, you can see ",(0,r.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"To perform a health check, you can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"bin/pulsar-admin brokers healthcheck")," command. For more information, see ",(0,r.yg)("a",{parentName:"li",href:"pathname:///reference/#/next/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.yg)("li",{parentName:"ul"},"When you start a local standalone cluster, a ",(0,r.yg)("inlineCode",{parentName:"li"},"public/default")," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/next/concepts-messaging#topics"},"Topics"),"."))),(0,r.yg)("h2",{id:"step-2-use-pulsar-in-docker"},"Step 2: Use Pulsar in Docker"),(0,r.yg)("p",null,"Pulsar offers a variety of ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/client-libraries"},"client libraries"),", such as ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/client-libraries-java"},"Java"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/client-libraries-go"},"Go"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/client-libraries-python"},"Python"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/client-libraries-cpp"},"C++"),"."),(0,r.yg)("p",null,"If you're running a local standalone cluster, you can use one of these root URLs to interact with your cluster:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,r.yg)("p",null,"The following example guides you to get started with Pulsar by using the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/3.5.x"},"Python client API"),"."),(0,r.yg)("p",null,"Install the Pulsar Python client library directly from ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client\n")),(0,r.yg)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.yg)("p",null,"Create a consumer and subscribe to the topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n")),(0,r.yg)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.yg)("p",null,"Start a producer to send some test messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n")),(0,r.yg)("h2",{id:"step-3-get-the-topic-statistics"},"Step 3: Get the topic statistics"),(0,r.yg)("p",null,"In Pulsar, you can use REST API, Java, or command-line tools to control every aspect of the system. For details on APIs, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"Admin API Overview"),"."),(0,r.yg)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n")),(0,r.yg)("p",null,"The output is something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n')))}g.isMDXComponent=!0}}]);