"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29156],{3905:(n,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>f});var t=e(67294);function i(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function s(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function l(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){i(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function u(n,a){if(null==n)return{};var e,t,i=function(n,a){if(null==n)return{};var e,t,i={},s=Object.keys(n);for(t=0;t<s.length;t++)e=s[t],a.indexOf(e)>=0||(i[e]=n[e]);return i}(n,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)e=s[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var o=t.createContext({}),r=function(n){var a=t.useContext(o),e=a;return n&&(e="function"==typeof n?n(a):l(l({},a),n)),e},c=function(n){var a=r(n.components);return t.createElement(o.Provider,{value:a},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var a=n.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(n,a){var e=n.components,i=n.mdxType,s=n.originalType,o=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),p=r(e),d=i,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return e?t.createElement(f,l(l({ref:a},c),{},{components:e})):t.createElement(f,l({ref:a},c))}));function f(n,a){var e=arguments,i=a&&a.mdxType;if("string"==typeof n||i){var s=e.length,l=new Array(s);l[0]=d;var u={};for(var o in a)hasOwnProperty.call(a,o)&&(u[o]=a[o]);u.originalType=n,u[p]="string"==typeof n?n:i,l[1]=u;for(var r=2;r<s;r++)l[r]=e[r];return t.createElement.apply(null,l)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},95593:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>r});var t=e(87462),i=(e(67294),e(3905));const s={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},l=void 0,u={unversionedId:"admin-api-functions",id:"version-2.6.1/admin-api-functions",title:"Manage Functions",description:"Pulsar Functions are lightweight compute processes that",source:"@site/versioned_docs/version-2.6.1/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/2.6.1/admin-api-functions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/admin-api-functions.md",tags:[],version:"2.6.1",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Non-Partitioned topics",permalink:"/docs/2.6.1/admin-api-non-partitioned-topics"},next:{title:"Kafka client wrapper",permalink:"/docs/2.6.1/adaptors-kafka"}},o={},r=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Admin CLI",id:"admin-cli",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java Admin API",id:"java-admin-api",level:4},{value:"Update a function",id:"update-a-function",level:3},{value:"Admin CLI",id:"admin-cli-1",level:4},{value:"REST Admin API",id:"rest-admin-api",level:4},{value:"Java Admin API",id:"java-admin-api-1",level:4},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-2",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java Admin API",id:"java-admin-api-2",level:4},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-3",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java",level:4},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-4",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java Admin API",id:"java-admin-api-3",level:4},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-5",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java Admin API",id:"java-admin-api-4",level:4},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-6",level:4},{value:"REST API",id:"rest-api-5",level:4},{value:"Java Admin API",id:"java-admin-api-5",level:4},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-7",level:4},{value:"REST API",id:"rest-api-6",level:4},{value:"Java Admin API",id:"java-admin-api-6",level:4},{value:"List all functions",id:"list-all-functions",level:3},{value:"Admin CLI",id:"admin-cli-8",level:4},{value:"REST API",id:"rest-api-7",level:4},{value:"Java Admin API",id:"java-admin-api-7",level:4},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Admin CLI",id:"admin-cli-9",level:4},{value:"REST API",id:"rest-api-8",level:4},{value:"Java Admin API",id:"java-admin-api-8",level:4},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Admin CLI",id:"admin-cli-10",level:4},{value:"REST API",id:"rest-api-9",level:4},{value:"Java Admin API",id:"java-admin-api-9",level:4},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-11",level:4},{value:"REST API",id:"rest-api-10",level:4},{value:"Java Admin API",id:"java-admin-api-10",level:4},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-12",level:4},{value:"REST API",id:"rest-api-11",level:4},{value:"Java Admin API",id:"java-admin-api-11",level:4},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-13",level:4},{value:"REST API",id:"rest-api-12",level:4},{value:"Java Admin API",id:"java-admin-api-12",level:4},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-14",level:4},{value:"REST API",id:"rest-api-13",level:4},{value:"Java Admin API",id:"java-admin-api-13",level:4},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Admin CLI",id:"admin-cli-15",level:4},{value:"REST API",id:"rest-api-14",level:4},{value:"Java Admin API",id:"java-admin-api-14",level:4},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Admin CLI",id:"admin-cli-16",level:4},{value:"REST API",id:"rest-api-15",level:4},{value:"Java Admin API",id:"java-admin-api-15",level:4},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3},{value:"Admin CLI",id:"admin-cli-17",level:4},{value:"REST API",id:"rest-api-16",level:4},{value:"Java Admin CLI",id:"java-admin-cli",level:4}],c={toc:r};function p(n){let{components:a,...e}=n;return(0,i.kt)("wrapper",(0,t.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Functions can be managed via the following methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Admin CLI")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.6.1/reference-pulsar-admin#functions"},(0,i.kt)("inlineCode",{parentName:"a"},"functions"))," command of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.6.1/reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"REST API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Java Admin API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.6.1/client-libraries-java"},"Java API"),".")))),(0,i.kt)("h2",{id:"function-resources"},"Function resources"),(0,i.kt)("p",null,"You can perform the following operations on functions."),(0,i.kt)("h3",{id:"create-a-function"},"Create a function"),(0,i.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --inputs test-input-topic \\\n  --output persistent://public/default/test-output-topic \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --jar /examples/api-examples.jar\n\n")),(0,i.kt)("h4",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName"},"POST /admin/v3/functions/:tenant/:namespace/:functionName?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n\n')),(0,i.kt)("h3",{id:"update-a-function"},"Update a function"),(0,i.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-1"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-update"},(0,i.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions update \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --output persistent://public/default/update-output-topic \\\n  # other options\n\n")),(0,i.kt)("h4",{id:"rest-admin-api"},"REST Admin API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-1"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n\n')),(0,i.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,i.kt)("p",null,"You can start a stopped function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-2"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n")),(0,i.kt)("h4",{id:"rest-api-1"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-2"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")),(0,i.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,i.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-3"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n")),(0,i.kt)("h4",{id:"rest-api-2"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/start"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start?version=2.6.1")),(0,i.kt)("h4",{id:"java"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,i.kt)("p",null,"You can stop a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-4"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n")),(0,i.kt)("h4",{id:"rest-api-3"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-3"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")),(0,i.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,i.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-5"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n")),(0,i.kt)("h4",{id:"rest-api-4"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/stop"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-4"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,i.kt)("p",null,"Restart a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-6"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n")),(0,i.kt)("h4",{id:"rest-api-5"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-5"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")),(0,i.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,i.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-7"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n")),(0,i.kt)("h4",{id:"rest-api-6"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/restart"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-6"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,i.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-8"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-list"},(0,i.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n")),(0,i.kt)("h4",{id:"rest-api-7"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace"},"GET /admin/v3/functions/:tenant/:namespace?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-7"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctions(tenant, namespace);\n\n")),(0,i.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,i.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-9"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-delete"},(0,i.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n")),(0,i.kt)("h4",{id:"rest-api-8"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-8"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().deleteFunction(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,i.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-10"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-get"},(0,i.kt)("inlineCode",{parentName:"a"},"get"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n")),(0,i.kt)("h4",{id:"rest-api-9"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName"},"GET /admin/v3/functions/:tenant/:namespace/:functionName?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-9"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunction(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-11"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n")),(0,i.kt)("h4",{id:"rest-api-10"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-10"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")),(0,i.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,i.kt)("h4",{id:"admin-cli-12"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n")),(0,i.kt)("h4",{id:"rest-api-11"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/status"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-11"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-13"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n")),(0,i.kt)("h4",{id:"rest-api-12"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-12"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")),(0,i.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-14"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n")),(0,i.kt)("h4",{id:"rest-api-13"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/stats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-13"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName);\n\n")),(0,i.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,i.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-15"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --topic (the name of input topic) \\\n  --trigger-value \\"hello pulsar\\"\n  # or --trigger-file (the path of trigger file)\n\n')),(0,i.kt)("h4",{id:"rest-api-14"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/trigger"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-14"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n\n")),(0,i.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,i.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-16"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-putstate"},(0,i.kt)("inlineCode",{parentName:"a"},"putstate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions putstate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n\n')),(0,i.kt)("h4",{id:"rest-api-15"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/state/:key"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-api-15"},"Java Admin API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nTypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n\n")),(0,i.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,i.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)("h4",{id:"admin-cli-17"},"Admin CLI"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#functions-querystate"},(0,i.kt)("inlineCode",{parentName:"a"},"querystate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions querystate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --key (the key of state)\n\n")),(0,i.kt)("h4",{id:"rest-api-16"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.6.1&apiversion=v3#/admin/v3/functions/:tenant/:namespace/:functionName/state/:key"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.6.1")),(0,i.kt)("h4",{id:"java-admin-cli"},"Java Admin CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionState(tenant, namespace, functionName, key);\n\n")))}p.isMDXComponent=!0}}]);