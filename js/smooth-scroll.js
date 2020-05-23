$(document).ready(function(){
  const sectionsPage = new fullpage('#fullpage', {
    autoScrolling: true,
    scrollingSpeed: 500,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing:'easeInOutCubic',
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    //navigation: true,
    
    showActiveTooltip: true,
    scrollHorizontally: true,
    controlArrows:false,
    //slidesNavigation:true,
    dragAndMove:true,
  });
  $("#usButton").addClass("selected");

  $("#myMenu li").click(function(event) {
    const value = event.target.id;
    $("#myMenu li a").removeClass("selected");
    $("#"+ value).addClass("selected");
    if (value == "servicesButton"){
      $('.collapse').show();
      $("#subMenu li a").removeClass("selected");
      $("#constructionButton").addClass("selected");
    } else {
      $('.collapse').hide()
    }
  });
  $("#subMenu li").click(function(event) {
    const value = event.target.id;
    $("#subMenu li a").removeClass("selected");
    $("#"+ value).addClass("selected");
  });

  $("#bsasForm").submit(function(e){
    nameValue = $("#inputName").val().replace(/ /g, "")
    emailValue = $("#inputEmail").val().replace(/ /g, "")
    celValue = $("#inputCel").val().replace(/ /g, "")
    commentValue = $("#inputComment").val().replace(/ /g, "")
    if (nameValue == "" || emailValue == ""|| celValue == "" || commentValue == "" ) {
      $("#textALert").html("Completá todos los campos")
      e.preventDefault();
    }
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