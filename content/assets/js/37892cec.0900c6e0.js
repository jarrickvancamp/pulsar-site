"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[c]="string"==typeof e?e:s,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const i={id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"},l=void 0,a={unversionedId:"concepts-multiple-advertised-listeners",id:"version-2.6.4/concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",description:"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes.",source:"@site/versioned_docs/version-2.6.4/concepts-multiple-advertised-listeners.md",sourceDirName:".",slug:"/concepts-multiple-advertised-listeners",permalink:"/docs/2.6.4/concepts-multiple-advertised-listeners",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/concepts-multiple-advertised-listeners.md",tags:[],version:"2.6.4",frontMatter:{id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"}},o={},u=[{value:"Advertised listeners",id:"advertised-listeners",level:2},{value:"Use multiple advertised listeners",id:"use-multiple-advertised-listeners",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes."),(0,s.kt)("h2",{id:"advertised-listeners"},"Advertised listeners"),(0,s.kt)("p",null,"To ensure clients in both internal and external networks can connect to a Pulsar cluster, Pulsar introduces ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," configuration options into the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-configuration#broker"},"broker configuration file")," to ensure that the broker supports exposing multiple advertised listeners and support the separation of internal and external network traffic."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is used to specify multiple advertised listeners. The broker uses the listener as the broker identifier in the load manager and the bundle owner data. The ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is formatted as ",(0,s.kt)("inlineCode",{parentName:"p"},"<listener_name>:pulsar://<host>:<port>, <listener_name>:pulsar+ssl://<host>:<port>"),". You can set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," like\n",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners=internal:pulsar://192.168.1.11:6660,internal:pulsar+ssl://192.168.1.11:6651"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is used to specify the internal service URL that the broker uses. You can specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," by choosing one of the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),". The broker uses the listener name of the first advertised listener as the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," if the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is absent."))),(0,s.kt)("p",null,"After setting up the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),", clients can choose one of the listeners as the service URL to create a connection to the broker as long as the network is accessible. However, if the client creates producers or consumer on a topic, the client must send a lookup requests to the broker for getting the owner broker, then connect to the owner broker to publish messages or consume messages. Therefore, You must allow the client to get the corresponding service URL with the same advertised listener name as the one used by the client. This helps keep client-side simple and secure."),(0,s.kt)("h2",{id:"use-multiple-advertised-listeners"},"Use multiple advertised listeners"),(0,s.kt)("p",null,"This example shows how a Pulsar client uses multiple advertised listeners."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Configure multiple advertised listeners in the broker configuration file.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\nadvertisedListeners={listenerName}:pulsar://xxxx:6650,\n{listenerName}:pulsar+ssl://xxxx:6651\n\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Specify the listener name for the client.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://xxxx:6650")\n    .listenerName("external")\n    .build();\n\n')))}c.isMDXComponent=!0}}]);