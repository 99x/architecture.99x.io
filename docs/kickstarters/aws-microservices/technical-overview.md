---
id: aws-microservice-overview
title: Overview
---

# Technical Overview - AWS Microservice IaC Kickstarter

Followings are the quality attributes that we are designing this template for.

* Security
    - Only authenticated users can perform operations within the application
    - Setup firewall configurations (VNet / Application Gateway Firewall)
    - Generate audit logs for user actions
    - Apply data masking for user sensitive data in the database
    - Avoid exposing unnecessary resources (database, storage, etc) to public network
  

* Scalability
    - One million requests per minute
    - Scaling down when there are less requests
    - Use load balancers and horizontal scaling


* Reliability
    - Automatically recover from failure
    - Scale horizontally to increase aggregate workload availability

* Performance
  - Following performance metrics should be considered
    - Input/Ouput Operations per second
    - Caching to improve access performance
    - Autoscaling (Vertical and Horizontal)
  - Performance testing 
    - Stress Testing
    - Load Testing
    - Failover Testing
    - Soak testing
  - Services such as Auto Scaling, Caching in AWS cloud can be used to improve performance

# Modules

This boilerplate contains a simple web application to place a customer order for a product

Core Functionalities of the application include
* Adding Orders
* Listing Orders
* Notifying End Users with Order Information

# Foundation Layers

Following Layers will be part of the system.

* Authentication and Authorization
* Web GUI - The Technology used should be replaceable 
* Microservices - Backend services to process requests and handle business logics
* Database

## Authentication and Authorization

- OAuth2 Authentication method should be used to authenticate users.
- Authorization should be enabled for role based access control.

# Microservices

* Order Service
  - This service handles the CRUD operation of the customer order.


* Omni Channel Notification Service 
  - This service handles the transmission of the order information notifications to the end-user.

  
## Create a Customer Order
**[POST] /api/customer-orders**

This endpoint is defined for creating a customer order. Following are the responsibilities of the endpoint.

* Validate the Order request
* Call the Notification Service and email the supplier on the placed order
* Create a new record in the database

**Header**

* Authorization : Bearer (auth-token)
* Content-Type : application/json


**Body**
```JSON
{
    "Order No": "string",
    "Customer": "string",
    "Supplier": "string",
    "Product": "string"
}
```

**Responses**
- [201 - created] type of response will be returned as a success output together with the created order item in the response body.
- [400 - bad request] type of response will be returned for validation errors with the error message in the request body.
- [500 - internal server error] type of response will be returned for internal servers errors with the exception.


## List Customer Orders
**[GET] /api/customer-orders**

This endpoint is defined to retrieve all customer orders from the system. Following are the responsibilities of the endpoint.
* Return all customer orders from the system sorted by created date

**Header**

* Authorization : Bearer (auth-token)
* Content-Type : application/json

**Body**

```JSON
[{
  "Order No": "string",
  "Customer": "string",
  "Product": "string",
  "Supplier": "string",
  "createdDate": "timestamp",
  "status": "string"
},
{
  "Order No": "string",
  "Customer": "string",
  "Product": "string",
  "Supplier": "string",
  "createdDate": "timestamp",
  "status": "string"
}]
```

**Responses**
- [200 - ok] type response will be returned as a success output together with the list of customer orders in the response body.
- [204 - no content] type response will be returned if there are no customer order found in the system.
- [500 - internal server error] type of response will be returned for internal servers errors with the exception.

## Approve Order
**[PATCH] /api/customer-orders/{id}?action=approve**

This endpoint is defined to approve a customer order. Following are the responsibilities of the endpoint.

* Validate if received order no exists in the database.
* Validate if order is in "Planned" status.
* Change status of the order from "Planned" to "Approved".
* Modify record in the database.

**Header**

* Authorization : Bearer (auth-token)
* Content-Type : application/json

**Responses**
- [200 - ok] type response will be returned as a success output together with the modified customer order in the response body.
- [400 - bad request] type response will be returned with a validation error if the given order no does not exist.








