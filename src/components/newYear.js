import React, { useState, useEffect } from 'react';

function Countdown() {
	// Set up state variables to store the countdown values
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// Set the date we're counting down to
	const countDownDate = new Date('Dec 31, 2021 23:59:59').getTime();

	useEffect(() => {
		// Update the count down every 1 second
		const interval = setInterval(() => {
			// Get today's date and time
			const now = new Date().getTime();

			// Find the distance between now and the count down date
			const distance = countDownDate - now;

			// Time calculations for days, hours, minutes, and seconds
			setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
			setHours(
				Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			);
			setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

			// If the count down is finished, clear the interval
			if (distance < 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	// Concatenate the countdown values into a string
	const timeLeft =
		days +
		' days, ' +
		hours +
		' hours, ' +
		minutes +
		' minutes, and ' +
		seconds +
		' seconds';

	return (
		<div className='new_year_container'>
			{/* Display the time left */}
			There are {timeLeft} left until New Year's Eve!
		</div>
	);
}

export default Countdown;
