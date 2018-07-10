---
layout: default
slug: Finance
title: Finance
---

# {{ page.title }}

{% for post in site.categories.Finance %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}