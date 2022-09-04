let $navigationItems;
let $navMobileBtn;
let $navMobile;
let $navMobileItems;
let $footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	$navigationItems = document.querySelectorAll('.navigation__item');
	$navMobileBtn = document.querySelector('.hamburger');
	$navMobile = document.querySelector('.mobile');
	$navMobileItems = document.querySelectorAll('.item--mobile');
	$footerYear = document.querySelector('.footer__year');
};

const prepareDOMEvents = () => {
	$navigationItems.forEach((item) => {
		item.addEventListener('click', function () {
			navItemIsActiveChecker(item);
		});
	});
	$navMobileBtn.addEventListener('click', handleNav);
	$navMobileItems.forEach(item => {
		item.addEventListener('click', function () {
			handleNav();
		})
	});

	window.onscroll = () => {
		let top = window.scrollY;

		if (top <= 80) {
			$navigationItems.forEach((links) => {
				links.classList.remove('is-active');
				$navigationItems[0].classList.add('is-active');
			});
		} else if (top <= 460) {
			$navigationItems.forEach((links) => {
				links.classList.remove('is-active');
				$navigationItems[1].classList.add('is-active');
			});
		} else if (top <= 1304) {
			$navigationItems.forEach((links) => {
				links.classList.remove('is-active');
				$navigationItems[2].classList.add('is-active');
			});
		}
	};
};

const navItemIsActiveChecker = (item) => {
	$navigationItems.forEach((el) => {
		el.classList.remove('is-active');
	});

	item.classList.add('is-active');
};

const handleNav = () => {
	$navMobileBtn.classList.toggle('is-active');
	$navMobile.classList.toggle('mobile--active');
	$navMobileBtn.classList.toggle('visible');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	$footerYear.innerText = year;
};

document.addEventListener('DOMContentLoaded', function () {
	main();
	handleCurrentYear();
});