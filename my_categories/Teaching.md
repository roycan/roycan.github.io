---
layout: default
slug: Teaching
title: Teaching
---

# {{ page.title }}

{% for post in site.categories.Teaching %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}