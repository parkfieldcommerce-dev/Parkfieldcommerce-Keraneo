if ($('.image_with_text_slide .mySwiper').length > 0) {
  var swiper = new Swiper(".image_with_text_slide .mySwiper", {
      pagination: {
          el: ".image_with_text_slide .swiper-pagination",
          type: "progressbar",
      },
      navigation: {
          nextEl: ".image_with_text_slide .swiper-button-next",
          prevEl: ".image_with_text_slide .swiper-button-prev",
      },
  });
}

if ($('.multicolumn-slide .mySwiper').length > 0) {
    var swiper = new Swiper(".multicolumn-slide .mySwiper", {
        slidesPerView: 10,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".multicolumn-slide .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            375: {
                slidesPerView: 3,
            },
            425: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 10,
            }
        }
    });
    $(".multicolumn-slide .zoomWrapper img").click(function(){
        $(this).toggleClass("flasher");
    });
}

// Begin compare before/after image custom style css
if ($('.compare_image_with_text').length > 0 || $('.compare-column').length > 0 ) {
//   jQuery(document).ready(function($) {
//     var dragging = false,
//         scrolling = false,
//         resizing = false;
//     //cache jQuery objects
//     var imageComparisonContainers = $('.cd-image-container');
//     //check if the .cd-image-container is in the viewport 
//     //if yes, animate it
//     checkPosition(imageComparisonContainers);
//     $(window).on('scroll', function() {
//         if (!scrolling) {
//             scrolling = true;
//             (!window.requestAnimationFrame) ?
//             setTimeout(function() {
//                 checkPosition(imageComparisonContainers);
//             }, 100): requestAnimationFrame(function() {
//                 checkPosition(imageComparisonContainers);
//             });
//         }
//     });

//     //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//     imageComparisonContainers.each(function() {
//         var actual = $(this);
//         drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//     });

//     //upadate images label visibility
//     $(window).on('resize', function() {
//         if (!resizing) {
//             resizing = true;
//             (!window.requestAnimationFrame) ?
//             setTimeout(function() {
//                 checkLabel(imageComparisonContainers);
//             }, 100): requestAnimationFrame(function() {
//                 checkLabel(imageComparisonContainers);
//             });
//         }
//     });

//     function checkPosition(container) {
//         container.each(function() {
//             var actualContainer = $(this);
//             if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
//                 actualContainer.addClass('is-visible');
//             }
//         });

//         scrolling = false;
//     }

//     function checkLabel(container) {
//         container.each(function() {
//             var actual = $(this);
//             updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//             updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//         });

//         resizing = false;
//     }

//     //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
//     function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//         dragElement.on("mousedown vmousedown", function(e) {
//             dragElement.addClass('draggable');
//             resizeElement.addClass('resizable');

//             var dragWidth = dragElement.outerWidth(),
//                 xPosition = dragElement.offset().left + dragWidth - e.pageX,
//                 containerOffset = container.offset().left,
//                 containerWidth = container.outerWidth(),
//                 minLeft = containerOffset + 10,
//                 maxLeft = containerOffset + containerWidth - dragWidth - 10;

//             dragElement.parents().on("mousemove vmousemove", function(e) {
//                 if (!dragging) {
//                     dragging = true;
//                     (!window.requestAnimationFrame) ?
//                     setTimeout(function() {
//                         animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
//                     }, 100): requestAnimationFrame(function() {
//                         animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
//                     });
//                 }
//             }).on("mouseup vmouseup", function(e) {
//                 dragElement.removeClass('draggable');
//                 resizeElement.removeClass('resizable');
//             });
//             e.preventDefault();
//         }).on("mouseup vmouseup", function(e) {
//             dragElement.removeClass('draggable');
//             resizeElement.removeClass('resizable');
//         });
//     }

//     function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
//         var leftValue = e.pageX + xPosition - dragWidth;
//         //constrain the draggable element to move inside his container
//         if (leftValue < minLeft) {
//             leftValue = minLeft;
//         } else if (leftValue > maxLeft) {
//             leftValue = maxLeft;
//         }

//         var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

//         $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
//             $(this).removeClass('draggable');
//             resizeElement.removeClass('resizable');
//         });

//         $('.resizable').css('width', widthValue);

//         updateLabel(labelResizeElement, resizeElement, 'left');
//         updateLabel(labelContainer, resizeElement, 'right');
//         dragging = false;
//     }

//     function updateLabel(label, resizeElement, position) {
//         if (position == 'left') {
//             (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
//         } else {
//             (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
//         }
//     }
//   });

    $.fn.BeerSlider = function( options ) {
        options = options || {};
        return this.each( function () {
        new BeerSlider( this, options );
        });
    };
    $( ".beer-slider" ).each( function( index, el ) {
        $( el ).BeerSlider( {start: $( el ).data( "start" ) } )
    });
}
// End compare before/after image custom style css


if ($('.testimonials').length > 0) {
    Vue.component('star-rating', {
    template: '#star-rating',
    props: ['max', 'current'],
    computed: {
        getRating: function() {
        return (this.current / this.max) * 100
        }
    }
    })

    new Vue({
    el: '#app',
    methods: {
        randomValue: function () {
            this.value = (Math.random()*4+1).toFixed(2);
        }
    }
    });
}

if ($('.collection-slide .mySwiper').length > 0) {
    var swiper = new Swiper(".collection-slide .mySwiper", {
        slidesPerView: 2.5,
        spaceBetween: 200,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".collection-slide .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 2,
            }
        }
    });
}

if ($('.testimonials .mySwiper').length > 0) {
    var swiper = new Swiper(".testimonials .mySwiper", {
        pagination: {
            el: ".testimonials .swiper-pagination",
            type: "progressbar",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonials .swiper-button-next",
            prevEl: ".testimonials .swiper-button-prev",
        },
    });
}

if($('.faq-section').length > 0) {
    let summaryCollection = document.getElementsByClassName('faq-item');
    let signsCollection = document.getElementsByClassName('faq-open-icon');

    for(let i = 0; i < summaryCollection.length; i++) {
        summaryCollection[i].onclick = function() {
            if(signsCollection[i].innerHTML === '+') {
                console.log(i, summaryCollection.length);
                signsCollection[i].innerHTML = '—';
            } else {
                signsCollection[i].innerHTML = '+';
            }
        }
    }
}