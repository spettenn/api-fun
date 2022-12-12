/* import { getNasaImage } from './components/nasaApi'; */
import './App.css';
import SectionOne from './sections/section-one';

/* console.log(getNasaImage()); */
// getNasaImage() returns a promise, not the image url
// so we need to use async/await to get the image url
// async function App() {
// 	const image = await getNasaImage();
// 	return (
// 		<div>
// 			<img
// 				src
// 				alt='nasa'
// 			/>
// 		</div>
// 	);
// }

function App() {
	return (
		<div>
			{/* <img src={getNasaImage()} alt='nasa' /> */}
			<SectionOne />
			hello
		</div>
	);
}

export default App;
