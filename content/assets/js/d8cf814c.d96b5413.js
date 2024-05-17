"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88430],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>b});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(b,i(i({ref:a},c),{},{components:t})):r.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var r=t(96540),n=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>I});var r=t(58168),n=t(96540),o=t(20053),i=t(23104),l=t(56347),s=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,l.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[s,u]=b({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,c.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),r=u[t].value;r!==l&&(p(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function k(e){const a=f(e);return n.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},n.createElement(v,(0,r.A)({},e,a)),n.createElement(h,(0,r.A)({},e,a)))}function I(e){const a=(0,y.A)();return n.createElement(k,(0,r.A)({key:String(a)},e))}},48630:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(58168),n=(t(96540),t(15680)),o=t(11470),i=t(19365);const l={id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers",description:"Learn to set a namespace isolation policy for a broker cluster in Pulsar."},s=void 0,u={unversionedId:"administration-isolation-broker",id:"version-3.2.x/administration-isolation-broker",title:"Isolate brokers",description:"Learn to set a namespace isolation policy for a broker cluster in Pulsar.",source:"@site/versioned_docs/version-3.2.x/administration-isolation-broker.md",sourceDirName:".",slug:"/administration-isolation-broker",permalink:"/docs/3.2.x/administration-isolation-broker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/administration-isolation-broker.md",tags:[],version:"3.2.x",frontMatter:{id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers",description:"Learn to set a namespace isolation policy for a broker cluster in Pulsar."},sidebar:"docsSidebar",previous:{title:"Pulsar isolation",permalink:"/docs/3.2.x/administration-isolation"},next:{title:"Isolate bookies",permalink:"/docs/3.2.x/administration-isolation-bookie"}},c={},p=[],m={toc:p},d="wrapper";function b(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,n.yg)("p",null,"To set a namespace isolation policy for a broker cluster, you can use one of the following methods."),(0,n.yg)(o.A,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,n.yg)(i.A,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin ns-isolation-policy set options\n")),(0,n.yg)("p",null,"For more information about the command ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n"))),(0,n.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.3&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/:namespace/:tenant/:namespace/createNamespace"))),(0,n.yg)(i.A,{value:"Java admin API",mdxType:"TabItem"},(0,n.yg)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"code"),"."))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"To guarantee all the data that belongs to a namespace is stored in desired bookies, you can isolate the data of the namespace into user-defined groups of bookies. See ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/administration-isolation-bookie#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details.")))}b.isMDXComponent=!0}}]);