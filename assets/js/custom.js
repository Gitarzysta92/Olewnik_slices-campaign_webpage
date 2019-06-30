$(document).ready(function() {
	// Initialize smoothscroll library
	const scroll = new SmoothScroll('a.smooth');

	// Mobile menu toggle button and self close
	$('.mobile-menu-toggle').click(function() {
		$('.header_menu').toggleClass('mobile-menu');
	})
	$('.header_menu').click(function() {
		if ($(this).hasClass('mobile-menu')) $(this).removeClass('mobile-menu');
	});

	// Side dots navigation controller
	const dotNav = {
		darkClass: 'dark',
		menuWrapper: $('.menu_dotted'),
		dots: $('.menu_dotted li'),
		pointer: 0,
		next: function() {
			this.pointer += 1;
			this.setActive();
		},
		prev: function() {
			this.pointer -= 1;
			this.setActive();
		},
		setActive: function() {
			for (let i = 0; i <= this.dots.length; i++) {
				if (i === this.pointer) {
					this.dots.eq(i).addClass('active');
				} else {
					this.dots.eq(i).removeClass('active');
				}
			}
		},
		setDarkColor: function() {
			this.menuWrapper.addClass(this.darkClass);
		},
		setWhiteColor: function() {
			this.menuWrapper.removeClass(this.darkClass);	
		}

	}
	dotNav.setActive();


	function setCurrentDot(direction) {
		if (direction === 'down') {
			dotNav.next();
		} else {
			dotNav.prev();
		}
	}
	
	
	// Define waypoints for document anchors


	$('#about').waypoint(function(direction){
		setCurrentDot(direction);
		if (direction === 'down') {
			dotNav.setDarkColor();
		} else {
			dotNav.setWhiteColor();
		}
	},{
		offset: '50%'	
	})

	$('#eyecatcher').waypoint(function(direction){	
		if (direction === 'down') {
			dotNav.setWhiteColor();
		} else {
			dotNav.setDarkColor();
		}
	},{
		offset: '50%'	
	})

	$('#products').waypoint(function(direction){
		setCurrentDot(direction);
	},{
		offset: '50%'	
	})

	$('#contact').waypoint(function(direction){
		setCurrentDot(direction);
	},{
		offset: '25%'	
	})

})