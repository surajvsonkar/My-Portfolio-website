// menu icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = function (){
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// scroll section active link
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		var top = window.scrollY;
		var offset = sec.offsetTop - 150;
		var height = sec.offsetHeight;
		var id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}
	});

	var header = document.querySelector('.header');
	header.classList.toggle('sticky', window.scrollY > 100);

	// remove menu icon navbar when click navbar link (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active')
};

// swiper
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
    grapCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// dark light mode

var darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
	darkModeIcon.classList.toggle('bx-sun');
	document.body.classList.toggle('dark-mode');
}

// scroll reveal

ScrollReveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-image img, .skills-container, .projects-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });