"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86298],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(c,i(i({ref:e},s),{},{components:n})):r.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},27857:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"io-hdfs2-sink",title:"HDFS2 sink connector",sidebar_label:"HDFS2 sink connector",original_id:"io-hdfs2-sink"},i=void 0,o={unversionedId:"io-hdfs2-sink",id:"version-2.9.x/io-hdfs2-sink",title:"HDFS2 sink connector",description:"The HDFS2 sink connector pulls the messages from Pulsar topics",source:"@site/versioned_docs/version-2.9.x/io-hdfs2-sink.md",sourceDirName:".",slug:"/io-hdfs2-sink",permalink:"/docs/2.9.x/io-hdfs2-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/io-hdfs2-sink.md",tags:[],version:"2.9.x",frontMatter:{id:"io-hdfs2-sink",title:"HDFS2 sink connector",sidebar_label:"HDFS2 sink connector",original_id:"io-hdfs2-sink"}},d={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The HDFS2 sink connector pulls the messages from Pulsar topics\nand persists the messages to HDFS files."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The configuration of the HDFS2 sink connector has the following properties."),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hdfsConfigResources")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"A file or a comma-separated list containing the Hadoop file system configuration.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),"'core-site.xml'",(0,a.kt)("br",null),"'hdfs-site.xml'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"directory")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The HDFS directory where files read from or written to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"encoding")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The character encoding for the files.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),"UTF-8",(0,a.kt)("br",null),"ASCII")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"compression")),(0,a.kt)("td",{parentName:"tr",align:null},"Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The compression code used to compress or de-compress the files on HDFS. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("br",null),(0,a.kt)("li",null,"BZIP2",(0,a.kt)("br",null)),(0,a.kt)("li",null,"DEFLATE",(0,a.kt)("br",null)),(0,a.kt)("li",null,"GZIP",(0,a.kt)("br",null)),(0,a.kt)("li",null,"LZ4",(0,a.kt)("br",null)),(0,a.kt)("li",null,"SNAPPY"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"kerberosUserPrincipal")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The principal account of Kerberos user used for authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"keytab")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The full pathname of the Kerberos keytab file used for authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"filenamePrefix")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true, if ",(0,a.kt)("inlineCode",{parentName:"td"},"compression")," is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"None"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The prefix of the files created inside the HDFS directory.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null)," The value of topicA result in files named topicA-.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"fileExtension")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The extension added to the files written to HDFS.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),"'.txt'",(0,a.kt)("br",null)," '.seq'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"separator")),(0,a.kt)("td",{parentName:"tr",align:null},"char"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"The character used to separate records in a text file. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"If no value is provided, the contents from all records are concatenated together in one continuous byte array.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"syncInterval")),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"The interval between calls to flush data to HDFS disk in milliseconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"maxPendingRecords")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of records that hold in memory before acking. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Setting this property to 1 makes every record send to disk before the record is acked.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Setting this property to a higher value allows buffering records before flushing them to disk.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"subdirectoryPattern")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"A subdirectory associated with the created time of the sink.",(0,a.kt)("br",null),"The pattern is the formatted pattern of ",(0,a.kt)("inlineCode",{parentName:"td"},"directory"),"'s subdirectory.",(0,a.kt)("br",null),(0,a.kt)("br",null),"See ",(0,a.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html"},"DateTimeFormatter")," for pattern's syntax.")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Before using the HDFS2 sink connector, you need to create a configuration file through one of the following methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "hdfsConfigResources": "core-site.xml",\n    "directory": "/foo/bar",\n    "filenamePrefix": "prefix",\n    "fileExtension": ".log",\n    "compression": "SNAPPY",\n    "subdirectoryPattern": "yyyy-MM-dd"\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    hdfsConfigResources: "core-site.xml"\n    directory: "/foo/bar"\n    filenamePrefix: "prefix"\n    fileExtension: ".log"\n    compression: "SNAPPY"\n    subdirectoryPattern: "yyyy-MM-dd"\n\n')))))}u.isMDXComponent=!0}}]);