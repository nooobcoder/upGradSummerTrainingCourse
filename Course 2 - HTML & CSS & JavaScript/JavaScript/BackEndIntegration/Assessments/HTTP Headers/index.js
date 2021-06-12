var xhr = new XMLHttpRequest();

const registerEmployee = (inputFirstName, inputRole) => {
	const requestParams = { name: inputFirstName.value, role: inputRole.value };

	xhr.open("POST", "https://reqres.in/api/users", true);
	console.log(requestParams);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.withCredentials = false;

	xhr.send(JSON.stringify(requestParams));

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 201) {
			const { id, createdAt } = JSON.parse(xhr.responseText);
			window.alert(`Employee with ID ${id} successfully registered!`);
		}
	};
};
