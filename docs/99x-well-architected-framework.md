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

###### Driven by

###### Impacted personals

#### Strategic reasons

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

What are the gray areas of the product?

- [ ] Technology stack
- [ ] User load
- [ ] market growth
- [ ] Traffic growth
- [ ] Traffic pattern
- [ ] Backup plans
- [ ] Security

### Product Architecture

#### Definition

###### Driven by

###### Impacted personals

#### Strategic reasons

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

###### Driven by

###### Impacted personals

#### Strategic reasons

#### Key areas

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

##### Driven by

##### Impacted personals

#### Strategic reasons

#### Key areas

#### Quality attributes

##### Observability (Incident response, Monitoring, Testing)

###### Overview

###### Questions / Guidance

##### Cost Optimization

###### Overview

###### Questions / Guidance

##### Troubleshooting

###### Overview

###### Questions / Guidance

##### Governance

###### Overview

###### Questions / Guidance

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
