"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2439],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),r=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=r(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=r(a),d=i,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?t.createElement(f,s(s({ref:n},p),{},{components:a})):t.createElement(f,s({ref:n},p))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:i,s[1]=u;for(var r=2;r<l;r++)s[r]=a[r];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>s});var t=a(67294),i=a(86010);const l="tabItem_Ymn6";function s(e){let{children:n,hidden:a,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,s),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>d});var t=a(87462),i=a(67294),l=a(86010),s=a(72389),u=a(67392),o=a(7094),r=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:n,block:a,defaultValue:s,values:c,groupId:d,className:f}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),I=(0,u.l)(k,((e,n)=>e.value===n.value));if(I.length>0)throw new Error(`Docusaurus error: Duplicate values "${I.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===s?s:s??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==A&&!k.some((e=>e.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,o.U)(),[h,b]=(0,i.useState)(A),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,r.o5)();if(null!=d){const e=g[d];null!=e&&e!==h&&k.some((n=>n.value===e))&&b(e)}const C=e=>{const n=e.currentTarget,a=N.indexOf(n),t=k[a].value;t!==h&&(P(n),b(t),null!=d&&T(d,String(t)))},y=e=>{let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;n=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;n=N[a]??N[N.length-1];break}}n?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},k.map((e=>{let{value:n,label:a,attributes:s}=e;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,key:n,ref:e=>N.push(e),onKeyDown:y,onClick:C},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":h===n})}),a??n)}))),n?(0,i.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==h})))))}function d(e){const n=(0,s.Z)();return i.createElement(c,(0,t.Z)({key:String(n)},e))}},65729:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>m});var t=a(87462),i=(a(67294),a(3905)),l=a(65488),s=a(85162);const u={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},o=void 0,r={unversionedId:"admin-api-functions",id:"version-2.7.4/admin-api-functions",title:"Manage Functions",description:"Pulsar Functions are lightweight compute processes that",source:"@site/versioned_docs/version-2.7.4/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/2.7.4/admin-api-functions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/admin-api-functions.md",tags:[],version:"2.7.4",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Topics",permalink:"/docs/2.7.4/admin-api-topics"},next:{title:"Kafka client wrapper",permalink:"/docs/2.7.4/adaptors-kafka"}},p={},m=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Update a function",id:"update-a-function",level:3},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"List all functions",id:"list-all-functions",level:3},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3}],c={toc:m};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Functions can be managed via the following methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Admin CLI")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.7.4/reference-pulsar-admin#functions"},(0,i.kt)("inlineCode",{parentName:"a"},"functions"))," command of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.7.4/reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"REST API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Java Admin API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.7.4/client-libraries-java"},"Java API"),".")))),(0,i.kt)("h2",{id:"function-resources"},"Function resources"),(0,i.kt)("p",null,"You can perform the following operations on functions."),(0,i.kt)("h3",{id:"create-a-function"},"Create a function"),(0,i.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --inputs test-input-topic \\\n  --output persistent://public/default/test-output-topic \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --jar /examples/api-examples.jar\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/registerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n\n')))),(0,i.kt)("h3",{id:"update-a-function"},"Update a function"),(0,i.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST Admin API",value:"REST Admin API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-update"},(0,i.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions update \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --output persistent://public/default/update-output-topic \\\n  # other options\n\n"))),(0,i.kt)(s.Z,{value:"REST Admin API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/updateFunction"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n\n')))),(0,i.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,i.kt)("p",null,"You can start a stopped function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,i.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start"))),(0,i.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,i.kt)("p",null,"You can stop a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,i.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,i.kt)("p",null,"Restart a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,i.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,i.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-list"},(0,i.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/listFunctions"},"GET /admin/v3/functions/:tenant/:namespace"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctions(tenant, namespace);\n\n")))),(0,i.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,i.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-delete"},(0,i.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/deregisterFunction"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().deleteFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,i.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-get"},(0,i.kt)("inlineCode",{parentName:"a"},"get"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionInfo"},"GET /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionInstanceStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionInstanceStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,i.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --topic (the name of input topic) \\\n  --trigger-value \\"hello pulsar\\"\n  # or --trigger-file (the path of trigger file)\n\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/triggerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n\n")))),(0,i.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,i.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-putstate"},(0,i.kt)("inlineCode",{parentName:"a"},"putstate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions putstate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/putFunctionState"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nTypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n\n")))),(0,i.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,i.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin CLI",value:"Java Admin CLI"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-querystate"},(0,i.kt)("inlineCode",{parentName:"a"},"querystate"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions querystate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --key (the key of state)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.7.4&apiversion=v3#operation/getFunctionState"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin CLI",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionState(tenant, namespace, functionName, key);\n\n")))))}d.isMDXComponent=!0}}]);