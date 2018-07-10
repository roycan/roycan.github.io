---
layout: default
title: roycan
---

<div class="blurb">
	<h1>~>roycan</h1>
		<p>I teach <em> Infomation Systems </em> using Inclusive Programming. <a href="/about">More on this...</a></p>
</div><!-- /.blurb -->

#### hope, dream, love...

<hr>


<h2 class="post_title">Categories</h2>

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>
    
    <h3 class="category-head"> <a href="/my_categories/{{ category_name }}.html" > {{ category_name }} </a></h3>
    
  </div>
{% endfor %}
</div>