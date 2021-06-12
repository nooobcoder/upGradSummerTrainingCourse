const generateAccessToken = (usernameInput, passwordInput) => {
	const timestamp = new Date().getTime();

	let username = usernameInput.value;
	let password = passwordInput.value;
	if (username.trim().length === 0 || password.trim().length === 0) {
		window.alert("Missing username and/or password!");
	} else {
		const encodedStuff = btoa(`${username}${password}${timestamp.toString()}`);
		window.alert("Access Token : " + encodedStuff);
	}
};
