"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[801],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>k});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?t.createElement(k,o(o({ref:a},u),{},{components:r})):t.createElement(k,o({ref:a},u))}));function k(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:a,hidden:r,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},a)}},65488:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(87462),n=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),p=r(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:a,block:r,defaultValue:o,values:d,groupId:c,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:a,label:r,attributes:t}}=e;return{value:a,label:r,attributes:t}})),v=(0,i.l)(f,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[N,T]=(0,n.useState)(h),A=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==N&&f.some((a=>a.value===e))&&T(e)}const w=e=>{const a=e.currentTarget,r=A.indexOf(a),t=f[r].value;t!==N&&(I(a),T(t),null!=c&&y(c,String(t)))},E=e=>{let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const r=A.indexOf(e.currentTarget)+1;a=A[r]??A[0];break}case"ArrowLeft":{const r=A.indexOf(e.currentTarget)-1;a=A[r]??A[A.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},f.map((e=>{let{value:a,label:r,attributes:o}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>A.push(e),onKeyDown:E,onClick:w},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":N===a})}),r??a)}))),a?(0,n.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function c(e){const a=(0,o.Z)();return n.createElement(d,(0,t.Z)({key:String(a)},e))}},50190:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var t=r(87462),n=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},s=void 0,p={unversionedId:"admin-api-brokers",id:"version-2.5.2/admin-api-brokers",title:"Managing Brokers",description:"Important",source:"@site/versioned_docs/version-2.5.2/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.5.2/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/admin-api-brokers.md",tags:[],version:"2.5.2",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.5.2/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.5.2/admin-api-namespaces"}},u={},m=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],d={toc:m};function c(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important")),(0,n.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,n.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,n.kt)("p",null,"Pulsar brokers consist of two components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.2/reference-terminology#topic"},"topic")," lookup."),(0,n.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.2/reference-terminology#message"},"message")," transfers.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," command of the ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.2/client-libraries-java"},"Java API"))),(0,n.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,n.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,n.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,n.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,n.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,n.kt)("h3",{id:"get-the-information-of-the-leader-broker"},"Get the information of the leader broker"),(0,n.kt)("p",null,"Fetch the information of the leader broker, for example, the service url."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers leader-broker\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nBrokerInfo(serviceUrl=broker1.use.org.com:8080)\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#/admin/v2/brokers/leaderBroker"},"GET /admin/v2/brokers/leaderBroker?version=2.5.2"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getLeaderBroker()\n\n")),(0,n.kt)("p",null,"For the detail of the code above, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))),(0,n.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,n.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,n.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,n.kt)("p",null,"One way to configure a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-terminology#broker"},"broker")," is to supply a ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-configuration#broker"},"configuration")," when the broker is ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-cli-tools#pulsar-broker"},"started up"),"."),(0,n.kt)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,n.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," command for the ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,n.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,n.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,n.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,n.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,n.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,n.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,n.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,n.kt)("h3",{id:"list-all"},"List all"),(0,n.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.2&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values"))),(0,n.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}c.isMDXComponent=!0}}]);