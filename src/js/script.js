// navigation menu

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".mobile-menu").addClass("active");
  });
  $(".close-btn").click(function () {
    $(".mobile-menu").removeClass("active");
  });
});



// category 


$(".chocolovely-product-categori button").on("click", function () {
  $(".chocolovely-product-categori button").removeClass("active");
  $(this).addClass("active");
});



// add to cart

$(".product-actions .add-to-cart-btn").on("click", function () {
  $(this).toggleClass("active");
});


// wishlist


$(".chocolovely-product-item-img-wrap .wishlist-btn").on("click", function () {
  $(this).toggleClass("active");
});


// faq 


$(document).ready(function () {
  $('.faq-title').click(function () {
    var parent = $(this).parent();
    $('.faq-item').not(parent).removeClass('active').find('.faq-content').slideUp();
    parent.toggleClass('active');
    parent.find('.faq-content').slideToggle();
  });
});



// header form
$(document).ready(function () {
  $('.search-form').on('click', function () {
    $(this).addClass('active');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.search-form').length) {
      $('.search-form').removeClass('active');
    }
  });
});


// testimonial slider 
const testimonial_slider = new Swiper('.testimonial-slider', {
  loop: true,                
  slidesPerView: 3,          
  slidesPerGroup: 1,         
  spaceBetween: 22,          
  autoplay: {
    delay: 2000,              
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      const total = this.slides.length - this.loopedSlides * 2; 
      if (total <= 4) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }

      if (index < 2) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }

      if (index === lastIndex) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }

      if (index === 2) {
        return '<span class="dots">...</span>';
      }

      return '';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    0: { slidesPerView: 1 },      // Mobile
    768: { slidesPerView: 2 },    // Tablet
    1024: { slidesPerView: 3 }    // Desktop
  }
});


// Delivery slider

let deliverySwiper;

function initDeliverySwiper() {
  if (window.innerWidth < 768) {
    if (!deliverySwiper) {
      deliverySwiper = new Swiper(".delivery-wrapper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,            
          disableOnInteraction: false 
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1, // 0px - 389px => 1 slide
          },
          390: {
            slidesPerView: 2, // 390px - 767px => 2 slide
          }
        },
      });
    }
  } else {
    if (deliverySwiper) {
      deliverySwiper.destroy(true, true); // Desktop এ destroy
      deliverySwiper = undefined;
    }
  }
}

window.addEventListener("load", initDeliverySwiper);
window.addEventListener("resize", initDeliverySwiper);




// explore chocolate slider

let swiper;

function initSwiper() {
  if (window.innerWidth >= 768) {
    swiper = new Swiper(".explore-chocolate-slider", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       autoplay: {
        delay: 2000,            
        disableOnInteraction: false 
      },
      slidesPerView: 3,
      breakpoints: {
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      },
    });
  } else {
    if (swiper) {
      swiper.destroy(true, true); // Mobile এ swiper disable
      swiper = undefined;
    }
  }
}

// Initial load
initSwiper();

// On window resize
window.addEventListener("resize", () => {
  initSwiper();
});






