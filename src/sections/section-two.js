import React from 'react';
import styled from 'styled-components';

import Clock from '../components/clock';
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
				<Clock />
			</h1>
			<div className='section_two_main'>
				<div class='card'>This is a Card</div>
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
