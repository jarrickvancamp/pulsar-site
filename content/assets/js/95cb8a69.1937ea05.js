"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},o=void 0,p={unversionedId:"helm-upgrade",id:"version-2.4.1/helm-upgrade",title:"Upgrade a Pulsar Helm release",description:"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade",source:"@site/versioned_docs/version-2.4.1/helm-upgrade.md",sourceDirName:".",slug:"/helm-upgrade",permalink:"/docs/2.4.1/helm-upgrade",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/helm-upgrade.md",tags:[],version:"2.4.1",frontMatter:{id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"}},i={},s=[{value:"Steps",id:"steps",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade\nto and look for any release notes that might pertain to the new Pulsar chart version."),(0,n.kt)("p",null,"We also recommend that you need to provide all values using ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade --set key=value")," syntax or ",(0,n.kt)("inlineCode",{parentName:"p"},"-f values.yml")," instead of using ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values")," because some of the current values might be deprecated."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE"),":"),(0,n.kt)("p",{parentName:"blockquote"},"You can retrieve your previous ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments cleanly, with ",(0,n.kt)("inlineCode",{parentName:"p"},"helm get values <release-name>"),". If you direct this into a file (",(0,n.kt)("inlineCode",{parentName:"p"},"helm get values <release-name> > pulsar.yml"),"), you can safely\npass this file via ",(0,n.kt)("inlineCode",{parentName:"p"},"-f"),". Thus ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade <release-name> charts/pulsar -f pulsar.yaml"),". This safely replaces the behavior of ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values"),".")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"The following are the steps to upgrade Apache Pulsar to a newer version:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the change log for the specific version you would like to upgrade to")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go through ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-deploy"},"deployment documentation")," step by step")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Extract your previous ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments with"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm get values <release-name> > pulsar.yaml\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Decide on all the values you need to set")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Perform the upgrade, with all ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," arguments extracted in step 4"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm upgrade <release-name> charts/pulsar \\\n    --version <new version> \\\n    -f pulsar.yaml \\\n    --set ...\n\n")))))}c.isMDXComponent=!0}}]);