"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Disabled Hostname Verification makes Brokers, Proxies vulnerable to MITM attack (CVE-2022-33682)",l={unversionedId:"CVE-2022-33682",id:"CVE-2022-33682",title:"Disabled Hostname Verification makes Brokers, Proxies vulnerable to MITM attack (CVE-2022-33682)",description:"PRODUCT AFFECTED:",source:"@site/security/CVE-2022-33682.md",sourceDirName:".",slug:"/CVE-2022-33682",permalink:"/security/CVE-2022-33682",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"PRODUCT AFFECTED:",id:"product-affected",level:2},{value:"PROBLEM:",id:"problem",level:2},{value:"WORKAROUND:",id:"workaround",level:2},{value:"RELATED LINKS:",id:"related-links",level:2},{value:"ACKNOWLEDGEMENTS:",id:"acknowledgements",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"disabled-hostname-verification-makes-brokers-proxies-vulnerable-to-mitm-attack-cve-2022-33682"},"Disabled Hostname Verification makes Brokers, Proxies vulnerable to MITM attack (CVE-2022-33682)"),(0,a.kt)("h2",{id:"product-affected"},"PRODUCT AFFECTED:"),(0,a.kt)("p",null,"This issue affects Apache Pulsar 2.10, 2.6 and earlier, 2.7, 2.8, 2.9."),(0,a.kt)("h2",{id:"problem"},"PROBLEM:"),(0,a.kt)("p",null,"Severity: high"),(0,a.kt)("p",null,"TLS hostname verification cannot be enabled in the Pulsar Broker's Java Client, the Pulsar Broker's Java Admin Client, the Pulsar WebSocket Proxy's Java Client, and the Pulsar Proxy's Admin Client leaving intra-cluster connections and geo-replication connections vulnerable to man in the middle attacks, which could leak credentials, configuration data, message data, and any other data sent by these clients. The vulnerability is for both the pulsar+ssl protocol and HTTPS."),(0,a.kt)("p",null,"An attacker can only take advantage of this vulnerability by taking control of a machine 'between' the client and the server. The attacker must then actively manipulate traffic to perform the attack by providing the client with a cryptographically valid certificate for an unrelated host."),(0,a.kt)("p",null,"This issue affects Apache Pulsar Broker, Proxy, and WebSocket Proxy versions 2.7.0 to 2.7.4; 2.8.0 to 2.8.3; 2.9.0 to 2.9.2; 2.10.0; 2.6.4 and earlier."),(0,a.kt)("p",null,"This issue has been assigned ",(0,a.kt)("a",{parentName:"p",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33682"},"CVE-2022-33682"),"."),(0,a.kt)("h2",{id:"workaround"},"WORKAROUND:"),(0,a.kt)("p",null,"Any users running affected versions of the Pulsar Broker, Pulsar Proxy, or Pulsar WebSocket Proxy should rotate static authentication data vulnerable to man in the middle attacks used by these applications, including tokens and passwords."),(0,a.kt)("p",null,"To enable hostname verification, update the following configuration files."),(0,a.kt)("p",null,"In the Broker configuration (broker.conf, by default) and in the WebSocket Proxy configuration (websocket.conf, by default), set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brokerClient_tlsHostnameVerificationEnable=true\n")),(0,a.kt)("p",null,'In Pulsar Helm chart deployments, the Broker and WebSocket Proxy setting name should be prefixed with "PULSAR',(0,a.kt)("em",{parentName:"p"},"PREFIX"),'".'),(0,a.kt)("p",null,"In the Proxy configuration (proxy.conf, by default), set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tlsHostnameVerificationEnabled=true\n")),(0,a.kt)("p",null,"2.7 users should upgrade Pulsar Brokers, Proxies, and WebSocket Proxies to 2.7.5, rotate vulnerable authentication data, including tokens and passwords, and apply the above configuration."),(0,a.kt)("p",null,"2.8 users should upgrade Pulsar Brokers, Proxies, and WebSocket Proxies to 2.8.4, rotate vulnerable authentication data, including tokens and passwords, and apply the above configuration."),(0,a.kt)("p",null,"2.9 users should upgrade Pulsar Brokers, Proxies, and WebSocket Proxies to 2.9.3, rotate vulnerable authentication data, including tokens and passwords, and apply the above configuration."),(0,a.kt)("p",null,"2.10 users should upgrade Pulsar Brokers, Proxies, and WebSocket Proxies to 2.10.1, rotate vulnerable authentication data, including tokens and passwords, and apply the above configuration."),(0,a.kt)("p",null,"Any users running Pulsar Brokers, Proxies, and WebSocket Proxies for 2.6.4 and earlier should upgrade to one of the above patched versions, rotate vulnerable authentication data, including tokens and passwords, and apply the above configuration."),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33682"},"CVE-2022-33682 at cve.mitre.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/l0ynfl161qghwfcgbbl8ld9hzbl9t3yx"},"https://lists.apache.org/thread/l0ynfl161qghwfcgbbl8ld9hzbl9t3yx"))),(0,a.kt)("h2",{id:"acknowledgements"},"ACKNOWLEDGEMENTS:"),(0,a.kt)("p",null,"This issue was discovered by Michael Marshall of DataStax."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}d.isMDXComponent=!0}}]);