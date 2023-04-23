"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(a),h=l,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},o),{},{components:a})):n.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={id:"client-libraries-cpp",title:"The Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},i=void 0,p={unversionedId:"client-libraries-cpp",id:"version-2.3.1/client-libraries-cpp",title:"The Pulsar C++ client",description:"Supported platforms",source:"@site/versioned_docs/version-2.3.1/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.3.1/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/client-libraries-cpp.md",tags:[],version:"2.3.1",frontMatter:{id:"client-libraries-cpp",title:"The Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Python",permalink:"/docs/2.3.1/client-libraries-python"},next:{title:"WebSocket",permalink:"/docs/2.3.1/client-libraries-websocket"}},s={},c=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"Linux",id:"linux",level:2},{value:"Install",id:"install",level:3},{value:"RPM",id:"rpm",level:4},{value:"DEB",id:"deb",level:4},{value:"Build",id:"build",level:3},{value:"RPM",id:"rpm-1",level:4},{value:"Deb",id:"deb-1",level:4},{value:"MacOS",id:"macos",level:2},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Producer",id:"producer",level:2},{value:"Authentication",id:"authentication",level:2}],o={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,l.kt)("p",null,"The Pulsar C++ client has been successfully tested on ",(0,l.kt)("strong",{parentName:"p"},"MacOS")," and ",(0,l.kt)("strong",{parentName:"p"},"Linux"),"."),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since the 2.1.0 release, Pulsar ships pre-built RPM and Debian packages. You can choose to download\nand install those packages instead of building them yourself.")),(0,l.kt)("h4",{id:"rpm"},"RPM"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-2.3.1-1.x86_64.rpm"},"client")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-2.3.1-1.x86_64.rpm.asc"},"asc"),", ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-2.3.1-1.x86_64.rpm.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-debuginfo-2.3.1-1.x86_64.rpm"},"client-debuginfo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-debuginfo-2.3.1-1.x86_64.rpm.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-debuginfo-2.3.1-1.x86_64.rpm.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-devel-2.3.1-1.x86_64.rpm"},"client-devel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-devel-2.3.1-1.x86_64.rpm.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/RPMS/apache-pulsar-client-devel-2.3.1-1.x86_64.rpm.sha512"},"sha512"))))),(0,l.kt)("p",null,"To install a RPM package, download the RPM packages and install them using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ rpm -ivh apache-pulsar-client*.rpm\n\n")),(0,l.kt)("h4",{id:"deb"},"DEB"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client.deb"},"client")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client.deb.asc"},"asc"),", ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client.deb.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client-dev.deb"},"client-devel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client-dev.deb.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/DEB/apache-pulsar-client-dev.deb.sha512"},"sha512"))))),(0,l.kt)("p",null,"To install a DEB package, download the DEB packages and install them using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ apt install ./apache-pulsar-client*.deb\n\n")),(0,l.kt)("h3",{id:"build"},"Build"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you want to build RPM and Debian packages off latest master, you can follow the instructions\nbelow to do so. All the instructions are run at the root directory of your cloned Pulsar\nrepo.")),(0,l.kt)("p",null,"There are recipes that build RPM and Debian packages containing a\nstatically linked ",(0,l.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," with all the required\ndependencies."),(0,l.kt)("p",null,"To build the C++ library packages, first build the Java packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nmvn install -DskipTests\n\n")),(0,l.kt)("h4",{id:"rpm-1"},"RPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/rpm/docker-build-rpm.sh\n\n")),(0,l.kt)("p",null,"This will build the RPM inside a Docker container and it will leave the RPMs\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/rpm/RPMS/x86_64/"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,l.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-devel"),(0,l.kt)("td",{parentName:"tr",align:null},"Static library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-debuginfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Debug symbols for ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))))),(0,l.kt)("h4",{id:"deb-1"},"Deb"),(0,l.kt)("p",null,"To build Debian packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/deb/docker-build-deb.sh\n\n")),(0,l.kt)("p",null,"Debian packages will be created at ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/deb/BUILD/DEB/")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,l.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-dev"),(0,l.kt)("td",{parentName:"tr",align:null},"Static library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")))),(0,l.kt)("h2",{id:"macos"},"MacOS"),(0,l.kt)("p",null,"Pulsar releases are available through the ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," core repository. You can install the C++ client\nlibrary with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install libpulsar\n\n")),(0,l.kt)("p",null,"This will install the package with the library and headers."),(0,l.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,l.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,l.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, use the pulsar URI scheme and have a default port of 6650. Here\u2019s an example for localhost:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,l.kt)("p",null,"A URL for a production Pulsar cluster may look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,l.kt)("p",null,"If you\u2019re using TLS authentication, the URL will look like something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,l.kt)("h2",{id:"consumer"},"Consumer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscribtion-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,l.kt)("h2",{id:"producer"},"Producer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,l.kt)("h2",{id:"authentication"},"Authentication"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')))}u.isMDXComponent=!0}}]);