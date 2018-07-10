---
layout: default
slug: Research
title: Research
---

# {{ page.title }}

{% for post in site.categories.Research %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}