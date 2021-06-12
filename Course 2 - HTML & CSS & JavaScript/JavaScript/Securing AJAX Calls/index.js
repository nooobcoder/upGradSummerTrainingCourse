const encodeStuff = (value) => window.btoa(value);

const handleSubmit = (email, password) => {
	console.log("Handling form submit!");
	console.log(email.value.toString(), password.value.toString());

	console.log("BASE64 ENCODED VALUES");
	console.table([
		{ encodedEmail: encodeStuff(email.value) },
		{ decodedEmail: window.atob(encodeStuff(email.value)) },
	]);
};
