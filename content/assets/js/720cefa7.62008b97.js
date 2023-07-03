"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"setup-ide",title:"Setting up an IDE"},a=void 0,l={unversionedId:"setup-ide",id:"setup-ide",title:"Setting up an IDE",description:"Apache Pulsar is using lombok, so you have to ensure your IDE setup with required plugins.",source:"@site/contribute/setup-ide.md",sourceDirName:".",slug:"/setup-ide",permalink:"/contribute/setup-ide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-ide.md",tags:[],version:"current",lastUpdatedBy:"Zhang Yuxuan",lastUpdatedAt:1688091560,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"setup-ide",title:"Setting up an IDE"},sidebar:"sidebarDevelopment",previous:{title:"Setup and building",permalink:"/contribute/setup-building"},next:{title:"Coding conventions",permalink:"/contribute/develop-coding-conventions"}},s={},p=[{value:"IntelliJ IDEA",id:"intellij-idea",level:2},{value:"Configure Project JDK to JDK 17",id:"configure-project-jdk-to-jdk-17",level:3},{value:"Configure Java version for Maven",id:"configure-java-version-for-maven",level:3},{value:"Configure annotation processing",id:"configure-annotation-processing",level:3},{value:"Configure code style",id:"configure-code-style",level:3},{value:"Configure Checkstyle",id:"configure-checkstyle",level:3},{value:"Further configuration",id:"further-configuration",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Eclipse",id:"eclipse",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pulsar is using ",(0,o.kt)("a",{parentName:"p",href:"https://projectlombok.org/"},"lombok"),", so you have to ensure your IDE setup with required plugins."),(0,o.kt)("h2",{id:"intellij-idea"},"IntelliJ IDEA"),(0,o.kt)("h3",{id:"configure-project-jdk-to-jdk-17"},"Configure Project JDK to JDK 17"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Project Settings"),". Click ",(0,o.kt)("strong",{parentName:"li"},"File")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Project Structure")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Project Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Project"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the JDK version. From the JDK version drop-down list, select ",(0,o.kt)("strong",{parentName:"li"},"Download JDK...")," or choose an existing recent Java 17 JDK version."),(0,o.kt)("li",{parentName:"ol"},"In the download dialog, select version ",(0,o.kt)("strong",{parentName:"li"},"17")," and vendor ",(0,o.kt)("strong",{parentName:"li"},"Eclipse Temurin (AdoptOpenJDK HotSpot)"),".")),(0,o.kt)("h3",{id:"configure-java-version-for-maven"},"Configure Java version for Maven"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Maven Importing Settings. Click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Build, Execution, Deployment")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Build Tools")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Maven")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Importing"),"."),(0,o.kt)("li",{parentName:"ol"},"For ",(0,o.kt)("strong",{parentName:"li"},"JDK for Importer")," setting, select ",(0,o.kt)("strong",{parentName:"li"},"Use Project JDK"),". This uses the Java 17 JDK for running Maven when importing the project."),(0,o.kt)("li",{parentName:"ol"},"Ensure that the JRE setting in ",(0,o.kt)("strong",{parentName:"li"},"Maven")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Runner")," dialog is set to ",(0,o.kt)("strong",{parentName:"li"},"Use Project JDK"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Some configuration in the Maven build is conditional based on the JDK version. Incorrect configuration gets chosen when the "JDK for Importer" isn\'t the same as the "Project JDK".')),(0,o.kt)("h3",{id:"configure-annotation-processing"},"Configure annotation processing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Annotation Processors Settings. Click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Build, Execution, Deployment")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Compiler")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Annotation Processors"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the following buttons:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enable annotation processing")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Obtain processors from project classpath")),(0,o.kt)("li",{parentName:"ol"},"Store generated sources relative to: ",(0,o.kt)("strong",{parentName:"li"},"Module output directory")))),(0,o.kt)("li",{parentName:"ol"},"Set the generated source directories to be equal to the Maven directories:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Set "Production sources directory:" to "generated-sources".'),(0,o.kt)("li",{parentName:"ol"},'Set "Test sources directory:" to "generated-test-sources".'))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OK"),"."),(0,o.kt)("li",{parentName:"ol"},"Install the lombok plugin in intelliJ.")),(0,o.kt)("h3",{id:"configure-code-style"},"Configure code style"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Code Style Settings dialog box by going to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Editor")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Code Style"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the \u2699\ufe0f symbol \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Import scheme")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"IntelliJ IDEA code style XML")),(0,o.kt)("li",{parentName:"ol"},"Pick the file ",(0,o.kt)("inlineCode",{parentName:"li"},"${pulsar_dir}/src/idea-code-style.xml")),(0,o.kt)("li",{parentName:"ol"},"On the dialog box that opens, click ",(0,o.kt)("strong",{parentName:"li"},"OK"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure the scheme you just created is selected in ",(0,o.kt)("strong",{parentName:"li"},"Scheme")," dropdown then click ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h3",{id:"configure-checkstyle"},"Configure Checkstyle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Checkstyle-IDEA plugin."),(0,o.kt)("li",{parentName:"ol"},"Open Checkstyle Settings. Click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Tools")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Checkstyle"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Checkstyle version")," to ",(0,o.kt)("strong",{parentName:"li"},"8.37"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Scan scope")," to ",(0,o.kt)("strong",{parentName:"li"},"Only Java sources (including tests)"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+")," button in the ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," section to open a dialog to choose the checkstyle config file.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Description"),". For example, Pulsar."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Use a local checkstyle file"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"File")," to ",(0,o.kt)("strong",{parentName:"li"},"buildtools/src/main/resources/pulsar/checkstyle.xml"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Store relative to project location"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Next")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Finish"),"."))),(0,o.kt)("li",{parentName:"ol"},"Activate the configuration you just added by toggling the corresponding box."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h3",{id:"further-configuration"},"Further configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When working on the Pulsar core modules in IntelliJ, reduce the number of active projects in IntelliJ to speed up IDE actions and reduce unrelated IDE warnings.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In IntelliJ's Maven UI's tree view under \"Profiles\"",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Activate "core-modules" Maven profile'),(0,o.kt)("li",{parentName:"ul"},'De-activate "main" Maven profile'),(0,o.kt)("li",{parentName:"ul"},'Run the "Reload All Maven Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,o.kt)("strong",{parentName:"li"},"Shift")," key twice."))))),(0,o.kt)("li",{parentName:"ul"},'Run the "Generate Sources and Update Folders For All Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,o.kt)("strong",{parentName:"li"},"Shift"),' key twice. Running the action takes about 10 minutes for all projects. This is faster when the "core-modules" profile is the only active profile.')),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In the case of compilation errors with missing Protobuf classes, ensure to run the "Generate Sources and Update Folders For All Projects" action.'),(0,o.kt)("li",{parentName:"ul"},"When all the Pulsar source code doesn't compile properly in IntelliJ and there are compilation errors:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Use the "core-modules" profile if working on the Pulsar core modules since the source code for those modules can be compiled in IntelliJ.'),(0,o.kt)("li",{parentName:"ul"},"Sometimes it might help to mark a specific project ignored in IntelliJ Maven UI by right-clicking the project name and select ",(0,o.kt)("strong",{parentName:"li"},"Ignore Projects")," from the menu."),(0,o.kt)("li",{parentName:"ul"},"Currently, it is not always possible to run unit tests directly from the IDE because of the compilation issues. As a workaround, individual test classes can be run by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn test -Dtest=TestClassName")," command."))),(0,o.kt)("li",{parentName:"ul"},"The above steps have all been performed, but a test still won't run.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In this case, try the following steps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Close IntelliJ."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn clean install -DskipTests")," on the command line."),(0,o.kt)("li",{parentName:"ol"},"Reopen IntelliJ."))),(0,o.kt)("li",{parentName:"ul"},"If that still doesn't work:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Verify Maven is using a supported version. Currently, the supported version of Maven is specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<requireMavenVersion>")," section of the root ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")," file."),(0,o.kt)("li",{parentName:"ol"},'Try "restart and clear caches" in IntelliJ and repeat the above steps to reload projects and generate sources.')))))),(0,o.kt)("h2",{id:"eclipse"},"Eclipse"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/automation/lombok-eclipse-installation-examples/"},"these instructions")," to configure your Eclipse setup."))}m.isMDXComponent=!0}}]);