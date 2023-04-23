"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},s=void 0,a={unversionedId:"concepts-proxy-sni-routing",id:"version-2.7.4/concepts-proxy-sni-routing",title:"Proxy support with SNI routing",description:"Pulsar Proxy with SNI routing",source:"@site/versioned_docs/version-2.7.4/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/docs/2.7.4/concepts-proxy-sni-routing",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/concepts-proxy-sni-routing.md",tags:[],version:"2.7.4",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Topic Compaction",permalink:"/docs/2.7.4/concepts-topic-compaction"},next:{title:"Multiple advertised listeners",permalink:"/docs/2.7.4/concepts-multiple-advertised-listeners"}},l={},p=[{value:"Pulsar Proxy with SNI routing",id:"pulsar-proxy-with-sni-routing",level:2},{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:3},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:4},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:4},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:4}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pulsar-proxy-with-sni-routing"},"Pulsar Proxy with SNI routing"),(0,o.kt)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,o.kt)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.kt)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,o.kt)("p",null,"Pulsar clients support ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,o.kt)("h3",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,o.kt)("p",null,"To support ",(0,o.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,o.kt)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,o.kt)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."),(0,o.kt)("h4",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,o.kt)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar client SNI",src:r(53719).Z,width:"1518",height:"974"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,o.kt)("p",null,"To configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update TLS port (",(0,o.kt)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,o.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling."),(0,o.kt)("li",{parentName:"ol"},"Configure server ports (",(0,o.kt)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.kt)("inlineCode",{parentName:"li"},"4443")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,o.kt)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,o.kt)("p",null,"The following is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.kt)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."),(0,o.kt)("p",null,"The following example shows mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where request should be redirected. For example, if the client sends the SNI header ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nserver_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n\n")),(0,o.kt)("p",null,"After you configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,o.kt)("h4",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,o.kt)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nString brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n\n')),(0,o.kt)("h4",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,o.kt)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar client SNI",src:r(41373).Z,width:"1494",height:"598"})),(0,o.kt)("p",null,"In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."),(0,o.kt)("p",null,"(a) Configure the cluster metadata for ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n--url http://east-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://east-ats-proxy:443\n\n")),(0,o.kt)("p",null,"(b) Configure the cluster metadata for ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n--url http://west-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://west-ats-proxy:443\n\n")))}c.isMDXComponent=!0},53719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},41373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);