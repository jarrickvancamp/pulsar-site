"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var l=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return r?l.createElement(h,a(a({ref:t},u),{},{components:r})):l.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<n;p++)a[p]=r[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=r(87462),o=(r(67294),r(3905));const n={id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools",original_id:"helm-tools"},a=void 0,i={unversionedId:"helm-tools",id:"version-2.6.2/helm-tools",title:"Required tools for deploying Pulsar Helm Chart",description:"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally.",source:"@site/versioned_docs/version-2.6.2/helm-tools.md",sourceDirName:".",slug:"/helm-tools",permalink:"/docs/2.6.2/helm-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/helm-tools.md",tags:[],version:"2.6.2",frontMatter:{id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools",original_id:"helm-tools"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Upgrade",permalink:"/docs/2.6.2/helm-upgrade"},next:{title:"Amazon Web Services",permalink:"/docs/2.6.2/deploy-aws"}},s={},p=[{value:"kubectl",id:"kubectl",level:2},{value:"Helm",id:"helm",level:2},{value:"Get Helm",id:"get-helm",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"Templates",id:"templates",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally."),(0,o.kt)("h2",{id:"kubectl"},"kubectl"),(0,o.kt)("p",null,"kubectl is the tool that talks to the Kubernetes API. kubectl 1.14 or higher is required and it needs to be compatible with your cluster (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")."),(0,o.kt)("p",null,"To Install kubectl locally, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"Kubernetes documentation"),"."),(0,o.kt)("p",null,"The server version of kubectl cannot be obtained until we connect to a cluster."),(0,o.kt)("h2",{id:"helm"},"Helm"),(0,o.kt)("p",null,"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is tested and supported with Helm v3."),(0,o.kt)("h3",{id:"get-helm"},"Get Helm"),(0,o.kt)("p",null,"You can get Helm from the project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"releases page"),", or follow other options under the official documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"installing Helm"),"."),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Once kubectl and Helm are configured, you can configure your ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.6.2/helm-prepare"},"Kubernetes cluster"),"."),(0,o.kt)("h2",{id:"additional-information"},"Additional information"),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Templating in Helm is done through Golang's ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," and ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/Masterminds/sprig"},"sprig"),"."),(0,o.kt)("p",null,"For more information about how all the inner workings behave, check these documents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/functions_and_pipelines/"},"Functions and Pipelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"Subcharts and Globals"))),(0,o.kt)("h3",{id:"tips-and-tricks"},"Tips and tricks"),(0,o.kt)("p",null,"For additional information on developing with Helm, check ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/howto/charts_tips_and_tricks/"},"tips and tricks section")," in the Helm repository."))}c.isMDXComponent=!0}}]);