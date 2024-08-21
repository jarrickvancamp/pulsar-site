"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34653],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),h=n,d=g["".concat(o,".").concat(h)]||g[h]||c[h]||l;return t?r.createElement(d,s(s({ref:a},u),{},{components:t})):r.createElement(d,s({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[g]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},26505:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const l={id:"release-note-guide",title:"Writing release notes"},s=void 0,i={unversionedId:"release-note-guide",id:"release-note-guide",title:"Writing release notes",description:"Pulsar release notes consist of the following parts:",source:"@site/contribute/release-note-guide.md",sourceDirName:".",slug:"/release-note-guide",permalink:"/contribute/release-note-guide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-note-guide.md",tags:[],version:"current",lastUpdatedBy:"Philipp Dolif",lastUpdatedAt:1724140133,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"release-note-guide",title:"Writing release notes"},sidebar:"sidebarDevelopment",previous:{title:"Creating GPG keys",permalink:"/contribute/create-gpg-keys"},next:{title:"Verifying release candidates",permalink:"/contribute/validate-release-candidate"}},o={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Fetch the release metadata",id:"fetch-the-release-metadata",level:2},{value:"Fetch the release note",id:"fetch-the-release-note",level:2},{value:"Register the new released version to releases.json, data/release-pulsar.js and data/release-java.js files",id:"register-the-new-released-version-to-releasesjson-datarelease-pulsarjs-and-datarelease-javajs-files",level:2},{value:"Generate release notes",id:"generate-release-notes",level:2},{value:"Update the release note page",id:"update-the-release-note-page",level:2},{value:"Submit the release note",id:"submit-the-release-note",level:2}],u={toc:p},g="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar release notes consist of the following parts:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/"},"Core")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-java"},"Java client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-ws"},"WebSocket client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cpp"},"C++ client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-python"},"Python client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-go"},"Go client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-node"},"Node.js client")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-cs"},"C# client"))),(0,n.yg)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.yg)("p",null,"To generate release notes, you are suggested to install the ",(0,n.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and authenticate first:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"brew install gh\ngh auth login\n")),(0,n.yg)("h2",{id:"fetch-the-release-metadata"},"Fetch the release metadata"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace 3.0.6 with the target version tag\nVERSION_WITHOUT_RC=3.0.6\n# Replace apache/pulsar with the component repo\ngh release view "v$VERSION_WITHOUT_RC" -R apache/pulsar --json author,tagName,publishedAt\n')),(0,n.yg)("h2",{id:"fetch-the-release-note"},"Fetch the release note"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace 3.0.6 with the target version tag\nVERSION_WITHOUT_RC=3.0.6\n# Replace apache/pulsar with the component repo\ngh release view "v$VERSION_WITHOUT_RC" -R apache/pulsar --json body --jq .body\n')),(0,n.yg)("h2",{id:"register-the-new-released-version-to-releasesjson-datarelease-pulsarjs-and-datarelease-javajs-files"},"Register the new released version to releases.json, data/release-pulsar.js and data/release-java.js files"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'# Replace 3.0.6 with the target version tag\nVERSION_WITHOUT_RC=3.0.6\n# Replace apache/pulsar with the component repo\n./scripts/register_new_version.py $VERSION_WITHOUT_RC $(gh release view "v$VERSION_WITHOUT_RC" -R apache/pulsar --json author,publishedAt | jq -r \'[.author.login, .publishedAt] | join(" ")\')\n')),(0,n.yg)("h2",{id:"generate-release-notes"},"Generate release notes"),(0,n.yg)("p",null,"There isn't a definite way yet. "),(0,n.yg)("p",null,"Here are 2 approaches:"),(0,n.yg)("p",null,'Using "git log"'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"PREVIOUS_VERSION=3.0.3\nVERSION_WITHOUT_RC=3.0.4\ngit log --reverse  --oneline v$PREVIOUS_VERSION..v$VERSION_WITHOUT_RC | colrm 1 12 | sed 's/\\] \\[/][/' | perl -p -e 's/^\\s+//' | awk -F ']' '{\n    if ($1 ~ /^\\[/) {\n        print $1 \"]\" $2, $0\n    } else {\n        print \"[zzz]\", $0\n    }\n}' | sort | cut -d ' ' -f2- | sed 's/\\(#\\([0-9]\\+\\)\\)/[#\\2](https:\\/\\/github.com\\/apache\\/pulsar\\/pull\\/\\2)/g' | sed 's/^/- /'\n")),(0,n.yg)("p",null,'Alternatively using "gh pr list"'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'gh pr list -L 1000 --search "is:pr is:merged label:release/2.10.6 label:cherry-picked/branch-2.10" --json title,number,url | jq -r \'.[] | "\\(.title) [\\(.number)](\\(.url))"\'\n')),(0,n.yg)("h2",{id:"update-the-release-note-page"},"Update the release note page"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Copy the related release notes entries and add a ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/release-notes/versioned"},"versioned release note file"),"."),(0,n.yg)("li",{parentName:"ol"},"Update the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/tree/main/data"},"version metadata files")," (",(0,n.yg)("inlineCode",{parentName:"li"},"release-*.js"),"). For apache/pulsar releases, this means updating ",(0,n.yg)("inlineCode",{parentName:"li"},"release-java.js")," (Java client) and ",(0,n.yg)("inlineCode",{parentName:"li"},"release-pulsar.js")," (Pulsar)."),(0,n.yg)("li",{parentName:"ol"},"For every apache/pulsar release, you should add a ",(0,n.yg)("inlineCode",{parentName:"li"},"<release-version>")," entry to the corresponding place in the ",(0,n.yg)("inlineCode",{parentName:"li"},"releases.json")," file."),(0,n.yg)("li",{parentName:"ol"},"Update swagger files. ref: ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/contribute/release-process/#swagger-files"},"swagger files"))),(0,n.yg)("p",null,"To preview the result, follow the instructions for ",(0,n.yg)("a",{parentName:"p",href:"/contribute/document-preview#preview-changes"},"previewing content"),"."),(0,n.yg)("h2",{id:"submit-the-release-note"},"Submit the release note"),(0,n.yg)("p",null,"Submit a PR against ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"the site repo")," with the added version release note file and updated version metadata files."),(0,n.yg)("p",null,"Here are some examples:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/326"},"Add the release note for C++ client 3.1.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/343"},"Add the release note for Python client 3.0.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-site/pull/834"},"Add the release note for Pulsar 3.0.3"))),(0,n.yg)("p",null,"Check whether the release information is shown on the ",(0,n.yg)("a",{parentName:"p",href:"pathname:///release-notes/"},"Pulsar Release Note page")," after the website is updated and built successfully."))}c.isMDXComponent=!0}}]);