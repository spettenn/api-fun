import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/form';
import Rocket from '../components/rocket';
const SectionQuatro = styled.section`
	height: 100vh;
	background-color: #333;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
`;

function SectionFour() {
	return (
		<SectionQuatro id='section_four'>
			<div className='font_container'>
				<a href='#section_three'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<Rocket />
			<div className='section_form_container'>
				<ContactForm />
			</div>
			<div className='font_container'>
				<a href='#section_five'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionQuatro>
	);
}

export default SectionFour;
