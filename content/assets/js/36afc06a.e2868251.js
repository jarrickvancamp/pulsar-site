"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,k=p["".concat(s,".").concat(u)]||p[u]||b[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"concepts-broker-load-balancing-types",title:"Types",sidebar_label:"Types"},o=void 0,i={unversionedId:"concepts-broker-load-balancing-types",id:"concepts-broker-load-balancing-types",title:"Types",description:"Pulsar provides three types of broker load balancers:",source:"@site/docs/concepts-broker-load-balancing-types.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-types",permalink:"/docs/next/concepts-broker-load-balancing-types",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-broker-load-balancing-types.md",tags:[],version:"current",frontMatter:{id:"concepts-broker-load-balancing-types",title:"Types",sidebar_label:"Types"},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/docs/next/concepts-broker-load-balancing-concepts"},next:{title:"Geo Replication",permalink:"/docs/next/concepts-replication"}},s={},d=[{value:"Side-by-side comparisons",id:"side-by-side-comparisons",level:2},{value:"Related topics",id:"related-topics",level:2}],c={toc:d},p="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar provides three types of broker load balancers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Simple broker load balancer: it existed since Pulsar's inception, but now is deprecated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#side-by-side-comparisons"},"Modular broker load balancer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#side-by-side-comparisons"},"Extensible broker load balancer")))),(0,r.kt)("p",null,"The modular and extensible broker load balancer implements similar load balance functionalities with different system designs. For example, they both employ a similar approach to distributing data loads among brokers, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-assignment"},"bundle-broker assignment"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-splitting"},"bundle splitting"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading"},"bundle unloading (shedding)")))),(0,r.kt)("p",null,"However, for bundle ownership and load data stores, the modular load balancer uses ZooKeeper, whereas the extensible load balancer uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#system-topic"},"System topics")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#tableview"},"Table views"),"."),(0,r.kt)("h2",{id:"side-by-side-comparisons"},"Side-by-side comparisons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dimension"),(0,r.kt)("th",{parentName:"tr",align:null},"Modular broker load balancer"),(0,r.kt)("th",{parentName:"tr",align:null},"Extensible broker load balancer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Available version"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar 1.7.0 ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"2017"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar 3.0.0 ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load Balance Metadata Store and Replication"),(0,r.kt)("td",{parentName:"tr",align:null},"Dependent on ZooKeeper for load balance metadata store and replication.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," - All broker load data and all bundle load data are stored in ZooKeeper and replicated to all brokers via ZooKeeper watchers. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"- All bundle ownerships are stored in ZooKeeper as ephemeral locks."),(0,r.kt)("td",{parentName:"tr",align:null},"Dependent on system topics and table views for load balance metadata store and replication. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," - All broker load data are stored in a non-persistent system topic and replicated to all brokers via table views. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"- Each broker publishes only top k bundles' load data in a non-persistent system topic, and only the leader broker consumes it via a table view. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," - Bundle ownerships are stored in a persistent system topic and replicated to all brokers via table views.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," Note: The absolute size of the replicated load data and the complexity of the replication decreased due to passing the data through memory-only, non-persistent topics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load Balance Decision",(0,r.kt)("br",null),"(Load Balance leader dependency)"),(0,r.kt)("td",{parentName:"tr",align:null},"Single leader broker decides on bundle-broker assignment, bundle splitting, and bundle unloading. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," Note: The leader broker requires global load information"),(0,r.kt)("td",{parentName:"tr",align:null},"Each broker decides and runs bundle-broker assignment (lookup) and bundle splitting based on the local (replicated) information. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," The leader broker still decides on bundle unloading globally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pub/sub reconnection upon bundle unloading"),(0,r.kt)("td",{parentName:"tr",align:null},"When bundles are unloaded, the topics in the bundles are temporarily closed, and producers and consumers connect to new owner brokers. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," - Connecting to the new owner brokers involves redirecting lookup requests via the leader broker."),(0,r.kt)("td",{parentName:"tr",align:null},"Any broker can respond to the lookup requests to locate the new owner brokers without asking the leader broker. The reconnection does not go through the leader broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Observability"),(0,r.kt)("td",{parentName:"tr",align:null},"You can monitor and analyze load balance with various ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/reference-metrics"},"metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"It adds additional ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/reference-metrics"},"metrics")," and debug mode. For example: ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - Check the status of load balance decision breakdown and failure. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - Use the dynamic debug mode configuration to dynamically turn on and off more load balance decision logs.")))),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get a comprehensive understanding and discover the key insights, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-overview"},"Broker load balancing | Overview"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To discover different usage scenarios, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-use-cases"},"Broker load balancing | Use cases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To explore functionalities, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To understand advantages, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-benefits"},"Broker load balancing | Benefits"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),"."))))}b.isMDXComponent=!0}}]);