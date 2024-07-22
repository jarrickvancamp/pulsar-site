"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34653],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,d=c["".concat(o,".").concat(h)]||c[h]||g[h]||l;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"release-note-guide",title:"Writing release notes"},i=void 0,s={unversionedId:"release-note-guide",id:"release-note-guide",title:"Writing release notes",description:"Pulsar release notes consist of the following parts:",source:"@site/contribute/release-note-guide.md",sourceDirName:".",slug:"/release-note-guide",permalink:"/contribute/release-note-guide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-note-guide.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1721439966,formattedLastUpdatedAt:"Jul 20, 2024",frontMatter:{id:"release-note-guide",title:"Writing release notes"},sidebar:"sidebarDevelopment",previous:{title:"Creating GPG keys",permalink:"/contribute/create-gpg-keys"},next:{title:"Verifying release candidates",permalink:"/contribute/validate-release-candidate"}},o={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Fetch the release metadata",id:"fetch-the-release-metadata",level:2},{value:"Fetch the release note",id:"fetch-the-release-note",level:2},{value:"Generate release notes",id:"generate-release-notes",level:2},{value:"Update the release note page",id:"update-the-release-note-page",level:2},{value:"Submit the release note",id:"submit-the-release-note",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar release notes consist of the following parts:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/"},"Core")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-java"},"Java client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-ws"},"WebSocket client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cpp"},"C++ client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-python"},"Python client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-go"},"Go client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-node"},"Node.js client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cs"},"C# client"))),(0,n.yg)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.yg)("p",null,"To generate release notes, you are suggested to install the ",(0,n.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and authenticate first:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"brew install gh\ngh auth login\n")),(0,n.yg)("h2",{id:"fetch-the-release-metadata"},"Fetch the release metadata"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\n# Replace apache/pulsar with the component repo\ngh release view "v2.10.2" -R apache/pulsar --json author,tagName,publishedAt\n')),(0,n.yg)("h2",{id:"fetch-the-release-note"},"Fetch the release note"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace v2.10.2 with the target version tag\n# Replace apache/pulsar with the component repo\ngh release view "v2.10.2" -R apache/pulsar --json body --jq .body\n')),(0,n.yg)("h2",{id:"generate-release-notes"},"Generate release notes"),(0,n.yg)("p",null,"There isn't a definite way yet. "),(0,n.yg)("p",null,"Here are 2 approaches:"),(0,n.yg)("p",null,'Using "git log"'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"PREVIOUS_VERSION=3.0.3\nVERSION_WITHOUT_RC=3.0.4\ngit log --reverse  --oneline v$PREVIOUS_VERSION..v$VERSION_WITHOUT_RC | colrm 1 12 | sed 's/\\] \\[/][/' | perl -p -e 's/^\\s+//' | awk -F ']' '{\n    if ($1 ~ /^\\[/) {\n        print $1 \"]\" $2, $0\n    } else {\n        print \"[zzz]\", $0\n    }\n}' | sort | cut -d ' ' -f2- | sed 's/\\(#\\([0-9]\\+\\)\\)/[#\\2](https:\\/\\/github.com\\/apache\\/pulsar\\/pull\\/\\2)/g' | sed 's/^/- /'\n")),(0,n.yg)("p",null,'Alternatively using "gh pr list"'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'gh pr list -L 1000 --search "is:pr is:merged label:release/2.10.6 label:cherry-picked/branch-2.10" --json title,number,url | jq -r \'.[] | "\\(.title) [\\(.number)](\\(.url))"\'\n')),(0,n.yg)("h2",{id:"update-the-release-note-page"},"Update the release note page"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Copy the related release notes entries and add a ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/release-notes/versioned"},"versioned release note file"),"."),(0,n.yg)("li",{parentName:"ol"},"Update the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/data"},"version metadata files")," (",(0,n.yg)("inlineCode",{parentName:"li"},"release-*.js"),"). For apache/pulsar releases, this means updating ",(0,n.yg)("inlineCode",{parentName:"li"},"release-java.js")," (Java client) and ",(0,n.yg)("inlineCode",{parentName:"li"},"release-pulsar.js")," (Pulsar)."),(0,n.yg)("li",{parentName:"ol"},"For every apache/pulsar release, you should add a ",(0,n.yg)("inlineCode",{parentName:"li"},"<release-version>")," entry to the corresponding place in the ",(0,n.yg)("inlineCode",{parentName:"li"},"releases.json")," file."),(0,n.yg)("li",{parentName:"ol"},"Update swagger files. ref: ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/contribute/release-process/#swagger-files"},"swagger files"))),(0,n.yg)("p",null,"To preview the result, follow the instructions for ",(0,n.yg)("a",{parentName:"p",href:"/contribute/document-preview#preview-changes"},"previewing content"),"."),(0,n.yg)("h2",{id:"submit-the-release-note"},"Submit the release note"),(0,n.yg)("p",null,"Submit a PR against ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"the site repo")," with the added version release note file and updated version metadata files."),(0,n.yg)("p",null,"Here are some examples:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/326"},"Add the release note for C++ client 3.1.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/343"},"Add the release note for Python client 3.0.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/834"},"Add the release note for Pulsar 3.0.3"))),(0,n.yg)("p",null,"Check whether the release information is shown on the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///release-notes/"},"Pulsar Release Note page")," after the website is updated and built successfully."))}g.isMDXComponent=!0}}]);