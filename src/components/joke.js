/* import axios from 'axios';
import { useEffect, useState } from 'react';
/* const axios = require('axios'); */
/*
const options = {
	method: 'GET',
	url: 'https://joke3.p.rapidapi.com/v1/joke',
	params: { nsfw: 'true' },
	headers: {
		'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
		'X-RapidAPI-Host': 'joke3.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});

export default function Joke() {
	const [joke, setJoke] = useState({});

	useEffect(() => {
		fetch('https://joke3.p.rapidapi.com/v1/joke?nsfw=true', options)
			.then((response) => response.json())
			.then((data) => {
				setJoke(data);
			});
	}, []);
	return (
		<div className='joke_container'>
			<div className='joke'>{joke}</div>
		</div>
	);
} */
