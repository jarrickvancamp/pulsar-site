"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60322],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),k=o,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||n;return t?a.createElement(m,l(l({ref:r},s),{},{components:t})):a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=k;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<n;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},70499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var a=t(87462),o=(t(67294),t(3905));const n={id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",description:"Learn to deploy a Pulsar cluster on Docker."},l=void 0,c={unversionedId:"deploy-docker",id:"deploy-docker",title:"Deploy a cluster on Docker",description:"Learn to deploy a Pulsar cluster on Docker.",source:"@site/docs/deploy-docker.md",sourceDirName:".",slug:"/deploy-docker",permalink:"/docs/next/deploy-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/deploy-docker.md",tags:[],version:"current",frontMatter:{id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",description:"Learn to deploy a Pulsar cluster on Docker."},sidebar:"docsSidebar",previous:{title:"Bare metal multi-cluster",permalink:"/docs/next/deploy-bare-metal-multi-cluster"},next:{title:"ZooKeeper and BookKeeper",permalink:"/docs/next/administration-zk-bk"}},p={},i=[{value:"Step 1: Pull a Pulsar image",id:"step-1-pull-a-pulsar-image",level:2},{value:"Step 2: Create a network",id:"step-2-create-a-network",level:2},{value:"Step 3: Create and start containers",id:"step-3-create-and-start-containers",level:2},{value:"Create a ZooKeeper container",id:"create-a-zookeeper-container",level:3},{value:"Initialize the cluster metadata",id:"initialize-the-cluster-metadata",level:3},{value:"Create a bookie container",id:"create-a-bookie-container",level:3},{value:"Create a broker container",id:"create-a-broker-container",level:3}],s={toc:i},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To deploy a Pulsar cluster on Docker using Docker commands, you need to complete the following steps."),(0,o.kt)("h2",{id:"step-1-pull-a-pulsar-image"},"Step 1: Pull a Pulsar image"),(0,o.kt)("p",null,"To run Pulsar on Docker, you need to create a container for each Pulsar component: ZooKeeper, bookie, and the broker. You can pull the images of ZooKeeper and bookie separately on Docker Hub, and pull the Pulsar image for the broker. You can also pull only one Pulsar image and create three containers with this image. This tutorial takes the second option as an example."),(0,o.kt)("p",null,"You can pull a Pulsar image from Docker Hub with the following command. If you do not want to use some connectors, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar:latest")," there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar-all:latest\n")),(0,o.kt)("h2",{id:"step-2-create-a-network"},"Step 2: Create a network"),(0,o.kt)("p",null,"To deploy a Pulsar cluster on Docker, you need to create a network and connect the containers of ZooKeeper, bookie, and broker to this network.\nUse the following command to create the network ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create pulsar\n")),(0,o.kt)("h2",{id:"step-3-create-and-start-containers"},"Step 3: Create and start containers"),(0,o.kt)("h3",{id:"create-a-zookeeper-container"},"Create a ZooKeeper container"),(0,o.kt)("p",null,"Create a ZooKeeper container and start the ZooKeeper service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 2181:2181 --net=pulsar \\\n    -e metadataStoreUrl=zk:zookeeper:2181 \\\n    -e cluster-name=cluster-a -e managedLedgerDefaultEnsembleSize=1 \\\n    -e managedLedgerDefaultWriteQuorum=1 \\\n    -e managedLedgerDefaultAckQuorum=1 \\\n    -v $(pwd)/data/zookeeper:/pulsar/data/zookeeper \\\n    --name zookeeper --hostname zookeeper \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && bin/generate-zookeeper-config.sh conf/zookeeper.conf && exec bin/pulsar zookeeper"\n')),(0,o.kt)("h3",{id:"initialize-the-cluster-metadata"},"Initialize the cluster metadata"),(0,o.kt)("p",null,"After creating the ZooKeeper container successfully, you can use the following command to initialize the cluster metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --net=pulsar \\\n    --name initialize-pulsar-cluster-metadata \\\n    apachepulsar/pulsar-all:latest bash -c "bin/pulsar initialize-cluster-metadata \\\n--cluster cluster-a \\\n--zookeeper zookeeper:2181 \\\n--configuration-store zookeeper:2181 \\\n--web-service-url http://broker:8080 \\\n--broker-service-url pulsar://broker:6650"\n')),(0,o.kt)("h3",{id:"create-a-bookie-container"},"Create a bookie container"),(0,o.kt)("p",null,"Create a bookie container and start the bookie service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -e clusterName=cluster-a \\\n    -e zkServers=zookeeper:2181 --net=pulsar \\\n    -e metadataServiceUri=metadata-store:zk:zookeeper:2181 \\\n    -v $(pwd)/data/bookkeeper:/pulsar/data/bookkeeper \\\n    --name bookie --hostname bookie \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n')),(0,o.kt)("h3",{id:"create-a-broker-container"},"Create a broker container"),(0,o.kt)("p",null,"Create a broker container and start the broker service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 6650:6650 -p 8080:8080 --net=pulsar  -e metadataStoreUrl=zk:zookeeper:2181  -e zookeeperServers=zookeeper:2181 -e clusterName=cluster-a  -e managedLedgerDefaultEnsembleSize=1 -e managedLedgerDefaultWriteQuorum=1   -e managedLedgerDefaultAckQuorum=1 --name broker --hostname broker apachepulsar/pulsar-all:latest bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n')))}d.isMDXComponent=!0}}]);