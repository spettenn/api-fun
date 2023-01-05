const URL_EPIC =
	'https://api.nasa.gov/EPIC/api/natural?api_key=6OFB5peji9YjZTwX5XFWDcfcD5jYEHp0ayuQhVLX';

export const getEpicData = async () => {
	const response = await fetch(URL_EPIC);
	return response.json();
};
