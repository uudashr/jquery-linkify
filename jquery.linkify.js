function linkify(string, buildHashtagUrl) {
  string = string.replace(/(http|https|ftp)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*/gi, "<a href=\"$&\">$&</a>");
  if (buildHashtagUrl) {
    string = string.replace(/\B#(\w+)/g, "<a href=" + buildHashtagUrl("$1") +">#$1</a>");
  }
  return string;
}

(function($) {
  $.fn.linkify = function(buildHashtagUrl) {
    return this.each(function() {
      var $this = $(this);
      $this.html(linkify($this.html(), buildHashtagUrl));
    });
  }
})(jQuery);