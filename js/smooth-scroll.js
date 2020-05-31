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
    
    showActiveTooltip: true,
    scrollHorizontally: true,
    controlArrows:false,
    dragAndMove:true,
  });

  var initialHash = window.location.hash
  if (initialHash == "") {
    initialHash = "#pageUS"
  }
  setActiveClass(initialHash)
  
  $(window).on('hashchange',function(){ 
    var page = window.location.hash;
    setActiveClass(page)
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

  function setActiveClass(currentHash){
    if(currentHash == "#pageContact"){
      $('.collapse').hide()
    }
    $("#myMenu li a").removeClass("selected");
    $("#subMenu li a").removeClass("selected");
    $("li a").each(function(i){
      hash = this.hash
      if (currentHash == hash ){
        $(this).addClass("selected");
      }
    })
    $("#subMenu li a").each(function(i){
      if($(this).hasClass("selected")){
        $('.collapse').show()
        $("#servicesButton").addClass("selected")
      }
      else if (!$("#servicesButton").hasClass("selected")){
        $('.collapse').hide()
      }
    })

  }

  var slider = tns({
    container: '.my-slider',
    items: 2,
    slideBy: 'page',
    gutter: 10,
    autoplay: false,
    items: 2,
    center: true,
    speed: 400,
    nav: false,
    controls: false,
    controlsContainer: true
  });
  $('#sliderNav ul li').click(function(){
       slider.goTo($(this).index())
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
