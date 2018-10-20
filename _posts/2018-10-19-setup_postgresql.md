---
layout: post
title: "Setting Up PostgreSQL in Ubuntu 18.04"	
remarks: quick guide
categories: Teaching
tags: 
- soft_engg
---


add a new repository to easily install a recent version of Postgres

```bash
sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.5 libpq-dev
```

You will now have a user named postgres with no password

```bash
sudo -u postgres psql
\q
```

 create a user with permission to create databases

```bash
sudo -u postgres createuser roycan -s

# If you would like to set a password for the user, you can do the following
sudo -u postgres psql
postgres=# \password roycan
```