---
layout: default
slug: Skills
title: Skills
---

# {{ page.title }}

{% for post in site.categories.Skills %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}