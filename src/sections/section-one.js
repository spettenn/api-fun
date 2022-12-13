import { getNasaData } from '../components/nasaApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
/* import Joke from '../components/joke'; */

const Title = styled.h1`
	text-align: center;
	margin-top: 0;
	font-size: 72px;
	background: -webkit-linear-gradient(#800000, #eee, #333);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
			<Title>{nasaData.title}</Title>
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
