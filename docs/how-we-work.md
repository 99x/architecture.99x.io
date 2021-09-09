---
id: how-we-work
title: How we work
---
## The dangling landscape of cost-of-change
As architects, we have a reasonable degree of influence over those architecturally significant decisions. For example, imagine building a simple server-side web application to deliver information to users. For this discussion, assume there are no complex requirements related to security, performance or scalability, and that the relational database is being used just for data storage.

Here, using some abstraction layer to communicate with the database may make sense, like an object-relational mapping framework, such as Hibernate, JPA, Entity Framework. The use of an abstraction layer is a classic technique for better accessibility, decoupling distinct parts of a software system, achieving looser coupling, higher cohesion, and a better separation of concerns. In addition, the use of the database abstraction layer allows you to change your database via configuration without significant code changes. Since now the team can change the database at will, they would consider the choice of database to no longer be an architecturally significant decision.

However, while the database may no longer be considered a significant decision, the choice of the tactic to decouple through introducing an additional layer should be. If you wonder why, think how long it would take you to swap out your current database abstraction layer or the web MVC framework and replace it with another. Of course, you could add another layer over the top of your chosen database abstraction layer to further isolate your business logic and provide the ability to swap out your database abstraction layer easily, but, again, you have made another significant decision. As a result, you have introduced additional layering, complexity, and cost.

## The balancing art
Although we cannot necessarily make all “significant decisions” disappear, we can use several different tactics (such as architectural layering, in the previous example) to change the landscape of the significance and impact. There is also no clear line between the decisions that should be deemed significant and those that should not. Significant decisions are usually related to key technology choices (e.g., programming languages and frameworks), generally applicable tactics (e.g., inter-component communication), and the overall structure (monolithic deployment unit vs. microservices). Aspects such as 'tabs vs. whitespaces', or 'curly braces on the same line vs. the next line', are probably not architecturally significant! Everything else will fall in between somewhere between these two extremes. Part of the process of architecting a software system is about understanding what is significant and why. The architect must understand the business context, product vision, and functionality required to make these decisions effectively.

## Is software architecture important?
Now that we understand software architecture, we should wrap up this chapter by looking at its importance. The past decade has seen a considerable shift in how we build software, thanks to movements such as agile, lean, software craftsmanship, continuous delivery, DevOps, the cloud, and more. Together these new approaches help us build better software that better meets the needs of the business while managing time and budgetary constraints. But there is still more we can do because even a tiny emphasis on software architecture can help prevent many of the projects' long-term problems.

As we have already mentioned, successful software projects are not just about focussing on good code. Ask yourself the following questions:

- Does your software system have a clearly defined structure?
- Is everybody on the team consistently implementing features?
- Is there a consistent level of quality across the codebase?
- Do team members share the same vision for the required quality attributes?
- Does everybody on the team have the necessary amount of technical guidance?

It may be possible to successfully deliver a software project by answering “no” to some of these questions, but it does require an outstanding team and much luck. If nobody thinks about software architecture, the result typically looks like the stereotypical “big ball of mud”. Sure, it has a structure, but not one that you would want to work with!

Other side effects of a team that neglects architecture include the software system being too slow, insecure, fragile, unstable, hard to deploy, maintain, change, extend over time. Although most software projects and products start with the best intentions, it is easy for them to veer off track without appropriate technical leadership; both at the code level and above it. These seemingly chaotic software projects exist in the real world, and most of us will have one or more horror stories about the cost of working on them. If you have never worked on such a project, you’re probably in the lucky minority!

## The benefits of software architecture
Thankfully, most of these problems are relatively easy to solve with some good technical leadership, resulting in a team that understands and thinks about software architecture. In summary, this can provide:

- A clear vision and roadmap for the team to follow
- Technical leadership and continuous coordination
- A stimulus to talk to people (inside and outside of the team) to ask questions relating to significant decisions, quality attributes, constraints, and other cross-cutting concerns.
- A framework for identifying and mitigating technical risks
- Consistency of approach and standards, leading to a well-structured codebase.
- A set of firm foundations for the product being built
- A structure to communicate different levels of abstraction to different audiences

## How much architecture is needed?
The caveat here is that every software team should consider several factors to assess how much software architecture thinking is necessary, which manifests itself as upfront design. These include the size of the project/product, the complexity of the project/product, the team's size, and the team's experience.

Historically there was a tendency towards upfront design, where teams were trying to answer all of the questions before writing a single line of code. However, we have recently witnessed a trend towards the other extreme and too little upfront design. As Dave Thomas once said:

The big design upfront is dumb. Doing no design up front is even dumber.

As with many things in life, there is a sweet spot here awaiting discovery. The answer to how much is “enough” upfront design requires good business sense, architecting experience, and common sense.

## Reference
[Book: Technical Leadership and the Balance in Agility](https://leanpub.com/software-architecture-for-developers/read#leanpub-auto-what-is-software-architecture)
