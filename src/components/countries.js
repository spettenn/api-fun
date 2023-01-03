import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';

const CountriesList = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch('https://restcountries.com/v2/all');
			const data = await response.json();
			setCountries(data);
			console.log(data);
		};
		fetchCountries();
	}, []);

	const shuffledCountries = shuffle(countries).slice(0, 20);

	const selectedCountryData = countries.find(
		(country) => country.name === selectedCountry
	);

	return (
		<div className='country_container'>
			<label htmlFor='country-select'>Select a country:</label>
			<select
				id='country-select'
				value={selectedCountry}
				onChange={(event) => setSelectedCountry(event.target.value)}>
				{shuffledCountries.map((country) => (
					<option key={country.alpha2Code} value={country.name}>
						{country.name}
					</option>
				))}
			</select>
			{selectedCountry && (
				<div>
					<h2>{selectedCountry}</h2>
					<h5>{selectedCountryData.nativeName}</h5>
					<img
						src={selectedCountryData.flag}
						height='30px'
						width='40px'
						alt={`Flag of ${selectedCountry}`}
					/>
					<p>Capital:</p>
					<p>{selectedCountryData.capital}</p>
					<p>TimeZone:</p>
					<p>{selectedCountryData.timezones[0]}</p>
					<p>Currency:</p>
					<p>{selectedCountryData.currencies[0].name}</p>
				</div>
			)}
		</div>
	);
};

export default CountriesList;
