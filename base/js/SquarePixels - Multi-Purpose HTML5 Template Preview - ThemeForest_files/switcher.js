  jQuery(document).ready(function($) {
    $("#switcher-handle > #handle").toggle
  (
    function()
    {
      $('#switcher-handle').animate({left:'0px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').addClass('out');
    }
    ,function()
    {
      $('#switcher-handle').animate({left:'-212px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').removeClass('out');
    }
  );
    
    $('#style-switcher a.color-box').each(function (i) {
        var a = $(this);
        a.css({
            backgroundColor: '#' + a.attr('data-rel')
        })
    })    
    

   var switcher_skins = $('#style-switcher a.color-box');
   var switcher_link = $('#color-variation');
   switcher_skins.each(function(i) {
    var color = $(this).attr('data-rel');
    
  });  
   
     /*STYLESHEETS LOAD STARTS*/ 
   switcher_skins.click(function(e) {
    var color = $(this).attr('data-rel');
    var color_name = $(this).attr('data-name');
    var skins;
    var defaultPattern = "url(images/background-patterns/body-bg-1.jpg)";
    var defaultHeaderPattern = "url(images/header-patterns/header-pattern-01.png)";
  
 



    if (color_name == "orange-corporate-fullwidth") {
      switcher_link.attr('href',"css/switcher-orange-corporate.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "orange-corporate-boxed") {
      switcher_link.attr('href',"css/switcher-orange-corporate-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 
   


    if (color_name == "blue-corporate-fullwidth") {
      switcher_link.attr('href',"css/switcher-blue-corporate.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "blue-corporate-boxed") {
      switcher_link.attr('href',"css/switcher-blue-corporate-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 

        if (color_name == "red-corporate-fullwidth") {
      switcher_link.attr('href',"css/switcher-red-corporate.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "red-corporate-boxed") {
      switcher_link.attr('href',"css/switcher-red-corporate-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 

  if (color_name == "green-corporate-fullwidth") {
      switcher_link.attr('href',"css/switcher-green-corporate.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "green-corporate-boxed") {
      switcher_link.attr('href',"css/switcher-green-corporate-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 
 


   if (color_name == "light-orange-fullwidth") {
      switcher_link.attr('href',"css/switcher-light-orange.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "light-orange-boxed") {
      switcher_link.attr('href',"css/switcher-light-orange-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 

       if (color_name == "light-green-fullwidth") {
      switcher_link.attr('href',"css/switcher-light-green.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "light-green-boxed") {
      switcher_link.attr('href',"css/switcher-light-green-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


      if (color_name == "pure-blue-fullwidth") {
      switcher_link.attr('href',"css/switcher-pure-blue.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "pure-blue-boxed") {
      switcher_link.attr('href',"css/switcher-pure-blue-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 



   if (color_name == "yellow-theme-fullwidth") {
      switcher_link.attr('href',"css/switcher-yellow-theme.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "yellow-theme-boxed") {
      switcher_link.attr('href',"css/switcher-yellow-theme-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


     if (color_name == "blue-theme-fullwidth") {
      switcher_link.attr('href',"css/switcher-blue-theme.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "blue-theme-boxed") {
      switcher_link.attr('href',"css/switcher-blue-theme-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


      if (color_name == "darker-blue-fullwidth") {
      switcher_link.attr('href',"css/switcher-darker-blue.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "darker-blue-boxed") {
      switcher_link.attr('href',"css/switcher-darker-blue-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


     if (color_name == "light-blue-fullwidth") {
      switcher_link.attr('href',"css/switcher-light-blue.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "light-blue-boxed") {
      switcher_link.attr('href',"css/switcher-light-blue-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


      if (color_name == "pink-theme-fullwidth") {
      switcher_link.attr('href',"css/switcher-pink-theme.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "pink-theme-boxed") {
      switcher_link.attr('href',"css/switcher-pink-theme-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 


     if (color_name == "purple-theme-fullwidth") {
      switcher_link.attr('href',"css/switcher-purple-theme.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "purple-theme-boxed") {
      switcher_link.attr('href',"css/switcher-purple-theme-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 

       if (color_name == "darker-red-fullwidth") {
      switcher_link.attr('href',"css/switcher-darker-red.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "darker-red-boxed") {
      switcher_link.attr('href',"css/switcher-darker-red-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 

    if (color_name == "lime-theme-fullwidth") {
      switcher_link.attr('href',"css/switcher-lime-theme.css");
      var atrrHref = switcher_link.attr('href');

    } 
   if (color_name == "lime-theme-boxed") {
      switcher_link.attr('href',"css/switcher-lime-theme-boxed.css");
      var atrrHref = switcher_link.attr('href');
        
    } 
  /*STYLESHEETS LOAD ENDS*/
  

     
    $.cookie("portable_cookie_pattern", null);   
    $.cookie("portable_cookie_bgimage",null);
    $.cookie("portable_cookie_color", color);  
    $.cookie("portable_cookie_skins", atrrHref);
    $.cookie("portable_cookie_defaultBg", defaultPattern);    
    return false;
   });  
   
  var color = $.cookie("portable_cookie_color");
  var portable_skins = $.cookie("portable_cookie_skins");
  var defaultPattern = $.cookie("portable_cookie_defaultBg");
  var pattern = $.cookie("portable_cookie_pattern");

    $('#style-switcher a.bg-box').each(function (i) {
    var backgroundUrl = 'url(images/background-patterns/' + $(this).attr('data-rel') + '.jpg)';
    var a = $(this);
      a.css({
          backgroundImage: backgroundUrl
      })
  })
    
  $('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var backgroundUrl = 'url(images/background-patterns/' + $(this).attr('data-rel') + '.jpg)';
      $('body').css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "repeat",
        
        
      });
    $.cookie("portable_cookie_bgimage",backgroundUrl)
  });

  var background = $.cookie("portable_cookie_bgimage");
  if (background) {
      $('body').css({
        backgroundImage: background,
        backgroundRepeat: "repeat",
      
      
      });
  }
    
 
  
});   
 