"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5170],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>k});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),p=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,o(o({ref:a},u),{},{components:r})):n.createElement(k,o({ref:a},u))}));function k(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12620:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),t=(r(67294),r(3905));const i={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},o=void 0,l={unversionedId:"admin-api-brokers",id:"version-2.6.0/admin-api-brokers",title:"Managing Brokers",description:"Pulsar brokers consist of two components:",source:"@site/versioned_docs/version-2.6.0/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.6.0/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/admin-api-brokers.md",tags:[],version:"2.6.0",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},sidebar:"version-2.6.0/docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.6.0/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.6.0/admin-api-namespaces"}},s={},p=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST",id:"rest",level:6},{value:"Java",id:"java",level:6},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"CLI",id:"cli",level:6},{value:"REST",id:"rest-1",level:6},{value:"Java",id:"java-1",level:6},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java-2",level:4},{value:"List updated values",id:"list-updated-values",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-3",level:4},{value:"List all",id:"list-all",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-4",level:4}],u={toc:p};function d(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Pulsar brokers consist of two components:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-terminology#topic"},"topic")," lookup."),(0,t.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-terminology#message"},"message")," transfers.")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin#brokers"},(0,t.kt)("inlineCode",{parentName:"a"},"brokers"))," command of the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin"},(0,t.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin.html"},"PulsarAdmin")," object in the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/client-libraries-java"},"Java API"))),(0,t.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,t.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"See the ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,t.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,t.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,t.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,t.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n")),(0,t.kt)("h6",{id:"rest"},"REST"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster")),(0,t.kt)("h6",{id:"java"},"Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")),(0,t.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,t.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,t.kt)("h6",{id:"cli"},"CLI"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n')),(0,t.kt)("h6",{id:"rest-1"},"REST"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces")),(0,t.kt)("h6",{id:"java-1"},"Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")),(0,t.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,t.kt)("p",null,"One way to configure a Pulsar ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#broker"},"broker")," is to supply a ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-configuration#broker"},"configuration")," when the broker is ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-cli-tools#pulsar-broker"},"started up"),"."),(0,t.kt)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,t.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin#brokers"},(0,t.kt)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin"},(0,t.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,t.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,t.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,t.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,t.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,t.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,t.kt)("p",null,"The ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#brokers-update-dynamic-config"},(0,t.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,t.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.6.0/reference-configuration#broker-brokerShutdownTimeoutMs"},(0,t.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n")),(0,t.kt)("h4",{id:"rest-api"},"REST API"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue")),(0,t.kt)("h4",{id:"java-2"},"Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")),(0,t.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,t.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,t.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n")),(0,t.kt)("h4",{id:"rest-api-1"},"REST API"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration")),(0,t.kt)("h4",{id:"java-3"},"Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")),(0,t.kt)("h3",{id:"list-all"},"List all"),(0,t.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,t.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n")),(0,t.kt)("h4",{id:"rest-api-2"},"REST API"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values")),(0,t.kt)("h4",{id:"java-4"},"Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))}d.isMDXComponent=!0}}]);