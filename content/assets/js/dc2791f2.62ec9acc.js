"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66891],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),o=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?t.createElement(g,s(s({ref:a},p),{},{components:n})):t.createElement(g,s({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n},a)}},11470:(e,a,n)=>{n.d(a,{A:()=>N});var t=n(58168),r=n(96540),l=n(20053),s=n(23104),i=n(56347),u=n(57485),o=n(31682),p=n(89466);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function c(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??m(n);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=c(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[u,o]=g({queryString:n,groupId:t}),[m,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,p.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),f=(()=>{const e=u??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),y(e)}),[o,y,l]),tabValues:l}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:n,selectedValue:i,selectValue:u,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),c=e=>{const a=e.currentTarget,n=p.indexOf(a),t=o[n].value;t!==i&&(m(a),u(t))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;a=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;a=p[n]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},a)},o.map((e=>{let{value:a,label:n,attributes:s}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:c},s,{className:(0,l.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===a})}),n??a)})))}function b(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function T(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},r.createElement(h,(0,t.A)({},e,a)),r.createElement(b,(0,t.A)({},e,a)))}function N(e){const a=(0,f.A)();return r.createElement(T,(0,t.A)({key:String(a)},e))}},53951:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=n(58168),r=(n(96540),n(15680)),l=n(11470),s=n(19365);const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",description:"Learn how to manage tenants using Pulsar CLI and admin APIs."},u=void 0,o={unversionedId:"admin-api-tenants",id:"version-3.2.x/admin-api-tenants",title:"Managing Tenants",description:"Learn how to manage tenants using Pulsar CLI and admin APIs.",source:"@site/versioned_docs/version-3.2.x/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/3.2.x/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/admin-api-tenants.md",tags:[],version:"3.2.x",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",description:"Learn how to manage tenants using Pulsar CLI and admin APIs."},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/docs/3.2.x/admin-api-schemas"},next:{title:"Topics",permalink:"/docs/3.2.x/admin-api-topics"}},p={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],c={toc:m},d="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"}," This page only shows ",(0,r.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Java admin API doc"),".")))),(0,r.yg)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Admin roles"),(0,r.yg)("li",{parentName:"ul"},"Allowed clusters")),(0,r.yg)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.yg)("h3",{id:"list"},"List"),(0,r.yg)("p",null,"You can list all of the tenants associated with an ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-terminology#instance"},"instance"),"."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/tenants?id=list"},(0,r.yg)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants list\n")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"my-tenant-1\nmy-tenant-2\n"))),(0,r.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants/getTenants"))),(0,r.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenants();\n")))),(0,r.yg)("h3",{id:"create"},"Create"),(0,r.yg)("p",null,"You can create a new tenant."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/tenants?id=create"},(0,r.yg)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant\n")),(0,r.yg)("p",null,"When creating a tenant, you can optionally assign admin roles using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"--admin-roles"),"\nflag, and clusters using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-c"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"--allowed-clusters")," flag. You can specify multiple values\nas a comma-separated list. Here are some examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    --admin-roles role1,role2,role3 \\\n    --allowed-clusters cluster1\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    -r role1 \\\n    -c cluster1\n"))),(0,r.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/createTenant"},"PUT /admin/v2/tenants/:tenant/createTenant"))),(0,r.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"admin.tenants().createTenant(tenantName, tenantInfo);\n")))),(0,r.yg)("h3",{id:"get-configuration"},"Get configuration"),(0,r.yg)("p",null,"You can fetch the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/tenants?id=get"},(0,r.yg)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants get my-tenant\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n'))),(0,r.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:tenant/getTenant"))),(0,r.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenantInfo(tenantName);\n")))),(0,r.yg)("h3",{id:"delete"},"Delete"),(0,r.yg)("p",null,"Tenants can be deleted from a Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-terminology#instance"},"instance"),"."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/tenants?id=delete"},(0,r.yg)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants delete my-tenant\n"))),(0,r.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:tenant/deleteTenant"))),(0,r.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"admin.Tenants().deleteTenant(tenantName);\n")))),(0,r.yg)("h3",{id:"update"},"Update"),(0,r.yg)("p",null,"You can update a tenant's configuration."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/tenants?id=update"},(0,r.yg)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants update my-tenant \\\n    --admin-roles role1,role2 \\\n    --allowed-clusters cluster1,cluster2\n"))),(0,r.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/updateTenant"},"POST /admin/v2/tenants/:tenant/updateTenant"))),(0,r.yg)(s.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"admin.tenants().updateTenant(tenantName, tenantInfo);\n")))))}g.isMDXComponent=!0}}]);