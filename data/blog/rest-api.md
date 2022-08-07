---
title: 'REST API'
date: '2022-08-07'
tags: ['rest', 'api']
draft: false
summary: What is REST API? REST stands for “Representational State Transfer”. REST is a set of architectural principles for building services that work together to provide a consistent and predictable interface to the data that your applications need.
---

![accessibility](/static/images/posts/rest-api.jpg)

## What is REST API?

REST stands for “Representational State Transfer.

- **Client** — Our application is requesting the data.
- **Dynamic Server/Cloud** —The server to which the client will be trying to access the data from.
- When a request is sent, the server, in turn, returns the data in either XML or JSON format.

API — This is an **Application Programming Interface** that helps to connect our application with the Dynamic Server/Cloud.

### Why is the data in XML or JSON format?

It’s because the data must follow a particular structure.

Only the values/state of an object will be sent from the server-side to the client-side in JSON/XML format. [During this, there is transfer of state happening and hence called ‘State Transfer’.]

**Operations performed on websites -**

We can perform CRUD Operations and for this we will be using the HTTP methods.

example —

http://aaa.com/api/customers

_http/https_ — This can be either of them

_aaa.com_ — Domain

_API_ — convention to expose the RESTful services

_customers_ — a collection of customers in the application (resource)

We can perform operations by sending an HTTP request to the endpoint.

Every HTTP request has something called a method that determines the type.

**GET —**

- GET /api/customers — This will return all the customer details

GET /api/customers/1 — This will return the customer details with id:1

**PUT —**

PUT /api/customers/1

We should also include the customer ID and also customer object in the body of the request to get it updated.

**DELETE —**

DELETE /api/customers/1

To delete a customer.

**POST —**

POST /api/customers

We will be able to add a new customer, we have to include the customer object in the body of the request to create a new customer.

**Note —**

Information can be stored by the client to prevent multiple calls.
We can use REST when both the client and server operates on a web environment.

_Example —_

[LinkedIn API](https://developer.linkedin.com/)

[Twitter API](https://developer.twitter.com/en)

And that's what I know about REST API. I hope you find it useful. If you have any questions, please let me know.
👇

Happy coding!
