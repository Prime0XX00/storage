import type { LoginData, User } from "../types";

const loginUserService = async (loginData: LoginData) => {
	const res = await fetch("http://localhost:3000/api/user/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: loginData.username,
			password: loginData.password,
		}),
	});
	if (res.ok) {
		const user = (await res.json()) as User;
		return user;
	} else {
		return undefined;
	}
};

export default loginUserService;
