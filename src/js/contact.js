let $contactFormBtn;

const contact = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	$contactFormBtn = document.querySelector('.contact__form-btn');
};

const prepareDOMEvents = () => {
	$contactFormBtn.addEventListener('click', handleAlert);
};

const handleAlert = () => {
  alert('Still in progress :)');
}

document.addEventListener('DOMContentLoaded', function () {
	contact();
});
