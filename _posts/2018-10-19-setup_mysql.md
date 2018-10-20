---
layout: post
title: "Setting Up MySQL in Ubuntu 18.04"	
remarks: quick guide
categories: Teaching
tags: 
- soft_engg
---

Go to the terminal

    sudo apt-get install mysql-server mysql-client libmysqlclient-dev


* libmysqlclient-dev allows you to compile useful plugins for mysql use.




As there is no password set for root user, simply login with blank password

```
sudo mysql -u root -p
Enter password: (press enter as no password is set)
```

after then can easily run query

    ALTER USER 'root'@'locahost' IDENTIFIED BY '<password>';

