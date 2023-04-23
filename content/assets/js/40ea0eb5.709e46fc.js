"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=s,d=p["".concat(u,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={id:"cookbooks-message-queue",title:"Using Pulsar as a message queue",sidebar_label:"Message queue"},a=void 0,i={unversionedId:"cookbooks-message-queue",id:"version-2.2.1/cookbooks-message-queue",title:"Using Pulsar as a message queue",description:"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely must be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken.",source:"@site/versioned_docs/version-2.2.1/cookbooks-message-queue.md",sourceDirName:".",slug:"/cookbooks-message-queue",permalink:"/docs/2.2.1/cookbooks-message-queue",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/cookbooks-message-queue.md",tags:[],version:"2.2.1",frontMatter:{id:"cookbooks-message-queue",title:"Using Pulsar as a message queue",sidebar_label:"Message queue"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Encryption ",permalink:"/docs/2.2.1/cookbooks-encryption"},next:{title:"Simulation tools",permalink:"/docs/2.2.1/develop-tools"}},u={},c=[{value:"Java clients",id:"java-clients",level:2},{value:"Python clients",id:"python-clients",level:2},{value:"C++ clients",id:"c-clients",level:2},{value:"Go clients",id:"go-clients",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely ",(0,s.kt)("em",{parentName:"p"},"must")," be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken."),(0,s.kt)("p",null,"Pulsar is a great choice for a message queue because:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"it was built with ",(0,s.kt)("a",{parentName:"li",href:"/docs/2.2.1/concepts-architecture-overview#persistent-storage"},"persistent message storage")," in mind"),(0,s.kt)("li",{parentName:"ul"},"it offers automatic load balancing across ",(0,s.kt)("a",{parentName:"li",href:"/docs/2.2.1/reference-terminology#consumer"},"consumers")," for messages on a topic (or custom load balancing if you wish)")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You can use the same Pulsar installation to act as a real-time message bus and as a message queue if you wish (or just one or the other). You can set aside some topics for real-time purposes and other topics for message queue purposes (or use specific namespaces for either purpose if you wish).")),(0,s.kt)("h1",{id:"client-configuration-changes"},"Client configuration changes"),(0,s.kt)("p",null,"To use a Pulsar ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-terminology#topic"},"topic")," as a message queue, you should distribute the receiver load on that topic across several consumers (the optimal number of consumers will depend on the load). Each consumer must:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Establish a ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2.1/concepts-messaging#shared"},"shared subscription")," and use the same subscription name as the other consumers (otherwise the subscription is not shared and the consumers can't act as a processing ensemble)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you'd like to have tight control over message dispatching across consumers, set the consumers' ",(0,s.kt)("strong",{parentName:"p"},"receiver queue")," size very low (potentially even to 0 if necessary). Each Pulsar ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-terminology#consumer"},"consumer")," has a receiver queue that determines how many messages the consumer will attempt to fetch at a time. A receiver queue of 1000 (the default), for example, means that the consumer will attempt to process 1000 messages from the topic's backlog upon connection. Setting the receiver queue to zero essentially means ensuring that each consumer is only doing one thing at a time."),(0,s.kt)("p",{parentName:"li"}," The downside to restricting the receiver queue size of consumers is that that limits the potential throughput of those consumers and cannot be used with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2.1/reference-terminology#partitioned-topic"},"partitioned topics"),". Whether the performance/control trade-off is worthwhile will depend on your use case."))),(0,s.kt)("h2",{id:"java-clients"},"Java clients"),(0,s.kt)("p",null,"Here's an example Java consumer configuration that uses a shared subscription:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport org.apache.pulsar.client.api.SubscriptionType;\n\nString SERVICE_URL = "pulsar://localhost:6650";\nString TOPIC = "persistent://public/default/mq-topic-1";\nString subscription = "sub-1";\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl(SERVICE_URL)\n        .build();\n\nConsumer consumer = client.newConsumer()\n        .topic(TOPIC)\n        .subscriptionName(subscription)\n        .subscriptionType(SubscriptionType.Shared)\n        // If you\'d like to restrict the receiver queue size\n        .receiverQueueSize(10)\n        .subscribe();\n\n')),(0,s.kt)("h2",{id:"python-clients"},"Python clients"),(0,s.kt)("p",null,"Here's an example Python consumer configuration that uses a shared subscription:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Client, ConsumerType\n\nSERVICE_URL = "pulsar://localhost:6650"\nTOPIC = "persistent://public/default/mq-topic-1"\nSUBSCRIPTION = "sub-1"\n\nclient = Client(SERVICE_URL)\nconsumer = client.subscribe(\n    TOPIC,\n    SUBSCRIPTION,\n    # If you\'d like to restrict the receiver queue size\n    receiver_queue_size=10,\n    consumer_type=ConsumerType.Shared)\n\n')),(0,s.kt)("h2",{id:"c-clients"},"C++ clients"),(0,s.kt)("p",null,"Here's an example C++ consumer configuration that uses a shared subscription:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://public/defaultmq-topic-1";\nstd::string subscription = "sub-1";\n\nClient client(serviceUrl);\n\nConsumerConfiguration consumerConfig;\nconsumerConfig.setConsumerType(ConsumerType.ConsumerShared);\n// If you\'d like to restrict the receiver queue size\nconsumerConfig.setReceiverQueueSize(10);\n\nConsumer consumer;\n\nResult result = client.subscribe(topic, subscription, consumerConfig, consumer);\n\n')),(0,s.kt)("h2",{id:"go-clients"},"Go clients"),(0,s.kt)("p",null,"Here is an example of a Go consumer configuration that uses a shared subscription:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'\nimport "github.com/apache/pulsar-client-go/pulsar"\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:             "persistent://public/default/mq-topic-1",\n    SubscriptionName:  "sub-1",\n    Type:              pulsar.Shared,\n    ReceiverQueueSize: 10, // If you\'d like to restrict the receiver queue size\n})\nif err != nil {\n    log.Fatal(err)\n}\n\n')))}p.isMDXComponent=!0}}]);