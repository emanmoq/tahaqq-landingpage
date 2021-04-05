jQuery(function ($) {
//declare slider (owl-carousel slider)
  $('.teamCarousel').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    rtl:true,
    dots:false,
    navText : ["<i class='lni lni-arrow-left'></i>","<i class='lni lni-arrow-right'></i>"],

    responsive: {
      0: {
        items: 1,
        margin:0

      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,

      }
      

    }
  });
 
  function onScroll(event){
			
		var scrollPosition = $(document).scrollTop();
    //add class active when select item from navbar 
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
// animate to the section when click  on it
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
    
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
//add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');
    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  //close menu when choose item
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  });
  $(".navbar-toggler").click(function(){
    $(".overlay").toggle()
  });
  $(".close").click(function(){
    $(".overlay").css("display","none");
    $(".collapse").removeClass('show');
  })
  $(".overlay").click(function(){
    $(this).css("display","none");
    $(".collapse").removeClass('show');
  });

});

