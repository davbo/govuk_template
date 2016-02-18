(function() {
  "use strict"

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var d=document,
          c="appendChild",
          a=d.createElement("style");
      a[c](d.createTextNode("@-ms-viewport{width:auto!important}"));
      d.getElementsByTagName("head")[0][c](a);
  }

  document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');


  // add cookie message
  if (window.GOVUK && GOVUK.addCookieMessage) {
    GOVUK.addCookieMessage();
  }

  // header navigation toggle
  if (document.querySelectorAll && document.addEventListener){
    var els = document.querySelectorAll('.js-header-toggle'),
        i, _i;
    for(i=0,_i=els.length; i<_i; i++){
      els[i].addEventListener('click', function(e){
        e.preventDefault();
        var target = document.getElementById(this.getAttribute('href').substr(1)),
            targetClass = target.getAttribute('class') || '',
            sourceClass = this.getAttribute('class') || '';

        if(targetClass.indexOf('js-visible') !== -1){
          target.setAttribute('class', targetClass.replace(/(^|\s)js-visible(\s|$)/, ''));
        } else {
          target.setAttribute('class', targetClass + " js-visible");
        }
        if(sourceClass.indexOf('js-hidden') !== -1){
          this.setAttribute('class', sourceClass.replace(/(^|\s)js-hidden(\s|$)/, ''));
        } else {
          this.setAttribute('class', sourceClass + " js-hidden");
        }
      });
    }
  }
}).call(this);
