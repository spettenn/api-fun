import React from 'react';
import styled from 'styled-components';
import parallaxTiltEffect from '../components/cardTwo.js';

/* import getEpicData from '../components/earth'; */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SectionFun = styled.section`
	height: 100vh;
	background-color: #212534;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function SectionTwo() {
	return (
		<SectionFun id='section_two'>
			<div className='font_container'>
				<a href='#section_one'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<h1 className='section_two_title'>
				SECTION TWO <br />
			</h1>
			<div className='section_two_main'>
				<parallaxTiltEffect />
				<div className='card'>This is a Card</div>
				<div className='flip-card'>
					<div className='flip-card-inner'>
						<div className='flip-card-front'>
							<h1>shaloom</h1>
						</div>
						<div className='flip-card-back'>
							<h1>John Doe</h1>
							<p>Architect & Engineer</p>
							<p>We love that guy</p>
						</div>
					</div>
				</div>
			</div>
			<div className='font_container'>
				<a href='#section_three'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionFun>
	);
}

export default SectionTwo;
