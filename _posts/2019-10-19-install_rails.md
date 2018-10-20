---
layout: post
title: "Install rails in Ubuntu 18.04"	
remarks: quick guide
categories: Teaching
tags: 
- soft_engg
---


# Install Ruby

 first  install some dependencies for Ruby and Rails.

start by adding the Node.js and Yarn repositories


```bash
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
```

Install using rbenv, which sets up a controlled version environment for ruby.

```bash
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.5.1
rbenv global 2.5.1
ruby -v
```

install Bundler

    gem install bundler

rbenv users need to run rbenv rehash after installing bundler.

    rbenv rehash


# Configuring Git

*see the article on [Configuring Git](2018-10-19-configure_git.md)

# Setting Up MySQL

*see the article on [Setting Up MySQL](2018-10-19-setup_mysql.md)

Rails ships with sqlite3 as the default database. This is good only for simple and small databases. 

MySQL is much much better, especially when you're coming from a background of PHP.

Use the software repo to install and take note of the password you set and update the database.yml file.


# Setting Up PostgreSQL

*see the article on [Setting Up PostgreSQL](2018-10-19-setup_postgresql.md)

PostgreSQL is even better than MySQL for normal implementations of Rails Web applications.

Use the software repo to install and take note of the password you set and update the database.yml file.


# Inspect if everything works

```bash
#### If you want to use SQLite (not recommended)
rails new myapp

#### If you want to use MySQL
rails new myapp -d mysql

#### If you want to use Postgres
# Note that this will expect a postgres user with the same username
# as your app, you may need to edit config/database.yml to match the
# user you created earlier
rails new myapp -d postgresql

# Move into the application directory
cd myapp

# If you setup MySQL or Postgres with a username/password, modify the
# config/database.yml file to contain the username/password that you specified

# Create the database
rake db:create

rails server
```

visit http://localhost:3000 to view your new website