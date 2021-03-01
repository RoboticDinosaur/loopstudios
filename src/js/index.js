
console.log('Javascript Loaded');

document.querySelector('body').classList.remove('no-js');
const navItems = document.querySelectorAll('.navbar .nav__item');
navItems.forEach( nav => nav.addEventListener('click', toggleNavbar));

window.onscroll = () => {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector('header.site-header').classList.add('site-header__scrolled');
	} else {
		document.querySelector('header.site-header').classList.remove('site-header__scrolled');
	}
}

function toggleNavbar() {
	console.log('Toggle Navbar');
	const checkbox = document.querySelector('.nav-check');
	checkbox.checked = false;
}
