import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DadJoke = () => {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://dad-jokes.p.rapidapi.com/random/joke',
			headers: {
				'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
				'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setJoke(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<h2>Dad Joke</h2>
			<p>{joke}</p>
		</div>
	);
};

export default DadJoke;
