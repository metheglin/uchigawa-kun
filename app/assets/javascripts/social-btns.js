(function($){
  var service_conf = {
    facebook: {
      embed_html: '<div class="fb-like" data-href="\{0\}" data-colorscheme="light" data-layout="button_count" data-action="like" data-show-faces="false" data-send="false"></div>',
      script: '<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=170067429868598";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>'
    },
    twitter: {
      embed_html: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="\{0\}" data-text="\{1\}" data-lang="ja">ツイート</a>',
      script: '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");</script>'
    },
    google: {
      embed_html: '<div class="g-plusone" data-size="medium" data-href="\{0\}"></div>',
      script: '<script type="text/javascript">window.___gcfg = {lang: "ja"};(function() {var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);})();</script>'
    },
    pinterest: {
      embed_html: '<a href="//www.pinterest.com/pin/create/button/?url=\{0\}&media=\{1\}&description=" count-layout="horizontal" data-pin-do="buttonPin" data-pin-config="beside"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>',
      script: '<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>'
    }
  };

  function service_html(service, options) {
    var html = '';
    switch ( service ) {
      case 'facebook':
        html = service_conf[service]['embed_html'].format(options.url);
        break;
      case 'twitter':
        html = service_conf[service]['embed_html'].format(options.url, options.title);
        break;
      case 'google':
        html = service_conf[service]['embed_html'].format(options.url);
        break;
      case 'pinterest':
        html = service_conf[service]['embed_html'].format(options.url, options.media);
        break;
      default:
        break;
    }
    return html;
  }

  function social_btns_html(options) {
    var s_btns_html = '<ul>';
    for ( var i in options.services ) {
      var s_btn_html = '<li class="' + options.services[i] + '">';
      s_btn_html += service_html(options.services[i], options);
      s_btn_html += '</li>';
      s_btns_html += s_btn_html;
    }
    s_btns_html += '</ul>';

    return s_btns_html;
  }

  function social_btns_script(options) {
    var script = '';
    for ( var i in options.services ) {
      script += service_conf[options.services[i]]['script'];
    }
    return script;
  }

  $.fn.social_btns = function(options) {
    var defaults = {
      url: window.location.href,
      title: document.title,
      media: window.location.href,
      services: [
        'facebook', 'twitter', 'google', 'pinterest'
      ],
      custom_url_class: 'social-btns-url',
      custom_title_class: 'social-btns-title',
      custom_media_class: 'social-btns-media',
    };
    var options = $.extend(defaults, options);

    return this.each(function() {
      var $custom_url = $(this).children('.'+options.custom_url_class).hide();
      var $custom_title = $(this).children('.'+options.custom_title_class).hide();
      var $custom_media = $(this).children('.'+options.custom_media_class).hide();
      var custom = {
        url: ($custom_url.get(0)) ? $custom_url.text() : options.url,
        title: ($custom_title.get(0)) ? $custom_title.text() : options.title,
        media: ($custom_media.get(0)) ? $custom_media.text() : options.media,
      };
      options = $.extend(options, custom);
      
      $(this).html(social_btns_html(options));
      $('body').append(social_btns_script(options));
    });
  }
})(jQuery);
