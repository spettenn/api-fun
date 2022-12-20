import { getNasaData } from '../components/nasaApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
/* import Joke from '../components/joke'; */
import LiveDate from '../components/date';

const Title = styled.h1`
	text-align: center;
	margin-top: 0;
	color: white;
`;

const SectionOne = () => {
	const [nasaData, setNasaData] = useState({});

	useEffect(() => {
		getNasaData().then((data) => {
			setNasaData(data);
		});
	}, []);

	const SectionNasa = styled.section`
		background: url(${nasaData.hdurl}) no-repeat center center/cover;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	/* console.log(Joke); */

	return (
		<SectionNasa id='section_one'>
			<div className='filler'></div>
			<div className='content'>
				<Title>{nasaData.title}</Title>
				<p className='desc'>{nasaData.explanation}</p>
				<LiveDate />
			</div>

			{/* <Joke /> */}
			<div className='font_container'>
				<a href='#section_two'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionNasa>
	);
};

export default SectionOne;
