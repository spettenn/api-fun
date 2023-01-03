import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Weather from '../components/weather';
/* import axios from 'axios'; */

const SectionSomething = styled.section`
	height: 100vh;
	background-color: orange;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function SectionThree() {
	return (
		<SectionSomething id='section_three'>
			<div className='font_container'>
				<a href='#section_two'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>

			<div className='section_three_main'>
				<Weather />
				<div id='weather-icon'></div>
			</div>

			<div className='font_container'>
				<a href='#section_four'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionSomething>
	);
}

export default SectionThree;
