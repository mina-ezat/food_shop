$(document).ready(function(){
  $(".button-focus").click(function(){
    $(".textarea-focus").focus();
  })
 });
$(document).ready(function(){
$(".icon-search").on("click",function(){
    $(this).hide(500);
    $(".icon").css("display","block")
    $(".icon .input-img").focus()
})
})
$(document).ready(function(){

    $(".star-js .one").on("click",function(){
        $(this).toggleClass("activ-star")
        $(".star-js .two").removeClass("activ-star");
        $(".star-js .three").removeClass("activ-star");
        $(".star-js .four").removeClass("activ-star");
        $(".star-js .five").removeClass("activ-star")

    })
    $(".star-js .two").on("click",function(){
        $(this).toggleClass("activ-star");
        $(".star-js .one").addClass("activ-star");
        $(".star-js .three").removeClass("activ-star");
        $(".star-js .four").removeClass("activ-star");
        $(".star-js .five").removeClass("activ-star")



    })
    $(".star-js .three").on("click",function(){
        $(this).toggleClass("activ-star");
        $(".star-js .one").addClass("activ-star");
        $(".star-js .two").addClass("activ-star");
        $(".star-js .four").removeClass("activ-star");
        $(".star-js .five").removeClass("activ-star")

    })
    $(".star-js .four").on("click",function(){
        $(this).toggleClass("activ-star");
        $(".star-js .one").addClass("activ-star");
        $(".star-js .two").addClass("activ-star");
        $(".star-js .three").addClass("activ-star");
        $(".star-js .five").removeClass("activ-star")


    })
    $(".star-js .five").on("click",function(){
        $(this).toggleClass("activ-star");
        $(".star-js .one").addClass("activ-star")
        $(".star-js .two").addClass("activ-star")
        $(".star-js .three").addClass("activ-star")
        $(".star-js .four").addClass("activ-star")

    })
})
$(document).ready(function(){
    $(".more-information").fadeTo(0,0);
    $(".more-information").hover(
    function(){
    $(this).fadeTo(1000,1);
},
function(){
    $(this).fadeTo(1000,0)
}
)
})
$(function () {
    $('#datetimepicker1').datetimepicker();
});
$(function () {
    $('#datetimepicker2').datetimepicker();
});
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    speed: 2000,
      arrows: false,
     autoplay: true,
     autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]});
  