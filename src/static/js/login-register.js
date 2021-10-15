let container = document.getElementById('container')
toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function onChange() {
	const password = document.querySelector('input[name=password1]');
	const confirm = document.querySelector('input[name=password2]');
	if (confirm.value === password.value) {
		confirm.setCustomValidity('');
	} else {
		confirm.setCustomValidity('Passwords do not match');
	}
}