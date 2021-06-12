var xhr = new XMLHttpRequest();

const getCities = (inputTag) => {
	const countryName = inputTag.value;

	console.log(countryName);
	xhr.open("GET", `https://api.openaq.org/v1/cities?country=${countryName}`);
	xhr.send();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			console.log(JSON.parse(xhr.responseText));
		}
	};
};
