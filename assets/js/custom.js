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
			this.changeColor();
		},
		changeColor: function() {
			if (this.pointer === 1) {
				this.menuWrapper.addClass(this.darkClass);
			} else if (this.menuWrapper.hasClass(this.darkClass)) {
				this.setWhiteColor();
			}
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

	const about = $('#about').waypoint(function(direction){
		setCurrentDot(direction);
	},{
		offset: '50%'	
	})

	const eyecatcher = $('#eyecatcher').waypoint(function(direction){
		if (direction === 'down') {
			dotNav.setWhiteColor();
			console.log("eye");
		}	
	},{
		offset: '50%'	
	})

	const products = $('#products').waypoint(function(direction){
		setCurrentDot(direction);
	},{
		offset: '25%'	
	})

	const contact = $('#contact').waypoint(function(direction){
		setCurrentDot(direction);
	},{
		offset: '25%'	
	})

})