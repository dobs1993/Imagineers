/* Theme Scripts */

(function($){ "use strict";

	$(window).load('body', function(){
		setTimeout(function(){
	        $('.site-preloader-wrap').addClass('loaded');
	    }, 1000);
		
	});
             
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });          
    
/*=========================================================================
    Portfolio
=========================================================================*/
	$('.work-items').imagesLoaded( function() {

		 // Add isotope click function
		$('.work-filter li').on( 'click', function(){
	        $(".work-filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".work-items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".work-items").isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'masonry',
	    });
	});

	$('.work-items .work-box').each(function() {
		$(this).on('mouseenter', function() {
			if ($(this).data('title')) {
				$('.work-titles').html($(this).data('title') + '<span class="work__cat">' + $(this).data('category') + '</span>');
				$('.work-titles').addClass('visible');
			}

			$(document).on('mousemove', function(e) {
				$('.work-titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			$('.work-titles').removeClass('visible');
		});
	});

/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});

/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});

/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();
             
/*=========================================================================
	MAILCHIMP
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
             
             
             
             
             
             
             
             $(document).ready(function () {
  $('input[type=submit]').click(function () {
    $('input[type=submit]').toggleClass('red');
  });
});
             
             
             
             
             
             
             
             
             
             $(document).ready(function () {
  $('input[type=submit]').click(function () {
    $('input[type=submit]').toggleClass('red');
  });
});

})(jQuery);

window.addEventListener('load', AOS.refresh);
