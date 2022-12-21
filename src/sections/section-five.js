import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const SectionDiez = styled.section`
	height: 100vh;
	background-color: darkblue;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    --x: calc(var(--posX, 0) * 1px);
    --y: calc(var(--posY, 0) * 1px);
    background-image: 
      linear-gradient(115deg, rgb(131, 143, 132), rgb(0 0 0)), 
      radial-gradient( 90% 100% at calc( 50% + var(--x)) calc( 0% + var(--y)), rgb(200 200 200), rgb(59, 7, 116)), 
      radial-gradient(100% 100% at calc( 80% - var(--x)) calc( 0% - var(--y)), rgb(219, 226, 20), rgb(036 000 000)), 
      radial-gradient(150% 210% at calc(100% + var(--x)) calc( 0% + var(--y)), rgb(13, 85, 62), rgb(73, 166, 180)), 
      radial-gradient(100% 100% at calc(100% - var(--x)) calc(30% - var(--y)), rgb(214, 74, 14), rgb(68, 99, 108)), 
      linear-gradient(60deg, rgb(181, 161, 161), rgb(62, 55, 89));
    background-blend-mode: overlay, overlay, difference, difference, difference, normal;
}
`;

function SectionFive() {
	document.body.addEventListener('pointermove', (e) => {
		const { currentTarget: el, clientX: x, clientY: y } = e;
		const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
		el.style.setProperty('--posX', x - l - w / 2);
		el.style.setProperty('--posY', y - t - h / 2);
	});

	return (
		<SectionDiez id='section_five'>
			<div className='font_container'>
				<a href='#section_four'>
					<FontAwesomeIcon className='icon' icon={faArrowUp} />
				</a>
			</div>
			<h1 className='section_two_title'>SECTION FIVE</h1>
			<div className='font_container'>
				<a href='#section_five'>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
				</a>
			</div>
		</SectionDiez>
	);
}

export default SectionFive;
