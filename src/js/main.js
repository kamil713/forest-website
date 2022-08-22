// const navMobile = document.querySelector('.nav-mobile');
// const navBtn = document.querySelector('.hamburger');
// // const footerYear = document.querySelector('.footer__year');

// const handleNav = () => {
// 	navBtn.classList.toggle('is-active');
// 	navMobile.classList.toggle('nav-mobile--active');
// };

// navBtn.addEventListener('click', handleNav);

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear();
// 	footerYear.innerText = year;
// };

// handleCurrentYear();

let $navigationItems; // takes all the navigation items and marks the selected one
let $navigationLogo; // live above but selected home item ?????

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
}

const prepareDOMElements = () => {
	$navigationItems = document.querySelectorAll('.navigation__item');
	$navigationLogo = document.querySelector('.nav__logo');
}

const prepareDOMEvents = () => {
	$navigationItems.forEach(item => {
		item.addEventListener('click', function () {
			navItemIsActiveChecker(item);
		})
	});
	$navigationLogo.addEventListener('click', navLogoIsActiveChecker);
}

const navItemIsActiveChecker = (item) => {
	$navigationItems.forEach(el => {
		el.classList.remove('is-active')
	})
	item.classList.add('is-active');
}

const navLogoIsActiveChecker = () => {
	$navigationItems.forEach(el => {
		el.classList.remove('is-active')
	})
	$navigationItems[0].classList.add('is-active');
}





document.addEventListener('DOMContentLoaded', main);