"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87853],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>k});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=s,k=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return a?t.createElement(k,r(r({ref:n},u),{},{components:a})):t.createElement(k,r({ref:n},u))}));function k(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36214:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(87462),s=(a(67294),a(3905));const l={id:"validate-release-candidate",title:"Verifying release candidates"},r=void 0,i={unversionedId:"validate-release-candidate",id:"validate-release-candidate",title:"Verifying release candidates",description:"This page contains manual instructions for reviewing and verifying a release candidate.",source:"@site/contribute/validate-release-candidate.md",sourceDirName:".",slug:"/validate-release-candidate",permalink:"/contribute/validate-release-candidate",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/validate-release-candidate.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1679393137,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{id:"validate-release-candidate",title:"Verifying release candidates"},sidebar:"sidebarDevelopment",previous:{title:"Writing release notes",permalink:"/contribute/release-note-guide"},next:{title:"How to become a core developer",permalink:"/contribute/become-core-developer"}},o={},c=[{value:"Validate the binary distribution",id:"validate-the-binary-distribution",level:2},{value:"Download And Verify the binary distributions",id:"download-and-verify-the-binary-distributions",level:3},{value:"Validate Pub/Sub and Java Functions",id:"validate-pubsub-and-java-functions",level:3},{value:"Standalone service",id:"standalone-service",level:4},{value:"Functions",id:"functions",level:4},{value:"Validate Connectors",id:"validate-connectors",level:3},{value:"Validate Stateful Functions",id:"validate-stateful-functions",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...a}=e;return(0,s.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This page contains manual instructions for reviewing and verifying a release candidate."),(0,s.kt)("h2",{id:"validate-the-binary-distribution"},"Validate the binary distribution"),(0,s.kt)("h3",{id:"download-and-verify-the-binary-distributions"},"Download And Verify the binary distributions"),(0,s.kt)("p",null,"Download the server distribution ",(0,s.kt)("inlineCode",{parentName:"p"},"apache-pulsar-<release>-bin.tar.gz")," and extract it. The extracted files are in a directory called ",(0,s.kt)("inlineCode",{parentName:"p"},"apache-pulsar-<release>"),". All the operations below happen within that directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-pulsar-<release>\nmkdir connectors\n")),(0,s.kt)("p",null,"Download the Pulsar IO Connector files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"pulsar-io-aerospike-<release>.nar\npulsar-io-cassandra-<release>.nar\npulsar-io-kafka-<release>.nar\npulsar-io-kinesis-<release>.nar\npulsar-io-rabbitmq-<release>.nar\npulsar-io-twitter-<release>.nar\n")),(0,s.kt)("p",null,"and place them in the ",(0,s.kt)("inlineCode",{parentName:"p"},"connectors")," directory."),(0,s.kt)("p",null,"Download the ",(0,s.kt)("inlineCode",{parentName:"p"},"*.asc")," file and verify the GPG signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify apache-pulsar-<release>-bin.tar.gz.asc\n")),(0,s.kt)("h3",{id:"validate-pubsub-and-java-functions"},"Validate Pub/Sub and Java Functions"),(0,s.kt)("h4",{id:"standalone-service"},"Standalone service"),(0,s.kt)("p",null,"Open a terminal to start a standalone service:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar standalone\n")),(0,s.kt)("p",null,"When you start a standalone cluster, there are a few things to check."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The standalone cluster is able to locate all the connectors. The following logging information should be displayed.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Found connector ConnectorDefinition(name=kinesis, description=Kinesis sink connector, sourceClass=null, sinkClass=org.apache.pulsar.io.kinesis.KinesisSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-kinesis-2.1.0-incubating.nar\n...\nFound connector ConnectorDefinition(name=cassandra, description=Writes data into Cassandra, sourceClass=null, sinkClass=org.apache.pulsar.io.cassandra.CassandraStringSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-cassandra-2.1.0-incubating.nar\n...\nFound connector ConnectorDefinition(name=aerospike, description=Aerospike database sink, sourceClass=null, sinkClass=org.apache.pulsar.io.aerospike.AerospikeStringSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-aerospike-2.1.0-incubating.nar\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"(since Pulsar 2.1 release) The standalone starts bookkeeper table service. The output is similar as follows:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"12:12:26.099 [main] INFO  org.apache.pulsar.zookeeper.LocalBookkeeperEnsemble - 'default' namespace for table service : namespace_name: \"default\"\ndefault_stream_conf {\n  key_type: HASH\n  min_num_ranges: 24\n  initial_num_ranges: 24\n  split_policy {\n    fixed_range_policy {\n      num_ranges: 2\n    }\n  }\n  rolling_policy {\n    size_policy {\n      max_segment_size: 134217728\n    }\n  }\n  retention_policy {\n    time_policy {\n      retention_minutes: -1\n    }\n  }\n}\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Functions worker is started correctly. The output is similar as follows:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'14:28:24.101 [main] INFO  org.apache.pulsar.functions.worker.WorkerService - Starting worker c-standalone-fw-localhost-8080...\n14:28:24.907 [main] INFO  org.apache.pulsar.functions.worker.WorkerService - Worker Configs: {\n  "workerId" : "c-standalone-fw-localhost-8080",\n  "workerHostname" : "localhost",\n  "workerPort" : 8080,\n  "workerPortTls" : 6751,\n  "jvmGCMetricsLoggerClassName" : null,\n  "numHttpServerThreads" : 8,\n  "connectorsDirectory" : "./connectors",\n  "functionMetadataTopicName" : "metadata",\n  "functionWebServiceUrl" : null,\n  "pulsarServiceUrl" : "pulsar://127.0.0.1:6650",\n  "pulsarWebServiceUrl" : "http://127.0.0.1:8080",\n  "clusterCoordinationTopicName" : "coordinate",\n  "pulsarFunctionsNamespace" : "public/functions",\n  "pulsarFunctionsCluster" : "standalone",\n  "numFunctionPackageReplicas" : 1,\n  "downloadDirectory" : "/tmp/pulsar_functions",\n  "stateStorageServiceUrl" : "bk://127.0.0.1:4181",\n  "functionAssignmentTopicName" : "assignments",\n  "schedulerClassName" : "org.apache.pulsar.functions.worker.scheduler.RoundRobinScheduler",\n  "failureCheckFreqMs" : 30000,\n  "rescheduleTimeoutMs" : 60000,\n  "initialBrokerReconnectMaxRetries" : 60,\n  "assignmentWriteMaxRetries" : 60,\n  "instanceLivenessCheckFreqMs" : 30000,\n  "clientAuthenticationPlugin" : null,\n  "clientAuthenticationParameters" : null,\n  "topicCompactionFrequencySec" : 1800,\n  "tlsEnabled" : true,\n  "tlsCertificateFilePath" : null,\n  "tlsKeyFilePath" : null,\n  "tlsTrustCertsFilePath" : null,\n  "tlsAllowInsecureConnection" : false,\n  "tlsRequireTrustedClientCertOnConnect" : false,\n  "useTls" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "authenticationEnabled" : false,\n  "authenticationProviders" : null,\n  "authorizationEnabled" : false,\n  "superUserRoles" : null,\n  "properties" : { },\n  "threadContainerFactory" : null,\n  "processContainerFactory" : {\n    "javaInstanceJarLocation" : null,\n    "pythonInstanceLocation" : null,\n    "logDirectory" : null,\n    "extraFunctionDependenciesDir" : null\n  },\n  "kubernetesContainerFactory" : null,\n  "secretsProviderConfiguratorClassName" : null,\n  "secretsProviderConfiguratorConfig" : null,\n  "functionInstanceMinResources" : null,\n  "workerWebAddress" : "http://localhost:8080",\n  "functionMetadataTopic" : "persistent://public/functions/metadata",\n  "clusterCoordinationTopic" : "persistent://public/functions/coordinate",\n  "functionAssignmentTopic" : "persistent://public/functions/assignments"\n}\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Do sanity check before moving to the next step.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# check pulsar binary port is listened correctly\nnetstat -an | grep 6650 | grep LISTEN\n\n# check function cluster\ncurl -s http://localhost:8080/admin/v2/worker/cluster\n# example output:\n# [{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n\n# check brokers\ncurl -s http://localhost:8080/admin/v2/namespaces/public\n# example outoupt:\n# ["public/default","public/functions"]\n\n# check connectors\ncurl -s http://localhost:8080/admin/v2/functions/connectors\n# example output:\n# [{"name":"aerospike","description":"Aerospike database sink","sinkClass":"org.apache.pulsar.io.aerospike.AerospikeStringSink"},{"name":"cassandra","description":"Writes data into Cassandra","sinkClass":"org.apache.pulsar.io.cassandra.CassandraStringSink"},{"name":"kafka","description":"Kafka source and sink connector","sourceClass":"org.apache.pulsar.io.kafka.KafkaStringSource","sinkClass":"org.apache.pulsar.io.kafka.KafkaStringSink"},{"name":"kinesis","description":"Kinesis sink connector","sinkClass":"org.apache.pulsar.io.kinesis.KinesisSink"},{"name":"rabbitmq","description":"RabbitMQ source connector","sourceClass":"org.apache.pulsar.io.rabbitmq.RabbitMQSource"},{"name":"twitter","description":"Ingest data from Twitter firehose","sourceClass":"org.apache.pulsar.io.twitter.TwitterFireHose"}]\n\n# check table services (Skip this step on 2.11.x or later)\nnc -vz4 localhost 4181\n')),(0,s.kt)("h4",{id:"functions"},"Functions"),(0,s.kt)("p",null,"Open another terminal to submit a Java Exclamation function."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create tenant and namespace:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create function.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions create --function-config-file examples/example-function-config.yaml --jar examples/api-examples.jar\n")),(0,s.kt)("p",null,"The following information is returned: ",(0,s.kt)("inlineCode",{parentName:"p"},"Created Successfully"),"."),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"At the same terminal as step 2, retrieve the function configuration.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions get --tenant test --namespace test-namespace --name example\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "example",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "userConfig": "{\\"PublishTopic\\":\\"test_result\\"}",\n  "autoAck": true,\n  "parallelism": 1,\n  "source": {\n    "topicsToSerDeClassName": {\n      "test_src": ""\n    },\n    "typeClassName": "java.lang.String"\n  },\n  "sink": {\n    "topic": "test_result",\n    "typeClassName": "java.lang.String"\n  },\n  "resources": {}\n}\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"At the same terminal as step 3, retrieve the function status.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions status --tenant test --namespace test-namespace --name example\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n')),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"At the same terminal as step 4, subscribe the output topic ",(0,s.kt)("inlineCode",{parentName:"li"},"test_result"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-client consume -s test-sub -n 0 test_result\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Open a new terminal to produce messages into the input topic ",(0,s.kt)("inlineCode",{parentName:"li"},"test_src"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n')),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"At the terminal of step 5, the messages produced by the Exclamation function is returned. The output is similar as follows:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n")),(0,s.kt)("h3",{id:"validate-connectors"},"Validate Connectors"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Make sure you have docker available at your laptop. If you haven't installed docker, you can skip this section.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Set up a cassandra cluster.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm  --name=cassandra -p 9042:9042 cassandra\n")),(0,s.kt)("p",null,"Make sure that the cassandra cluster is running."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# run docker ps to find the docker process for cassandra\ndocker ps\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# check if the cassandra is running as expected\ndocker logs cassandra\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# check the cluster status\ndocker exec cassandra nodetool status\n\n# Datacenter: datacenter1\n# =======================\n# Status=Up/Down\n# |/ State=Normal/Leaving/Joining/Moving\n# --  Address     Load       Tokens       Owns (effective)  Host ID                               Rack\n# UN  172.17.0.2  103.67 KiB  256          100.0%            af0e4b2f-84e0-4f0b-bb14-bd5f9070ff26  rack1\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create keyspace and table.")),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"cqlsh"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti cassandra cqlsh localhost\n")),(0,s.kt)("p",null,"In the cqlsh, create the ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar_test_keyspace")," keyspace and the ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar_test_table")," table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"cqlsh> CREATE KEYSPACE pulsar_test_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};\ncqlsh> USE pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> CREATE TABLE pulsar_test_table (key text PRIMARY KEY, col text);\ncqlsh:pulsar_test_keyspace> exit\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Prepare a cassandra sink yaml file and put it under examples directory as ",(0,s.kt)("inlineCode",{parentName:"li"},"cassandra-sink.yml"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim examples/cassandra-sink.yml\n")),(0,s.kt)("p",null,"The content should be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Submit a cassandra sink.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-admin sink create --tenant public --namespace default --name cassandra-test-sink --sink-type cassandra --sink-config-file examples/cassandra-sink.yml --inputs test_cassandra\n# "Created successfully"\n')),(0,s.kt)("p",null,"Get the sink info:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin sink get --tenant public --namespace default --name cassandra-test-sink\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "cassandra-test-sink",\n  "className": "org.apache.pulsar.io.cassandra.CassandraStringSink",\n  "inputSpecs": {\n    "test_cassandra": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true,\n  "archive": "builtin://cassandra"\n}\n')),(0,s.kt)("p",null,"Get the running status:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin sink status --tenant public --namespace default --name cassandra-test-sink\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n')),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Produce messages to the source topic.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'for i in {0..10}; do bin/pulsar-client produce -m "key-$i" -n 1 test_cassandra; done\n')),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Check the sink status, and 11 messages are processed.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin sink status --tenant public --namespace default --name cassandra-test-sink\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 11,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 11,\n      "lastReceivedTime" : 1554833501277,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n')),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Check results in cassandra.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti cassandra cqlsh localhost\n")),(0,s.kt)("p",null,"In the cqlsh session:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"cqlsh> use pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> select * from pulsar_test_table;\n\n key    | col\n--------+--------\n  key-5 |  key-5\n  key-0 |  key-0\n  key-9 |  key-9\n  key-2 |  key-2\n  key-1 |  key-1\n  key-3 |  key-3\n  key-6 |  key-6\n  key-7 |  key-7\n  key-4 |  key-4\n  key-8 |  key-8\n key-10 | key-10\n\n(11 rows)\ncqlsh:pulsar_test_keyspace> exit\n")),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"Delete the sink.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-admin sink delete --tenant public --namespace default --name cassandra-test-sink\n# "Deleted successfully"\n')),(0,s.kt)("h3",{id:"validate-stateful-functions"},"Validate Stateful Functions"),(0,s.kt)("p",null,"Since Pulsar 2.1 release, Pulsar enables bookkeeper table service for stateful Pulsar functions (as a developer preview)."),(0,s.kt)("p",null,"The following are instructions to validate counter functions."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a wordcount function.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-admin functions create --function-config-file examples/example-function-config.yaml --jar examples/api-examples.jar --name word_count --className org.apache.pulsar.functions.api.examples.WordCountFunction --inputs test_wordcount_src --output test_wordcount_dest\n# "Created successfully"\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Get function information and status.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions get --tenant test --namespace test-namespace --name word_count\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "word_count",\n  "className": "org.apache.pulsar.functions.api.examples.WordCountFunction",\n  "inputSpecs": {\n    "test_wordcount_src": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "test_wordcount_dest",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {\n    "PublishTopic": "test_result"\n  },\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "cleanupSubscription": true\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions status --tenant test --namespace test-namespace --name word_count\n")),(0,s.kt)("p",null,"The output is similar as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},'Query the state table for the function: watching on a key called "hello"')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin functions querystate --tenant test --namespace test-namespace --name word_count -k hello -w\n# key 'hello' doesn't exist.\n# key 'hello' doesn't exist.\n# key 'hello' doesn't exist\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Produce the messages to source topic ",(0,s.kt)("inlineCode",{parentName:"li"},"test_wordcount_src"),".")),(0,s.kt)("p",null,'Produce 10 messages "hello" to the ',(0,s.kt)("inlineCode",{parentName:"p"},"test_wordcount_src"),' topic. The value of "hello" is updated to 10.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n')),(0,s.kt)("p",null,"Checkout the result in the terminal of step 3."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "hello",\n  "numberValue": 10,\n  "version": 9\n}\n')),(0,s.kt)("p",null,'Produce another 10 messages "hello". The result is updated to 20.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n')),(0,s.kt)("p",null,"The result in the terminal of step 3 is updated to ",(0,s.kt)("inlineCode",{parentName:"p"},"20"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'  "key": "hello",\n  "numberValue": 20,\n  "version": 19\n')))}m.isMDXComponent=!0}}]);