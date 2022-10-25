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
  
#### Quality attributes
##### Functional Suitability
###### Overview
###### Questions / Guidance
				
##### Usability 
###### Overview
###### Questions / Guidance
			
##### Compatibility (Integrations, Extensibility) 
###### Overview
###### Questions / Guidance
			
##### Productization 
###### Overview
###### Questions / Guidance
			
##### Provision for Known unknowns
###### Overview
###### Questions / Guidance

### Product Architecture 
#### Definition
###### Driven by
###### Impacted personals
#### Strategic reasons
  
#### Key areas

There are 4 key areas in product architecture
##### System Decompostion

During product architecture, the entire product is normally designed in such a way that it will be decomposed into different layers, components, services, etc.. based on an agreed decomposition strategy.

Systems can be decomposed based on execution context, deployment context, business or domain capabilities. Some software architecture styles such as Multi Tier, MicroServices, event/message driven, queue worker,  batch proccesings are defined based on these strategies. 

With these, the system can be planned, developed, deployed and maintained in a more independent and loosely coupled way.


##### Data

Every software products deal with data and mainly how and where  data is to be stored and processed need to be analysed.

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

			
##### Privacy
 ###### Overview
 ###### Questions / Guidance
			
##### Reliability (Resilience, fault tolerance, availability)
 ###### Overview
 ###### Questions / Guidance
			
##### Functional stability (bug-free)
 ###### Overview
 ###### Questions / Guidance
			
##### Maintainability
 ###### Overview
 ###### Questions / Guidance

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




