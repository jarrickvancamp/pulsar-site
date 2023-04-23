"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3849],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,s(s({ref:n},p),{},{components:t})):a.createElement(k,s({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const r={id:"io-cdc-canal",title:"CDC Canal Connector",sidebar_label:"CDC Canal Connector",original_id:"io-cdc-canal"},s=void 0,o={unversionedId:"io-cdc-canal",id:"version-2.3.2/io-cdc-canal",title:"CDC Canal Connector",description:"Source Configuration Options",source:"@site/versioned_docs/version-2.3.2/io-cdc-canal.md",sourceDirName:".",slug:"/io-cdc-canal",permalink:"/docs/2.3.2/io-cdc-canal",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/io-cdc-canal.md",tags:[],version:"2.3.2",frontMatter:{id:"io-cdc-canal",title:"CDC Canal Connector",sidebar_label:"CDC Canal Connector",original_id:"io-cdc-canal"}},i={},c=[{value:"Source Configuration Options",id:"source-configuration-options",level:3},{value:"Configuration Example",id:"configuration-example",level:3},{value:"Usage example",id:"usage-example",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"source-configuration-options"},"Source Configuration Options"),(0,l.kt)("p",null,"The Configuration is mostly related to Canal task config."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zkServers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"127.0.0.1:2181")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"The address and port of the zookeeper . if canal server configured to cluster mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5120")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Take 5120 records from the canal server in batches"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Canal server account, not MySQL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Canal server password, not MySQL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Decide whether to open cluster mode based on canal server configuration, true: cluster mode, false: standalone mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"singleHostname")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"127.0.0.1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"The address of canal server"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"singlePort")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"11111")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"The port of canal server"))))),(0,l.kt)("h3",{id:"configuration-example"},"Configuration Example"),(0,l.kt)("p",null,"Here is a configuration Json example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$json"},'\n{\n    "zkServers": "127.0.0.1:2181",\n    "batchSize": "5120",\n    "destination": "example",\n    "username": "",\n    "password": "",\n    "cluster": false,\n    "singleHostname": "127.0.0.1",\n    "singlePort": "11111",\n}\n\n')),(0,l.kt)("p",null,"You could also find the yaml example in this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/resources/canal-mysql-source-config.yaml"},"file"),", which has similar content below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$yaml"},'\nconfigs:\n    zkServers: "127.0.0.1:2181"\n    batchSize: "5120"\n    destination: "example"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "127.0.0.1"\n    singlePort: "11111"\n\n')),(0,l.kt)("h3",{id:"usage-example"},"Usage example"),(0,l.kt)("p",null,"Here is a simple example to store MySQL change data using above example config."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start a MySQL server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker pull mysql:5.7\ndocker run -d -it --rm --name pulsar-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=canal -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw mysql:5.7\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify configuration files mysqld.cnf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n[mysqld]\npid-file    = /var/run/mysqld/mysqld.pid\nsocket      = /var/run/mysqld/mysqld.sock\ndatadir     = /var/lib/mysql\n#log-error  = /var/log/mysql/error.log\n# By default we only accept connections from localhost\n#bind-address   = 127.0.0.1\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\nlog-bin=mysql-bin\nbinlog-format=ROW\nserver_id=1\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy file to mysql server from local and restart mysql server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker cp mysqld.cnf pulsar-mysql:/etc/mysql/mysql.conf.d/\ndocker restart pulsar-mysql\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create test database in mysql server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-mysql /bin/bash\nmysql -h 127.0.0.1 -uroot -pcanal -e 'create database test;'\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start canal server and connect mysql server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\ndocker pull canal/canal-server:v1.1.2\ndocker run -d -it --link pulsar-mysql -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=pulsar-mysql:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false --name=pulsar-canal-server -p 8000:8000 -p 2222:2222 -p 11111:11111 -p 11112:11112 -m 4096m canal/canal-server:v1.1.2\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start pulsar standalone")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker pull apachepulsar/pulsar:2.3.0\ndocker run -d -it --link pulsar-canal-server -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:2.3.0 bin/pulsar standalone\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start pulsar-io in standalone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Config file canal-mysql-source-config.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$yaml"},'\nconfigs:\n    zkServers: ""\n    batchSize: "5120"\n    destination: "test"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "pulsar-canal-server"\n    singlePort: "11111"\n\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Consumer file pulsar-client.py for test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy config file and test file to pulsar server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker cp canal-mysql-source-config.yaml pulsar-standalone:/pulsar/conf/\ndocker cp pulsar-client.py pulsar-standalone:/pulsar/\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download canal connector and start canal connector")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-standalone /bin/bash\nwget http://apache.01link.hk/pulsar/pulsar-2.3.0/connectors/pulsar-io-canal-2.3.0.nar -P connectors\n./bin/pulsar-admin source localrun --archive ./connectors/pulsar-io-canal-2.3.0.nar --classname org.apache.pulsar.io.canal.CanalStringSource --tenant public --namespace default --name canal --destination-topic-name my-topic --source-config-file /pulsar/conf/canal-mysql-source-config.yaml --parallelism 1\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Consumption data")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-standalone /bin/bash\npython pulsar-client.py\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open another window for login mysql server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-$bash"},"\ndocker exec -it pulsar-mysql /bin/bash\nmysql -h 127.0.0.1 -uroot -pcanal\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create table and insert, delete, update data in mysql server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nmysql> use test;\nmysql> show tables;\nmysql> CREATE TABLE IF NOT EXISTS `test_table`(`test_id` INT UNSIGNED AUTO_INCREMENT,`test_title` VARCHAR(100) NOT NULL,\n`test_author` VARCHAR(40) NOT NULL,\n`test_date` DATE,PRIMARY KEY ( `test_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;\nmysql> INSERT INTO test_table (test_title, test_author, test_date) VALUES(\"a\", \"b\", NOW());\nmysql> UPDATE test_table SET test_title='c' WHERE test_title='a';\nmysql> DELETE FROM test_table WHERE test_title='c';\n\n")))}u.isMDXComponent=!0}}]);