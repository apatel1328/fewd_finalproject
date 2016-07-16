jQuery(document).ready(function() {
	
	// Flipbook plugin

		jQuery('.flipbook').booklet({
			// closed: true,
			autoCenter: true
		});
	
	// Mobile friendly navigation

		jQuery('.mobile_nav').on('click',function(){
			if(jQuery(this).hasClass('active')){
			jQuery('.main_nav').hide();
			jQuery(this).removeClass('active');
			}
			else{
				jQuery(this).addClass('active');
				jQuery('.main_nav').show();
				jQuery('.main_nav').css('display', 'inline');
			}
		});

	// Display mobile navigation after window resizes

		jQuery(window).resize(function() {
			if(jQuery(window).width() > 800){
				jQuery('.main_nav').show();
				jQuery('#toggle').removeClass('active');
			}
			else{
				jQuery('.main_nav').hide();
			}
		});

	// Hide drop down after click
		jQuery('.nav_link').on('click',function(){
			if(jQuery('.mobile_nav').hasClass('active')){
				jQuery('.main_nav').hide();
				jQuery('.mobile_nav').removeClass('active');
			}
		});

	// Scrolling navigation

		jQuery('a[href^="#"]').on('click',function(){
		    event.preventDefault();

		    var target = this.hash;
		    var $target = jQuery(target);

		    jQuery('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 500, 'swing', function () {
		        window.location.hash = target;
		    });
		});

});
