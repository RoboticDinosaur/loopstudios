
console.log('Javascript Loaded');

document.querySelector('body').classList.remove('no-js');

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


