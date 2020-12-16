(function () {
	'use strict'

	document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
		document.querySelector('.offcanvas-collapse').classList.toggle('open')
	})
	document.querySelector('[data-bs-toggle="offcanvas-close"]').addEventListener('click', function () {
		document.querySelector('.offcanvas-collapse').classList.toggle('open')
	})
})()
