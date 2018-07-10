---
layout: default
slug: Food-Places
title: Food and Places
---

# {{ page.title }}

{% for post in site.categories.Food-Places %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}