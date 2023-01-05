import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { scrapeHeadlines } from '../components/vg';

const Sectionseven = styled.section`
	height: 100vh;
	background-color: green;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

scrapeHeadlines('https://www.vg.no/').then((headlines) => {
	console.log(headlines);
});

function SectionSeven() {
	return (
		<Sectionseven id='section_seven'>
			<div className='font_container'>
				<a href='#section_six'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<h1 className='section_two_title'>
				SECTION SEVEN <br />
			</h1>
			<div className='font_container'>
				<a href='#section_eight'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</Sectionseven>
	);
}

export default SectionSeven;
