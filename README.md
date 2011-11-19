Linkify jQuery Plugin
=====================

Linkify is jQuery plugin to formatting the text that contains URL or hashtag into a clickable HTML content.

Usage
=====

Include the plugin script
<pre>
<script src="jquery.linkify.js" type="text/javascript"></script>
</pre>

<pre>
$("#content").linkify();
</pre>
  
or to enable the hashtag link

<pre>
function toHashtagUrl(hashtag) {
  return "http://myservice.com?q=" + hashtag;
}

$("#content-with-hashtag").linkify(toHashtagUrl);
</pre>