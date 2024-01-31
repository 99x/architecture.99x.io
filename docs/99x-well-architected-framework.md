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

 

 “Why are we building this product?” 

“What is the problem that we are trying to solve by building this product?” 

 

#### Definition 

When implementing a product, it is important to understand “why” we are building the product and “what is the problem” we are trying to solve. This should also include how the product will be perceived by the users and the market in general. The business architecture of a product will provide answers to these questions. When defining the business architecture, we need to analyze the product from different angles. 

 

#### Key aspects to analyze about the suggested product 

The following aspects have been identified to aid in a much more effective business architecture analysis: 

 

- User experience 

It is vital that we understand the users who will be using the product. Identifying the different personas of users will help the stakeholders identify the features that the product should support as well as how these features should be presented to the users. A user persona will analyze the demographics of a typical user and determine the purpose for which the user will be using the product. It is also important to identify the motivation the user chooses to use this product and what will get them to continue to use the product. 

  

- Technology sophistication 

When using a product, a user has certain expectations that the product will provide implicitly. For example, in a banking application, they would expect it to be accurate (high reliability) and available at any time the user needs it (high availability). It is important that we identify these expectations and regulations early on, along with the features of the product. These facts will impact the infrastructure architecture, for example, whether the product will be hosted in the cloud or on-premises. 

  

- Regulations and Compliance  

In every domain, there can be regulations and compliance that a product must adhere to. For example, if a product is planned to be used in Europe and contains personally identifiable information (PII), then the product should be GDPR-compliant. Also, if the product is in the healthcare domain, there are other regulations and compliances that should be adhered to. These will impact how the features are delivered to end users. 

  

- Market sense  

A product either tries to solve a problem or will provide a solution to a requirement that the users themselves are not aware of. In the case of trying to solve a problem that the users are already aware of, it is best to analyze what other products are already available on the market. It is important to identify, in addition to the common features, the pain points of the users who are already using an existing product and address them. This will make the product stand out from the other existing products. 

  

- Customer success  

Once a product is released to the market, it should be able to solve the problems that the users have and guide them to achieve their goal. Customer success is an important factor in defining the business architecture since it influences the features that will be included. If the features do not support and guide a user in achieving their goals, they will not be happy to continue using the product and move on to another one. 

  

- Budget 

In addition to the features provided by the product, it is also important to get a sense of the prices in the market. If the product price is too high compared to other products already on the market, users will be discouraged from moving into the new product. Therefore, when designing a product, it is best to keep in mind the cost of implementing each feature and supporting additional user expectations. 

 

By identifying the necessary requirements for each aspect of the product, we will be able to come up with a comprehensive business architecture, which will set the tone of the product. 

  

#### Driven by 

Implementation of a business architecture is conducted with the involvement of the following actors: 

- Product owner 

- User 

- Sales 

- Dev team 

  

#### Impacted personals 

The successful implementation of a business architecture for a product, impacts following actors: 

-  Stakeholders 

- customers 

- finances 

- market 

- partners 

- suppliers 

  

#### Strategic reasons to implement a Business Architecture 

We have identified below the key benefits of having a business architecture for a particular business product. 

- Legacy modernization 

- Globalization 

- Regulatory compliance 

- Determining new market and joint venture development 

  

#### Key areas to focus when implementing a business architecture 

Business architecture is directly based on business strategy. It is the foundation for subsequent architectures, where it is detailed into various aspects and disciplines. To optimize its value, it is necessary to consider the business from a number of different perspectives. Combining each of those perspectives will help us to fully understand the organization as it exists today and will give you a better understanding of how it needs to evolve into the future. 

We have identified four key areas of business architecture that need to be carefully evaluated. 

##### Organization 

The organization is the structure of the company that business architecture is being applied to. The organization is made up of business units that combine to represent all functions and departments within the company. 

The organizational structure is a comprehensive view of the organizational elements to gain a perspective on the following components: 

- Business Units - A business unit is a logical grouping of a set of software services. Typically, business units, some of which are strategic business units, are focused on geography, a portfolio of products and services, or a customer segment. 

- Locations - As the name suggests, location stands for geographic locations. The sites are vital to understanding the focus of each site, the types of customer segments the place serves, the products and services the area focuses on, and the capabilities that are vital to developing an understanding of the needs and strengths of each site. 

- Departments - The departments are specialized groups of units with specific domain skills that serve critical organizational functions. 

- Roles - A role is a specific type of organizational function where an individual or a group of individuals work on responsibilities in pursuit of a business outcome. 

  

##### Capabilities 

A business capability is one of the key components of business architecture and is an expression of what a business does and can do. A business capability denotes “what” a business can do, whereas a business process outlines how a particular activity gets done. There are multiple capabilities, each of which is unique. 

At an elemental level, a business capability is the encapsulation of the underlying functionality expressed abstractly. 

A capability map can be used to generate visualizations of an organization based on the distinct business capabilities that make up what that organization does. This is generally viewed as the starting point for the business architect, as it represents the most fundamental mapping of the business. However, there are a number of different aspects to each capability. 

 

##### Value Streams 

Value streams are one of the most important elements of business architecture. The value stream is depicted as an end-to-end collection of value-adding activities that create an overall result for a customer, stakeholder, or end user. 

In modeling terms, those value-adding activities are represented by value stream stages, each of which creates and adds incremental stakeholder value from one stage to the next. 

They provide an easily understood visualization of how an organization achieves value through a self-contained set of activities, and as a map of a single value, the stream can easily contribute to an executive presentation or similar use case. 

  

##### Information 

If capabilities represent what an organization does, information is the fuel that drives knowledge and understanding of how a business operates. Information is built on the organization’s data, but for it to be considered information, that data also requires context-the business capabilities, processes, decision-making, and so on-that leverage the data. 

  

#### Quality attributes to consider when implementing a business architecture 

 

##### Functional Suitability of a business 

This characteristic represents the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions. Businesses commonly operate under a functional structure because it groups people who have similar knowledge and, when used in a team environment, helps companies achieve their goals. 

There are many advantages to employing a functional structure in your business, and it allows you to implement ethical, enforceable standards regarding investments and the process within the organization. 

###### Functional completeness in a business 

Functional completeness is the degree to which the set of functions covers all the specified tasks and user objectives in business. Consider the following steps to achieve functional completeness in your system: 

###### Steps to achieve functional completeness in a business 

- Identify what process needs to be implemented 

- Analyze the pain points  

- Conduct a root cause analysis  

- Design and evaluate  

- Implement the new process  

- Evaluate and quantify 

  

##### Usability of the product in the business 

Usability is one of the keys to the user experience. It is a measure of how well a specific user in a specific context can use a product or design to achieve a defined goal effectively, efficiently, and satisfactorily. Usability depends on how well its features accommodate users’ needs and contexts. 

 

 ###### Approaches to increase usability of the application 

- Reduction in loading time  

- Optimize functionality  

- Ensure consistency  

- Readability  

- Error prevention and recovery  

- Help and documentation 

 

###### Key actors to consider in designing and improving the usability of the product 

- Users  

- Database systems  

- Clients and servers  

- Cloud platforms  

- Devices 

  

##### Compatibility (Integrations, Extensibility) of the product 

Compatibility is the capacity for two or more systems to work together without having to be altered to do so. Compatible software applications use the same data formats. For example, if image processor applications are compatible, the user should be able to open their image files in either product. 

Compatibility is responsible for testing a software product to ensure that it works well across different configurations, platforms, versions, and devices based on the user's requirements. It mainly focuses on delivering consistent and high-quality performance. 

 

###### Methods to identify compatibility of a product 

- Infrastructure compatibility  

- Operating system compatibility  

- Software compatibility  

- Data storage compatibility  

- 3rd party integration compatibility  

- Browser compatibility  

- Devices compatibility 

 

When compatibility is evaluated and designed in the business architecture phase, there are two main aspects we must focus on.  

Those are, 

-Integrations 

-Extensibility 

 

###### Integrations in a software product 

Integrations are responsible for bringing together multiple business systems to operate as a collaborative unit. When we consider business architecture, this often refers to software or system integrations. Integration allows us to share information between connected systems, and these integrations can vary in their functionality.  

For example, a point of sale (POS) system can connect its customer data to its CRM, or integrations can request information from a website or internal system and exchange that information by sending and receiving information between multiple systems in multiple locations. 

###### Integration types to focus in achieving the compatibility of a software product 

We can evaluate and utilize the following compatibility type for the software solution for the business while designing the software architecture: 

- Star Integration - the process of developing connections within all software subsystems  

- Horizontal Integration - method of establishing a system for communication such as message transmission and message monitoring  

- Vertical Integration - fast and inexpensive option for software unification that develops functional entities for their software systems and vertically syncs them  

- Common Data Format Integration - help businesses by providing data translation and promoting automation 

 

###### Steps and best practices to follow in a software integration process 

- Collect definitions, requirements, and specifications  

- Analyze the information  

- Develop architecture and management plans  

- Create the software integration system  

- Begin using the integration system  

- Evaluate system performance periodically 

 

###### Key factors to identify in a software integration 

- Data format 

- Integration pattern 

- Enhanced authentication and authorization 

- Testing environment 

- Audit data 

- Continuous testing software 

- Maintain situational awareness 

- Security 

 

###### Extensibility of a software product   

Extensibility is a measure of the ability to extend a system and the level of effort required to implement the extension. Extensions can be made through the addition of new functionality or the modification of existing functionality. 

The attribute provides for enhancements without impairing existing system functions. For example, integrated development environments (IDEs) are applications that facilitate the development of other applications, and the supported extensions and plugins for the IDEs will allow the users to customize their environment based on their preferences. 

 ###### Extensibility considerations for software product compatibility 

- Multitenancy 

- Multi-Region 

- Latency 

- Consistency 

- Internationalization 

- Marketing and branding 

- Geographical regions 

  

##### Productization 

Productization is the strategy of turning an internal business capability into a commercially viable product. It is an area that businesses are more focused on to scale their business, increase revenue, and reduce operational costs. It is the process of converting a core application or service you offer into a product you can implement or market to a larger user base. This makes possible the opportunity for exponential growth. 

Productizing an application can lead to new external revenue streams, and the underlying architecture used to build the application can also serve as a blueprint, even if there are no common end users in which to market a new product and make an entry into the industry. Also, this provides a better framework to maintain product behavior and functionality consistent by evolving the application over time. 

 ###### Key factors in productization 

- Branding 

- Subscription 

- License 

- Standard 

- Target market 

 

 ###### Stages in a productization process 

- Independent Projects - Executed independently and differ in the budget, technology, and functionality  

- Project Feature Reuse - Focus on feature reuse across projects  

- Product Recognition - Shared features between projects and customer-specific maintenance  

- Product Platform - Generic product platform with customer requirements as a market requirement  

- Standardizing Product Platform - Focus on generic product platform, and requirements are derived based on market trends  

- Customizable Software Product - Standard product with customized layers par focusing on services  

- Standard Software Product - Generic product for all customers, built for a specific market, completely configurable, structured for a subscription-based model 

 

###### Challenges in the productization transformation process 

   

- Reuse documentation  

- Delta analysis and effort estimation  

- Version proliferation  

- Architectural drift  

- Over featuring  

- Security risks 

 

##### Provision for Known unknowns in a business product 

Known unknowns are assumptions that we haven’t or can’t validate. Most assumptions identified during business planning start in this category. 

  

They can be classified into three types: 

- Assumptions that can become known knowns now if they are validated 

- Assumptions that can become known knowns at some point in the future, but not now 

- Assumptions that can’t become known knowns because we can’t control them 

  

Planning for known unknowns will reduce development time and costs and ultimately allow for better product delivery on time and on budget. The known unknown must be identified, along with the event that will trigger the risk mitigation process. These types of risks are discussed early on during the project planning process, and the project sponsor and stakeholders confirm and validate the risk, contingency, and response plan. 

 

 ###### Factors to consider as grey areas in the product 

- Technology stack  

- User load  

- market growth  

- Traffic growth  

- Traffic pattern  

- Backup plans  

- Security  

 

##### Compliance of a business 

Compliance is an essential and important part of any business, irrespective of what sector the organization is operating in. It refers to following the internal policies or government laws and regulations that the organization is subjected to. 

Implementing compliance procedures protects your company’s reputational risk, improves your company’s vision and value, prevents and detects violations of rules. Failure to follow those compliance requirements can put you at risk of financial fines or legal penalties. 

  

###### Different types of compliance applicable for your product 

When we consider compliance, regardless of size or the type of product, compliance is one area that no one should neglect. Each of the below compliance types will affect the product's health to some degree,  and we must make sure to adhere to the latest standards and guidelines. 

  

- Corporate Compliance - following all laws, regulations, standards, and ethical practices that apply to your organization and industry. 

- Regulatory Compliance - following the local and international laws and regulations that are relevant to its operations 

- Data compliance - ensuring that the product is correct and legally collecting, organizing, storing, and managing data. 

- Human resource compliance - all the business policies and procedures that ensure your organization is operating lawfully and with the welfare of your employees. 

- Product health and safety compliance - ensure the product’s health and safety measurements are met. 

  

###### Compliances and the standards to be followed in your product 

Compliance standards are sets of rules that an organization is required to follow. To prove that the organization follows the rules, it must have a set of written policies, and it must also create a set of procedures and processes that people must follow as they carry out the policies. 

Consider using the compliance standards below for your product development as needed. 

- Payment Card Industry Data Security Standard (PCI DSS) 

- International Organization for Standardization (ISO) standards 

- General Data Protection Regulation (GDPR) 

- Federal Information Security Modernization Act (FISMA) 

- Health Information Technology for Economic and Clinical Health Act (HITECH) 

- Web content accessibility guidelines (WCAG) 

- 508 compliance 

 

#### Quality measurements for a business 

We should focus on how to maintain the quality of the business, and we have identified the following measurements as key points to evaluate the quality of the product. 

- Performance 

- Features 

- Reliability 

- Conformance 

- Durability 

- Serviceability 

- Perceived quality 

#### Conclusion 

In concluding notes, implementing a business architecture for a product as the initial step, we are already confident in proceeding to our next step, which is product architecture with all the must-know information.  

We propose answering the following sample questions, which will aid in identifying and implementing a successful business architecture that will lead to a good product. 

 

BAQ1: What are the constraints that need to be considered for functional suitability? 

- [ ] Performance requirements 

- [ ] Functional Requirements 

- [ ] Scalability 

- [ ] Operating constraints 

- [ ] Accuracy and precision of the requirements 

- [ ] Portability 

- [ ] Accessibility 

- [ ] Security 

- [ ] Data integrity & accuracy 

 

BAQ2: How can we achieve functional completeness in a business? 

- [ ] Identify what process needs to implement 

- [ ] Analyze the pain points 

- [ ] Conduct a root cause analysis 

- [ ] Design and evaluate 

- [ ] Implement the new process 

- [ ] Evaluate and quantify 

- [ ] Relevant workforce with skills 

- [ ] Customer-Centric Approach 

- [ ] Continuous Improvement 

 

 

BAQ3: What are the quality measurements which can be used to maintain the quality of your product? 

- [ ] Performance 

- [ ] Features 

- [ ] Reliability 

- [ ] Conformance 

- [ ] Durability 

- [ ] Serviceability 

- [ ] Perceived quality 

- [ ] Security 

 

BAQ4: How can you increase the usability of your application?  

- [ ] Reduction in loading time  

- [ ] Optimize functionality  

- [ ] Ensure consistency  

- [ ] Readability  

- [ ] Error prevention and recovery  

- [ ] Help and documentation 

- [ ] User centered design 

- [ ] Define clear objectives 

- [ ] Consistent & responsive design  

- [ ] Understand user needs, goals and behaviors 

 

BAQ5: Who are the actors that need to be considered to design and improve the usability of the software product? 

- [ ] Users 

- [ ] Database systems 

- [ ] Clients and servers 

- [ ] Cloud platforms 

- [ ] Devices 

- [ ] dev/design/testers, po 

 

BAQ6: How do you achieve compatibility?  

- [ ] Infrastructure compatibility  

- [ ] Operating system compatibility  

- [ ] Software compatibility  

- [ ] Data storage compatibility  

- [ ] 3rd party integration compatibility  

- [ ] Browser compatibility  

- [ ] Devices compatibility  

   

BAQ7: How do you achieve the best use of software integrations?  

Consider the below integration types while designing an integration.  

- [ ] Star Integration - the process of developing connections within all software subsystems  

- [ ] Horizontal Integration - method of establishing a system for communication such as message transmission and message monitoring  

- [ ] Vertical Integration - fast and inexpensive option for software unification which develops functional entities for their software systems and vertically syncs them  

- [ ] Common Data Format Integration - help businesses by providing data translation and promoting automation  

   

BAQ8: What are the steps and best practices that can be followed in the software integration process?  

- [ ] Collect definitions, requirements, and specifications  

- [ ] Identify Integration Points 

- [ ] Select Integration Tools and Platforms: 

- [ ] Analyze the information  

- [ ] Develop architecture and management plans  

- [ ] Create the software integration system  

- [ ] Begin using the integration system  

- [ ] Evaluate system performance periodically  

- [ ] Testing 

- [ ] User Training 



   

BAQ9: What are the factors that need to be identified for software integrations?  

- [ ] Business Objectives 

- [ ] Integration Scope 

- [ ] Data format  

- [ ] Integration pattern  

- [ ] Enhanced authentication and authorization  

- [ ] Testing environment  

- [ ] Audit data  

- [ ] Continuous testing software  

- [ ] Maintain situational awareness  

- [ ] Security 

- [ ] User Workflows 

- [ ] Performance Expectations 

- [ ] Cost and Resource Estimates 

- [ ] Monitoring and Maintenance 

 

 BAQ10: Have you identified the extensibility consideration?  

- [ ] Multitenancy  

- [ ] Multi-Region  

- [ ] Latency  

- [ ] Consistency  

- [ ] Internationalization  

- [ ] Marketing and branding  

- [ ] Geographical regions 

 

BAQ11: What are the factors which need to be considered for productization?  

- [ ] Branding  

- [ ] Subscription  

- [ ] License  

- [ ] Standard  

- [ ] Target market 

- [ ] Adaptability to Market Changes 

- [ ] Competitive Analysis 

- [ ] Update and Maintenance Plan 

- [ ] Legal Considerations 

 

BAQ12: What are the stages which can be considered for productization process?  

- [ ] Independent Projects - Executed independently and differ in the budget, technology, and functionality  

- [ ] Project Feature Reuse - Focus on feature reuse across projects  

- [ ] Product Recognition - Shared features between projects and customer specific maintenance  

- [ ] Product Platform - Generic product platform with handing customer requirement as a market requirement  

- [ ] Standardizing Product Platform - Focus on generic product platform and requirements are derived based on the market trends  

- [ ] Customizable Software Product - Standard product with customized layered par focusing on services  

- [ ] Standard Software Product - Generic product for all customers and build for a specific market and completely configurable and structured for subscription-based model  

   

BAQ13: What are the challenges in the productization transformation process?  

- [ ] Reuse documentation  

- [ ] Delta analysis and effort estimation  

- [ ] Version proliferation  

- [ ] Architectural drift  

- [ ] Over featuring  

- [ ] Security risks 

- [ ] Market Fit 

- [ ] Time-to-Market 

- [ ] Adaptability to Change 

- [ ] Technology Compatibility 

 

BAQ14: What are the gray areas of the product?  

- [ ] Technology stack  

- [ ] User load  

- [ ] market growth  

- [ ] Traffic growth  

- [ ] Traffic pattern  

- [ ] Backup plans  

- [ ] Security 

- [ ] Competitors  

- [ ] Adoption Rate 

- [ ] Customer Retention 

- [ ] Evolving User Needs 

- [ ] Global Expansion 

- [ ] Technology Trends 

 

BAQ15: What are the different types of compliance applicable for your product? 

- [ ] Corporate Compliance - following all laws, regulations, standards, and ethical practices that apply to your organization and industry. 

- [ ] Regulatory Compliance - following the local and international laws and regulations that are relevant to its operations 

- [ ] Data compliance - ensuring that the product is correctly and legally collecting, organizing, storing, and managing data. 

- [ ] Human resource compliance - all the business policies and procedures that ensure your organization is operating lawfully and with the welfare of your employees. 

- [ ] Product health and safety compliance - ensure the product health and safety measurements are met. 

 

BAQ16: What are the compliances and the standards to be followed in your product? 

Consider using the compliance standards below for your product development as needed. 

- [ ] Payment Card Industry Data Security Standard (PCI DSS) 

- [ ] International Organization for Standardization (ISO) standards 

- [ ] General Data Protection Regulation (GDPR) 

- [ ] Federal Information Security Modernization Act (FISMA) 

- [ ] Health Information Technology for Economic and Clinical Health Act (HITECH) 

- [ ] Web content accessibility guidelines (WCAG) 

- [ ] 508 compliances 

 

 

### Product Architecture 

 “How is the functionality of the product structured to modules?”  

“How the modules interact with achieve higher values?” 

 

#### Definition 

Product architecture represents how the functionality of your product is structured into modules and how these modules interact with each other.   

In deriving the product architecture, functional requirements are focused mainly. In addition to functional requirements the following key points should be considered as well. 

- Non-functional requirements of your product 

- Technology specifics 

- Integration Points 

- How to manage data and data flows through different modules 

  

#### Driven by 

Development Team 

 

#### Impacted personals 

- Users 

- Operational Team 

- Development Team 

  

#### Strategic reasons to implement a Product Architecture 

We have identified below the key benefits of having a product architecture for a particular business product.    

 

- Assist in proper consolidation of functional, non-functional and operational requirements of the product.  

- Provides the development team and operational team with a design to abide by.  

- Provides guidance and compliance during the implementation phase and maintenance phase for the development and operational teams. 

  

#### Key areas to focus when implementing a product architecture   

We have identified four key areas of product architecture that need to be carefully evaluated.  

 

##### System Decomposition 

During product architecture, the entire product is normally designed in such a way that it will be decomposed into different layers, components, services, etc., based on an agreed-upon decomposition strategy.  

Systems can be decomposed based on execution context, deployment context, business, or domain capabilities. Some software architecture styles, such as multi-tier, microservices, event/message-driven, queue worker, and batch processing, are defined based on these strategies.  

With these, the system can be planned, developed, deployed, and maintained in a more independent and loosely coupled way.  

 

##### Data 

All software products deal with data, and mainly how and where data is to be stored and processed needs to be analyzed.  

Relationships, documents, key values, graphs, and time series are some of the data-storage patterns. And proper modeling of data storage and isolation techniques such as normalization levels, logical partitioning, and tenant-based isolations are also available.  

Proper data modeling and isolation lead to more cost-friendly, performant, and secure data management in the product.  

  

##### Communication and interaction 

The system components should communicate with each other effectively for a smoother function of the product as a whole. Normally, the components are distributed and communicated over networks.  

Communication styles such as synchronous vs. asynchronous and push vs. pull-based, communication protocols such as http, tcp, rpc, amqp, etc., data formats like JSON, binary, soap, etc., and communication-based technologies like Rest APIs, graphql, web hooks, and queue-based messaging are some considerations.  

The right component communication strategy is one of the main factors in the expected responsiveness and scalability of the system.  

  

##### Implementation technologies, tools and practices 

  

Software products use technologies for implementation and then tools and practices for proper use of the technologies.  

The right selection of programming languages in all stacks, database technologies, design and communication patterns, libraries and frameworks, and development tools and plugins are required for efficient delivery, extendibility, security, and maintainability of the system. 

  

##### Process and Best Practices 

 Software product architecture should follow defined processes and best practices for success in the product.  

Agility in architecture and design, frequent reviews, proper technical leadership (architect role), innovation, and continuous improvements are key to making a software product more maintainable, extendable, and sustainable in the long run.  

 

#### Quality attributes to consider when implementing a product architecture   

At the end of this chapter, we have presented a questionnaire, which is a great aid in designing a successful product architecture. Try answering and completing all the checkpoints in covering the quality attributes of your product.   

 

##### Performance of the product 

Performance in product refers to the ability of the product to run on any user activity or scale at any time with expected response time. 

During the product architecture design the performance of the system can be considered in the following factors. 

- caching  

- support scale horizontally and automatic scale in and down  

- component proximity  

- data persistent design  

- workload isolation/decoupling  

- component to component    

 

Technology selection can also mainly affect the performance of the application. Proper data modeling and persistent technologies and strategies can influence the performance of the overall software product as well. 

 

##### Security and Privacy of the product 

  

Security of the system gives assurance for confidentiality, integrity, and availability of data and the system itself from attacks, threats, and abuses. Privacy mainly relates to the storage, processing, and transfer of personally identifiable data.  

  

##### Reliability of the product 

 

Reliability refers to the ability of the software product to function without any issues under agreed-upon conditions and periods. With the reliability of the software product architecture, we need to make sure there are no functional bugs, downtimes, performance issues, or security issues.   

  

##### Functional stability (bug-free) of the product 

  

Functional stability is defined as software that should continue to function in different environments and conditions without any failures and with the expected quality.   

   

##### Maintainability of the product 

  

The effectiveness of a good product architecture is mainly measured by how easily the system can be changed for future requirements in a cost-effective way over the product’s life.  

- How well the software product can be modified for continuous changes: Every software product has to evolve over time after the live rollout and even before it. These changes will come as improvements and bug fixes based on business, technology, and environmental changes.  

- How well the product is test-automated: as system functionality is more covered by test automation, it is easier to make changes. Mainly, tests can be automated using unit, integration, and UI testing (Test Pyramid). Further, some automated code, security, load, and performance quality checks will be helpful.  

Design for testability, a test-first approach to implementation (test-driven development), design patterns, more control over the reusability of the system, and proper coding practices like SOLID lead to a more maintainable software product.  

 

#### Conclusion 

In concluding notes, while implementing a product architecture for a business we design identified points in business architecture phase into our software product.  

We propose answering the following sample questions and completing each point, which will aid in identifying and implementing a successful product architecture that will lead to a good product. 

 

PAQ1: How do you achieve performance by design?  

- [ ] Reduce Initial loading time  

- [ ] Lower Page response time  

- [ ] Process Large number of items in less time (Ex. How many PDF needs to be generated based on the specific time)  

- [ ] Load certain volume of data without any delay  

- [ ] Keep the expected performance of the product even at high user load.  

- [ ] Make sure long running processes or activities do not affect normal product functionality performance.  

- [ ] Make sure minimal latency during product component to component communication 

 

PAQ2: How do you achieve performance by technology? 

- [ ] Reduce initial Loding 

- [ ] Lower Page response time  

- [ ] Keep best performance for expected devices  

- [ ] Provide lower processing time  

- [ ] Serve high number of concurrent requests and parallel processing  

- [ ] Identify technology limitations  

- [ ] Identify for Performance and Load benchmarks 

 

PAQ3: How do you achieve performance by data strategy? 

 - [ ] Reduce data retrieval time  

 - [ ] Reduce data writing time  

 - [ ] Minimize processing in persistent store  

 - [ ] Keep the expected performance during high data volume 

 

PAQ4: How do achieve software product security? 

- [ ] Protect the Product from unauthorized access to system  

- [ ] Protect the product from unauthorized actions, viewing and changing system state  

- [ ] Protect product component and services from attacks, unauthorized consumptions, threats and unavailability  

- [ ] Protect secrets, sensitive and personally identifiable information from unauthorized disclosure  

- [ ] Make sure regional, organizational, domain specific or any other compliance or policy related restrictions can be enforced 

 

PAQ5: How do achieve software product Security by technology? 

- [ ] Protect the product from unauthorized access and change to the data 

- [ ] Protect from making data unavailable 

- [ ] Protect from disclosing sensitive and personally identifiable data 

 

PAQ6: How do achieve software product security and privacy by data strategy?   

- [ ] Protect the product from unauthorized access and change to the data 

- [ ] Protect from making data unavailable  

- [ ] Protect from disclosing sensitive and personally identifiable data 

 

PAQ7: How do achieve software product reliability? 

- [ ] Minimize the entire system or functionality failures  

- [ ] Reduce the impact on product users when there is a failure 

- [ ] Increase the level of tolerance during a service or component failure 

- [ ] Make the system or a service can recover to its normal condition, when there is a failure (Reduce Recovery time objective)  

- [ ] Make less impact to the data loses during a failure or unavailability (Reduce Point Objective) 

 

PAQ8: How do achieve software product Functional?   

- [ ] Make sure system can run without any failures in varying user loads and behaviors  

- [ ] Make sure the system is functional in different user platforms, devices and networks.  

- [ ] Make sure system perform as expected in different data loads 

 

### Infrastructure Architecture 

  

#### Definition 

Infrastructure architecture refers to the process of designing and developing technological systems and infrastructure that align with business requirements. This entails creating well-documented, integrated infrastructure models that cater to various stakeholders' needs. The aim is to achieve seamless release and deployment automation, security, validation, and release management. 

  

There are three primary types of infrastructure architectures that can be adopted to support a software product: 

On-Premise Architecture: 

Single physical server setup with an operating system, platform, and application. 

Driven by DevOps, support engineers, and network engineers. 

Cloud Architecture: 

Virtualized servers hosted in the cloud, distributing virtual machines across multiple physical servers. 

Driven by solution architects and development teams. 

Hybrid Architecture: 

Involves a containerized server architecture with multiple containers distributed across the application platform. 

A combination of on-premise and cloud elements. 

 

  

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

There are 5 key areas to pay attention to. 

  

##### Sizing the planned deployment infrastructure needs 

Infrastructure architecture includes the physical resources necessary to meet the software product requirements. Architect should pay attention to derive a design that implies  

best use of resources while adhering to the business constraints and non-functional requirements. Successful design of an infrastructure requires past experience,  

knowledge of systems architecture, domain knowledge and close attention to the non-functional requirements. 

  

##### Optimize resources & know your compromises 

Due to various factors such as time and cost, we may have to be flexible in our architectural decisions, yet meeting the standards. 

Resource optimization often tied up with compromises which is inevitable where you have to justify against these tradeoffs. Further those points has  

to be clearly documented and maintained for future references as well. 

  

##### Identifying the risk 

As we know, during the architecture phase, infrastructure requirements may have gaps, which is why we keep some provisions for such unknowns. 

For an example if you underestimate the actual production usage of the system, your system will not be able to handle the expected load.  

To avoid that, the infrastructure architecture should continuously evolve based on business needs. 

  

##### Handling deployments 

In order to improve lead time of feature delivery, it is necessary to identify an efficient deployment strategy within the business and product architecture constraints. 

There are well established strategies that you can choose from: 

- Recreate Deployment 

- Blue/Green Deployment 

- Canary Deployment 

- Shadow Deployment 

  

##### Visualize your infrastructure 

You need to create your infrastructure diagrams, for better visualization of the system. It also helps to discuss the key areas among the stake holders. You  

can create the draft document from the initial stage, so that the developers will also be aware of the underline infrastructure that their code is being executed.  

  

#### Quality attributes 

  

##### Cost optimization 

  

###### Overview 

In a software product business, typically infrastructure costs become significant. Therefore, we need to come up with various strategies to reduce the total cost of ownership.  

###### Questions / Guidance 

  

ICOQ1 : Have you identified the minimal infrastructure needs to run your application?  

- [ ] Minimum hardware requirement 

- [ ] Compatible OS and Platforms 

- [ ] Scalability needs 

- [ ] Network requirements (bandwidth, latency) 

 

ICOQ2 : Do you have any SLA to be fulfilled under your user agreement? 

- [ ] Uptime requirements  

- [ ] Backup and disaster recovery requirements 

- [ ] Support requirements 

- [ ] Data security and privacy compliance   

  

ICOQ3 : Have you considered and compared alternative options for infrastructure? 

  

- [ ] SWOT of Infrastructure selection 

- [ ] Competitive advantages of choosing the right infrastructure  

- [ ] Keep track of competitive decisions 

- [ ] Cost-benefit analysis of different infrastructure choices 

- [ ] Future scalability potential of each infrastructure option 

 

 

##### Monitoring 

  

###### Overview 

Once your application is in production you need visibility over its health. This information will help you to identify issues upfront and troubleshoot them to solve any issues.  

  

###### Questions / Guidance 

IMQ1 : Have you identified monitoring needs of your application? 

  

- [ ] Identify the areas that required constant monitoring 

- [ ] Identify the tools that fulfills them 

- [ ] Define specific metrics to be monitored (e.g., response time, error rate).  

- [ ] Determine acceptable thresholds for each monitored metric.  

- [ ] Consider scalability and resource utilization metrics. 

  

IMQ2 : Have you identified the people and means of notifying in case of a failure? 

  

- [ ] Define the critical alarms and events that needs to be configured 

- [ ] Identify the correct audience for each alarm (e.g., development team, operations team).   

- [ ] Prioritize your metrics based on their impact and urgency. 

  

IMQ3 : Have you identified the logs generated by your application? 

  

- [ ] Identify all the logs that are generated by the application 

- [ ] Ensure that the logs are persistent and stored securely 

- [ ] Ensure that the logs are available to access for any investigation 

- [ ] Check that log levels are appropriately defined for easy filtering and debugging. 

  

IMQ4 : Do you plan to do a trial run to customer alerts? 

  

- [ ] Ensure alerts are delivered when incidents occur 

- [ ] Craft clear and concise alert messages with relevant information 

- [ ] Define alert escalation procedures for different severity levels.   

- [ ] Test alerts in a controlled environment before deploying to customers. 

- [ ] Review and refine the list of valid causes for triggering alerts. 

 

 

##### Security 

  

###### Overview 

  

Once your application is in production, make sure that infrastructure security is properly handled. 

  

###### Questions / Guidance 

ICQ1: Have considered proper security configuration for infrastructure? 

 

- [ ] Ensure to change default configurations 

- [ ] Ensure to change the default passwords 

- [ ] Conduct a security assessment or penetration testing on your infrastructure 

- [ ] Keep software versions up to date 

 

ICQ3: What steps do you take to ensure secure user authentication and access? 

 

- [ ] Enforce strong password policies (complexity, expiration, etc.).  

- [ ] Implement multi-factor authentication (MFA) for all users.  

- [ ] Use single sign-on (SSO) to centralize and simplify access control.  

- [ ] Regularly review and revoke unnecessary user access rights.  

- [ ] Monitor and log user authentication and access events.  

- [ ] Implement role-based access control (RBAC) for granular permissions. 

  

  

##### Availability 

  

###### Overview 

  

Availability is a key factor in ensuring the success of any system. Through careful planning and consideration of the environmental factors that could affect the system. 

  

###### Questions / Guidance 

IAQ1: Have you evaluated your infrastructure for availability? 

- [ ] Check your infrastructure SLAs 

- [ ] Identify potential point of failure within your infrastructure 

- [ ] Ensure that sufficient redundancy in place 

 

IAQ2: What redundancy measures have you implemented in your infrastructure? 

- [ ] Implemented failover systems to seamlessly switch to backup resources in case of failures. 

- [ ] Set up load balancing to distribute traffic and workloads across multiple servers. 

- [ ] Utilized backup power solutions (UPS, generators) to maintain operation during power outages. 

- [ ] Employed geographical redundancy by hosting services in multiple data centers or regions. 

 

IAQ3: How have you ensured that your system can handle varying levels of traffic and demand? 

- [ ] Designed your architecture to easily scale horizontally by adding more servers or resources. 

- [ ] Implemented auto-scaling mechanisms to dynamically allocate resources based on real-time demand. 

- [ ] Conducted load testing to identify performance bottlenecks and optimize resource allocation. 

- [ ] Monitored system performance during peak and off-peak times to adjust resources accordingly. 

 

 

IAQ4: How do you validate the effectiveness of your availability measures? 

- [ ] Conducting regular availability tests to simulate various failure scenarios and assess system response. 

- [ ] Using chaos engineering techniques to intentionally introduce failures and observe the system's behavior. 

- [ ] Reviewing post-incident analyses to identify areas for improvement and implement necessary changes. 

- [ ] Involving cross-functional teams in tabletop exercises to practice coordinated responses to availability challenges. 

 

  

##### Maintainability 

  

###### Overview 

  

Maintainability is one of the key components of Infrastructure Architecture. Here, we need to consider the reliability of infrastructure and ability to change over its lifetime. 

  

###### Questions / Guidance 

  

IMQ1 : Have you considered automates infrastructure provisioning? 

  

- [ ] Identify an infrastructure automation language 

- [ ] Infrastructure layers and modules 

- [ ] Infrastructure changes review and dry run 

  

  

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

- When a product is in production, being able to see its internal status from outside is an utmost important quality of the product. As an example, when a system is in production, the ability to see that its usage of RAM is increasing and currently it is at 80% usage will give support staff a heads up for system failure in the future. 

  

###### Questions / Guidance 

  

POQ1 : When the Product is up and running, you may encounter different types of errors or intrusions. What kind of mechanisms should be used to report incidents? 

  

POA1 : Nowadays operational staff may not be looking at dashboards, they need a way to be notified automatically whenever an incident happens, thus we have to multiple ways of incident reporting based on criticality, and who should get notified also should be decided appropriately. Use one or more of the following approaches to achieve this. 

  

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

  

POA3 : There are many parameters that can be monitored in a system. These could range from user and activity-based matrices to resource consumptions. Select the matrices that you target to implement in your system. 

  

- [ ] No of users active in the system and from what regions 

- [ ] What are the user activities mostly done 

- [ ] Resource utilization against time 

- [ ] Suspicious users  

- [ ] Blocked user attempts 

  

  

POQ4 : What should be considered when testing a system in production? 

  

POA4 : Since this is about the production system. Anything that has a negative impact on the user should be avoided. The following list contains some of the main points to consider. 

  

- [ ] Downtime should be adhering to the SLA agreements 

- [ ] Should not negatively impact user experience (ex -performance issues) 

- [ ] Test data should not persist in the production database. 

  

  

POQ5 : Considering all the above points since we have multiple ways of knowing the status of the product, what should be considered when we log incidents? 

  

POA5 : Incident report should be easy to understand and adhere to the governance. Below points will help you to achieve this. 

  

- [ ] Structure 

- [ ] Information 

- [ ] Compliance 

- [ ] Performance 

- [ ] classifications 

  

  

When designing the system, we should have these in mind to have access points to support the observability of the product. Not only that but when configuring the server also we should give attention to these. 

  

##### Cost Optimization 

  

- Cost optimization of a product applies on multiple levels and thereby it means reducing the total cost of ownership. 

  

###### Questions / Guidance 

  

PCOQ1 : When a product is in production, what are the things that impact production cost? 

  

PCOA1 : Following points indicate the main cost factors of a production system. 

  

- [ ] Processing Power 

- [ ] Disk Space 

- [ ] Network usage 

  

  

PCOQ2 : How can we reduce the cost of a product in production? 

  

PCOA2 : There are many ways we can reduce the cost of production. Starting from the business architecture all architectural points will have an impact on this. The following pointers will help you to decide what's best suited for your product while optimizing the cost. 

  

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

  

PTA1 : Production system should have the following to respond quickly to a production issue. 

  

- [ ] Proper logs 

- [ ] Way to reproduce the issue 

- [ ] Way to apply the patch 

  

  

PTQ2 : What do you mean by proper logs? 

  

PTA2 : To troubleshoot a production issue and find its course logs will be the first place someone can check. The following attributes in a log will help support staff. 

  

- [ ] Proper Structure 

- [ ] Timestamp 

- [ ] Stack trace 

- [ ] Log Classification 

- [ ] User action flow 

  

  

PTQ3 : What can be improper information in a log? 

  

PTA3 : Mainly with GDPR personally identified information should not be logged. 

  

PTQ4 : What should we think when reproducing an issue in production? 

  

PTA4 : Since we are talking about a production system, we should be careful about negatively impacting user experience. Hence, paying attention to the following items will help.  

  

- [ ] Should not interfere with actual user actions 

- [ ] Test data should not persist in the production database 

  

PTQ5 : How fast should we resolve a production issue? 

  

PTA5 : It depends on the SLA s we have in place with the system with respect to the priority of the issue. 

  

  

##### Governance 

  

- Governance is the ability of the system to adhere and comply to regulations defined by legal and industry standards. 

  

###### Questions / Guidance 

  

PGQ1 : What are the types of compliance we should think about in production. 

  

PGA1 : There are many compliances that software development has to adhere to, and the following are few examples that you should consider based on the business. 

  

- [ ] GDPR 

- [ ] Performance Compliance 

- [ ] Reliability Compliance 

  

PGQ2 : Other than the above compliances can there be separate agreements that we have to adhere to in production? 

  

PGA2 : Yes, based on the business requirement there can be deferent types of agreements that we have to adhere to in production. Some of the common types of agreements are listed here. 

  

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

 
