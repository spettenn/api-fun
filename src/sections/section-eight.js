import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Sectioneight = styled.section`
	height: 100vh;
	background-color: purple;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function SectionEight() {
	return (
		<Sectioneight id='section_eight'>
			<div className='font_container'>
				<a href='#section_seven'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<h1 className='section_two_title'>
				SECTION EIGHT <br />
			</h1>
			<div className='font_container'>
				<a href='#'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</Sectioneight>
	);
}

export default SectionEight;
