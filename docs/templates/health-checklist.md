---
id: health-checklist
title: Health Checklist
---

The health checklist used for the architecture health review process and is categorized into each key focus areas as follows.

### Agility in Design

 -   Refactoring and standardization (generalization) needs are identified (preferably through automation). The team maintains a backlog for managing technical debt.
 
 -   Contexts in which the product may operate are identified. Designs are in place to meet required compatibility needs (form-factors, devices, browsers, etc.).
 -  Non-functional requirements for cross-cutting architectural aspects (security, globalization, etc.) are identified and maintained in the form of a backlog.
 -  The team is in favor of deferred decisions using delaying techniques such as abstractions. A log of deferred decisions is maintained and actioned appropriately.
 -  Alternative solution architectures are evaluated, and selected architecture is well justified based on facts.
 -  Key quality attributes (non-functional requirements) are defined. Tactics identified for each architectural significant requirement. Tradeoffs are analyzed between tactics during architectural decisions.
 -  Simplest possible architecture is defined for the given functional and non-functional goals. Derived architecture matches the expected outcome. An architect has been consulted invalidation.
 -  Architecture diagrams are made available with the required documentation to the team.
 -  Cost of ownership is evaluated against the cloud architecture. Best practices have been followed for cost optimizations.
 -  Core technical services are well designed. Design patterns are applied where necessary. The team has consulted a TL in making decisions on technical designs.
 -  team has technology competencies required for the development. The team is aware of SOLID design principles, design patterns, and framework-specific patterns and is practicing them.
 -  SQL/no-SQL database decision is taken based on the requirement. Database design follows standard practices. Reviews are done on database design\changes.
 -  development, staging, production environments can be automatically provisioned. All artifacts, configurations required are version controlled.
 
 ### Feature Delivery
 -  Features can be dark launched using feature toggles.
 
 -  development and test environments shall be set up separately.

### Product Stability

 -  product continuation/recovery plan to meet unexpected interruptions shall be identified.
 
-  Secure deployment practices are implemented to ensure the protection of personal data and privacy.

### Software Productization

 -  product has the capabilities of catering to globalization needs (language, currency, date/time, numbers, etc.).
 
-  strategy for multi-tenancy is identified, and necessary isolation means are in place.

-  The designs for billing and licensing features of the product are available, and reporting/accounting required for such are in place.
-  product is made modular such that it is possible to configure different editions catering to different market needs if required.
-  Service APIs are versioned, and strategy is in place for maintaining the service API.

### Visible Quality

-  Continuous Integration is in place, and tests are automatically executed upon builds. Commits are stopped if a test/build is broken until fixed.

-  Team is aware and practices code refactoring techniques