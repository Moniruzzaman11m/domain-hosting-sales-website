(function ($){
    // FAQ page accordion

    var accordions = document.getElementsByClassName("accordion");
          for (var i = 0; i < accordions.length; i++) {
              accordions[i].onclick = function () {
                  this.classList.toggle('is-open');
                  var content = this.nextElementSibling;
                  if (content.style.maxHeight) {
                      content.style.maxHeight = null;
                  } else {
                      content.style.maxHeight = content.scrollHeight + "px";
                  }
              }
          }

        //   Button area

        $(".active1").click(function(){
            $(".button-item").addClass("active")
        })
        $(".active1").click(function(){
            $(".active2,.active3,.active4").removeClass("active")
        })
        $(".active2").click(function(){
            $(".button-item").addClass("active")
        })
        $(".active2").click(function(){
            $(".active1,.active3,.active4").removeClass("active")
        })
        $(".active3").click(function(){
            $(".button-item").addClass("active")
        })
        $(".active3").click(function(){
            $(".active1,.active2,.active4").removeClass("active")
        })
        $(".active4").click(function(){
            $(".button-item").addClass("active")
        })
        $(".active4").click(function(){
            $(".active1,.active2,.active3").removeClass("active")
        })



        $(".active2,.active3,.active4").click(function(){
            $(".active1").addClass("dnone")
        })

        $(".active1").click(function(){
            $(".item1").show()
        })
        $(".active1").click(function(){
            $(".item2,.item3,.item4").hide()
        })
        $(".active2").click(function(){
            $(".item2").show()
        })
        $(".active2").click(function(){
            $(".item1,.item3,.item4").hide()
        })
        $(".active3").click(function(){
            $(".item3").show()
        })
        $(".active3").click(function(){
            $(".item1,.item2,.item4").hide()
        })
        $(".active4").click(function(){
            $(".item4").show()
        })
        $(".active4").click(function(){
            $(".item1,.item2,.item3").hide()
        })

        $(window).on('scroll',function() {
            if($(window).scrollTop()){
              $('nav').addClass('height-control');
            }
            else{
              $('nav').removeClass('height-control');
            }
          })


// Google Down box
    $(".item-box1").click(function(){
        $(".item-box1").addClass("bg-color")
    })
    $(".item-box1").click(function(){
        $(".item-box2,.item-box3").removeClass("bg-color")
    })
    $(".item-box2").click(function(){
        $(".item-box2").addClass("bg-color")
    })
    $(".item-box2").click(function(){
        $(".item-box1,.item-box3").removeClass("bg-color")
    })
    $(".item-box3").click(function(){
        $(".item-box3").addClass("bg-color")
    })
    $(".item-box3").click(function(){
        $(".item-box2,.item-box1").removeClass("bg-color")
    })
    $(".item-box2,.item-box3").click(function(){
        $(".item-box1").addClass("bgnone")
    })


       // :: 2.0 Nav Active Code
       if ($.fn.classyNav) {
        $('#palatinNav').classyNav();
    }
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
  
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


      

})(jQuery)