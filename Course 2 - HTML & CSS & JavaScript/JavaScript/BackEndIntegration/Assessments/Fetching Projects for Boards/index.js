const REST_ENDPOINT = "https://api.openaq.org/v1/countries";

var xhr = new XMLHttpRequest();

const generateCountries = () => {
	xhr.open("GET", `${REST_ENDPOINT}`);
	xhr.send();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			const { results } = JSON.parse(xhr.responseText);
			let listOfCountries = "<p>Country Country Code";
			for (const country of results) {
				listOfCountries += `<p>${country.name} ${country.code}</p>`;
			}
			console.log(listOfCountries);
			document.getElementById("country_data").innerHTML = listOfCountries;
		}
	};
};
generateCountries();
