"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(a),d=s,u=h["".concat(c,".").concat(d)]||h[d]||m[d]||n;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(87462),s=(a(67294),a(3905));const n={id:"concepts-schema-registry",title:"Schema Registry",sidebar_label:"Schema Registry",original_id:"concepts-schema-registry"},i=void 0,o={unversionedId:"concepts-schema-registry",id:"version-2.4.0/concepts-schema-registry",title:"Schema Registry",description:"Type safety is extremely important in any application built around a message bus like Pulsar. Producers and consumers need some kind of mechanism for coordinating types at the topic level lest a wide variety of potential problems arise (for example serialization and deserialization issues). Applications typically adopt one of two basic approaches to type safety in messaging:",source:"@site/versioned_docs/version-2.4.0/concepts-schema-registry.md",sourceDirName:".",slug:"/concepts-schema-registry",permalink:"/docs/2.4.0/concepts-schema-registry",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/concepts-schema-registry.md",tags:[],version:"2.4.0",frontMatter:{id:"concepts-schema-registry",title:"Schema Registry",sidebar_label:"Schema Registry",original_id:"concepts-schema-registry"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Tiered Storage",permalink:"/docs/2.4.0/concepts-tiered-storage"},next:{title:"Overview",permalink:"/docs/2.4.0/functions-overview"}},c={},l=[{value:"Note",id:"note",level:4},{value:"Basic architecture",id:"basic-architecture",level:2},{value:"How schemas work",id:"how-schemas-work",level:2},{value:"Schema versions",id:"schema-versions",level:2},{value:"Supported schema formats",id:"supported-schema-formats",level:2},{value:"Managing Schemas",id:"managing-schemas",level:2}],p={toc:l};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Type safety is extremely important in any application built around a message bus like Pulsar. Producers and consumers need some kind of mechanism for coordinating types at the topic level lest a wide variety of potential problems arise (for example serialization and deserialization issues). Applications typically adopt one of two basic approaches to type safety in messaging:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'A "client-side" approach in which message producers and consumers are responsible for not only serializing and deserializing messages (which consist of raw bytes) but also "knowing" which types are being transmitted via which topics. If a producer is sending temperature sensor data on the topic ',(0,s.kt)("inlineCode",{parentName:"li"},"topic-1"),", consumers of that topic will run into trouble if they attempt to parse that data as, say, moisture sensor readings."),(0,s.kt)("li",{parentName:"ol"},'A "server-side" approach in which producers and consumers inform the system which data types can be transmitted via the topic. With this approach, the messaging system enforces type safety and ensures that producers and consumers remain synced.')),(0,s.kt)("p",null,"Both approaches are available in Pulsar, and you're free to adopt one or the other or to mix and match on a per-topic basis."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'For the "client-side" approach, producers and consumers can send and receive messages consisting of raw byte arrays and leave all type safety enforcement to the application on an "out-of-band" basis.'),(0,s.kt)("li",{parentName:"ol"},'For the "server-side" approach, Pulsar has a built-in ',(0,s.kt)("strong",{parentName:"li"},"schema registry")," that enables clients to upload data schemas on a per-topic basis. Those schemas dictate which data types are recognized as valid for that topic.")),(0,s.kt)("h4",{id:"note"},"Note"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Currently, the Pulsar schema registry is only available for the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.4.0/client-libraries-java"},"Java client"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.4.0/client-libraries-go"},"CGo client"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.4.0/client-libraries-python"},"Python client"),", and ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.4.0/client-libraries-cpp"},"C++ client"),".")),(0,s.kt)("h2",{id:"basic-architecture"},"Basic architecture"),(0,s.kt)("p",null,"Schemas are automatically uploaded when you create a typed Producer with a Schema. Additionally, Schemas can be manually uploaded to, fetched from, and updated via Pulsar's ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#tag/schemas"},"REST")," API."),(0,s.kt)("blockquote",null,(0,s.kt)("h4",{parentName:"blockquote",id:"other-schema-registry-backends"},"Other schema registry backends"),(0,s.kt)("p",{parentName:"blockquote"},"Out of the box, Pulsar uses the ",(0,s.kt)("a",{parentName:"p",href:"concepts-architecture-overview#persistent-storage"},"Apache BookKeeper")," log storage system for schema storage. You can, however, use different backends if you wish. Documentation for custom schema storage logic is coming soon.")),(0,s.kt)("h2",{id:"how-schemas-work"},"How schemas work"),(0,s.kt)("p",null,"Pulsar schemas are applied and enforced ",(0,s.kt)("em",{parentName:"p"},"at the topic level")," (schemas cannot be applied at the namespace or tenant level). Producers and consumers upload schemas to Pulsar brokers."),(0,s.kt)("p",null,"Pulsar schemas are fairly simple data structures that consist of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("strong",{parentName:"li"},"name"),". In Pulsar, a schema's name is the topic to which the schema is applied."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("strong",{parentName:"li"},"payload"),", which is a binary representation of the schema"),(0,s.kt)("li",{parentName:"ul"},"A schema ",(0,s.kt)("a",{parentName:"li",href:"#supported-schema-formats"},(0,s.kt)("strong",{parentName:"a"},"type"))),(0,s.kt)("li",{parentName:"ul"},"User-defined ",(0,s.kt)("strong",{parentName:"li"},"properties")," as a string/string map. Usage of properties is wholly application specific. Possible properties might be the Git hash associated with a schema, an environment like ",(0,s.kt)("inlineCode",{parentName:"li"},"dev")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"prod"),", etc.")),(0,s.kt)("h2",{id:"schema-versions"},"Schema versions"),(0,s.kt)("p",null,"Each schema stored with a topic has a version. Schema version manages schema changes happening within a topic."),(0,s.kt)("p",null,"Messages produced with a given schema is tagged with a schema version. Therefore, when a message is consumed by a Pulsar client, the Pulsar client can use the schema version to retrieve the corresponding schema and deserialize data."),(0,s.kt)("p",null,"Schemas are versioned in succession.The schema is stored in a broker that handles the associated topics, so that version assignments can be made."),(0,s.kt)("p",null,"Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version."),(0,s.kt)("p",null,"In order to illustrate how schema versioning works, let's walk through an example. Imagine that the Pulsar ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.4.0/client-libraries-java"},"Java client")," created using the code below attempts to connect to Pulsar and begin sending messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-data")\n        .sendTimeout(3, TimeUnit.SECONDS)\n        .create();\n\n')),(0,s.kt)("p",null,"The table below lists the possible scenarios when this connection attempt occurs and what will happen in light of each scenario:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Scenario"),(0,s.kt)("th",{parentName:"tr",align:"left"},"What happens"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"No schema exists for the topic"),(0,s.kt)("td",{parentName:"tr",align:"left"},'The producer is created using the given schema. The schema is transmitted to the broker and stored (since no existing schema is "compatible" with the ',(0,s.kt)("inlineCode",{parentName:"td"},"SensorReading")," schema). Any consumer created using the same schema/topic can consume messages from the ",(0,s.kt)("inlineCode",{parentName:"td"},"sensor-data")," topic.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"A schema already exists; the producer connects using the same schema that's already stored"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The schema is transmitted to the Pulsar broker. The broker determines that the schema is compatible. The broker attempts to store the schema in ",(0,s.kt)("a",{parentName:"td",href:"/docs/2.4.0/concepts-architecture-overview#persistent-storage"},"BookKeeper")," but then determines that it's already stored, so it's then used to tag produced messages.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"A schema already exists; the producer connects using a new schema that is compatible"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The producer transmits the schema to the broker. The broker determines that the schema is compatible and stores the new schema as the current version (with a new version number).")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Schemas are versioned in succession. Schema storage happens in the broker that handles the associated topic so that version assignments can be made. Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version.")),(0,s.kt)("p",null,"If you do not know the schema type of a Pulsar topic in advance, you can use AUTO schema to produce or consume generic records to or from brokers."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"AUTO_PRODUCE")," schema helps a producer validate whether the bytes sent by the producer is compatible with the schema of a topic."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"AUTO_CONSUME")," schema helps a Pulsar topic validate whether the bytes sent by a Pulsar topic is compatible with a consumer, that is, the Pulsar topic deserializes messages into language-specific objects using the schema retrieved from broker-side.")),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"AUTO_CONSUME")," mode, you can set the ",(0,s.kt)("inlineCode",{parentName:"p"},"useProvidedSchemaAsReaderSchema")," flag to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),". Therefore, the messages can be decoded based on the schema associated with the messages."),(0,s.kt)("h2",{id:"supported-schema-formats"},"Supported schema formats"),(0,s.kt)("p",null,"The following formats are supported by the Pulsar schema registry:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"None. If no schema is specified for a topic, producers and consumers will handle raw bytes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"String")," (used for UTF-8-encoded strings)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.json.org/"},"JSON")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Protobuf")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://avro.apache.org/"},"Avro"))),(0,s.kt)("p",null,"For usage instructions, see the documentation for your preferred client library:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/2.4.0/client-libraries-java#schemas"},"Java"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Support for other schema formats will be added in future releases of Pulsar.")),(0,s.kt)("p",null,"The following example shows how to define an Avro schema using the ",(0,s.kt)("inlineCode",{parentName:"p"},"GenericSchemaBuilder"),", generate a generic Avro schema using ",(0,s.kt)("inlineCode",{parentName:"p"},"GenericRecordBuilder"),", and consume messages into ",(0,s.kt)("inlineCode",{parentName:"p"},"GenericRecord"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"RecordSchemaBuilder")," to build a schema."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nRecordSchemaBuilder recordSchemaBuilder = SchemaBuilder.record("schemaName");\nrecordSchemaBuilder.field("intField").type(SchemaType.INT32);\nSchemaInfo schemaInfo = recordSchemaBuilder.build(SchemaType.AVRO);\n\nProducer<GenericRecord> producer = client.newProducer(Schema.generic(schemaInfo)).create();\n\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"RecordBuilder")," to build the generic records."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nproducer.newMessage().value(schema.newRecordBuilder()\n            .set("intField", 32)\n            .build()).send();\n\n')))),(0,s.kt)("h2",{id:"managing-schemas"},"Managing Schemas"),(0,s.kt)("p",null,"You can use Pulsar admin tools to manage schemas for topics."))}h.isMDXComponent=!0}}]);