"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={id:"io-netty",title:"Netty Tcp or Udp Connector",sidebar_label:"Netty Tcp or Udp Connector",original_id:"io-netty"},o=void 0,i={unversionedId:"io-netty",id:"version-2.4.2/io-netty",title:"Netty Tcp or Udp Connector",description:"Source",source:"@site/versioned_docs/version-2.4.2/io-netty.md",sourceDirName:".",slug:"/io-netty",permalink:"/docs/2.4.2/io-netty",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/io-netty.md",tags:[],version:"2.4.2",frontMatter:{id:"io-netty",title:"Netty Tcp or Udp Connector",sidebar_label:"Netty Tcp or Udp Connector",original_id:"io-netty"}},p={},u=[{value:"Source",id:"source",level:2},{value:"Source Configuration Options",id:"source-configuration-options",level:3},{value:"Configuration Example",id:"configuration-example",level:3},{value:"Usage example",id:"usage-example",level:3},{value:"Tcp example",id:"tcp-example",level:4},{value:"Http example",id:"http-example",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"The Netty Source connector opens a port that accept incoming data via the configured network protocol and publish it to a user-defined Pulsar topic.\nAlso, this connector is suggested to be used in a containerized (e.g. k8s) deployment.\nOtherwise, if the connector is running in process or thread mode, the instances may be conflicting on listening to ports."),(0,r.kt)("h3",{id:"source-configuration-options"},"Source Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tcp")),(0,r.kt)("td",{parentName:"tr",align:null},"The network protocol over which data is trasmitted to netty. Valid values include HTTP, TCP, and UDP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"127.0.0.1")),(0,r.kt)("td",{parentName:"tr",align:null},"The host name or address that the source instance to listen on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10999")),(0,r.kt)("td",{parentName:"tr",align:null},"The port that the source instance to listen on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfThreads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads of Netty Tcp Server to accept incoming connections and handle the traffic of the accepted connections.")))),(0,r.kt)("h3",{id:"configuration-example"},"Configuration Example"),(0,r.kt)("p",null,"Here is a configuration Json example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$json"},'\n{\n    "type": "tcp",\n    "host": "127.0.0.1",\n    "port": "10911",\n    "numberOfThreads": "5"\n}\n\n')),(0,r.kt)("p",null,"Here is a configuration Yaml example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$yaml"},'\nconfigs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n')),(0,r.kt)("h3",{id:"usage-example"},"Usage example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start pulsar standalone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker pull apachepulsar/pulsar:2.4.0\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:2.4.0 bin/pulsar standalone\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start pulsar-io in standalone")),(0,r.kt)("h4",{id:"tcp-example"},"Tcp example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Config file netty-source-config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$yaml"},'\nconfigs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy configuration file to pulsar server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download netty connector and start netty connector")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-2.4.0/connectors/pulsar-io-netty-2.4.0.nar\n./bin/pulsar-admin sources localrun --archive pulsar-io-2.4.2.nar --tenant public --namespace default --name netty --destination-topic-name netty-topic --source-config-file netty-source-config.yaml --parallelism 1\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consume data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open another window for send data to netty source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-netty-standalone /bin/bash\napt-get update\napt-get -y install telnet\nroot@1d19327b2c67:/pulsar# telnet 127.0.0.1 10999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\nworld\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verification results")),(0,r.kt)("p",null,"In the consumer window just opened, you can see the following data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n----- got message -----\nhello\n\n----- got message -----\nworld\n\n")),(0,r.kt)("h4",{id:"http-example"},"Http example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Config file netty-source-config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$yaml"},'\nconfigs:\n    type: "http"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start netty source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-admin sources localrun --archive pulsar-io-2.4.2.nar --tenant public --namespace default --name netty --destination-topic-name netty-topic --source-config-file netty-source-config.yaml --parallelism 1\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verification results")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -X POST --data 'hello, world!' http://127.0.0.1:10999/\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verification results")),(0,r.kt)("p",null,"In the consumer window just opened, you can see the following data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n----- got message -----\nhello, world!\n\n")))}c.isMDXComponent=!0}}]);