"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={id:"functions-deploy",title:"Deploy Pulsar Functions",sidebar_label:"How-to: Deploy",original_id:"functions-deploy"},i=void 0,l={unversionedId:"functions-deploy",id:"version-2.6.3/functions-deploy",title:"Deploy Pulsar Functions",description:"Requirements",source:"@site/versioned_docs/version-2.6.3/functions-deploy.md",sourceDirName:".",slug:"/functions-deploy",permalink:"/docs/2.6.3/functions-deploy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/functions-deploy.md",tags:[],version:"2.6.3",frontMatter:{id:"functions-deploy",title:"Deploy Pulsar Functions",sidebar_label:"How-to: Deploy",original_id:"functions-deploy"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"How-to: Debug",permalink:"/docs/2.6.3/functions-debug"},next:{title:"Reference: CLI",permalink:"/docs/2.6.3/functions-cli"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Default arguments",id:"default-arguments",level:3},{value:"Example of default arguments",id:"example-of-default-arguments",level:3},{value:"Local run mode",id:"local-run-mode",level:2},{value:"Cluster mode",id:"cluster-mode",level:2},{value:"Update functions in cluster mode",id:"update-functions-in-cluster-mode",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"Function instance resources",id:"function-instance-resources",level:3},{value:"Trigger Pulsar Functions",id:"trigger-pulsar-functions",level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To deploy and manage Pulsar Functions, you need to have a Pulsar cluster running. There are several options for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can run a ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.3/getting-started-standalone"},"standalone cluster")," locally on your own machine."),(0,r.kt)("li",{parentName:"ul"},"You can deploy a Pulsar cluster on ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.3/deploy-kubernetes"},"Kubernetes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.3/deploy-aws"},"Amazon Web Services"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.3/deploy-bare-metal"},"bare metal"),", ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),", and more.")),(0,r.kt)("p",null,"If you run a non-",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-terminology#standalone"},"standalone")," cluster, you need to obtain the service URL for the cluster. How you obtain the service URL depends on how you deploy your Pulsar cluster."),(0,r.kt)("p",null,"If you want to deploy and trigger Python user-defined functions, you need to install ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/client-libraries-python/"},"the pulsar python client")," on all the machines running ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/functions-worker"},"functions workers"),"."),(0,r.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,r.kt)("p",null,"Pulsar Functions are deployed and managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#functions"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions"))," interface, which contains commands such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#functions-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," for deploying functions in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"trigger"))," for ",(0,r.kt)("a",{parentName:"p",href:"#triggering-pulsar-functions"},"triggering")," functions, ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#list-2"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," for listing deployed functions."),(0,r.kt)("p",null,"To learn more commands, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#functions"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions")),"."),(0,r.kt)("h3",{id:"default-arguments"},"Default arguments"),(0,r.kt)("p",null,"When managing Pulsar Functions, you need to specify a variety of information about functions, including tenant, namespace, input and output topics, and so on. However, some parameters have default values if you do not specify values for them. The following table lists the default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Function name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can specify any value for the class name (except org, library, or similar class names). For example, when you specify the flag ",(0,r.kt)("inlineCode",{parentName:"td"},"--classname org.example.MyFunction"),", the function name is ",(0,r.kt)("inlineCode",{parentName:"td"},"MyFunction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tenant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Derived from names of the input topics. If the input topics are under the ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing")," tenant, which means the topic names have the form ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/{namespace}/{topicName}"),", the tenant is ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Derived from names of the input topics. If the input topics are under the ",(0,r.kt)("inlineCode",{parentName:"td"},"asia")," namespace under the ",(0,r.kt)("inlineCode",{parentName:"td"},"marketing")," tenant, which means the topic names have the form ",(0,r.kt)("inlineCode",{parentName:"td"},"persistent://marketing/asia/{topicName}"),", then the namespace is ",(0,r.kt)("inlineCode",{parentName:"td"},"asia"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Output topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{input topic}-{function name}-output"),". For example, if an input topic name of a function is ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming"),", and the function name is ",(0,r.kt)("inlineCode",{parentName:"td"},"exclamation"),", then the name of the output topic is ",(0,r.kt)("inlineCode",{parentName:"td"},"incoming-exclamation-output"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscription type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For ",(0,r.kt)("inlineCode",{parentName:"td"},"at-least-once")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"at-most-once")," ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.3/functions-overview#processing-guarantees"},"processing guarantees"),", the ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.3/concepts-messaging#shared"},(0,r.kt)("inlineCode",{parentName:"a"},"SHARED"))," mode is applied by default; for ",(0,r.kt)("inlineCode",{parentName:"td"},"effectively-once")," guarantees, the ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.3/concepts-messaging#failover"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILOVER"))," mode is applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Processing guarantees"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.3/functions-overview#processing-guarantees"},(0,r.kt)("inlineCode",{parentName:"a"},"ATLEAST_ONCE")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pulsar service URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pulsar://localhost:6650"))))),(0,r.kt)("h3",{id:"example-of-default-arguments"},"Example of default arguments"),(0,r.kt)("p",null,"Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," command as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar my-pulsar-functions.jar \\\n  --classname org.example.MyFunction \\\n  --inputs my-function-input-topic1,my-function-input-topic2\n\n")),(0,r.kt)("p",null,"The function has default values for the function name (",(0,r.kt)("inlineCode",{parentName:"p"},"MyFunction"),"), tenant (",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"), namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"), subscription type (",(0,r.kt)("inlineCode",{parentName:"p"},"SHARED"),"), processing guarantees (",(0,r.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),"), and Pulsar service URL (",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),")."),(0,r.kt)("h2",{id:"local-run-mode"},"Local run mode"),(0,r.kt)("p",null,"If you run a Pulsar Function in ",(0,r.kt)("strong",{parentName:"p"},"local run")," mode, it runs on the machine from which you enter the commands (on your laptop, an ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"AWS EC2")," instance, and so on). The following is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#localrun"},(0,r.kt)("inlineCode",{parentName:"a"},"localrun"))," command example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,r.kt)("p",null,"By default, the function connects to a Pulsar cluster running on the same machine, via a local ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-terminology#broker"},"broker")," service URL of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),". If you use local run mode to run a function but connect it to a non-local Pulsar cluster, you can specify a different broker URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--brokerServiceUrl")," flag. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n\n")),(0,r.kt)("h2",{id:"cluster-mode"},"Cluster mode"),(0,r.kt)("p",null,"When you run a Pulsar Function in ",(0,r.kt)("strong",{parentName:"p"},"cluster")," mode, the function code is uploaded to a Pulsar broker and runs ",(0,r.kt)("em",{parentName:"p"},"alongside the broker")," rather than in your ",(0,r.kt)("a",{parentName:"p",href:"#local-run-mode"},"local environment"),". You can run a function in cluster mode using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#create-1"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n")),(0,r.kt)("h3",{id:"update-functions-in-cluster-mode"},"Update functions in cluster mode"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#update-1"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," command to update a Pulsar Function running in cluster mode. The following command updates the function created in the ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/new-input-topic \\\n  --output persistent://public/default/new-output-topic\n\n")),(0,r.kt)("h3",{id:"parallelism"},"Parallelism"),(0,r.kt)("p",null,"Pulsar Functions run as processes or threads, which are called ",(0,r.kt)("strong",{parentName:"p"},"instances"),". When you run a Pulsar Function, it runs as a single instance by default. With one localrun command, you can only run a single instance of a function. If you want to run multiple instances, you can use localrun command multiple times."),(0,r.kt)("p",null,"When you create a function, you can specify the ",(0,r.kt)("em",{parentName:"p"},"parallelism")," of a function (the number of instances to run). You can set the parallelism factor using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--parallelism")," flag of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#functions-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --parallelism 3 \\\n  # Other function info\n\n")),(0,r.kt)("p",null,"You can adjust the parallelism of an already created function using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#update-1"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --parallelism 5 \\\n  # Other function\n\n")),(0,r.kt)("p",null,"If you specify a function configuration via YAML, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parallelism")," parameter. The following is a config file example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# function-config.yaml\nparallelism: 3\ninputs:\n- persistent://public/default/input-1\noutput: persistent://public/default/output-1\n# other parameters\n\n")),(0,r.kt)("p",null,"The following is corresponding update command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --function-config-file function-config.yaml\n\n")),(0,r.kt)("h3",{id:"function-instance-resources"},"Function instance resources"),(0,r.kt)("p",null,"When you run Pulsar Functions in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode"),", you can specify the resources that are assigned to each function ",(0,r.kt)("a",{parentName:"p",href:"#parallelism"},"instance"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Resource"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specified as"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Runtimes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of cores"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Process, Docker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk space"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Docker")))),(0,r.kt)("p",null,"The following function creation command allocates 8 cores, 8 GB of RAM, and 10 GB of disk space to a function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"resources-are-per-instance"},"Resources are ",(0,r.kt)("em",{parentName:"h4"},"per instance")),(0,r.kt)("p",{parentName:"blockquote"},"The resources that you apply to a given Pulsar Function are applied to each instance of the function. For example, if you apply 8 GB of RAM to a function with a parallelism of 5, you are applying 40 GB of RAM for the function in total. Make sure that you take the parallelism (the number of instances) factor into your resource calculations.")),(0,r.kt)("h2",{id:"trigger-pulsar-functions"},"Trigger Pulsar Functions"),(0,r.kt)("p",null,"If a Pulsar Function is running in ",(0,r.kt)("a",{parentName:"p",href:"#cluster-mode"},"cluster mode"),", you can ",(0,r.kt)("strong",{parentName:"p"},"trigger")," it at any time using the command line. Triggering a function means that you send a message with a specific value to the function and get the function output (if any) via the command line."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Triggering a function is to invoke a function by producing a message on one of the input topics. With the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions trigger"))," command, you can send messages to functions without using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," tool or a language-specific client library.")),(0,r.kt)("p",null,"To learn how to trigger a function, you can start with Python function that returns a simple string based on the input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n# myfunc.py\ndef process(input):\n    return "This function has been triggered with a value of {0}".format(input)\n\n')),(0,r.kt)("p",null,"You can run the function in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/functions-deploy#local-run-mode"},"local run mode"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --py myfunc.py \\\n  --classname myfunc \\\n  --inputs persistent://public/default/in \\\n  --output persistent://public/default/out\n\n")),(0,r.kt)("p",null,"Then assign a consumer to listen on the output topic for messages from the ",(0,r.kt)("inlineCode",{parentName:"p"},"myfunc")," function with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-cli-tools#consume"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client consume"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-client consume persistent://public/default/out \\\n  --subscription-name my-subscription\n  --num-messages 0 # Listen indefinitely\n\n")),(0,r.kt)("p",null,"And then you can trigger the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --trigger-value "hello world"\n\n')),(0,r.kt)("p",null,"The consumer listening on the output topic produces something as follows in the log."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n----- got message -----\nThis function has been triggered with a value of hello world\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"topic-info-is-not-required"},"Topic info is not required"),(0,r.kt)("p",{parentName:"blockquote"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," command, you only need to specify basic information about the function (tenant, namespace, and name). To trigger the function, you do not need to know the function input topics.")))}c.isMDXComponent=!0}}]);