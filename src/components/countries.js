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
			console.log(data.slice(0, 20));
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
					<div className='inner_container'>
						<h2 className='country_title'>{selectedCountry}</h2>
						<h5 className='country_title'>{selectedCountryData.nativeName}</h5>
					</div>
					<img
						src={selectedCountryData.flag}
						height='30px'
						width='40px'
						alt={`Flag of ${selectedCountry}`}
					/>
					<div className='inner_container'>
						<p className='country_txt'>Capital:</p>
						<p className='country_txt'>{selectedCountryData.capital}</p>
					</div>
					<div className='inner_container'>
						<p className='country_txt'>TimeZone:</p>
						<p className='country_txt'>{selectedCountryData.timezones[0]}</p>
					</div>
					<div className='inner_container'>
						<p className='country_txt'>Currency:</p>
						<p className='country_txt'>
							{selectedCountryData.currencies[0].name}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountriesList;
