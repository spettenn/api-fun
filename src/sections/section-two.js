import React from 'react';
import styled from 'styled-components';

/* import getEpicData from '../components/earth'; */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SectionFun = styled.section`
	height: 100vh;
	background-color: #333;
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
			<h1 className='section_two_title'>SECTION TWO</h1>
			<div className='font_container'>
				<a href='#section_three'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionFun>
	);
}

export default SectionTwo;
