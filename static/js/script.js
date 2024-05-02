document.getElementById('newQuote').addEventListener('click', function() {
	fetch('/')
		.then(response => response.text())
		.then(data => {
			document.getElementById('quote').innerHTML = data;
		});
})
