document.addEventListener('DOMContentLoaded', () => {

	function iniciarCronometro() { 
		const timerContainer = document.getElementById('offer-countdown-container');
		const timerDisplay = document.getElementById('offer-countdown-display');
		
		if (!timerContainer || !timerDisplay) return;

		timerContainer.style.display = 'block';
	let duration = 5 * 60;
		const timerInterval = setInterval(() => {
			let minutes = parseInt(duration / 60, 10);
			let seconds = parseInt(duration % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			timerDisplay.textContent = minutes + ":" + seconds;
			if (--duration < 0) {
				clearInterval(timerInterval);
				timerContainer.querySelector('p').innerText = 'Offer Expired!';
				timerDisplay.style.color = '#777';
			}
		}, 1000);
}

	iniciarCronometro();

});