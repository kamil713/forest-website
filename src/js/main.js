
// // const footerYear = document.querySelector('.footer__year');

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear();
// 	footerYear.innerText = year;
// };

// handleCurrentYear();

/* NAV */
let $navigationItems; // takes all the navigation items and marks the selected one
let $navigationLogo; // live above but selected home item ?????
let $navBtn;
let $navMobile;
let $allNavItems;
let $footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
}

const prepareDOMElements = () => {
	$navigationItems = document.querySelectorAll('.navigation__item');
	$navigationLogo = document.querySelector('.nav__logo');
	$navBtn = document.querySelector('.hamburger');
	$navMobile = document.querySelector('.mobile');
	$allNavItems = document.querySelectorAll('.item--mobile');
	$footerYear = document.querySelector('.footer__year');
}

const prepareDOMEvents = () => {
	$navigationItems.forEach(item => {
		item.addEventListener('click', function () {
			navItemIsActiveChecker(item);
		})
	});
	$navigationLogo.addEventListener('click', navLogoIsActiveChecker);
	$navBtn.addEventListener('click', handleNav);
}

/* NAV LOGIC */
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
const handleNav = () => {
	$navBtn.classList.toggle('is-active');
	$navMobile.classList.toggle('mobile--active');

	$navBtn.classList.toggle('visible');

	handleNavItemsAnimation();
}



const handleNavItemsAnimation = () => {
	let delayTime = 0;

	$allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteAnimation = () => {
	$allNavItems.forEach((item) => {
		item.classList.remove('nav-items-animation');
	});
};





const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	$footerYear.innerText = year;
};

document.addEventListener('DOMContentLoaded', function () {
	main();
	handleCurrentYear();
});