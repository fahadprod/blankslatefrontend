$(document).ready(function(){ 
    /* ---------------------------------------------------------------------- */
    /*  Menu
    /* ---------------------------------------------------------------------- */
    
    // Needed variables
    var $content    = $("#content");
    
    // Run easytabs
      $content.easytabs({
      animate     : true,
      updateHash    : false,
      transitionIn    :'slideDown',
      transitionOut   :'slideUp',
      animationSpeed  :600,
      tabs        :".tmenu",
      tabActiveClass  :'active',
    });

    // Logo
//  var $logo   = $('#logo');

//  if (location.href.indexOf("#") != -1) {
//      $logo.show();
//  }
// // Show logo 
// $('.menu .tabs a').click(function() {
//  $logo.fadeIn('slow');
// });
// // Hide logo
// $('.tab-profile').click(function() {
//  $logo.fadeOut('slow');
// });
  
    }); 
    $("#yellow-color").click(function (e) {
        $(".main-wrapper-resume").attr("id", "yellow");
  })
    
        $("#red-color").click(function (e) {
        $(".main-wrapper-resume").attr("id", "red");
            })
        $("#blue-color").click(function (e) {
        $(".main-wrapper-resume").attr("id", "blue");
  })
        $("#green-color").click(function (e) {
        $(".main-wrapper-resume").attr("id", "green");
            })
    $(".setting-icon").click(function () {
        $(".color-box").toggleClass("main");
    }) 

var $catsfilter        = $('.cats-filter');

    // Copy categories to item classes
    $catsfilter.find('a').click(function() {
        var currentOption = $(this).attr('data-filter');
        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');
    }); 
    // Needed variables
    var $plist      = $('#portfolio-list');
    var $pfilter        = $('#portfolio-filter');
        
    // Run Isotope  
    $plist.isotope({
        filter              : '*',
        layoutMode          : 'masonry',
        animationOptions    : {
        duration            : 750,
        easing              : 'linear'
    }
    }); 
// Isotope Filter 
$pfilter.find('a').click(function(){
    var selector = $(this).attr('data-filter');
        $plist.isotope({ 
        filter              : selector,
        animationOptions    : {
        duration            : 750,
        easing              : 'linear',
        queue               : false,
    }
    });
    return false;
    });