let $navigationItems;
let $navigationLogo;
let $navBtn;
let $navMobile;
let $allNavItems;
let $section;
let $footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	$navigationItems = document.querySelectorAll('.navigation__item');
	$navigationLogo = document.querySelector('.nav__logo');
	$navBtn = document.querySelector('.hamburger');
	$navMobile = document.querySelector('.mobile');
	$allNavItems = document.querySelectorAll('.item--mobile');
	$section = document.querySelectorAll('section');
	$footerYear = document.querySelector('.footer__year');
};

const prepareDOMEvents = () => {
	$navigationItems.forEach((item) => {
		item.addEventListener('click', function () {
			navItemIsActiveChecker(item);
		});
	});
	$navigationLogo.addEventListener('click', navLogoIsActiveChecker);
	$navBtn.addEventListener('click', handleNav);
	$allNavItems.forEach((item) => {
		item.addEventListener('click', toggleSectionObserve);
	});

	window.onscroll = () => {
		$section.forEach((sec) => {
			let top = window.scrollY;
			let offset = sec.offsetTop - 100;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');

			if (top >= offset && top < offset + height) {
				$navigationItems.forEach((links) => {
					links.classList.remove('is-active');
					document
						.querySelector('nav a[href*=' + id + ']')
						.classList.add('is-active');
				});
			}
		});
	};
};

const navItemIsActiveChecker = (item) => {
	$navigationItems.forEach((el) => {
		el.classList.remove('is-active');
	});
	item.classList.add('is-active');
};

const navLogoIsActiveChecker = () => {
	$navigationItems.forEach((el) => {
		el.classList.remove('is-active');
	});
	$navigationItems[0].classList.add('is-active');
};

const handleNav = () => {
	$navBtn.classList.toggle('is-active');
	$navMobile.classList.toggle('mobile--active');

	$navBtn.classList.toggle('visible');

	handleNavItemsAnimation();
};

const toggleSectionObserve = () => {
	$navBtn.classList.toggle('is-active');
	$navMobile.classList.toggle('mobile--active');
	$navBtn.classList.toggle('visible');
};

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
