(function($)
{
    var include_javascript = [];
    
    $.extend(true,
    {
        include : function(script)
        {
            var found = false;
            for (var i = 0; i < include_javascript.length; i++)
                if (include_javascript[i] == script) {
                    found = true;
                    break;
                }       
            if (found == false) {
                $("head").append('<script type="text/javascript" src="' + script + '"></script>');
                include_javascript.push(script);
            }
        }
    });

})
(jQuery);
jQuery.noConflict()(function($){
$(document).ready(function($) {

 $.include('js/easing/jquery.easing.1.3.js');/*EASING JS PLUGIN*/
 $.include('js/jquery-transit/jquery.transit.min.js');/*JS TRANSITIONS*/
 $.include('js/nice-scroll/nicescroll.min.js');/*JS NICESCROLL*/
 $.include('js/prettyPhoto/prettyPhoto.min.js');/*JS NICESCROLL*/
 $.include('js/fitVids/fitVids.js');/*JS NICESCROLL*/
 $.include('js/scroll-plugin/scroll.js');/*JS NICESCROLL*/
 $.include('js/instagram-plugin/instagram.js');/*JS NICESCROLL*/
 $.include('js/dribbble-plugin/dribbble.js');/*JS NICESCROLL*/
 $.include('js/twitter-plugin/twitter.js');/*JS NICESCROLL*/
 $.include('js/flickr-plugin/flickr.js');/*JS NICESCROLL*/
 $.include('js/respond/respond.js');/*JS NICESCROLL*/
 $.include('js/matchmedia/matchMedia.js');/*JS NICESCROLL*/
 $.include('js/modernizr/modernizr.js');/*JS NICESCROLL*/

if ( $('#my-cute-slider' ).length && jQuery() ) {
     $.include('js/cute/cute-slider.js');/*CUTE SLIDER JS PLUGIN AND ALL TRANSITIONS*/

  var slider = new Cute.Slider();
        slider.setup("my-cute-slider" , "cute-slider"); 
     
}

 $("a[data-rel^='prettyPhoto']").prettyPhoto({overlay_gallery: false});
  $("body").fitVids();

 /*RESPONSIVE MAIN NAVIGATION STARTS*/                          
    var $menu_select = $("<select />"); 
    $("<option />", {"selected": "selected", "value": "", "text": "Site Main Navigation"}).appendTo($menu_select);
    $menu_select.appendTo("#main-navigation,#main-navigation-2");
    $("#main-navigation ul li a,#main-navigation-2 ul li a").each(function(){
        var menu_url = $(this).attr("href");
        var menu_text = $(this).text();
        if ($(this).parents("li").length == 2) { menu_text = '- ' + menu_text; }
        if ($(this).parents("li").length == 3) { menu_text = "-- " + menu_text; }
        if ($(this).parents("li").length > 3) { menu_text = "--- " + menu_text; }
        $("<option />", {"value": menu_url, "text": menu_text}).appendTo($menu_select)
    })
    field_id = "#main-navigation select,#main-navigation-2 select";
    $(field_id).change(function()
    {
       value = $(this).attr('value');
       window.location = value; 
    });
/*RESPONSIVE MAIN NAVIGATION ENDS*/


    function niceScrollInit(){
        $("html").niceScroll({
            scrollspeed: 70,
            mousescrollstep: 45,
            cursorwidth: 10,
            cursorborder: 1,
            cursorcolor: '#7e7e7e',
            background: '#282828',
            cursorborderradius: 0,
            zindex:9999,
            autohidemode: false
        });
        
       
    }
    
    var $smoothActive = $('body').attr('data-smooth-scrolling'); 
    if( $smoothActive == 1){ niceScrollInit(); }




 /*----------------------------------------------------------*/
 /*FLEX SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '.flexslider' ).length && jQuery() ) { 

        $.include('js/flex-slider/flex-slider.min.js');/*FLEX SLIDER JS PLUGIN*/

        var target_flexslider = $('.flexslider');
        target_flexslider.flexslider({
        animation: "slide",
        controlNav: true,
        smoothHeight: true,
        directionNav: true,
        slideshowSpeed: 7000,          
        animationDuration: 5000,
        nextText:"&rsaquo;",
        prevText:"&lsaquo;",
        keyboardNav: true,
        useCSS: false,
        start: function(slider) {target_flexslider.removeClass('loading');},           
    });

        $(".flexslider").hover( function() {    
        $('.flex-direction-nav').fadeIn(200); },
        function () {$('.flex-direction-nav').fadeOut(600);}); 
    
}

/*----------------------------------------------------------*/
 /*REVOLUTION SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '.fullwidthbanner' ).length && jQuery() ) { 

       $.include('js/revolution-slider/jquery.themepunch.revolution.min.js');/*REVOLUTION SLIDER JS PLUGIN*/
       $.include('js/revolution-slider/jquery.themepunch.plugins.min.js');/*REVOLUTION SLIDER TRANSITIONS JS*/

       api =  jQuery('.fullwidthbanner').revolution({
                delay:9000,
                startheight:550,
                startwidth:1100,
                hideThumbs:300,
                thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                thumbHeight:50,
                thumbAmount:5,
                navigationType:"both",                  //bullet, thumb, none, both     (No Thumbs In FullWidth Version !)
                navigationArrows:"verticalcentered",        //nexttobullets, verticalcentered, none
                navigationStyle:"square",                //round,square,navbar
                touchenabled:"on",                      // Enable Swipe Function : on/off
                onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off
                navOffsetHorizontal:0,
                navOffsetVertical:20,
                stopAtSlide:-1,
                stopAfterLoops:-1,
                shadow:1,                               //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
                fullWidth:"off"                         // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
         });     

}
 
/*----------------------------------------------------------*/
 /*LAYER SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '#layerslider' ).length && jQuery() ) { 
        
        $.include('js/layer-slider/jquery.layerslider.js');/*LAYER SLIDER JS PLUGIN*/
       $.include('js/layer-slider/jquery-transit.js');/*LAYER SLIDER JS TRANSITIONS*/
       

        $('#layerslider').layerSlider({
                  width : '100%',
                  height : '550px',
                   responsive : true,
                   responsiveUnder : 980,
                   sublayerContainer : 1100,
                    autoStart : true,
                     pauseOnHover : true,
                     firstLayer : 1,
                    animateFirstLayer : true,
                    randomSlideshow : false,
                 twoWaySlideshow : true,
                 loops : 0,
                 forceLoopNum : true,
                 autoPlayVideos : false,
                autoPauseSlideshow : 'auto',
                keybNav : true,
                touchNav : true,
                skin : 'fullwidth',
                 skinsPath : 'css/layer-slider/skins/',

        });

}
/*----------------------------------------------------------*/
 /*CAMERA SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '#camera_wrap_1' ).length && jQuery() ) { 
        
        $.include('js/camera-slider/camera.min.js');/*CAMERA SLIDER JS PLUGIN*/
        $.include('js/camera-slider/jquery.mobile.customized.min.js');/*CAMERA MOBILE CUSTOMIZED JS*/
       
$('#camera_wrap_1').camera({
    height: '450px',
    loader: 'bar',
    pagination: true,
    thumbnails: true
 });
        

}
/*----------------------------------------------------------*/
 /*NIVO SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '#nivoSlider' ).length && jQuery() ) { 
        
        $.include('js/nivo-slider/jquery.nivo.slider.pack.js');/*NIVO SLIDER JS PLUGIN*/
       $('#nivoSlider').nivoSlider();
                
        

}
/*----------------------------------------------------------*/
 /*CAROUSEL SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( '#projects-carousel-1,#projects-carousel-2,#projects-carousel-3' ).length && jQuery() ) { 
        
        $.include('js/carousel/jquery.jcarousel.min.js');/*CAROUSEL SLIDER JS PLUGIN*/

            (function() {

        var $carousel = $('#projects-carousel-1,#projects-carousel-2,#projects-carousel-3');

        if( $carousel.length ) {

            var scrollCount;

            if( $(window).width() < 480 ) {
                scrollCount = 1;
            } else if( $(window).width() < 768 ) {
                scrollCount = 1;
            } else if( $(window).width() < 960 ) {
                scrollCount = 3;
            } else {
                scrollCount = 4;
            }

            $carousel.jcarousel({
                animation : 600,
                easing    : 'easeOutCirc',
                scroll    : scrollCount
            });

        }

    })();
}
/*----------------------------------------------------------*/
 /*SLIDES JS  SLIDER*/
 /*----------------------------------------------------------*/
 if ( $( 'ul#testimonials-slider,ul#testimonials-slider-small' ).length && jQuery() ) { 
        
        $.include('js/testimonial-slider/jquery.bxslider.min.js');/*CAROUSEL SLIDER JS PLUGIN*/
    
  

  $('ul#testimonials-slider,ul#testimonials-slider-small').bxSlider({
  mode: 'horizontal',
  easing: 'easeOutElastic',
  controls: false,
  speed: 1500
});
     
}

/*----------------------------------------------------------*/
 /*COUNTDOWN JS */
 /*----------------------------------------------------------*/
 if ( $( '#countdown' ).length && jQuery() ) { 
        
        $.include('js/countdown/jquery.countdown.js');/*COUNTDOWN  JS PLUGIN*/

          countDownDate = new Date( 2014, 0, 1 );
         $('#countdown').countdown({until: countDownDate});  
}



/*----------------------------------------------------------*/
 /*VIDEO / AUDIO PLAYER JS */
 /*----------------------------------------------------------*/
 if ( $( '#jquery_jplayer_1,#jquery_jplayer_5160823f52213' ).length && jQuery() ) { 
        
        $.include('js/player/jquery.jPlayer.min.js');/*VIDEO / AUDIO PLAYER  JS PLUGIN*/
        $.include('js/player/jquery.jPlayer.playlist.min.js');/*VIDEO / AUDIO PLAYER  PLAYLIST JS*/
        

        $("#jquery_jplayer_1").jPlayer({
          ready: function () {
            $(this).jPlayer("setMedia", {
                m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
                ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
            });
        },
        swfPath: "js",
        supplied: "webmv, ogv, m4v",
        size: {
            width: "640px",
            height: "360px",
            cssClass: "jp-video-360p"
        }
    });




    jQuery('#jquery_jplayer_5160823f52213').jPlayer( {
        ready : function () {
            jQuery(this).jPlayer('setMedia',
            {
                m4a : 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a'
            });
        },
        cssSelectorAncestor : '#jp_container_5160823f52213',
        swfPath : 'http://halsey.cmsmasters.net/wp-content/themes/halsey/css/',
        supplied : 'mp3, m4a, ogg, oga, webm, webma, wav',
        wmode : 'window'
    });

}
/*----------------------------------------------------------*/
 /*FORMS JS */
 /*----------------------------------------------------------*/
 if ( $( ':checkbox' ).length && jQuery() ) { 
        
        $.include('js/forms/jquery.icheck.min.js');/*COUNTDOWN  JS PLUGIN*/

          var callbacks_list = $('.demo-callbacks ul');
            function callback_log(id, type) {
              $('.demo-callbacks ul').prepend('<li><span>#' + id + '</span> is ' + type.toLowerCase() + '</li>');
            };
            $('.list input').bind('is.Created is.Clicked is.Changed is.Checked is.Unchecked is.Disabled is.Enabled is.Destroyed', function(event){
              callback_log(this.id, event.namespace);
            }).iCheck({
              checkboxClass: 'icheckbox_flat',
              radioClass: 'iradio_flat',
              increaseArea: '20%'
            });
           
}
/*----------------------------------------------------------*/
 /*ISOTOPE JS */
 /*----------------------------------------------------------*/
 if ( $( '.portfolio-items,.blog-masonry-layout' ).length && jQuery() ) { 
        
        $.include('js/isotope/isotope.min.js');/*COUNTDOWN  JS PLUGIN*/

        (function() {
        var $container = $('.portfolio-items');
        if( $container.length ) {
            var $itemsFilter = $('#filterable');    
            $('li', $container).each(function(i) {
                var $this = $(this);
                $this.addClass( $this.attr('data-categories') );
            });
            $(window).on('load', function() {
                $container.isotope({
                    itemSelector : 'li',
                    layoutMode   : 'fitRows'
                });
            });
            $itemsFilter.on('click', 'a', function(e) {
                var $this = $(this),
                currentOption = $this.attr('data-categories');
                $itemsFilter.find('a').removeClass('active');
                $this.addClass('active');
                if( currentOption ) {
                    if( currentOption !== '*' ) currentOption = currentOption.replace(currentOption, '.' + currentOption)
                    $container.isotope({ filter : currentOption });
                }
                e.preventDefault();
            });
            $itemsFilter.find('a').first().addClass('active');
        }
    })();



(function() {
        var $container = $('.blog-masonry-layout');
        if( $container.length ) {
            $(window).on('load', function() {
                $container.isotope({
                    itemSelector : 'article',
                    layoutMode   : 'masonry'
                });
            });
        }
    })();
 

}
/*----------------------------------------------------------*/
 /*CONTACT FORM JS */
 /*----------------------------------------------------------*/
 if ( $( 'form#contact-form' ).length && jQuery() ) { 
        
        $('form#contact-form').submit(function() {
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected');
}
$('form#contact-form .error').remove();
var hasError = false;
$('.requiredField').each(function() {
if(jQuery.trim($(this).val()) == '') {
 var labelText = $(this).prev('label').text();
 $(this).parent().append('<div class="error">You forgot to enter '+labelText+'</div>');
 $(this).addClass('inputError');
 hasError = true;
 } else if($(this).hasClass('email')) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 if(!emailReg.test(jQuery.trim($(this).val()))) {
 var labelText = $(this).prev('label').text();
 $(this).parent().append('<div class="error">You entered an invalid '+labelText+'</div>');
 $(this).addClass('inputError');
 hasError = true;
 }
 }
});
if(!hasError) {
$('form#contact-form input.submit').fadeOut('normal', function() {
$(this).parent().append('');
});
var formInput = $(this).serialize();
$.post($(this).attr('action'),formInput, function(data){
$('#contact-form').prepend('<div class="success">Your email was successfully sent. We will contact you as soon as possible.</div>');
resetForm($('#contact-form'));
$('.success').fadeOut(5000);
 
});
}
return false;
});
        
}
/*----------------------------------------------------------*/
 /*FORMS JS */
 /*----------------------------------------------------------*/
 if ( $( ':checkbox' ).length && jQuery() ) { 
        
        $.include('js/forms/jquery.icheck.min.js');/*COUNTDOWN  JS PLUGIN*/

          var callbacks_list = $('.demo-callbacks ul');
            function callback_log(id, type) {
              $('.demo-callbacks ul').prepend('<li><span>#' + id + '</span> is ' + type.toLowerCase() + '</li>');
            };
            $('.list input').bind('is.Created is.Clicked is.Changed is.Checked is.Unchecked is.Disabled is.Enabled is.Destroyed', function(event){
              callback_log(this.id, event.namespace);
            }).iCheck({
              checkboxClass: 'icheckbox_flat',
              radioClass: 'iradio_flat',
              increaseArea: '20%'
            });
           
}
/*----------------------------------------------------------*/
 /*SKILLS BAR JS */
 /*----------------------------------------------------------*/
 if ( $( '.bar_graph' ).length && jQuery()) { 
    function animateBar(){
        $('.bar_graph li').each(function(i){
            var percent = $(this).find('span').attr('data-width');
            
                $(this).find('span').animate({
                    'width' : percent + '%'
                },1700, 'easeOutCirc');
        });
    }
    if( $('.bar_graph').length > 0 ){
        animateBar();
        $(window).scroll(animateBar);   
    } 
}

/*----------------------------------------------------------*/
 /*WIDGETS - TWITTER, DRIBBBLE,INSTAGRAM,FLICKR */
 /*----------------------------------------------------------*/

  if ( $( '.twitter-footer-widget' ).length && jQuery()) {
$('.twitter-footer-widget').jTweetsAnywhere({
    searchParams: ['q=trendywebstar'],
    count: 1,
    showTweetFeed: {
        paging: { mode: 'prev-next' }
    }
});
 }


   if ( $( '.twitter-widget' ).length && jQuery()) {
$('.twitter-widget').jTweetsAnywhere({
    searchParams: ['q=trendywebstar'],
    count: 1,
    showTweetFeed: {
        paging: { mode: 'prev-next' }
    }
});
 }
       $('.flickr-widget').jflickrfeed({
    limit: 6,
    qstrings: {
        id: '52617155@N08'
    },
    itemTemplate:
    '<li>' +
        '<a data-rel="prettPhoto" href="{{image}}" title="{{title}}">' +
            '<img src="{{image_s}}" alt="{{title}}" />' +
        '</a>' +
    '</li>'
}, function(data) {
    $('.flickr-widget a').prettyPhoto();
});
  /*INSTAGRAM PHOTOS FEEDS STARTS*/
   var clientId = 'baee48560b984845974f6b85a07bf7d9';  
      $(".instagram-widget").instagram({
        hash: 'envato',
        show: 6,
        clientId: clientId
      });
/*INSTAGRAM PHOTOS FEEDS ENDS*/ 

 /*DRIBBBLE SHOTS JQUERY STARTS*/   
     $.jribbble.getShotsByPlayerId('trendywebstar', function (playerShots) {
        var html = [];
        $.each(playerShots.shots, function (i, shot) {
            html.push('<li>');
            html.push('<a href="' + shot.url + '" target="_blank"><span></span>');
            html.push('<img src="' + shot.image_teaser_url + '" ');
            html.push('alt="' + shot.title + '"></a></li>');
        }); 
        $('.dribbble-widget').html(html.join(''));
    }, {page: 1, per_page: 6});    
 /*DRIBBBLE SHOTS JQUERY ENDS*/ 

/*----------------------------------------------------------*/
 /*GOOGLE MAPS */
 /*----------------------------------------------------------*/
if ( $( '#google-map' ).length && jQuery() ) {

         $.include('js/map/map.min.js');/*COUNTDOWN  JS PLUGIN*/
        
        var $map = $('#google-map');
            $map.gMap({
            address: 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia', 
            zoom: 16,
            markers: [{ 'address' : 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia' }, ]  

            });
}
/*----------------------------------------------------------*/
 /*MAIN NAVIGATION */
 /*----------------------------------------------------------*/
  if ( $( '#main-navigation,#main-navigation-2' ).length && jQuery() ) {

         $.include('js/nav/navigation.min.js');/*COUNTDOWN  JS PLUGIN*/

        $('ul.main-menu').superfish({ 
            delay:       100,                            // one second delay on mouseout 
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
            speed:       'fast',                          // faster animation speed 
            autoArrows:  false                           // disable generation of arrow mark-up 
        });

        jQuery("#main-navigation ul li a").hover(function(){
        if (jQuery.support.transition){ 
            jQuery(this).children('span.nav_icon').transition({ opacity: 1, perspective: '1000px', rotateY: '180deg' });
        }else{
            jQuery(this).children('span.nav_icon').animate({ opacity: 1 });
        }
    }, function(){
        if (jQuery.support.transition){ 
            jQuery(this).children('span.nav_icon').transition({ opacity: 1, perspective: '1000px', rotateY: '0deg' });
        }else{
            jQuery(this).children('span.nav_icon').animate({ opacity: 1 });
        }   
    });
}


/*----------------------------------------------------------*/
 /*ACCORDIONS  STARTS */
/*----------------------------------------------------------*/
initAccordion();
function initAccordion() {
    jQuery('.accordion-item').each(function(i) {
        var item=jQuery(this);
        item.find('.accordion-content').slideUp(0);
        item.find('.accordion-switch').click(function() {
         var displ = item.find('.accordion-content').css('display');
         item.closest('ul').find('.accordion-switch').each(function() {
          var li = jQuery(this).closest('li');
          li.find('.accordion-content').slideUp(300);
          jQuery(this).parent().removeClass("selected");
         });
         if (displ=="block") {
          item.find('.accordion-content').slideUp(300) 
          item.removeClass("selected");
         } else {
          item.find('.accordion-content').slideDown(300) 
          item.addClass("selected");
         }
        });
    });
} 
initAccordionLayout2();
function initAccordionLayout2() {
    jQuery('.accordion-item-simple').each(function(i) {
        var item=jQuery(this);
        item.find('.accordion-content').slideUp(0);
        item.find('.accordion-switch').click(function() {
         var displ = item.find('.accordion-content').css('display');
         item.closest('ul').find('.accordion-switch').each(function() {
          var li = jQuery(this).closest('li');
          li.find('.accordion-content').slideUp(300);
          jQuery(this).parent().removeClass("selected");
         });
         if (displ=="block") {
          item.find('.accordion-content').slideUp(300) 
          item.removeClass("selected");
         } else {
          item.find('.accordion-content').slideDown(300) 
          item.addClass("selected");
         }
        });
    });
}

initAccordionToggle();
function initAccordionToggle() {
    jQuery('.accordion-item-toggle').each(function(i) {
        var item=jQuery(this);
        item.find('.accordion-content-toggle').slideUp(0);
        item.find('.accordion-switch-toggle').click(function() {
         var displ = item.find('.accordion-content-toggle').css('display');
         item.closest('ul').find('.accordion-switch-toggle').each(function() {
          var li = jQuery(this).closest('li');
            item.removeClass("selected");
         });
         if (displ=="block") {
          item.find('.accordion-content-toggle').slideUp(300) 
          item.removeClass("selected");
         } else {
          item.find('.accordion-content-toggle').slideDown(300) 
          item.addClass("selected");
          
         }
        });
    });
}
/*----------------------------------------------------------*/
 /*TABS  STARTS */
/*----------------------------------------------------------*/
        (function() {
        var $tabsNav    = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li'),
        $tabContent = $('.tab-content');
        $tabContent.hide();
        $tabsNavLis.first().addClass('active').show();
        $tabContent.first().show();
        $tabsNavLis.on('click', function(e) {
        var $this = $(this);
        $tabsNavLis.removeClass('active');
        $this.addClass('active');
        $tabContent.hide();     
        $( $this.find('a').attr('href') ).fadeIn(700);
        e.preventDefault();
        });
    })();


       (function() {
        var $tabsNav    = $('.tabs-nav-2'),
        $tabsNavLis = $tabsNav.children('li'),
        $tabContent = $('.tab-content-2');
        $tabContent.hide();
        $tabsNavLis.first().addClass('active').show();
        $tabContent.first().show();
        $tabsNavLis.on('click', function(e) {
        var $this = $(this);
        $tabsNavLis.removeClass('active');
        $this.addClass('active');
        $tabContent.hide();     
        $( $this.find('a').attr('href') ).fadeIn(700);
        e.preventDefault();
        });
    })();


     (function() {
        var $tabsNav    = $('.tabs-nav-3'),
        $tabsNavLis = $tabsNav.children('li'),
        $tabContent = $('.tab-content-3');
        $tabContent.hide();
        $tabsNavLis.first().addClass('active').show();
        $tabContent.first().show();
        $tabsNavLis.on('click', function(e) {
        var $this = $(this);
        $tabsNavLis.removeClass('active');
        $this.addClass('active');
        $tabContent.hide();     
        $( $this.find('a').attr('href') ).fadeIn(700);
        e.preventDefault();
        });
    })();
/*----------------------------------------------------------*/
 /*STICKY NAVIGATION  */
/*----------------------------------------------------------*/
 
 var aboveHeight = $('#copyrights').outerHeight();
        $(window).scroll(function(){
         if ($(window).scrollTop() > aboveHeight && $(window).width() > 959 )  {
                $('#header-wrapper').addClass('sticky');
                $('body').addClass('empty-space');
                
                } 
                                else {
           
                $('#header-wrapper').removeClass('sticky');
                                 $('body').removeClass('empty-space');
                                 
                }
        });
 
/*----------------------------------------------------------*/
 /*TOOLTIPS  */
/*----------------------------------------------------------*/


  if ( $( '.tooltip' ).length && jQuery() ) {

        $.include('js/tooltip/tooltip.min.js');/*TOOLTIP  JS PLUGIN*/

        $('.tooltip').tooltipster({ 
                animation: 'grow',
                trigger: 'hover',
                 theme: '.my-custom-theme'
        });
}

/*----------------------------------------------------------*/
 /*TYPEAHEAD  */
/*----------------------------------------------------------*/
  if ( $( '.typeahead' ).length && jQuery() ) {

        $.include('js/typeahead/typeahead.min.js');/*TYPEAHEAD  JS PLUGIN*/

        $('.typeahead').typeahead({                                
          name: 'search-dummy-data',                                                          
          prefetch: 'js/search-dummy-data.json',                                         
          limit: 10                                                                   
        });
         
}

/*----------------------------------------------------------*/
 /*STYLED ICONS HOVER EFFECTS  */
/*----------------------------------------------------------*/
  $('.colored-icon,.colored-icon-2,.colored-icon-3,.colored-icon-4,.colored-icon-5,.colored-icon-6,.colored-icon-7,.colored-icon-8,.colored-icon-9').hover(function() {
            $(this).transition({ scale: 1.1 });
        }, function() {
            $(this).transition({ scale: 1 });
        });

/*----------------------------------------------------------*/
 /*PORTFOLIO ITEMS HOVER EFFECTS  */
/*----------------------------------------------------------*/
   $('.screen-roll').hover(function() {
            $(this).find('span.hover_bg, span.hover_bg_video').animate({opacity:1}, 200);
        }, function() {
            $(this).find('span.hover_bg,span.hover_bg_video').stop(0,0).animate({opacity: 0}, 200);
        });


          $('.portfolio-hover-content').hover(function() {
            $(this).animate({opacity:1}, 600);

        }, function() {
            $(this).stop(0,0).animate({opacity: 0}, 300);
      
        });



 hover_effect();
      function hover_effect() {  
    $(' .portfolio-item-hover-content').hover(function() {
            $(this).find('div,a').stop(0,0).removeAttr('style');
            $(this).find('.hover-options').animate({opacity: 0.9}, 'fast');
            $(this).find('a').animate({"top": "41%" });
        }, function() {
            $(this).find('.hover-options').stop(0,0).animate({opacity: 0}, "fast");
            $(this).find('a').stop(0,0).animate({"top": "150%"}, "slow");
            $(this).find('a.zoom,a.read-more').stop(0,0).animate({"top": "150%"}, "slow");
 
        });
        }


 
/*----------------------------------------------------------*/
 /*PORTFOLIO ITEM TRANSITION EFFECTS  */
/*----------------------------------------------------------*/
       jQuery(".portfolio-item .item-holder-main").hover(function(){
        if (jQuery.support.transition){ 
            jQuery(this).children('.portfolio-hover-content-flip').transition({ opacity: 1, perspective: '1000px', rotateY: '360deg' });
        }else{
            jQuery(this).children('.portfolio-hover-content-flip').animate({ opacity: 0 });
        }
    }, function(){
        if (jQuery.support.transition){ 
            jQuery(this).children('.portfolio-hover-content-flip').transition({ opacity: 0, perspective: '1000px', rotateY: '0deg' });
        }else{
            jQuery(this).children('.portfolio-hover-content-flip').animate({ opacity: 0 });
        }   
    }); 


});
});