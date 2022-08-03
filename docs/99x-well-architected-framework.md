---
id: 99x-well-architected-framework
title: 99x Well Architected Framework
---

## Abstract and Introduction
### Abstract

### Introduction
This is a framework for building market-winning products. This is going to cover 99X architecture process and how the 99X covers the architectural pillars when building a product.

The business architecture is more prominent before code write. Product architecture is more prominent while the product is in development. Infrastructure architecture is more prominent after code freeze until production. Production architecture is more prominent when the Product is in production.

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

During product architecture, the entire product is normally designed such a way will be decomposed into different layers, componets, services, etc.. based on an agreed decomposition strategy. Systems can be decomposed based execution context, deployment context, business or domain capabilities. Some software architecture styles such as Multi Tier, Micro Services, Event driven and Web queue worker are defined based on these strategies. With these, the system can be planned, developed, deployed and maintained more independent and loosely coupled way.

##### Data
Every software products deal with data and mainly how and where  data is to be stored and processed need to be analysed. Relational, Documents, key values, graph and time series are some of the data storing patterns. And proper modeling the data storage and isolation tequniques such as normalizations levels, logical partitioning and tenant based isolations are also available. Proper data modeling and isolation leads to more cost frieldy, performant and secure data management in the product.

  
#### Quality attributes
##### Performance
 ###### Overview
 ###### Questions / Guidance
			
##### Efficiency
 ###### Overview
 ###### Questions / Guidance
			
##### Security
 ###### Overview
 ###### Questions / Guidance
			
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




