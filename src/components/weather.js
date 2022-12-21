import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import sunny from '../assets/sunny.jpg';
import cloudy from '../assets/cloudy.jpg';
import rainy from '../assets/rainy.jpg'; */

/* const weatherImages = {
	sunny: '../assets/sunny.jpg',
	cloudy: '../assets/cloudy.jpg',
	rainy: '../assets/rainy.jpg',
};
 */
function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);
	/* const [backgroundImage, setBackgroundImage] = useState(null); */

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
				/* setBackgroundImage([result.data.weather[0].main.toLowerCase()]); */
				console.log(result.data.weather[0].main.toLowerCase());
				const iconCode = result.data.weather[0].icon;
				document.querySelector(
					'#weather-icon'
				).innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather icon">`;
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
		<div className='weather_container'>
			<h1>
				Current weather in {weatherData.name}, {weatherData.sys.country}
			</h1>
			<p>{weatherData.weather[0].description}</p>
			<p>{weatherData.main.temp}°C</p>
			{/* 	<img src={setBackgroundImage} alt={weatherData.weather[0].description} /> */}
		</div>
	);
}

export default Weather;
