---
id: product-architecture
title: Product Architecture
---

As you are already aware, coming up with the initial software architecture is one of the significant milestones of a software project. Therefore, as a technology company, it is essential to share the best practices across the organization to minimize errors while staying on budget. The 99X Architecture Process helps the architects to design the software architecture with guided steps to follow.



## Step 1: Identify architecturally significant requirements
Functional and non-functional requirements that have a measurable effect on software architecture.
Non-functional requirements also called quality attributes.
E.g. For a mobile app that requires to store form data filled in remote areas.
Reference: Architecturally significant requirements


## Step 2: Quantify the architecturally significant requirements as quality attributes
Identify the expected ranges of these architecturally significant requirements.
E.g. For a mobile app that requires fill data in remote areas needs offline support. Considering the nature of data max data needs to be stored offline is 10 Mb, which is sufficient for a month of offline storage.


## Step 3: Address the quality attributes through tactics
Architectural tactics are fundamental design decisions.
A tactic is a design decision that influences the control of an architecturally significant requirement's response.
Look for conflicting tactics if any exists.
Refine tactics if they affect each other.
Chooses a pattern or a collection of patterns designed to realize one or more tactics
E.g. One of the tactics introduces redundancy to increase the availability of a system. This is one option the architect has to increase availability, but not the only one.
Besides architecture is less about the decisions you make and more about the decisions you defer making.
Reference: Introducing Tactics, Relationship of Tactics to Architectural Patterns


## Step 4: Effectively communicate the architecture to connect the technology with the business requirements
Identify the different visualizations required to communicate with the relevant stakeholders effectively.
E.g. systems, subsystems, interactions.
Find the standard diagramming guidelines widely used for a particular visualization and adhere to the conversions.
E.g. For visualizing AWS solution architecture, use the AWS Icon Set, solution diagrams published by AWS in whitepapers, case studies &, etc.
