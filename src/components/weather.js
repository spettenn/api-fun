/* import React, { useState, useEffect } from 'react';
import sunny from '../assets/sunny.jpg';
import cloudy from '../assets/cloudy.jpg';
import rainy from '../assets/rainy.jpg';

const API_KEY = '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd';

async function getWeather() {
	const response = await fetch(
		`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=Oslo,no&format=json&u=c&lang=en-US&units=metric&appid=${API_KEY}`
	);
	const data = await response.json();
	return data;
}

function Weather() {
	const [weather, setWeather] = useState({});
	const [background, setBackground] = useState('');

	useEffect(() => {
		async function fetchData() {
			const data = await getWeather();
			setWeather(data);
			if (data.weather[0].main === 'Clear') {
				setBackground(sunny);
			} else if (data.weather[0].main === 'Clouds') {
				setBackground(cloudy);
			} else if (data.weather[0].main === 'Rain') {
				setBackground(rainy);
			}
		}
		fetchData();
	}, []);

	return (
		<div style={{ height: `20rem` }}>
			<h1>Current Weather in Oslo:</h1>
			<img style={{ backgroundImage: `url(${background})` }} />
			<p>{weather.weather[0].main}</p>
			<p>{weather.main.temp}°F</p>
		</div>
	);
}

export default Weather;
 */
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					'https://yahoo-weather5.p.rapidapi.com/weather',
					{
						params: {
							location: 'Oslo',
							format: 'json',
							u: 'c',
							app_id: '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
						},
					}
				);
				setWeatherData(result.data);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	if (!weatherData) {
		return <div>Loading...</div>;
	}

	const { location, condition, temperature } = weatherData;

	return (
		<div>
			<h1>
				Current weather in {location.city}, {location.region}
			</h1>
			<p>{condition.text}</p>
			<p>{temperature}°C</p>
		</div>
	);
}

export default Weather;
*/
/* import React, { useEffect, useState } from 'react';

export default function Weather() {
	const [weather, setWeather] = useState({});
	const [city] = useState('Oslo');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7552f530894d325c717a2daba6487ca8&units=metric`
		)
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
				setLoading(false);
				console.log('This is local weather data' + data);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [city]);

	return (
		<div className='weather_container'>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					{weather.main && (
						<div className='weather'>
							<h4 className='weather_title'>You should go outside!</h4>
							<h4 className='weather_title'>Weather in {city}:</h4>
							<div className='weather_info'>
								<div className='weather_info_temp'>{weather.main.temp} C</div>
								<div className='weather_info_desc'>
									{weather.weather[0].main}
								</div>
							</div>
						</div>
					)}
					{error && <div className='error'>{error}</div>}
				</div>
			)}
		</div>
	);
}
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import sunny from '../assets/sunny.jpg';
import cloudy from '../assets/cloudy.jpg';
import rainy from '../assets/rainy.jpg'; */

const weatherImages = {
	sunny: '../assets/sunny.jpg',
	cloudy: '../assets/cloudy.jpg',
	rainy: '../assets/rainy.jpg',
};

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);
	const [backgroundImage, setBackgroundImage] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					'https://api.openweathermap.org/data/2.5/weather',
					{
						params: {
							q: 'Oslo,NO',
							units: 'metric',
							appid: '7552f530894d325c717a2daba6487ca8',
						},
					}
				);
				setWeatherData(result.data);
				setBackgroundImage([result.data.weather[0].main.toLowerCase()]);
				console.log(result.data.weather[0].main.toLowerCase());
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	if (!weatherData) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>
				Current weather in {weatherData.name}, {weatherData.sys.country}
			</h1>
			<p>{weatherData.weather[0].description}</p>
			<p>{weatherData.main.temp}°C</p>
			<img src={setBackgroundImage} alt={weatherData.weather[0].description} />
		</div>
	);
}

export default Weather;
