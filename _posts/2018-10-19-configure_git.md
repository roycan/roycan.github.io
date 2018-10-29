---
layout: post
title: "Setup Git and Github"	
remarks: "quick guide"
categories: Teaching
tags: 
- soft_engg
---

have a Github account, make sure to [register](https://github.com/).

download and install [git for windows](https://github.com/git-for-windows/git/releases/)

```bash
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"
```

* leave the file path as is
* leave the password empty
