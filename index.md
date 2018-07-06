---
layout: default
title: roycan
---
<div class="blurb">
	<h1>Hi there, I'm Roy Canseco!</h1>
		<p>I teach <em> Infomation Systems </em> using Inclusive Programming. <a href="/about">More on this...</a></p>
</div><!-- /.blurb -->

#### hope, dream, love...

<hr>


<h2 class="post_title">Tags</h2>
<ul>
  {% for post in site.posts %}
  {% for tag in post.tags %}


   
      <li class="inline archive_list"><a class="tag_list_link" href="/tag/{{ tag }}">{{ tag }}</a></li>


  {% endfor %}
  {% endfor %}
</ul>