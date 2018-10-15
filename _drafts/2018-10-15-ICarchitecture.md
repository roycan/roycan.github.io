# Software Achitecture Document

## Definitions

IC
MVC
REST
MySQL
MariaDB
PostgreSQL
Aurora MySQL
RDMS
IS
Client
Server
Laravel 
PHP

## Purpose

The Insurance Commission (IC) desires to have data-driven information system software that is accessible to everyone in need of the data parked there.

The IC desires to have their system equipped with a high level of maintainability. It also requires a high flexibility in adding functionality.

IC desires the ability to integrate current stand-alone web applications as well as future developments with respect to data exchange and secure access. 


## Architecture

The relevant architectures used in this design are 
1. Client-Server 
2. Model-View-Controller (MVC)
3. Representational State Transfer (REST)


### Client-Server Pattern

The services are provided by the server. The server, whether on-premise or in-cloud, will be provisioned and maintained with standard performance parameters of within 70 percent of average capacity for bandwith, memory and processing. The clients will be nodes within the network with applicable access rights. The server actions in response to logged client requests.


### Model-View-Controller

All requests from clients to the server will be brought to the controller to be preprocessed and routed to the proper action. The controller will direct the actions to the Model when database access is necessary and direct it to the Views when the data requirements are satisfied. 

Every service that the server provides are in terms of actions/ methods for a particular Controller. The default means of output or feedback is through Views that correspond to the actions in the Controller. These controllers may have corresponding Models if they have need to access the database. The Models contain the relationship among the tables in the database. They provide access to database table rows as class instances. The provide access to the fields of a table as object properties.

In this manner, it would be possible to change the underlying relational database management system without altering the base code. The clients can also change web browsers or web-browsing devices without affecting the services rendered by the system.

I agree with the advantages of using MySQL or MariaDB initially to maximize compatibility with most of the databases used in IC. I recommend that  Aurora MySQL RDMS be used when moving operations into the cloud. I also recommend a migration to the PostgreSQL database at some point prior to developing the part of workflow automation where a lot of computation will be necessary. MySQL is best for text heavy databases such as blogs and websites. PostgreSQL tends to excel more for Information Systems (IS). 

MVC allows a degree of separation between the front end of the system and its backend. This will be especially be useful when aesthetics and usability improvements are desired while making sure that the underlying data and logic are kept safe during the implementation of the changes. 

We recommend the MVC framework Laravel for the purpose of IC, where there are I.S. division already has skills in the underlying technologies of the framework and will find it easy to adapt. I recommend switching all development to a framework as soon as possible to make all the resulting systems more scalable, maintainable and future-proof. 


### REST Pattern

Implementing the web application using the framework of Representational State Transfer maximizes scalability of multi-developer multi-group contribution and access. It makes the system resilient with respect to changes in the services requested by the Clients , while having the Server keep assumptions about Clients at a minimum.

The REST patternv allows expansion in complexity through adding layers between the Client and the Server with each layer only interacting with the one immediately above or below it. This makes it easier for the system to work with proxy servers and network gateways.

The REST patterns imposes some other important constraints such as being stateless and having a uniform interface. Using Laravel's resource controller route allows automatically generated and thus, uniform interfaces, so that other developers can safely and easily request for server resources. This will allow multiple IC or non-IC developers to work on a single project together. This will also allow future developers to continue the work of former developers that may have left the service of IC. 

It is important to keep in mind that all requests must be sending a representation of what is required and not commands to the server. The server will still have the ability to ignore or serve the request. Also, the server can send hypermedia, or invitations to access other services or resources from the server. The server provide or push any unrequested service to the Client. 




## Process View

## Environment and Deployments

## Deployment View

## Implementation View


