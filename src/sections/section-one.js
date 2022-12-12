import React from 'react';
import { getNasaImage } from './components/nasaApi.js';

// display nasa image of the day in section one

function SectionOne() {
	return (
		<div>
			<img src={getNasaImage()} alt='nasa' />
		</div>
	);
}

export default SectionOne;
