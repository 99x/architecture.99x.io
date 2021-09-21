---
id: due-diligence-process
title: Due Diligence Process
---

This area will define the process we follow when it comes to performing a Technical Due Diligence (DD).

## Team Composition

For the Due Diligence to be successful it is important to choose the right individuals to perform this exercise. 
There are many factors that need to be considered when choosing the team, but it can be narrowed down into the following: 

- Experience with similar systems
It would be beneficial if at least one member of the team has experience designing /working with similar system. For example, if the project in question is based on the Microservice Architecture, it would be an advantage if a team member has working experience in another project of the same nature. It would be a bonus if a member of the team has expertise in the project domain, but this is not essential.

- Familiarity with tech stack
It is essential that the team has experience in the tech stack that is being used within the project in question. The knowledge can be distributed in the team but should be a composition of working knowledge of the frontend, backend and database technologies used.  
 
## Stages

### Initiation

In this stage, the team will have a meeting with the stakeholders of the project to establish and understand their expectations and requirements.
The team would also present a brief walkthrough of the process that will be followed, special permissions required and a rough timeframe (this will vary depending on the scope and size of the codebase). 
The ideal stakeholder composition would be as follows: 
•	Cheif Technical Officer(CTO) or similar capacity
•	Product Owner / Delivery Manager
•	Project Lead

## Collaboration
### Team Meeting

This would mark the first direct interaction between the Project team and the team. Here, the objective of the DD would be communicated to the team.
It is very important that the Project Team understands that the purpose of the DD would be not to find fault with their efforts over time, but instead, it would be to improve the current solution with helpful feedback and contribution.
For the DD to run smoothly there would be some access that would need to be granted to the team. 
For example:  
•	Codebase
•	DB schema
•	CI/CD pipeline 
•	Cloud infrastructure (if applicable)
Read access to the mentioned resources would be adequate.

### Domain Meeting

In this meeting, the project domain experts would educate the team on the domain, important workflows, and third-party integrations of the application. The team will use this meeting to identify potential areas of the application where a thorough analysis is needed. In addition, the team will encourage the project team to pinpoint areas that they feel need to be focused too. 

### Technical Meetings

#### Architecture Walkthrough
The team would meet with the Architect(s) of the Project and walkthrough the Solution Design, Architectural Decisions and Trade offs. The team would also review Privacy and Security aspects of the architecture in detail.

#### Code Walkthrough
It is the responsibility of the Project lead | Senior developer to schedule the meetings at the digression of the team. The code walkthrough will consist of generic areas like Identity Management, Authentication and Authorization. 
In addition, an in-depth code walkthrough will be conducted into the areas identified in the domain meeting, starting at code level and drilling down into the database level. The team will be able to divide and conquer at this stage, allocating team members to different areas identified for code walkthrough.

#### Devops Walkthrough



### Collation and Presentation
Once all information gathering has been completed. The team will collate the findings from the Architecture, Devops and Code Walkthroughs. During this time, the team may still require access to code and other artifacts for further analysis.

Once this task has been complete, the team will then present a detailed report with their findings along with the recommendations to the management.