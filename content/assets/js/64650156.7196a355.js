"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},s=void 0,l={unversionedId:"adaptors-storm",id:"version-2.2.0/adaptors-storm",title:"Pulsar adaptor for Apache Storm",description:"Pulsar Storm is an adaptor for integrating with Apache Storm topologies. It provides core Storm implementations for sending and receiving data.",source:"@site/versioned_docs/version-2.2.0/adaptors-storm.md",sourceDirName:".",slug:"/adaptors-storm",permalink:"/docs/2.2.0/adaptors-storm",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/adaptors-storm.md",tags:[],version:"2.2.0",frontMatter:{id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Apache Spark",permalink:"/docs/2.2.0/adaptors-spark"},next:{title:"Tiered Storage",permalink:"/docs/2.2.0/cookbooks-tiered-storage"}},i={},p=[{value:"Using the Pulsar Storm Adaptor",id:"using-the-pulsar-storm-adaptor",level:2},{value:"Pulsar Spout",id:"pulsar-spout",level:2},{value:"Pulsar Bolt",id:"pulsar-bolt",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar Storm is an adaptor for integrating with ",(0,a.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm")," topologies. It provides core Storm implementations for sending and receiving data."),(0,a.kt)("p",null,"An application can inject data into a Storm topology via a generic Pulsar spout, as well as consume data from a Storm topology via a generic Pulsar bolt."),(0,a.kt)("h2",{id:"using-the-pulsar-storm-adaptor"},"Using the Pulsar Storm Adaptor"),(0,a.kt)("p",null,"Include dependency for Pulsar Storm Adaptor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-storm</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,a.kt)("h2",{id:"pulsar-spout"},"Pulsar Spout"),(0,a.kt)("p",null,"The Pulsar Spout allows for the data published on a topic to be consumed by a Storm topology. It emits a Storm tuple based on the message received and the ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageToValuesMapper")," provided by the client."),(0,a.kt)("p",null,"The tuples that fail to be processed by the downstream bolts will be re-injected by the spout with an exponential backoff, within a configurable timeout (the default is 60 seconds) or a configurable number of retries, whichever comes first, after which it is acknowledged by the consumer. Here's an example construction of a spout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n// Configure a Pulsar Client\nClientConfiguration clientConf = new ClientConfiguration();\n\n// Configure a Pulsar Consumer\nConsumerConfiguration consumerConf = new ConsumerConfiguration();\n\n@SuppressWarnings("serial")\nMessageToValuesMapper messageToValuesMapper = new MessageToValuesMapper() {\n\n    @Override\n    public Values toValues(Message msg) {\n        return new Values(new String(msg.getData()));\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n        declarer.declare(new Fields("string"));\n    }\n};\n\n// Configure a Pulsar Spout\nPulsarSpoutConfiguration spoutConf = new PulsarSpoutConfiguration();\nspoutConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nspoutConf.setTopic("persistent://my-property/usw/my-ns/my-topic1");\nspoutConf.setSubscriptionName("my-subscriber-name1");\nspoutConf.setMessageToValuesMapper(messageToValuesMapper);\n\n// Create a Pulsar Spout\nPulsarSpout spout = new PulsarSpout(spoutConf, clientConf, consumerConf);\n\n')),(0,a.kt)("h2",{id:"pulsar-bolt"},"Pulsar Bolt"),(0,a.kt)("p",null,"The Pulsar bolt allows data in a Storm topology to be published on a topic. It publishes messages based on the Storm tuple received and the ",(0,a.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper")," provided by the client."),(0,a.kt)("p",null,"A partitioned topic can also be used to publish messages on different topics. In the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper"),', a "key" will need to be provided in the message which will send the messages with the same key to the same topic. Here\'s an example bolt:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n// Configure a Pulsar Client\nClientConfiguration clientConf = new ClientConfiguration();\n\n// Configure a Pulsar Producer\nProducerConfiguration producerConf = new ProducerConfiguration();\n\n@SuppressWarnings("serial")\nTupleToMessageMapper tupleToMessageMapper = new TupleToMessageMapper() {\n\n    @Override\n    public Message toMessage(Tuple tuple) {\n        String receivedMessage = tuple.getString(0);\n        // message processing\n        String processedMsg = receivedMessage + "-processed";\n        return MessageBuilder.create().setContent(processedMsg.getBytes()).build();\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n    }\n};\n\n// Configure a Pulsar Bolt\nPulsarBoltConfiguration boltConf = new PulsarBoltConfiguration();\nboltConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nboltConf.setTopic("persistent://my-property/usw/my-ns/my-topic2");\nboltConf.setTupleToMessageMapper(tupleToMessageMapper);\n\n// Create a Pulsar Bolt\nPulsarBolt bolt = new PulsarBolt(boltConf, clientConf);\n\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can find a complete example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-storm/src/test/java/org/apache/pulsar/storm/example/StormExample.java"},"here"),"."))}c.isMDXComponent=!0}}]);