---
id: azure-three-tier-overview-2
title: Overview
---

# Technical Overview - Azure Three Tier IaC Kickstarter

Followings are the quality attributes that we are designing this template for.

* Scalability
    - One million requests per minute
    - Scaling down when there are less requests
    - Use load balancers and horizontal scaling

- Availability  
    - Multi-region availability
    - Time to fetch data must be minimal
    - The data must be redundant
    - Setup and automate backup data storage

*  Security
    - Only authenticated users can perform operations within the application
    - Setup firewall configurations (VNet / Application Gateway Firewall)
    - Generate audit logs for user actions
    - Apply data masking for user sensitive data in the database
    - Avoid exposing unnecessary resources (database, storage, etc) to public network

# Modules

The demo project contains a sample Todo application. Following list contains the high level functionality that this todo app includes. 

## Create Todos
**[POST] /api/todos**

This endpoint is defined for creating todos. it consumes the "Todo" model as an input parameter from the request body and insert a new todo record to the database. Unique identifier for the todo will be auto generated by the service.

**Header**

**Body**
```JSON
{
    "title":"string",
    "description":"string"
}
```

**Responses**
- [201 - created] type response will be returned as a success output together with the created todo item in the body.
- [400 - bad request] type response will be returned with the meaningful message if the given input is not matched with the requirements.

## List Todos
**[GET] /api/todos**

This endpoint is defined for the retrieval purpose of the todo items from the database.

**Header**

**Body**

```JSON
[{
    "refId": "string",
    "title":"string",
    "description":"string",
    "isCompleted": "boolean"
},
{
    "refId": "string",
    "title":"string",
    "description":"string",
    "isCompleted": "boolean"
}]
```

**Responses**
- [200 - ok] type response will be returned as a success output together with the list of todo items in the body.
- [204 - no content] type response will be returned if there is no any todo's defined.

## Mark as completed
**[PATCH] /api/todos/{id}/markascompleted**

This endpoint is defined for mark a particular todo item as a completed one. A unique identifier will be taken as a route parameter to identify the particular todo item.

**Header**

**Responses**
- [200 - ok] type response will be returned as a success output together with the modified todo item in the body.
- [400 - bad request] type response will be returned with the meaningful message if the given id is not existed.

## Soft delete Todos
**[DELETE] /api/todos/{id}**

This endpoint is defined for deleting a particular todo item. but in this context, we need to keep them in the database for audit purposes. so this will be a soft delete.
A unique identifier will be taken as a route parameter to identify the particular todo item.

**Header**

**Response**
- [200 - ok] type response will be returned as a success output.
- [400 - bad request] type response will be returned with the meaningful message if the given id is not existed.

## Authentication

Azure AD B2C is used for user management and authentication purposes of the todo application.
Username and password combination is used for the login purposes.
Based on available permissions, user authorization for the APIs are carried out.