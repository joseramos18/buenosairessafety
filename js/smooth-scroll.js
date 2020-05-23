$(document).ready(function(){
  const sectionsPage = new fullpage('#fullpage', {
    /*anchors: ['aaaa','bbbb'],
    menu: '#myMenu',
    navigationTooltips: ['aaaa','bbbb'],*/
    autoScrolling: true,
    scrollingSpeed: 500,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing:'easeInOutCubic',
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    navigation: true,
    
    showActiveTooltip: true,
    scrollHorizontally: true,
    controlArrows:false,
    slidesNavigation:true,
    dragAndMove:true,
  });
  $( "#servicesButton" ).click(function() {
    $('.collapse').toggle();
  });

  $(window).resize(function(
  ){
    if($(window).width() < 766){
        $(".navbar.navbar-expand-lg").addClass("fixed-top");
    } else{
      $(".navbar.navbar-expand-lg").removeClass("fixed-top");
    }
  });
});