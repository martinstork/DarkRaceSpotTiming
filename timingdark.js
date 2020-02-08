window.addEventListener('DOMNodeRemoved', function() {
  if (document.getElementById('darktiming_css') == null) {
    var head = document.head;
    var link = document.createElement('link');

    link.id     = 'darktiming_css';
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = chrome.extension.getURL('dark.css');
    link.media  = 'all';

    head.appendChild(link);
  }
});