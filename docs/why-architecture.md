---
id: why-architecture
title: Why Architecture?
slug: /
---

Although this sounds relatively straightforward, we, as software professionals, have a degree of influence over those architecturally significant decisions. Imagine you’re building a simple server-side web application to deliver information to users, and that information is stored in a relational database. For the sake of this discussion, let’s say there are no complex requirements related to security, performance or scalability, and that the database is simply being used for data storage. Let’s also ignore non-relational (e.g. NoSQL) databases.

When building the web application, many teams will choose to use some sort of abstraction layer to communicate with the database, like an object-relational mapping framework; such as Hibernate, JPA, Entity Framework, etc. One common reason to use a database abstraction layer is to make accessing the database easier. Another common reason to use a database abstraction layer is to decouple business/domain-specific code from the choice of database. The use of an abstraction layer is a classic technique for decoupling distinct parts of a software system; promoting looser coupling, higher cohesion and a better separation of concerns. If you’re simply using the database for data storage, the use of the database abstraction layer allows you to, in theory, change your database via configuration, without changing any code. Since the database can be changed so easily, many teams would therefore consider the choice of database to no longer be a significant decision.

However, while the database may no longer be considered a significant decision, the choice to decouple through the introduction of an additional layer should be. If you’re wondering why, have a think about how long it would take you to swap out your current database abstraction layer or web MVC framework and replace it with another. Of course, you could add another layer over the top of your chosen database abstraction layer to further isolate your business logic and provide the ability to easily swap out your database abstraction layer but, again, you’ve made another significant decision. You’ve introduced additional layering, complexity and cost.

Although we can’t necessarily make “significant decisions” disappear, we can use a number of different tactics (such as architectural layering, in the previous example) to change what those significant decisions are. There’s also no explicit line between the decisions that should be deemed as significant, and those that shouldn’t. Having said that, the significant decisions are usually related to key technology choices (e.g. programming languages and frameworks) and the overall structure (monolithic deployment unit vs microservices). Aspects such as “tabs vs whitespaces”, or “curly braces on same line vs the next line”, are definitely not architecturally significant! Everything else will fall in between somewhere between these two extremes. Part of the process of architecting a software system is about understanding what is significant and why, given the context you’re working in.

## Is software architecture important?
Now that we understand what software architecture is, we should wrap up this chapter by looking at the importance of software architecture. The past decade or so has seen a huge shift in the way that we build software, thanks to movements such as agile, lean, software craftsmanship, continuous delivery, DevOps, the cloud and more. Together these new approaches help us to build better software that better meets the needs of the business, while carefully managing time and budgetary constraints. But there’s still more we can do because even a small amount of software architecture can help prevent many of the problems that projects face.

As we've already mentioned, successful software projects aren’t just about focussing on good code. Ask yourself the following questions:

- Does your software system have a well defined structure?
- Is everybody on the team implementing features in a consistent way?
- Is there a consistent level of quality across the codebase?
- Do team members share the same vision for how the software will be built?
- Does everybody on the team have the necessary amount of technical guidance?
- Is there an appropriate amount of technical leadership?

It is possible to successfully deliver a software project by answering “no” to some of these questions, but it does require a very good team and a lot of luck. If nobody thinks about software architecture, the end result is something that typically looks like the stereotypical “big ball of mud”. Sure, it has a structure, but not one that you’d want to work with!

Other side effects of a team that focusses too much on the code include the software system being too slow, insecure, fragile, unstable, hard to deploy, hard to maintain, hard to change, hard to extend, etc. Although most software projects and products start with the best of intentions, it’s easy for them to veer off track without an appropriate amount of technical leadership; both at the code level and above it. These seemingly chaotic software projects do exist in the real-world, and most of us will have one or more horror stories about the time we spent working on them. If you’ve never worked on such a project, you’re probably in the lucky minority!

## The benefits of software architecture
Thankfully, most of these problems are relatively easy to solve with the application of some good technical leadership, resulting in a team that therefore understands and thinks about software architecture. In summary, this can provide:

- A clear vision and roadmap for the team to follow, regardless of whether that vision is owned by a single person or collectively by the whole team.
- Technical leadership and better coordination.
- A stimulus to talk to people (inside and outside of the team) in order to ask questions relating to significant decisions, quality attributes, constraints and other cross-cutting concerns.
- A framework for identifying and mitigating risk.
- Consistency of approach and standards, leading to a well structured codebase.
- A set of firm foundations for the product being built.
- A structure with which to communicate the solution at different levels of abstraction to different audiences.

## Does every software project need software architecture?
Rather than use the typical consulting answer of “it depends”, we would say the answer is undoubtedly “yes”. The caveat here is that every software team should look at a number of factors in order to assess how much software architecture thinking, a degree of which manifests itself as up front design, is necessary. These include the size of the project/product, the complexity of the project/product, the size of the team and the experience of the team.

Historically we’ve seen a tendency towards too much up front design, with teams trying to answer all of the questions and solve all of the problems before writing a single line of code. More recently, We’ve witnessed a trend towards the other extreme, and too little up front design. As Dave Thomas once said:

Big design up front is dumb. Doing no design up front is even dumber.

As with many things in life, there is a sweet spot here awaiting discovery. The answer to how much is “enough” up front design and technical leadership requires experience and common sense.

## Reference
[Book: Technical Leadership and the Balance in Agility](https://leanpub.com/software-architecture-for-developers/read#leanpub-auto-what-is-software-architecture)
