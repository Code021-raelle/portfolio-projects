document.getElementById('newQuote').addEventListener('click', function() {
	fetch('/')
		.then(response => response.text())
		.then(data => {
			document.getElementById('quote').innerHTML = data;
		});
})

Notification.requestPermission().then(function(permission) {
	if (permission === 'granted') {
		new Notification('New Quote', {
			body: 'Here is a new quote for you!',
		});
	}
});

setTimeout(function() {
	new Notification('New Quote', {
		body: 'Here is another quote for you!',
	});
}, 5000);
