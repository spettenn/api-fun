import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import CountriesList from '../components/countries';

const Sectionsix = styled.section`
	height: 100vh;
	background-color: #212534;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function SectionSix() {
	return (
		<Sectionsix id='section_six'>
			<div className='font_container'>
				<a href='#section_five'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<h1 className='section_two_title'>
				<CountriesList />
			</h1>
			<div className='font_container'>
				<a href='#section_seven'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</Sectionsix>
	);
}

export default SectionSix;
