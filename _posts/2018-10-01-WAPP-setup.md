---
layout: post
title: "WAPP Setup"	
remarks: install guide
categories: Teaching
tags: 
- soft_engg
---


We want to setup Windows for PHP and PostgreSQL development with an Apache Server and phppgadmin.

* Install WAPP stack from Bitnami
* Login to phppgadmin
  * username is postgres
  * password is the what you put during install
* place an alias in your user's .bashrc
    * alias wapp="cd C:/Bitnami/wappstack-7.1.22-0/apache2/htdocs"
* edit php.ini (C:\Bitnami\wappstack-7.1.22-0\php)
    * search for  **display_errors**
    * you should find 2 or 3 instances
        * turn display_errors ON
* use the function versions of the connection code
    * OO are problematic here 
    * e.g. use  *pg_close($conn);*
    * instead of *$conn->close();*


## opcache error

This is when you updated the code but the effect just doesn't reflect as fast as expected

~~~~
"To get started with Bitnami LAMP Stack we suggest the following:"
(Jun '15  pheelixx)

Caching is enabled on this LAMP / LAPP / Ruby Stack using the following two methods:

1) Google PageSpeed Module is enabled by these lines in {$INSTALL_DIR}/apache2/conf/httpd.conf:

Include conf/pagespeed.conf
Include conf/pagespeed_libraries.conf
Comment those lines out to disable this module.

2) PHP has Op Cache enabled by these lines in {$INSTALL_DIR}/php/etc/php.ini:

opcache.enable=1
opcache.enable_cli=1
Disable those by making them = 0 instead.

Important: You will need to disable both caches to remove caching
~~~~

I did the opcache fix and for my case that was enough.  :) 

## things to download

 1. bluefish
 2. xampp
 3. wapp
 4. rails for windows   
