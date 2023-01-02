import React, { useState, useEffect } from 'react';

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const newYear = new Date('January 1, 2024 00:00:00');
			const currentTime = new Date();
			const diff = newYear - currentTime;

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='countdown_new_years'>
			{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{' '}
			{timeLeft.seconds} seconds
		</div>
	);
};

export default Countdown;
