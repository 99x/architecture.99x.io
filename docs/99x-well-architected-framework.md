---
id: 99x-well-architected-framework
title: 99x Well Architected Framework
---

## Abstract and Introduction

### Abstract

### Introduction

99X well architecture framework is designed for building market-winning products. This framework will guide you through the architectural best practices by looking at it from four different views. These are;

- Business architecture - focuses on customer success and market sense
- Product architecture - focuses on technology, data, and nonfunctional requirement
- Infrastructure architecture - focuses on the deployment/release pipelines, configuration transformation and management, automation and optimized lead-time into production, release security, release validation, release roll-back and release management strategies without being limited to cloud environments
- Production architecture - focuses on maintaining a system in production. Involving in the day-to-day smooth running of the system.

The 99X well architecture framework describes key concepts, design principles, and architectural best practices for designing and developing a product that can run on any platform. By addressing relevant quality attributes, which is specific to each pillars, the stakeholders can clarify almost every gray areas to come up with right architecture style and patterns.

Further, by answering few fundamental questions lean how to use right architectural style, patterns, and technologies. As well as it will guide to take the right decisions when designing an architecture for a specific requirement.

## Architecture process

Designing and building a right solution for a specific business requirement is a complex task. One way is to identify clear separation to make it simpler. Having a basic understanding of what needs to consider of each separation, will help to build a most suitable architecture for the complex business requirement.

The architecture of a system describes its non-functional requirements as style, patterns, and concepts. The technologies will describe how to implement functional requirements with addressing non-functional requirements. A proper software architecture and design needs to consider several factors. With 99 X, well architecture framework, we mention them as architecture views.

First, we need to have a proper idea of the business needs. What kind of problem that the customer going to be solved. What are the quality attributes that we need to address for the business need. Here, we called it as “Business Architecture”. From this view the 99X well architecture framework looks for the business need of the customer with applying relevant quality attributes.

Once we develop the business architecture, need to think of non-functional requirements and functional requirements. Based on those it needs to be identified which architectural style and architectural patterns that full-fill this requirements. To address this the relevant quality attributes will help to identify the parts to consider. Based on 99x well architecture framework, we call this view as “Product Architecture” .

As the next view, need to think about the infrastructure that most applicable for our product architecture. Infrastructure are the technologies, which helps to develop functional and non-functional requirements. Based on 99x well-known architecture, we call this view as “Infrastructure Architecture”.

Final step is how to make our product to day today running smoothly. To do this we need to address several quality attributes. This view is most important to make the availability, fault tolerance, and smoothly running the product with adding values to the customer. Based on 99x well architecture, we call this view as the “Production Architecture”.

## Architecture Views

### Business Architecture

#### Definition
When implementing a product, it is important to understand the why we are building the product, what is the problem we are trying to solve. This should also include how the product will be perceived by the users and the market in general. The business architecture of a product will provide answers to these questions.
When defining the business architecture, we can analyze the product from different aspects as below.
- User experience - It is vital that we understand the users who will be using the product. Identifying the different personas of users will help the stakeholders to identify the features that the product should support as well as how these features should be presented to the users. A user persona will analyze the demographic of a typical user, what is the purpose the user will be using the product. It is also important to identify the motivation the user chooses to use this product and what will get them to continue to use the product.

- Technology sophistication - When using a product, a user has certain expectations that the product will provide implicitly. For example, in a banking application, they would expect it to be accurate (high reliability) and it is available at any time the user needs it (high availability). It is important that we identify these expectations and regulations early on along with identifying the features of the product. These facts will impact on the infrastructure architecture for example whether the product will be hosted in cloud or on-premise.

- Regulation and Compliance - In every domain there can be regulation and compliance that a product must adhere to. For example when a product is planned to be used in Europe and contains personal identifiable information (PII) then the product should be GDPR compliant. Also of the product is in healthcare domain there are other regulations and compliances that should be adhered to. These will impact on how the features are delivered to the end users.

- Market sense - A product either tries to solve a problem or will provide a solution to a requirement that the users themselves are not aware that they need. In case of trying to solve a problem that the users already aware, it is best to analyze what are the other products already available in the market. It is important to identify in addition to the common features, what are the pain points of the users who are already using an existing product and address them. This will make the product stand apart from the other existing products.

- Customer success - Once a product is released to the market, it should be able to solve the problem that the users have and guide them to achieve their goal. The customer success is an important factor in defining the business architecture since it influences the features that will be included. If the features do not support and guide a user in achieving their goals, they will not be happy to continue using the product and move out to another one.

- Budget - In addition to the features provided by the product, it is also important to get a sense of the prices in the market. If the product price is too high than other products already in the market, the users will be discouraged to move into the new product. Therefore, when designing a product, it is best to keep in mind the cost of implementing each features and supporting additional user expectations.
By identifying the necessary requirement for each aspect of the product, we will be able to come up with a comprehensive business architecture, which will set the tone of the product.


###### Driven by
Product owner, User, Sales, Dev team

###### Impacted personals
Stakeholders, customers, finances, market, partners, and suppliers

#### Strategic reasons
Implementing a business architecture can be beneficial is scenarios such as 
- Legacy modernization, 
- Globalization, 
- Regulatory compliance
- Determining new market and joint venture development

#### Key areas

Business Architecture is directly based on business strategy. It is the foundation for subsequent architectures, where it is detailed into various aspects and disciplines. To optimize its value, it is necessary to consider the business from a number of different perspectives. Combining each of those perspectives will help us to fully understand the organization as it exists today, and will give you a better understanding of how it needs to evolve into the future.

There are 4 key areas of business architecture.

##### Organization

The organization is the structure of the company that business architecture is being applied to. The organization is made up of business units that combine to represent all functions and departments within the company.

The organizational structure is a comprehensive view of the organizational elements to gain a perspective of the following components.

- Business Units - A business unit is a logical grouping of a set of software services. Typically, business units some of which are strategic business units are focused on geography or a portfolio of products/services, or a customer segment.
- Locations - As the name suggests location stands for geographic locations. The sites are vital to understanding the focus of each site, the types of customer segments the place serves, the products and services the area focuses on, and the capabilities that are vital will help in developing an understanding of the needs and strengths of each site.
- Departments - The departments are specialized groups units with specific domain skills that serve critical organizational functions.
- Roles - A role is a specific type of organizational function where an individual or a group of individuals work on particular responsibilities in pursuit of a business outcome.

##### Capabilities

A business capability is one of the key components of business architecture and is an expression of what a business does and can do. A business capability denotes “What” a business can do, whereas a business process outlines how a particular activity gets done. There are multiple capabilities, each of which is unique.

At an elemental level, a business capability is the encapsulation of the underlying functionality expressed abstractly.

A capability map can be used to generate visualizations of an organization based on the distinct business capabilities that make up what that organization does. This is generally viewed as the starting point for the business architect as it represents the most fundamental mapping of the business. However, there are a number of different aspects to each capability.

##### Value Streams

Value streams are one of the most important elements of business architecture. The value stream is depicted as an end-to-end collection of value-adding activities that create an overall result for a customer, stakeholder, or end user.

In modeling terms, those value-adding activities are represented by value stream stages, each of which creates and adds incremental stakeholder value from one stage to the next.

They provide an easily understood visualization of how an organization achieves value through a self-contained set of activities, and as such a map of a single value, the stream can easily contribute to an executive presentation or similar use case.

##### Information

If capabilities represent what an organization does, information is the fuel that drives knowledge and understanding of how a business operates. Information is built on the organization’s data, but for it to be considered information, that data also requires context the business capabilities, processes, decision making, and so on that leverage the data.

#### Quality attributes

##### Functional Suitability

This characteristic represents the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions. Businesses commonly operate under a functional structure because it groups people who have similar knowledge, and when used in a team environment, helps companies achieve their goals.

There are many advantages to employing a functional structure in your business and it allows you to implement ethical, enforceable standards regarding investments and the process within the organization.

BFSQ1: What are the constraints that need to be considered for functional suitability?

- [ ] Performance requirements
- [ ] Operating constraints
- [ ] Accuracy and precision of the requirements
- [ ] Portability
- [ ] Accessibility
- [ ] Security

BFSQ2: What is functional completeness and how can we achieve functional completeness in a business?

Functional completeness is the degree to which the set of functions covers all the specified tasks and user objectives in business. Consider the following steps to achieve functional completeness in your system.

- [ ] Identify what process needs to implemented
- [ ] Analyze the pain points
- [ ] Conduct a root cause analysis
- [ ] Design and evaluate
- [ ] Implement the new process
- [ ] Evaluate and quantify

BFSQ3: What are the quality measurements which can be used to maintain the quality of your product?

- [ ] Performance
- [ ] Features
- [ ] Reliability
- [ ] Conformance
- [ ] Durability
- [ ] Serviceability
- [ ] Perceived quality

##### Usability

Usability is a measure of how well a specific user in a specific context can use a product/design to achieve a defined goal effectively, efficiently, and satisfactorily. Usability depends on how well its features accommodate users’ needs and contexts. This is one of the keys to the user experience.

BUQ1: How can you increase the usability of your application?

- [ ] Reduction in loading time
- [ ] Optimize functionality
- [ ] Ensure consistency
- [ ] Readability
- [ ] Error prevention and recovery
- [ ] Help and documentation

BUQ2: Who are the actors that need to be considered to design and improve the usability of the software product?

- [ ] Users
- [ ] Database systems
- [ ] Clients and servers
- [ ] Cloud platforms
- [ ] Devices

##### Compatibility (Integrations, Extensibility)

Compatibility is the capacity for two or more systems to work together without having to be altered to do so. Compatible software applications use the same data formats. For example, if image processor applications are compatible, the user should be able to open their image files in either product.

BCQ1: How do you achieve compatibility?

Compatibility is responsible for a software product to test that it works well across different configurations, platforms, versions, and devices based on the user's requirements. It mainly focuses on delivering consistent and high-quality performance. Consider the following to identify compatibility.

- [ ] Infrastructure compatibility
- [ ] Operating system compatibility
- [ ] Software compatibility
- [ ] Data storage compatibility
- [ ] 3rd party integration compatibility
- [ ] Browser compatibility
- [ ] Devices compatibility

Integrations are responsible for bringing together multiple business systems to operate as a collaborative unit. When we consider business architecture this often refers to software or system integrations. The integration allows us to share information between connected systems and these integrations can vary in their functionality.

For example, a point of sale (POS) system can connect its customer data to its CRM, or integrations can be requesting information from a website/internal system and exchange their information by sending and receiving information between multiple systems in multiple locations.

BIQ1: How do you achieve the best use of software integrations?
Consider the below integration types while designing an integration.

- [ ] Star Integration - the process of developing connections within all software subsystems
- [ ] Horizontal Integration - method of establishing a system for communication such as message transmission and message monitoring
- [ ] Vertical Integration - fast and inexpensive option for software unification which develops functional entities for their software systems and vertically syncs them
- [ ] Common Data Format Integration - help businesses by providing data translation and promoting automation

BIQ2: What are the steps and best practices that can be followed in the software integration process?

- [ ] Collect definitions, requirements, and specifications
- [ ] Analyze the information
- [ ] Develop architecture and management plans
- [ ] Create the software integration system
- [ ] Begin using the integration system
- [ ] Evaluate system performance periodically

BIQ3: What are the factors need to be identied for software integrations?

- [ ] Data format
- [ ] Integration pattern
- [ ] Enhanced authentication and authorization
- [ ] Testing environment
- [ ] Audit data
- [ ] Continuous testing software
- [ ] Maintain situational awareness
- [ ] Security

Extensibility is a measure of the ability to extend a system and the level of effort required to implement the extension. Extensions can be through the addition of new functionality or through modification of existing functionality.

The attribute provides for enhancements without impairing existing system functions. For example, Integrated development environments (IDEs) are applications that facilitate the development of other applications and the supported extensions and plugins for the IDEs will allow the users to customize their environment based on their preferences.

BEQ1: Have you identified the extensibility consideration?

- [ ] Multitenancy
- [ ] Multi-Region
- [ ] Latency
- [ ] Consistency
- [ ] Internationalization
- [ ] Marketing and branding
- [ ] Geographical regions

##### Productization

Productization is the strategy of turning an internal business capability into a commercially viable product. It is an area that businesses are more focused on to scale their business, increase revenue, and reduce operational costs. It is the process of converting a core application/service you offer into a product you can implement or market across a larger user base. This makes possible the opportunity for exponential growth.

Productizing an application can lead to new external revenue streams and also the underlying architecture used to build the application can be served as a blueprint even if there are no common end users in which to market a new product and make an entry into the industry. Also, this provides a better framework to maintain the product behavior and the functionality more consistent by evolving the application over time.

BPQ1: What are the factors which need to be considered for productization?

- [ ] Branding
- [ ] Subscription
- [ ] Licence
- [ ] Standard
- [ ] Target market

BPQ2: What are the stages which can be considered for productization process?

- [ ] Independent Projects - Executed independently and differ in the budget, technology, and functionality
- [ ] Project Feature Reuse - Focus on feature reuse across projects
- [ ] Product Recognition - Shared features between projects and customer specific maintenance
- [ ] Product Platform - Generic product platform with handing customer requirement as a market requirement
- [ ] Standardizing Product Platform - Focus on generic product platform and requirements are derived based on the market trends
- [ ] Customizable Software Product - Standard product with customized layered par focusing on services
- [ ] Standard Software Product - Generic product for all customers and build for a specific market and completely configurable and structured for subscription based model

BPQ3: What are the challenges in the productization transformation process?

- [ ] Reuse documentation
- [ ] Delta analysis and effort estimation
- [ ] Version proliferation
- [ ] Architectural drift
- [ ] Over featuring
- [ ] Security risks

##### Provision for Known unknowns

Known Unknowns are assumptions that we haven’t or can’t validate. Most assumptions identified during business planning start in this category.

They can be classified into three types:

- Assumptions that can become known knowns now if they are validated
- Assumptions that can become known knowns at some point in the future, but not now
- Assumptions that can’t become known knowns because we can’t control them

Planning for unknown unknowns will reduce development time, and costs and ultimately allow for better product delivery on time and on budget. The known unknown must be identified, along with the event that will trigger the risk mitigation process. These types of risks are discussed early on during the project planning process and the project sponsor and stakeholders confirm and validate the risk, contingency, and response plan.

BKUQ1: What are the gray areas of the product?

- [ ] Technology stack
- [ ] User load
- [ ] market growth
- [ ] Traffic growth
- [ ] Traffic pattern
- [ ] Backup plans
- [ ] Security

##### Compliance

Compliance is an essential and important part of any business, irrespective of what sector the organization is operating in. It refers to following the internal policies or government laws and regulations that the organization is subjected to.

Implementing compliance procedures protects your company’s reputational risk and improves your company’s vision and value as well as prevents and detects violations of rules. Failure to follow those compliance requirements can put you at risk of financial fines or legal penalties.

BCQ1: What are the different types of compliance applicable for your product?

When we consider compliance, regardless of size or the type of the product, compliance is one area that no one should neglect. Each of the below compliance types will affect the product health to some degree and we must make sure to adhere to the latest standards and guidelines.

- [ ] Corporate Compliance - following all laws, regulations, standards, and ethical practices that apply to your organization and industry.
- [ ] Regulatory Compliance - following the local and international laws and regulations that are relevant to its operations
- [ ] Data compliance - ensuring that the product is correctly and legally collecting, organizing, storing, and managing data.
- [ ] Human resource compliance - all the business policies and procedures that ensure your organization is operating lawfully and with the welfare of your employees.
- [ ] Product health and safety compliance - ensure the product health and safety measurements are met.

BCQ2: What are the compliances and the standards to be followed in your product?

Compliance standards are sets of rules that an organization is required to follow. To prove that the organization follows the rules, it must have a set of written policies, and it must also create a set of procedures and processes that people must follow as they carry out the policies.

Consider using the below compliance standards for your product development as needed.

- [ ] Payment Card Industry Data Security Standard (PCI DSS)
- [ ] International Organization for Standardization (ISO) standards
- [ ] General Data Protection Regulation (GDPR)
- [ ] Federal Information Security Modernization Act (FISMA)
- [ ] Health Information Technology for Economic and Clinical Health Act (HITECH)
- [ ] Web content accessibility guidelines (WCAG)
- [ ] 508 compliance

### Product Architecture

#### Definition
Product Architecture represents how the functionality of your product is structured into modules and how these modules interact with each other.
In deriving the product architecture, in addition to the functional requirements you should also consider;
- Non-functional requirements of your product
- Technology specifics
- Integration Points
- How to manage data and data flows through different modules

###### Driven by
Development Team

###### Impacted personals
- Users
- Operational Team
- Development Team

#### Strategic reasons
Deriving a product architecture will assist you to properly consolidate the functional, non-functional, technical, and operational requirements of your product. This will also provide your Development Team and the Operational Team a design to abide by. Therefore, a proper product architecture provides guidance and compliance during the implementation phase as well as in the maintenance phase for the Development Team and the Operational Team.

#### Key areas

There are 4 key areas in product architecture

##### System Decompostion

During product architecture, the entire product is normally designed in such a way that it will be decomposed into different layers, components, services, etc.. based on an agreed decomposition strategy.

Systems can be decomposed based on execution context, deployment context, business or domain capabilities. Some software architecture styles such as Multi Tier, MicroServices, event/message driven, queue worker, batch proccesings are defined based on these strategies.

With these, the system can be planned, developed, deployed and maintained in a more independent and loosely coupled way.

##### Data

Every software products deal with data and mainly how and where data is to be stored and processed need to be analysed.

Relational, Documents, key values, graph and time series are some of the data storing patterns. And proper modeling the data storage and isolation techniques such as normalizations levels, logical partitioning and tenant based isolations are also available.

Proper data modeling and isolation leads to more cost friendly, performant and secure data management in the product.

##### Communication and interaction

The system components should communicate with each other effectively for smoother function of product as a whole. Normally the components are distributed and communicate over the Networks.

Communication styles such synchronous vs asynchronous and push vs pull based, communication protocol such as http, tcp, rpc, amqp, etc.. data formats like json, binary, soap etc.. and communication based technologies like Rest apis, graphql, web hooks and queue based messaging are some considerations.

The right component communication strategy are the main factors for expected responsiveness and scalability of the system.

##### Implementation technologies, tools and practices

Software products use technologies for implementation and then tools and practices for proper use of the technologies.

Right selection of Programming languages in all stack, database technologies, Design and communication patterns, libraries and frameworks, and development tools and plugins are required for efficient delivery, extendability, security and maintainability of the system.

##### Process and Best Practices

Software product architecture should follow a defined processes and best practices for success in the product.

Agility in Architecture and designs, frequent reviews, proper technical leaderships (architect role), innovation and continous improvements are key for more maintainable, extendable and sustainable a software product in long run.

#### Quality attributes

##### Performance

Performance in product refers to as ability of the product to run on any user activity or scale at any time with expected response time.

PPQ1: How do you achieve the performance by design?
During the product architecture design the performance of the system can be considered in following factors ( caching, support scale horizontally and automatic scale in and down, component proximity, data persistent design, workload isolation/decoupling, component to component )

- [ ] Reduce Initial loading time
- [ ] Lower Page response time
- [ ] Process Large number of items in less time (Ex. How many PDF needs to be generated based on the specific time)
- [ ] Load certain volume of data without any delay
- [ ] Keep the expected performance of the product even at high user load.
- [ ] Make sure long running processes or activities do not affect normal product functionality performance.
- [ ] Make sure minimal latency during product component to component communication

PPQ2: How do you achieve the performance by technology?
Technology selection can mainly effect the performance of the application in following areas.

- [ ] Reduce initial loding
- [ ] Lower Page response time
- [ ] Keep best performance for expected devices
- [ ] Provide lower processing time
- [ ] Serve high number of concurrent requests and parallel processing
- [ ] Identify technology limitations
- [ ] Identify for Performance and Load benchmarks

PPQ3: How do you achieve the performance by data strategy?
Proper data modelling and persistent technologies and strategies can influence the performance of the overall software product.

- [ ] Reduce data retrieval time
- [ ] Reduce data writing time
- [ ] Minimize processing in persistent store
- [ ] Keep the expected performance during high data volume

##### Security and Privacy

Security of the system gives assurance for confidentiality, integrity and availability of data and system it self from attacks, threats and abuses. And privacy mainly relates to the storing, processing and transferring of personally identifiable data

SPQ1: How do achive software product security by design
During the design phase of the system, it is required to focus on following areas for secure product

- [ ] Protect the Product from unauthorized access to system
- [ ] Protect the product from unathorized actions, viewing and changing system state
- [ ] Protect product component and services from attacks, unauthorized consumptions, threats and unavailabilities
- [ ] Protect secrets, sensitive and personally identifiable informations from unautohrized disclosure
- [ ] Make sure regional, organizational, domain specific or any other compliance or policy related restrictions can be enforced

SPQ2: How do achieve software product Security by technology?

- [ ] Protect the product against vulnerabilities from third parties libraries, dependencies and frameworks
- [ ] Protect product for any vulnerabilities and breaches in more proactive and automated way.
- [ ] Protect against sensitive, secret data and personally identifiable data misuse and disclosure
- [ ] Any security or privacy vulnerabilities can be identified and validated in a reactive way.

SPQ3: How do achieve software product security and privacy by data strategy?

- [ ] Protect the product from unautorized access and change to the data.
- [ ] Protect from making data unavaiable
- [ ] Protect from disclosing sensitive and personally identifiable data.

##### Reliability

Reliability refers to as ability of the software product to function without any issues under agreed condion and period. With the reliability software product architecture need to make sure no functional bugs, down times, performance and security issues.

RPQ1 : How do achieve software product reliability

- [ ] Minimize the entire system or functionality failures
- [ ] Reduce the impact to product users when there is a failure.
- [ ] Increase the level of tolerance during a service or component failure.
- [ ] Make the system or a service can recover to its normal condition, when there is a failure ( Reduce Recovery time objective)
- [ ] Make less impact to the data looses during a failure or unavaiability ( Reduce Point Objective)

##### Functional stability (bug-free)

Functional stability is defined as Software should continue to function on different environment and conditions without any failures and with expected quality.

RPQ1 : How do achieve software product Functional .

- [ ] Make sure system can run without any failures in varying user loads and behaviours
- [ ] Make sure system is functional in different user platforms, devices and networks.
- [ ] Make sure system perform as expected in different data loads

##### Maintainability

Effectiveness of a good product architecture is mainy measured by how easily system can be changed for future requirements cost effective way over the product’s life time.

- How well the software product can be modified for continuous changes- Every software product has to evolve over the time after the live roll out and even before it. These changes will come as an improvements and bug fixes based on business, technology and environment changes.

- How well the product is test automated - as system functionality is more covered with test automation, it is more easier for changes. Mainly test can be automated using unit, integration and UI testing (Test Pyramid).Further some automated code, security, load and performance quality check will be helpful

Design for testability, test first approach to the implementation ( Test driven development), design patterns, more control over resubaility of the system, proper coding practices like SOLID lead to the more maintaiable software product.

### Infrastructure Architecture

#### Definition
The process of ensuring that technological systems and infrastructure are developed to encourage business requirements is known as infrastructure architecture. Well-documented, integrated infrastructure models with the appropriate amount of information and abstraction for various stakeholders are a crucial result of a structured approach to infrastructure architecture. Release and deployment automation, security, validation, and release management are the major areas of attention for infrastructure architecture.

In summary, there are essentially 3 different types of infrastructure architectures that can be used with the infrastructure platform to support the product:
1. On-premise - A single physical server with an operating system, platform, and application is the standard server design.
2. Cloud - Infrastructure for virtualized servers that distributes virtual machines across many real servers 
3. Hybrid - Multiple containers distributed across the application platform in a containerized server architecture

###### Driven by
When it comes to infrastructure architecture, it depends on how critical the application architecture is. So generally, the architect and development team initiate the product's architecture. And the ownership is going to the Ops team.
Since we are focusing on the product under the infrastructure architecture we are mainly focussing on
  1. On-premise infrastructure architecture driven by DevOps, support engineers, network engineers
  2. Cloud infrastructure architecture driven by Solution architect, dev team
  3. Cost and pricing

###### Impacted personals
Dev and Ops teams, PO, CTO(product)
Product CTO - whether to go on on-premise, cloud and cost

#### Strategic reasons
This architecture pillar is a main factor in deciding how well your product will serve the purpose in the production environment. The architect should be concerned on this in parallel to the Business architecture and Product architecture stages as well.
Most common mistake that occurs within software projects is identifying the infrastructure needs at the very end, which could result in waste of resources, cost, and inability to meet the full potential of the application performance.

#### Key areas
Infrastructure architecture depicts the mapping of a logical architecture to a physical resource environment.
There are 5 key areas to pay attention.

##### Sizing the planned deployment infrastructure needs
Infrastructure architecture needs to determine the physical resources necessary to meet the system requirement. Architect should pay attention to derive a design that implies 
best use of resources while adhering to the business constraints and non functional requirements. Successful sizing of an infrastructure requires past design experience, 
knowledge of systems architecture, domain knowledge and close attention to the NFRs.

##### Optimize resources & Know your Compromises
Due to various factors such as time and cost, we may have to be flexible in our architectural decisions, but yet meeting the standards as much as possible.
Unfortunately the Infrastructure architectural phase could possibly be the most prominent stage that this could happen. Resource optimization often tied up with compromises 
which is inevitable. But your infrastructure architecture has to be justified against these decisions. Further those points has 
to be clearly documented and maintained for future references as well.

##### Risk Management
As we know, most of the time during architecture phase, requirements might not reflect the true picture, which is why we keep some provisions for such unknowns.
For an example if projections from business requirements underestimates the actual production usage of the system, your decisions 
might run the risk of an incapable infrastructure architecture that cannot meet the expectations. To avoid that the infrastructure architecture has to be discussed and evolve 
through out the important decisions made during other architecture stages too.

##### Deployment strategies (without being limited to cloud environments) (Release management strategies??)
In order to guarantee an optimized lead time into production, it is necessary to have a properly identified deployment strategy based on the business and product architecture constraints.
Some of them are:
- Recreate Deployment
- Blue/Green Deployment
- Canary Deployment

##### Deployment Architecture Design
This is a crucial artifact during this phase, which should be shared and discussed across the main stake holders of the system. And this
has to be prototyped along with the development phase of the product, so that the developers will also tend to make the right technical decisions with proper visualizations
of how their components may behave in production. 

#### Quality attributes

##### Cost optimization

###### Overview

###### Questions / Guidance

##### Monitoring

###### Overview

###### Questions / Guidance

##### Security

###### Overview

###### Questions / Guidance

##### Governance (regulations related)

###### Overview

###### Questions / Guidance

##### Availability

###### Overview

###### Questions / Guidance

##### Maintainability

###### Overview

###### Questions / Guidance

### Production Architecture

#### Definition
- An architecture view that helps to run the system smoothly and cater system maintenance when the product moves to production.
- It also supports end users’ day-to-day usage without any other external impact.
- This architecture view will act as guidance on product troubleshooting and cost optimization where it helps to extend or add necessary improvements to the product.
Ex:
    - Adding dashboard
    - Usage analytics system support
    - Issues monitoring system
    - Real time notifications support to inform administrators if any issues are encountered in the production.

#### Why
- Implementing best strategies to keep the system functioning normally, unimpeded by either internal or external exceptions.
    - Ex
      - Adding resources utilisation tracking to avoid extra cost charges.
      - Logs tracking system for system troubleshooting. 
- Being able to react quickly in an emergency situation so that developers may make any necessary technological changes in a short amount of time
  - Ex
    - system’s continuous monitoring facility will inform critical issues through real time notifications to avoid extra charges.
##### Driven by
- DevOps Team  
- Site Reliability Engineers Team
##### Impacted personals
- DevOps Team
- Intrusion Prevention Systems
- Intrusion Detection Systems
- Product owners
- Service Desk 
#### Key areas

#### Quality attributes

##### Observability (Incident response, Monitoring, Testing)
- When a product is in production, being able to see its internal status from outside is an utmost important quality of product. As an example when a system is in production ability to see that its usage of RAM is increasing and currently it is at 80% usage will give support staff a heads up for system failure in the future.

###### Questions / Guidance

POQ1 : When the Product is up and running, you may encounter different types of errors or intrusions. What kind of mechanisms should be used to report incidents?

POA1 : Nowadays operational staff may not be looking at dashboards, they need a way to be notified automatically whenever an incident happens, Thus we have to multiple ways of incident reporting based on criticality, and whom should get notified also should be decided appropriately. Use one or more following approaches to achieve this.

- [ ] Establishing an incident reporting system
- [ ] Implementing Logging
- [ ] Using System Monitoring


POQ2 : How do you classify your incidents and categorize them?

POA2 : Following are some of the known incident types widely used. Choose which types are relevent for you.

- [ ] Bugs
- [ ] Performance 
- [ ] Downtime
- [ ] Hacking attempts
- [ ] Resource utilization

POQ3 : What kind of information should we be able to monitor in a system?

POA3 : There are many parameters that can be monitored in a system. These could range from user and activity based matrices to resource consumtions. Select the matrices that you target to implement in your system.

- [ ] No of users active in the system and from what regions
- [ ] What are the user activities mostly done
- [ ] Resource utilization against time
- [ ] Suspicious users 
- [ ] Blocked user attempts


POQ4 : What should be considered when testing a system in production?

POA4 : Since this is about the production system. Anything that has a negative impact on the user should be avoided. Following list contains some of the main points to consider.

- [ ] Downtime should be adhering to the SLA agreements
- [ ] Should not negatively impact user experience (ex -performance issues)
- [ ] Test data should not persist in the production database.


POQ5 : Considering all the above points since we have multiple ways of knowing the status of the product, what should be considered when we log incidents?

POA5 : Incident report should be easy to understand and adhere to the governance. Following below points will help you to achieve this.

- [ ] Structure
- [ ] Information
- [ ] Compliance
- [ ] Performance
- [ ] classifications


When designing the system we should have these in mind to have access points to support the observability of the product. Not only that but When configuring the server also we should give attention to these.

##### Cost Optimization

- Cost optimization of a product applies on multiple levels and thereby it implies reducing the total cost of ownership.

###### Questions / Guidance

PCOQ1 : When a product is in production, What are the things that impact production cost?

PCOA1 : Following points indicate the main cost factors of a production system.

- [ ] Processing Power
- [ ] Disk Space
- [ ] Network usage


PCOQ2 : How can we reduce the cost of a product in production?

PCOA2 : There are many ways we can reduce the cost of production. Starting from the business architecture all architectural points will have an impact on this. Following pointers will help you to decide whats best suited for your product while optimising the cost.

- [ ] Way of scaling
- [ ] Regions
- [ ] Having server utilization monitoring
- [ ] Shared resourcing
- [ ] Backup retention
- [ ] Data retention and moving into tiers.
- [ ] Proper network configurations
- [ ] Transfer data in proper formats.
- [ ] Caching



##### Troubleshooting

- When there is a production issue, it's highly critical that we have the ability to respond and resolve it in an efficient manner.

###### Questions / Guidance

PTQ1 : What do we need to respond quickly to a production issue?

PTA1 : Production system should have followings to respond quickly to a production issue.

- [ ] Proper logs
- [ ] Way to reproduce the issue
- [ ] Way to apply the patch


PTQ2 : What do you mean by proper logs?

PTA2 : In order to troubleshoot a production issue and find its course logs will be the first place someone can check. Following attributes in a log will help support staff.

- [ ] Proper Structure
- [ ] Timestamp
- [ ] Stack trace
- [ ] Log Classification
- [ ] User action flow


PTQ3 : What can be improper information in a log?

PTA3 : Mainly with GDPR personally identified information should not be logged.

PTQ4 : What should we think when reproducing an issue in production?

PTA4 : Since we are talking about a production system we should be carefull about negatively impacting user experience. Hence, paying attention to following items will help. 

- [ ] Should not interfere with actual user actions
- [ ] Test data should not persist in the production database

PTQ5 : How fast should we resolve a production issue?

PTA5 : It depends on the SLA s we have in place with the system with respective to the priority of the issue.


##### Governance

- Governance is the ability of the system to adhere and comply to regulations defined by legal and industry standards.

###### Questions / Guidance

PGQ1 : What are the type of compliance we should think about in production.

PGA1 : There are many compliances that software development has to adhere and following are few examples that you should consider based on the business. 

- [ ] GDPR
- [ ] Performance Compliance
- [ ] Reliability Compliance

PGQ2 : Other than above compliances can there be separate agreements that we have to adhere in production?

PGA2 : Yes based on the business requirement there can be deferent types of agreements that we have to adhere in production. Some of the common type of agreements are listed here.

- [ ] SLA
- [ ] Change Management Agreement
- [ ] Risk Management
- [ ] Infrastructure Agreements


## Quality Attributes Definitions

### Functional Suitability (ISO/ISE 25010, refer)

(This characteristic represents the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions)

### Usability

(Quality of the user’s experience when interacting with Product)

### Extensibility | Agility

(The design needs to be agile enough to incorporate future growth, i.e. Provision for known unknowns)

### Compatibility (Integrations)

(Ability to seamlessly integrate with 3rd party systems.)

### Productization

(Ability to convert a customer specific to a general product. (white labeling))

### Performance

(shows the response of the system to performing certain actions for a certain period)

### Efficiency

(It is measured in terms of time required to complete any task given to the system.)

### Security

(Security is responsible for the ability of the system to reduce the likelihood of malicious or accidental actions as well as the possibility of theft or loss of information. This can be measure at many levels e.g. Product, Infrastructure.)

### Privacy

(Ability of the system to cater to Data Subjects, Controllers and Authorities requirements)

### Reliability

(Ability of the system to continue to operate under defined conditions (Resilience, fault tolerance, availability))

### Functional stability

(The ability of the system to be able to run smoothly over an extended period of time. Ensure the functionality of the system able to recover in the most efficient way.)

### Maintainability

(The level of efficiency at with which a system can be modified)

### Cost optimization

(This refers to the optimization of cost at various levels and thereby reducing the Total Cost of Ownership)

### Governance (regulations related, compliance)

(The ability of the system to adhere and comply to regulations defined by legal and industry standards)

### Availability

(The degree at which the system is able to serve its intended purpose)

### Observability (Incident response, Monitoring, Testing)

(Ability to record and log the internal state of the system and infrastructure and respond to incidents in an optimal manner.)

### Troubleshooting (Supportability?)

(The ability to respond and resolve incidents in an efficient manner. Ability of the system to provide information helpful for identifying and resolving issues when it fails (1st line of support to hotfix))
