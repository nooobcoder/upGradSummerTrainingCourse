const REST_ENDPOINT = "https://api.openaq.org/v1/cities";

var xhr = new XMLHttpRequest();

const enterTheCode = (inputTag) => {
	const countryName = inputTag.value;

	console.log(countryName);
	xhr.open("GET", `${REST_ENDPOINT}?country=${countryName}`);
	xhr.send();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			const { results } = JSON.parse(xhr.responseText);
			document.getElementById(
				"city-list"
			).innerHTML = `<p>${results[0]["name"]}</p>`;
		}
	};
};
