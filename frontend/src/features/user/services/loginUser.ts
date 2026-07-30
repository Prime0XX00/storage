const loginUserService = async () => {
	const res = await fetch("http://localhost:3000/api/user/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "m.thiede",
			password: "password",
		}),
	});
	const json = await res.json();
	return json;
};

export default loginUserService;
